import React from "react";
import { Link } from "react-scroll/modules";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white shadow-md z-50">
      <nav className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold">Lina Isabel Londono Hidalgo</div>
        <ul className="flex space-x-6">
          <li>
            <Link
              to="accueil"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              to="profil"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Profil
            </Link>
          </li>
          <li>
            <Link
              to="competences"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Compétences
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-blue-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
