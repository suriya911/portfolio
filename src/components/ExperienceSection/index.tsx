import React, { useEffect, useRef } from "react";
import classNames from "classnames";
import AppSection from "../AppSection";
import { EXPERIENCE } from "@/constants/menu";
import AppText from "../AppText";
import Image from "next/image";

const experienceArr = [
  {
    id: "Job1",
    role: "Student Assistant, 3D Unity Development",
    company: "San Jose State University",
    companyUrl: "https://www.sjsu.edu/",
    companyLogoUrl: "/images/sjsu_logo.png",
    workingPeriod: "Jan 2025 - Present",
    highlights: [
      `Developed interactive 3D simulation models in Unity, integrating precise controls for realistic user experiences.`,
      `Improved rendering performance and physics interactions, increasing frame rates by 20%.`
    ],
  },
  {
    id: "Job2",
    role: "Member, Machine Learning SJSU Club",
    company: "San Jose State University",
    companyUrl: "https://www.sjsu.edu/",
    companyLogoUrl: "/images/sjsu_logo.png",
    workingPeriod: "Aug 2024 – Present",
    highlights: [
      `Developed an audio-based multimodal ML model using stacked ensemble methods, improving smart home voice command recognition by 25%.`,
      `Applied information-theoretic tools to compress RL state spaces, enhancing policy interpretability and generalization using unsupervised learning techniques.`
    ],
  },
  {
    id: "Job3",
    role: "Data Analyst Intern",
    company: "E-Parisaraa Pvt. Ltd.",
    companyUrl: "https://eparisaraa.com/",
    companyLogoUrl: "/images/eparisaraa_logo.png",
    workingPeriod: "May 2023 – Nov 2023",
    highlights: [
      `Improved material recovery accuracy by 20% by analyzing live crushing and dismantling data using Python and SQL.`,
      `Created interactive Tableau dashboards, reducing reporting time by 40% and accelerating high-value batch decisions.`,
      `Built predictive models for yield forecasting, increasing revenue per batch by 12% and profit margins by 9%.`
    ],
  },
];

function ExperienceSection() {

  const timeLineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    experienceArr.forEach(experience => {
      const timeLineRef = timeLineRefs.current[experience.id];

      if (!timeLineRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.intersectionRatio && !entry.isIntersecting) {
          timeLineRef.classList.remove(`show-timeline-content`);
          timeLineRef.classList.add(`hide-timeline-content`);
        }

        if (entry.intersectionRatio > 0.2 && entry.isIntersecting) {
          timeLineRef.classList.remove(`hide-timeline-content`);
          timeLineRef.classList.add(`show-timeline-content`);
        }
      };
      const obsOptions = {
        root: null,
        threshold: [0, 0.2],
      };
      const timelineObserver = new IntersectionObserver(
        obsCallBack,
        obsOptions,
      );
      timelineObserver.observe(timeLineRef);
      observerRefs.current[experience.id] = timelineObserver;
    });

    return () => {
      experienceArr.forEach(experience => {
        observerRefs.current[experience.id].disconnect();
      });
    };
  }, []);


  return (
    <AppSection headerTxt={EXPERIENCE}>
      <div
        className={`section-content-padding w-full relative flex flex-col gap-8 before:content-[''] before:absolute before:h-full before:w-1 before:rounded-full before:bg-borderColor lg:before:left-1/2 before:left-[30px]`}
      >
        {experienceArr.map((experience, index) => {
          return (
            <div
              className="py-4 lg:px-16 px-8 relative"
              key={experience.id}
              ref={(el) => (timeLineRefs.current[experience.id] = el)}
            >
              <div
                className={classNames(
                  `bg-backgroundColor-card-day dark:bg-backgroundColor-card-night h-full rounded-md relative p-4 border-b-4 border-borderColor hover:border-primaryColor-light lg:w-[45%] w-[calc(100%-24px)] left-[44px] transition-all duration-500 ease-in-out`,
                  index % 2 === 0 &&
                  `lg:left-0 after:content-[''] after:absolute after:h-2 after:w-2 after:rotate-45 after:bg-backgroundColor-card-day dark:after:bg-backgroundColor-card-night lg:after:left-[calc(100%-4px)] after:-left-[4px] after:top-6`,
                  index % 2 !== 0 &&
                  `lg:left-[55%] after:content-[''] after:absolute after:h-2 after:w-2 after:rotate-45 after:bg-backgroundColor-card-day dark:after:bg-backgroundColor-card-night after:-left-[4px] after:top-6`
                )}
              >
                <AppText textTag="h3" extraMedium bold defaultColor>
                  {experience.role}
                </AppText>
                <AppText textTag="p" default secondary semiBold>
                  {experience.company}
                </AppText>
                <ul className="list-disc p-4 marker:text-textColor-primary-day dark:marker:text-textColor-primary-night">
                  {experience.highlights.map((highlight, index) => {
                    return (
                      <li key={index}>
                        <AppText textTag="p" default defaultColor>
                          {highlight}
                        </AppText>
                      </li>
                    );
                  })}
                </ul>
                <AppText textTag={"p"} semiBold default defaultColor customClass="lg:hidden mt-2">
                  {experience.workingPeriod}
                </AppText>
              </div>
              <div
                className={`bg-backgroundColor-day p-2 dark:bg-backgroundColor-night border-4 border-borderColor absolute h-16 w-16 rounded-full top-3 lg:left-[calc(50%-30px)] left-0 transition-transform duration-500 ease-in-out`}
              >
                <a href={experience.companyUrl} target={"_blank"}>
                  <Image
                    alt={experience.company}
                    src={experience.companyLogoUrl}
                    fill
                  />
                </a>
              </div>
              <div
                className={classNames(
                  `w-[45%] h-16 rounded-md absolute top-2 lg:flex lg:items-center hidden transition-all duration-500 ease-in-out`,
                  index % 2 === 0 && `left-[55%]`,
                  index % 2 !== 0 && `left-0 justify-end`
                )}
              >
                <AppText textTag={"p"} semiBold default defaultColor>
                  {experience.workingPeriod}
                </AppText>
              </div>
            </div>
          );
        })}
      </div>
    </AppSection>
  );
}

export default ExperienceSection;
