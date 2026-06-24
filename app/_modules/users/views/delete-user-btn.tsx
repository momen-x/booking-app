"use client";

import { toast } from "react-toastify";
import { useDeleteUser } from "../hooks/useDeleteUser";
import { useRouter } from "next/navigation";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import { DeleteDialog } from "@/app/_components/delete-dialog";

const DeleteUserBtn = ({ userId }: { userId: string }) => {
  const { mutate: handleDeleteUser, isPending } = useDeleteUser(userId);
  const router = useRouter();

  const handleDelete = () => {
    handleDeleteUser(undefined, {
      onSuccess: () => {
        toast.success("User deleted successfully");
        router.push("/admin-dashboard/users");
        router.refresh();
      },
      onError: (error) => {
        const errMessage = getErrorMessage(error);
        toast.error(errMessage ?? "Error deleting user");
      },
    });
  };

  return (
    <DeleteDialog
      title="Delete user account"
      text="Are you sure you want to delete this user account?"
      isLoading={isPending}
      onDelete={handleDelete}
      triggerText="Delete User"
    />
  );
};

export default DeleteUserBtn;
