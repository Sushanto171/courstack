import { Role } from "@/types/user";

export const getDefaultDashboardRoute = (role: Role) => {
  switch (role) {
    case "SUPER_ADMIN":
      return "/superadmin/dashboard";
    case "ADMIN":
      return "/admin/dashboard";
    case "INSTRUCTOR":
      return "/instructor/dashboard";
    case "STUDENT":
      return "/dashboard";
    default:
      return "/";
  }
};


const authRoutes = [
  "/login",
  "/register",
];

export const isAuthRoute = (pathname: string) => {
  return authRoutes.some((route) => route === pathname);
};


type RouteConfig = {
  patterns: RegExp[];
  exact: string[];
};

const commonProtectedRoutes: RouteConfig = {
  patterns: [],
  exact: ["/profile", "/settings", "/change-password"],
};

const superAdminProtectedRoutes: RouteConfig = {
  patterns: [/^\/superadmin/],
  exact: [],
};

const adminProtectedRoutes: RouteConfig = {
  patterns: [/^\/admin/],
  exact: [],
};


const instructorProtectedRoutes: RouteConfig = {
  patterns: [/^\/instructor/],
  exact: [],
};

const studentProtectedRoutes: RouteConfig = {
  patterns: [/^\/dashboard/],
  exact: [],
};

const isRouteMatches = (pathname: string, routes: RouteConfig) => {
  if (routes.exact.includes(pathname)) {
    return true;
  }

  return routes.patterns.some((pattern) => pattern.test(pathname));
};

export const getRouteOwner = (
  pathname: string
): Role | "COMMON" | null => {
  if (isRouteMatches(pathname, superAdminProtectedRoutes)) {
    return "SUPER_ADMIN";
  }
  if (isRouteMatches(pathname, adminProtectedRoutes)) {
    return "ADMIN";
  }
  if (isRouteMatches(pathname, instructorProtectedRoutes)) {
    return "INSTRUCTOR";
  }
  if (isRouteMatches(pathname, studentProtectedRoutes)) {
    return "STUDENT";
  }
  if (isRouteMatches(pathname, commonProtectedRoutes)) {
    return "COMMON";
  }
  return null;
};