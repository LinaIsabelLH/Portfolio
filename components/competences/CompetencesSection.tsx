import React from "react";
import {
  frontCompetences,
  backCompetences,
  technoCompetences,
  toolsCompetences,
} from "../data/CompetencesData";
import CompetencesStack from "./CompetencesStack";
import ScrollButtons from "../ScrollButtons";
import { useLocale } from "@/i18n/useLocale";

const CompetencesSection = () => {
  const {t} = useLocale();
  return (
    <div className="relative z-10 w-full mt-6 max-[800px]:mt-4 ">
      <div className="flex flex-row justify-evenly items-center w-full max-[768px]:justify-center">
        <div
          className="m-auto flex flex-col max-[800px]:m-0"
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="relative flex flex-col mb-10 pt-4 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl max-[2560px]:mx-8 max-[709px]:mx-2 max-[709px]:mb-6 max-[540px]:pt-[5px] max-[425px]:rounded-2xl max-[426px]:mr-0">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0 max-[800px]:text-xl max-[540px]:text-base max-[540px]:px-[4px]">
              FrontEnd
            </h3>
            <CompetencesStack competences={frontCompetences} />
          </div>
        </div>

        <div
          className="m-auto flex flex-col max-[800px]:m-0"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="relative flex flex-col mb-10 pt-4 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl max-[2560px]:mx-6 max-[709px]:mb-6  max-[540px]:pt-[5px] max-[425px]:rounded-2xl max-[426px]:mr-1 max-[426px]:ml-3">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0 max-[800px]:text-xl max-[540px]:text-base">
              BackEnd
            </h3>
            <CompetencesStack competences={backCompetences} />
          </div>
        </div>
        <div
          className="m-auto flex flex-col max-[800px]:m-0"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="relative flex flex-col mb-10 pt-4 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl max-[2560px]:ml-6 max-[2560px]:mr-8 max-[709px]:mx-2 max-[709px]:mb-6 max-[540px]:pt-[5px] max-[425px]:rounded-2xl">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0 max-[800px]:text-xl max-[540px]:text-base ">
            {t.skills.subtitle}
            </h3>
            <CompetencesStack competences={toolsCompetences} />
          </div>
        </div>
      </div>
      <div className="flex flex-col max-h-56 max-[430px]:max-w-[95%] max-[430px]:mx-auto">
        <div
          className="m-auto flex flex-col"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
        >
          <div className="relative flex flex-col pt-4 bg-gray-800 shadow-orange-300/50 shadow-lg border border-orange-400 rounded-4xl max-[2560px]:mx-8 max-[709px]:mx-2 max-[800px]:mb-4 max-[540px]:pt-[5px] max-[540px]:mb-[4px] max-[540px]:mx-[6px] max-[425px]:pb-0 max-[425px]:rounded-2xl">
            <h3 className="text-orange-400 font-bold text-2xl text-center px-[10px] py-0 max-[800px]:text-xl max-[540px]:text-base max-[540px]:pt-[4px]">
              {t.skills.subtitle2}
            </h3>
            <CompetencesStack competences={technoCompetences} />
          </div>
        </div>
      </div>
      <div className="z-10 flex w-screen justify-center max-[800px]:mt-0">
        <ScrollButtons idSection="portfolio" />
      </div>
    </div>
  );
};

export default CompetencesSection;
