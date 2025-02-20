import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import HomeSection from "@/components/HomeSection";
import ProfileSection from "@/components/ProfileSection";
// import Section from "@/components/Section";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HomeSection/>
      <Section
        id="profil"
        title="Qui suis-je?"
        backgroundImage="/img/description.jpg"
      >
        <ProfileSection/>
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
