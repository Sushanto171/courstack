"use client"
import ManagementTable from "@/components/shared/ManagementTable";
import { IUser } from "@/types/user";
import { userColumns } from "./userColumns";


export default function UsersManagementTable({ users }: { users: IUser[] }) {

  const handleView = (user: IUser) => {
    console.log(user);
  }
  return (<>
    <ManagementTable
      onView={handleView}
      data={users} columns={userColumns} getRowKey={(row) => row.id} />
  </>
  );
}