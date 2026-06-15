import ProviderList from "@/app/_modules/providers/views/provider-list";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Providers page",
  description: "Best Booking App",
};
const ProvidersPage = () => {
  return (
    <div><ProviderList/></div>
  )
}

export default ProvidersPage