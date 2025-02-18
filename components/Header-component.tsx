import React from "react";
import { ChevronDown, MoreHorizontal, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function HeaderComponent() {
  return (
    <header className="border-b fixed top-0 w-[80%] bg-background px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Email
          </Button>
          <div className="flex items-center gap-2">
            <Input
              className="w-[300px]"
              placeholder="Search mail..."
              type="search"
            />
            <Button variant="ghost" size="icon">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm">
            Focused
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">More actions</span>
          </Button>
        </div>
      </div>
    </header>
  );
}
