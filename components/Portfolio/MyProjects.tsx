import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

import MyProjectsData from "../data/MyProjectsData";

import DetailsProject from "./DetailsProject";
import ProjectLink from "./ProjectButtonLink";

import styles from "../../styles/myProjects.module.css";
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
    <div className="flex justify-evenly flex-wrap gap-13 w-[80vw] min-h-[430px] m-auto">
      {MyProjectsData.map((data) => (
        <div key={data.title} data-aos="fade-up">
          <div
            className={`relative w-[330px] h-[430px] flex flex-col overflow-hidden items-center min-w-[270px] max-w-[400px] ${styles.myProjectIndividualContainer}`}
          >
            <div>
              <Image
                src={data.img}
                alt={data.imgTag}
                title={data.imgTag}
                width={500}
                height={500}
                className={`absolute top-0 left-0 object-cover w-[330px] h-[320px]  transition transition-filter duration-250 ${styles.myProjectsPicture}`}
              />

              <div
                className={`absolute flex flex-col items-center gap-3 top-1/2 left-1/2 w-full opacity-0 text-zinc-100 font-bold ${styles.projectGithubButtons}`}
              >
                {data.github &&
                  (data.github === "Non disponible" ? (
                    <h4 className="disabledButton">Github privé</h4>
                  ) : (
                    <a href={data.github} target="blank">
                      <h4>Voir le Github</h4>
                    </a>
                  ))}
                {data.githubs &&
                  data.githubs.map((github) => (
                    <a href={github.link} target="blank" key={github.title}>
                      <h4>{github.title}</h4>
                    </a>
                  ))}
                <ProjectLink selectedProject={data} />
                <Button onClick={() => openModal(data)}>
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
  );
};

export default MyProjects;
