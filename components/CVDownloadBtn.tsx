import React from "react";
import Image from "next/image";

const CVDownloadBtn = () => {
  return (
    <div className="flex-1 font-body font-semibold hover:bg-orange-400 text-lg px-2 py-1 rounded-lg bg-orange-300 mr-0.5 text-black w-16">
      <a
        href="/img/CV Lina Isabel Londono -Développeur FullStack.pdf"
        download="CV Lina Isabel Londono -Développeur FullStack"
        target="_blank"
        rel="noreferrer"
        className="flex"
      >
        <span>CV</span>
        <Image
          alt="telechargement CV"
          src="/img/telecharger.png"
          height={20}
          width={25}
        />
      </a>
    </div>
  );
};

export default CVDownloadBtn;
