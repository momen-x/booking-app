import { IParamsAndSearchParams } from "@/app/(pages)/_types/dynamic-page-params";
import BackBtn from "@/app/_components/back_btn";
import UpdateUserPasswordForm from "@/app/_modules/users/views/update-user-password-form";
import UpdateUsernameForm from "@/app/_modules/users/views/update-username-form";

const UpdateUserDataByAdminPage = async ({
  searchParams,
  params,
}: IParamsAndSearchParams) => {
  const searchParam = await searchParams;
  const { id } = await params;
  const email = Array.isArray(searchParam.email)
    ? searchParam.email[0]
    : searchParam.email;
  const username = Array.isArray(searchParam.username)
    ? searchParam.username[0]
    : searchParam.username;
  if (!id) {
    return <div>User not found</div>;
  }

  return (
    <div>
        <div className="flex justify-center mt-4 mb-4">

      <BackBtn />
        </div>

      <div className="w-[50%] border  p-8 rounded-lg shadow-md  m-auto">
        <UpdateUserPasswordForm email={email ?? ""} />
        <br />
        <hr />
        <div>
          <UpdateUsernameForm id={id} username={username} />
        </div>
      </div>
    </div>
  );
};

export default UpdateUserDataByAdminPage;
