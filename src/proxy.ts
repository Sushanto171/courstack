import { NextRequest, NextResponse } from "next/server";
import { getNewAccessToken } from "./actions/auth";
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
} from "./lib/authUtils";
import { getCookie, verifyToken } from "./lib/cookie";
import { AuthUser } from "./redux/features/auth/authSlice";
import { Role } from "./types/user";

export async function proxy(request: NextRequest,) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)


  let accessToken = request.cookies.get("accessToken")?.value || await getCookie("accessToken");
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!accessToken && refreshToken) {
    await getNewAccessToken()
    accessToken = await getCookie("accessToken");
    return NextResponse.redirect(new URL(pathname, request.url))
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
    console.log("hit");
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