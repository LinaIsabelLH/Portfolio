import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import HomeSection from "@/components/HomeSection";
import ProfileSection from "@/components/ProfileSection";
import ContactSection from "@/components/ContactSection";
import CompetencesSection from "@/components/competences/CompetencesSection"


export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HomeSection />
      <Section
        id="profil"
        title="Qui suis-je?"
        backgroundImage="/img/description.jpg"
      >
        <ProfileSection />
      </Section>
      <Section
        id="competences"
        title="Mes Compétences"
        backgroundImage="/img/photoCompet.png"
      >
        <CompetencesSection/>
      </Section>
      <Section
        id="portfolio"
        title="Mes Projets"
        backgroundImage="/img/photo-projets.png"
      ></Section>
      <Section id="contact" title="Contact" backgroundImage="/img/contactPic-c.jpg">
        <ContactSection/>
      </Section>
    </div>
  );
}
