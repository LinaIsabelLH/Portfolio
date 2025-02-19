import React from "react";
import SectionTitle from "./SectionTitle";

interface SectionProps{
    id: string;
    title: string;
    backgroundImage: string;
    children?: React.ReactNode;
}

const Section : React.FC <SectionProps> = ({id, title, backgroundImage, children}) =>{
    return (
        <section
        id={id}
        className="relative h-screen flex flex-col items-center justify-start bg-cover bg-center bg-no-repeat pt-24"
        style={{backgroundImage: `url('${backgroundImage}')`}}
       >
        {/* Overlay semi-transparent */}
        <div className="absolute inset-0 bg-slate-800/40"></div>
        {/* Titre de la section */}
        <SectionTitle title={title}/>
        {/* Contenu de la section */}
        {children}
      </section>
    )
}

export default Section;