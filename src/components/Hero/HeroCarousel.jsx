import React from 'react'

const HeroCarousel = ({ movies, currentIndex, onSelect }) => {
    if (!movies || movies.length <= 1) return null

    return (
        <div className="absolute bottom-8 left-0 right-0 flex justify-center items-center gap-2 z-10">
            {movies.map((_, index) => (
                <button
                    key={index}
                    onClick={() => onSelect(index)}
                    className={`transition-all duration-300 rounded-full ${index === currentIndex
                            ? 'w-6 h-2 bg-red-600'
                            : 'w-2 h-2 bg-white/50 hover:bg-white/80'
                        }`}
                    aria-label={`Слайд ${index + 1}`}
                />
            ))}
        </div>
    )
}

export default HeroCarousel
