import { ExperienceSection } from "../work/ExperienceSection";
import { ProjectSection } from "../work/ProjectSection";

export const Work = () => {
  return (
    <section
      id="work"
      className="py-14 md:py-20 min-h-fit w-full font-ubuntu"
    >
       <h2 className="text-3xl text-center font-bold pt-10 pb-8 border-b border-black/40 dark:border-gray-100/20">
        Work Experience & Projects
      </h2>
      <ExperienceSection />
      <ProjectSection />
    </section>
  );
};
