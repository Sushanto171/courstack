import { getUsers } from "@/actions/user";
import UsersManagementTable from "@/components/modules/superadmin/UsersManagementTable";
import { ManagementPageHeader } from "@/components/shared/ManagementPageHeader";
import { convertQueryString } from "@/lib/format";
import { SearchParams } from "@/types/shared";
import { Suspense } from "react";

export default async function SuperAdminUsersPage({ searchParams }: SearchParams) {
  const queryObj = await searchParams;
  const queryString = convertQueryString(queryObj)
  const data = await getUsers(queryString)
  if (!data.success) throw new Error(data.message);
  const { users, meta } = data.data;
  return (
    <section>
      <ManagementPageHeader title="All Users" description="Manage Admins, Instructors and Students" />
      <Suspense fallback="Users fetching...">
        <UsersManagementTable key={queryString} users={users} meta={meta} queryString={queryString} />
      </Suspense>
    </section>
  );
}


