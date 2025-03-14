import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps {
  id: string;
  title: string;
  backgroundImage: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({
  id,
  title,
  backgroundImage,
  children,
}) => {
  const [bgImage, setBgImage] = useState(backgroundImage);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(""); // Supprime l'image pour les petits écrans
      } else {
        setBgImage(backgroundImage); // Remet l'image sur les grands écrans
      }
    };

    handleResize(); // Exécuter au chargement
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [backgroundImage]);

  return (
    <section
      id={id}
      className={`relative w-screen min-h-screen flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat pt-24 max-[1100px]:pt-10  max-[425px]:object-contain ${
        bgImage ? "" : "bg-stone-900"
      }`}
      style={{
        backgroundImage: bgImage ? `url('${backgroundImage}')` : "none",
      }}
    >
      {/* Overlay semi-transparent */}
      <div className="absolute w-full h-full inset-0 bg-slate-800/40"></div>
      {/* Titre de la section */}
      <SectionTitle title={title} />
      {/* Contenu de la section */}
      {children}
    </section>
  );
};

export default Section;
