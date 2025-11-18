import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10) // blur only after slight scroll
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-8 py-3 border-b-2 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/30 border-blue-200 backdrop-blur-md shadow-md'
          : 'bg-white/20 border-blue-200'
      }`}
    >
      <NavLink to="/" className="w-10 h-10 rounded-lg bg-white flex items-center justify-center font-extrabold text-lg shadow">
        <p className="blue-gradient_text text-xl">YM</p>
      </NavLink>
      <nav className="flex text-lg gap-8 font-bold">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 underline underline-offset-4'
              : 'text-blue-900 hover:text-white transition'
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive
              ? 'text-blue-500 underline underline-offset-4'
              : 'text-blue-900 hover:text-white transition'
          }
        >
          Projects
        </NavLink>
      </nav>
    </header>
  )
}

export default Navbar
