import { useState, useEffect } from "react";
import { GiGalaxy } from "react-icons/gi";
import { BiHomeAlt2, BiUser } from "react-icons/bi";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai"
import { CgMail } from "react-icons/cg";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#191919]">
      <button>
        <GiGalaxy size={50} />
      </button>

      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="/">Home</a>
        </li>
        <li className="p-4">
          <a href="/about">About</a>
        </li>
        <li className="p-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      <button
        className="block md:hidden"
        onClick={handleMenuToggle}
        aria-label="Menu"
      >
        {isMenuOpen ? (
          <AiOutlineClose size={30} />
        ) : (
          <AiOutlineMenu size={30} />
        )}
      </button>

      <ul
        className={`${isMenuOpen ? "navbar-menu open" : "navbar-menu"}`}
        aria-hidden={!isMenuOpen}
      >
        <li className="m-6 text-left align-bottom">
          <a href="/">
            <GiGalaxy size={50} />
          </a>
        </li>
        <li className="p-4 border-t border-b border-gray-600 flex items-center">
          <BiHomeAlt2 size={23} />
          <a href="/" className="ml-3">
            Home
          </a>
        </li>
        <li className="p-4 border-b border-gray-600 flex items-center">
          <BiUser size={23} />
          <a href="/about" className="ml-3">
            About
          </a>
        </li>
        <li className="p-4 border-b border-gray-600 flex items-center">
          <CgMail size={23} />
          <a href="/contact" className="ml-3">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
