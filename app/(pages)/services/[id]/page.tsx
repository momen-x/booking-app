import SingleServiceCard from "@/app/_modules/services/views/single-service.card";
import { IParams } from "../../_types/dynamic-page-params";
import BackBtn from "@/app/_components/back_btn";
import { Metadata } from "next";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

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
  // console.log("the response is ", await response.json());
  const service = await response.json();
  if (!service) {
    return (
      <div>
        <BackBtn />
        Service not found
      </div>
    );
  }
  console.log("the service is ", service);

  return (
    <div>
      <BackBtn />

      <SingleServiceCard service={service} />
    </div>
  );
};

export default SingleServicePage;
