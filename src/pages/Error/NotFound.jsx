/**
 * ============================================
 * 404 PAGE (SAHIFA TOPILMADI)
 * ============================================
 * 
 * O'QUVCHI: Sitora
 * VAZIFA: 404 Page (sahifa topilmadi) yaratish
 * 
 * Bu sahifa foydalanuvchi mavjud bo'lmagan sahifaga kirganda ko'rinadi.
 * 
 * KERAKLI ELEMENTLAR:
 * - Katta "404" raqami (oq fon ustida qora matn)
 * - Sarlavha: "Страница не найдена"
 * - StarCinema logo (yuqori o'ngda)
 * - Tugma: "Вернуться на главную"
 * - Dizayn: Oq fon, qora matn, yumaloq to'lqin naqshlari
 * 
 * FAYL: src/pages/Error/NotFound.jsx
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* Sitora - 404 sahifasini yarating */}
      <h1>404 - Sitora ishlayapti</h1>
      <button onClick={() => navigate('/')}>
        Вернуться на главную
      </button>
    </div>
  )
}

export default NotFound
