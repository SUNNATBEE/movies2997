import React from 'react'
import { Link } from 'react-router-dom'

const HeroControls = ({ movie }) => {
    return (
        <div className="flex items-center gap-3 mt-6 flex-wrap">
            {/* Play tugmasi */}
            <Link
                to={`/watch/${movie?.id}`}
                className="flex items-center gap-2 bg-red-600 hover:bg-red-700 active:scale-95 text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-200 shadow-lg shadow-red-900/40 hover:shadow-red-800/60"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                </svg>
                Смотреть сериал
            </Link>

            {/* Detail tugmasi */}
            <Link
                to={`/movie/${movie?.id}`}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-6 py-2.5 rounded-md transition-all duration-200 backdrop-blur-sm border border-white/10"
            >
                О сериале
            </Link>

            {/* Ikonkalar */}
            <div className="flex items-center gap-3 ml-2">
                {/* Bookmark */}
                <button className="text-gray-300 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full" aria-label="Saqlash">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                    </svg>
                </button>

                {/* Share */}
                <button className="text-gray-300 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full" aria-label="Ulashish">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                    </svg>
                </button>

                {/* Fullscreen */}
                <button className="text-gray-300 hover:text-white transition-colors p-1.5 hover:bg-white/10 rounded-full" aria-label="Fullscreen">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default HeroControls
