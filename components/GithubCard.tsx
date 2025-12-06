import { SquareArrowOutUpRight } from "lucide-react";

type GithubCardProps = {
  sourceCode: string | undefined;
};

export const GithubCard = ({ sourceCode }: GithubCardProps) => {
  return (
    <div className=" col-span-6 bg-linear-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white overflow-hidden relative max-md:col-span-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.1)_1px,transparent_0)] bg-size-[20px_20px]"></div>
      <div className="relative z-10">
        <div className="flex items-center mb-3 sm:mb-4">
          <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
            </svg>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold">Source Code</h3>
        </div>
        <p className="text-white/90 mb-4 sm:mb-6 text-sm sm:text-base">
          Explore the complete source code and learn how it's built.
        </p>
        <div
          onClick={() => {
            window.open(sourceCode, "_blank", "noopener,noreferrer");
          }}
          className="cursor-pointer inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold rounded-xl sm:rounded-2xl border border-white/30 text-sm sm:text-base"
        >
          <span className="mr-2">View on GitHub</span>
          <SquareArrowOutUpRight size={15} />
        </div>
      </div>
    </div>
  );
};
