import { CodeEditor } from "@/shared/CodeEditor";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const accordions = [
  {
    id: 1,
    title: "Accordion Item #1",
    desc: "This is the first item’s accordion body",
  },
  {
    id: 2,
    title: "Accordion Item #2",
    desc: "This is the second item’s accordion body",
  },
  {
    id: 3,
    title: "Accordion Item #3",
    desc: "This is the third item’s accordion body",
  },
];

export const Accordion = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <div className="flex flex-col">
      <div className="border border-gray-200 rounded-md">
        <div className="p-6">
          <div className="border border-gray-200 rounded-md overflow-hidden">
            {accordions.map((acc, index) => {
              const isActive = activeAccordion === acc.id;

              return (
                <div
                  key={acc.id}
                  className={`w-full ${
                    index !== accordions.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <button
                    className={`py-4 px-5 w-full flex justify-between items-center cursor-pointer ${
                      isActive ? "bg-[#cfe2ff] border-b border-gray-200" : ""
                    }`}
                    onClick={() => setActiveAccordion(isActive ? null : acc.id)}
                  >
                    {acc.title}
                    <ChevronDown
                      strokeWidth={1}
                      size={30}
                      className={`transition-transform duration-300 ${
                        isActive ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isActive
                        ? "max-h-40 opacity-100 py-4 px-5"
                        : "max-h-0 opacity-0 px-5"
                    }`}
                  >
                    <strong>{acc.desc}</strong>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="mt-3">
          <CodeEditor
            jsxCode={`
              import { ChevronDown } from "lucide-react"; // Icon imported from lucide-react pakage.
              import { useState } from "react";

              const accordions = [
                  {
                    id: 1,
                    title: "Accordion Item #1",
                    desc: "This is the first item’s accordion body",
                  },
                  {
                    id: 2,
                    title: "Accordion Item #2",
                    desc: "This is the second item’s accordion body",
                  },
                  {
                    id: 3,
                    title: "Accordion Item #3",
                    desc: "This is the third item’s accordion body",
                  },
              ]; // Dynamic data for showing the Accordion.

              export const Accordion = () => {
                const [activeAccordion, setActiveAccordion] = useState(null); // State for tracking the id  of the active Accordion.

                return (
                    <div className="border border-gray-200 rounded-md overflow-hidden">
                      {accordions.map((acc, index) => {   // Mapping all the Accordion.
                        const isActive = activeAccordion === acc.id;  // Store the active Accordion id in the constant.

                        return (
                          <div
                            key={acc.id}
                            className={\`w-full \${
                            index !== accordions.length - 1
                            ? "border-b border-gray-200"
                            : ""  // giving the border bottom to the active Accordion.
                             }\`}
                          >
                          <button
                            className={\`py-4 px-5 w-full flex justify-between items-center cursor-pointer \${
                            isActive ? "bg-[#cfe2ff] border-b border-gray-200" : "" // Changing the background color of the active Accordion.
                            }\`}
                            onClick={() => setActiveAccordion(isActive ? null : acc.id)}
                          >
                            {acc.title}
                            <ChevronDown
                              strokeWidth={1}
                              size={30}
                              className={\`transition-transform duration-300 \${
                                isActive ? "rotate-180" : "" // Rotate the Icon of the Active Accordion
                              }\`}
                            />
                          </button>

                          <div
                            className={\`overflow-hidden transition-all duration-300 ease-in-out \${
                              isActive
                                ? "max-h-40 opacity-100 py-4 px-5"
                                : "max-h-0 opacity-0 px-5" // Some animation while the Accordion is open or close.
                            }\`}
                          >
                            <strong>{acc.desc}</strong>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                    );
                };
            `}
            tsxCode={`
              import { ChevronDown } from "lucide-react"; // Icon imported from lucide-react pakage.
              import { useState } from "react";

              const accordions = [
                  {
                    id: 1,
                    title: "Accordion Item #1",
                    desc: "This is the first item’s accordion body",
                  },
                  {
                    id: 2,
                    title: "Accordion Item #2",
                    desc: "This is the second item’s accordion body",
                  },
                  {
                    id: 3,
                    title: "Accordion Item #3",
                    desc: "This is the third item’s accordion body",
                  },
              ]; // Dynamic data for showing the Accordion.

              export const Accordion = () => {
                const [activeAccordion, setActiveAccordion] = useState<number | null>(null);  // State for tracking the id  of the active Accordion.

                return (
                    <div className="border border-gray-200 rounded-md overflow-hidden">
                      {accordions.map((acc, index) => {   // Mapping all the Accordion.
                        const isActive = activeAccordion === acc.id; // Store the active Accordion id in the constant.

                        return (
                          <div
                            key={acc.id}
                            className={\`w-full \${
                            index !== accordions.length - 1
                            ? "border-b border-gray-200"
                            : ""  // giving the border bottom to the active Accordion.
                             }\`}
                          >
                          <button
                            className={\`py-4 px-5 w-full flex justify-between items-center cursor-pointer \${
                            isActive ? "bg-[#cfe2ff] border-b border-gray-200" : "" // Changing the background color of the active Accordion.
                            }\`}
                            onClick={() => setActiveAccordion(isActive ? null : acc.id)}
                          >
                            {acc.title}
                            <ChevronDown
                              strokeWidth={1}
                              size={30}
                              className={\`transition-transform duration-300 \${
                                isActive ? "rotate-180" : "" // Rotate the Icon of the Active Accordion
                              }\`}
                            />
                          </button>

                          <div
                            className={\`overflow-hidden transition-all duration-300 ease-in-out \${
                              isActive
                                ? "max-h-40 opacity-100 py-4 px-5"
                                : "max-h-0 opacity-0 px-5" // Some animation while the Accordion is open or close.
                            }\`}
                          >
                            <strong>{acc.desc}</strong>
                          </div>
                        </div>
                      );
                    })}
                    </div>
                    );
                };
            `}
          />
        </div>
      </div>
    </div>
  );
};
