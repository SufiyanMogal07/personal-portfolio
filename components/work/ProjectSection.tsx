import { projectDataType, projectData } from "@/data/work";
import { ProjectCard } from "./ProjectCard";

export const ProjectSection = () => {
  return (
    <div className="mt-15">
      <h5 className="text-gray-400 dark:text-gray-300 text-[16px]">Featured</h5>
      <h2 className="text-2xl font-bold">Projects</h2>

      <div className="grid md:grid-cols-2 gap-y-10 md:gap-x-5 lg:gap-x-10 mt-8">
        {projectData.map((project: projectDataType, idx: number) => {
          return <ProjectCard key={idx} project={project} idx={idx} />;
        })}
      </div>
    </div>
  );
};
