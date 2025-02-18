"use client";
import React from "react";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {
  Archive,
  Calendar,
  Clock,
  Contact2,
  FileText,
  Inbox,
  Mail,
  Settings,
  Star,
  Trash2,
  User2,
} from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { Email } from "@prisma/client";
import { Badge } from "./ui/badge";

const topLinks = [
  {
    link: "#",
    name: "Mail",
    icon: <Mail className="h-4 w-4" />,
  },
  {
    link: "#",
    name: "Calendar",
    icon: <Calendar className="h-4 w-4" />,
  },
  {
    link: "#",
    name: "Contacts",
    icon: <Contact2 className="h-4 w-4" />,
  },
  {
    link: "#",
    name: "Tasks",
    icon: <FileText className="h-4 w-4" />,
  },
];
const folderLinks = [
  {
    link: "/email-list",
    name: "Inbox",
    icon: <Inbox className="h-4 w-4" />,
    number: "",
  },
  {
    link: "/sent-emails",
    name: "Sent",
    icon: <Clock className="h-4 w-4" />,
    number: "",
  },
  {
    link: "#",
    name: "Snoozed",
    icon: <Clock className="h-4 w-4" />,
  },
  {
    link: "#",
    name: "Archive",
    icon: <Archive className="h-4 w-4" />,
  },
  {
    link: "#",
    name: "Starred",
    icon: <Star className="h-4 w-4" />,
  },
  {
    link: "#",
    name: "Trash",
    icon: <Trash2 className="h-4 w-4" />,
  },
];

export default function SideBarComp({
  inEmails,
  sentEmails,
}: {
  inEmails: Email[];
  sentEmails: Email[];
}) {
  const inboxCount = inEmails.length;
  const sentCount = sentEmails.length;
  const pathname = usePathname();
  return (
    <Sidebar>
      <SidebarHeader className="border-b bg-blue-600 text-white p-2">
        <SidebarTrigger />
        <div className="flex items-center gap-2 px-2">
          <User2 className="h-6 w-6" />
          <div className="flex-1 text-sm font-semibold">Outlook</div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Settings className="h-4 w-4" />
            <span className="sr-only">Settings</span>
          </Button>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {topLinks.map((link, i) => {
                const url = link.link;
                const isActive = pathname === url;
                return (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className={`${
                        isActive ? "bg-gray-100 dark:bg-blue-900" : ""
                      }`}
                      asChild
                    >
                      <Link key={i} href={link.link}>
                        {link.icon}
                        <span>{link.name}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Folders</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {folderLinks.map((link, i) => {
                const url = link.link;
                const isActive = pathname === url;
                let count;
                if (link.name === "Inbox") {
                  count = inboxCount;
                } else if (link.name === "Sent") {
                  count = sentCount;
                }
                return (
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      className={`${
                        isActive ? "bg-gray-100 dark:bg-blue-900" : ""
                      }`}
                      asChild
                    >
                      <Link
                        className="flex justify-between items-center"
                        key={i}
                        href={link.link}
                      >
                        <div className="flex items-center gap-2">
                          {link.icon}
                          <span>{link.name}</span>
                        </div>
                        {link.number && (
                          <Badge className="w-4 h-4 rounded-full flex items-center justify-center">
                            {count}
                          </Badge>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="border-t p-2">
        <ModeToggle />
      </SidebarFooter>
    </Sidebar>
  );
}
