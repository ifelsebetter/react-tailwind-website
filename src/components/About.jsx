import React from "react";
import { FaReact, FaNodeJs, FaJs } from "react-icons/fa";
import { SiC, SiTailwindcss, SiPython } from 'react-icons/si';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row p-8 max-w-7xl mx-auto justify-center md:h-screen text-white mt-[6%]">
      <div className="md:ml-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Hi, I'm Yu</h2>
        <p className="text-base md:text-lg mb-6">
          I'm a high school student with a passion for programming and space exploration.
        </p>
        <p className="text-base md:text-lg mb-6">
          Programming languages I can write:
        </p>
        <div className="flex flex-wrap mb-8">
          <div className="flex items-center mr-8 mb-4">
            <SiC className="text-3xl md:text-4xl mr-2 text-gray-500" />
            <span className="text-base md:text-lg ml-2">C</span>
          </div>
          <div className="flex items-center mr-8 mb-4">
            <FaJs className="text-3xl md:text-4xl mr-2 text-yellow-500" />
            <span className="text-base md:text-lg ml-2">JavaScript</span>
          </div>
          <div className="flex items-center mr-8 mb-4">
            <SiPython className="text-3xl md:text-4xl mr-2 text-[#4182b4]" />
            <span className="text-base md:text-lg ml-2">Python</span>
          </div>
        </div>
        <p className="text-base md:text-lg mb-6">
          Frameworks I'm familiar with:
        </p>
        <div className="flex flex-wrap mb-8">
          <div className="flex items-center mr-8 mb-4">
            <FaNodeJs className="text-3xl md:text-4xl mr-2 text-green-500" />
            <span className="text-base md:text-lg ml-2">Express</span>
          </div>
          <div className="flex items-center mr-8 mb-4">
            <FaReact className="text-3xl md:text-4xl mr-2 text-blue-500" />
            <span className="text-base md:text-lg ml-2">React</span>
          </div>
          <div className="flex items-center mr-8 mb-4">
            <SiTailwindcss className="text-3xl md:text-4xl mr-2 text-teal-500" />
            <span className="text-base md:text-lg ml-2">Tailwind CSS</span>
          </div>
        </div>
        <p className="text-base md:text-lg">
          In my free time, I like to watch movies and solve programming problems.
        </p>
      </div>
    </div>
  );
};

export default About;
