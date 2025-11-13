"use client";
import { navData } from "@/data/navbar";
import { handleSectionScroll } from "./layout/NavBar";

interface MobileNavigationProps {
  onClose: () => void;
}
export const MobileNavigation = ({ onClose }: MobileNavigationProps) => {
  return (
    <div className="bg-black/50 backdrop-blur-sm md:hidden fixed inset-0 h-screen z-50 w-full">
      <div className="h-full flex flex-col justify-center space-y-8">
        {navData.map((value) => {
          return (
            <span
              onClick={() => {
                handleSectionScroll(value.url);
                onClose();
              }}
              className="text-2xl font-mono border-b pb-1 text-gray-100 border-gray-100/20 text-center cursor-pointer"
              key={value.id}
            >
              {value.label}
            </span>
          );
        })}
      </div>
    </div>
  );
};
