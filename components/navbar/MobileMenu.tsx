/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState } from "react";
import { NavigationItem } from "../../interfaces/navigation";
import NavbarLogo from "./NavbarLogo";

interface MobileMenuProps {
  items: NavigationItem[];
  searchOpen: boolean;
  setSearchOpen: (open: boolean) => void;
}

export default function MobileMenu({ items, searchOpen, setSearchOpen }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState<string | null>(null);
  const [activeMobileSubSubDropdown, setActiveMobileSubSubDropdown] = useState<string | null>(null);

  const toggleMobileDropdown = (menu: string) => {
    setActiveMobileDropdown(activeMobileDropdown === menu ? null : menu);
    setActiveMobileSubDropdown(null);
    setActiveMobileSubSubDropdown(null);
  };

  const toggleMobileSubDropdown = (submenu: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileSubDropdown(activeMobileSubDropdown === submenu ? null : submenu);
    setActiveMobileSubSubDropdown(null);
  };

  const toggleMobileSubSubDropdown = (subsubmenu: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveMobileSubSubDropdown(activeMobileSubSubDropdown === subsubmenu ? null : subsubmenu);
  };

  return (
    <nav className="block md:hidden sticky top-0 z-[1000] w-full bg-gradient-to-r from-kc-navy-900 to-kc-navy-700 shadow-md">
      <div className="flex items-center justify-between px-4 h-[68px]">
        <NavbarLogo size="mobile" />

        {/* Mobile Buttons */}
        <div className="flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="bg-none border-none text-white p-2.5 text-lg cursor-pointer"
            aria-label="Toggle Menu"
          >
            <i className={mobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </div>

      {/* Collapsible Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-kc-navy-900 border-t border-white/10 max-h-[calc(100vh-68px)] overflow-y-auto w-full pb-8 shadow-inner animate-popup-fade">
          <ul className="list-none m-0 p-0">
            {items.map((item, idx) => {
              if (item.type === "link") {
                return (
                  <li key={idx}>
                    <a
                      href={item.href}
                      className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              const dropdownKey = item.label.toLowerCase();
              const isDropdownOpen = activeMobileDropdown === dropdownKey;

              return (
                <li key={idx}>
                  <div
                    onClick={() => toggleMobileDropdown(dropdownKey)}
                    className="flex items-center justify-between text-white text-[15px] font-semibold p-[13px_18px] border-b border-white/8 hover:bg-white/6 cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <i className={`fas text-xs text-kc-gold-light ${isDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                  </div>

                  {isDropdownOpen && (
                    <ul className="bg-white/4 list-none m-0 p-0 text-orange-100 text-sm">
                      {item.type === "dropdown" ? (
                        item.dropdownLinks?.map((link, lIdx) => (
                          <li key={lIdx}>
                            <a
                              href={link.href}
                              className="block p-[10px_24px] border-b border-white/5 hover:bg-white/6 text-gray-300 font-semibold"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))
                      ) : (
                        item.columns?.map((column, colIdx) => {
                          const subDropdownKey = `${dropdownKey}-${column.title.toLowerCase()}`;
                          const isSubDropdownOpen = activeMobileSubDropdown === subDropdownKey;

                          return (
                            <li key={colIdx}>
                              <div
                                onClick={(e) => toggleMobileSubDropdown(subDropdownKey, e)}
                                className="flex items-center justify-between p-[10px_24px] border-b border-white/5 hover:bg-white/6 cursor-pointer text-gray-300 font-semibold"
                              >
                                <span>{column.title}</span>
                                <i className={`fas text-[10px] ${isSubDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                              </div>

                              {isSubDropdownOpen && (
                                <ul className="bg-black/10 list-none m-0 p-0 pl-4 border-b border-white/5 text-[15px]">
                                  {column.groups.map((group, grpIdx) => {
                                    // If group has no title, render its links flat under the column
                                    if (!group.title) {
                                      return (
                                        <div key={grpIdx} className="flex flex-col pl-4 text-sm bg-black/20 pb-2 border-b border-white/5 last:border-b-0">
                                          {group.links.map((link, lnIdx) => (
                                            <a key={lnIdx} href={link.href} className="p-2 hover:text-white">
                                              {link.label}
                                            </a>
                                          ))}
                                        </div>
                                      );
                                    }

                                    const subSubDropdownKey = `${subDropdownKey}-${group.title.toLowerCase()}`;
                                    const isSubSubDropdownOpen = activeMobileSubSubDropdown === subSubDropdownKey;

                                    return (
                                      <li key={grpIdx}>
                                        <div
                                          onClick={(e) => toggleMobileSubSubDropdown(subSubDropdownKey, e)}
                                          className="flex items-center justify-between p-[8px_20px] text-gray-400 hover:bg-white/5 cursor-pointer font-medium"
                                        >
                                          <span>{group.title}</span>
                                          <i className={`fas text-[9px] ${isSubSubDropdownOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
                                        </div>

                                        {isSubSubDropdownOpen && (
                                          <div className="flex flex-col pl-4 text-sm bg-black/20 pb-2">
                                            {group.links.map((link, lnIdx) => (
                                              <a key={lnIdx} href={link.href} className="p-2 hover:text-white">
                                                {link.label}
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </li>
                                    );
                                  })}
                                </ul>
                              )}
                            </li>
                          );
                        })
                      )}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
