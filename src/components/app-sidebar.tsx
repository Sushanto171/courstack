"use client"
import { School } from "lucide-react"
import Link from "next/link"

import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarRail,
} from "@/components/ui/sidebar"

import { ISidebarNavLinks } from "@/lib/dashboardSidebarNavlinks"
import { AuthUser } from "@/redux/features/auth/authSlice"
import { usePathname } from "next/navigation"
import { getIconComponent } from "./shared/getIconComponent"


interface Props {
  user: AuthUser
  navLinks: ISidebarNavLinks[]
}

export function AppSidebar({ user, navLinks }: Props) {
  const pathname = usePathname()
  return (
    <Sidebar collapsible="icon">
      {/* HEADER */}
      <SidebarHeader>
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <School size={16} />
          </div>
          <span className="text-lg tracking-tight">Courstack</span>
        </Link>
      </SidebarHeader>

      {/* CONTENT */}
      <SidebarContent className="px-2">
        <SidebarMenu>
          {navLinks.map((nav) => {
            const isParentActive = pathname === `/${user.role.toLowerCase()}/${nav?.url?.replace(/^\//, '')}`
            const Icon = getIconComponent(nav.icon)
            return (
              <SidebarMenuItem key={nav.title}>
                {nav.url ? (
                  <SidebarMenuButton
                    asChild
                    isActive={isParentActive}
                  >
                    <Link href={nav.url}>
                      <Icon className="size-4" />
                      <span>{nav.title}</span>
                    </Link>
                  </SidebarMenuButton>
                ) : (
                  <div className="flex items-center gap-2 px-2 py-1 text-sm font-medium text-muted-foreground">
                    <Icon className="size-4" />
                    <span>{nav.title}</span>
                  </div>
                )}

                {/* Nested Items */}
                {nav.items?.length ? (
                  <SidebarMenuSub>
                    {nav.items.map((item) => {
                      const isSubActive =
                        pathname === `/${user.role.toLowerCase()}/${item?.url?.replace(/^\//, '')}`
                      return (
                        <SidebarMenuSubItem key={item.url}>
                          <SidebarMenuButton
                            asChild
                            size="sm"
                            isActive={isSubActive}
                          >
                            <Link href={item.url}>
                              {item.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuSubItem>
                      )
                    })}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            )
          })}
        </SidebarMenu>
      </SidebarContent>

      {/* FOOTER */}
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}