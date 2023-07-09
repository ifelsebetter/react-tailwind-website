import React from 'react';
import Typed from 'react-typed';

const Main = () => {
  return (

    <div className='text-white text-center'>
      <div className='max-w-[790px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center'>
        <div className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
          <Typed
          strings={["Welcome to my Website.", "This website created by React Js and Tailwindcss", "Hope you like it."]}
          typeSpeed={75}
          backDelay={30}
          backSpeed={80}
          loop
          />
        </div>
        <footer className="text-sm mt-4 text-gray-500">
          © 2023 ! if#1046. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Main;
