import { ClosedCaption, Mail } from "lucide-react";
const AddNotificationsFields = [
//   {
//     name: "userId",
//     title: "Enter the userId",
//     placeholder: "4d-5f01-u86",
//     icon: <IdCardLanyard className="h-4 w-4" />,
//   },
  {
    name: "title",
    title: "Enter the title",
    placeholder: "booking is confirmed",
    icon: <ClosedCaption className="h-4 w-4" />,
  },
  {
    name: "message",
    title: "Enter the notification message",
    placeholder: "e.g. The best hair cut salon",
    icon: <Mail className="h-4 w-4" />,
  },
] as const;

export default AddNotificationsFields;
