"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/floating-navbar";
import { cn } from "@/utils/cn";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Search">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Metric Based Ranking</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
            <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
            <HoveredLink href="https://navigatenet.streamlit.app/">Try Now !</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Members">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">N Divij</HoveredLink>
            <HoveredLink href="/individual">Lakshman Singh</HoveredLink>
            <HoveredLink href="/team">Laxmi Narayan</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}
