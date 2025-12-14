import { Clipboard } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const languages = [
  {
    lang: "javascript",
    name: "jsx",
  },
  {
    lang: "typescript",
    name: "tsx",
  },
];

interface CodeEditorProps {
  jsxCode: string;
  tsxCode: string;
}

export const CodeEditor = ({ jsxCode, tsxCode }: CodeEditorProps) => {
  const [activeLanguage, setActiveLanguage] = useState<string>("javascript");

  return (
    <>
      <div className="p-3 border-t border-b bg-[#f8f8ff] border-gray-300 flex justify-between items-center">
        <div className="flex items-center border border-gray-300 rounded-full text-sm overflow-hidden">
          {languages.map((lang, idx) => (
            <button
              onClick={() => setActiveLanguage(lang.lang)}
              key={idx}
              className={`px-5 py-1 cursor-pointer text-[15px] ${
                activeLanguage === lang.lang
                  ? "bg-blue-200 text-blue-700 font-semibold"
                  : ""
              } ${
                lang.lang === "javascript" ? "border-r border-gray-300" : ""
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
        <span
        className="p-2 hover:bg-gray-200 rounded-md cursor-pointer transition-all duration-150"
          onClick={() => {
            navigator.clipboard.writeText(
              activeLanguage === "javascript" ? jsxCode : tsxCode
            );
            toast.success("Code copied to clipboard!");
          }}
        >
          <Clipboard strokeWidth={1} size={22} className="cursor-pointer" />
        </span>
      </div>
      <div className="bg-[#f8f8ff] py-2">
        <SyntaxHighlighter
          language="javascript"
          style={docco}
          wrapLongLines={false}
          customStyle={{
            overflowX: "auto",
            whiteSpace: "pre",
            fontSize: "14px",
          }}
        >
          {activeLanguage === "javascript" ? jsxCode : tsxCode}
        </SyntaxHighlighter>
      </div>
    </>
  );
};
