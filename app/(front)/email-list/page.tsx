import { getInboxEmails } from "@/actions/email";
import { EmailList } from "@/components/email-list";
import React from "react";

export default async function page() {
  const emails = (await getInboxEmails()) || [];
  return (
    <div>
      <div>
        <div className="overflow-auto">
          <EmailList inboxEmails={emails} />
          {/* <ReadingPane /> */}
        </div>
      </div>
    </div>
  );
}
