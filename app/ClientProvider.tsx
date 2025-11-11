"use client";

import Footer from "@/components/layout/Footer";
import NavBar from "@/components/layout/NavBar";
import { LoadingScreen } from "@/components/LoadingScreen";
import { MobileNavigation } from "@/components/MobileNavigation";
import { useEffect, useState } from "react";

// import { useState } from "react";

export const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);

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
    <>
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
        <Footer/>
        </div>
      </div>

      {isDropDownOpen && (
        <MobileNavigation onClose={() => setIsDropDownOpen(false)} />
      )}
    </>
  );
};
