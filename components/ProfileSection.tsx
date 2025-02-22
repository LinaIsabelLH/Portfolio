import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import GithubLogo from "./svg/GithubLogo";
import LinkedinLogo from "./svg/LinkedinLogo";

const ProfileSection = () => {
  return (
    <>
      <div className="z-10 flex justify-center items-center relative">
        {/* Conteneur du texte avec la bordure animée */}
        <div className="relative mt-20 max-w-xl my-4  bg-slate-800 text-zinc-100 p-6 rounded-4xl overflow-clip">
          {/* Bordures animées */}
          {/* Gauche (début de l'animation) */}
          <motion.div
            className="absolute top-0 left-0 w-[2px] h-0 bg-orange-400"
            style={{ borderRadius: "4rem" }} // Coins arrondis
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          {/* Haut */}
          <motion.div
            className="absolute top-0 left-0 w-0 h-[2px] bg-orange-400"
            style={{ borderRadius: "4rem" }} // Coins arrondis
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
          />
          {/* Bas */}
          <motion.div
            className="absolute bottom-0 left-0 w-0 h-[2px] bg-orange-400"
            style={{ clipPath: "inset(0 round 5rem)" }} // Coins arrondis
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, ease: "easeInOut", delay: 2 }}
          />
          {/* Droite */}
          {/* Partie haute */}
          <motion.div
            className="absolute top-0 right-0 w-[2px] h-0 bg-orange-400"
            style={{ clipPath: "inset(0 round 5rem)" }}
            initial={{ height: 0 }}
            animate={{ height: "50%" }} // Grandit vers le bas
            transition={{ duration: 3, ease: "easeInOut", delay: 4 }}
          />

          {/* Partie basse */}
          <motion.div
            className="absolute bottom-0 right-0 w-[2px] h-0 bg-orange-400"
            style={{ clipPath: "inset(0 round 5rem)" }}
            initial={{ height: 0 }}
            animate={{ height: "50%" }} // Grandit vers le haut
            transition={{ duration: 3, ease: "easeInOut", delay: 4 }}
          />
          {/* Droite (fin de l'animation, vers la photo) */}
          <motion.div
            className="absolute top-1/2 right-0 w-[2px] h-0 bg-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "easeInOut", delay: 5 }}
          />

          {/* Contenu du texte */}
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
            développé mon <span className="font-bold">adaptabilité </span>et mon{" "}
            <span className="font-bold">sens relationnel</span>, j’ai décidé en
            2024 de me consacrer pleinement au Développement Fullstack, séduite
            par son potentiel d’innovation et d’
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

        {/* Photo de profil */}
        <div className="ml-24 flex justify-center items-center pt-16 relative">
          {/* Ligne animée entre le cadre et la photo */}
          <motion.div
            className="absolute left-[-96px] top-4/7 w-[30px] h-[2px] bg-orange-400"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 1, ease: "easeInOut", delay: 7 }}
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

      <div className="z-10">
        <button className="font-bold text-zinc-100 ">En savoir plus👇</button>
      </div>
    </>
  );
};

export default ProfileSection;
