"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";

import default_user_image from "@/public/assets/default-user1.png";
import { useUploadImage } from "../hooks/useUploadImage";
import { useDeleteUserImage } from "../hooks/useDeleteUserImage";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { roleConfig } from "../data";
import { UserProfile } from "./user-profile";

export default function UserProfileContainer() {
  const router = useRouter();

  const { data: user, isLoading } = useGetCurrentUser();
  const { mutate: uploadImage, isPending: isUploading } = useUploadImage();
  const { mutate: deleteImage, isPending: isDeleting } = useDeleteUserImage();

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    uploadImage(
      { user_image: file },
      {
        onSuccess: () => toast.success("Profile picture updated!"),
        onError: () => toast.error("Failed to update image."),
      },
    );
  };

  const handleDeleteImage = () => {
    deleteImage(undefined, {
      onSuccess: () => {
        toast.success("Profile picture removed!");
        setShowDeleteConfirm(false);
      },
      onError: () => toast.error("Failed to remove image."),
    });
  };
  if (!isLoading && !user) {
    return <div>some thing went wrong</div>;
  }
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <span className="h-6 w-6 rounded-full border-2 border-indigo-500 border-t-transparent animate-spin" />
      </div>
    );
  }

  const role = user?.role ?? "USER";
  const {
    label: roleLabel,
    classes: roleClass,
    dotClass,
  } = roleConfig[role] ?? roleConfig.USER;

  const displayName = user?.username || user?.email?.split("@")[0] || "User";
  const hasCustomImage =
    !!user?.userImage && user.userImage !== default_user_image.src;
  const avatarSrc = user?.userImage || default_user_image.src;

  return (
    <UserProfile
      displayName={displayName}
      email={user?.email ?? ""}
      username={user?.username ?? ""}
      avatarSrc={avatarSrc}
      hasCustomImage={hasCustomImage}
      roleLabel={roleLabel}
      roleClass={roleClass}
      dotClass={dotClass}
      isUploading={isUploading}
      isDeleting={isDeleting}
      showDeleteConfirm={showDeleteConfirm}
      onFileChange={handleFileChange}
      onDeleteImage={handleDeleteImage}
      onEditProfileClick={() => router.push("/profile/update-profile")}
      onShowDeleteConfirm={() => setShowDeleteConfirm(true)}
      onHideDeleteConfirm={() => setShowDeleteConfirm(false)}
    />
  );
}
