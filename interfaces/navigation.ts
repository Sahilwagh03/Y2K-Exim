export interface NavLink {
  label: string;
  href: string;
  indent?: boolean;
}

export interface NavGroup {
  title: string;
  href?: string;
  links: NavLink[];
}

export interface NavColumn {
  title: string;
  icon?: string;
  groups: NavGroup[];
}

export interface NavigationItem {
  label: string;
  href: string;
  type: "link" | "mega" | "dropdown";
  widthClass?: string; // Desktop dropdown width
  columns?: NavColumn[];
  dropdownLinks?: { label: string; href: string; isBold?: boolean }[];
}
