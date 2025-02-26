import React from "react";
import NodeLogo from "../svg/NodeLogo";
import { type CompetenceType } from "@/types/types";


export const frontCompetences: CompetenceType[] = [
  {
    name: "React.js",
    img: "/img/competences/reactLogo.png",
  },
  {
    name: "Next.js",
    img: "/img/competences/nextLogo.png",
  },
  {
    name: "Tailwindcss",
    img: "/img/competences/tailwindcssLogo.png",
  },
];

export const backCompetences: CompetenceType[] = [
  {
    name: "Node.js",
    svg: <NodeLogo />,
  },
  {
    name: "MongoDB",
    img: "/img/competences/mongodbLogo.png",
  },
];

export const technoCompetences: CompetenceType[] = [
  {
    name: "Javascript",
    img: "/img/competences/jsLogo.png",
  },
  {
    name: "Redux",
    img: "/img/competences/reduxLogo.png",
  },
  {
    name: "SEO",
    img: "/img/competences/seoLogo.png",
  },
  {
    name: "TypeScript",
    img: "/img/competences/typescriptLogo.png",
  },
  {
    name: "Eslint",
    img: "/img/competences/eslintLogo.png",
  },
  {
    name: "Jest",
    img: "/img/competences/jestLogo.png",
  },
];

export const toolsCompetences: CompetenceType[] = [
  {
    name: "Git",
    img: "/img/competences/gitLogo.png",
  },
  {
    name: "Netlify",
    img: "/img/competences/netlifyLogo.png",
  },
  {
    name: "Figma",
    img: "/img/competences/figmaLogo.png",
  },
];
