"use server"

import catchAsync from "@/lib/catchAsync"
import { serverFetch } from "@/lib/server-fetch"
import { UserRegisterValues } from "@/zod/auth"


export const userRegisterAction = catchAsync(async (payload: UserRegisterValues,) => {
  const res = await serverFetch.post("/user", {
    body: JSON.stringify(payload)
  })

  
  if (!res.ok) {
    const err = await res.json()
    throw Error(err.message || "Registration failed");
  }
  const {data} =await res.json()

  return data
})