import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/home.module.css";
import { scrollToSection } from "@/utils/scroll";
import Footer from "./Footer";

const ContactSection = () => {
  const email = "londonohidalgo@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        alert("E-mail copié dans le presse-papiers!");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie de l'e-mail: ", err);
      });
  };

  return (
    <div className="z-10 flex flex-col w-full">
      <div className=" z-10 relative flex w-full justify-center items-center mt-20">
        {/* Conteneur du texte avec la bordure animée */}
        <div
          className={`relative max-w-lg p-0.5 ${styles.homeDescriptionContainer}`}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {/* Contenu du texte */}

          <div className="relative bg-slate-800 text-zinc-100 p-6 rounded-4xl">
            <h2 className="text-3xl font-bold text-center mb-8">
              Envie de me contacter?
            </h2>
            <h3 className="font-bold text-2xl">Lina Isabel Londono Hidalgo</h3>
            <p className="pt-2 pb-2 text-xl">
              <span className="font-semibold">Téléphone: </span>
              <a href="tel:+33751623618" className="hover:underline">
                +33 (0)7 51 62 36 18
              </a>
            </p>

            <div className="flex text-xl mb-8">
              <p className="text-xl mr-1">
                <span className="font-semibold">E-mail: </span>{" "}
                <a
                  href="mailto:londonohidalgo@gmail.com"
                  className="hover:underline"
                >
                  {email}
                </a>
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mt-1 cursor-pointer"
                onClick={handleCopyEmail}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
            <p className="text-xl pb-2">
              Je serai ravie d&apos;échanger sur la manière dont je pourrais
              contribuer à la réussite des vos ambitions!
            </p>
          </div>
        </div>
        {/* Photo de profil */}
        <div className="ml-24 flex justify-center items-center relative">
          {/* Ligne animée entre le cadre et la photo */}
          <motion.div
            className="absolute left-[-96px] w-[30px] h-[2px] bg-orange-400"
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
      <div className="z-10 flex mt-20 mr-25 justify-end">
        <button
          className="text-3xl cursor-pointer"
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
      <Footer/>
    </div>
  );
};

export default ContactSection;
