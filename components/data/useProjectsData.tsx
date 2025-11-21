import { ProjectType } from "../../types/types";
import { useLocale } from "@/i18n/useLocale";

export const useProjectsData =(): ProjectType[]  => {
  const {t} = useLocale();

  return [
    {
      title: t.projects.wefood.title,
      img: "/img/projects/WeFoodApp.png",
      imgTag: "WeFoodApp",
      descriptions: [
        t.projects.wefood.desc1,
      ],
      video: "/img/projects/WeFoodGif.GIF",
      link: null,  // or link to the Project if deployed
      github: null, 
      stacks: ["react", "next", "api", "node"],
    },
    {
      title: t.projects.portfolio.title,
      img: "/img/projects/MyPortfolioProject.png",
      imgTag: "MyPortfolio",
      descriptions: [
        t.projects.portfolio.desc1,
      ],
      video: null,
      link: null,
      github: "https://github.com/LinaIsabelLH/Portfolio.git",
      stacks: ["react", "typescript", "tailwindcss", "next", "node", "eslint"],
    },
  ];
}

