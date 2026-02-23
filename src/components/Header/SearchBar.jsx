import React, { useState } from 'react'

const SearchBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative flex items-center">
      <div
        className={`flex items-center overflow-hidden transition-all duration-300 ${isOpen ? 'w-48 bg-gray-800 border border-gray-600 rounded-full px-3' : 'w-8'
          }`}
      >
        {isOpen && (
          <input
            autoFocus
            type="text"
            placeholder="Поиск..."
            className="bg-transparent text-white text-sm outline-none w-full py-1.5 placeholder-gray-400"
            onBlur={() => setIsOpen(false)}
          />
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-300 hover:text-white transition-colors flex-shrink-0"
          aria-label="Поиск"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default SearchBar
