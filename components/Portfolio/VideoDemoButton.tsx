import React from "react";

import { type ProjectType } from "../../types/types";

type Props = {
  selectedProject: ProjectType;
};

const VideoDemo = (props: Props) => {
  const { selectedProject } = props;
  const { video: videoProject } = selectedProject;

  if (videoProject === null) {
    return;
  } else if (videoProject != "Non disponible") {
    return (
      <a href={videoProject} target="blank">
        <h4>Vidéo Démo</h4>
      </a>
    );
  }

  return <h4 className="disabledButton">Vidéo Démo à venir</h4>;
};

export default VideoDemo;
