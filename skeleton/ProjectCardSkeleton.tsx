export const ProjectCardSkeleton = () => {
  return (
    <>
      <div className="col-span-3 p-6 shadow-lg rounded-3xl max-lg:col-span-4 max-md:col-span-6 max-sm:col-span-12">
        <div className="inline-block w-full h-40 bg-gray-300 rounded-2xl animate-pulse"></div>
        <div className="h-7 w-[70%] mb-4 bg-gray-300 animate-pulse rounded-sm"></div>
        <div className="h-4 w-[90%] mb-2.5 bg-gray-300 animate-pulse rounded-sm"></div>
        <div className="h-4 w-[90%] mb-2.5 bg-gray-300 animate-pulse rounded-sm"></div>
        <div className="h-4 w-[60%] mb-2.5 bg-gray-300 animate-pulse rounded-sm"></div>
        <div className="flex items-center gap-2 mb-3">
          <span className="h-6 w-16 rounded-full bg-red-200 animate-pulse"></span>
          <span className="h-6 w-16 rounded-full bg-blue-200 animate-pulse"></span>
          <span className="h-6 w-16 rounded-full bg-green-200 animate-pulse"></span>
        </div>
        <div className="h-4 w-[60%] mb-2.5 bg-blue-300 animate-pulse rounded-sm"></div>
      </div>
    </>
  );
};
