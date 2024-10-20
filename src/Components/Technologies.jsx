import React from 'react'
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandUnity } from "react-icons/tb";
import { SiUnrealengine } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h2 className="my-20 text-center text-4xl">Softwares and Techs</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiReactjsLine className="text-7xl text-cyan-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <TbBrandUnity className="text-7xl text-white"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiUnrealengine className="text-7xl text-purple-400"/>
          </div>
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaNodeJs className="text-7xl text-green-500"/>
          </div>
        </div>
    </div>
  )
}

export default Technologies
