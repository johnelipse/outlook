import { Archive, MoreHorizontal, Star, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";

const emails = [
  {
    id: "1",
    sender: "John Doe",
    subject: "Meeting Reminder",
    time: "9:00 AM",
    preview: "Don't forget about our meeting scheduled for tomorrow at 10 AM.",
    isStarred: true,
  },
  {
    id: "2",
    sender: "Jane Smith",
    subject: "Project Update",
    time: "10:30 AM",
    preview:
      "The latest updates on the project are now available. Please review them.",
    isStarred: false,
  },
  {
    id: "3",
    sender: "Mike Johnson",
    subject: "Invoice for Services",
    time: "11:15 AM",
    preview: "Attached is the invoice for the services provided last month.",
    isStarred: true,
  },
  {
    id: "4",
    sender: "Emily Brown",
    subject: "Lunch Plans?",
    time: "1:00 PM",
    preview: "Hey! Are you available for lunch today? Let me know!",
    isStarred: false,
  },
  {
    id: "5",
    sender: "David Wilson",
    subject: "Weekly Report Submission",
    time: "2:45 PM",
    preview: "Please submit your weekly report by EOD today. Thanks!",
    isStarred: true,
  },
];

export function EmailList() {
  return (
    <div className="flex fixed left-[18.5%] w-[30%] top-[9%] flex-col border-r">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="text-sm font-medium">Inbox</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
            <span className="sr-only">Archive</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        {emails.map((email, i) => (
          <Link
            href={`/email/${email.id}`}
            key={i}
            className="flex cursor-pointer flex-col gap-1 border-b px-4 py-3 hover:bg-muted/50"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="font-semibold">{email.sender}</div>
                {email.isStarred && (
                  <Star className="h-4 w-4 text-yellow-500" />
                )}
              </div>
              <div className="text-xs text-muted-foreground">{email.time}</div>
            </div>
            <div className="font-medium">{email.subject}</div>
            <div className="line-clamp-2 text-sm text-muted-foreground">
              {email.preview}
            </div>
          </Link>
        ))}
      </ScrollArea>
    </div>
  );
}
