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

// export function ReadingPane({ emailData }: { emailData: Email | null }) {
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
//                 <AvatarFallback>SN</AvatarFallback>
//               </Avatar>
//               <div>
//                 <div className="font-semibold">{emailData.senderEmail}</div>
//                 <div className="text-sm text-muted-foreground">
//                   sender@example.com
//                 </div>
//               </div>
//             </div>
//             <div className="text-sm text-muted-foreground">Today at 2:00AM</div>
//           </div>
//           <div className="mt-6 text-xl font-semibold">{emailData.subject}</div>
//           <div className="mt-8 text-muted-foreground">
//             <p
//               dangerouslySetInnerHTML={{ __html: emailData.message }}
//               className="mb-4"
//             />
//           </div>
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

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
import { Email } from "@prisma/client";

export function ReadingPane({
  emailData,
  isSentEmail,
}: {
  emailData: Email | null;
  isSentEmail: boolean;
}) {
  if (!emailData) {
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
                <AvatarFallback>
                  {emailData.senderEmail.slice(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div>
                <div className="font-semibold">{emailData.senderEmail}</div>
                <div className="text-sm text-muted-foreground">
                  {emailData.senderEmail}
                </div>
              </div>
            </div>
            <div className="text-sm text-muted-foreground">Today at 2:00AM</div>
          </div>
          <div className="mt-6 text-xl font-semibold">{emailData.subject}</div>
          <div className="mt-8 text-muted-foreground">
            <div
              dangerouslySetInnerHTML={{ __html: emailData.message }}
              className="mb-4"
            />
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
