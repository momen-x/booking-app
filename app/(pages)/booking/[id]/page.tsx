import { Service } from "@/app/_modules/services/entity/service";
import { IParams } from "../../_types/dynamic-page-params";
import { Availability } from "@/app/_modules/availability/entity/availability";
import BookingServiceCard from "@/app/_modules/booking/view/booking-service-card";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "single Booking",
  description: "the best booking app",
};

const BookingServicePage = async ({ params }: IParams) => {
  const { id } = await params;

  const serviceRes = await fetch(`${DYNAMIC_PAGE_API_URL}/api/services/${id}`, {
    cache: "no-store",
  });
  if (!serviceRes.ok) return <div>Service not found</div>;
  const service = (await serviceRes.json()) as Service;

  const availabilityRes = await fetch(
    `${DYNAMIC_PAGE_API_URL}/api/availability/provider/${service.providerId}`,
    { cache: "no-store" },
  );
  const availability: Availability[] = availabilityRes.ok
    ? await availabilityRes.json()
    : [];

  return (
    <BookingServiceCard
      {...service}
      businessName={service.provider.businessName}
      location={service.provider.location ?? ""}
      availability={availability}
    />
  );
};

export default BookingServicePage;
