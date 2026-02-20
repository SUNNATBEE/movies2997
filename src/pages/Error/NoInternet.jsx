/**
 * ============================================
 * NO INTERNET PAGE (INTERNET YO'Q)
 * ============================================
 * 
 * O'QUVCHI: Sitora
 * VAZIFA: No Internet Connection sahifasini yaratish
 * 
 * Bu sahifa internet ulanishi yo'q bo'lganda ko'rinadi.
 * 
 * KERAKLI ELEMENTLAR:
 * - "Ууупс" (Oops) matni
 * - Xabar: "Нет интернет подключения. Пожалуйста, проверьте свое интернет подключение"
 * - StarCinema logo
 * - Tugma: "Вернуться на главную"
 * 
 * FAYL: src/pages/Error/NoInternet.jsx
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoInternet = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* Sitora - No Internet sahifasini yarating */}
      <h1>No Internet - Sitora ishlayapti</h1>
      <button onClick={() => navigate('/')}>
        Вернуться на главную
      </button>
    </div>
  )
}

export default NoInternet
