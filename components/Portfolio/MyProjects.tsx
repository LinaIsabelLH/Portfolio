import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

import MyProjectsData from "../data/MyProjectsData";

import DetailsProject from "./DetailsProject";
import ProjectLink from "./ProjectButtonLink";
import VideoDemo from "./VideoDemoButton";
import styles from "@/styles/myProjects.module.css"

import { scrollToSection } from "@/utils/scroll";
import { type ProjectType } from "../../types/types";

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const projectModalJSX = useMemo(() => {
    if (selectedProject == null) {
      return null;
    }

    return (
      <DetailsProject
        closeModal={closeModal}
        imageUrl={selectedProject.gif ?? selectedProject.img}
        selectedProject={selectedProject}
        showModal={showModal}
      />
    );
  }, [selectedProject, showModal]);

  return (
    <div className="relative z-10 w-full pt-5 mt-10">
      <div className="flex justify-evenly flex-wrap gap-13 w-[80vw] min-h-[430px] m-auto">
        {MyProjectsData.map((data) => (
          <div key={data.title} data-aos="fade-up">
            <div
              className={`relative w-[330px] h-[430px] flex flex-col overflow-hidden items-center min-w-[270px] max-w-[400px] group ${styles.myProjectIndividualContainer}`}
            >
              <div>
                <Image
                  src={data.img}
                  alt={data.imgTag}
                  title={data.imgTag}
                  width={500}
                  height={500}
                  className="absolute top-0 left-0 object-cover w-[330px] h-[320px]  transition transition-filter duration-250 group-hover:blur-sm"
                />

                <div
                 className="absolute flex flex-col items-center gap-3 top-1/2 left-1/2 w-full opacity-0 group-hover:opacity-100 group-hover:flex animate-fadeIn text-zinc-100 font-bold translate-x-[-50%] translate-y-[-50%] max-w-[80%]"
                >
                  {data.github &&
                    (data.github === "Non disponible" ? (
                      <h4 className="disabledButton bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 text-gray-500 cursor-not-allowed">Github privé</h4>
                    ) : (
                      <a href={data.github} target="blank"  className="no-underline bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer hover:text-orange-400">
                        <h4>Voir le Github</h4>
                      </a>
                    ))}
                  {data.githubs &&
                    data.githubs.map((github) => (
                      <a href={github.link} target="blank" key={github.title}  className="no-underline bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer hover:text-orange-400">
                        <h4>{github.title}</h4>
                      </a>
                    ))}
                  <VideoDemo selectedProject={data}/>
                  <ProjectLink selectedProject={data} />
                  <Button onClick={() => openModal(data)} className="bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer hover:text-orange-400">
                    <h4>Détails</h4>
                  </Button>
                </div>
              </div>
              <div className="mt-80 absolute">
                <h3 className="text-center text-zinc-100 font-bold text-2xl leading-8 py-4 px-5">
                  {data.title}
                </h3>
                <div className="flex flex-wrap gap-[10px] justify-center pt-0 px-[10px] pb-[10px]">
                  {data.stacks.map((stack) => (
                    <Image
                      src={`/img/competences/${stack}Logo.png`}
                      alt={stack}
                      title={stack}
                      width={35}
                      height={35}
                      key={stack}
                      className="w-auto h-7"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}

        {projectModalJSX}
      </div>
      <div className="z-10 flex mt-24 pl-179 justify-between">
        <button
          className="text-3xl pt-4 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          <Image
            src="/img/arrowDown.png"
            alt="arrow to scroll"
            width={24}
            height={24}
          />
        </button>

        <button
          className="text-3xl mt-0 pr-25 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <Image
            src="/img/returnHome.png"
            alt="arrow to return to home page"
            width={50}
            height={50}
          />
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
