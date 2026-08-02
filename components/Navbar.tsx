/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState, useEffect } from "react";
import { navigationConfig } from "../constants/navigation";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopMenu from "./navbar/DesktopMenu";
import MobileMenu from "./navbar/MobileMenu";
import SearchOverlay from "./navbar/SearchOverlay";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  // Close search overlay on ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      {/* Desktop Sticky Navigation */}
      <nav className="hidden md:block sticky top-0 z-[1000] w-full bg-gradient-to-r from-kc-navy-900 to-kc-navy-700 shadow-md">
        <div className="max-w-[1440px] mx-auto h-[68px] flex items-center justify-between px-6 gap-[18px] relative">
          <NavbarLogo size="desktop" />

          <DesktopMenu items={navigationConfig} />


        </div>
      </nav>

      {/* Mobile Navigation */}
      <MobileMenu
        items={navigationConfig}
        searchOpen={searchOpen}
        setSearchOpen={setSearchOpen}
      />

      {/* Google Search Overlay */}
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
