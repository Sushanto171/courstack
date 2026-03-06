import { getUsers } from "@/actions/user";
import UsersManagementTable from "@/components/modules/superadmin/UsersManagementTable";
import { ManagementPageHeader } from "@/components/shared/ManagementPageHeader";

export default async function SuperAdminUsersPage() {
  const data = await getUsers()
  if (!data.success) throw new Error(data.message);
  const { users, meta } = data.data;

  return (
    <section>
      <ManagementPageHeader title="All Users" description="Manage Admins, Instructors and Students" />
      <UsersManagementTable users={users} />
    </section>
  );
}