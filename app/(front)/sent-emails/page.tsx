import { getSentEmails } from "@/actions/email";
import { EmailList } from "@/components/email-list";
import React from "react";

export default async function page() {
  const emails = (await getSentEmails()) || [];
  return (
    <div>
      <div>
        <div className="overflow-auto">
          {/* <SentEmailList sentEmails={emails} /> */}
          <EmailList sentEmails={emails} />
          {/* <ReadingPane /> */}
        </div>
      </div>
    </div>
  );
}
