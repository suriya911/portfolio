"use client";

import React, { useContext, useEffect, useRef } from "react";
import classNames from "classnames";
import Image from "next/image";
import { TTheme } from "../ThemeProvider/types";
import { ThemeContext } from "../ThemeProvider";
import { setLocalStorageItem } from "@/utils/localStorage";
import { USER_THEME_PREFERENCE } from "@/constants/theme";

function ThemeButton(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext);

  const themeBtnRef = useRef<HTMLDivElement | null>(null);

  const handleChangeTheme = () => {
    let themeToSet: TTheme = theme === "dark" ? "light" : "dark";
    setLocalStorageItem(USER_THEME_PREFERENCE, themeToSet);
    setTheme(themeToSet);
  };

  useEffect(() => {
    if (!themeBtnRef.current) return;
    if (theme === "dark") {
      themeBtnRef.current.classList.add("translate-x-full");
    } else {
      themeBtnRef.current.classList.remove("translate-x-full");
    }
  }, [theme]);

  return (
    <button
      className=" bg-borderColor dark:bg-primaryColor-light w-max rounded-full relative"
      onClick={handleChangeTheme}
    >
      <div
        className=" absolute bg-backgroundColor-day rounded-full h-full w-1/2 transition-transform duration-150 ease-linear"
        ref={themeBtnRef}
      />
      <div className=" flex p-1 gap-2">
        <Image
          src={"/images/light-theme-image.png"}
          height={19}
          width={19}
          alt={"light-theme"}
          className={classNames(" z-10", { " invisible": theme === "dark" })}
        />
        <Image
          src={"/images/dark-theme-image.png"}
          height={19}
          width={19}
          alt={"light-theme"}
          className={classNames(" z-10", { " invisible": theme === "light" })}
        />
      </div>
    </button>
  );
}

export default ThemeButton;
