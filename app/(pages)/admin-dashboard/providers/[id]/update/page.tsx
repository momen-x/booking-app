import { IParams } from "@/app/(pages)/_types/dynamic-page-params";
import { Provider } from "@/app/_modules/providers/entity/provider";
import getSingleProviderProfile from "@/app/_modules/providers/utils/getSingleProviders";
import UpdateProviderForm from "@/app/_modules/providers/views/update-provider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Update Provider",
  description: "the best booking app",
};

const UpdateProviderPage = async ({ params }: IParams) => {
  const { id } = await params;
  const p = (await getSingleProviderProfile(id)) as Provider;
  if (!p) {
    return <div>Provider not found</div>;
  }
  return (
    <div>
      <UpdateProviderForm
        isActive={true}
        userId={id}
        redirectPath="/admin-dashboard"
      />
    </div>
  );
};

export default UpdateProviderPage;
