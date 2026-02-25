import { getCurrentUser } from "@/actions/auth";
import StoreProvider from "@/provider/StoreProvider";
import { AuthUser } from "@/redux/features/auth/authSlice";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";
import { RootSpinner } from "@/components/shared/rootSpinner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Courstack | A Modern LMS platform.",
  description: "A modern learning management system built with Next.js",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const res = await getCurrentUser();
  let user: AuthUser | null = null
  if (res.success) {
    user = res.data
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StoreProvider initialUser={user}>
          <Toaster richColors position="top-right" />
          <Suspense fallback={<RootSpinner/>}>
            {children}
          </Suspense>
        </StoreProvider>
      </body>
    </html>
  );
}
