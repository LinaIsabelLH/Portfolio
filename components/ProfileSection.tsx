import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubLogo from "./svg/GithubLogo";
import LinkedinLogo from "./svg/LinkedinLogo";
import styles from "../styles/home.module.css";
import { scrollToSection } from "@/utils/scroll";

const ProfileSection = () => {
  
  return (
    <>
      <div className="z-10 flex justify-center items-center relative">
        {/* Conteneur du texte avec la bordure animée */}
        <div
          className={`relative mt-20 max-w-xl my-4 p-0.5 ${styles.homeDescriptionContainer}`}
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
        </div>

        {/* Photo de profil */}
        <div className="ml-24 flex justify-center items-center pt-16 relative">
          {/* Ligne animée entre le cadre et la photo */}
          <motion.div
            className="absolute left-[-96px] top-4/7 w-[30px] h-[2px] bg-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 4, ease: "easeInOut", delay: 3 }}
          />

          <div className="w-80 h-100 overflow-hidden rounded-[50%] border-2 border-orange-400">
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

      <div className="z-10 flex w-full justify-between pl-179 mt-12">
        <button
          className="mt-2 text-3xl animate-bounce cursor-pointer"
          onClick={() => scrollToSection("competences")}
        >
          <Image src="/img/arrowDown.png" alt="arrow to scroll" width={24} height={24}/>
        </button>
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
    </>
  );
};

export default ProfileSection;
