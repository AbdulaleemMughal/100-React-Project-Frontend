interface BadgeProps {
  text: string;
  variant: "primary" | "success" | "danger" | "warning";
  dot?: boolean;
  className?: string;
}

export const Badge = ({ text, variant, dot, className }: BadgeProps) => {
  return (
    <div
      className={`${className} py-2 px-4 w-fit rounded-full flex items-center gap-2 font-[Inter] text-sm ${
        variant === "primary"
          ? "bg-blue-100 text-blue-800 border border-blue-200"
          : variant === "success"
          ? "bg-green-100 text-green-800 border border-green-200"
          : variant === "danger"
          ? "bg-orange-100 text-orange-800 border border-orange-200"
          : "bg-yellow-100 text-yellow-800 border border-yellow-200"
      } font-medium text-sm space-x-2`}
    >
      {dot && (
        <span
          className={`h-2 w-2 rounded-full animate-pulse ${
            variant === "primary"
              ? "bg-blue-500"
              : variant === "success"
              ? "bg-green-500"
              : variant === "danger"
              ? "bg-orange-500"
              : "bg-yellow-500"
          }`}
        ></span>
      )}
      {text}
    </div>
  );
};
