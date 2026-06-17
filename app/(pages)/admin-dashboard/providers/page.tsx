import { getProviders } from "@/app/_modules/providers/utils/get-providers";
import ProvidersDisplayingByAdmin from "@/app/_modules/providers/views/providers-displaying-by-admin";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Providers",
  description: "Best Booking App",
};


const ProvidersPage = async () => {
  const providers = await getProviders();
  if (!providers || providers.length === 0) {
    return <div className="flex min-h-100 items-center justify-center"> </div>;
  }
  return (
    <div>
      <ProvidersDisplayingByAdmin providers={providers} />
    </div>
  );
};

export default ProvidersPage;
