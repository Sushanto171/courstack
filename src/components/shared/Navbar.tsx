"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LucideMenu, LucideX } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopMegaOpen, setDesktopMegaOpen] = useState(false);

  const toggleMobile = () => setMobileOpen(!mobileOpen);

  return (
    <header className={cn("sticky top-0 z-50 border-b bg-background/80 backdrop-blur")}>
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 font-bold text-lg">
          <Link href="/">Courstack</Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground relative">
          {/* Mega Menu Trigger */}
          <div
            className="relative"
            onMouseEnter={() => setDesktopMegaOpen(true)}
            onMouseLeave={() => setDesktopMegaOpen(false)}
          >
            <Link href="#" className="hover:text-primary transition-colors">
              Categories
            </Link>

            {/* Mega Menu */}
            {desktopMegaOpen && (
              <div className="absolute left-0 top-full mt-2 w-lg min-h-min bg-white shadow-lg rounded-lg p-4 text-sm text-slate-700 ">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Development</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Frontend</Link></li>
                      <li><Link href="#">Backend</Link></li>
                      <li><Link href="#">Full Stack</Link></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Business</h4>
                    <ul className="space-y-1">
                      <li><Link href="#">Management</Link></li>
                      <li><Link href="#">Marketing</Link></li>
                      <li><Link href="#">Finance</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="#" className="hover:text-primary transition-colors">Enterprise</Link>
          <Link href="#" className="hover:text-primary transition-colors">Pricing</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost">Log In</Button>
          <Button>Sign Up</Button>
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
          {/* Mobile Mega Menu - toggleable */}
          <MobileMegaMenu title="Categories">
            <div className="grid grid-cols-1 gap-2 p-2">
              <Link href="#" className="block px-2 py-1 rounded hover:bg-primary/10">Frontend</Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-primary/10">Backend</Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-primary/10">Full Stack</Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-primary/10">Management</Link>
              <Link href="#" className="block px-2 py-1 rounded hover:bg-primary/10">Marketing</Link>
            </div>
          </MobileMegaMenu>

          <Link href="#" className="block text-sm font-medium text-muted-foreground">Enterprise</Link>
          <Link href="#" className="block text-sm font-medium text-muted-foreground">Pricing</Link>

          <div className="flex flex-col gap-2 mt-2">
            <Button variant="ghost" className="w-full">Log In</Button>
            <Button className="w-full">Sign Up</Button>
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
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-sm font-medium text-muted-foreground px-2 py-2 rounded hover:bg-primary/10 transition-all"
      >
        {title}
        <span className="ml-2">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="mt-1">{children}</div>}
    </div>
  );
}