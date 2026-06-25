import BackBtn from "@/app/_components/back_btn";
import UpdateUserPasswordForm from "@/app/_modules/users/views/update-user-password-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Update User Password",
  description: "the best booking app",
};
const UpdateUserPasswordPage = () => {
  return (
    <div>
      <BackBtn />
      <UpdateUserPasswordForm email={""} />
    </div>
  );
};

export default UpdateUserPasswordPage;
