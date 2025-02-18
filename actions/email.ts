"use server";

import { Resend } from "resend";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailData = {
  recieverEmail: string;
  subject: string;
  message: string;
};

export async function sendEmail(data: EmailData) {
  const existingUser = await db.user.findUnique({
    where: {
      email: data.recieverEmail,
    },
  });
  if (!existingUser) {
    return {
      error: "The email entered is not signed on outlook",
      status: 409,
    };
  }
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      throw new Error("Unauthorized");
    }

    // Validate input
    if (!data.recieverEmail || !data.subject || !data.message) {
      throw new Error("Missing required fields");
    }

    // Handle attachments if present
    // const attachments = data.attachments
    //   ? await Promise.all(
    //       data.attachments.map(async (file) => ({
    //         filename: file.name,
    //         content: await file.arrayBuffer(),
    //       }))
    //     )
    //   : [];

    // Send email using Resend
    const result = await resend.emails.send({
      from: `${session.user.name} <${session.user.email}>`,
      to: data.recieverEmail,
      subject: data.subject,
      html: data.message,
    });

    // Store in database
    const createdEmail = await db.email.create({
      data: {
        senderEmail: session.user.email,
        recieverEmail: data.recieverEmail,
        subject: data.subject,
        message: data.message,
        status: "SENT",
        type: "SENT",
        userId: session.user.id,
      },
    });
    revalidatePath("/email-list");
    revalidatePath("/sent-emails");
    revalidatePath("/email");
    return { success: true, data: createdEmail, status: 201 };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to send email"
    );
  }
}

// export async function getEmails(type: "INBOX" | "SENT" | "DRAFT") {
//   const session = await getServerSession(authOptions);
//   if (!session?.user?.email) {
//     throw new Error("Unauthorized");
//   }

//   return prisma.email.findMany({
//     where: {
//       OR: [
//         { userId: session.user.id, type },
//         { to: { has: session.user.email }, type: "INBOX" },
//       ],
//     },
//     orderBy: { createdAt: "desc" },
//   });
// }

export async function getSentEmails() {
  const session = await getServerSession(authOptions);
  try {
    const sentEmails = await db.email.findMany({
      where: {
        userId: session?.user.id,
        senderEmail: session?.user.email as string,
        type: "SENT",
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return sentEmails;
  } catch (error) {
    console.log(error);
  }
}

export async function getInboxEmails() {
  const session = await getServerSession(authOptions);
  try {
    const sentEmails = await db.email.findMany({
      where: {
        recieverEmail: session?.user.email as string,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return sentEmails;
  } catch (error) {
    console.log(error);
  }
}
export async function getSingleEmail(id: string) {
  try {
    const email = await db.email.findUnique({
      where: {
        id,
      },
    });
    return email;
  } catch (error) {
    console.log(error);
    return null;
  }
}
