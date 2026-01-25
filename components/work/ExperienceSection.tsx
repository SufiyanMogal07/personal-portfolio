import Image from "next/image";
import { experienceData, experienceDataType } from "@/data/work";
import { Globe, Linkedin, LinkedinIcon } from "lucide-react";
import { ToolTipComponent } from "../common/ToolTipComponent";

export const ExperienceSection = () => {
  return (
    <div className="mt-10">
      <h5 className="text-gray-500 dark:text-gray-300 text-[17px]">Featured</h5>
      <h2 className="text-[26px] font-bold">Experience</h2>

      <div className="mt-8 flex flex-col gap-y-10">
        {experienceData.map((value: experienceDataType, idx: number) => {
          return (
            <div key={idx} className="space-y-6">
              <div className="flex flex-col md:flex-row gap-y-3 justify-between w-full p-1">
                <div className="flex gap-x-4">
                  <div className="w-12 relative">
                    <Image
                      src={value.logo}
                      alt="Awwaltech Logo"
                      className="rounded-lg"
                      fill
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-x-3 border">
                      <a
                        target="_blank"
                        href={value.website}
                        className="text-[20px] font-bold"
                      >
                        {value.name}
                      </a>
                      <div className="ml-1 flex gap-x-2">
                        <ToolTipComponent
                          url={value.website}
                          label="Visit Website"
                        >
                          <Globe size={17} />
                        </ToolTipComponent>
                        
                         <ToolTipComponent
                          url={value.website}
                          label="View Link"
                        >
                          <Linkedin size={17} />
                        </ToolTipComponent>
                      </div>
                    </div>
                    <h5 className="text-[15px] text-gray-500 dark:text-gray-400">
                      {value.role}
                    </h5>
                  </div>
                </div>
                <div className="flex flex-col justify-between">
                  <h5 className="font-semibold text-[15px] text-gray-300 dark:text-gray-400">
                    {value.date}
                  </h5>
                  <h5 className="text-[15px] text-gray-500 dark:text-gray-400 md:text-right">
                    {value.location}
                  </h5>
                </div>
              </div>
              <p className="leading-6 text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
