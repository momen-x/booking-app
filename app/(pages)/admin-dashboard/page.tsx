import AdminDashboardView from "@/app/_modules/admin-dashboard/views/admin-dashboard-view";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};
const AdminDashboardPage = async () => {
  return (
    <>
      <AdminDashboardView />
    </>
  );
};

export default AdminDashboardPage;
