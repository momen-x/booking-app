import { cookies } from "next/headers";
import UpdateProviderForm from "@/app/_modules/providers/views/update-provider";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

const UpdateProviderPage = async () => {
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;

  const response = await fetch(
    `${DYNAMIC_PAGE_API_URL}/api/providers/current-provider`,
    {
      headers: {
        Cookie: allCookies,
        ...(token && { Authorization: `Bearer ${token}` }),
      },
    },
  );
  const provider = await response.json();
  return (
    <div>
      <UpdateProviderForm
        businessName={provider.businessName}
        location={provider.location}
        description={provider.description}
        isActive={provider.isActive}
        redirectPath="/provider-dashboard/providers/update-provider"
      />
    </div>
  );
};

export default UpdateProviderPage;
