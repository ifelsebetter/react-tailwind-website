import React from 'react';
import { BsDiscord } from "react-icons/bs"
import { CgMail } from 'react-icons/cg';
import { FaDonate } from 'react-icons/fa'

const Contract = () => {
  const handleDiscordClick = () => {
    const discord = "! if#1046";
    navigator.clipboard.writeText(discord);
    alert(`My discord username : ${discord}\nCopied to your clipboard`);
  };

  return (
    <div className='max-w-[760px] mt-[-96px] w-full h-screen mx-auto flex flex-col items-center justify-center'>
      <ul className="list-none p-0 m-0">
        <li>
          <button onClick={handleDiscordClick} className='w-full border rounded-md p-4 my-4 flex items-center hover:bg-[#A9D9D9] bg-gray-100'>
          <BsDiscord size={35} className="mr-4 text-[#7289DA]" />
          <p className="text-xl font-medium">Discord</p>
        </button>
        </li>
        <li>
          <a href="mailto:ifelsebetter@gmail.com" className='border rounded-md p-4 my-4 flex items-center hover:bg-[#A9D9D9] bg-gray-100'>
            <CgMail size={35} className="mr-4 text-red-600" />
            <p className="text-xl font-medium">Gmail</p>
          </a>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/ifelsebetter" className='border rounded-md p-4 my-4 flex items-center hover:bg-[#A9D9D9] bg-gray-100'>
            <FaDonate size={35} className="mr-4 text-green-500" />
            <p className="text-xl font-medium">Donate me</p>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contract;
