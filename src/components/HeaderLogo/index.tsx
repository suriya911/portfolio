import React from "react";
import { Allura } from "next/font/google";
import AppText from "../AppText";
import classNames from "classnames";
const sacramento = Allura({ weight: "400", subsets: ["latin"] });

function HeaderLogo() {
  return (
    <div className={classNames(sacramento.className, "flex gap-2 shrink-0")}>
      <AppText textTag="span" secondary customClass="sm:text-4xl text-3xl">
        {"<"}
      </AppText>
      <a href="#">
        <AppText textTag="span" defaultColor customClass="sm:text-4xl text-3xl">
          {"Suriya"}
        </AppText>
      </a>
      <AppText textTag="span" secondary customClass="sm:text-4xl text-3xl">
        {"/>"}
      </AppText>
    </div>
  );
}

export default HeaderLogo;
