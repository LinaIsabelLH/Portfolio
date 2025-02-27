//Scroll fonction for the bottom-button of each section, it allows to go the next section

export const scrollToSection = (sectionId: string): void => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};
