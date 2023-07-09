import React from 'react';
import Typed from 'react-typed';

const Main = () => {
  return (
    <div className="text-white text-center h-screen flex flex-col justify-center items-center bg-gray-900">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl sm:text-6xl font-bold mb-6">
          <Typed
            strings={[
              'Welcome to my Website.',
              'This website is created using React.js and Tailwind CSS.',
              'Hope you like it.'
            ]}
            typeSpeed={75}
            backDelay={30}
            backSpeed={80}
            loop
          />
        </h1>
        <footer className="text-sm text-gray-500">
          © 2023 ! if#1046. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Main;
