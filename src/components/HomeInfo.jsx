import React from 'react'
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
  <div className="neo-brutalism-blue py-3 px-6 text-white mx-auto rounded-xl shadow-lg text-center max-w-md border-2 border-yellow-300">
    {/* Increased to text-lg for normal paragraph text */}
    <p className="mb-3 text-lg leading-relaxed">{text}</p>
    <Link
      to={link}
      className="neo-brutalism-white neo-btn text-blue-500 font-bold px-8 py-4 rounded-lg shadow transition duration-200
        hover:bg-[#3b82f6] hover:text-white hover:scale-105
        hover:border-2 hover:border-yellow-400 hover:shadow-lg group flex items-center justify-center gap-2 mt-4"
    >
      {/* Increased to text-lg for button text */}
      <span className="btn-text text-lg">{btnText}</span>
      <img
        src={arrow}
        alt="arrow"
        className="arrow inline-block w-5 h-5 transition-transform duration-200 group-hover:translate-x-2 group-hover:scale-110 group-hover:filter-white"
      />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-2xl text-xl font-bold text-center neo-brutalism-blue py-4 px-6 text-white mx-auto rounded-xl shadow-lg tracking-wide border-2 border-yellow-300">
      Hi, I'm <span className="font-extrabold text-yellow-300 drop-shadow">Yug</span>
      <br />
      {/* Increased to text-lg for normal line, keeps bold parts larger */}
      <span className="text-lg font-medium text-blue-200 block mt-2">
        I build creative <span className="font-bold text-yellow-300 text-xl">2D</span> & <span className="font-bold text-blue-300 text-xl">3D</span> games.
      </span>
    </h1>
  ),
  2: (
    <InfoBox
      text={
        <>
          {/* Big heading retained */}
          <span className="block text-2xl font-extrabold text-yellow-300 mb-2">Want to know more?</span>
          {/* Increased to text-lg for normal line */}
          <span className="text-lg">
            See how I mix creativity and tech in <span className="font-bold text-yellow-300 text-xl">2D</span> & <span className="font-bold text-blue-300 text-xl">3D</span> games.
          </span>
        </>
      }
      link="/about"
      btnText="Explore About Me"
    />
  ),
  3: (
    <InfoBox
      text={
        <>
          <span className="text-lg">
            Explore my <span className="font-bold text-yellow-300 text-xl">Game Projects</span>.<br />
            Puzzles, adventures, and more!
          </span>
        </>
      }
      link="/projects"
      btnText="See Projects"
    />
  ),
  4: (
    <InfoBox
      text={
        <>
          {/* All text larger */}
          <span className="text-lg">
            Want to team up or need help?<br />
            Let's connect and create!
          </span>
        </>
      }
      link="/contact"
      btnText="Let's Talk"
    />
  ),
}

const HomeInfo = (currentStage) => {
  return renderContent[currentStage.currentStage] || null;
}

export default HomeInfo
