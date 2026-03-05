import { NextRequest, NextResponse } from "next/server";
import {
  getDefaultDashboardRoute,
  getRouteOwner,
  isAuthRoute,
} from "./lib/authUtils";
import { extractCookieToHeader, setJwtCookie, verifyToken } from "./lib/cookie";
import { serverFetch } from "./lib/server-fetch";
import { AuthUser } from "./redux/features/auth/authSlice";
import { Role } from "./types/user";


const getNewAccessToken = async () => {
  try {
    const res = await serverFetch.get("/auth/refresh");
    const accessToken = extractCookieToHeader(res, "accessToken");
    const refreshToken = extractCookieToHeader(res, "refreshToken");

    if (!accessToken || !refreshToken) return false;

    if (accessToken && refreshToken) {
      await setJwtCookie("accessToken", accessToken["accessToken"] as string, accessToken["Max-Age"]);

      await setJwtCookie("refreshToken", refreshToken["refreshToken"] as string, refreshToken["Max-Age"]);
    }

    return true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest,) {
  const { pathname } = request.nextUrl;
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)


  let accessToken = request.cookies.get("accessToken")?.value;
  const refreshToken = request.cookies.get("refreshToken")?.value;

  if (!accessToken && refreshToken) {
    const refreshed = await getNewAccessToken();
    if (refreshed) {
      accessToken = request.cookies.get("accessToken")?.value;
      return NextResponse.redirect(new URL(pathname, request.url))
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${encodeURIComponent(pathname)}`, request.url)
      );
    }
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