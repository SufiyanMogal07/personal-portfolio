import { projectDataType, projectData } from "@/data/work";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <div className="mt-10">
      <h5 className="text-gray-400 dark:text-gray-300 text-[16px]">Featured</h5>
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="grid lg:grid-cols-2 gap-y-20 gap-x-9 mt-8">
        {projectData.map((project: projectDataType, idx: number) => {
          return <ProjectCard key={idx} project={project} idx={idx} />;
        })}
      </div>
    </div>
  );
};
