"use client";

import { Button } from "@/UI/Button";
import { Logo } from "./Logo";
import { Menu, MoveRight } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { headerNav } from "@/utils/headerNav";
import { SidebarDrawer } from "@/UI/SidebarDrawer";
import { useState } from "react";

export const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  return (
    <header className="flex justify-center bg-linear-to-r from-slate-50/95 via-white/95 to-blue-50/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
      <div className="w-7xl py-4 flex items-center justify-between max-xl:px-5">
        <span
          className="p-1.5 border border-gray-400 rounded-md hidden max-lg:block"
          onClick={() => setOpenDrawer(true)}
        >
          <Menu color="gray" size={24} />
        </span>
        <div className="max-lg:hidden">
          <Logo />
        </div>
        <div className="flex items-center space-x-1">
          {headerNav.map((nav) => {
            if (nav.type === "text") {
              return (
                <div
                  key={nav.id}
                  onClick={() => router.push(nav.path)}
                  className={`px-4 py-2 cursor-pointer hover:text-blue-700 hover:bg-blue-100 font-[Inter] rounded-xl font-medium transition-all duration-300 max-lg:hidden inline-flex ${
                    pathname === nav.path
                      ? "text-blue-700 bg-blue-100"
                      : "text-gray-800"
                  }`}
                >
                  {nav.title}
                </div>
              );
            } else {
              return (
                <Button
                  key={nav.id}
                  text={nav.title}
                  onClick={() => router.push(nav.path)}
                  endIcon={<MoveRight size={19} />}
                />
              );
            }
          })}
        </div>
      </div>
      <SidebarDrawer open={openDrawer} setOpen={setOpenDrawer} />
    </header>
  );
};
