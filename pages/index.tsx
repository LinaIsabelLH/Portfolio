import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import HomeSection from "@/components/HomeSection";
import ProfileSection from "@/components/ProfileSection";
import ContactSection from "@/components/ContactSection";
import CompetencesSection from "@/components/competences/CompetencesSection";
import MyProjects from "@/components/Portfolio/MyProjects";
import Footer from "@/components/Footer";
import { useLocale } from "@/i18n/useLocale";

export default function Home() {
  const { t } = useLocale();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <HomeSection />
      <Section
        id="profil"
        title={t.hero.title}
        backgroundImage="/img/description.jpg"
      >
        <ProfileSection />
      </Section>
      <Section
        id="competences"
        title={t.skills.title}
        backgroundImage="/img/photoCompet.png"
      >
        <CompetencesSection />
      </Section>
      <Section
        id="portfolio"
        title={t.project.titleSection}
        backgroundImage="/img/photo-projets.png"
      >
        <MyProjects />
      </Section>
      <Section
        id="contact"
        title={t.contact.title}
        backgroundImage="/img/contactPic-c.jpg"
      >
        <ContactSection />
        <Footer />
      </Section>
    </div>
  );
}
