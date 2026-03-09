// app/api/users/route.ts
import { serverFetch } from "@/lib/server-fetch";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.toString();
  const res = await serverFetch.get(`/user?${query}`);
  const data = await res.json();

  return Response.json(data);
}