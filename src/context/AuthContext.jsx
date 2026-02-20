/**
 * ============================================
 * AUTH CONTEXT
 * ============================================
 * 
 * O'QUVCHI: Akbar
 * VAZIFA: Auth context yaratish (foydalanuvchi ma'lumotlarini saqlash)
 * 
 * Bu context barcha sahifalarda foydalanuvchi ma'lumotlarini saqlaydi.
 * 
 * FUNKSIYALAR:
 * - Login - foydalanuvchini kirish
 * - Logout - foydalanuvchini chiqish
 * - User data - foydalanuvchi ma'lumotlari
 * - Token - foydalanuvchi tokeni
 * 
 * FAYL: src/context/AuthContext.jsx
 */

import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  // Akbar - Login, Logout funksiyalarini yarating

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}
