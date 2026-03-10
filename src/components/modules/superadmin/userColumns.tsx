import { Column } from '@/components/shared/ManagementTable';
import UserRoleBadge from '@/components/shared/UserRoleBadge';
import { UserStatusBadge } from '@/components/shared/UserStatusBadge';
import UserVerifiedStatus from '@/components/shared/UserVerifiedStatus';
import { getDateTime } from '@/lib/format';
import { IUser } from '@/types/user';
import UserInfo from './../../shared/UserInfo';

export const userColumns: Column<IUser>[] = [
  {
    header: "Info",
    getValue: (row) => <UserInfo user={row} />,
    sortKey: "name",
    title: (row) => row.email
  },
  {
    header: "Phone",
    getValue: (row) => row.phone ?? "—",
  },
  {
    header: "Gender",
    getValue: (row) => row.gender ?? "—",
  },
  {
    header: "Role",
    getValue: (row) => <UserRoleBadge role={row.role} />,
    className: "text-center"
  },
  {
    header: "Status",
    getValue: (row) => <UserStatusBadge status={row.status} />,
  },
  {
    header: "Verified",
    getValue: (row) => <UserVerifiedStatus isVerified={row.isVerified} />,
  },
  {
    header: "Password",
    getValue: (row) => row.needPasswordChange ? "Change Required" : "OK",
  },
  {
    header: "Joined",
    getValue: (row) => getDateTime(row.createdAt),
    sortKey: "createdAt"
  }
]
