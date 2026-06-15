import { Lock } from "lucide-react";
export const UpdatePasswordFields = [
  {
    name: "oldPassword",
    title: "Enter user old password",
    placeholder: "example@example.com",
    icon: <Lock className="h-4 w-4" />,
    type: "password",
  },
  {
    name: "password",
    title: "Enter the new password",
    placeholder: "e.g. The best hair cut salon",
    icon: <Lock className="h-4 w-4" />,
    type: "password",
  },
  {
    name: "confirmPassword",
    title: "Confirm the new password",
    placeholder: "e.g. The best hair cut salon",
    icon: <Lock className="h-4 w-4" />,
    type: "password",
  },
] as const;

