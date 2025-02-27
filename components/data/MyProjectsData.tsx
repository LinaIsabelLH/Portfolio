import { type ProjectType } from "../../types/types";

const MyProjectsList: ProjectType[] = [
  {
    title: "WeFood App",
    img: "/img/projects/WeFoodApp.png",
    imgTag: "WeFoodApp",
    descriptions: [
      "Clone Front de Netflix version Web, en React. Utilisation de l'API de TMDB pour les données. Axios pour les requêtes. Il est possible de créer une liste partagée dans toute l'application grâce à Redux. Jest + Enzyme ont été implantés pour tester quelques composants.",
    ],
    link: null,
    github: "https://github.com/",
    gif: "https://github.com/Joliwood/Netflix-clone/raw/374c55b499f9ded606d10550f6e22f2c7f5bcaea/netflix-clone.gif?raw=true",
    stacks: ["react", "next", "api", "node"],
  },
  {
    title: "Mon Portfolio",
    img: "/img/projects/MyPortfolioProject.png",
    imgTag: "MyPortfolio",
    descriptions: [
      "Soundy est une application de type SAAS pour les passionnés de musique ! On peut écouter et partager ses propres créations musicales",
      "L'application comprend deux repos Github, Lyric-library pour le back-end et Soundy pour le front-end. Tout a été mis en place pour avoir une scalabilité optimale.",
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
    stacks: ["react", "typescript", "tailwindcss", "next", "node", "eslint"],
  },
];

export default MyProjectsList;
