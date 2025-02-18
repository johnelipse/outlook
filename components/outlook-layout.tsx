"use client";

import type * as React from "react";

import { EmailList } from "./email-list";
import { ReadingPane } from "./reading-pane";
import { Welcome } from "./welcome";

export function OutlookLayout() {
  return (
    <div>
      <div>
        <div className="">
          <Welcome />
          {/* <EmailList /> */}
          {/* <ReadingPane /> */}
        </div>
      </div>
    </div>
  );
}
