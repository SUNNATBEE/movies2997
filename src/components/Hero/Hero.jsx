/**
 * ============================================
 * HERO SECTION KOMPONENTI
 * ============================================
 *
 * O'QUVCHI: Aziz
 * FAYL: src/components/Hero/Hero.jsx
 */

import React, { useState, useEffect } from 'react'
import HeroContent from './HeroContent'
import HeroCarousel from './HeroCarousel'

// Rasmli fallback ma'lumotlar (db.json ga qo'shimcha)
const HERO_IMAGES = {
  1: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80',
  2: 'https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?w=1920&q=80',
}

const Hero = () => {
  const [movies, setMovies] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)

  // db.json dan filmlar olish
  useEffect(() => {
    fetch('/db.json')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.movies || [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Avtomatik carousel (5 soniyada 1)
  useEffect(() => {
    if (movies.length <= 1) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % movies.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [movies.length])

  const currentMovie = movies[currentIndex]
  const bgImage = currentMovie
    ? HERO_IMAGES[currentMovie.id] || currentMovie.heroImage
    : null

  if (loading) {
    return (
      <div className="w-full h-[90vh] bg-gray-900 animate-pulse flex items-center justify-center">
        <div className="w-10 h-10 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <section className="relative w-full h-[90vh] min-h-[500px] overflow-hidden">

      {/* Fon rasmi */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundColor: !bgImage ? '#111' : undefined,
        }}
      />

      {/* Gradient overlay qatlamlari */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

      {/* Film ma'lumotlari */}
      <HeroContent movie={currentMovie} />

      {/* Pagination dots */}
      <HeroCarousel
        movies={movies}
        currentIndex={currentIndex}
        onSelect={setCurrentIndex}
      />
    </section>
  )
}

export default Hero
