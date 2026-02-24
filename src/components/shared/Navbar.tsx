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
import { LucideMenu, LucideX } from "lucide-react";
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
          <Link href="/">Courstack</Link>
        </div>

        {/* Desktop Menu using shadcn NavigationMenu */}
        <div className="hidden md:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList >
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
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">Enterprise</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                  <Link href="#">Pricing</Link>
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
          <Button
            variant="ghost"
            className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
          >
            Enterprise
          </Button>
          <Button
            variant="ghost"
            className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
          >
            Pricing
          </Button>

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