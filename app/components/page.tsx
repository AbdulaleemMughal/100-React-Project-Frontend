"use client";

import { components } from "@/utils/components";
import { useRouter } from "next/navigation";

const OurComponents = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-7xl mx-auto my-5 max-xl:w-full max-xl:px-5">
        <h1 className="text-4xl font-semibold font-[Inter] max-lg:text-3xl max-md:text-2xl">
          All Components
        </h1>
        <div className="mt-10">
          <div className="grid grid-cols-12 gap-4">
            {components.map((comp) => {
              return (
                <span
                  onClick={() => router.push(`/components/${comp.name}`)}
                  className="col-span-3 text-center px-3 py-2 transition-all dutration-150 cursor-pointer rounded-md hover:bg-blue-200 hover:text-blue-700 max-sm:col-span-6"
                >
                  {comp.title}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurComponents;
