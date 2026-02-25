"use client"

import { Menu, School } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Separator } from "@/components/ui/separator"

import { logOutAction } from "@/actions/auth"
import { clearUser } from "@/redux/features/auth/authSlice"
import { useAppDispatch } from "@/redux/hooks"
import useAuth from "@/redux/hooks/useAuth"
import { UserDropdown } from "./AuthProfile"

const categories = [
  { title: "Frontend", href: "/courses/frontend" },
  { title: "Backend", href: "/courses/backend" },
  { title: "Full Stack", href: "/courses/fullstack" },
  { title: "Management", href: "/courses/management" },
  { title: "Marketing", href: "/courses/marketing" },
]

export function Navbar() {
  const dispatch = useAppDispatch()
  const { user } = useAuth()

  const handleLogout = () => {
    logOutAction()
    dispatch(clearUser())
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur">
      <div className="container  px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">

        <Link href="/" className="flex items-center gap-2 font-semibold">
          <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            <School size={16} />
          </div>
          <span className="text-lg tracking-tight">Courstack</span>
        </Link>

        {/* CENTER — Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href="/courses">Courses</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>Categories</NavigationMenuTrigger>

              <NavigationMenuContent>
                <div className="grid w-[520px] grid-cols-2 gap-3 p-4">
                  {categories.map((cat) => (
                    <NavigationMenuLink key={cat.title} asChild>
                      <Link
                        href={cat.href}
                        className="block rounded-md p-3 text-sm leading-none hover:bg-accent"
                      >
                        <div className="font-medium">{cat.title}</div>
                        <p className="text-muted-foreground text-xs mt-1">
                          Browse {cat.title} courses
                        </p>
                      </Link>
                    </NavigationMenuLink>
                  ))}
                </div>
              </NavigationMenuContent>

            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/about">About</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/contact">Contact</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        {/* RIGHT — Desktop Auth */}
        <div className="hidden md:flex items-center gap-2">

          {!user ? (
            <>
              <Link href="/login">
                <Button variant="ghost">Log in</Button>
              </Link>

              <Link href="/register">
                <Button>Get Started</Button>
              </Link>
            </>
          ) : (
            <UserDropdown user={user} onLogout={handleLogout} />
          )}

        </div>

        {/* MOBILE MENU */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu size={20} />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[320px]">

            <div className="flex flex-col gap-4 mt-6 px-2">

              <Link href="/" className="flex items-center gap-2 font-semibold">
                <div className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                  <School size={16} />
                </div>
                Courstack
              </Link>

              <Separator />

              <Link href="/courses">
                <Button variant="ghost" className="w-full justify-start">
                  Courses
                </Button>
              </Link>

              <div className="flex flex-col gap-1">
                <span className="px-2 text-xs text-muted-foreground">
                  Categories
                </span>

                {categories.map((cat) => (
                  <Link key={cat.title} href={cat.href}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start"
                    >
                      {cat.title}
                    </Button>
                  </Link>
                ))}
              </div>

              <Link href="/about">
                <Button variant="ghost" className="w-full justify-start">
                  About
                </Button>
              </Link>

              <Link href="/contact">
                <Button variant="ghost" className="w-full justify-start">
                  Contact
                </Button>
              </Link>

              <Separator />

              {!user ? (
                <div className="flex flex-col gap-2">
                  <Link href="/login">
                    <Button variant="outline" className="w-full">
                      Log in
                    </Button>
                  </Link>

                  <Link href="/register">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              ) : (
                <>
                  <Link href="/dashboard">
                    <Button className="w-full">Open Dashboard</Button>
                  </Link>

                  <Button variant="destructive" onClick={handleLogout} className="w-full "
                  >Log Out</Button>
                </>
              )}

            </div>

          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}