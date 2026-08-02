"use client";

import { NavigationItem } from "../../interfaces/navigation";
import NavLinkItem from "./NavLinkItem";
import NavDropdownItem from "./NavDropdownItem";
import NavMegaMenuItem from "./NavMegaMenuItem";

interface DesktopMenuProps {
  items: NavigationItem[];
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
  return (
    <ul className="flex items-center justify-evenly flex-1 h-full list-none p-0 m-0">
      {items.map((item, idx) => {
        if (item.type === "link") {
          return <NavLinkItem key={idx} item={item} />;
        }

        if (item.type === "dropdown") {
          return <NavDropdownItem key={idx} item={item} />;
        }

        if (item.type === "mega") {
          return <NavMegaMenuItem key={idx} item={item} />;
        }

        return null;
      })}
    </ul>
  );
}
