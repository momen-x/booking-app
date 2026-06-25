import UserProfileContainer from "@/app/_modules/users/views/user-profile-container";
import { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "User profile",
  description: "the best booking app",
};
const UserProfilePage = () => {
  return (
    <div>
      <UserProfileContainer />
    </div>
  );
};

export default UserProfilePage;
