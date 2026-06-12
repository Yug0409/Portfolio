import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/85 backdrop-blur-md shadow-lg border-b border-blue-100'
        : 'bg-white/20 backdrop-blur-sm border-b border-white/10'
    }`}>
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        <NavLink to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center font-black text-white text-sm shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-200">
            YM
          </div>
          <span className="hidden sm:block font-bold text-gray-800 text-sm tracking-wide group-hover:text-blue-600 transition-colors">
            Yug Mittal
          </span>
        </NavLink>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `font-semibold text-sm tracking-wide transition-all duration-200 relative pb-0.5
                 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:rounded-full after:bg-blue-500 after:transition-all after:duration-300
                 ${isActive
                   ? 'text-blue-600 after:w-full'
                   : 'text-gray-700 hover:text-blue-600 after:w-0 hover:after:w-full'
                 }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-50 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 flex flex-col gap-1 justify-center">
            <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
            <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gray-700 rounded transition-all duration-300 origin-center ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
          </div>
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ${isMenuOpen ? 'max-h-40' : 'max-h-0'}`}>
        <div className="bg-white/95 backdrop-blur-md border-t border-blue-50 shadow-inner py-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center px-6 py-3 text-sm font-semibold transition-colors ${
                  isActive ? 'text-blue-600 bg-blue-50' : 'text-gray-700 hover:bg-gray-50 hover:text-blue-600'
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Navbar
