"use client";
import { User, ChevronDown } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLinkItem,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LogoutBtn from "../../auth/views/logout-btn";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";

export function DropdownMenuAvatar() {
  const { data: user, isLoading } = useGetCurrentUser();

  const getInitials = () => {
    if (user?.username) return user.username.substring(0, 2).toUpperCase();
    if (user?.email) return user.email.substring(0, 2).toUpperCase();
    return "GU";
  };

  if (isLoading) {
    return (
      <div className="h-8 w-8 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
    );
  }
  if (!isLoading && !user) {
    return <div>some thing went wrong</div>;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 rounded-full px-3 hover:bg-muted/50">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={user?.userImage || "https://github.com/shadcn.png"}
            alt={user?.username || "avatar"}
          />
          <AvatarFallback className="bg-primary/10 text-primary">
            {getInitials()}
          </AvatarFallback>
        </Avatar>
        <div className="hidden text-left sm:block">
          <p className="text-sm font-medium">{user?.username || "Guest"}</p>
          <p className="text-xs text-muted-foreground">
            {user?.email || "No email"}
          </p>
        </div>
        <ChevronDown className="hidden h-4 w-4 text-muted-foreground sm:block" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-56">
        {/* User Info Header */}
        <div className="flex items-center gap-3 p-2">
          <Avatar className="h-10 w-10">
            <AvatarImage
              src={user?.userImage || "https://github.com/shadcn.png"}
              alt={user?.username || "avatar"}
            />
            <AvatarFallback className="bg-primary/10 text-primary">
              {getInitials()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="truncate text-sm font-semibold">
              {user?.username || "Guest"}
            </p>
            <p className="truncate text-xs text-muted-foreground">
              {user?.email || "No email"}
            </p>
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuGroup>
          <DropdownMenuLinkItem
            href="/profile"
            className="flex cursor-pointer items-center gap-2"
          >
            <User className="h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuLinkItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="p-0">
          <LogoutBtn />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
