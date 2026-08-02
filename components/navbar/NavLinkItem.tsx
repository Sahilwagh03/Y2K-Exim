/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { NavigationItem } from "../../interfaces/navigation";

interface NavLinkItemProps {
  item: NavigationItem;
}

export default function NavLinkItem({ item }: NavLinkItemProps) {
  return (
    <li className="flex items-center h-full">
      <a
        href={item.href}
        className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold hover:bg-white/8 transition-all duration-200"
      >
        {item.label}
      </a>
    </li>
  );
}
