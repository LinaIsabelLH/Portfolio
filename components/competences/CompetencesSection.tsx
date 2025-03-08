import React from "react";
import Image from "next/image";
import {
  frontCompetences,
  backCompetences,
  technoCompetences,
  toolsCompetences,
} from "../data/CompetencesData";
import CompetencesStack from "./CompetencesStack";
import { scrollToSection } from "@/utils/scroll";

const CompetencesSection = () => {
  return (
    <div className="relative z-10 w-full pt-5 mt-10">
      <div className="flex flex-row justify-evenly items-center w-full max-[768px]:w-[85vw] max-[640px]:justify-center">
        <div
          className="m-auto flex flex-col"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="relative flex flex-col mb-10 pt-5 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0">
              FrontEnd
            </h3>
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
          <div className="relative flex flex-col mb-10 pt-5 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0">
              BackEnd
            </h3>
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
          <div className="relative flex flex-col mb-10 pt-5 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0">
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
          <div className="relative flex flex-col mb-10 pt-5 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0">
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
