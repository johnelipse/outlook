import { getInboxEmails, getSentEmails } from "@/actions/email";
import HeaderComponent from "@/components/Header-component";
import SideBarComp from "@/components/side-bar-comp";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

export default async function layout({ children }: { children: ReactNode }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }
  const emails = (await getInboxEmails()) || [];
  const sentEmails = (await getSentEmails()) || [];
  return (
    <div className="grid h-screen grid-cols-[auto,1fr] w-full">
      <SideBarComp inEmails={emails} sentEmails={sentEmails} />
      <div className="flex h-screen flex-col w-full overflow-y-auto">
        <HeaderComponent />
        <div>{children}</div>
      </div>
    </div>
  );
}
