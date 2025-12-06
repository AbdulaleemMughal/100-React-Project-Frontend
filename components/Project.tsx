import { Badge } from "@/UI/Badge";
import { ProjectCard } from "./ProjectCard";
import { Button } from "@/UI/Button";
import { MoveRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "@/constants/baseUrl";
import { ProjectType } from "@/types/project.type";

export const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<ProjectType[]>([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(BASE_URL + "/get-project");
      setProjects(res.data.data);
    })();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <div className="w-7xl flex flex-col items-center px-8 py-16 max-sm:py-8 max-sm:px-4">
          <Badge
            text="Featured Projects"
            variant="primary"
            dot={true}
            className="mb-8"
          />
          <h1 className="text-5xl flex flex-col items-center font-bold font-[Inter] bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight max-md:text-4xl max-sm:text-2xl">
            Start Building Today
          </h1>
          <p className="text-sm text-center font-[Inter] xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
            Dive into our handpicked collection of projects designed to take you
            from beginner to confident developer
          </p>
          <div className="mt-8 p-8 shadow-xl rounded-xl w-full max-sm:px-1 max-sm:py-2 max-sm:shadow-none">
            <div className="grid grid-cols-12 gap-4">
              {projects.map((project) => {
                return <ProjectCard data={project} key={project._id} />;
              })}
            </div>
          </div>
          <div className="mt-10">
            <Button
              text="Veiw All Projects"
              onClick={() => router.push("/projects")}
              endIcon={<MoveRight />}
              className="text-xl py-4 px-10 max-sm:text-lg max-sm:px-6 max-sm:py-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};
