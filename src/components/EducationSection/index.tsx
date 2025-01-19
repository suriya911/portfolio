import React, { useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { EDUCATION } from "@/constants/menu";
import Image from "next/image";
import AppText from "../AppText";

const educations = [
  {
    id: "MSE",
    date: "Aug 2024 - May 2026",
    course: "Master's in General Engineering",
    name: "San Jose State University",
    logoURL: "/images/sjsu_logo.png",
    url: "https://www.sjsu.edu/",
    place: "San Jose, USA",
    grade: "3.43/4 GPA",
  },
  {
    id: "B.Tech",
    date: "Nov 2020 - April 2024",
    course: "Bachelor of Technology in Information Technology",
    name: "R.M.D. Engineering College",
    logoURL: "/images/rmd.png",
    url: "https://rmd.ac.in/",
    place: "Chennai, India",
    grade: "9.32/10 CGPA",
  },
];

function EducationSection() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    educations.forEach((education) => {
      if (!cardRefs.current) return;
      const cardRef = cardRefs.current[education.id];
      if (!cardRef) return;
      const obsCallback = (entries: IntersectionObserverEntry[]) => {
        const [entry] = entries;
        if (!entry.isIntersecting) {
          cardRef.classList.remove("opacity-100");
          cardRef.classList.add("opacity-0");
        } else {
          cardRef.classList.remove("opacity-0");
          cardRef.classList.add("opacity-100");
        }
      };
      const obsOptions = {
        root: null,
        threshold: 0,
      };
      const observer = new IntersectionObserver(obsCallback, obsOptions);
      observer.observe(cardRef);
      observerRefs.current[education.id] = observer;
    });

    return () => {
      educations.forEach((education) => {
        observerRefs.current[education.id].disconnect();
      });
    };
  }, []);

  return (
    <AppSection headerTxt={EDUCATION}>
      <div className="section-content-padding grid lg:grid-cols-2 grid-cols-1 items-stretch gap-4">
        {educations.map((education) => {
          return (
            <div
              className="group rounded-md bg-backgroundColor-card-day dark:bg-backgroundColor-card-night sm:p-6 p-3 border-2 border-borderColor opacity-0 transition-opacity duration-1000 ease-linear"
              ref={(el) => (cardRefs.current[education.id] = el)}
              key={education.id}
            >
              <a href={education.url} target="_blank">
                <div className="flex gap-3 items-center">
                  <div className="relative h-16 w-16 rounded-md">
                    <Image
                      alt={education.name}
                      src={education.logoURL}
                      fill
                      loading={"lazy"}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <AppText textTag="h3" medium semiBold defaultColor>
                      {education.name}
                    </AppText>
                    <AppText
                      textTag="p"
                      default
                      tertiary
                      customClass="group-hover:text-primaryColor"
                    >
                      {education.place}
                    </AppText>
                  </div>
                </div>
                <div className="flex flex-col align-center mt-4 gap-0.5">
                  <AppText textTag="p" default defaultColor bold>
                    {education.course}
                  </AppText>
                  <AppText
                    textTag="p"
                    default
                    tertiary
                    semiBold
                    customClass="group-hover:text-primaryColor"
                  >
                    {education.date}
                    <AppText
                      textTag="span"
                      medium
                      semiBold
                      tertiary
                      customClass="ml-1 mr-1 invisible group-hover:visible group-hover:text-primaryColor"
                    >
                      {"|"}
                    </AppText>
                    <AppText
                      textTag="span"
                      default
                      tertiary
                      semiBold
                      customClass="invisible group-hover:visible group-hover:text-primaryColor"
                    >
                      {`${education.grade}`}
                    </AppText>
                  </AppText>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </AppSection>
  );
}

export default EducationSection;
