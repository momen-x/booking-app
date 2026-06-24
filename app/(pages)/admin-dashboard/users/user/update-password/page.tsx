import BackBtn from "@/app/_components/back_btn";
import UpdateUserPasswordForm from "@/app/_modules/users/views/update-user-password-form";

const UpdateUserPasswordPage = () => {
  return (
    <div>
        <BackBtn/>
      <UpdateUserPasswordForm email={""} />
    </div>
  );
};

export default UpdateUserPasswordPage;
