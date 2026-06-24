import SingleServiceCard from "@/app/_modules/services/views/single-service.card";
import { IParams } from "../../_types/dynamic-page-params";
import BackBtn from "@/app/_components/back_btn";
import { Metadata } from "next";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import NotFound from "@/app/not-found";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Service info",
  description: "Best Booking App",
};
const SingleServicePage = async ({ params }: IParams) => {
  const { id } = await params;
  if (!id) {
    return (
      <div>
        <BackBtn /> Service not found
      </div>
    );
  }
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/services/${id}`);
  const service = await response.json();
  if (!service) {
    return (
      <div>
        <NotFound />
      </div>
    );
  }

  return (
    <div>
      <BackBtn />

      <SingleServiceCard service={service} />
    </div>
  );
};

export default SingleServicePage;
