import { Column } from '@/components/shared/ManagementTable';
import { IUser } from '@/types/user';

export const userColumns: Column<IUser>[] = [
  {
    header: "Info",
    getValue: (row) => row.name,
  },

]
