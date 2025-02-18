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
        className="relative h-screen flex justify-center items-center text-center bg-[url('/img/accueil.png')] bg-cover bg-center bg-no-repeat pt-24"
      >
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-slate-800 bg-opacity-40"></div>
        <div className="z-10 font-serif">
          <h2 className="font-extrabold text-4xl mt-16">Bonjour et Bienvenu(e)!</h2>
          <p className="font-medium text-2xl mt-11">
            Je suis{" "}
            <span className="font-bold">Lina Isabel Londono Hidalgo</span>
          </p>
          <p className="font-medium text-2xl ">Développeuse Fullstack</p>
        </div>
      </section>
      <Section
        id="profil"
        title="Qui suis-je?"
        backgroundImage="/img/description.png"
      >
        <div className="mt-8">
          <p>Description1</p>
          <p>Description2</p>
          <p>Description3</p>
        </div>
        <div>
          <button className="font-bold">En savoir plus sur moi...</button>
        </div>
      </Section>
      <Section
        id="competences"
        title="Mes Compétences"
        backgroundImage="/img/photoCompet.png"
      ></Section>
      <Section
        id="portfolio"
        title="Mes Projets"
        backgroundImage="/img/photo-projets.png"
      ></Section>
      <Section id="contact" title="Contact" backgroundImage="/img/contact.png">
        <div>
          <h2>Lina Isabel Londono Hidalgo</h2>
          <p>
            <span>Téléphone: </span> +33 (0)7 51 62 36 18
          </p>
          <p>
            <span>E-mail: </span> XXX@gmail.com
          </p>
        </div>
      </Section>
    </div>
  );
}
