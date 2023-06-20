import React from "react";
import Pfp_pic from './assets/Pic.png';
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiC, SiTailwindcss, SiPython } from 'react-icons/si'

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-8 md:p-0 md:justify-center max-w-7xl mx-auto justify-center md:h-screen text-white">
      <div className="md:mr-8">
        <img src={Pfp_pic} alt="" className="rounded max-w-xs md:max-w-none md:h-auto" />
      </div>
      <div className="md:ml-8">
        <h2 className="text-3xl font-bold mb-4">Hi, I'm Yu</h2>
        <p className="text-lg mb-4">
          I'm a high school student with a passion for programming and space exploration.
          <br />
        </p>
        <p className="text-lg mb-4">
          Programming language I can write:
        </p>
        <div className="flex flex-wrap">
          <div className="flex items-cent">
            <div className="flex items-center mr-8 mb-4">
              <SiC className="text-4xl mr-2 text-gray-500" size={32} />
            </div>
            <div className="flex items-center mr-8 mb-4">
              <FaJs className="text-4xl mr-2 text-yellow-500" />
            </div>
            <div className="flex items-center mr-8 mb-4">
              <SiPython className="text-4xl mr-2 text-[#4182b4]" />
            </div>
          </div>
        </div>
        <p className="text-lg mb-4">
          Frameworks I familiar with:
        </p>
        <div className="flex flex-wrap mb-3">
          <div className="flex items-center mr-8">
            <FaNodeJs className="text-4xl mr-2 text-green-500" />
            <span className="text-lg">Express</span>
          </div>
          <div className="flex items-center mr-8">
            <FaReact className="text-4xl mr-2 text-blue-500" />
            <span className="text-lg">React</span>
          </div>
          <div className="flex items-center mr-8">
            <SiTailwindcss className="text-4xl mr-2 text-teal-500" />
            <span className="text-lg">Tailwind</span>
          </div>
        </div>
        <p className="text-lg mb-4">
          In my free time, I like to watch movies and solve programming problems.
        </p>
      </div>
    </div>
  );
};

export default About;
