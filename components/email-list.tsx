// // "use client";

// // import { Archive, MoreHorizontal, Star, Trash2 } from "lucide-react";
// // import { Button } from "@/components/ui/button";
// // import { ScrollArea } from "@/components/ui/scroll-area";
// // import Link from "next/link";
// // import { Email } from "@prisma/client";
// // import { usePathname } from "next/navigation";

// // export function EmailList({
// //   sentEmails,
// //   inboxEmails,
// // }: {
// //   sentEmails?: Email[];
// //   inboxEmails?: Email[];
// // }) {
// //   const emails = sentEmails || inboxEmails;
// //   const isSentFolder = Boolean(sentEmails);
// //   const pathname = usePathname();

// //   if (!emails?.length) {
// //     return (
// //       <div className="flex fixed left-[18.5%] w-[30%] top-[9%] flex-col border-r">
// //         <div className="flex items-center justify-between border-b px-4 py-2">
// //           <div className="text-sm font-medium">
// //             {isSentFolder ? "Sent" : "Inbox"}
// //           </div>
// //           <div className="flex items-center gap-2">
// //             <Button variant="ghost" size="icon">
// //               <Archive className="h-4 w-4" />
// //               <span className="sr-only">Archive</span>
// //             </Button>
// //             <Button variant="ghost" size="icon">
// //               <Trash2 className="h-4 w-4" />
// //               <span className="sr-only">Delete</span>
// //             </Button>
// //             <Button variant="ghost" size="icon">
// //               <MoreHorizontal className="h-4 w-4" />
// //               <span className="sr-only">More</span>
// //             </Button>
// //           </div>
// //         </div>
// //         <div className="flex flex-col items-center justify-center flex-1 p-8">
// //           <p className="text-muted-foreground text-sm">No messages available</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex fixed left-[18.5%] w-[30%] top-[9%] flex-col border-r">
// //       <div className="flex items-center justify-between border-b px-4 py-2">
// //         <div className="text-sm font-medium">
// //           {isSentFolder ? "Sent" : "Inbox"}
// //         </div>
// //         <div className="flex items-center gap-2">
// //           <Button variant="ghost" size="icon">
// //             <Archive className="h-4 w-4" />
// //             <span className="sr-only">Archive</span>
// //           </Button>
// //           <Button variant="ghost" size="icon">
// //             <Trash2 className="h-4 w-4" />
// //             <span className="sr-only">Delete</span>
// //           </Button>
// //           <Button variant="ghost" size="icon">
// //             <MoreHorizontal className="h-4 w-4" />
// //             <span className="sr-only">More</span>
// //           </Button>
// //         </div>
// //       </div>
// //       <ScrollArea className="flex-1">
// //         {emails.map((email, i) => {
// //           const url = `/email/${email.id}`;
// //           const isActive = pathname === url;
// //           return (
// //             <Link
// //               href={`/email/${email.id}`}
// //               key={i}
// //               className={`flex cursor-pointer flex-col gap-1 border-b px-4 py-3 hover:bg-muted/50 ${
// //                 isActive
// //                   ? "bg-gray-200 flex cursor-pointer flex-col gap-1 border-b px-4 py-3 hover:bg-muted/50"
// //                   : "flex cursor-pointer flex-col gap-1 border-b px-4 py-3 hover:bg-muted/50"
// //               }`}
// //             >
// //               <div className="flex items-center justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <div className="font-semibold">{email.senderEmail}</div>
// //                   <Star className="h-4 w-4 text-yellow-500" />
// //                 </div>
// //                 <div className="text-xs text-muted-foreground">2:00AM</div>
// //               </div>
// //               <div className="font-medium">{email.subject}</div>
// //               <div
// //                 dangerouslySetInnerHTML={{ __html: email.message }}
// //                 className="line-clamp-2 text-sm text-muted-foreground"
// //               />
// //             </Link>
// //           );
// //         })}
// //       </ScrollArea>
// //     </div>
// //   );
// // }

// "use client";

// import { Archive, MoreHorizontal, Star, Trash2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { ScrollArea } from "@/components/ui/scroll-area";
// import Link from "next/link";
// import { Email } from "@prisma/client";
// import { usePathname, useRouter } from "next/navigation";
// import { deleteEmail } from "@/actions/email";
// import toast from "react-hot-toast";

// export function EmailList({
//   sentEmails,
//   inboxEmails,
// }: {
//   sentEmails?: Email[];
//   inboxEmails?: Email[];
// }) {
//   const emails = sentEmails || inboxEmails;
//   const isSentFolder = Boolean(sentEmails);
//   const pathname = usePathname();
//   const router = useRouter();
//   async function deletedEmail(id: string) {
//     try {
//       const res = await deleteEmail(id);
//       if (res.ok) {
//         toast.success("Email deleted successfully");
//         router.refresh();
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong.");
//     }
//   }

//   if (!emails?.length) {
//     return (
//       <div className="flex h-full w-[30%] fixed left-[18.5%] top-[9%] flex-col border-r">
//         <div className="flex items-center justify-between border-b px-4 py-2">
//           <div className="text-sm font-medium">
//             {isSentFolder ? "Sent" : "Inbox"}
//           </div>
//           <div className="flex items-center gap-2">
//             <Button variant="ghost" size="icon">
//               <Archive className="h-4 w-4" />
//               <span className="sr-only">Archive</span>
//             </Button>
//             <Button variant="ghost" size="icon">
//               <Trash2 className="h-4 w-4" />
//               <span className="sr-only">Delete</span>
//             </Button>
//             <Button variant="ghost" size="icon">
//               <MoreHorizontal className="h-4 w-4" />
//               <span className="sr-only">More</span>
//             </Button>
//           </div>
//         </div>
//         <div className="flex flex-col items-center justify-center flex-1 p-8">
//           <p className="text-muted-foreground text-sm">No messages available</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex h-[91vh] w-[30%] fixed left-[18.5%] top-[9%] flex-col border-r">
//       <div className="flex items-center justify-between border-b px-4 py-2">
//         <div className="text-sm font-medium">
//           {isSentFolder ? "Sent" : "Inbox"}
//         </div>
//         <div className="flex items-center gap-2">
//           <Button variant="ghost" size="icon">
//             <Archive className="h-4 w-4" />
//             <span className="sr-only">Archive</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <Trash2 className="h-4 w-4" />
//             <span className="sr-only">Delete</span>
//           </Button>
//           <Button variant="ghost" size="icon">
//             <MoreHorizontal className="h-4 w-4" />
//             <span className="sr-only">More</span>
//           </Button>
//         </div>
//       </div>
//       <ScrollArea className="flex-1">
//         {emails.map((email, i) => {
//           const url = `/email/${email.id}`;
//           const isActive = pathname === url;
//           return (
//             <Link
//               href={`/email/${email.id}`}
//               key={i}
//               className={`flex relative cursor-pointer flex-col gap-1 border-b px-4 py-3 hover:bg-none ${
//                 isActive ? "bg-gray-200" : ""
//               }`}
//             >
//               <div className="flex items-center justify-between">
//                 <div className="flex items-center gap-2">
//                   <div className="font-semibold">{email.senderEmail}</div>
//                   <Star className="h-4 w-4 text-yellow-500" />
//                 </div>
//                 <div className="text-xs text-muted-foreground">2:00AM</div>
//               </div>
//               <div className="font-medium">{email.subject}</div>
//               <div
//                 dangerouslySetInnerHTML={{ __html: email.message }}
//                 className="line-clamp-2 text-sm text-muted-foreground"
//               />
//               <div className="flex justify-end">
//                 <button className="absolute bottom-0 right-0 z-30">
//                   <Trash2 className="w-4 h-4" />
//                 </button>
//               </div>
//             </Link>
//           );
//         })}
//       </ScrollArea>
//     </div>
//   );
// }

"use client";

import type React from "react";

import { Archive, Loader, MoreHorizontal, Star, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import type { Email } from "@prisma/client";
import { usePathname, useRouter } from "next/navigation";
import { deleteEmail } from "@/actions/email";
import toast from "react-hot-toast";
import { useState } from "react";

export function EmailList({
  sentEmails,
  inboxEmails,
}: {
  sentEmails?: Email[];
  inboxEmails?: Email[];
}) {
  const emails = sentEmails || inboxEmails;
  const isSentFolder = Boolean(sentEmails);
  const pathname = usePathname();
  const router = useRouter();
  const [hoveredEmailId, setHoveredEmailId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  async function handleDeleteEmail(id: string, e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    try {
      setLoading(true);
      const res = await deleteEmail(id);
      if (res.ok) {
        toast.success("Email deleted successfully");
        setLoading(false);
        router.refresh();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
      setLoading(false);
    }
  }

  if (!emails?.length) {
    return (
      <div className="flex h-full w-[30%] fixed left-[18.5%] top-[9%] flex-col border-r">
        <div className="flex items-center justify-between border-b px-4 py-2">
          <div className="text-sm font-medium">
            {isSentFolder ? "Sent" : "Inbox"}
          </div>
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
        <div className="flex flex-col items-center justify-center flex-1 p-8">
          <p className="text-muted-foreground text-sm">No messages available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[91vh] w-[30%] fixed left-[18.5%] top-[9%] flex-col border-r">
      <div className="flex items-center justify-between border-b px-4 py-2">
        <div className="text-sm font-medium">
          {isSentFolder ? "Sent" : "Inbox"}
        </div>
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
        {emails.map((email, i) => {
          const url = `/email/${email.id}`;
          const isActive = pathname === url;
          return (
            <Link
              href={url}
              key={i}
              className={`flex relative cursor-pointer flex-col gap-1 border-b px-4 py-3 hover:bg-muted/50 group ${
                isActive ? "bg-gray-200" : ""
              }`}
              onMouseEnter={() => setHoveredEmailId(email.id)}
              onMouseLeave={() => setHoveredEmailId(null)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="font-semibold">{email.senderEmail}</div>
                  <Star className="h-4 w-4 text-yellow-500" />
                </div>
                <div className="text-xs text-muted-foreground">2:00AM</div>
              </div>
              <div className="font-medium">{email.subject}</div>
              <div
                dangerouslySetInnerHTML={{ __html: email.message }}
                className="line-clamp-2 text-sm text-muted-foreground"
              />
              <button
                onClick={(e) => handleDeleteEmail(email.id, e)}
                className={`absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-red-500 text-white opacity-0 transition-opacity duration-200 
                ${
                  hoveredEmailId === email.id ? "opacity-100" : ""
                } group-hover:opacity-100 md:block hidden`}
              >
                {loading ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={(e) => handleDeleteEmail(email.id, e)}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-red-500 text-white md:hidden block"
              >
                {loading ? (
                  <Loader className="w-4 h-4 animate-spin" />
                ) : (
                  <Trash2 className="w-4 h-4" />
                )}
              </button>
            </Link>
          );
        })}
      </ScrollArea>
    </div>
  );
}
