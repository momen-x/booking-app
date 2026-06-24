import { IParams } from "@/app/(pages)/_types/dynamic-page-params";
import DisplayUserData from "@/app/_modules/users/views/display-user-by-admin";

export default async function DisplayUserDataByAdminPage({ params }: IParams) {
  const { id } = await params;
  if (!id || typeof id !== "string") {
    return <div>User not found</div>;
  }
  return (
    <div>
      <DisplayUserData id={id} />
    </div>
  );
}
