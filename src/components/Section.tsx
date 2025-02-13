import React from "react";

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, children }) => {
    return (
      <section id={id} className="min-h-screen flex flex-col justify-center items-center p-8">
        <h2 className="text-3xl font-bold mb-8">{title}</h2>
        <div className="w-full max-w-4xl">{children}</div>
      </section>
    );
  };
  
  export default Section;