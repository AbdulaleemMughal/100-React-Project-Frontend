import { components } from "@/utils/components";

const OurComponents = () => {
  return (
    <>
      <div className="w-7xl mx-auto my-5 max-xl:w-full max-xl:px-5">
        <h1 className="text-4xl font-semibold font-[Inter] max-lg:text-3xl max-md:text-2xl">
          All Components
        </h1>
        <div className="mt-10">
          <div className="grid grid-cols-12 gap-4">
            {components.map((comp) => {
              return (
                <span className="col-span-3 max-sm:col-span-6">
                  {comp.name}
                </span>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurComponents;
