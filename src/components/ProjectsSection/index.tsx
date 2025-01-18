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
    id: "eazy-tickets",
    name: "Eazy Tickets",
    description: `This project is an attempt of creating a movie ticket booking application where backend is developed using Django and TypeScript as it's frontend technology.`,
    techStack: ["Django", "EC2", "RDS",  "Load Balancers", "Auto Scaler",  "TypeScript", "Docker"],
    // imgURL: "/images/assignment-submission.png",
    githubLink: `https://github.com/gopinathsjsu/team-project-project_s`,
    tags: [TAGS.FS],
  },
  {
    id: "audio-brief",
    name: "Audio Brief",
    description: `  Developed the Kisan Care Project, an e-commerce platform enabling direct farmer-retailer interactions and
    boosting farmer earnings through a bidding system by 1.5 times. Enriched platform with real-time insights, weather forecasts, and image-based disease detection. Designed a recommendation system for farmers, enhancing product interactions by 51%.`,
    techStack: ["Django", "Reactjs", "SQL", "GraphQL", "Flutter"],
    // imgURL: "/images/assignment01.png",
    githubLink: `https://github.com/sivask01/Kisan_care`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=1tawz6aVeswcHqI2OKAxYyYzYdJ5Nxs-1t2lzuXzI5OU#0`,
    tags: [TAGS.FS],
  },
  {
    id: "chat-application",
    name: "Chat Application",
    description: `Facilitated effortless user discovery of new connections by implementing features to connect based on shared interests,
    geographical location, and community affiliation. Implemented real-time chat which employs Web Sockets for end-to-end messaging fostering instant communications`,
    techStack: ["Python", "Socket.io", "JavaScript", "HTML", "CSS", "Pycharts"],
    // imgURL: "/images/assignment01.png",
    githubLink: `https://github.com/sivask01/ChatApplication`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=1DyfWnAj3sUVshCtt96xWAaFhrE6ifEfT13ZruDm3dMc#0`,
    // demoLink: `https://codelabs-preview.appspot.com/?file_id=1DyfWnAj3sUVshCtt96xWAaFhrE6ifEfT13ZruDm3dMc#0`,
    tags: [TAGS.BACKEND],
  },
  {
    id: "face-mask",
    name: "Face Mask Identification",
    description: `This model identifies whether person in a group wearing mask properly or not. Implemented Convolutional Neural Network (CNN) model architecture to analyze and classify images. This involved
    processing a substantial dataset of 20GB, consisting of diverse image classes.
    Rigorously prepared the dataset by resizing images to a uniform 64x64 dimension and normalizing them to a 0-1 scale
    to optimize the model’s performance.
    Utilized dropout regularization to enhance model robustness and mitigate overfitting, ensuring consistent accuracy.
    `,
    techStack: ["CNN", "TensorFlow", "Keras", "Adam Optimizer", "DropOut"],
    // imgURL: "/images/assignment03.png",
    githubLink: `https://github.com/sivask01/CMPE-255-01`,
    // webLink: `https://codelabs-preview.appspot.com/?file_id=12dn3Hs3BN9EUdLaln8LcXcGW6GwyTEJBKvV6ACbZrAk#0`,
    tags: [TAGS.DS],
  },
  {
    id: "resume-scorer",
    name: "Resume Scorer",
    description: `Designed an innovative tool to match resumes with job descriptions, enhancing recruitment efficiency with an
    impressive weighted F1-score of 87%.
    Employed web scraping techniques to curate a dataset over 17000 job postings and labelled the data.
    Integrated Named Entity Recognition (NER) models to efficiently extract 5 key entities from job descriptions.
    Applied Term Frequency-Inverse Document Frequency (TF-IDF) for effective keyword extraction, and employed cosine
    similarity measures to rank them.
    `,
    techStack: ["NLP", "Label Studio", "Spacy pre-trained model", "en-core-web-md", "Word Cloud"],
    // imgURL: "/images/prepbuddy.png",
    githubLink: `https://github.com/iamvinitk/NER-CMPE-257`,
    // webLink: `https://startling-cranachan-1e8cbc.netlify.app/`,
    tags: [TAGS.DS],
  },
  // {
  //   id: "chef-it-out",
  //   name: "Chef It Out",
  //   description: `I conceptualized and developed a dynamic platform facilitating seamless connections between chefs, hotels, and consumers with just a few clicks. The platform also offers a subscription feature, allowing customers to conveniently schedule dishes. Additionally, I integrated Paytm's payment gateway to support both subscription-based payments and direct payments during checkout. This project showcases my ability to create innovative solutions that bridge culinary talents with eager audiences while ensuring efficient and secure transactions.`,
  //   techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
  //   imgURL: "/images/chef-it-out.png",
  //   githubLink: `https://github.com/shivasaicharanruthala/comfort-clothing`,
  //   tags: [TAGS.BACKEND],
  // },
  // {
  //   id: "crwn-clothing",
  //   name: "Crwn Clothing",
  //   description: `Built an E-Commerce application as an educational project to grasp the fundamentals of React.js, employing the Context API for efficient state management. This project allowed me to delve into component isolation and data flow design, providing valuable insights into building robust web applications with a focus on user interfaces and seamless data management..`,
  //   techStack: ["React", "Node.js", "MongoDB", "Express", "Context API"],
  //   imgURL: "/images/crown-clothing.png",
  //   githubLink: `https://github.com/shivasaicharanruthala/comfort-clothing`,
  //   tags: [TAGS.BACKEND],
  // },
  // {
  //   id: "ice-breaker",
  //   name: "IceBreaker",
  //   description: `I designed and developed a robust crowdfunding website, streamlining campaign creation and management for users. By seamlessly integrating payment processing, I ensured secure contributions via various methods, including credit cards and PayPal. To enhance application reliability, I implemented Celery for email notifications and file uploads, enabling automated retries on failures. This project demonstrates my expertise in creating efficient and secure platforms that facilitate fundraising and user engagement.`,
  //   techStack: ["Python", "Django", "ORM", "Celery", "SQL", "Bootstrap"],
  //   imgURL: "/images/padhai.jpeg",
  //   githubLink: ``,
  //   tags: [TAGS.BACKEND],
  // },
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
            buttonText={`${
              displayedProjects < selectedProjects.length
                ? "Show More"
                : "Show Less"
            } `}
            ariaLabel={`click to ${
              displayedProjects < selectedProjects.length
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
