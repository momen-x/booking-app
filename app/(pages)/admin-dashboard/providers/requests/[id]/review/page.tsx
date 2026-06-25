import ReviewProviderRequest from "@/app/_modules/provider-requests/views/view-provider-request";
import { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Review Provider Request",
  description: "the best booking app",
};
const ReviewProviderRequestPage = () => {
  return (
    <div>
      <ReviewProviderRequest />
    </div>
  );
};

export default ReviewProviderRequestPage;
