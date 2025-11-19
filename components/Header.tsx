import React, { useState } from "react";
import { Link } from "react-scroll";
import CVDownloadBtn from "./CVDownloadBtn";
import Image from "next/image";
import LanguageSwitcher from "./LangageSwitcher";
import { useLocale } from "../i18n/useLocale";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t } = useLocale();

  return (
    <header className="fixed flex-auto bg-slate-800 text-zinc-100 p-4 w-full top-0 z-50 border-b border-orange-400">
      <nav className="container mx-auto flex justify-between items-center h-7 font-body font-medium text-lg max-[1024px]:justify-evenly ">
        <LanguageSwitcher/>
        <div className="hidden lg:flex space-x-16 items-center cursor-pointer ">
          <Link to="home" smooth={true} duration={500}>
          {t.header.home}
          </Link>
          <Link to="profil" smooth={true} duration={500}>
          {t.header.profil}
          </Link>
          <Link to="competences" smooth={true} duration={500}>
          {t.header.skills}
          </Link>
          <Link to="portfolio" smooth={true} duration={500}>
          {t.header.portfolio}
          </Link>
          <Link to="contact" smooth={true} duration={500}>
          {t.header.contact}
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
              {t.header.home}
            </Link>
            <Link
              to="profil"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              {t.header.profil}
            </Link>
            <Link
              to="competences"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              {t.header.skills}
            </Link>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              {t.header.portfolio}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              {t.header.contact}
            </Link>
            <CVDownloadBtn />
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
