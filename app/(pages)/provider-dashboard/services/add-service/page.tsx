import ServiceForm from "@/app/_modules/services/views/add-update-service";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add Services",
  description: "the best booking app",
};
export const dynamic = "force-dynamic";

const ProviderAddServicepage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold mb-4">Add new Service</h1>
      <p className="text-lg mb-8">
        Please fill out the form below to add a new service.
      </p>
      <div className="flex flex-col items-center justify-center"></div>
      <ServiceForm goal="add" />
    </div>
  );
};

export default ProviderAddServicepage;
