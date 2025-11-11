"use client";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import { ToolTip } from "../ToolTip";

interface ProjectCardProps {
  project: {
    thumbnail: string;
    name: string;
    description: string;
    live: string;
    github: string;
    tags: string[];
  };
  idx: number;
}

export const ProjectCard = ({ project, idx }: ProjectCardProps) => {
  return (
    <div
      key={idx}
      className="lg:min-h-126 h-auto w-full flex flex-col relative bg-gray-50 border border-black/30 dark:border-white/30 dark:bg-blue-950/30 backdrop-blur-sm rounded-lg overflow-hidden gap-y-3 hover:translate-z-28"
    >
      <div className="w-full aspect-video relative rounded-md flex items-end justify-center">
        <Image
          className="object-cover object-top rounded-md"
          src={project.thumbnail}
          alt=""
          fill
        />
        {/* <a href={project.live} className={`flex items-center gap-x-1 absolute bg-slate-300/50 rounded-md px-2 py-1 mb-1.5 transition-opacity duration-300 ease-in-out`}>
        <Globe size={18}/>
        Live Preview
        </a> */}
      </div>
      <div className="flex flex-col h-full w-full px-5 py-2 relative">
        <div className="flex items-center">
          <h2 className="text-xl font-bold mr-5">{project.name}</h2>
          <div className="flex gap-x-2">
            <ToolTip icon={Globe} url={project.live} label="Live" />
            <ToolTip icon={Github} url={project.github} label="Github" />
          </div>
        </div>
        <p className="text-[15px] mt-2 text-gray-500 dark:text-gray-300">{project.description}</p>
        <ul className="flex flex-wrap gap-2 md:gap-3.5 pt-5 pb-2">
          {project.tags.map((tag: string, idx: number) => (
            <li
              className="border border-dashed px-3 py-0.5 rounded-md bg-white/5 backdrop-blur-sm hover:border-blue-400 hover:text-blue-400 cursor-pointer"
              key={idx}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
