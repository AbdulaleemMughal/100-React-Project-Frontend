"use client";

import { GithubCard } from "@/components/GithubCard";
import { LiveDemoCard } from "@/components/LiveDemoCard";
import { ProjectDescription } from "@/components/ProjectDescription";
import { ProjectType } from "@/types/project.type";
import { Badge } from "@/UI/Badge";
import { Button } from "@/UI/Button";
import { MoveRight } from "lucide-react";
import { useParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SingleProject = () => {
  const router = useRouter();
  const { projectId } = useParams();
  const [project, setProject] = useState<ProjectType | undefined>(
    {} as ProjectType
  );

  useEffect(() => {
    // if (projectId) {
    //   const filteredProject = projects.find(
    //     (project) => project.id === Number(projectId)
    //   );
    //   setProject(filteredProject);
    // }
  }, []);

  return (
    <>
      <div className="bg-linear-to-r from-blue-600/10 to-purple-600/1">
        <div className="w-7xl mx-auto py-20 px-8 flex items-center justify-between gap-8 max-xl:w-full max-lg:flex-col-reverse max-sm:px-4">
          <div className="font-[Inter]">
            <Badge
              text="Project Details"
              variant="primary"
              dot={true}
              className="mb-8"
            />
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-bold bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb- leading-tight">
              Temperature Converter
            </h1>
            <h4 className="block text-base font-bold  xs:text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 text-gray-600">
              React Project
            </h4>
          </div>
          <div className="p-10 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl w-[460px] max-sm:w-full">
            <img
              src={project?.image}
              className="aspect-video w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
      <div className="mx-auto w-7xl mt-8 px-8 max-xl:w-full max-sm:px-4">
        <ProjectDescription
          description={project?.description}
          languages={project?.languages}
        />
        <div className="my-10 grid grid-cols-12 gap-6">
          <LiveDemoCard liveDemoLink={project?.liveDemo} />
          <GithubCard sourceCode={project?.sourceCode} />
        </div>
      </div>
      <div className="flex justify-center mb-20">
        <Button
          text="View All Projects"
          endIcon={<MoveRight />}
          onClick={() => {
            router.push("/projects");
          }}
          className="py-4 px-8"
        />
      </div>
    </>
  );
};

export default SingleProject;
