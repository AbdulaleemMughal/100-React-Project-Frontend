import { BookOpenText, Zap, BadgeCheck } from "lucide-react";

const plateformCard = [
  {
    id: 1,
    title: "Learn by Doing",
    icon: BookOpenText,
    desc: "Build real projects that you can add to your portfolio. Each project teaches practical skills you'll use in real-world development.",
    iconColor: "#2475ff",
  },
  {
    id: 1,
    title: "Learn by Doing",
    icon: Zap,
    desc: "Build real projects that you can add to your portfolio. Each project teaches practical skills you'll use in real-world development.",
    iconColor: "#00bf4b",
  },
  {
    id: 1,
    title: "Learn by Doing",
    icon: BadgeCheck,
    desc: "Build real projects that you can add to your portfolio. Each project teaches practical skills you'll use in real-world development.",
    iconColor: "#a73cff",
  },
];

export const PlateForm = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Why Choose Our Platform?
        </h1>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          We've designed our platform to provide the best learning experience
          for aspiring developers
        </p>
      </div>
      <div className="grid grid-cols-12 gap-8">
        {plateformCard.map((card) => {
          const Icon = card.icon;
          return (
            <div className="col-span-4 p-8 bg-white border border-white/30 rounded-3xl shadow-xl font-[Inter] max-lg:col-span-6 max-sm:col-span-12">
              <div
                style={{ backgroundColor: card.iconColor }}
                className="w-12 h-12 rounded-2xl flex justify-center items-center text-white"
              >
                <Icon />
              </div>
              <h2 className="text-xl font-bold text-gray-900 my-4">
                {card.title}
              </h2>
              <p className="text-gray-600">
                Build real projects that you can add to your portfolio. Each
                project teaches practical skills you'll use in real-world
                development.
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
};
