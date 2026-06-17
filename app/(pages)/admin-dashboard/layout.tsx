import { Metadata } from "next";
import AdminDashboard from "./_components/admin-dashboard";

export const metadata: Metadata = {
  title: "Admin Dashboard",
  description: "Admin Dashboard",
};

const AdminDashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {/* <RoleGuard allowedRoles={["ADMIN"]}> */}
      <AdminDashboard>{children}</AdminDashboard>
      {/* </RoleGuard> */}
    </>
  );
};

export default AdminDashboardLayout;
