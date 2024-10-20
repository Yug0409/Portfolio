import React from 'react';
import myphoto from "../assets/Photoes/myphoto.jpg";

const Hero = () => {
  return (
    <div className="container mx-auto p-6 lg:mb-36 lg:mx-12">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start">
          <h1 className="pb-4 text-4xl font-thin tracking-tight lg:mt-16 lg:text-8xl">Yug Mittal</h1>
          <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
            Innovative Game Developer and Tech Enthusiast
          </span>
          <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
            I’m a passionate game developer who loves blending creativity with technology to build immersive experiences. With a strong background in software engineering, I’m always exploring new tech and pushing boundaries to create innovative solutions.
          </p>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8 flex justify-center">
          <img className="rounded-2xl w-1/2 lg:w-2/3 h-auto" src={myphoto} alt="Yug Mittal" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
