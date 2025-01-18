"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  CERTIFICATIONS,
  CONTACT,
  EXPERIENCE,
  EDUCATION,
  PROJECTS,
  SKILLS,
} from "@/constants/menu";
import useWindow from "@/hooks/useWindow";
import AppText from "../AppText";
import ThemeButton from "../ThemeButton";

const sectionsLinks = [
  SKILLS,
  EXPERIENCE,
  PROJECTS,
  EDUCATION,
  CERTIFICATIONS,
  CONTACT,
];

function Menu() {
  const { isMobile, isTablet, height, width } = useWindow();
  const [showMobileLinks, setShowMobileLinks] = useState(false);
  const hamburgerRef = useRef<HTMLSpanElement | null>(null);
  const mobileLinksRef = useRef<HTMLDivElement | null>(null);

  const showHamburgerMenu = isMobile || isTablet;

  useEffect(() => {
    if (!hamburgerRef.current) return;
    if (showMobileLinks) {
      hamburgerRef.current.classList.remove("bg-textColor-primary-day");
      hamburgerRef.current.classList.remove("dark:bg-textColor-primary-night");
      hamburgerRef.current.classList.add("before:rotate-45");
      hamburgerRef.current.classList.remove("after:top-2");
      hamburgerRef.current.classList.add("after:-rotate-45");
      hamburgerRef.current.classList.remove("before:bottom-2");

      if (mobileLinksRef.current) {
        mobileLinksRef.current.classList.remove("scale-0");
        mobileLinksRef.current.classList.add("scale-100");
      }
    } else {
      hamburgerRef.current.classList.add("bg-textColor-primary-day");
      hamburgerRef.current.classList.add("dark:bg-textColor-primary-night");
      hamburgerRef.current.classList.remove("before:rotate-45");
      hamburgerRef.current.classList.add("after:top-2");
      hamburgerRef.current.classList.remove("after:-rotate-45");
      hamburgerRef.current.classList.add("before:bottom-2");

      if (mobileLinksRef.current) {
        mobileLinksRef.current.classList.remove("scale-100");
        mobileLinksRef.current.classList.add("scale-0");
      }
    }
  }, [showMobileLinks, showHamburgerMenu]);

  if (!height || !width) {
    return null;
  }

  return (
    <nav className="relative">
      {!showHamburgerMenu && (
        <ul
          className="list-none flex items-center justify-start gap-x-8 gap-y-2 flex-wrap"
          aria-label={"section links"}
        >
          {sectionsLinks.map((sectionLink) => (
            <li key={sectionLink}>
              <a
                href={`#${sectionLink}`}
                aria-label={`click to go to ${sectionLink} section`}
                className="capitalize"
              >
                <AppText textTag="span" medium tertiary hoverEffect>
                  {sectionLink}
                </AppText>
              </a>
            </li>
          ))}
          <li>
            <ThemeButton />
          </li>
        </ul>
      )}

      {showHamburgerMenu && (
        <button
          onClick={() => setShowMobileLinks(!showMobileLinks)}
          className={`h-9 w-11 rounded-full flex items-center justify-center`}
        >
          <span
            ref={hamburgerRef}
            aria-hidden
            className={`relative block w-3/5 h-0.5
                        before:content-[''] before:absolute before:h-0.5 before:w-full before:bg-textColor-primary-day dark:before:bg-textColor-primary-night before:left-0 before:transition-transform before:duration-150 before:ease-linear  
                        after:content-[''] after:absolute after:h-0.5 after:w-full after:bg-textColor-primary-day dark:after:bg-textColor-primary-night after:left-0 after:transition-transform after:duration-150 after:ease-linear`}
          />
        </button>
      )}

      {showMobileLinks && showHamburgerMenu && (
        <div
          ref={mobileLinksRef}
          className="bg-backgroundColor-card-day dark:bg-backgroundColor-card-night absolute right-0 px-8 py-4 z-10 shadow-3xl mt-1 rounded-md scale-0 transition-transform duration-300 ease-in-out"
        >
          <ul
            className="list-none flex flex-col items-start justify-center gap-y-4 gap-x-2 flex-wrap"
            aria-label={"section links"}
          >
            {sectionsLinks.map((sectionLink) => (
              <li key={sectionLink}>
                <a
                  href={`#${sectionLink}`}
                  aria-label={`click to go to ${sectionLink} section`}
                  className="capitalize"
                  onClick={() => setShowMobileLinks(false)}
                >
                  <AppText textTag="span" medium tertiary hoverEffect>
                    {sectionLink}
                  </AppText>
                </a>
              </li>
            ))}
            <li>
              <ThemeButton />
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Menu;
