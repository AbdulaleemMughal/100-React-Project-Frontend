import { CodeEditor } from "@/shared/CodeEditor";
import Link from "next/link";

const listGroup = [
  {
    id: 1,
    item: "An Item",
    path: "...",
  },
  {
    id: 2,
    item: "A second Item",
    path: "...",
  },
  {
    id: 3,
    item: "A third Item",
    path: "...",
  },
  {
    id: 4,
    item: "A fourth Item",
    path: "...",
  },
  {
    id: 5,
    item: "A fifth Item",
    path: "...",
  },
];

export const ListGroup = () => {
  return (
    <div className="border border-gray-200 rounded-md">
      <div className="p-6">
        <div className="w-1/2 border border-gray-200 rounded-md overflow-hidden">
          {listGroup.map((list, index) => {
            return (
              <Link key={list.id} href={list.path}>
                <li
                  className={`px-4 py-2 cursor-pointer text-gray-600 hover:bg-gray-100 ${
                    index !== listGroup.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  {list.item}
                </li>
              </Link>
            );
          })}
        </div>
      </div>
      <CodeEditor
        jsxCode={`
            import { Link } from "react-router-dom";  // Install the react-router-dom pakage into your project

            const listGroup = [
                    {
                        id: 1,
                        item: "An Item",
                        path: "...",
                    },
                    {
                        id: 2,
                        item: "A second Item",
                        path: "...",
                    },
                    {
                        id: 3,
                        item: "A third Item",
                        path: "...",
                    },
                    {
                        id: 4,
                        item: "A fourth Item",
                        path: "...",
                    },
                    {
                        id: 5,
                        item: "A fifth Item",
                        path: "...",
                    },
                ];

            export const ListGroup = () => {
                return (
                    <div className="w-1/2 border border-gray-200 rounded-md overflow-hidden">
                        {listGroup.map((list, index) => {
                            return (
                                <Link key={list.id} href={list.path}>  // You can define your path into the array according.
                                    <li
                                        className={\`px-4 py-2 cursor-pointer text-gray-600 hover:bg-gray-100 \${
                                        index !== listGroup.length - 1 // Removing the border-bottom from the last element in the array.
                                        ? "border-b border-gray-200"
                                         : ""
                                        }\`}  
                                    >
                                    {list.item}
                                    </li>
                                </Link>
                            );
                        })}
                    </div>
                );
            }
        `}
        tsxCode={`
            import { Link } from "react-router-dom";  // Install the react-router-dom pakage into your project

            const listGroup = [
                    {
                        id: 1,
                        item: "An Item",
                        path: "...",
                    },
                    {
                        id: 2,
                        item: "A second Item",
                        path: "...",
                    },
                    {
                        id: 3,
                        item: "A third Item",
                        path: "...",
                    },
                    {
                        id: 4,
                        item: "A fourth Item",
                        path: "...",
                    },
                    {
                        id: 5,
                        item: "A fifth Item",
                        path: "...",
                    },
                ];

            export const ListGroup = () => {
                return (
                    <div className="w-1/2 border border-gray-200 rounded-md overflow-hidden">
                        {listGroup.map((list, index) => {
                            return (
                                <Link key={list.id} href={list.path}>  // You can define your path into the array according.
                                    <li
                                        className={\`px-4 py-2 cursor-pointer text-gray-600 hover:bg-gray-100 \${
                                        index !== listGroup.length - 1 // Removing the border-bottom from the last element in the array.
                                        ? "border-b border-gray-200"
                                         : ""
                                        }\`}  
                                    >
                                    {list.item}
                                    </li>
                                </Link>
                            );
                        })}
                    </div>
                );
            }
        `}
      />
    </div>
  );
};
