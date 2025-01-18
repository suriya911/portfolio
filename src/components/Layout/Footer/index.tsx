"use client";

import React from "react";
import AppText from "@/components/AppText";
import ContactLogos from "@/components/ContactLogos";
import LocationIcon from "@images/icons/location-icon.svg";
import { CONTACT } from "@/constants/menu";

function Footer() {
  return (
    <footer
      className="lg:px-24 lg:py-12 md:px-16 md:py-8 px-4 py-4"
      aria-label={CONTACT}
      id={CONTACT}
    >
      <div className="flex items-center lg:flex-row flex-col">
        <div className="basis-3/4 lg:text-start text-center">
          <AppText textTag="h2" extraLarge defaultColor>
            Reach Out to me!
          </AppText>
          <AppText textTag="h2" medium secondary customClass="mt-2">
            DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.
          </AppText>
          <div className="flex items-center lg:justify-start justify-center gap-1 my-6">
            <LocationIcon className="h-6 w-6 fill-primaryColor-light" />
            <AppText textTag="p" default defaultColor>
              San Jose, USA
            </AppText>
          </div>
          <AppText textTag="p" medium defaultColor customClass="my-6">
            Open for opportunities: Yes
          </AppText>
          <div className="flex lg:justify-start justify-center">
            <ContactLogos />
          </div>
        </div>
        <div className="basis-1/4 lg:block relative hidden min-w-[300px] min-h-[300px]">
          <div className="w-24 h-24 rounded-full bg-primaryColor-light absolute" />
          <div className="w-4 h-4 rounded-full bg-primaryColor-light absolute top-28 left-8" />
          <div className="w-4 h-4 rounded-full bg-primaryColor-light absolute left-48 bottom-12" />
          <div className="w-20 h-20 rounded-full bg-primaryColor-light absolute left-48" />
          <div className="w-8 h-8 rounded-full bg-primaryColor-light absolute left-28 -bottom-4" />
          <div className="w-12 h-12 rounded-full bg-primaryColor-light absolute left-28 top-12" />
          <div className="w-4 h-4 rounded-full bg-primaryColor-light absolute left-28 top-24" />
          <div className="w-8 h-8 rounded-full bg-primaryColor-light absolute left-28 -bottom-4" />
          <div className="w-8 h-8 rounded-full bg-primaryColor-light absolute left-48 -bottom-4" />
          <div className="w-4 h-4 rounded-full bg-primaryColor-light absolute left-72" />
          <div className="w-8 h-8 rounded-full bg-primaryColor-light absolute left-72 top-24" />
          <div className="w-16 h-16 rounded-full bg-primaryColor-light absolute left-64 bottom-5" />
          <div className="w-12 h-12 rounded-full bg-primaryColor-light absolute left-48 bottom-20" />
          <div className="w-12 h-12 rounded-full bg-primaryColor-light absolute bottom-5" />
          <div className="w-8 h-8 rounded-full bg-primaryColor-light absolute left-40 top-28" />
          <div className="w-20 h-20 rounded-full bg-primaryColor-light absolute left-20 bottom-12" />
        </div>
      </div>
      <AppText
        textTag="p"
        default
        defaultColor
        semiBold
        customClass="mt-12 text-center"
      >
        © Copyright 2024 - Suriya Chellappan
      </AppText>
    </footer>
  );
}

export default Footer;
