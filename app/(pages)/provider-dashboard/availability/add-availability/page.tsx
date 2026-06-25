import AddAvailabilityTime from "@/app/_modules/availability/views/add-availability-time";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Add Available time",
  description: "the best booking app",
};

const AddAvailabilityPage = () => {
  return <div><AddAvailabilityTime mode="add"/></div>;
};

export default AddAvailabilityPage;
