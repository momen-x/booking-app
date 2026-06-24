import {
  GitPullRequestCreate,
  LayoutDashboardIcon,
  MessageSquarePlus,
  Table2,
  User,
  UserRoundKey,
} from "lucide-react";

export const dashboardNaves = [
  { icon: LayoutDashboardIcon, label: "Dashboard", path: "/" },
  {
    icon: GitPullRequestCreate,
    label: "Provider Requests",
    path: "providers/requests",
  },
  {
    icon: MessageSquarePlus,
    label: "Add Provider",
    path: "providers/add",
  },
  { icon: User, label: "Users table", path: "/users" },

  { icon: Table2, label: "Providers table", path: "/providers" },
  {
    icon: Table2,
    label: "Services table",
    path: "/services",
  },
  {
    icon: UserRoundKey,
    label: "Update user password",
    path: "/users/user/update-password",
  },
];
