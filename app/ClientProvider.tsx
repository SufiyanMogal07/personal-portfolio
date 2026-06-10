"use client";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MobileNavigation } from "@/components/MobileNavigation";
import { useEffect, useState } from "react";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

  // const cursorRef = useRef<HTMLDivElement>(null);

  // const handleMouseMove = (e: React.MouseEvent) => {
  //   if (cursorRef.current) {
  //     cursorRef.current.style.left = `${e.clientX - 10}px`;
  //     cursorRef.current.style.top = `${e.clientY - 10}px`;
  //   }
  // };

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [isDropDownOpen]);

  if (!isLoaded) {
    return <LoadingScreen onComplete={() => setIsLoaded(true)} />;
  }

  return (
    <div className="relative">
      {/* onMouseMove={handleMouseMove} */}
      <div
        className={`min-h-screen relative transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <NavBar
          isDropDownOpen={isDropDownOpen}
          handleDropDown={() => setIsDropDownOpen(!isDropDownOpen)}
        />
        <div className="container-responsive">
          {children}
          <Footer />
        </div>
      </div>

      {isDropDownOpen && (
        <MobileNavigation onClose={() => setIsDropDownOpen(false)} />
      )}

      {/* <div
        ref={cursorRef}
        className={`fixed z-60 w-5 h-5 rounded-full bg-purple-600/50 dark:bg-white/60 pointer-events-none transition-all duration-900 ease-in-out`}
      /> */}
    </div>
  );
};
