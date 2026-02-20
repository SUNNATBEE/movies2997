/**
 * ============================================
 * 500 PAGE (SERVER XATOSI)
 * ============================================
 * 
 * O'QUVCHI: Sitora
 * VAZIFA: 500 Page (server xatosi) yaratish
 * 
 * Bu sahifa server xatosi yuzaga kelganda ko'rinadi.
 * 
 * KERAKLI ELEMENTLAR:
 * - Katta "500" raqami
 * - Xabar: "Возникла внутренняя ошибка. Мы уже работаем над его исправлением"
 * - StarCinema logo
 * - Tugma: "Вернуться на главную"
 * 
 * FAYL: src/pages/Error/ServerError.jsx
 */

import React from 'react'
import { useNavigate } from 'react-router-dom'

const ServerError = () => {
  const navigate = useNavigate()

  return (
    <div>
      {/* Sitora - 500 sahifasini yarating */}
      <h1>500 - Sitora ishlayapti</h1>
      <button onClick={() => navigate('/')}>
        Вернуться на главную
      </button>
    </div>
  )
}

export default ServerError
