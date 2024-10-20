import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/Photoes/Logo .png";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 flex-wrap"> {/* Added flex-wrap for responsiveness */}
      <div className="flex flex-shrink-0 items-center">
        <Link to="/">
          <img className="mx-2 h-8" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-sm md:text-lg"> {/* Adjust text size for responsive design */}
        <Link to="/aboutme" className="text-neutral-300 hover:text-cyan-300">About</Link>
        <Link to="/technologies" className="text-neutral-300 hover:text-cyan-300">Tech</Link>
        <Link to="/experience" className="text-neutral-300 hover:text-cyan-300">Exp</Link>
        <Link to="/projects" className="text-neutral-300 hover:text-cyan-300">Projects</Link> {/* Added Projects link */}
        <Link to="/contact" className="text-neutral-300 hover:text-cyan-300">Contact</Link> {/* Added Contact link */}
        <FaLinkedin className="text-lg md:text-xl" />
        <FaGithub className="text-lg md:text-xl" />
        <FaInstagram className="text-lg md:text-xl" />
      </div>
    </nav>
  );
};

export default Navbar;
