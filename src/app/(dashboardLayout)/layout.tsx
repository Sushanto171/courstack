import { getCurrentUser, logOutAction } from "@/actions/auth";
import { AppSidebar } from "@/components/app-sidebar";
import { UserDropdown } from "@/components/shared/AuthProfile";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { getSidebarNavLinks } from "@/lib/dashboardSidebarNavlinks";
import { AuthUser } from "@/redux/features/auth/authSlice";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const getUser = await getCurrentUser();
  if (!getUser.success) {
    redirect("/login")
  }
  const user = getUser.data as AuthUser;

  const navLinks = getSidebarNavLinks(user.role)
  return (
    <SidebarProvider>
      <AppSidebar user={user} navLinks={navLinks} />
      <SidebarInset className="relative">
        <header className="sticky top-0 left-0 z-50 w-full flex h-16 items-center gap-2 bg-background border-b">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />

            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />

            <Breadcrumb className="w-full">
              <BreadcrumbList className="flex w-full justify-end">
                <BreadcrumbItem>
                  <UserDropdown user={user} onLogout={logOutAction} />
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4 ">
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}