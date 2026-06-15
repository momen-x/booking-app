import { Lock, Mail, User } from "lucide-react";
const registerFields = [
  {
    name: "username",
    title: "Enter user username",
    placeholder: "example_username",
    icon: <User className="h-4 w-4" />,
    type: "text",
  },
  {
    name: "email",
    title: "Enter user email",
    placeholder: "example@example.com",
    icon: <Mail className="h-4 w-4" />,
    type: "email",
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

export default registerFields;
