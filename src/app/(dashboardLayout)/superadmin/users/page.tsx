import { getUsers } from "@/actions/user";
import UsersManagementTable from "@/components/modules/superadmin/UsersManagementTable";
import { ManagementPageHeader } from "@/components/shared/ManagementPageHeader";
import { convertQueryString } from "@/lib/format";
import { SearchParams } from "@/types/shared";

export default async function SuperAdminUsersPage({ searchParams }: SearchParams) {

  const queryString = await searchParams
  const data = await getUsers(convertQueryString(queryString))
  if (!data.success) throw new Error(data.message);
  const { users, meta } = data.data;

  return (
    <section>
      <ManagementPageHeader title="All Users" description="Manage Admins, Instructors and Students" />
      <UsersManagementTable users={users} />
    </section>
  );
}


