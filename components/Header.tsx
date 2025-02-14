import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white p-4 fixed w-full top-0 z-50 ">
      <nav className="container mx-auto flex justify-between items-center">
        <Image alt="imageLogo" src="" className=" font-bold" />
        <div className="space-x-16 flex">
          <Link
            to="accueil"
            smooth={true}
            duration={500}
            className="hover:underline font-bold cursor-pointer text-xl"
          >
            Accueil
          </Link>
          <Link
            to="profil"
            smooth={true}
            duration={500}
            className="hover:underline font-bold cursor-pointer text-xl"
          >
            Profil
          </Link>
          <Link
            to="competences"
            smooth={true}
            duration={500}
            className="hover:underline font-bold cursor-pointer text-xl"
          >
            Compétences
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="hover:underline font-bold cursor-pointer text-xl"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:underline font-bold cursor-pointer text-xl"
          >
            Contact
          </Link>
          <div >
            <button className="flex font-bold cursor-pointer text-xl">
              CV 
              <Image
                alt="telechargement CV"
                src="/telecharger.png"
                width={30}
                height={20}
              />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
