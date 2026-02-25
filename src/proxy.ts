import { NextRequest, NextResponse } from "next/server";
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
} from "./lib/authUtils";
import { getCookie, getDecodedToken } from "./lib/cookie";
import { AuthUser } from "./redux/features/auth/authSlice";
import { Role } from "./types/user";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const ignoredPrefixes = [
    "/api",
    "/_next",
    "/favicon.ico",
    "/sitemap.xml",
    "/robots.txt",
    "/assets",
  ];

  if (ignoredPrefixes.some((p) => pathname.startsWith(p))) {
    return NextResponse.next();
  }

  const token = await getCookie("accessToken");
  const user = getDecodedToken(token) as AuthUser | null;
  const userRole: Role | null = user?.role ?? null;

  const routeOwner = getRouteOwner(pathname);
  const isAuth = isAuthRoute(pathname)

  if (!routeOwner && !isAuth) {
    return NextResponse.next();
  }

  if (isAuth) {
    if (!userRole) return NextResponse.next();

    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole), request.url)
    );
  }

  if (!userRole) {
    return NextResponse.redirect(new URL(`/login?redirect=${pathname}`, request.url));
  }

  if (userRole && isAuthRoute(pathname)) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole), request.url)
    );
  }

  if (routeOwner === "COMMON") {
    return NextResponse.next();
  }

  if (routeOwner !== userRole) {
    return NextResponse.redirect(
      new URL(getDefaultDashboardRoute(userRole), request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt|.well-known).*)",
  ],
};