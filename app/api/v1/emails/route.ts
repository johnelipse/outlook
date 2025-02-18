import { db } from "@/prisma/db";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { senderEmail, recieverEmail, message, userId } = await req.json();
  const existingUser = await db.user.findUnique({
    where: {
      email: recieverEmail,
    },
  });
  if (!existingUser) {
    return NextResponse.json(
      {
        error: "The email entered is not signed on outlook",
      },
      { status: 409 }
    );
  }
  console.log({
    senderEmail,
    recieverEmail,
    message,
    userId: existingUser?.id,
  });

  return NextResponse.json(
    {
      senderEmail,
      recieverEmail,
      message,
      userId: existingUser?.id,
    },
    { status: 201 }
  );
}
