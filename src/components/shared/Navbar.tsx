"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { LucideMenu, LucideX, School } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const toggleMobile = () => setMobileOpen(!mobileOpen);

  // Use the same data for both desktop and mobile if needed
  const categories = [
    { title: "Frontend", href: "#" },
    { title: "Backend", href: "#" },
    { title: "Full Stack", href: "#" },
    { title: "Management", href: "#" },
    { title: "Marketing", href: "#" },
  ];

  return (
    <header className={cn("sticky top-0 z-50 border-b bg-background/80 backdrop-blur")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary text-white">
              <School size={16} />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Courstack
            </span>
          </Link>        </div>


        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList >
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/courses">Courses</Link>
              </NavigationMenuLink>

              <NavigationMenuItem >
                <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-2 md:grid-cols-2">
                    {categories.map((cat) => (
                      <li key={cat.title}>
                        <NavigationMenuLink asChild>
                          <Link href={cat.href} className="block p-2 hover:bg-primary/10 rounded">
                            {cat.title}
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>

              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/about">About us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services">Services</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="/services">Contact us</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link href="/login">
            <Button variant="ghost">Log In</Button>
          </Link>
          <Link href="/register">
            <Button>Register</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <Button variant="ghost" onClick={toggleMobile}>
            {mobileOpen ? <LucideX size={20} /> : <LucideMenu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background/95 backdrop-blur px-4 py-4 space-y-2">
          <Link href="/courses">
            <Button
              variant="ghost"
              className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
            >
              Courses
            </Button>
          </Link>
          {/* Mobile Mega Menu */}
          <MobileMegaMenu title="Categories">
            <div className="grid grid-cols-1 gap-2 p-2">
              {categories.map((cat) => (
                <Link
                  key={cat.title}
                  href={cat.href}
                  className="block px-2 py-1 rounded hover:bg-primary/10"
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </MobileMegaMenu>

          <Link href="/about">
            <Button
              variant="ghost"
              className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
            >
              About us
            </Button>
          </Link>
          <Link href="/services">
            <Button
              variant="ghost"
              className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
            >
              Services
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="ghost"
              className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
            >
              Contact us
            </Button>
          </Link>


          <div className="flex flex-col gap-2 mt-2">
            <Link href="/login">
              <Button variant="ghost" className="w-full">
                Log In
              </Button>
            </Link>
            <Link href="/register">
              <Button className="w-full">Register</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

// Mobile Mega Menu Component
function MobileMegaMenu({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <Button
        variant="ghost"
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
      >
        {title}
        <span className="ml-2">{open ? "−" : "+"}</span>
      </Button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  );
}