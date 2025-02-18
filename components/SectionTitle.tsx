import React from "react";


interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title})=>{
return(
    <div className="relative z-10 flex items-center justify-center w-full max-w-4xl px-4 bg-slate-800 rounded-3xl">
      {/* Ligne gauche */}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      <h1 className=" mx-4 text-4xl font-bold font-serif text-zinc-100 whitespace-nowrap ">
        {title}
      </h1>
      {/* Ligne droite */}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
    </div>
);
};

export default SectionTitle;