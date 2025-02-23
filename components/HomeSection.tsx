import React from "react";

const HomeSection = () => {

  const scrollToNextSection = () =>{
    const nextSection = document.getElementById("profil");
    if(nextSection){
      nextSection.scrollIntoView({behavior:"smooth"});
    }
  }
  return (
    <section
      id="accueil"
      className="relative h-screen flex justify-center items-center text-center bg-[url('/img/homePic.png')] bg-cover bg-center bg-no-repeat pt-24"
    >
      {/* Overlay semi-transparent */}
      <div className="absolute inset-0 bg-slate-800/40"></div>
      <div className="z-10 font-body text-zinc-100">
        <h2 className="font-extrabold text-5xl mt-60">
          Bonjour et Bienvenu(e)!
        </h2>
        <h3 className="font-medium text-2xl mt-11">
          Je suis <span className="font-bold text-3xl">Lina Isabel, Développeuse Fullstack</span> en pleine évolution.
        </h3>
        <p className="font-medium text-2xl mt-2"> J&apos;adore coder, apprendre et créer des applications modernes!</p>
        <p className="mt-16 text-2xl font-medium ">Curieux(se)?</p>
        <p className="mt-2 text-2xl font-medium ">Découvre mon profil et mes realisations!</p>
        <p className="mt-2 text-3xl animate-bounce cursor-pointer" onClick={()=>scrollToNextSection()}>👇</p>
      </div>
    </section>
  );
};

export default HomeSection;
