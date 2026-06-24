"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Bell,
  Clock,
  Calendar,
  CreditCard,
  UserCheck,
  Settings,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useGetAllNotifications } from "../hooks/useGetAllNotifications";
import transformingTheDateToATextString from "../../../../utils/transformingTheDateToATextString";
import { useUpdateNotificationsRead } from "../hooks/useUpdateNotificationsRead";

const NOTIFICATION_STYLES: Record<
  string,
  { icon: typeof Bell; iconClass: string; bgClass: string }
> = {
  BOOKING: {
    icon: Calendar,
    iconClass: "text-blue-600",
    bgClass: "bg-blue-50",
  },
  PAYMENT: {
    icon: CreditCard,
    iconClass: "text-green-600",
    bgClass: "bg-green-50",
  },
  PROVIDER_REQUEST: {
    icon: UserCheck,
    iconClass: "text-gray-500",
    bgClass: "bg-gray-50",
  },
  SYSTEM: {
    icon: Settings,
    iconClass: "text-gray-500",
    bgClass: "bg-gray-50",
  },
};

const NotificationButton = () => {
  const { data: notifications, isLoading } = useGetAllNotifications();
  const [open, setOpen] = useState(false);
  const { mutate: handleReadNotifications } = useUpdateNotificationsRead();

  if (isLoading || !notifications) {
    return (
      <Button variant="ghost" size="icon" className="relative" disabled>
        <Bell className="h-5 w-5 text-gray-400" />
      </Button>
    );
  }

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative rounded-lg hover:bg-gray-50"
          onClick={handleReadNotifications}
        >
          <Bell className="h-5 w-5 text-gray-600" />
          {unreadCount > 0 && (
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-4.5 h-4.5 text-[10px] font-medium text-white bg-red-500 rounded-full ring-2 ring-white">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>

      <PopoverContent
        className="w-100 p-0 rounded-xl border-gray-100 shadow-xl mr-4"
        align="end"
        sideOffset={8}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-gray-100">
          <div className="flex items-center gap-2">
            <h3 className="font-medium ">Notifications</h3>
            {unreadCount > 0 && (
              <span className="text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full">
                {unreadCount} new
              </span>
            )}
          </div>
        </div>

        {/* List */}
        <div className="max-h-105 overflow-y-auto">
          {notifications.length === 0 ? (
            <div className="py-12 text-center">
              <Bell className="h-10 w-10 text-gray-200 mx-auto mb-3" />
              <p className="text-sm text-gray-400">No notifications</p>
            </div>
          ) : (
            notifications.map((notification) => {
              const {
                icon: Icon,
                iconClass,
                bgClass,
              } = NOTIFICATION_STYLES[notification.type];

              return (
                <div
                  key={notification.id}
                  className={cn(
                    "flex gap-3 px-5 py-3.5 border-b border-gray-50 last:border-b-0 hover:bg-gray-50/50 transition-colors",
                    !notification.isRead && "bg-blue-50/30",
                  )}
                >
                  <div
                    className={cn(
                      "h-8.5 w-8.5 rounded-full flex items-center justify-center shrink-0",
                      bgClass,
                    )}
                  >
                    <Icon className={cn("h-4 w-4", iconClass)} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p
                        className={cn(
                          "text-sm",
                          !notification.isRead
                            ? "font-medium text-gray-900"
                            : "font-medium text-gray-500",
                        )}
                      >
                        {notification.title}
                      </p>
                      {!notification.isRead && (
                        <span className="h-1.5 w-1.5 rounded-full bg-blue-500 shrink-0" />
                      )}
                    </div>
                    <p className="text-sm text-gray-500 mt-0.5 mb-1.5 leading-relaxed line-clamp-2">
                      {notification.message}
                    </p>
                    <span className="text-xs text-gray-400 flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {transformingTheDateToATextString(notification.createdAt)}
                    </span>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer */}
        {notifications.length > 0 && (
          <div className="px-5 py-2.5 border-t border-gray-100">
            <button
              onClick={() => setOpen(false)}
              className="w-full text-center text-sm text-gray-400 hover:text-gray-600 py-1.5 transition-colors"
            >
              View all notifications
            </button>
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default NotificationButton;
