import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BiHomeAlt2, BiUser } from 'react-icons/bi'
import { CgMail } from 'react-icons/cg'
import { GiGalaxy } from 'react-icons/gi'

const Navbar = () => {
  const [button, setButton] = useState(false);

  const MenuButton = () => {
    setButton(!button);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setButton(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className='flex justify-between items-center h-24 mx-auto px-4 text-white bg-[#191919]'>
      <button>
        <GiGalaxy size={50} />
      </button>
      <ul className='hidden md:flex'>
        <li className='p-4'>
          <a href="Home">Home</a>
        </li>
        <li className='p-4'>
          <a href="About">About</a>
        </li>
        <li className='p-4'>
          <a href="Contract">Contract</a>
        </li>
      </ul>
      <div onClick={MenuButton} className='block md:hidden' aria-label="Menu">
        {button ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
      <ul className={button ? 'fixed left-0 top-0 w-[35%] h-full border-r border-r-gray-900 bg-[#191919] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'} aria-hidden={!button}>
        <li className='m-6 text-left align-bottom'>
          <a href="Home">
            <GiGalaxy size={50} />
          </a>
        </li>
        <li className='p-4 border-t border-b border-gray-600 flex items-center'>

          <BiHomeAlt2 size={23}/>
          <a href="Home" className='ml-3'>Home</a>
        </li>
        <li className='p-4 border-b border-gray-600 flex items-center'>
          <BiUser size={23}/>
          <a href="About" className='ml-3'>About</a>
        </li>
        <li className='p-4 border-b border-gray-600 flex items-center'>
          <CgMail size={23}/>
          <a href="Contract" className='ml-3'>Contract</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;