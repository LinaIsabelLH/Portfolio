import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
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
      <Section
        id="portfolio"
        title="Mes Projets"
        backgroundImage="/photo1-accueil.png"
         >
      </Section>
      <section
        id="contact"
        className="h-screen flex items-center justify-center bg-red-50"
      >
        <h1 className="text-4xl font-bold text-red-500">Contact</h1>
      </section>
    </div>
  );
}
