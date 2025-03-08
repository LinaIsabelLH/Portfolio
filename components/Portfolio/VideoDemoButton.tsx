import React from "react";

import { type ProjectType } from "../../types/types";

type Props = {
  selectedProject: ProjectType;
};

const VideoDemo = (props: Props) => {
  const { selectedProject } = props;
  const { video: videoProject } = selectedProject;

  if (videoProject === "Non disponible") {
    return;
  } else if (videoProject != null ) {
    return (
      <a href={videoProject} target="blank" className="no-underline bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer rounded-bl-md rounded-br-md hover:text-orange-400">
        <h4>Vidéo Démo</h4>
      </a>
    );
  }

  return <h4 className="disabledButton bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 text-gray-500 cursor-not-allowed">Vidéo Démo à venir</h4>;
};

export default VideoDemo;
