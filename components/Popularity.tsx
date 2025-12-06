import { DollarSign, Users, ChartNoAxesGantt } from "lucide-react";

const cardDetails = [
  {
    id: 1,
    value: "100+",
    title: "Interactive Projects",
    desc: "Ready to explore",
    iconColor: "#277aff",
    textColor: "text-blue-600",
    cardColor: "#f4f7ff",
    icon: ChartNoAxesGantt,
  },
  {
    id: 2,
    value: "10K+",
    title: "Active Developers",
    desc: "Learning together",
    iconColor: "#aa41ff",
    textColor: "text-purple-600",
    cardColor: "#faf6ff",
    icon: Users,
  },
  {
    id: 3,
    value: "100%",
    title: "Free Access",
    desc: "Always & forever",
    iconColor: "#00c24d",
    textColor: "text-green-600",
    cardColor: "#f3faf9",
    icon: DollarSign,
  },
];

export const Popularity = () => {
  return (
    <div className="bg-[#f4eaff]">
      <div className="pb-16 px-6 mx-auto w-7xl grid grid-cols-12 gap-6 max-xl:w-5xl max-lg:w-2xl max-md:w-full">
        {cardDetails.map((card) => {
          const Icon = card.icon;
          return (
            <div
              key={card.id}
              style={{ backgroundColor: card.cardColor }}
              className="p-8 col-span-4 flex flex-col items-center rounded-3xl shadow-lg max-lg:col-span-6 max-md:col-span-12"
            >
              <div
                style={{ backgroundColor: card.iconColor }}
                className="mb-4 w-12 h-12 flex justify-center items-center rounded-2xl"
              >
                <Icon color="white" />
              </div>

              <h1
                className={`mb-3 text-4xl font-[Inter] font-semibold ${card.textColor}`}
              >
                {card.value}
              </h1>

              <h5 className="mb-2 text-gray-700 font-[Inter] text-lg font-medium">
                {card.title}
              </h5>

              <p className="text-gray-400 text-sm">{card.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
