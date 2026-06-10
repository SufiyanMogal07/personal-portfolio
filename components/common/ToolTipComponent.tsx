"use client";

import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ToolTipProps {
  children: React.ReactNode;
  url: string;
  size?: number;
  label: string;
}

export const ToolTipComponent = ({ children, url, label }: ToolTipProps) => {
  return (
    <TooltipProvider delayDuration={200}>
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            target="_blank"
            href={url}
            className="text-gray-500 dark:text-gray-400 duration-300 hover:text-gray-400 dark:hover:text-gray-100"
          >
            {children}{" "}
          </a>
        </TooltipTrigger>
        <TooltipContent>
          <p>{label}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
