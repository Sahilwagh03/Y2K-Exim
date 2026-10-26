"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLandingPage = pathname?.startsWith("/funnel") || pathname?.startsWith("/linkedin");

  if (isLandingPage) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
