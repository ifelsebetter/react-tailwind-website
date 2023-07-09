import { useState, useEffect } from "react";
import { GiGalaxy } from "react-icons/gi";
import './Navbar.css';

const Navbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 768);
    };

    handleResize(); // Check initial screen size

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className={`flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#191919] ${isSmallScreen ? 'max-w-[320px]' : 'max-w-screen-sm'} rounded-[25px] mt-[3%] border-2 border-white`}>
      <GiGalaxy size={50} />
      <ul className="flex ml-8">
        <li className="p-4">
          <a href="/">About</a>
        </li>
        <li className="p-4">
          <a href="/project">Project</a>
        </li>        
        <li className="p-4">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
