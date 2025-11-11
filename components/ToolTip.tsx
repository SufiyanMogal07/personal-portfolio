"use client";

interface ToolTipProps {
  icon: React.ElementType;
  url: string;
  size?: number;
  label: string;
}

export const ToolTip = ({
  icon: Icon,
  url,
  size = 18,
  label,
}: ToolTipProps) => {

  return (
    <a
      target="_blank"
      href={url}
      className="flex items-center gap-x-1 bg-blue-100/30 border-black/10 dark:bg-black/40 border dark:border-gray-100/10 rounded-xl py-0.5 px-2 hover:scale-105"
    >
      <Icon
        className="rounded-xl w-7 h-7 px-1 bg-white/10 border-black/10 border dark:border-gray-100/10"
        size={size}
      />
      {label}
      {/* <span
        className={`absolute text-sm bg-white text-black px-2 py-0.5 rounded-md top-[-10%] z-50 ${
          isActive ? "opacity-100 translate-y-[5px]" : "opacity-0 pointer-events-none translate-y-0"
        }`}
      >
        {label}
      </span> */}
    </a>
  );
};
