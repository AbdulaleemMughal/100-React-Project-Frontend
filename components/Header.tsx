"use client";

import { Button } from "@/UI/Button";
import { Logo } from "./Logo";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";

const headerNav = [
  {
    id: 1,
    title: "Home",
    type: "text",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    type: "text",
    path: "/about",
  },
  {
    id: 3,
    title: "All Projects",
    type: "buttom",
    path: "/projects",
  },
];

export const Header = () => {
  const router = useRouter();

  return (
    <header className="flex justify-center bg-linear-to-r from-slate-50/95 via-white/95 to-blue-50/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl">
      <div className="w-7xl py-4 px-8 flex items-center justify-between">
        <Logo />
        <div className="flex items-center space-x-1">
          {headerNav.map((nav) => {
            if (nav.type === "text") {
              return (
                <div
                  key={nav.id}
                  onClick={() => router.push(nav.path)}
                  className="px-4 py-2 cursor-pointer text-gray-800 hover:text-blue-700 hover:bg-blue-100 font-[Inter] rounded-xl font-medium transition-all duration-300 max-sm:hidden inline-flex"
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
    </header>
  );
};
