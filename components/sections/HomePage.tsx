"use client";

import { FileText, Send } from "lucide-react";

const HomePage = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      id="home"
      className="w-full h-[80vh] max-h-[900px] mx-auto flex flex-col justify-center gap-y-4 md:gap-y-6 text-left font-ubuntu"
    >
      <div className="md:leading-10">
        <p className="inline-flex items-center gap-2 text-[12px] md:text-sm dark:text-white/80 bg-blue-200/20 dark:bg-white/5 px-3 py-1 rounded-full border border-blue-300/50 dark:border-white/10 backdrop-blur-md w-fit mb-5 cursor-pointer">
          <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse" />
          Open to opportunities
        </p>

        <h3 className="text-2xl lg:text-4xl xl:text-[44px] font-bold pb-3  text-slate-700 dark:text-slate-50">
          Sufiyan Mogal
        </h3>

        <h4 className="text-[16px] md:text-[25px] font-bold text-slate-600 dark:text-slate-300">
          Full Stack Developer specializing in React, Next.js, TypeScript,
          Node.js, and PostgreSQL.
        </h4>
      </div>

      <div className="text-[15px] md:text-[17px] lg:text-[20px] md:leading-7 text-gray-500 dark:text-gray-400">
        <h3>
         I build scalable web applications with a strong focus on user experience, perfomance, and maintainable architecture. Previously contributed to a production vehicle marketplace platform at Awwaltech.
        </h3>
      </div>

      <div className="mt-2 flex flex-wrap justify-start gap-3 text-sm md:text-base">
        {[
          "TypeScript",
          "React",
          "Next.js",
          "Node.js",
          "PostgreSQL",
          "Prisma",
        ].map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 border border-dashed border-gray-400 bg-blue-100/30 text-black dark:border-gray-100/30 dark:bg-slate-300/10 dark:text-gray-100 rounded-xl font-mono hover:border-blue-400 hover:text-blue-400 transition cursor-pointer text-[12px] md:text-[16px]"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="mt-3 md:mt-6 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6">
        <div className="flex gap-x-4">
          <a
            target="_blank"
            href="/resume/sufiyan_mogal_resume.pdf"
            rel="noopener noreferrer"
          >
            <button className="border dark:border-gray-100/20 dark:hover:bg-black/10 backdrop-blur-sm hover:shadow-md shadow-sm shadow-blue-700 px-4 py-2.5 rounded-lg flex items-center transition-all duration-300 text-base">
              <FileText className="mr-2" size={18} />
              Resume / CV
            </button>
          </a>

          <button
            onClick={() => scrollToSection("#contact")}
            className="bg-black/80 hover:bg-black/70 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black border-gray-100/30 px-4 py-2.5 rounded-lg flex items-center text-base"
          >
            <Send className="mr-2" size={18} />
            Get in touch
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
