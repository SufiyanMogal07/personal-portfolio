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
      className="w-full flex flex-col bg-gray-50 dark:bg-blue-950/30 border border-black/30 dark:border-white/20 rounded-xl overflow-hidden transition-transform hover:translate-y-0.5"
    >
      {/* 🔹 Fixed aspect ratio wrapper */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={idx < 2}
        />
      </div>

      {/* 🔹 Text content area */}
      <div className="flex flex-col justify-between px-5 py-4 grow">
        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <h2 className="text-lg md:text-xl font-semibold">{project.name}</h2>
          <div className="flex gap-x-2">
            <ToolTip icon={Globe} url={project.live} label="Live" />
            <ToolTip icon={Github} url={project.github} label="Github" />
          </div>
        </div>

        <p className="text-sm md:text-[15px] mt-2 text-gray-600 dark:text-gray-300 leading-relaxed">
          {project.description}
        </p>

        <ul className="flex flex-wrap gap-2 md:gap-3 mt-3">
          {project.tags.map((tag, i) => (
            <li
              key={i}
              className="text-xs md:text-sm border border-dashed px-3 py-0.5 rounded-md bg-white/5 hover:border-blue-400 hover:text-blue-400 transition"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
