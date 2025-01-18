import React, { useRef, useEffect } from "react";
import AppSection from "../AppSection";
import Image from "next/image";
import AppText from "../AppText";
import { CERTIFICATIONS } from "@/constants/menu";
import RedirectIcon from "@images/icons/redirect-to-icon.svg";

const certifications = [
  {
    id: "deeplearning-pytorch",
    platform: "PadhAI - One Fourth Labs",
    technology: "Deep Learning Basics",
    course: "Deep Learning | Pytorch | Image Classification Models",
    logoURL: "/images/padhai.jpeg",
    certificateURL: "https://www.credential.net/4e67a813-ece1-4d6a-8656-1ec367b48a91",
  }
];

function CertificationsSection() {
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({});

  useEffect(() => {
    certifications.forEach((certificate) => {
      if (!cardRefs.current) return;
      const cardRef = cardRefs.current[certificate.id];
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
      observerRefs.current[certificate.id] = observer;
    });

    return () => {
      certifications.forEach((certificate) => {
        observerRefs.current[certificate.id].disconnect();
      });
    };
  }, []);

  return (
    <AppSection headerTxt={CERTIFICATIONS}>
      <div className="section-content-padding grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-stretch">
        {certifications.map((certificate) => {
          return (
            <div
              key={certificate.id}
              ref={(el) => (cardRefs.current[certificate.id] = el)}
              className="group rounded-md bg-backgroundColor-card-day dark:bg-backgroundColor-card-night sm:p-6 p-3 border-2 border-borderColor opacity-0 transition-opacity duration-1000 ease-linear"
            >
              <div className="flex gap-3 items-center">
                <div className="relative h-16 w-16 rounded-md">
                  <Image
                    alt={certificate.technology}
                    src={certificate.logoURL}
                    fill
                    loading={"lazy"}
                  />
                </div>
                <div className="flex-1 flex flex-col gap-0.5">
                  <AppText textTag="h3" medium semiBold defaultColor>
                    {certificate.technology}
                  </AppText>
                  <AppText
                    textTag="p"
                    default
                    tertiary
                    customClass="group-hover:text-primaryColor"
                  >
                    {certificate.platform}
                  </AppText>
                </div>
              </div>
              <div className="flex flex-col mt-4 gap-0.5">
                <AppText textTag="p" default defaultColor bold>
                  {certificate.course}
                </AppText>
                <a
                  key={certificate.id}
                  href={certificate.certificateURL}
                  target="_blank"
                >
                  <AppText
                    textTag="p"
                    defaultColor
                    default
                    semiBold
                    customClass="flex gap-2 items-center mt-2 hover:underline group-hover:text-red-600"
                  >
                    Certificate Credential
                    <RedirectIcon className="fill-textColor-primary-day dark:fill-textColor-primary-night h-3.5 w-3.5 group-hover:fill-red-600" />
                  </AppText>
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </AppSection>
  );
}

export default CertificationsSection;
