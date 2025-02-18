import {
  Archive,
  Forward,
  MoreHorizontal,
  Reply,
  ReplyAll,
  Star,
  Trash2,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface Email {
  id: string;
  sender: string;
  subject: string;
  time: string;
  preview: string;
  isStarred: boolean;
}

const emails: Email[] = [
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

export function ReadingPane({ id }: { id: string }) {
  const email = emails.find((email) => email.id === id);

  if (!email) {
    return (
      <div className="flex flex-col fixed top-[9%] left-[49%] w-[50%] items-center justify-center p-8">
        <div className="text-muted-foreground">No email selected</div>
      </div>
    );
  }
  return (
    <div className="flex flex-col fixed top-[9%] left-[49%] w-[50%] ">
      <div className="flex items-center justify-between border-b px-6 py-3">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Reply className="h-4 w-4" />
            <span className="sr-only">Reply</span>
          </Button>
          <Button variant="ghost" size="icon">
            <ReplyAll className="h-4 w-4" />
            <span className="sr-only">Reply all</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Forward className="h-4 w-4" />
            <span className="sr-only">Forward</span>
          </Button>
          <Separator orientation="vertical" className="h-6" />
          <Button variant="ghost" size="icon">
            <Archive className="h-4 w-4" />
            <span className="sr-only">Archive</span>
          </Button>
          <Button variant="ghost" size="icon">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Star className="h-4 w-4" />
            <span className="sr-only">Star</span>
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>
      <ScrollArea className="flex-1">
        <div className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Avatar>
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>SN</AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{email.sender}</div>
                <div className="text-sm text-muted-foreground">
                  sender@example.com
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Today at {email.time}
            </div>
          </div>
          <div className="mt-6 text-xl font-semibold">{email.subject}</div>
          <div className="mt-8 text-muted-foreground">
            <p className="mb-4">{email.preview}</p>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
