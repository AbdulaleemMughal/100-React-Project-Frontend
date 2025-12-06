import { Building } from "@/components/Building";
import { MissionCard } from "@/components/MissionCard";
import { PlateForm } from "@/components/PlateForm";
import { Badge } from "@/UI/Badge";

const AboutPage = () => {
  return (
    <>
      <div className="bg-[#f4eaff]">
        <div className="pt-20 pb-16 px-8 flex flex-col items-center max-sm:w-full">
          <div className="mb-8">
            <Badge text="About Us" variant="primary" dot={true} />
          </div>
          <div>
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col items-center font-bold font-[Inter] bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              About 100 JS Projects
            </h1>
            <p className="text-sm font-[inter] text-center xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
              We're passionate about making web development accessible to
              everyone. Our mission is to provide hands-on learning through
              practical JavaScript projects.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-7xl py-20 px-8 max-xl:w-full">
        <div className="flex items-center gap-10 max-md:flex-col">
          <div className="flex flex-col space-y-5 font-[Inter] w-1/2 max-md:w-full">
            <h1 className="text-4xl text-gray-900 font-bold max-sm:text-3xl">
              Our Mission
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              At 100 JS Projects, we believe the best way to learn programming
              is by building real projects. That's why we've curated a
              comprehensive collection of JavaScript projects that take you from
              beginner to advanced developer.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Each project is carefully designed to teach specific concepts
              while building something practical and engaging. Whether you're
              just starting your coding journey or looking to enhance your
              skills, our projects provide the perfect learning path.
            </p>
          </div>
          <div className="w-1/2 max-md:w-full">
            <MissionCard />
          </div>
        </div>
        <div className="mt-20 font-[Inter]">
          <PlateForm />
        </div>
        <div className="mt-20 font-[Inter]">
          <Building />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
