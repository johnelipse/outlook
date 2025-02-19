import React from "react";
import { ChevronDown, Mail, MoreHorizontal, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HeaderComponent() {
  return (
    <header className="border-b fixed top-0 w-[81%] z-50 bg-blue-600 text-white px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button className="bg-white hover:bg-white text-black" asChild>
            <Link href="/create-email">
              <Mail className="mr-2 h-4 w-4" />
              New Email
            </Link>
          </Button>
          <div className="flex items-center gap-0">
            <Input
              className="w-[300px] border-none outline-none rounded-r-none bg-white"
              placeholder="Search mail..."
              type="search"
            />
            <Button
              variant="default"
              className="bg-white rounded-l-none text-black hover:bg-white"
              size="icon"
            >
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            className="hover:bg-transparent hover:text-white"
            variant="ghost"
            size="sm"
          >
            Focused
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            className="hover:bg-transparent hover:text-white"
            variant="ghost"
            size="icon"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More actions</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
