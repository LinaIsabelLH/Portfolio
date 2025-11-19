import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import GithubLogo from "./svg/GithubLogo";
import LinkedinLogo from "./svg/LinkedinLogo";
import styles from "../styles/profile.module.css";
import { useMediaQuery } from "react-responsive";
import ScrollButtons from "./ScrollButtons";
import { useLocale } from "@/i18n/useLocale";

const ProfileSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  const isMobile = useMediaQuery({ query: "(max-width: 970px)" });

  const [startLineAnimation, setStartLineAnimation] = useState(false);
  const {t} = useLocale();

  // Déclenche l'animation de la ligne après que la bordure soit animée
  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        setStartLineAnimation(true);
      }, 700); // Délai de 800ms après l'animation des bordures
      return () => clearTimeout(timer);
    }
  }, [isInView]);

  return (
    <>
        <div
          ref={ref}
          className="z-10 flex justify-center items-center relative h-[75%] min-w-full max-[970px]:flex-wrap-reverse max-[1024px]:mx-4 min-[970px]:mt-12 max-[800px]:mx-0"
        >
          {/* Conteneur du texte animmé avec motion, et la bordure animée avec css animation */}
          <motion.div
            className={`relative max-w-xl p-0.5 max-[800px]:mb-2 max-[800px]:mx-4 max-[460px]:mx-2 ${
              isInView ? styles.descriptionContainer : ""
            }`}
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Contenu du texte */}
            <div className="relative bg-slate-800 text-zinc-100 p-6 rounded-4xl max-[800px]:pb-4 max-[490px]:pb-2 max-[490px]:pt-4 max-[460px]:px-2 max-[400px]:text-sm">
              <p>
                {t.hero.description}
                <span className="font-bold text-orange-400">
                {t.hero.poste}
                </span>{" "}
                {t.hero.description1}
                <span className="font-bold">
                {t.hero.description2}
                </span>{" "}
                {t.hero.description3}
              </p>
              <p className="py-3">
              {t.hero.description4} <span className="font-bold">{t.hero.description5}</span>{t.hero.description6} <span className="font-bold">{t.hero.description7}</span>{t.hero.description8}
                <span className="font-bold">{t.hero.description9}</span>
              </p>
              <p>
                <span className="font-bold">
                {t.hero.description10}
                </span>
                {t.hero.description11}
              </p>
              <div className="flex justify-center ">
                <a
                  href="https://www.linkedin.com/in/lina-isabel-londono-hidalgo/"
                  target="_blank"
                  aria-label="Linkedin link"
                  rel="noreferrer"
                  className="my-4 max-[800px]:my-2"
                >
                  <LinkedinLogo />
                </a>
                <a
                  href="https://github.com/LinaIsabelLH"
                  target="_blank"
                  aria-label="Github link"
                  rel="noreferrer"
                  className="my-4 ml-10 max-[800px]:my-2"
                >
                  <GithubLogo />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Photo de profil */}
          <div className="ml-24 flex justify-center items-center pt-auto relative max-[970px]:py-8 max-[970px]:mr-24 max-[800px]:pt-4">
            {/* Ligne animée entre le cadre et la photo */}
            <motion.div
              className="absolute left-[-96px] top-[50%] bg-orange-400 max-[970px]:top-[90%] max-[970px]:left-[100px] max-[800px]:top-[89.2%] max-[400px]:top-[84%] max-[400px]:left-[60px] "
              initial={{ width: 0, height: 0 }}
              animate={{
                width: startLineAnimation && !isMobile ? "100px" : "2px",
                height: startLineAnimation && isMobile ? "32px" : "2px",
              }}
              transition={{ duration: 2.7, ease: "easeInOut" }}
            />

            <div className="w-80 h-100 overflow-hidden rounded-[50%] border-2 border-orange-400 relative max-[1024px]:w-[200px] max-[1024px]:h-[250px] lg:m-auto max-[400px]:w-[125px] max-[400px]:h-[150px]">
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
        <div className="z-10 flex w-screen justify-center lg:mt-10 max-[1024]-mt-0">
          <ScrollButtons idSection="competences"/>
        </div>

    </>
  );
};

export default ProfileSection;
