import { Metadata } from "next";
import ServicesTable from "@/app/_modules/services/views/services-displaying";
import { getAllServices } from "@/app/_modules/services/utils/get-services";
export const metadata: Metadata = {
  title: "Services",
  description: "Best Booking App",
};

const ServicesPage = async () => {
  const services = await getAllServices();
  if (!services) {
    return (
      <div className="flex min-h-100 items-center justify-center">
        No services available.
      </div>
    );
  }
  const isLoading = false;

  return (
    <div>
      <ServicesTable isLoading={isLoading} services={services ?? []} />
    </div>
  );
};

export default ServicesPage;
