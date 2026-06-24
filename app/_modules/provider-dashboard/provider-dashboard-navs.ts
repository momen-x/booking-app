import { ClipboardPlus, Clock, ClockPlus, LayoutDashboardIcon, Pencil, Table2 } from "lucide-react";

export const ProviderNavs = [
  { icon: LayoutDashboardIcon, label: "Dashboard", path: "/" },
  {
    icon: Pencil,
    label: "update provider info",
    path: "/providers/update-provider",
  },
  { icon: ClipboardPlus, label: "Add service", path: "/services/add-service" },
  {
    icon: Table2,
    label: "Your services table",
    path: "/services",
  },
  {
    path: "/availability",
    icon: Clock,
    label: "Availability",
  },
  {
    path: "/availability/add-availability",
    icon: ClockPlus,
    label: "Add Availability Time",
  },
];