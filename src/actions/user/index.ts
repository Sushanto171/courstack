"use server"

import catchAsync from "@/lib/catchAsync";
import { handleApiResponse } from "@/lib/handleApiResponse";
import { serverFetch } from "@/lib/server-fetch";
import { IMeta } from "@/types/shared";
import { IUser } from "@/types/user";
import { UserRegisterValues } from "@/zod/auth";


export const getUsers = catchAsync(async (query?: string) => {
  const res = await serverFetch.get(`/user?${query}`);

  if (!res.ok) {
    throw new Error("Users fetching failed. Please try Again.")
  }

  const { data, meta } = await res.json()
  return { users: data as IUser[], meta: meta as IMeta }
})

// authorized: Super Admin
export const createAdminAction = catchAsync(async (payload: UserRegisterValues) => {
  const res = await serverFetch.post("/user/create-admin", {
    body: JSON.stringify(payload)
  })

  return handleApiResponse(res, "Admin account creation failed.")
})