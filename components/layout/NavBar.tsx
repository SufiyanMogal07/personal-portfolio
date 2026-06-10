"use client";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navData } from "@/data/navbar";
import { useTheme } from "next-themes";

interface NavBarProps {
  isDropDownOpen: boolean;
  handleDropDown: () => void;
}

export const handleSectionScroll = (id: string) => {
    const isHome = id.includes("home");
    const element = document.querySelector(id);
    
    if(isHome) {
      window.scrollTo({top: 0, behavior: "smooth"})
    } else if(element){
      element?.scrollIntoView({behavior: "smooth", block: "start"});
    }
  };

const NavBar = ({ isDropDownOpen, handleDropDown }: NavBarProps) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <header className="container-responsive sticky inset-x-0 top-0 md:top-2 z-60 font-roboto">
      <div className="bg-white/60 border-gray-300 dark:bg-white/10 dark:border-gray-100/20 backdrop-blur-md dark:backdrop-blur-sm shadow-[0_0_20px_rgba(112,100,240,0.2)] border md:rounded-xl px-4 md:px-10 py-5 mx-auto flex justify-between items-center">
        <h2 className="text-2xl lg:text-[26px] font-extrabold">
          sufiyan
          <span className="text-blue-500 dark:text-blue-400">.dev</span>
        </h2>
        <div className="flex items-center">
          <nav className="hidden md:block space-x-8 text-[16px]">
            {navData.map((value) => {
              return (
                <span
                  key={value.id}
                  className="pb-1 hover:border-b-3 hover:border-b-black dark:hover:border-b-white cursor-pointer"
                  onClick={() => handleSectionScroll(value.url)}
                >
                  {value.label}
                </span>
              );
            })}
          </nav>
          <div
            className="ml-8 lg:ml-15 border border-black/20 hover:border-gray-100/50 hover:bg-gray-100/50 dark:border-gray-100/10 dark:hover:border-gray-100/20 dark:hover:bg-gray-200/10 transition-colors rounded-md p-1.5 cursor-pointer"
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
          >
            {currentTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </div>
          <div
            onClick={() => {
              handleDropDown();
            }}
            className="md:hidden ml-4 border border-gray-100/20 hover:border-gray-100/20 hover:bg-gray-200/10 transition-colors rounded-md p-1.5 cursor-pointer"
          >
            {isDropDownOpen ? <X /> : <Menu />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
