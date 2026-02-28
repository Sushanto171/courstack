"use server"

import catchAsync from "@/lib/catchAsync"
import { deleteCookie, extractCookieToHeader, setJwtCookie } from "@/lib/cookie"

import { handleApiResponse } from "@/lib/handleApiResponse"
import { serverFetch } from "@/lib/server-fetch"
import { AuthUser } from "@/redux/features/auth/authSlice"
import { UserLoginValues, UserRegisterValues } from "@/zod/auth"
import { redirect } from "next/navigation"


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

  const { userData } = json.data

  const accessToken = extractCookieToHeader(res, "accessToken");
  const refreshToken = extractCookieToHeader(res, "refreshToken");

  if (!accessToken || !refreshToken) throw new Error("Login failed! Please try again.")

  if (accessToken && refreshToken) {
    await setJwtCookie("accessToken", accessToken["accessToken"] as string, accessToken["Max-Age"]);

    await setJwtCookie("refreshToken", refreshToken["refreshToken"] as string, refreshToken["Max-Age"]);
  }

  return userData as AuthUser
})

export const getCurrentUser = catchAsync(async () => {
  const res = await serverFetch.get("/auth/me");

  if (!res.ok) {
    return null
  }

  const { data } = await res.json()
  return data as AuthUser
})

export const logOutAction = catchAsync(async () => {
  await deleteCookie("accessToken");
  await deleteCookie("refreshToken");
  redirect("/login")
})