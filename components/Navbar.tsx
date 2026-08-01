/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import React, { useState, useEffect } from "react";
import { navigationConfig } from "../constants/navigation";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState<string | null>(null);
  const [activeMobileSubSubDropdown, setActiveMobileSubSubDropdown] = useState<string | null>(null);
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
    <>
      {/* Desktop Sticky Navigation */}
      <nav className="hidden md:block sticky top-0 z-[1000] w-full bg-gradient-to-r from-kc-navy-900 to-kc-navy-700 shadow-md">
        <div className="max-w-[1440px] mx-auto h-[68px] flex items-center justify-between px-6 gap-[18px] relative">
          {/* Logo */}
          <a href="/" className="flex items-center flex-shrink-0">
            <div className="flex items-center gap-2">
              <svg
                className="h-10 w-10 text-kc-gold fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-xl text-white leading-none tracking-wide">
                  Y2k Exim
                </span>
                <span className="text-[9px] text-kc-gold font-bold tracking-[0.2em] uppercase mt-0.5">
                  Group
                </span>
              </div>
            </div>
          </a>

          {/* Menu Items */}
          <ul className="flex items-center justify-evenly flex-1 h-full list-none p-0 m-0">
            {navigationConfig.map((item, idx) => {
              if (item.type === "link") {
                return (
                  <li key={idx} className="flex items-center h-full">
                    <a
                      href={item.href}
                      className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
                    >
                      {item.label}
                    </a>
                  </li>
                );
              }

              if (item.type === "dropdown") {
                return (
                  <li key={idx} className="flex items-center h-full group relative">
                    <a
                      href={item.href}
                      className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
                    >
                      {item.label}
                      <i className="fas fa-chevron-down text-[10px] text-kc-gold-light group-hover:rotate-180 transition-transform duration-200"></i>
                    </a>

                    <div className={`absolute top-full right-0 ${item.widthClass || "w-[260px]"} bg-white rounded-b-lg shadow-xl p-7 grid gap-7 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 z-50`}>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                          <i className="fas fa-bell"></i> {item.label}
                        </div>
                        {item.dropdownLinks?.map((link, lnIdx) => (
                          <a
                            key={lnIdx}
                            href={link.href}
                            className={`block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-850 text-[14px] ${
                              link.isBold ? "font-bold" : "font-medium"
                            } ${lnIdx > 0 ? "mt-2" : ""}`}
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              if (item.type === "mega") {
                return (
                  <li key={idx} className="flex items-center h-full group">
                    <a
                      href={item.href}
                      className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold relative after:content-[''] after:absolute after:left-3.5 after:right-3.5 after:bottom-3.5 after:h-[2px] after:bg-kc-orange after:scale-x-0 group-hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 hover:bg-white/8 transition-all duration-200"
                    >
                      {item.label}
                      <i className="fas fa-chevron-down text-[10px] text-kc-gold-light group-hover:rotate-180 transition-transform duration-200"></i>
                    </a>

                    <div className={`absolute top-full left-0 ${item.widthClass || "w-[1180px] max-w-[95vw]"} bg-white rounded-b-lg shadow-xl p-7 grid gap-7 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-250 z-50 overflow-y-auto max-h-[75vh] review-text-scrollbar`}>
                      <div className="flex items-start gap-9">
                        <div
                          className="flex-1 grid gap-6"
                          style={{ gridTemplateColumns: `repeat(${item.columns?.length || 1}, minmax(0, 1fr))` }}
                        >
                          {item.columns?.map((column, colIdx) => (
                            <div key={colIdx} className="flex flex-col">
                              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-kc-orange pb-2.5 mb-4 border-b border-gray-100">
                                {column.icon && <i className={column.icon}></i>} {column.title}
                              </div>
                              {column.groups.map((group, grIdx) => (
                                <React.Fragment key={grIdx}>
                                  {group.title && (
                                    <h4 className="text-xs font-bold uppercase tracking-wide text-kc-blue-600 mb-2 mt-4 first:mt-0">
                                      {group.href ? (
                                        <a href={group.href} className="hover:text-kc-orange">{group.title}</a>
                                      ) : (
                                        group.title
                                      )}
                                    </h4>
                                  )}
                                  {group.links.map((link, lnIdx) => (
                                    <a
                                      key={lnIdx}
                                      href={link.href}
                                      className={`block py-1.5 px-2 -mx-2 rounded hover:bg-kc-blue-100 hover:text-kc-blue-600 hover:pl-3.5 transition-all duration-200 text-gray-700 text-[13px] font-medium ${
                                        link.indent ? "pl-4 text-gray-600 text-[12px] hover:pl-5" : ""
                                      }`}
                                    >
                                      {link.indent ? `↳ ${link.label}` : link.label}
                                    </a>
                                  ))}
                                </React.Fragment>
                              ))}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              }

              return null;
            })}
          </ul>

          {/* Search trigger */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="w-9 h-9 grid place-items-center bg-white/8 border-none rounded-full text-white cursor-pointer hover:bg-white/18 transition-all duration-220"
              aria-label="Open search overlay"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Top Navigation & Menu Panel */}
      <nav className="block md:hidden sticky top-0 z-[1000] w-full bg-gradient-to-r from-kc-navy-900 to-kc-navy-700 shadow-md">
        <div className="flex items-center justify-between px-4 h-[68px]">
          {/* Logo */}
          <a href="/" className="mm-logo">
            <div className="flex items-center gap-1.5">
              <svg
                className="h-8 w-8 text-kc-gold fill-none stroke-current stroke-2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-base text-white leading-none tracking-wide">
                  Y2k Exim
                </span>
                <span className="text-[8px] text-kc-gold font-bold tracking-[0.2em] uppercase mt-0.5">
                  Group
                </span>
              </div>
            </div>
          </a>

          {/* Mobile Buttons */}
          <div className="flex items-center">
            <button
              onClick={() => setSearchOpen(true)}
              className="bg-none border-none text-white p-2.5 text-lg cursor-pointer"
              aria-label="Open Search"
            >
              <i className="fas fa-search"></i>
            </button>
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
          <div className="bg-kc-navy-900 border-t border-white/10 max-h-[calc(100vh-68px)] overflow-y-auto w-full select-none pb-8 shadow-inner animate-popup-fade">
            <ul className="list-none m-0 p-0">
              {navigationConfig.map((item, idx) => {
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
                                  <ul className="bg-black/10 list-none m-0 p-0 pl-4 border-b border-white/5 text-[13px]">
                                    {column.groups.map((group, grpIdx) => {
                                      // If group has no title, render its links flat under the column
                                      if (!group.title) {
                                        return (
                                          <div key={grpIdx} className="flex flex-col pl-4 text-xs bg-black/20 pb-2 border-b border-white/5 last:border-b-0">
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
                                            <div className="flex flex-col pl-4 text-xs bg-black/20 pb-2">
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

      {/* Google Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/75 flex justify-center items-center z-[99999] animate-popup-fade select-none">
          <div className="w-[900px] max-w-[90%] bg-white p-[30px] rounded-lg relative">
            {/* Close Search Button */}
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute -top-12 right-0 text-white border-none bg-transparent text-3xl cursor-pointer hover:scale-110 transition duration-200"
              aria-label="Close search overlay"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Embedded Google GCSE */}
            <div className="w-full">
              <iframe
                src="https://cse.google.com/cse.js?cx=048b28fae166745ae"
                className="hidden"
                title="GCSE Loader"
              />
              <div
                dangerouslySetInnerHTML={{
                  __html: `
                  <script async src="https://cse.google.com/cse.js?cx=048b28fae166745ae"></script>
                  <div class="gcse-search"></div>
                `,
                }}
              />
            </div>
            <p className="mt-4 text-center text-gray-600 text-sm">
              Type your search query and press Enter
            </p>
          </div>
        </div>
      )}
    </>
  );
}
