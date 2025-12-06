import React from "react";

interface ButtonProps {
  text: string;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({
  text,
  className,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`${className} cursor-pointer flex gap-2 items-center px-6 py-2.5 font-[Inter] bg-linear-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl hover:shadow-lg transition-all duration-300 shadow-lg transform hover:scale-105`}
    >
      <span>{startIcon}</span>
      {text}
      <span>{endIcon}</span>
    </button>
  );
};
