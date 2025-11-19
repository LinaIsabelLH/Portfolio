import React from "react";
import { scrollToSection } from "@/utils/scroll";
import { useLocale } from "@/i18n/useLocale";

const HomeSection = () => {
  const {t} = useLocale();
  
  return (
    <section
      id="home"
      className="relative h-screen w-screen flex justify-center items-center text-center bg-[url('/img/homePic.png')] bg-cover bg-center bg-no-repeat pt-24"
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-slate-800/40"></div>
      <div
        className="m-auto flex flex-col"
        data-aos="zoom-in"
        data-aos-offset="100"
        data-aos-anchor-placement="top-bottom"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      >
        <div className="z-10 font-body text-zinc-100 max-[768px]:mx-4">
          <h2 className="font-extrabold text-5xl mt-60 max-[768px]:text-2xl">
          {t.home.greet}
          </h2>
          <h3 className="font-medium text-2xl mt-11 max-[768px]:text-lg ">
          {t.home.intro}
            <span className="font-bold text-3xl max-[768px]:text-xl">
            {t.home.intro1}
            </span> {t.home.intro2}
          </h3>
          <p className="font-medium text-2xl mt-2 max-[768px]:text-lg">
          {t.home.intro3}
          </p>
          <p className="mt-16 text-2xl font-medium max-[768px]:text-lg max-[376px]:mt-4">{t.home.intro4}</p>
          <p className="mt-2 text-2xl font-medium max-[768px]:text-lg">
          {t.home.intro5}
          </p>
          <p
            className="mt-2 text-3xl animate-bounce cursor-pointer"
            onClick={() => scrollToSection("profil")}
          >
            👇
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
