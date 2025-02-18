import { getInboxEmails, getSentEmails, getSingleEmail } from "@/actions/email";
import { EmailList } from "@/components/email-list";
import { ReadingPane } from "@/components/reading-pane";
import { authOptions } from "@/config/auth";
import { getServerSession } from "next-auth";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const emails = (await getInboxEmails()) || [];
  const user = await getServerSession(authOptions);
  const sentEmails = (await getSentEmails()) || [];
  const email = await getSingleEmail(id);
  const isViewedEmailFromSent = sentEmails.some(
    (mail) => mail.id === email?.id
  );
  return (
    <div>
      <div>
        <div className="grid grid-cols-[350px,1fr] h-[calc(100vh-4rem)]">
          <EmailList
            sentEmails={isViewedEmailFromSent ? sentEmails : undefined}
            inboxEmails={!isViewedEmailFromSent ? emails : undefined}
          />
          <div className="pl-[16rem]">
            <ReadingPane
              user={user}
              isSentEmail={isViewedEmailFromSent}
              emailData={email}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
