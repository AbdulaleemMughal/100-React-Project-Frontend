import { ProjectType } from "@/types/project.type";
import { Badge } from "@/UI/Badge";
import { ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

type ProjectCardProps = {
  data: ProjectType;
};

export const ProjectCard = ({ data }: ProjectCardProps) => {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/project/${data._id}`);
      }}
      className="group cursor-pointer col-span-3 p-6 border border-gray-200 shadow-lg transition-all duration-150 rounded-3xl flex flex-col items-start max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12 hover:shadow-2xl "
    >
      <div className="relative mb-4 max-sm:w-full">
        <img
          className="w-full h-40 rounded-2xl border border-gray-200 object-cover object-center"
          src={data.image}
        />
        <span
          className={`absolute top-3 right-3 px-2 py-1 text-xs text-white font-[Inter] rounded-2xl font-semibold ${
            data.popularity === "featured"
              ? "bg-purple-700"
              : data.popularity === "new"
              ? "bg-green-700"
              : "bg-blue-700"
          }`}
        >
          {data.popularity}
        </span>
      </div>
      <h3 className="text-lg font-bold text-gray-900 font-[Inter] mb-2 group-hover:text-blue-600">
        {data.name}
      </h3>
      <p className="text-gray-600 text-sm mb-4 font-[Inter] line-clamp-3 leading-relaxed">
        {data.description}
      </p>
      <div className="flex items-center flex-wrap gap-2 mb-4">
        {data.languages.map((lang: string) => {
          return (
            <Badge
              key={lang}
              text={lang}
              variant={
                lang === "html"
                  ? "danger"
                  : lang === "css"
                  ? "primary"
                  : lang === "javascript"
                  ? "warning"
                  : "success"
              }
              className="text-xs uppercase"
            />
          );
        })}
      </div>
      <p className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-semibold text-sm duration-200 hover:underline">
        View Project{" "}
        <span>
          <ChevronRight size={17} />
        </span>
      </p>
    </div>
  );
};
