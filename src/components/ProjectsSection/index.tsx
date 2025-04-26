"use client";

import React, { useState, useRef, useEffect } from "react";
import AppSection from "../AppSection";
import { PROJECTS } from "@/constants/menu";
import AppButton from "../AppButton";
import AppText from "../AppText";
import GithubLogo from "@images/icons/github-logo.svg";
import GlobeIcon from "@images/icons/globe-icon.svg";
import PlayIcon from '@images/icons/play-icon.svg';
import Image from "next/image";

const TAGS = {
  BACKEND: "Backend",
  FS: "Full Stack",
  DS: "Artificial Intelligence"
};

const PER_PAGE_PROJECTS = 3;

const randomColors = [
  "text-blue-600",
  "text-green-600",
  "text-yellow-600",
  "text-red-600",
  "text-pink-600",
  "text-purple-600",
  "text-indigo-600",
  "text-teal-600",
  "text-orange-600",
  "text-lime-600",
  "text-cyan-600",
  "text-emerald-600",
  "text-amber-600",
  "text-fuchsia-600",
  "text-true-gray-600",
];

const mainProjects = [
  {
    id: "ai-financial-news",
    name: "AI-Based Financial News Analyzer for Stock Prediction",
    description: `Developed a Transformer-driven NLP model to assess financial news sentiment and accurately predict stock prices. Boosted prediction accuracy by 20% via integration of historical data using TensorFlow, then deployed on AWS Lambda. Created a React dashboard serving 500+ active users, offering real-time market insights.`,
    techStack: ["Transformer", "NLP", "TensorFlow", "AWS Lambda", "React"],
    githubLink: `https://github.com/yourusername/ai-financial-news-analyzer`,
    tags: [TAGS.DS],
  },
  {
    id: "energy-optimizer",
    name: "AI-Based Energy Consumption Optimizer for Smart Homes",
    description: `Built an LSTM-based predictive model to optimize IoT-driven energy usage, reducing consumption by 15%. Deployed via AWS IoT Core for real-time monitoring and control through a Flutter mobile application.`,
    techStack: ["LSTM", "IoT", "AWS IoT Core", "Flutter", "Python"],
    githubLink: `https://github.com/yourusername/energy-consumption-optimizer`,
    tags: [TAGS.DS],
  },
  {
    id: "securemed",
    name: "SecureMed – GAN-Based Video/Image Steganography for Medical Data",
    description: `Implemented a GAN-powered system embedding 100+ sensitive medical records in images and videos securely. Employed hybrid cryptosystems and post-quantum cryptography to maximize capacity and confidentiality. Utilized PyTorch, Flask, and FFmpeg for seamless retrieval and reliable deployment.`,
    techStack: ["GAN", "PyTorch", "Flask", "FFmpeg", "Cryptography"],
    githubLink: `https://github.com/yourusername/securemed`,
    tags: [TAGS.DS],
  },
  {
    id: "personalized-learning",
    name: "AI-Based Personalized Learning Platform",
    description: `Developed an intelligent recommendation engine leveraging NLP and collaborative filtering to enhance engagement. Deployed a scalable backend using Flask and MongoDB, delivering personalized learning pathways.`,
    techStack: ["NLP", "Collaborative Filtering", "Flask", "MongoDB", "Python"],
    githubLink: `https://github.com/yourusername/personalized-learning-platform`,
    tags: [TAGS.DS],
  },
  {
    id: "intellinews",
    name: "IntelliNews – AI-Based Personalized News Aggregator",
    description: `Engineered a tailored news platform using NLP (SpaCy, NLTK) and collaborative filtering within a Flask + MongoDB stack. Increased user retention by delivering precisely targeted news recommendations.`,
    techStack: ["NLP", "SpaCy", "NLTK", "Flask", "MongoDB"],
    githubLink: `https://github.com/yourusername/intellinews`,
    tags: [TAGS.DS],
  },
  {
    id: "speech-emotion",
    name: "Real-Time Speech Emotion Recognition System",
    description: `Built a CNN-RNN solution for real-time emotion classification from audio, achieving 85% accuracy. Enabled browser-based interfaces for on-the-spot emotion insights in live interactions.`,
    techStack: ["CNN", "RNN", "Audio Processing", "Web Development"],
    githubLink: `https://github.com/yourusername/speech-emotion-recognition`,
    tags: [TAGS.DS],
  },
  {
    id: "code-translation",
    name: "Cloud-Based Code Translation Tool",
    description: `Designed a multilingual code translation platform using Transformer-based architectures. Efficiently deployed with Flask and MongoDB, ensuring cost-effective scaling.`,
    techStack: ["Transformer", "Flask", "MongoDB", "Cloud Computing"],
    githubLink: `https://github.com/yourusername/code-translation-tool`,
    tags: [TAGS.DS],
  }
];

function ProjectsSection() {
  const [selectedProjects, setSelectedProjects] = useState(mainProjects);
  const [displayedProjects, setDisplayedProjects] = useState(PER_PAGE_PROJECTS);

  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const projectObserverRefs = useRef<{ [key: string]: IntersectionObserver }>(
    {}
  );

  useEffect(() => {
    selectedProjects.forEach((project) => {
      const projectRef = projectRefs.current[project.id];

      if (!projectRef) return;

      const obsCallBack = function (entries: IntersectionObserverEntry[]) {
        const [entry] = entries;

        if (!entry.isIntersecting) {
          projectRef.classList.remove("opacity-100");
          projectRef.classList.remove("translate-y-0");
          projectRef.classList.add("opacity-0");
          projectRef.classList.add("translate-y-[5%]");
        } else {
          projectRef.classList.remove("opacity-0");
          projectRef.classList.remove("translate-y-[5%]");
          projectRef.classList.add("opacity-100");
          projectRef.classList.add("translate-y-0");
        }
      };

      const obsOptions = {
        root: null,
        threshold: 0,
      };

      const projectObserver = new IntersectionObserver(obsCallBack, obsOptions);
      projectObserver.observe(projectRef);
      projectObserverRefs.current[project.id] = projectObserver;
    });

    return () => {
      selectedProjects.forEach((project) => {
        projectObserverRefs.current[project.id]?.disconnect();
      });
    };
  }, [selectedProjects, displayedProjects]);

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    if (value === "all") {
      setSelectedProjects(mainProjects);
      setDisplayedProjects(displayedProjects);
    } else {
      const filteredProjects = mainProjects.filter((project) =>
        project.tags.includes(value)
      );
      setSelectedProjects(filteredProjects);
      setDisplayedProjects(displayedProjects);
    }
  };

  const handleOnClickBtn = () => {
    if (displayedProjects < selectedProjects.length) {
      setDisplayedProjects((prevState) => prevState + PER_PAGE_PROJECTS);
    } else {
      setDisplayedProjects((prevState) => prevState - PER_PAGE_PROJECTS);
    }
  };

  return (
    <AppSection headerTxt={PROJECTS}>
      <div className="section-content-padding w-full relative flex flex-col items-center justify-start md:gap-8 gap-6">
        <select
          onChange={onSelectTag}
          className="self-end bg-transparent border-2 rounded-md border-borderColor p-2 cursor-pointer text-textColor-primary-day dark:text-textColor-primary-night"
        >
          {["all", ...Object.values(TAGS)].map((tag) => {
            return (
              <option
                className="bg-backgroundColor-day dark:bg-backgroundColor-night"
                key={tag}
                value={tag}
              >
                {tag}
              </option>
            );
          })}
        </select>
        <div className="sm:project-section-grid-layout flex flex-col gap-4">
          {selectedProjects.slice(0, displayedProjects).map((project) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[project.id] = el)}
              className="md:p-6 p-4 bg-backgroundColor-card-day dark:bg-backgroundColor-card-night w-full rounded-md opacity-0 translate-y-[5%] transition-all duration-500 ease-linear"
            >
              {/* <div className="w-full h-[200px] sm:h-[240px] rounded-md relative mb-4 overflow-hidden">
                <Image alt={project.name} src={project.imgURL} fill />
              </div> */}
              <div className="flex flex-col gap-3 justify-start">
                <div className="flex gap-2 justify-between align-center">
                  <AppText textTag="h3" extraMedium bold defaultColor>
                    {project.name}
                  </AppText>
                  <div className="flex gap-2 align-center justify-end">
                    <a href={project.githubLink} target="_blank">
                      <GithubLogo className="h-9 w-9" />
                    </a>
                    {/* {project.webLink && <a href={project.webLink} target="_blank">
                    <GlobeIcon className="h-9 w-9" />
                  </a>} */}
                    {/* {project.demoLink && <a href={project.demoLink} target="_blank"><PlayIcon className="h-9 w-9"/></a>} */}
                  </div>
                </div>
                <AppText textTag="p" default secondary>
                  {project.description}
                </AppText>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((stack, index) => {
                    return (
                      <p
                        key={stack}
                        className={`text-sm ${index < randomColors.length ? randomColors[index] : randomColors[Math.floor(Math.random() * (13))]}`}
                      >{`#${stack}`}</p>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
        {selectedProjects.length > PER_PAGE_PROJECTS && (
          <AppButton
            buttonType="secondary"
            buttonText={`${displayedProjects < selectedProjects.length
              ? "Show More"
              : "Show Less"
              } `}
            ariaLabel={`click to ${displayedProjects < selectedProjects.length
              ? "Show More"
              : "Show Less"
              } projects`}
            onClick={handleOnClickBtn}
          />
        )}
      </div>
    </AppSection>
  );
}

export default ProjectsSection;
