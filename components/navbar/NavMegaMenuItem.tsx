/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";
import { NavigationItem } from "../../interfaces/navigation";

interface NavMegaMenuItemProps {
  item: NavigationItem;
}

export default function NavMegaMenuItem({ item }: NavMegaMenuItemProps) {
  return (
    <li className="flex items-center h-full group">
      <a
        href={item.href}
        className="flex items-center justify-center gap-1.5 px-3.5 h-full text-white no-underline whitespace-nowrap text-sm font-semibold hover:bg-white/8 transition-all duration-200"
      >
        {item.label}
      </a>

      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 mt-0 ${
          item.widthClass || "w-[1180px] max-w-[95vw]"
        } bg-white rounded-lg shadow-[0_10px_40px_-8px_rgba(0,0,0,0.15)] p-6 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto transition-all duration-200 z-50 overflow-y-auto max-h-[75vh] review-text-scrollbar`}
      >
        <div
          className="grid gap-8"
          style={{
            gridTemplateColumns: `repeat(${item.columns?.length || 1}, minmax(0, 1fr))`,
          }}
        >
          {item.columns?.map((column, colIdx) => (
            <div key={colIdx} className="flex flex-col">
              {/* Column header */}
              <div className="flex items-center gap-2 text-[13px] font-bold uppercase tracking-widest text-kc-orange pb-2 mb-3 border-b-2 border-orange-100">
                {column.icon && <i className={`${column.icon} text-[12px]`}></i>}{" "}
                {column.title}
              </div>

              {/* Groups */}
              {column.groups.map((group, grIdx) => (
                <React.Fragment key={grIdx}>
                  {group.title && (
                    <h4 className="text-[13px] font-bold uppercase tracking-wide text-kc-blue-600 mb-1.5 mt-3.5 first:mt-0">
                      {group.href ? (
                        <a
                          href={group.href}
                          className="hover:text-kc-orange transition-colors duration-150"
                        >
                          {group.title}
                        </a>
                      ) : (
                        group.title
                      )}
                    </h4>
                  )}
                  {group.links.map((link, lnIdx) => (
                    <a
                      key={lnIdx}
                      href={link.href}
                      className={`flex items-center gap-1.5 py-[5px] px-2 -mx-1 rounded-md text-gray-600 hover:bg-orange-50 hover:text-kc-orange transition-all duration-150 text-[15px] font-medium ${
                        link.indent ? "pl-5 text-gray-500 text-[14px]" : ""
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
    </li>
  );
}
