"use client";

import { AnimatePresence, Variants } from "framer-motion";
import Image from "next/image";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { useState } from "react";

import { MotionDivWrapper } from "@/app/{components}";
import { urlFor } from "@/lib/sanity";

type Props = {
  projectsData: ProjectType[];
  tagsData: TagsType[];
};

const divVariant: Variants = {
  hidden: { y: -50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.25, delayChildren: 0.5 },
  },
  exit: { y: 50, opacity: 0 },
};

const hoverVariant: Variants = {
  hidden: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
      staggerChildren: 0.5,
    },
  },
};

const IconVariant: Variants = {
  hover: {
    scale: 0.9,
    transition: {
      duration: 0.2,
    },
  },
};

function ProjectsUI({ projectsData, tagsData }: Props) {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProject, setFilteredProject] =
    useState<ProjectType[]>(projectsData);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);

    const filteredProjects = projectsData.filter((project) =>
      project.tags.some((tag) => tag.name === item)
    );

    setFilteredProject(
      item === "all" ? filteredProjects.slice(0, 4) : filteredProjects
    );
  };

  return (
    <>
      <div className="app__work-filter">
        {tagsData.map((item) => {
          return (
            <div
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item.name ? "item-active" : ""
              }`}
              key={item._id}
              onClick={() => handleWorkFilter(item.name)}
            >
              {item.name}
            </div>
          );
        })}
      </div>
      <div className="app__work-portfolio">
        <AnimatePresence>
          {filteredProject.map((work, index) => {
            return (
              // work item container
              <MotionDivWrapper
                variants={divVariant}
                key={index}
                className="app__work-item app__flex"
              >
                <div className="app__work-img app__flex">
                  {/* image */}
                  <Image
                    src={urlFor(work.imageUrl).url()}
                    alt={work.title}
                    fill
                  />

                  {/* on hover effects */}

                  <MotionDivWrapper
                    variants={hoverVariant}
                    className="app__work-hover app__flex"
                  >
                    <a href={work.projectLink} target="_blank" rel="noreferrer">
                      <MotionDivWrapper
                        variants={IconVariant}
                        className="app__flex"
                      >
                        <AiFillEye />
                      </MotionDivWrapper>
                    </a>

                    <a href={work.codeLink} target="_blank" rel="noreferrer">
                      <MotionDivWrapper
                        variants={IconVariant}
                        className="app__flex"
                      >
                        <AiFillGithub />
                      </MotionDivWrapper>
                    </a>
                  </MotionDivWrapper>
                </div>

                {/* title and description and tags*/}
                <div className="app__work-content app__flex">
                  <h4 className="bold-text">{work.title}</h4>
                  <p className="p_text" style={{ marginTop: 10 }}>
                    {work.description}
                  </p>
                  {/* tags */}
                  <div className="app__work-tag app__flex">
                    <p
                      className="p-text"
                      style={{ textTransform: "capitalize" }}
                    >
                      {work.tags[0].name}
                    </p>
                  </div>
                </div>
              </MotionDivWrapper>
            );
          })}
        </AnimatePresence>
      </div>
    </>
  );
}

export default ProjectsUI;
