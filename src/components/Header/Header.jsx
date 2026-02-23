import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navigation from './Navigation'
import SearchBar from './SearchBar'
import UserMenu from './UserMenu'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/90 to-transparent">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">

        {/* Logo (chapda) */}
        <Link to="/" className="flex items-center gap-1.5 flex-shrink-0">
          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2l2.93 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.07-1.01L12 2z" />
          </svg>
          <span className="text-white font-bold text-lg tracking-tight">
            Star<span className="text-red-600">Cinema</span>
          </span>
        </Link>

        {/* Navigatsiya (markazda) - Desktop */}
        <Navigation />

        {/* O'ng tomon - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBar />

          {/* Globe - til tanlash */}
          <button className="text-gray-400 hover:text-white transition-colors" aria-label="Til tanlash">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9"
              />
            </svg>
          </button>

          {/* User menu */}
          <UserMenu />

          {/* Kirish tugmasi */}
          <Link
            to="/login"
            className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-1.5 rounded-md transition-colors duration-200"
          >
            Войти
          </Link>
        </div>

        {/* Hamburger menu - Mobil */}
        <button
          className="md:hidden text-gray-300 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menyu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobil menyu */}
      {menuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800 px-4 py-4 flex flex-col gap-4">
          <Link to="/" className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800" onClick={() => setMenuOpen(false)}>Главная</Link>
          <Link to="/tv-channels" className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800" onClick={() => setMenuOpen(false)}>TV каналы</Link>
          <Link to="/movies" className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800" onClick={() => setMenuOpen(false)}>Фильмы</Link>
          <Link to="/reels" className="text-gray-300 hover:text-white transition-colors py-2 border-b border-gray-800" onClick={() => setMenuOpen(false)}>Reels</Link>
          <Link to="/login" className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-md text-center transition-colors" onClick={() => setMenuOpen(false)}>Войти</Link>
        </div>
      )}
    </header>
  )
}

export default Header
