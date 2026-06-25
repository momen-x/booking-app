import AuthGuard from "@/app/_modules/guards/AuthGuard";
import ProviderForm from "@/app/_modules/provider-requests/views/provider-form";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Provider Request",
  description: "the best booking app",
};
export const dynamic = "force-dynamic";

const ProviderApplicationPage = () => {
  return (
    <AuthGuard>
      <ProviderForm />
    </AuthGuard>
  );
};

export default ProviderApplicationPage;
