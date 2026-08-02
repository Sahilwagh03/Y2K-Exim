/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";

interface NavbarLogoProps {
  size?: "desktop" | "mobile";
}

export default function NavbarLogo({ size = "desktop" }: NavbarLogoProps) {
  const isDesktop = size === "desktop";

  return (
    <a href="/" className={`flex items-center flex-shrink-0 gap-3 ${isDesktop ? "" : "mm-logo"}`}>
      <img
        src="/img/y2k-logo.jpg"
        alt="Y2K Exim Logo"
        className={`object-cover rounded-full border border-white/20 shadow-sm ${isDesktop ? "h-11 w-11" : "h-9 w-9"}`}
      />
      <div className="flex flex-col">
        <span className={`font-display font-extrabold ${isDesktop ? "text-lg" : "text-base"} text-white leading-none tracking-wide`}>
          Y2k Exim
        </span>
        <span className={`${isDesktop ? "text-[9px]" : "text-[8px]"} text-kc-gold font-bold tracking-[0.2em] uppercase mt-0.5`}>
          Group
        </span>
      </div>
    </a>
  );
}
