"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { getDefaultDashboardRoute } from "@/lib/authUtils"
import { getInitials } from "@/lib/fomat"
import { AuthUser } from "@/redux/features/auth/authSlice"
import Link from "next/link"

type Props = {
  user: AuthUser
  onLogout?: () => void
}

export function UserDropdown({ user, onLogout }: Props) {

  const initials = getInitials(user?.name)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="relative h-10 w-10 rounded-full p-0 hover:bg-muted"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src={user?.profileURL || ""} alt={user?.name || "User"} />
            <AvatarFallback>{initials}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-64 p-2"
      >
        {/* USER INFO HEADER */}
        <DropdownMenuLabel className="pb-2">
          <div className="flex flex-col">
            <span className="font-medium leading-none">
              {user?.name || "User"}
            </span>
            <span className="text-xs text-muted-foreground mt-1">
              {user?.email || user?.role}
            </span>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        {/* MAIN NAV */}
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href={getDefaultDashboardRoute(user.role)}>Dashboard</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/profile">Profile</Link>
          </DropdownMenuItem>

          {/* <DropdownMenuItem asChild>
            <Link href="/my-courses">My Courses</Link>
          </DropdownMenuItem> */}

          <DropdownMenuItem asChild>
            <Link href="/settings">Settings</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* SUPPORT */}
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/support">Support</Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        {/* LOGOUT */}
        <DropdownMenuItem
          className="text-red-600 focus:text-red-600"
          onClick={onLogout}
        >
          Log out
        </DropdownMenuItem>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}