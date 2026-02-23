import React from 'react'
import HeroControls from './HeroControls'

const HeroContent = ({ movie }) => {
    if (!movie) return null

    return (
        <div className="absolute inset-0 flex items-center">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8 w-full">
                <div className="max-w-xl">

                    {/* Rating va TOP */}
                    <div className="flex items-center gap-3 mb-3">
                        <div className="flex items-center gap-1 bg-yellow-500/20 border border-yellow-500/50 px-2.5 py-0.5 rounded-full">
                            <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2l2.93 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.07-1.01L12 2z" />
                            </svg>
                            <span className="text-yellow-400 text-sm font-bold">{movie.rating}</span>
                        </div>
                        {movie.topPosition && (
                            <span className="text-gray-300 text-sm border border-gray-600 px-2.5 py-0.5 rounded-full">
                                ТОП {movie.topPosition}
                            </span>
                        )}
                    </div>

                    {/* Film sarlavhasi */}
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-3 drop-shadow-lg">
                        {movie.title}
                    </h1>

                    {/* Tavsif */}
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3 max-w-lg">
                        {movie.description}
                    </p>

                    {/* Metadata teglar */}
                    <div className="flex flex-wrap gap-2">
                        <span className="text-xs text-gray-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full">
                            {movie.year}
                        </span>
                        <span className="text-xs text-gray-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full capitalize">
                            {movie.genre}
                        </span>
                        {movie.seasons && (
                            <span className="text-xs text-gray-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full">
                                {movie.seasons} сезона
                            </span>
                        )}
                        <span className="text-xs text-gray-300 bg-white/10 border border-white/10 px-3 py-1 rounded-full">
                            {movie.country}
                        </span>
                        <span className="text-xs text-red-400 bg-red-900/30 border border-red-700/40 px-3 py-1 rounded-full font-semibold">
                            {movie.ageRating}
                        </span>
                    </div>

                    {/* Tugmalar va ikonkalar */}
                    <HeroControls movie={movie} />
                </div>
            </div>
        </div>
    )
}

export default HeroContent
