import React from "react";
import Image from "next/image";
import {
  frontCompetences,
  backCompetences,
  technoCompetences,
  toolsCompetences,
} from "../data/CompetencesData";
import CompetencesStack from "./CompetencesStack";
import styles from "../../styles/competences.module.css";
import { scrollToSection } from "@/utils/scroll";

const CompetencesSection = () => {
  return (
    <div className="relative z-10 w-full pt-5 mt-10">
      <div className="flex flex-row justify-evenly items-center w-full">
        <div
          className="m-auto flex flex-col"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>FrontEnd</h3>
            <CompetencesStack competences={frontCompetences} />
          </div>
        </div>

        <div
          className="m-auto flex flex-col"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>BackEnd</h3>
            <CompetencesStack competences={backCompetences} />
          </div>
        </div>
        <div
          className="m-auto flex flex-col"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les outils que j&apos;utilise
            </h3>
            <CompetencesStack competences={toolsCompetences} />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-h-56">
        <div
          className="m-auto flex flex-col"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les technos que j&apos;ai travaillé
            </h3>
            <CompetencesStack competences={technoCompetences} />
          </div>
        </div>
      </div>
      <div className="z-10 flex mt-5 pl-179 justify-between">
        <button
          className="text-3xl pt-4 animate-bounce cursor-pointer"
          onClick={() => scrollToSection("portfolio")}
        >
          <Image
            src="/img/arrowDown.png"
            alt="arrow to scroll"
            width={24}
            height={24}
          />
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
    </div>
  );
};

export default CompetencesSection;
