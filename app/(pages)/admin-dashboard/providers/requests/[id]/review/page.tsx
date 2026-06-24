// import AddNotificationForm from "@/app/_modules/notifications/views/add-notification-form";
import ReviewProviderRequest from "@/app/_modules/provider-requests/views/view-provider-request";
// import AddProviderForm from "@/app/_modules/providers/views/add-provider-form";
// import { CheckCircle, XCircle, User, MapPin, Building2 } from "lucide-react";

// interface PageProps {
//   searchParams:
//     | Promise<{ [key: string]: string | string[] | undefined }>
//     | { [key: string]: string | string[] | undefined };
// }

const ReviewProviderRequestPage = () =>
  // { searchParams }: PageProps
  {
    // const params = await searchParams;
    // const userId = typeof params.userId === "string" ? params.userId : undefined;
    // const name = typeof params.name === "string" ? params.name : undefined;
    // const location =
    //   typeof params.location === "string" ? params.location : undefined;

    return (
      <div>
        <ReviewProviderRequest />
      </div>
    );
  };

export default ReviewProviderRequestPage;
