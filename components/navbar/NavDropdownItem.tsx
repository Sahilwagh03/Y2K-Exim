/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { NavigationItem } from "../../interfaces/navigation";

interface NavDropdownItemProps {
  item: NavigationItem;
}

export default function NavDropdownItem({ item }: NavDropdownItemProps) {
  return (
    <li className="flex items-center h-full group relative">
      <a
        href={item.href}
        className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold hover:bg-white/8 transition-all duration-200"
      >
        {item.label}
      </a>

      <div
        className={`absolute top-full right-0 mt-0 ${
          item.widthClass || "w-[260px]"
        } bg-white rounded-lg shadow-[0_10px_40px_-8px_rgba(0,0,0,0.15)] py-3 px-0 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-50`}
      >
        {item.dropdownLinks?.map((link, lnIdx) => (
          <a
            key={lnIdx}
            href={link.href}
            className={`flex items-center gap-2 py-2.5 px-5 text-gray-700 text-[15px] hover:bg-orange-50 hover:text-kc-orange border-l-[3px] border-l-transparent hover:border-l-kc-orange transition-all duration-150 ${
              link.isBold ? "font-semibold" : "font-medium"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </li>
  );
}
