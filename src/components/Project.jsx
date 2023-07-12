import React from "react";
import { FaCircle } from "react-icons/fa";

const Project = () => {
  return (
    <div className="max-w-3xl mx-auto my-20 px-6 text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="border border-gray-300 rounded-lg p-6 bg-[#191919]">
            <h2 className="text-2xl font-bold mb-4">
              <a href="https://github.com/ifelsebetter/Discord-Bot-Js" target="_blank" rel="noopener noreferrer" className="text-white hover:underline" >
                Discord-Bot-Js
              </a>
            </h2>
            <div className="flex items-center">
              <FaCircle className="text-3xl md:text-4xl mr-2 text-[#f1e05a]" size={15} />
              <span className="text-base md:text-lg">JavaScript</span>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-300 rounded-lg p-6 bg-[#191919]">
            <h2 className="text-2xl font-bold mb-4">
              <a href="https://github.com/ifelsebetter/slash-command-bot" target="_blank" rel="noopener noreferrer" className="text-white hover:underline" >
                slash-command-bot
              </a>
            </h2>
            <div className="flex items-center">
              <FaCircle className="text-3xl md:text-4xl mr-2 text-[#f1e05a]" size={15} />
              <span className="text-base md:text-lg">JavaScript</span>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-300 rounded-lg p-6 bg-[#191919]">
            <h2 className="text-2xl font-bold mb-4">
              <a href="https://github.com/ifelsebetter/react-tailwind-website" target="_blank" rel="noopener noreferrer" className="text-white hover:underline" >
                react-tailwind-website
              </a>
            </h2>
            <div className="flex items-center">
              <FaCircle className="text-3xl md:text-4xl mr-2 text-[#f1e05a]" size={15} />
              <span className="text-base md:text-lg">JavaScript</span>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-300 rounded-lg p-6 bg-[#191919]">
            <h2 className="text-2xl font-bold mb-4">
              <a href="https://github.com/ifelsebetter/quartyz-website" target="_blank" rel="noopener noreferrer" className="text-white hover:underline" >
                quartyz-website
              </a>
            </h2>
            <div className="flex items-center">
              <FaCircle className="text-3xl md:text-4xl mr-2 text-[#f1e05a]" size={15} />
              <span className="text-base md:text-lg">JavaScript</span>
            </div>
          </div>
        </div>
        <div>
          <div className="border border-gray-300 rounded-lg p-6 bg-[#191919]">
            <h2 className="text-2xl font-bold mb-4">
              <a href="https://github.com/ifelsebetter/garbage-classification-project" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">
                garbage-classification-project
              </a>
            </h2>
            <div className="flex items-center">
              <FaCircle className="text-3xl md:text-4xl mr-2 text-[#3572A5]" size={15} />
              <span className="text-base md:text-lg">Python</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
