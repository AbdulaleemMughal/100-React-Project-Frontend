import { Eye, SquareArrowOutUpRight } from "lucide-react";

type LiveDemoCardProps = {
  liveDemoLink: string | undefined;
};

export const LiveDemoCard = ({ liveDemoLink }: LiveDemoCardProps) => {
  return (
    <div className="col-span-6 bg-linear-to-br from-green-600 to-green-700 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden relative max-md:col-span-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-size-[20px_20px]"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
            <Eye />
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Live Demo</h3>
        </div>
        <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
          Experience the project in action with our interactive live demo.
        </p>
        <div
          onClick={() => {
            window.open(liveDemoLink, "_blank", "noopener,noreferrer");
          }}
          className="cursor-pointer inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl sm:rounded-2xl border border-white/30 text-sm sm:text-base"
        >
          <span className="mr-2">View Live Demo</span>
          <SquareArrowOutUpRight size={15} />
        </div>
      </div>
    </div>
  );
};
