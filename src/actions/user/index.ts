"use server"

import catchAsync from "@/lib/catchAsync";
import { serverFetch } from "@/lib/server-fetch";
import { IMeta } from "@/types/shared";
import { IUser } from "@/types/user";


export const getUsers = catchAsync(async (query?: string) => {
  const res = await serverFetch.get(`/user?${query}`);

  if (!res.ok) {
    throw new Error("Users fetching failed. Please try Again.")
  }

  const { data, meta } = await res.json()
  return { users: data as IUser[], meta: meta as IMeta }
})