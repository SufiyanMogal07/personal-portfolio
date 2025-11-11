"use client";

import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [text, setText] = useState("");
  const fullText = "<Hello World/>";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          onComplete();
        }, 700);
      }
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 h-screen w-screen z-50 bg-black text-gray-100 flex flex-col items-center justify-center">
      <div className="text-4xl mb-4 font-mono font-bold">
        {text}
        <span className="animate-ping ml-1">|</span>
      </div>

      <div className="w-[200px] h-1.5 bg-gray-500 rounded relative overflow-hidden">
        <div className="h-full w-[40%] bg-blue-400 shadow-[0_0_15_#3b82f6] animate-loading-bar"></div>
      </div>
    </div>
  );
};
