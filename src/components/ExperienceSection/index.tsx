import React, {useEffect, useRef} from "react";
import classNames from "classnames";
import AppSection from "../AppSection";
import { EXPERIENCE } from "@/constants/menu";
import AppText from "../AppText";
import Image from "next/image";

const experienceArr = [
  {
    id: "Job1",
    role: "Peer Mentor",
    company: "San Jose State University",
    companyUrl: "https://www.sjsu.edu/",
    companyLogoUrl: "/images/sjsu_logo.png",
    workingPeriod: "December 2023 - May 2024",
    highlights: [
      `Offering personalized guidance to new students on academic and professional development.`,
      `Assisting with course selection and academic planning to ensure a successful university experience.`,
      `Providing support in finding internships and job opportunities, enhancing employability skills.`,
      `Facilitating connections with industry professionals and alumni for career growth and mentorship opportunities.`,
      `Focused on individual student needs for a tailored mentoring experience.`
    ],
  },
  {
    id: "Job2",
    role: "Software Engineer",
    company: "Youngsoft India Pvt Ltd.",
    companyUrl: "https://youngsoft.in/",
    companyLogoUrl: "/images/YSI_logo.png",
    workingPeriod: "July 2021 - July 2023",
    highlights: [
      `Orchestrated an end-to-end manufacturing automation solution leveraging AWS services for seamless data collection
      and process it further to show analytics in QuickSight; reconstructed communication flow among 4 different plants.`,
      `Devised predictive maintenance models using ML techniques with Amazon Sagemaker, substantially reducing
      equipment failures and projecting potential revenue growth of 3-4 times`,
      `Integrated Rapid Upper Limb Assessment (RULA) scoring methodology, employing AWS services including S3 and
      Kinesis Video Streaming to manage patient videos frame-by-frame and derive insights for optimal posture.`,
      `Enhanced runtime efficiency by 25% and accuracy by 4% through techniques including hyperparameter tuning, lowess
      smoothing, and multithreading.`,
      `Researched, and deployed Testim, AI automated testing tool after thorough evaluation of multiple options, aligning
      precisely with project needs which makes the testing work faster by atleast 40%.`

    ],
  },
  {
    id: "Job3",
    role: "Web Development Intern",
    company: "CSKA Automation Services Pvt Ltd. ",
    companyUrl: "https://www.cskaa.com/index.html",
    companyLogoUrl: "/images/cskaa_logo.png",
    workingPeriod: "Feb 2021 - June 2021",
    highlights: [
      `Resolved bugs in Django backend to optimize performance and developed user-friendly frontend using CSS and
      Bootstrap for Face Recognition and Video KYC projects.`,
      `Collaborated to troubleshoot and promptly resolve software issues, contributing to on-time project delivery.`
    ],
  },
  {
    id: "Job4",
    role: "SQL Intern",
    company: "Celebal Technologies Pvt Ltd",
    companyUrl: "https://celebaltech.com/",
    companyLogoUrl: "/images/celebal-logo.webp",
    workingPeriod: "May 2020 - Jul 2020",
    highlights: [
      `Designed & Optimized SQL stored procedures and functions, achieving a 20% performance boost in CRUD operations.`
    ],
  },
];

function ExperienceSection() {

  const timeLineRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    experienceArr.forEach(experience => {
      const timeLineRef = timeLineRefs.current[experience.id];

      if(!timeLineRef) return;

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
