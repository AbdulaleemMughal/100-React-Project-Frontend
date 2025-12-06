"use client";

import { Popularity } from "@/components/Popularity";
import { Projects } from "@/components/Project";
import { Badge } from "@/UI/Badge";
import { Button } from "@/UI/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="bg-[#f4eaff] flex flex-col items-center">
        <div className="pt-20 pb-16 px-8 flex flex-col items-center max-sm:w-full">
          <div className="mb-8">
            <Badge
              text="100+ Projects Available"
              variant="primary"
              dot={true}
            />
          </div>
          <div>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col items-center font-bold font-[Inter] bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              Javascript Projects
              <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 md:mt-2">
                for Web Developers
              </span>
            </h1>
            <p className="text-sm font-[inter] text-center xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
              Master web development with our curated colleaction of{" "}
              <span className="text-blue-600 font-semibold">
                beginner-friendly projects
              </span>{" "}
              built with HTML, CSS Javascript and ReactJS
            </p>
          </div>
          <div className="flex items-center gap-5 max-sm:flex-col">
            <Button
              text="Explore All Projects"
              onClick={() => router.push("/projects")}
              className="py-4 max-sm:w-full"
            />
            <button
              onClick={() => router.push("/about")}
              className="w-full font-[Inter] sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-blue-50 cursor-pointer text-center"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
      <Popularity />
      <Projects />
    </>
  );
}
