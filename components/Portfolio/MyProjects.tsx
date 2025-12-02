import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

import { useProjectsData } from "../data/useProjectsData";
import { useLocale } from "@/i18n/useLocale";


import DetailsProject from "./DetailsProject";
import ProjectLink from "./ProjectButtonLink";
import VideoDemo from "./VideoDemoButton";

import { type ProjectType } from "../../types/types";
import ScrollButtons from "../ScrollButtons";

const MyProjects = () => {
  const { t } = useLocale();
  const MyProjectsData = useProjectsData();
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
      <div className="flex justify-evenly flex-wrap gap-13 w-[80vw] min-h-[430px] m-auto max-[500px]:w-[85vw]">
        {MyProjectsData.map((data) => (
          <div key={data.title} data-aos="fade-up">
            <div
              className={`relative w-[330px] h-[430px] flex flex-col overflow-hidden items-center min-w-[270px] rounded-xl border-transparent bg-[radial-gradient(circle,#fb923c,#1e293b)] shadow-2xl shadow-orange-400 group max-[1100px]:max-w-[85vw]`}
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

                <div className="absolute flex flex-col items-center gap-3 top-1/2 left-1/2 w-full opacity-0 group-hover:opacity-100 group-hover:flex animate-fadeIn text-zinc-100 font-bold translate-x-[-50%] translate-y-[-50%] max-w-[80%]">
                  {data.github &&
                    (data.github === "Non disponible" ? (
                      <h4 className="disabledButton bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 text-gray-500 cursor-not-allowed">
                        {t.buttons.githubPrivate}
                      </h4>
                    ) : (
                      <a
                        href={data.github}
                        target="blank"
                        className="no-underline bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer hover:text-orange-400"
                      >
                        <h4>{t.buttons.viewGithub}</h4>
                      </a>
                    ))}
                  {data.githubs &&
                    data.githubs.map((github) => (
                      <a
                        href={github.link}
                        target="blank"
                        key={github.title}
                        className="no-underline bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer hover:text-orange-400"
                      >
                        <h4>{github.title}</h4>
                      </a>
                    ))}
                  <VideoDemo selectedProject={data} />
                  <ProjectLink selectedProject={data} sizeDisableButton="py-0" />
                  <Button
                    onClick={() => openModal(data)}
                    className="bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer hover:text-orange-400"
                  >
                    <h4>{t.buttons.details}</h4>
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
      <div className="z-10 flex w-screen mt-22 justify-center">
        <ScrollButtons idSection="contact" />
      </div>
    </div>
  );
};

export default MyProjects;
