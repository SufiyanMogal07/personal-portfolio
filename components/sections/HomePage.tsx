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
      <h1 className="text-3xl lg:text-4xl xl:text-[40px] font-bold leading-10">
        Hi, I{"'"}m{" "}
        <span className="bg-linear-to-r from-[#5A527E] to-[#7064F0] dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Sufiyan Mogal
        </span>
        <span> - A Frontend Developer.</span>
      </h1>

      <div className="text-[17px] lg:text-[20px] leading-7 text-gray-500 dark:text-gray-400 ">
        <ul className="list-disc list-inside space-y-1 lg:space-y-2">
          <li>
            I design clean, responsive UIs and build them with React & Next.js.
          </li>
          <li>
            I write efficient, maintainable logic for smooth user experiences.
          </li>
          <li>
            I combine design sense with solid engineering to ship polished
            products.
          </li>
        </ul>
      </div>

      <div className="mt-2 flex flex-wrap justify-start gap-3 text-sm md:text-base">
        {["TypeScript", "React", "Next.js", "Tailwind CSS", "PHP", "MYSQL"].map(
          (tech) => (
            <span
              key={tech}
              className="px-4 py-2 border border-dashed border-gray-400 bg-blue-100/30 text-black dark:border-gray-100/30 dark:bg-slate-300/10 dark:text-gray-100 rounded-xl font-mono hover:border-blue-400 hover:text-blue-400 transition cursor-pointer"
            >
              {tech}
            </span>
          )
        )}
      </div>

      <div className="mt-3 md:mt-6 flex flex-col lg:flex-row justify-start items-start lg:items-center gap-6">
        <div className="flex gap-x-4">
          <a target="_blank" href="/resume/sufiyan-mogal-resume.pdf" rel="noopener noreferrer">
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
        {/* <div className="space-x-4 flex gap-x-3">
          <a className="social-badge" href=""><Github size={18}/> Github</a>
          <a className="inline-flex items-center gap-x-1.5 bg-black px-3 py-2.5 rounded-md" href=""><Linkedin size={18}/> LinkedIn</a>
          <a className="inline-flex items-center gap-x-1.5 bg-black px-3 py-2.5 rounded-md" href=""><Twitter size={18}/> Twitter</a>
        </div> */}
      </div>
    </div>
  );
};

export default HomePage;
