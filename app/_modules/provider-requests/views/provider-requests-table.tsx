import { cookies } from "next/headers";
import { Card } from "@/components/ui/card";
import { ProvideRequest } from "../entity/provider-request";
import ProviderRequestCard from "./request";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

const ProviderRequest = async () => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;
  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/provider-request`, {
    headers: {
      Cookie: allCookies,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });
  const providerRequests = (await response.json()) as ProvideRequest[];
  if (!response.ok) {
    const errorText = await response.text();
    console.error(`Backend failed with status ${response.status}:`, errorText);
  }
  if (providerRequests.length === 0) {
    return <div> no provider requests</div>;
  }
  return (
    <div>
      {providerRequests.map((provider) => (
        <div key={provider.id}>
          <Card className="p-5 m-5">
            <ProviderRequestCard {...provider} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProviderRequest;
