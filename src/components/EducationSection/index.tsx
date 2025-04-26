import React, { useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { EDUCATION } from "@/constants/menu";
import Image from "next/image";
import AppText from "../AppText";

const educationArr = [
  {
    id: "edu1",
    degree: "Master of Science in Engineering",
    university: "San Jose State University",
    universityUrl: "https://www.sjsu.edu/",
    universityLogoUrl: "/images/sjsu_logo.png",
    duration: "Aug 2024 - May 2026",
    details: [
      "CGPA: 3.4/4",
      "Specialization: AI/ML & Cloud Technologies"
    ],
  },
  {
    id: "edu2",
    degree: "Bachelor of Technology in Information Technology",
    university: "Anna University",
    universityUrl: "https://www.annauniv.edu/",
    universityLogoUrl: "/images/anna_univ_logo.png",
    duration: "Nov 2020 - April 2024",
    details: [
      "CGPA: 9.32/10"
    ],
  }
];

function EducationSection() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    educationArr.forEach((education) => {
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
      educationArr.forEach((education) => {
        observerRefs.current[education.id].disconnect();
      });
    };
  }, []);

  return (
    <AppSection headerTxt={EDUCATION}>
      <div className="section-content-padding grid lg:grid-cols-2 grid-cols-1 items-stretch gap-4">
        {educationArr.map((education) => {
          return (
            <div
              className="group rounded-md bg-backgroundColor-card-day dark:bg-backgroundColor-card-night sm:p-6 p-3 border-2 border-borderColor opacity-0 transition-opacity duration-1000 ease-linear"
              ref={(el) => (cardRefs.current[education.id] = el)}
              key={education.id}
            >
              <a href={education.universityUrl} target="_blank">
                <div className="flex gap-3 items-center">
                  <div className="relative h-16 w-16 rounded-md">
                    <Image
                      alt={education.university}
                      src={education.universityLogoUrl}
                      fill
                      loading={"lazy"}
                    />
                  </div>
                  <div className="flex-1 flex flex-col gap-0.5">
                    <AppText textTag="h3" medium semiBold defaultColor>
                      {education.university}
                    </AppText>
                    <AppText
                      textTag="p"
                      default
                      tertiary
                      customClass="group-hover:text-primaryColor"
                    >
                      {education.universityUrl}
                    </AppText>
                  </div>
                </div>
                <div className="flex flex-col align-center mt-4 gap-0.5">
                  <AppText textTag="p" default defaultColor bold>
                    {education.degree}
                  </AppText>
                  <AppText
                    textTag="p"
                    default
                    tertiary
                    semiBold
                    customClass="group-hover:text-primaryColor"
                  >
                    {education.duration}
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
                      {education.details.join(", ")}
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
