import { ExperienceSection } from "../work/ExperienceSection";
import { ProjectSection } from "../work/ProjectSection";

export const Work = () => {
  return (
    <section
      id="work"
      className="py-14 md:py-20 min-h-fit w-full font-ubuntu"
    >
      <ExperienceSection />
      {/* <ProjectSection /> */}
    </section>
  );
};
