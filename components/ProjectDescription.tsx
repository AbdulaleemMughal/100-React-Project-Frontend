import { Badge } from "@/UI/Badge";
import { FileText } from "lucide-react";

type ProjectDescriptionProps = {
  description: string | undefined;
  languages: string[] | undefined;
};

export const ProjectDescription = ({
  description,
  languages,
}: ProjectDescriptionProps) => {
  return (
    <div className="font-[Inter] bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 mt-6">
      <div className="flex items-center gap-5 mb-6">
        <span className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center">
          <FileText color="white" />
        </span>
        <h2 className="text-2xl font-bold text-gray-900">
          Project Description
        </h2>
      </div>
      <p className="text-gray-600 text-lg leading-relaxed mb-6">
        {description}
      </p>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">
        Technologies Used
      </h3>
      <div className="flex items-center gap-3 flex-wrap">
        {languages?.map((lang) => {
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
              className="uppercase"
            />
          );
        })}
      </div>
    </div>
  );
};
