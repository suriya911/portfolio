"use client";

import React, { useEffect, useRef } from "react";
import AppText from "../AppText";
import IAppSectionProps from "./types";

function AppSection(props: IAppSectionProps) {
  const borderRef = useRef<HTMLDivElement | null>(null);
  const {hideHeaderTxt = false} = props;

  useEffect(() => {
    if (!borderRef.current) return;

    const obsOptions = { root: null, threshold: 0 };

    const obsCallback = (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (!borderRef.current) return;
      if (entry.isIntersecting) {
        borderRef.current.classList.remove("w-0");
        borderRef.current.classList.add("w-3/4");
      } else {
        borderRef.current.classList.add("w-0");
        borderRef.current.classList.remove("w-3/4");
      }
    };

    const observer = new IntersectionObserver(obsCallback, obsOptions);

    observer.observe(borderRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      className="lg:px-24 lg:py-12 md:px-16 md:py-8 px-4 py-4"
      aria-label={props.headerTxt ?? ""}
      id={props.headerTxt ?? ""}
    >
      {props.headerTxt && !hideHeaderTxt ? (
        <div className="flex items-center justify-center flex-col gap-2 capitalize">
          <AppText textTag="h2" extraLarge light defaultColor>
            {props.headerTxt}
          </AppText>
          <div
            ref={borderRef}
            className={`h-0.5 bg-primaryColor relative flex items-center justify-between transition-all duration-1000 ease-linear 
                            after:content-[''] after:absolute after:h-2 after:w-2 after:rounded-full after:bg-primaryColor after:right-0
                            before:content-[''] before:absolute before:h-2 before:w-2 before:rounded-full before:bg-primaryColor`}
          />
        </div>
      ) : null}
      {props.children}
    </section>
  );
}

export default AppSection;
