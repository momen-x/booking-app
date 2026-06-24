// app/admin-dashboard/availability/update/[id]/page.tsx
import AddAvailabilityTime from "@/app/_modules/availability/views/add-availability-time";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";
import { cookies } from "next/headers";

interface PageProps {
  params: Promise<{ id: string }> | { id: string };
}

const UpdateAvailabilityPage = async ({ params }: PageProps) => {
  const { id } = await params;

  // Fetch the availability data
  const cookieStore = await cookies();
  const allCookies = cookieStore.toString();
  const token = cookieStore.get("token")?.value;

  const response = await fetch(`${DYNAMIC_PAGE_API_URL}/api/availability/${id}`, {
    headers: {
      Cookie: allCookies,
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  });

  if (!response.ok) {
    return <div>Failed to load availability data</div>;
  }

  const availability = await response.json();

  // Convert minutes to time string (HH:MM)
  const minutesToTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
  };

  return (
    <AddAvailabilityTime
      mode="update"
      availabilityId={id}
      defaultValues={{
        dayOfWeek: availability.dayOfWeek,
        startTime: minutesToTime(availability.startTime),
        endTime: minutesToTime(availability.endTime),
      }}
    />
  );
};

export default UpdateAvailabilityPage;
