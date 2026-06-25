import UpdateUserProfile from "@/app/_modules/users/views/update-user-profile";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "update user profile",
  description: "the best booking app",
};

const UpdateUserprofilePage = () => {
  return (
    <div>
      <UpdateUserProfile />
    </div>
  );
};

export default UpdateUserprofilePage;
