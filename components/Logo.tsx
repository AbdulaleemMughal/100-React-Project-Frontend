import { useRouter } from "next/navigation";

export const Logo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="group cursor-pointer flex items-center space-x-3"
    >
      <div className="relative w-24 h-16 bg-linear-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-150">
        <span className="text-white text-xl font-bold">ReactJs</span>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-linear-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-md">
          <span className="text-white text-xs font-bold">100</span>
        </div>
      </div>
      <div className="flex items-baseline space-x-1 font-[Inter]">
        <span className="text-2xl sm:text-3xl font-bold bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent hidden sm:inline-flex">
          Projects
        </span>
        <span className="text-gray-600 text-lg font-medium max-sm:hidden">
          .com
        </span>
      </div>
    </div>
  );
};
