/**
 * ============================================
 * HOME PAGE (BOSH SAHIFA)
 * ============================================
 * 
 * O'QUVCHI: Aziz
 * VAZIFA: Home Page (bosh sahifa) yaratish
 * 
 * Bu sahifada Header va Hero section ishlatiladi.
 * Keyinchalik boshqa bo'limlar qo'shiladi:
 * - Телеканалы (TV Kanallar)
 * - Новинки (Yangi filmlar)
 * - Продолжить просмотр (Davom etish)
 * 
 * FAYL: src/pages/Home/HomePage.jsx
 */

import React from 'react'
import Hero from '../../components/Hero/Hero'

const HomePage = () => {
  return (
    <div>
      {/* Aziz - Home Page sahifasini yarating */}
      <Hero />
      {/* Keyinchalik boshqa bo'limlar qo'shiladi */}
    </div>
  )
}

export default HomePage
