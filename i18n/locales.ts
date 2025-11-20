export const locales = {
  fr: {
    header: {
      home: "Accueil",
      profil: "À propos",
      skills: "Compétences",
      portfolio: "Portfolio",
      contact: "Contact",
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

    },
    project: {
      titleSection: "Mes projets",
    },
    projects: {
      wefood: {
        title: "WeFood App",
        desc1:
          "WeFood est une application mobile en React Native et Node.js...",
        github: "Non disponible",
      },
      portfolio: {
        title: "Mon Portfolio",
        desc1:
          "Portfolio moderne et performant conçu pour valoriser mes projets...",
        github: "https://github.com/LinaIsabelLH/Portfolio.git",
      },
    },
    buttons: {
      details: "Détails",
      githubPrivate: "Github privé",
      viewGithub: "Voir le Github",
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

    },
    project: {
      titleSection: "My projects",
    },
    projects: {
      wefood: {
        title: "WeFood App",
        desc1:
          "WeFood is a mobile app built with React Native and Node.js...",
        github: "Not available",
      },
      portfolio: {
        title: "My Portfolio",
        desc1:
          "Modern, high-performance portfolio designed to highlight my work...",
        github: "https://github.com/LinaIsabelLH/Portfolio.git",
      },
    },
    buttons: {
      details: "Details",
      githubPrivate: "Private Github",
      viewGithub: "View Github",
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
