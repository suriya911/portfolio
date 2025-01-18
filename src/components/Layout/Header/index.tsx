'use client';

import React, { useEffect, useRef } from "react";
import HeaderLogo from "@/components/HeaderLogo";
import Menu from "@/components/Menu";

function Header() {

    const headerRef = useRef<HTMLElement | null>(null);
    const prevScrollY = useRef(0);

    useEffect(() => {
      const scrollHandler = () => {
        if(!headerRef.current) return;
        const currScrollY = window.scrollY;
        if (currScrollY > prevScrollY.current && currScrollY > 100) {
          headerRef.current.classList.remove('translate-y-0');
          headerRef.current.classList.add("-translate-y-full");
        } else {
          headerRef.current.classList.remove('-translate-y-full');
          headerRef.current.classList.add('translate-y-0');
        }
        prevScrollY.current = currScrollY;
      };

      window.addEventListener("scroll", scrollHandler);

      return () => {
        window.removeEventListener("scroll", scrollHandler);
      };
    }, []);

  return (
    <header ref={headerRef} className="flex items-center justify-between gap-2 py-3 px-4 sm:py-6 sm:px-8 sm:gap-8 sticky top-0 bg-backgroundColor-day dark:bg-backgroundColor-night z-10 transition-transform duration-150 ease-linear">
      <HeaderLogo />
      <Menu />
    </header>
  );
}

export default Header;
