import SingleProviderCard from "@/app/_modules/providers/views/single-provider-card";
import { IParams } from "../../_types/dynamic-page-params";
import BackBtn from "@/app/_components/back_btn";
import { Metadata } from "next";

export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Provider info",
  description: "Best Booking App",
};
const ProviderPage = async ({ params }: IParams) => {
  const { id } = await params;
  if (!id) {
    return (
      <div>
        <BackBtn />
        No provider ID provided.
      </div>
    );
  }
  return (
    <div>
      <BackBtn />
      <SingleProviderCard id={id} />
    </div>
  );
};

export default ProviderPage;
