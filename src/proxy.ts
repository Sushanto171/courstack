import { NextRequest, NextResponse } from "next/server";
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
} from "./lib/authUtils";
import { getCookie, verifyToken } from "./lib/cookie";
import { AuthUser } from "./redux/features/auth/authSlice";
import { Role } from "./types/user";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)
  

  const token = await getCookie("accessToken");
  const user = await verifyToken(token) as AuthUser;
  const userRole: Role | null = user?.role ?? null;
  const routeOwner = getRouteOwner(pathname);
  const isAuth = isAuthRoute(pathname);

  if (!routeOwner && !isAuth) {
    return NextResponse.next({ headers: requestHeaders })
  }

  if (isAuth) {
    if (!userRole) return NextResponse.next({ headers: requestHeaders })
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