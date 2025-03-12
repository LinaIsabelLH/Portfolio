import React from "react";
import { Link } from "react-scroll";
import CVDownloadBtn from "./CVDownloadBtn";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed flex-auto bg-slate-800 text-zinc-100 p-4 w-full top-0 z-50 border-b border-orange-400">
      <nav className="container mx-auto flex justify-between items-center h-4 font-body font-medium text-xl max-[1024px]:justify-evenly ">
        <Image
          src="/img/soleil.png"
          alt="changing to the dark or light mode"
          height={30}
          width={30}
          className="mr-8"
        />
        {/* <Image alt="imageLogo" src="" className=" font-bold" /> */}
        <div className="space-x-16 flex items-center cursor-pointer ">
          <Link to="home" smooth={true} duration={500}>
            Accueil
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
