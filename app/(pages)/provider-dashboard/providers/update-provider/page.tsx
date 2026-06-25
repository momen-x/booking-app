import UpdateProviderForm from "@/app/_modules/providers/views/update-provider";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Update provider",
  description: "the best booking app",
};

const UpdateProviderPage = async () => {
  return (
    <div>
      <UpdateProviderForm redirectPath="/provider-dashboard/providers/update-provider" />
    </div>
  );
};

export default UpdateProviderPage;
