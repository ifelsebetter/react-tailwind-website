import React from 'react';
import { CgMail } from 'react-icons/cg';
import { FaDonate } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row p-8 max-w-7xl mx-auto justify-center md:h-screen mt-[6%]'>
      <ul className="md:text-5xl sm:text-6xl text-4xl font-bold md:py-6">
        <li>
          <a href="mailto:ifelsebetter@gmail.com" className='border rounded-md p-4 my-4 flex items-center hover:bg-[#A9D9D9] bg-gray-100 border-black'>
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

export default Contact;
