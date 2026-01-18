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
      className="flex items-center py-0.5 px-1 md:px-2 gap-x-1 bg-blue-100/30 border-black/10 dark:bg-black/40 border dark:border-gray-100/10 rounded-xl hover:scale-105 duration-300"
    >
      <Icon
        className="rounded-xl w-7 h-7 px-1 bg-white/10 border-black/10 border dark:border-gray-100/10"
        size={size}
      />
      <span className="">{label}</span>
    </a>
  );
};
