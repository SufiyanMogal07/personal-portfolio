import { ExperienceSection } from "../work/ExperienceSection";
import { ProjectSection } from "../work/ProjectSection";

export const Work = () => {
  return (
    <section id="work" className="pt-14 md:pt-20 min-h-screen w-full font-ubuntu">
      <h2 className="text-3xl text-center font-bold pt-10 pb-8 border-b border-black/40 dark:border-gray-100/20">
        My Work Experience & Project{"'"}s
      </h2>
      <ExperienceSection />
      <ProjectSection />
    </section>
  );
};
