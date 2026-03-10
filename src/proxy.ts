import { NextRequest, NextResponse } from "next/server";
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
} from "./lib/authUtils";
import { verifyToken } from "./lib/cookie";
import { serverFetch } from "./lib/server-fetch";
import { AuthUser } from "./redux/features/auth/authSlice";
import { Role } from "./types/user";


const getNewAccessToken = async (response: NextResponse) => {
  try {
    const res = await serverFetch.get("/auth/refresh");
    res.headers.getSetCookie().forEach((cookie) =>
      response.headers.append("Set-Cookie", cookie)
    )
    return true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest,) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)

  if (request.headers.get("next-action") ||
    request.headers.get("rsc") ||
    request.headers.get("next-router-prefetch")) {
    return NextResponse.next();
  }


  const accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!accessToken && refreshToken) {
    const response = NextResponse.redirect(new URL(pathname, request.url));
    const refreshed = await getNewAccessToken(response);

    if (!refreshed) {
      response.cookies.delete("refreshToken");
      response.headers.set(
        "Location",
        new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url).toString()
      );
    }
    return response;
  }

  const user = await verifyToken(accessToken) as AuthUser;
  const userRole: Role | null = user?.role ?? null;
  const routeOwner = getRouteOwner(pathname);
  const isAuth = isAuthRoute(pathname);

  if (!routeOwner && !isAuth) {
    return NextResponse.next({ headers: requestHeaders })
  }

  if (isAuth) {
    if (!userRole) return NextResponse.next();
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole), request.url),
    );
  }

  if (!userRole) {
    return NextResponse.redirect(
      new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
    );
  }

  if (routeOwner !== "COMMON" && routeOwner !== userRole) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole), request.url)
    );
  }

  return NextResponse.next({ headers: requestHeaders });
}
export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};