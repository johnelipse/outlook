import { EmailList } from "@/components/email-list";
import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <div className="overflow-auto">
          <EmailList />
          {/* <ReadingPane /> */}
        </div>
      </div>
    </div>
  );
}
