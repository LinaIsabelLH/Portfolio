import { type ProjectType } from "../../types/types";

const MyProjectsList: ProjectType[] = [
  {
    title: "WeFood App",
    img: "/img/projects/WeFoodApp.png",
    imgTag: "WeFoodApp",
    descriptions: [
      "WeFood est une application mobile en React Native et Node.js, connectant les utilisateurs à des restaurants selon leurs préférences. L'application intègre MongoDB pour la gestion des données, la géolocalisation, des filtres dynamiques, l'intégration d'APIs externes (Google Maps), ainsi qu’un système de suivi (follow) et une certification “Recommandé par les locaux” pour valoriser les avis d’utilisateurs de la même nationalité.",
    ],
    link: null,
    githubs: [
      {
        title: "Github Front",
        link: "https://github.com/",
      },
      {
        title: "Github Back",
        link: "https://github.com/",
      },
    ],
    stacks: ["react", "next", "api", "node"],
  },
  {
    title: "Mon Portfolio",
    img: "/img/projects/MyPortfolioProject.png",
    imgTag: "MyPortfolio",
    descriptions: [
      "Portfolio moderne et performant, conçu pour valoriser mes projets et compétences en développement web. Développé avec Next.js (SSR/SSG) pour des performances optimales et un bon référencement, il intègre TypeScript pour un code fiable et maintenable. L'expérience utilisateur est enrichie par des animations fluides avec AOS et Framer Motion, tandis que Tailwind CSS assure un design épuré et responsive",
    ],
    link: null,
    github: "https://github.com/LinaIsabelLH/Portfolio.git",
    gif: "https://github.com",
    stacks: ["react", "typescript", "tailwindcss", "next", "node", "eslint"],
  },
];

export default MyProjectsList;
