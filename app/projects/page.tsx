"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { BASE_URL } from "@/constants/baseUrl";
import { ProjectCardSkeleton } from "@/skeleton/ProjectCardSkeleton";
import { ProjectType } from "@/types/project.type";
import { Badge } from "@/UI/Badge";
import axios from "axios";
import { useEffect, useState } from "react";

const ProjectPage = () => {
  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(BASE_URL + "/get-project");
        setAllProjects(res.data.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <>
      <div className="bg-[#f4eaff] flex flex-col items-center">
        <div className="pt-20 pb-16 px-8 flex flex-col items-center max-sm:w-full">
          <div className="mb-8">
            <Badge text="All Projects" variant="primary" dot={true} />
          </div>
          <div className="font-[Inter]">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl flex flex-col items-center font-bold bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              Explore Our Complete
              <span className="block text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl mt-1 md:mt-2">
                Project Collection
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed font-medium">
              Discover our{" "}
              <span className="text-blue-600 font-semibold">
                ReactJs projects
              </span>{" "}
              designed to help you master web development
            </p>
          </div>
        </div>
      </div>
      <div className="w-7xl flex flex-col items-center px-8 py-16 mx-auto max-sm:py-8 max-sm:px-4 max-xl:w-full">
        <div className="p-8 shadow-xl rounded-xl w-full max-sm:px-1 max-sm:py-2 max-sm:shadow-none">
          <div className="grid grid-cols-12 gap-4">
            {loading
              ? Array.from({ length: 8 }).map((_, idx) => {
                  return <ProjectCardSkeleton key={idx} />;
                })
              : allProjects.map((project) => {
                  return <ProjectCard data={project} key={project._id} />;
                })}
            {}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectPage;
