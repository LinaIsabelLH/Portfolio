import React from "react";
import NodeLogo from "../svg/NodeLogo";

type CompetenceType = {
  name: string; // Nom de la compétence
  img?: string; // Chemin de l'image (optionnel)
  svg?: React.ReactNode; // Composant SVG (optionnel)
};

export const frontCompetences: CompetenceType[] = [
  {
    name: "React.js",
    img: ":/img/competence/reactLogo.png",
  },
  {
    name: "Next.js",
    img: "/img/competence/nextLogo.png",
  },
  {
    name: "Tailwindcss",
    img: "/img/competence/tailwindcssLogo.png",
  },
];

export const backCompetences: CompetenceType[] = [
  {
    name: "Node.js",
    svg: <NodeLogo />,
  },
  {
    name: "MongoDB",
    img: "/img/competence/mongodbLogo.png",
  },
];

export const technoCompetences: CompetenceType[] = [
  {
    name: "Javascript",
    img: "/img/competence/jsLogo.png",
  },
  {
    name: "Redux",
    img: "/img/competence/reduxLogo.png",
  },
  {
    name: "SEO",
    img: "/img/competence/seoLogo.png",
  },
  {
    name: "TypeScript",
    img: "/img/competence/typescriptLogo.png",
  },
  {
    name: "Eslint",
    img: "/img/competence/eslintLogo.png",
  },
  {
    name: "Jest",
    img: "/img/competence/jestLogo.png",
  },
];

export const toolsCompetences: CompetenceType[] = [
  {
    name: "Git",
    img: "/img/competence/gitLogo.png",
  },
  {
    name: "Netlify",
    img: "/img/competence/netlifyLogo.png",
  },
  {
    name: "Figma",
    img: "/img/competence/figmaLogo.png",
  },
];
