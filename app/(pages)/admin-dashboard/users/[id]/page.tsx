import { IParams } from "@/app/(pages)/_types/dynamic-page-params";
import DisplayUserData from "@/app/_modules/users/views/display-user-by-admin";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Display User",
  description: "the best booking app",
};
export default async function DisplayUserDataByAdminPage({ params }: IParams) {
  const { id } = await params;
  if (!id || typeof id !== "string") {
    return (
      <div className="flex min-h-100 items-center justify-center">
        User not found
      </div>
    );
  }
  return (
    <div>
      <DisplayUserData id={id} />
    </div>
  );
}
