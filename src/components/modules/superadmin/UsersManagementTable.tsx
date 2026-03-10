
"use client"
import ManagementTable from "@/components/shared/ManagementTable";
import { useInfiniteScroll } from "@/hooks/useInfiniteScroll";
import { IMeta } from "@/types/shared";
import { IUser } from "@/types/user";
import { useCallback } from "react";
import { getUsers } from './../../../actions/user/index';
import { userColumns } from "./userColumns";


export default function UsersManagementTable({ users, meta, queryString }: { users: IUser[], meta: IMeta, queryString?: string }) {



  const fetchFn = useCallback(async (cursor: string,) => {
    const query = queryString
      ? `${queryString}&cursor=${cursor}`
      : `cursor=${cursor}`;
    const result = await getUsers(query);

    if (!result.success) throw new Error(result.message)

    return {
      data: result.data.users,
      nextCursor: result.data.meta.nextCursor,
      hasMore: result.data.meta.hasMore,
    };
  }, [queryString])

  const { error, hasMore, items, loading, sentinelRef } = useInfiniteScroll<IUser>({ initialData: users, initialCursor: meta.nextCursor, initialHasMore: meta.hasMore, fetchFn })

  const handleView = (user: IUser) => {
    console.log(user);
  }

  return (<>
    <ManagementTable
      onView={handleView}
      sentinelRef={sentinelRef}
      hasMore={hasMore}
      error={error}
      loading={loading}
      data={items} columns={userColumns} getRowKey={(row) => row.id} />
  </>
  );
}