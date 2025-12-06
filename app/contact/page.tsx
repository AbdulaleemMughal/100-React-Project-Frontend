import { FAQ } from "@/components/FAQ";
import { Badge } from "@/UI/Badge";
import { Clock, Mail } from "lucide-react";
import Link from "next/link";

const contactInfo = [
  {
    id: 1,
    name: "Email",
    link: "mughalabdulaleem@gmail.com",
    desc: "General inquiries and support",
    icon: Mail,
    iconColor: "#2576ff",
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/AbdulaleemMughal",
    desc: "Report issues & contribute",
    svg: (
      <svg
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"></path>
      </svg>
    ),
    iconColor: "#00c04c",
  },
  {
    id: 3,
    name: "Response Time",
    link: "Within 24 - 48 hours",
    time: "Monday - Friday",
    icon: Clock,
    iconColor: "#a83eff",
  },
];

const Contact = () => {
  return (
    <>
      <div className="bg-[#f4eaff]">
        <div className="pt-20 pb-16 px-8 flex flex-col items-center max-sm:w-full">
          <div className="mb-8">
            <Badge text="Contact Us" variant="primary" dot={true} />
          </div>
          <div>
            <h1 className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col items-center font-bold font-[Inter] bg-linear-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent mb-4 md:mb-6 leading-tight">
              Get in Touch
            </h1>
            <p className="text-sm font-[inter] text-center xs:text-base sm:text-lg md:text-xl lg:text-xl text-gray-600 max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl mx-auto mb-8 md:mb-12 leading-relaxed px-4 sm:px-0">
              We'd love to hear from you! Whether you have questions, feedback,
              or just want to say hello, don't hesitate to reach out.
            </p>
          </div>
        </div>
      </div>
      <div className="w-7xl mx-auto font-[Inter] max-xl:w-full">
        <div className="flex gap-10 px-36 py-12 max-lg:flex-col max-xl:px-20 max-md:px-10 max-sm:px-5">
          <div className="p-8 bg-white rounded-3xl shadow-xl w-1/2 max-lg:w-full">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact information
            </h3>
            {contactInfo.map((info) => {
              const Icon = info?.icon;
              return (
                <div key={info.id} className=" mb-6 flex items-start space-x-4">
                  <div
                    style={{ backgroundColor: info.iconColor }}
                    className="w-10 h-10 flex justify-center items-center rounded-xl text-white"
                  >
                    {Icon ? <Icon size={20} /> : info?.svg}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1 text-sm sm:text-base">
                      {info.name}
                    </h4>{" "}
                    {info.name === "Email" ? (
                      <Link
                        href={`mailto:${info.link}`}
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
                      >
                        {info.link}
                      </Link>
                    ) : info.name === "Github" ? (
                      <Link
                        href={info.link}
                        target="_main"
                        className="text-blue-600 hover:text-blue-700 font-medium text-sm sm:text-base break-all"
                      >
                        {info.link}
                      </Link>
                    ) : (
                      <p className="text-gray-600 text-sm sm:text-base">
                        {info.link}
                      </p>
                    )}
                    <p className="text-gray-600 text-xs sm:text-sm mt-1">
                      General Information
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <FAQ />
        </div>
      </div>
    </>
  );
};

export default Contact;
