export const locales = {
  fr: {
    header: {
      home: "Accueil",
      profil: "Profil",
      skills: "Compétences",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    home: {
      greet: "Bonjour et Bienvenu(e)!",
      intro: "Je suis",
      intro1: "Lina Isabel, Développeuse Fullstack",
      intro2: "en pleine évolution.",
      intro3: "J'adore coder, apprendre et créer des applications modernes!",
      intro4: "Curieux(se)?",
      intro5: "Découvre mon profil et mes realisations!",
    },
    hero: {
      title: "",
      description: "Je suis une",
      poste: "Développeuse Fullstack",
      description1: "passionnée par la",
      description2: "création d'applications web et mobiles",
      description3:
        "innovantes qui apportent une réelle valeur aux entreprises. Originaire de Colombie, j’ai choisi la France il y a 12 ans pour y étudier, et j’y ai construit ma carrière et ma vie.",
      description4:
        "Après un parcours riche dans le commerce et la banque, où j’ai développé mon",
      description5: "adaptabilité",
      description6: "et mon",
      description7: "sens relationnel",
      description8:
        ", j’ai décidé en 2024 de me consacrer pleinement au Développement Fullstack, séduite par son potentiel d’innovation et d’",
      description9: "apprentissage continu",
      description10: "Curieuse, rigoureuse et avide de défis",
      description11:
        ", j’aime transformer les idées en solutions concrètes et performantes, en explorant sans cesse de nouvelles technologies.",
    },
    contact: {
      title: "",
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
      profil: "Profile",
      skills: "Skills",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    home: {
      greet: "Hello and Welcome!",
      intro: "I’m",
      intro1: "Lina Isabel, a Full-Stack Developer",
      intro2: "constantly evolving.",
      intro3: "I love coding, learning, and building modern applications!",
      intro4: "Curious?",
      intro5: "Explore my profile and my projects!",
    },
    hero: {
      title: "",
      description: "I’m a",
      poste: "Full-Stack Developer",
      description1: "passionate about",
      description2: "creating modern web and mobile applications",
      description3:
        "that bring real value to businesses. Originally from Colombia, I moved to France 12 years ago to study, and it’s where I’ve built both my career and my life.",
      description4:
        "After a rich journey in retail and banking, where I developed strong",
      description5: "adaptability",
      description6: "and",
      description7: "people skills",
      description8:
        ", I decided in 2024 to fully commit to Full-Stack Development, driven by its innovative potential and its culture of",
      description9: "continuous learning.",
      description10: "Curious, meticulous, and always up for a challenge",
      description11:
        ", I love turning ideas into concrete and performing solutions while constantly exploring new technologies.",
    },

    contact: {
      title: "",
      subtitle: "Want to get in touch?",
      me: "Lina Isabel Londono Hidalgo",
      phone: "Phone:",
      message:
        "I’d be happy to discuss how I can contribute to the success of your projects!",
    },
  },
};

export type LocaleKey = keyof typeof locales;
export type LocaleContent = typeof locales.fr;
