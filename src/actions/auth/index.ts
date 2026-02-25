"use server"

import catchAsync from "@/lib/catchAsync"
import { setJwtCookie } from "@/lib/cookie"

import { handleApiResponse } from "@/lib/handleApiResponse"
import { serverFetch } from "@/lib/server-fetch"
import { AuthUser } from "@/redux/features/auth/authSlice"
import { UserLoginValues, UserRegisterValues } from "@/zod/auth"


export const userRegisterAction = catchAsync(async (payload: UserRegisterValues,) => {
  const res = await serverFetch.post("/user", {
    body: JSON.stringify(payload)
  })

  return handleApiResponse(res, "Registration failed")
})

export const loginAction = catchAsync(async (payload: UserLoginValues) => {
  const res = await serverFetch.post("/auth/login", {
    body: JSON.stringify(payload),
  })

  const json = await res.json() 

  if (!res.ok) {
    throw new Error(json.message || "Login failed.")
  }

  const { tokens, userData } = json.data

  if (tokens) {
    const { accessToken, refreshToken } = tokens
    await setJwtCookie("accessToken", accessToken)  
    await setJwtCookie("refreshToken", refreshToken)
  }

  return userData as AuthUser
})