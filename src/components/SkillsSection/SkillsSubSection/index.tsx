import React, { useRef, useEffect } from "react";
import AppText from "@/components/AppText";
import ISkillsSubSectionProps from "./types";

function SkillsSubSection(props: ISkillsSubSectionProps) {
  const { headerTxt, skills } = props;

  const subSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!subSectionRef.current) return;

    const obsOptions = { root: null, threshold: 0 };

    const obsCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (!subSectionRef.current) return;
      if (entry.isIntersecting) {
        subSectionRef.current.classList.remove("scale-0");
        subSectionRef.current.classList.add("scale-100");
      } else {
        subSectionRef.current.classList.add("scale-0");
        subSectionRef.current.classList.remove("scale-100");
      }
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);

    observer.observe(subSectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="flex flex-col gap-3 items-center justify-center transition-transform duration-500 ease-linear"
      ref={subSectionRef}
    >
      <AppText textTag="h3" semiBold medium defaultColor>
        {headerTxt}
      </AppText>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {skills.map((skill) => {
          const { logo: Icon, name, url, id } = skill;
          return (
            <a
              key={id}
              href={url}
              target="_blank"
              aria-label={name}
              className="bg-backgroundColor-card-day dark:bg-backgroundColor-card-night sm:px-8 sm:py-4 px-6 py-3 hover:scale-105 transition-transform duration-75 ease-linear flex flex-col items-center justify-center gap-2 rounded-md"
            >
              <Icon className="sm:h-10 sm:w-10 h-8 w-8 rounded-md" />
              <AppText textTag="p" default defaultColor semiBold>
                {name}
              </AppText>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsSubSection;
