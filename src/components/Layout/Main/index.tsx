"use client";

import React from "react";
import HeaderSection from "@/components/HeaderSection";
import SkillsSection from "@/components/SkillsSection";
import EducationSection from "@/components/EducationSection";
import CertificationsSection from "@/components/CertificationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";

function Main() {
  return (
    <main className="flex-1">
      <HeaderSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection/>
      <EducationSection />
    </main>
  );
}

export default Main;
