import EmailForm from "@/components/email-form";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page() {
  const user = await getServerSession(authOptions);
  return (
    <div className="pt-24">
      <EmailForm userData={user} />
    </div>
  );
}
