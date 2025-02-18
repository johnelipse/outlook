// import {
//   Archive,
//   Forward,
//   MoreHorizontal,
//   Reply,
//   ReplyAll,
//   Star,
//   Trash2,
// } from "lucide-react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import { Separator } from "@/components/ui/separator";
// import { Email } from "@prisma/client";

// export function ReadingPane({
//   emailData,
//   isSentEmail,
// }: {
//   emailData: Email | null;
//   isSentEmail: boolean;
// }) {
//   if (!emailData) {
//     return (
//       <div className="flex flex-col fixed top-[9%] left-[49%] w-[50%] items-center justify-center p-8">
//         <div className="text-muted-foreground">No email selected</div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col fixed top-[9%] left-[49%] w-[50%] ">
//       <div className="flex items-center justify-between border-b px-6 py-3">
//         <div className="flex items-center gap-4">
//           <Button variant="ghost" size="icon">
//             <Reply className="h-4 w-4" />
//             <span className="sr-only">Reply</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <ReplyAll className="h-4 w-4" />
//             <span className="sr-only">Reply all</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Forward className="h-4 w-4" />
//             <span className="sr-only">Forward</span>
//           </Button>
//           <Separator orientation="vertical" className="h-6" />
//           <Button variant="ghost" size="icon">
//             <Archive className="h-4 w-4" />
//             <span className="sr-only">Archive</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Trash2 className="h-4 w-4" />
//             <span className="sr-only">Delete</span>
//           </Button>
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon">
//             <Star className="h-4 w-4" />
//             <span className="sr-only">Star</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <MoreHorizontal className="h-4 w-4" />
//             <span className="sr-only">More</span>
//           </Button>
//         </div>
//       </div>
//       <ScrollArea className="flex-1">
//         <div className="p-6">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <Avatar>
//                 <AvatarImage src="/placeholder.svg" />
//                 <AvatarFallback>
//                   {emailData.senderEmail.slice(0, 2).toUpperCase()}
//                 </AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-semibold">{emailData.senderEmail}</div>
//                 <div className="text-sm text-muted-foreground">
//                   {emailData.senderEmail}
//                 </div>
//               </div>
//             </div>
//             <div className="text-sm text-muted-foreground">Today at 2:00AM</div>
//           </div>
//           <div className="mt-6 text-xl font-semibold">{emailData.subject}</div>
//           <div className="mt-8 text-muted-foreground">
//             <div
//               dangerouslySetInnerHTML={{ __html: emailData.message }}
//               className="mb-4"
//             />
//           </div>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

"use client";

import {
  Archive,
  Forward,
  MoreHorizontal,
  Reply,
  ReplyAll,
  Star,
  Trash2,
  Clock,
  Mail,
  Tag,
  Users,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Email } from "@prisma/client";
import { Session } from "next-auth";

export function ReadingPane({
  emailData,
  isSentEmail,
  user,
}: {
  emailData: Email | null;
  isSentEmail: boolean;
  user: Session | null;
}) {
  if (!emailData) {
    return (
      <div className="flex flex-col fixed top-[9%] left-[49%] w-[50%] h-[91vh] bg-gray-50 items-center justify-center p-8">
        <Mail className="h-16 w-16 text-gray-300 mb-4" />
        <div className="text-muted-foreground text-lg">
          Select an email to view
        </div>
        <p className="text-sm text-gray-500 mt-2">
          Choose a message from your inbox to read it here
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col fixed top-[9%] left-[49%] w-[50%] h-[91vh] bg-white border-l">
      {/* Action Bar */}
      <div className="flex items-center justify-between border-b px-6 py-4 bg-white shadow-sm">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Reply className="h-4 w-4" />
            <span className="sr-only">Reply</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <ReplyAll className="h-4 w-4" />
            <span className="sr-only">Reply all</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Forward className="h-4 w-4" />
            <span className="sr-only">Forward</span>
          </Button>
          <Separator orientation="vertical" className="h-6 mx-2" />
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Archive className="h-4 w-4" />
            <span className="sr-only">Archive</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <Star className="h-4 w-4" />
            <span className="sr-only">Star</span>
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-100">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </div>
      </div>

      {/* Email Content */}
      <ScrollArea className="flex-1 px-8">
        <div className="max-w-3xl mx-auto py-6">
          {/* Email Header */}
          <div className="space-y-4">
            <h1 className="text-2xl font-semibold tracking-tight">
              {emailData.subject}
            </h1>

            <div className="flex items-start gap-4 pt-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback className="bg-blue-100 text-blue-600">
                  {emailData.senderEmail.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 space-y-1">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-medium">{emailData.senderEmail}</div>
                    <div className="text-sm text-muted-foreground flex items-center gap-2">
                      <span>to</span>
                      <Users className="h-3 w-3" />
                      {emailData.recieverEmail == user?.user.email ? (
                        <span>me</span>
                      ) : (
                        <span className="text-xs">
                          {emailData.recieverEmail}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    <span>Today at 2:00 AM</span>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Email Body */}
            <div className="prose prose-gray max-w-none">
              <div
                dangerouslySetInnerHTML={{ __html: emailData.message }}
                className="text-gray-700 leading-relaxed"
              />
            </div>

            {/* Email Footer */}
            <div className="mt-8 pt-6">
              <div className="flex items-center gap-4">
                <Button className="bg-blue-50 text-blue-600 hover:bg-blue-100">
                  <Reply className="h-4 w-4 mr-2" />
                  Reply
                </Button>
                <Button variant="ghost" className="text-gray-600">
                  <Forward className="h-4 w-4 mr-2" />
                  Forward
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
