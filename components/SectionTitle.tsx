import React from "react";


interface SectionTitleProps {
    title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({title})=>{
return(
    <div className="relative z-10 flex items-center justify-center w-full max-w-4xl px-4 bg-slate-800 rounded-3xl max-[1100px]:mt-6 max-[768px]:mt-4">
      {/* Ligne gauche */}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
      <h1 className=" mx-4 text-4xl font-bold font-body text-zinc-100 whitespace-nowrap pb-2 max-[500px]:text-2xl">
        {title}
      </h1>
      {/* Ligne droite */}
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent"></div>
    </div>
);
};

export default SectionTitle;