import React from 'react'
import myphoto2 from "../assets/Photoes/myphoto2.jpg"

const Aboutme = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="my-20 text-center text-4xl">
        About <span className="text-neutral500">Me</span>
        </h2>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex items-center justify-center">
                    <img className="rounded-2xl w-1/4 lg:w-2/3 h-auto" src={myphoto2} alt="About" />
                </div>
            </div>
            <div className="w-full lg:w-1/2">
                <div className="flex justify-center lg:justify-start">
                    <p className="my-2 max-w-xl py-6">Hi, I'm Yug Mittal, a passionate game developer and tech enthusiast pursuing a B.Tech in Computer Science and Engineering. I love building immersive digital experiences, combining creativity with cutting-edge technology. With a strong foundation in software engineering and game development, I enjoy exploring the latest advancements in tech, from competitive programming to game design, and how they can shape the future of gaming. I'm always eager to learn and push the boundaries of what's possible with code, blending my love for gaming and technology to create unique and impactful solutions.</p>
                </div>            
            </div>
        </div>
    </div>
  )
}

export default Aboutme