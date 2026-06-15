/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Button } from "@base-ui/react/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useLogout } from "../hooks/useLogout";
import getErrorMessage from "@/utils/getAxiosErrorMessage";

const LogoutBtn = () => {
  const router = useRouter();
  const { mutate: handleLogout } = useLogout();

  const handleLogoutClick = async () => {
    handleLogout({
      onSuccess: () => {
        toast.success("Logged out successfully!");
        setTimeout(() => {
          router.push("/login");
          router.refresh();
        }, 500);
      },
      onError: (error: any) => {
        // const error
        const errorMassage = getErrorMessage(error);

        toast.error(errorMassage ?? "Logout failed. Please try again.");
      },
    });
  };

  return (
    <Button
      onClick={handleLogoutClick}
      className="hover:bg-muted bg-red-500 h-9 flex items-center gap-2 hover:text-black text-black dark:text-white dark:bg-muted p-3 rounded-xl"
    >
      Logout
    </Button>
  );
};

export default LogoutBtn;
