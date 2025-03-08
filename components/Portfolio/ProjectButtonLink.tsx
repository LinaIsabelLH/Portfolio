import React from 'react';

import { type ProjectType } from '../../types/types';

type Props = {
  selectedProject: ProjectType;
};

const ProjectLink = (props: Props) => {
  const { selectedProject } = props;
  const { link: projectLink } = selectedProject;

  if (projectLink != null) {
    return (
      <a href={projectLink} target="blank" className="no-underline bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 cursor-pointer rounded-bl-md rounded-br-md hover:text-orange-400">
        <h4>Voir le projet</h4>
      </a>
    );
  } 

  return (
    <h4 className="disabledButton bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 text-gray-500 cursor-not-allowed">Projet local</h4>
  );
};

export default ProjectLink;