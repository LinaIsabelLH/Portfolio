import React, { useState } from "react";
import { Link } from "react-scroll";
import CVDownloadBtn from "./CVDownloadBtn";
import Image from "next/image";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="hidden lg:flex space-x-16 items-center cursor-pointer ">
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

        {/* Bouton menu hamburger visible en mobile */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Image
            src="/img/menu-burger.png" // Remplace par ton icône de menu
            alt="Menu"
            height={30}
            width={30}
          />
        </button>

        {menuOpen && (
          <div className="lg:hidden absolute top-16 right-0 bg-slate-800 w-64 p-4 flex flex-col items-center border border-orange-400 shadow-lg">
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="profil"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Profil
            </Link>
            <Link
              to="competences"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Compétences
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <CVDownloadBtn />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
