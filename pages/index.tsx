import React from "react";
import Header from "@/components/Header";
// import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <section
        id="accueil"
        className="h-screen flex items-center justify-center "
      >
        <h1 className="text-4xl font-bold text-gray-900">Accueil</h1>
      </section>
      <section
        id="profil"
        className="h-screen flex items-center justify-center bg-green-50"
      >
        <p>Description de mon profil et photo</p>
      </section>
      <section
        id="competences"
        className="h-screen flex items-center justify-center bg-green-50"
      >
        <h1 className="text-4xl font-bold text-green-500">Mes Compétences</h1>
      </section>
      <section
        id="portfolio"
        className="relative h-screen flex items-center justify-center bg-[url('/photo1-accueil.png')] bg-cover bg-center bg-no-repeat "
      >
        <div className="absolute inset-0 bg-slate-800 bg-opacity-50"></div>
        <h1 className="relative z-10 text-4xl font-bold text-orange-400 bg-slate-800 ">
          Mes Projets
        </h1>
      </section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-red-50"
      >
        <h1 className="text-4xl font-bold text-red-500">Contact</h1>
      </section>
    </div>
  );
}
