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
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4 w-full">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb className="w-full ">
              <BreadcrumbList className="flex w-full justify-end">
                {/* <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" /> */}
                <BreadcrumbItem>
                  {/* <BreadcrumbPage>Data Fetching</BreadcrumbPage> */}
                  <UserDropdown user={user} onLogout={logOutAction} />

                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
          <div className="bg-muted/50 min-h-[100vh] flex-1 rounded-xl md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}