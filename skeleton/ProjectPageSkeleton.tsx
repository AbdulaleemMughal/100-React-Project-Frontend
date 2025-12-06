export const ProjectPageSkeleton = () => {
  return (
    <>
      <div className="bg-linear-to-r from-blue-600/10 to-purple-600/1">
        <div className="w-7xl mx-auto py-20 px-8 flex items-center justify-between gap-8 max-xl:w-full max-lg:flex-col-reverse max-sm:px-4">
          <div className="w-full">
            <div className="py-2 px-4 mb-8 flex items-center gap-2 w-[140px] h-9 bg-blue-200 rounded-full">
              <span className="h-2 w-2 rounded-full animate-pulse bg-blue-400"></span>
              <p className="flex-1 bg-blue-400 h-3 rounded-[2px] animate-pulse"></p>
            </div>
            <div className="h-10 rounded-md w-[50%] bg-gray-300 animate-pulse mb-3 max-sm:w-full"></div>
            <div className="h-8 rounded-md w-[40%] bg-gray-300 animate-pulse max-sm:w-[90%]"></div>
          </div>
          <div className="p-10 bg-linear-to-br from-blue-500/5 to-purple-500/5 rounded-2xl sm:rounded-3xl w-[460px] max-sm:w-full">
            <div className="bg-gray-300 h-[223px] w-[390px] rounded-2xl max-sm:w-full"></div>
          </div>
        </div>
      </div>
      <div className="p-8  max-sm:p-4">
        <div className="w-7xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-xl border border-white/30 mt-6 max-xl:w-full">
          <div className="flex items-center gap-5 mb-6">
            <span className="w-12 h-12 bg-gray-300 rounded-2xl animate-pulse"></span>
            <p className="w-40 h-6 bg-gray-300 animate-pulse rounded-sm"></p>
          </div>
          <div className="h-4 rounded-[2px] mb-3 w-full bg-gray-300 animate-pulse"></div>
          <div className="h-4 rounded-[2px] mb-3 w-full bg-gray-300 animate-pulse"></div>
          <div className="h-4 rounded-[2px] mb-3 w-full bg-gray-300 animate-pulse"></div>
          <div className="h-4 rounded-[2px] mb-9 w-[30%] bg-gray-300 animate-pulse"></div>
          <div className="h-5 w-[15%] bg-gray-300 animate-pulse mb-3"></div>
          <div className="flex items-center flex-wrap gap-3">
            <div className="py-2 px-4 mb-8 flex items-center gap-2 w-[70px] h-6 bg-blue-200 rounded-full"></div>
            <div className="py-2 px-4 mb-8 flex items-center gap-2 w-[70px] h-6 bg-red-200 rounded-full"></div>
            <div className="py-2 px-4 mb-8 flex items-center gap-2 w-[70px] h-6 bg-green-200 rounded-full"></div>
          </div>
        </div>
      </div>
    </>
  );
};
