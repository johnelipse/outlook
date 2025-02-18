import { EmailList } from "@/components/email-list";
import { ReadingPane } from "@/components/reading-pane";
import React from "react";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <div>
      <div>
        <div className="grid flex-1 grid-cols-[350px,1fr] w-[80%] overflow-auto">
          <EmailList />
          <div className="pl-[16rem]">
            <ReadingPane id={id} />
          </div>
        </div>
      </div>
    </div>
  );
}
