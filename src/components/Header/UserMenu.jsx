import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-300 hover:text-white transition-colors"
                aria-label="Профиль"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="absolute right-0 top-8 bg-gray-900 border border-gray-700 rounded-lg shadow-xl w-44 z-50">
                    <Link
                        to="/profile"
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 hover:text-white rounded-t-lg transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Профиль
                    </Link>
                    <Link
                        to="/library"
                        className="block px-4 py-2.5 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                    >
                        Библиотека
                    </Link>
                    <hr className="border-gray-700" />
                    <button className="block w-full text-left px-4 py-2.5 text-sm text-red-400 hover:bg-gray-800 rounded-b-lg transition-colors">
                        Выйти
                    </button>
                </div>
            )}
        </div>
    )
}

export default UserMenu
