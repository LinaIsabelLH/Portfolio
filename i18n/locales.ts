export const locales = {
  fr: {
    header: {
      home: "Accueil",
      profil: "À propos",
      skills: "Compétences",
      portfolio: "Portfolio",
      contact: "Contact",
      cv: "/img/CV Lina Isabel Londono -Développeur FullStack.pdf",
    },
    home: {
      greet: "Bonjour et Bienvenu(e)!",
      intro: "Je suis ",
      intro1: "Lina Isabel, Développeuse Fullstack",
      intro2: "en pleine évolution.",
      intro3: "J'adore coder, apprendre et créer des applications modernes!",
      intro4: "Curieux(se)?",
      intro5: "Découvre mon profil et mes realisations!",
    },
    hero: {
      title: "À propos de moi",
      description: "Je suis une ",
      poste: "Développeuse Fullstack",
      description1: "passionnée par la ",
      description2: "création d'applications web et mobiles",
      description3:
        "innovantes qui apportent une réelle valeur aux entreprises. Originaire de Colombie, j’ai choisi la France il y a 12 ans pour y étudier, et j’y ai construit ma carrière et ma vie.",
      description4:
        "Après un parcours riche dans le commerce et la banque, où j’ai développé mon",
      description5: "adaptabilité ",
      description6: "et mon",
      description7: "sens relationnel",
      description8:
        ", j’ai décidé en 2024 de me consacrer pleinement au Développement Fullstack, séduite par son potentiel d’innovation et d’",
      description9: "apprentissage continu",
      description10: "Curieuse, rigoureuse et avide de défis",
      description11:
        ", j’aime transformer les idées en solutions concrètes et performantes, en explorant sans cesse de nouvelles technologies.",
    },
    skills: {
      title: "Mes Compétences",
      subtitle: "Les outils que j'utilise",
      subtitle2: "Les technos que j'ai travaillé",
    },
    project: {
      titleSection: "Mes projets",
      stackList: "Tech Stack",
    },
    projects: {
      wefood: {
        title: "WeFood App",
        desc1:
          "WeFood App est une application mobile innovante développée en React Native et Node.js, permettant aux utilisateurs de découvrir des restaurants selon leurs goûts. Elle combine MongoDB pour la gestion des données, géolocalisation, filtres dynamiques et intégration d’APIs externes (Google Maps). Parmi ses fonctionnalités clés : un système de suivi (follow) entre utilisateurs et un badge “Recommandé par les locaux”, attribué aux restaurants ayant reçu plusieurs avis positifs de clients de la même nationalité, garantissant ainsi des recommandations fiables et pertinentes.",
        github: "Non disponible",
      },
      portfolio: {
        title: "Mon Portfolio",
        desc1:
          "Portfolio moderne et performant, conçu pour valoriser mes projets et compétences en développement web. Développé avec Next.js (SSR/SSG) pour des performances optimales et un bon référencement, il intègre TypeScript pour un code fiable et maintenable. L'expérience utilisateur est enrichie par des animations fluides avec AOS et Framer Motion, tandis que Tailwind CSS assure un design épuré et responsive.",
        github: "https://github.com/LinaIsabelLH/Portfolio.git",
      },
    },
    buttons: {
      details: "Détails",
      githubPrivate: "Github privé",
      viewGithub: "Voir le Github",
      viewVideo: "Vidéo Démo",
      typeProject: "Projet Local", // or "Visit site" if deployed
      back: "Retourner aux projets",
    },
    contact: {
      title: "Contact",
      subtitle: "Envie de me contacter?",
      me: "Lina Isabel Londono Hidalgo",
      phone: "Téléphone:",
      message:
        "Je serai ravie d'échanger sur la manière dont je pourrais contribuer à la réussite des vos ambitions!",
    },
  },

  en: {
    header: {
      home: "Home",
      profil: "About",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
      cv: "/img/CV Lina Isabel Londono -FullStack Developer ENG.pdf",
    },
    home: {
      greet: "Hello and Welcome!",
      intro: "I am ",
      intro1: "Lina Isabel a Full-Stack Developer",
      intro2: "constantly evolving.",
      intro3: "I love coding, learning, and building modern applications!",
      intro4: "Curious?",
      intro5: "Explore my profile and my projects!",
    },
    hero: {
      title: "About me",
      description: "I’m a ",
      poste: "Full-Stack Developer",
      description1: "passionate about ",
      description2: "creating modern web and mobile applications",
      description3:
        "that bring real value to businesses. Originally from Colombia, I moved to France 12 years ago to study, and it’s where I’ve built both my career and my life.",
      description4:
        "After a rich journey in retail and banking, where I developed strong",
      description5: "adaptability ",
      description6: "and",
      description7: "people skills",
      description8:
        ", I decided in 2024 to fully commit to Full-Stack Development, driven by its innovative potential and its culture of ",
      description9: "continuous learning.",
      description10: "Curious, meticulous, and always up for a challenge",
      description11:
        ", I love turning ideas into concrete and performing solutions while constantly exploring new technologies.",
    },
    skills: {
      title: "Skills",
      subtitle: "My developer toolkit",
      subtitle2: "Tech I have worked with",
    },
    project: {
      titleSection: "My projects",
    },
    projects: {
      wefood: {
        title: "WeFood App",
        desc1:
          "WeFood is a React Native and Node.js mobile app that connects users to restaurants tailored to their tastes. It features MongoDB-powered data management, geolocation, dynamic filters, external API integration (Google Maps), a social follow system, and a “Recommended by Locals” badge to highlight reviews from users of the same nationality.",
        github: "Not available",
      },
      portfolio: {
        title: "My Portfolio",
        desc1:
          "A sleek, high-performance portfolio designed to showcase my web development projects and expertise. Built with Next.js (SSR/SSG) for speed and SEO, and TypeScript for robust, maintainable code. Enhanced with smooth animations via AOS and Framer Motion, and styled with Tailwind CSS for a modern, responsive design.",
        github: "https://github.com/LinaIsabelLH/Portfolio.git",
      },
    },
    buttons: {
      details: "Details",
      githubPrivate: "Private Github",
      viewGithub: "View Github",
      viewVideo: "Demo video",
      typeProject: "Local Project",
      stackList: "Tech Stack",
      back: "Back to the projects",
    },

    contact: {
      title: "Contact",
      subtitle: "Want to get in touch?",
      me: "Lina Isabel Londono Hidalgo",
      phone: "Phone number",
      message:
        "I would be happy to discuss how I can contribute to the success of your projects!",
    },
  },
};

export type LocaleKey = keyof typeof locales;
//export type LocaleContent = typeof locales.fr;
export type LocaleContent = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any; // ⭐ autorise t["projects.wefood.desc1"]
};
