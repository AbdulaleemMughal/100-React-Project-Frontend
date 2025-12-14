"use client";

import { Logo } from "./Logo";
import Link from "next/link";

const links = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "All Projects",
    path: "/projects",
  },
  {
    id: 3,
    name: "About",
    path: "/about",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    name: "Our Components",
    path: "/components",
  },
];

const policyLinks = [
  {
    id: 1,
    name: "Privacy",
    path: "/privacy",
  },
  {
    id: 2,
    name: "Terms",
    path: "/terms",
  },
  {
    id: 3,
    name: "Cookies",
    path: "/cookies",
  },
  {
    id: 4,
    name: "Contact",
    path: "/contact",
  },
];

export const Footer = () => {
  return (
    <footer className="pt-20 px-8 pb-12 border-t-4 border-blue-600 bg-[#e6e8e9]">
      <div className="w-7xl mx-auto max-xl:w-full">
        <div className="grid grid-cols-12 gap-2 border-b border-white pb-12 max-lg:space-y-10">
          <div className="col-span-6 max-lg:col-span-12">
            <div className="w-[70%]">
              <div className="mb-6">
                <Logo />
              </div>
              <p className="mb-6 font-[Inter] text-lg leading-relaxed text-gray-600">
                Elevate your web development skills with our comprehensive
                collection of{" "}
                <span className="text-blue-600 font-semibold">
                  100+ interactive React projects.
                </span>{" "}
                From beginner-friendly tutorials to advanced challenges.
              </p>
              <div className="flex items-center gap-12 font-[Inter]">
                <div>
                  <h2 className="text-blue-600 text-2xl font-bold">100+</h2>
                  <p className="text-sm text-gray-500">Projects</p>
                </div>
                <div>
                  <h2 className="text-purple-600 text-2xl font-bold">75K+</h2>
                  <p className="text-sm text-gray-500">Developers</p>
                </div>
                <div>
                  <h2 className="text-green-600 text-2xl font-bold">Free</h2>
                  <p className="text-sm text-gray-500">Forever</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 max-lg:col-span-12">
            <div className="mb-6 flex items-center">
              <span className="w-2 h-2 mr-3 rounded-full bg-blue-500 animate-pulse"></span>
              <h2 className="font-bold text-gray-900 font-[Inter] text-xl">
                Quick Links
              </h2>
            </div>
            <ul className="space-y-4">
              {links.map((link) => {
                return (
                  <Link
                    key={link.id}
                    href={link.path}
                    className="group font-[Inter] flex items-center cursor-pointer text-gray-600 hover:text-blue-600 transition-all duration-150"
                  >
                    {" "}
                    <span className="inline-block w-0 group-hover:w-4 h-0.5 bg-blue-500 transition-all duration-300 mr-0 group-hover:mr-3"></span>
                    {link.name}
                  </Link>
                );
              })}
            </ul>
          </div>
          <div className="col-span-3 max-lg:col-span-12">
            <div className="mb-6 flex items-center">
              <span className="w-2 h-2 mr-3 rounded-full bg-purple-500 animate-pulse"></span>
              <h2 className="font-bold text-gray-900 font-[Inter] text-xl">
                Connect
              </h2>
            </div>
            <Link
              href="https://github.com/AbdulaleemMughal/100-React-Project.git"
              target="_main"
              className="group bg-white p-4 flex items-center space-x-3 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="w-10 h-10 flex justify-center items-center bg-gray-900 rounded-xl transition-colors duration-300 group-hover:bg-blue-500">
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
                </svg>
              </div>
              <div className="font-[Inter]">
                <h2 className="text-gray-900 font-semibold text-lg transition-colors duration-300 group-hover:text-blue-600">
                  Github
                </h2>
                <p className="text-xs text-gray-500">Veiw source code</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="mx-auto w-7xl max-xl:w-full">
        <div className="flex items-center justify-between pt-8 font-[Inter] max-md:flex-col max-md:space-y-3">
          <div className="flex space-x-3 items-center">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <p className="text-sm text-gray-500">
              © 2025 100 JS Projects. Crafted with ❤️ for developers worldwide
            </p>
          </div>
          <div className="flex items-center space-x-5">
            {policyLinks.map((link) => {
              return (
                <Link
                  href={link.path}
                  key={link.id}
                  className="text-sm text-gray-500 hover:underline cursor-pointer hover:text-blue-500"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
};
