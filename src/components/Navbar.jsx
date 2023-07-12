import { useState, useEffect } from "react";
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
    <nav className={`flex justify-center items-center h-15 mx-auto text-white bg-[#191919] ${isSmallScreen ? 'max-w-[320px]' : 'max-w-screen-sm'} rounded-[25px] mt-[3%] border-2 border-white`}>
      <ul className="flex">
        <li className="p-4 hover:underline">
          <a href="/">About</a>
        </li>
        <li className="p-4 hover:underline">
          <a href="/project">Project</a>
        </li>        
        <li className="p-4 hover:underline">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
