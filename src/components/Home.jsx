import React from 'react';
import Typed from 'react-typed';

const Main = () => {
  return (

    <div className='text-white text-center font-bold'>
      <div className='max-w-[790px] mt-[-96px] w-full h-screen mx-auto flex flex-col justify-center'>
        <div className='md:text-5xl sm:text-6xl text-4xl font-bold md:py-6'>
          <Typed
          strings={["Welcome to my Website.", "This website created by React Js library.", "Hope you like it."]}
          typeSpeed={120}
          backDelay={30}
          backSpeed={120}
          loop
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
