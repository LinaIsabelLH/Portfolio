import React from "react";
import Header from "@/components/Header";
import Section from "@/components/Section";
import HomeSection from "@/components/HomeSection";
import ProfileSection from "@/components/ProfileSection";
import Image from "next/image";
// import Section from "@/components/Section";

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
      ></Section>
      <Section
        id="portfolio"
        title="Mes Projets"
        backgroundImage="/img/photo-projets.png"
      ></Section>
      <Section id="contact" title="Contact" backgroundImage="/img/contact.png">
        <div className="flex w-full justify-center items-center mt-20 bg-amber-950">
          <div className=" w-md text-2xl mr-14 bg-amber-200">
            <h2 className="font-bold text-3xl">Lina Isabel Londono Hidalgo</h2>
            <div className="flex">
              <p className="mr-1">
                <span className="font-semibold">Téléphone: </span> +33 (0)7 51
                62 36 18
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 mt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75"
                />
              </svg>
            </div>
            <p>
              <span className="font-semibold">E-mail: </span> XXX@gmail.com
            </p>
          </div>
          <div className="w-80 h-100 overflow-hidden rounded-[50%] border-2 border-orange-400">
            <Image
              src="/img/photoProfile.jpg"
              alt="photoProfile"
              title="photoProfile"
              width={400}
              height={400}
              className="rounded-4xl border border-orange-400"
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
