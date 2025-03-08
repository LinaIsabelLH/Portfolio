import React from "react";
import { Button, Modal } from "react-bootstrap";
import Image from "next/image";

import ProjectLink from "./ProjectButtonLink";

import { type ProjectType } from "../../types/types";

type Props = {
  closeModal: () => void;
  imageUrl: string;
  selectedProject: ProjectType;
  showModal: boolean;
};

const DetailsProject = (props: Props) => {
  const { closeModal, imageUrl, selectedProject, showModal } = props;

  const { stacks } = selectedProject;

  return (
    <Modal
      className="fixed inset-0 z-50 !flex justify-center items-center p-[10vh_0] bg-black/50 backdrop-blur-[4px]"
      show={showModal}
      onHide={closeModal}
    >
      <div className="relative w-full max-w-[700px] max-h-[90vh] overflow-y-auto bg-[radial-gradient(circle,#fb923c,#1e293b)] border border-orange-400 rounded-[20px] p-0 text-slate-100">
        <div className="flex flex-col items-center justify-center gap-[30px] p-[30px_25px] max-[500px]:p-[20px_10px]">
          <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
          <Image
            src={imageUrl}
            alt={selectedProject.title}
            title={selectedProject.title}
            width={500}
            height={500}
            unoptimized
            className="w-full max-h-[370px] h-auto my-5 object-cover object-top border border-slate-800"
          />

          <div className="relative pb-8 w-full text-center">
            {selectedProject.descriptions.map((description) => (
              <p key={description} className="mb-2">
                {description}
              </p>
            ))}
            <div className="absolute bottom-0 left-[10%] w-[80%] border-b-2 border-gray-600 rounded-sm"></div>
          </div>
          {/* Stacks utilisés */}
          <h4 className="font-semibold text-center">
            Récapitulatif des compétences utilisées pour ce projet :{" "}
          </h4>
          <div className="flex flex-wrap gap-2 justify-center w-full pb-8">
            {stacks.map((stack, index) => (
              <div
                key={index}
                className="flex items-center gap-2 border border-gray-600 rounded-lg px-3 py-2"
              >
                <Image
                  src={`/img/competences/${stack}Logo.png`}
                  alt={stack}
                  title={stack}
                  width={35}
                  height={35}
                  unoptimized
                  className="object-contain"
                />
                <p className="font-semibold">{stack}</p>
              </div>
            ))}
          </div>
          {/* Liens Github & Autres */}
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {selectedProject.github &&
              (selectedProject.github === "Non disponible" ? (
                <h4 className="disabledButton bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 text-gray-500 cursor-not-allowed font-bold">
                  Github privé
                </h4>
              ) : (
                <a
                  href={selectedProject.github}
                  target="blank"
                  className="bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer rounded-bl-md rounded-br-md hover:text-orange-400"
                >
                  <h4 className="font-bold">Voir le Github</h4>
                </a>
              ))}
            {selectedProject.githubs &&
              selectedProject.githubs.map((github) => (
                <a
                  href={github.link}
                  target="blank"
                  key={github.title}
                  className="bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer rounded-bl-md rounded-br-md hover:text-orange-400"
                >
                  <h4 className="font-bold">{github.title}</h4>
                </a>
              ))}
            {/* Lien vers le projet */}
            <ProjectLink selectedProject={selectedProject} />
            {/* Bouton de retour */}
            <button
              type="button"
              onClick={closeModal}
              className="bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer rounded-bl-md rounded-br-md hover:text-orange-400"
            >
              <h4 className="font-bold">Retourner aux projets</h4>
            </button>
          </div>
          {/* Bouton de fermeture */}
          <Button
            className="absolute top-4 right-4 bg-gray-800 border border-gray-600 rounded-lg h-8 w-8 flex items-center justify-center text-slate-100 text-xl hover:text-orange-400"
            onClick={closeModal}
          >
            X
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DetailsProject;
