"use server";

import { Resend } from "resend";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { authOptions } from "@/config/auth";
import { db } from "@/prisma/db";
import { ThankYouEmail } from "@/components/email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

type EmailData = {
  senderEmail: string;
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

  const { senderEmail, recieverEmail, subject } = data;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
      throw new Error("Unauthorized");
    }

    // Validate input
    if (!data.recieverEmail || !data.subject || !data.message) {
      throw new Error("Missing required fields");
    }
    await resend.emails.send({
      from: "OutLook  <jb@comedev.org>",
      to: data.recieverEmail,
      subject: `Message about: ${subject}`,
      react: ThankYouEmail({ senderEmail, recieverEmail, subject }),
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
    revalidatePath("/");
    return { success: true, data: createdEmail, status: 201 };
  } catch (error) {
    console.error("Failed to send email:", error);
    throw new Error(
      error instanceof Error ? error.message : "Failed to send email"
    );
  }
}

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

export async function deleteEmail(id: string) {
  try {
    await db.email.delete({
      where: {
        id,
      },
    });
    revalidatePath("/email-list");
    revalidatePath("/sent-emails");
    revalidatePath("/email");
    revalidatePath("/");
    return { ok: true };
  } catch (error) {
    console.log(error);
    return { ok: false };
  }
}
