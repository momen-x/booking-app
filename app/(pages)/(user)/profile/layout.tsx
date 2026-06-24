import AuthGuard from "@/app/_modules/guards/AuthGuard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "User profile",
  description: "the best booking app",
};
const ProfileLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <AuthGuard>{children};</AuthGuard>;
};

export default ProfileLayout;
