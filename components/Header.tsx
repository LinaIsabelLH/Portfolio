import React from "react";
import { Link } from "react-scroll";
import Image from "next/image";

const Header = () => {
  return (
    <header className="fixed flex-auto bg-slate-800 text-white p-4 w-full top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center h-4 font-serif font-medium text-xl ">
        <h1>LILH</h1>
        {/* <Image alt="imageLogo" src="" className=" font-bold" /> */}
        <div className="space-x-16 flex items-center">
          <Link
            to="accueil"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer "
          >
            {/* Mettre un span pour le titre de chaque lien si on peut le separer
            de l icone comme ci-dessous */}
            <span>Accueil</span>
          </Link>
          <Link
            to="profil"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Profil
          </Link>
          <Link
            to="competences"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Compétences
          </Link>
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Portfolio
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:underline cursor-pointer"
          >
            Contact
          </Link>
          <div className="">
            <button className="flex font-semibold cursor-pointer text-lg px-2 pt-1 rounded-lg bg-yellow-400">
              <span className="mr-0.5 text-black">CV</span>
              <div>
              <Image
                alt="telechargement CV"
                src="/img/telecharger.png"
                height={15}
                width={20}
              />
              </div>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
