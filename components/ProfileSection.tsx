import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import GithubLogo from "./svg/GithubLogo";
import LinkedinLogo from "./svg/LinkedinLogo";
import styles from "../styles/profile.module.css";
import { scrollToSection } from "@/utils/scroll";

const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });

  const [startLineAnimation, setStartLineAnimation] = useState(false);

  // Déclenche l'animation de la ligne après que la bordure soit animée
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartLineAnimation(true);
      }, 800); // Délai de 800ms après l'animation des bordures
      return () => clearTimeout(timer);
    } else {
      setStartLineAnimation(false); // Réinitialiser si on quitte la vue
    }
  }, [isInView]);

  return (
    <>
      <div
        ref={ref}
        className="z-10 flex justify-center items-center relative max-[970px]:flex-wrap-reverse"
      >
        {/* Conteneur du texte animmé avec motion, et la bordure animée avec css animation */}
        <motion.div
          className={`relative mt-20 max-w-xl my-4 p-0.5 ${
            isInView ? styles.descriptionContainer : ""
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Contenu du texte */}
          <div className="relative bg-slate-800 text-zinc-100 p-6 rounded-4xl">
            <p>
              Je suis une{" "}
              <span className="font-bold text-orange-400">
                Développeuse Fullstack
              </span>{" "}
              passionnée par la{" "}
              <span className="font-bold">
                création d&apos;applications web et mobiles
              </span>{" "}
              innovantes qui apportent une réelle valeur aux entreprises.
              Originaire de Colombie, j’ai choisi la France il y a 10 ans pour y
              étudier, et j’y ai construit ma carrière et ma vie.
            </p>
            <p className="py-3">
              Après un parcours riche dans le commerce et la banque, où j’ai
              développé mon <span className="font-bold">adaptabilité </span>et
              mon <span className="font-bold">sens relationnel</span>, j’ai
              décidé en 2024 de me consacrer pleinement au Développement
              Fullstack, séduite par son potentiel d’innovation et d’
              <span className="font-bold">apprentissage continu</span>.
            </p>
            <p>
              <span className="font-bold">
                Curieuse, rigoureuse et avide de défis
              </span>
              , j’aime transformer les idées en solutions concrètes et
              performantes, en explorant sans cesse de nouvelles technologies.
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/lina-isabel-londono-hidalgo/"
                target="_blank"
                aria-label="Linkedin link"
                rel="noreferrer"
                className="my-4"
              >
                <LinkedinLogo />
              </a>
              <a
                href="https://github.com/LinaIsabelLH"
                target="_blank"
                aria-label="Github link"
                rel="noreferrer"
                className="my-4 ml-10"
              >
                <GithubLogo />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Photo de profil */}
        <div className="ml-24 flex justify-center items-center pt-16 relative">
          {/* Ligne animée entre le cadre et la photo */}
          <motion.div
            className="absolute left-[-96px] top-4/7 w-[30px] h-[2px] bg-orange-400"
            initial={{ width: 0 }}
            animate={{ width: startLineAnimation ? "100px" : 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />

          <div className="w-80 h-100 overflow-hidden rounded-[50%] border-2 border-orange-400 max-[1024px]:max-w-[250px] max-[1024px]:max-h-[300px]">
            <Image
              src="/img/photoProfile.jpg"
              alt="photoProfile"
              title="photoProfile"
              width={400}
              height={400}
              className="rounded-4xl border border-orange-400"
            />
          </div>
        </div>
      </div>

      <div className="z-10 flex w-screen justify-center mt-12">
        <div className="flex w-[55%] justify-end self-center">
          <button
            className="mt-2 text-3xl animate-bounce cursor-pointer"
            onClick={() => scrollToSection("competences")}
          >
            <Image
              src="/img/arrowDown.png"
              alt="arrow to scroll"
              width={24}
              height={24}
            />
          </button>
        </div>
        <div className="flex w-[45%] justify-end self-center">
          <button
            className="text-3xl mt-0 pr-25 cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <Image
              src="/img/returnHome.png"
              alt="arrow to return to home page"
              width={50}
              height={50}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default ProfileSection;
