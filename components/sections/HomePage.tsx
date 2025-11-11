import { FileText, Send } from "lucide-react";

const HomePage = () => {
  return (
    <div
      id="home"
      className="mx-auto bg-red-20 min-h-[70vh] md:h-[60%] lg:h-[70%] xl:h-[80vh] w-full md:pt-5 flex flex-col justify-center gap-y-4 md:text-left font-ubuntu"
    >
      <h1 className="text-3xl lg:text-4xl xl:text-[40px] font-bold leading-10">
        Hi, I{"'"}m{" "}
        <span className="bg-linear-to-r from-[#5A527E] to-[#7064F0] dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Sufiyan Mogal
        </span>
        <span className="dark:"> - A Frontend Developer.</span>
      </h1>
      <p className="text-[17px] xl:text-[20px] md:leading-6 text-gray-500 dark:text-gray-400">
        I love turning ideas into clean, responsive, and user-focused web
        experiences. I care deeply about crafting smooth interfaces, writing
        thoughtful logic, and continuously learning to build better products
        every day.
      </p>
      <div className="mt-4 md:mt-2 flex flex-wrap justify-start gap-3 text-[12px] md:text-sm">
        {["TypeScript", "React", "Next.js", "Tailwind CSS", "PHP", "MYSQL"].map(
          (tech) => (
            <span
              key={tech}
              className="px-3.5 py-1 border border-dashed border-gray-400 bg-blue-100/30 text-black dark:border-gray-100/30 dark:bg-slate-300/10 dark:text-gray-100 rounded-xl font-mono text-[16px] hover:border-blue-400 hover:text-blue-400 transition cursor-pointer"
            >
              {tech}
            </span>
          )
        )}
      </div>
      <div className="mt-3 flex justify-start gap-x-6">
        <button className="border dark:border-gray-100/20 dark:hover:bg-black/10 backdrop-blur-sm  hover:shadow-md shadow-sm shadow-blue-700 px-3 py-2 rounded-lg flex items-center transition-all dration-300 md:text-[16px]">
          {" "}
          <FileText className="rotate-4 mr-2" size={16} /> Resume / CV
        </button>
        <button className="bg-black/80 hover:bg-black/70 text-white dark:bg-gray-100 dark:hover:bg-gray-200 dark:text-black border-gray-100/30 px-3 py-2 rounded-lg flex items-center">
          <Send className="mr-1.5" size={16} /> Get in touch
        </button>
      </div>
      <div className="flex flex-wrap">
        <div></div>
      </div>
    </div>
  );
};

export default HomePage;
