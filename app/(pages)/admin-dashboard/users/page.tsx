import UsersTable from "@/app/_modules/users/views/users-table";
import { Metadata } from "next";
export const metaData: Metadata = {
  title: "Users table",
  description: "Best Booking App",
};
const UsersPage = () => {
  return (
    <div>
      <UsersTable />
    </div>
  );
};

export default UsersPage;
