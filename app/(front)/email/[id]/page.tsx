import { getInboxEmails, getSentEmails, getSingleEmail } from "@/actions/email";
import { EmailList } from "@/components/email-list";
import { ReadingPane } from "@/components/reading-pane";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const emails = (await getInboxEmails()) || [];
  const sentEmails = (await getSentEmails()) || [];
  const email = await getSingleEmail(id);
  const isViewedEmailFromSent = sentEmails.some(
    (mail) => mail.id === email?.id
  );
  return (
    <div>
      <div>
        <div className="grid flex-1 grid-cols-[350px,1fr] w-[80%] overflow-auto">
          <EmailList
            sentEmails={isViewedEmailFromSent ? sentEmails : undefined}
            inboxEmails={!isViewedEmailFromSent ? emails : undefined}
          />
          <div className="pl-[16rem]">
            <ReadingPane
              isSentEmail={isViewedEmailFromSent}
              emailData={email}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
