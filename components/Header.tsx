import React from "react";
import { Link } from "react-scroll";
import CVDownloadBtn from "./CVDownloadBtn";

const Header = () => {
  return (
    <header className="fixed flex-auto bg-slate-800 text-white p-4 w-full top-0 z-50 border-b border-orange-400">
      <nav className="container mx-auto flex justify-between items-center h-4 font-body font-medium text-xl ">
        <h1>LILH</h1>
        {/* <Image alt="imageLogo" src="" className=" font-bold" /> */}
        <div className="space-x-16 flex items-center cursor-pointer ">
          <Link to="accueil" smooth={true} duration={500}>
            {/* Mettre un span pour le titre de chaque lien si on peut le separer
            de l icone comme ci-dessous */}
            <span>Accueil</span>
          </Link>
          <Link to="profil" smooth={true} duration={500}>
            Profil
          </Link>
          <Link to="competences" smooth={true} duration={500}>
            Compétences
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
            Portfolio
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
          <CVDownloadBtn />
        </div>
      </nav>
    </header>
  );
};

export default Header;
