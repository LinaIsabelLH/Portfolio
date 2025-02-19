import React from "react";

const AccueilSection = () => {
    return (
        <section
        id="accueil"
        className="relative h-screen flex justify-center items-center text-center bg-[url('/img/accueil.png')] bg-cover bg-center bg-no-repeat pt-24"
      >
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-slate-800/40"></div>
        <div className="z-10 font-body text-zinc-100">
          <h2 className="font-extrabold text-5xl mt-16">Bonjour et Bienvenu(e)!</h2>
          <p className="font-medium text-3xl mt-11">
            Je suis{" "}
            <span className="font-bold">Lina Isabel Londono Hidalgo</span>
          </p>
          <p className="font-medium text-2xl ">Développeuse Fullstack</p>
        </div>
      </section>
    )
}

export default AccueilSection;