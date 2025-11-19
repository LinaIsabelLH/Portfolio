import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "../styles/profile.module.css";
import { scrollToSection } from "@/utils/scroll";
import { useLocale } from "@/i18n/useLocale";

const ContactSection = () => {
  const email = "londonohidalgo@gmail.com";
  const {t} = useLocale();

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
      <div className=" z-10 relative flex w-full justify-center items-center mt-20 max-[970px]:flex-wrap-reverse max-[970px]:mt-14 max-[768px]:mt-4 max-[545px]:max-w-[90%] max-[545px]:mx-auto">
        {/* Conteneur du texte avec la bordure animée */}
        <div
          className={`relative max-w-lg p-0.5 ${styles.descriptionContainer}`}
          data-aos="fade-right"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          {/* Contenu du texte */}

          <div className="relative bg-slate-800 text-zinc-100 p-6 rounded-4xl max-[970px]:text-center max-[800px]:pb-4 max-[490px]:pb-2 max-[490px]:pt-4 max-[460px]:px-2">
            <h2 className="text-3xl font-bold text-center mb-8 max-[500px]:text-2xl max-[400px]:text-xl">
            {t.contact.subtitle}
            </h2>
            <h3 className="font-bold text-2xl max-[500px]:text-xl max-[400px]:text-lg">Lina Isabel Londono Hidalgo</h3>
            <p className="pt-2 pb-2 text-xl max-[500px]:text-lg max-[400px]:text-base max-[340px]:text-sm">
              <span className="font-semibold">{t.contact.phone}: </span>
              <a href="tel:+33751623618" className="hover:underline">
                +33 (0)7 51 62 36 18
              </a>
            </p>

            <div className="flex text-xl mb-8 max-[970px]:justify-center max-[500px]:text-lg max-[400px]:text-base max-[340px]:text-sm">
              <p className="text-xl mr-1 max-[500px]:text-lg max-[400px]:text-base max-[340px]:text-sm">
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
            <p className="text-xl pb-2 max-[500px]:text-lg max-[400px]:text-base max-[340px]:text-sm">
            {t.contact.message}
            </p>
          </div>
        </div>
        {/* Photo de profil */}
        <div className="ml-24 flex justify-center items-center pt-auto relative max-[970px]:py-8 max-[970px]:mr-24 max-[800px]:pt-4">
          {/* Ligne animée entre le cadre et la photo */}
          <motion.div
            className="absolute left-[-96px] top-[50%] bg-orange-400 max-[970px]:top-[90%] max-[970px]:left-[100px] max-[800px]:top-[89.2%] max-[400px]:top-[84%] max-[400px]:left-[60px]"
            initial={{ width: 0 }}
            animate={{ width: "100px" }}
            transition={{ duration: 4, ease: "easeInOut", delay: 3 }}
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
      <div className="z-10 flex w-screen mt-20 justify-end max-[550px]:justify-center">
        <div className="flex w-[50%] justify-end self-center max-[550px]:justify-center">
          <button
            className="text-3xl mt-0 pr-25 cursor-pointer max-[550px]:pr-0"
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
    </div>
  );
};

export default ContactSection;
