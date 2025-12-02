import React from "react";

import { type ProjectType } from "../../types/types";
import { useLocale } from "@/i18n/useLocale";

type Props = {
  selectedProject: ProjectType;
};

const ProjectLink = (props: Props) => {
  const { t } = useLocale();
  const { selectedProject } = props;
  const { link: projectLink } = selectedProject;

  if (projectLink != null) {
    return (
      <a
        href={projectLink}
        target="blank"
        className="no-underline py-0 bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center px-4 cursor-pointer hover:text-orange-400"
      >
        <h4 className="text-lg font-bold">{t.buttons.typeProject}</h4>
      </a>
    );
  }

  return (
    <h4 className="disabledButton py-0 font-bold bg-slate-800 rounded-lg border border-orange-400 min-h-[30px] flex items-center justify-center px-4 text-neutral-500 cursor-not-allowed">
      {t.buttons.typeProject}
    </h4>
  );
};

export default ProjectLink;
