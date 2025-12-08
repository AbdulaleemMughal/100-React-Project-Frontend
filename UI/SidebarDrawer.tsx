"use client";

import React, { useEffect, useState } from "react";
import { Drawer } from "@mui/material";
import { Logo } from "@/components/Logo";
import { ChevronDown, X } from "lucide-react";
import { headerNav } from "@/utils/headerNav";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavType = {
  id: number;
  title: string;
  type: string;
  path: string;
};

interface SidebarDrawerProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const SidebarDrawer = ({ open, setOpen }: SidebarDrawerProps) => {
  const path = usePathname();
  const [activeNav, setActiveNav] = useState<NavType | undefined>(
    {} as NavType
  );
  const [openChild, setOpenChild] = useState<boolean>(false);

  useEffect(() => {
    const activePath = headerNav.find((nav) => nav.path === path);
    setActiveNav(activePath);
  }, [path]);

  return (
    <Drawer
      open={open}
      onClose={() => {
        setOpen(false);
      }}
    >
      <div className="px-2 py-4">
        <div className="flex items-center ">
          <Logo />
          <span className="ml-20" onClick={() => setOpen(false)}>
            <X color="gray" />
          </span>
        </div>
        <div className="mt-4 flex flex-col gap-1 items-start">
          {headerNav
            .filter((nav) => nav.type === "text")
            .map((nav) => {
              return (
                <Link
                  onClick={() => {
                    setOpen(false);
                  }}
                  href={nav.path}
                  key={nav.id}
                  className={`py-2 px-2 w-full flex items-center justify-between font-[Inter] ${
                    activeNav?.path === nav.path ? "bg-accent" : ""
                  }`}
                >
                  {nav.title}
                </Link>
              );
            })}
        </div>
      </div>
    </Drawer>
  );
};
