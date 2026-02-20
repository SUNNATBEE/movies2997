/**
 * ============================================
 * MOVIE DETAIL SAHIFASI
 * ============================================
 * 
 * O'QUVCHI: Jahon
 * VAZIFA: Movie Detail (film tafsilotlari) sahifasini yaratish
 * 
 * Bu sahifada foydalanuvchilar filmlar haqida batafsil ma'lumot olishadi.
 * 
 * BO'LIMLAR:
 * 1. Hero Section (yuqori qism)
 *    - Katta rasm fon
 *    - Film ma'lumotlari (rating, sarlavha, tavsif, teglar)
 *    - Tugmalar: "Смотреть сериал" yoki "Арендовать"
 * 
 * 2. Detailed Information Section
 *    - Film poster/banner
 *    - Batafsil tavsif
 *    - Cast & Crew (aktyorlar va ekipaj)
 *    - Seasons & Episodes (mavsumlar va qismlar)
 *    - Актеры (aktyorlar) bo'limi
 * 
 * DB.JSON:
 * - data.movies[id] - film ma'lumotlari
 * - data.episodes - qismlar ro'yxati
 * 
 * FAYL: src/pages/MovieDetail/MovieDetail.jsx
 */

import React from 'react'
import { useParams } from 'react-router-dom'

const MovieDetail = () => {
  const { id } = useParams()

  return (
    <div>
      {/* Jahon - Movie Detail sahifasini yarating */}
      <h1>Movie Detail - Jahon ishlayapti</h1>
      <p>Film ID: {id}</p>
    </div>
  )
}

export default MovieDetail
