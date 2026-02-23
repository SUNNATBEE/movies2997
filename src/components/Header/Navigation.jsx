import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Главная', path: '/' },
  { label: 'TV каналы', path: '/tv-channels' },
  { label: 'Фильмы', path: '/movies' },
  { label: 'Reels', path: '/reels' },
]

const Navigation = () => {
  const location = useLocation()

  return (
    <nav className="hidden md:flex items-center gap-6">
      {navLinks.map((link) => (
        <Link
          key={link.path}
          to={link.path}
          className={`text-sm font-medium transition-colors duration-200 hover:text-white ${
            location.pathname === link.path
              ? 'text-white border-b-2 border-red-600 pb-0.5'
              : 'text-gray-400'
          }`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}

export default Navigation
