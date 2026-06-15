import { Service } from "@/app/_modules/services/entity/service";
import ServiceList from "@/app/_modules/services/views/services-list";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Services page",
  description: "Best Booking App",
};
const ServicesPage = async () => {
  const services = (await fetch(`${DYNAMIC_PAGE_API_URL}/api/services`, {
    method: "GET",
    credentials: "include",
    next: { revalidate: 5 }, //
  }).then((res) => res.json())) as Service[];
  console.log("the services are : ", services);
  if (!services || services.length === 0) {
    return <div>No services available.</div>;
  }
  return (
    <div className="flex flex-col mt-2 flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-3xl font-bold mb-4">Services Page</h1>
      <p className="text-lg mb-4">This is the services page.</p>
      <ServiceList services={services} />
    </div>
  );
};

export default ServicesPage;
