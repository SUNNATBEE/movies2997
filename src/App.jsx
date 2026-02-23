/**
 * ============================================
 * APP KOMPONENTI (ASOSIY)
 * ============================================
 * 
 * Bu asosiy App komponenti.
 * Bu yerda React Router sozlanadi va barcha sahifalar bog'lanadi.
 * 
 * ROUTES:
 * - / - HomePage (Aziz)
 * - /login - Login (Akbar)
 * - /register - Register (Akbar)
 * - /forgot-password - ForgotPassword (Akbar)
 * - /library - Library (Akbar)
 * - /profile - ProfileSettings (Akbar)
 * - /watch/:id - WatchPage (Yaxyo)
 * - /reels - Reels (Hayot)
 * - /tv-channels - TVChannels (Safina)
 * - /channel/:id - ChannelPage (Safina)
 * - /movie/:id - MovieDetail (Jahon)
 * - /404 - NotFound (Sitora)
 * - /500 - ServerError (Sitora)
 * 
 * FAYL: src/App.jsx
 */

import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

// Pages
import HomePage from './pages/Home/HomePage'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import ForgotPassword from './pages/Auth/ForgotPassword'
import Library from './pages/Library/Library'
import ProfileSettings from './pages/Profile/ProfileSettings'
import WatchPage from './pages/Watch/WatchPage'
import Reels from './pages/Reels/Reels'
import TVChannels from './pages/TVChannels/TVChannels'
import ChannelPage from './pages/TVChannels/ChannelPage'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import NotFound from './pages/Error/NotFound'
import ServerError from './pages/Error/ServerError'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          {/* ===== ASOSIY SAHIFA ===== */}
          <Route path="/" element={<HomePage />} />

          {/* ===== AUTH SAHIFALARI (Akbar) ===== */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />

          {/* ===== FOYDALANUVCHI SAHIFALARI (Akbar) ===== */}
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<ProfileSettings />} />

          {/* ===== VIDEO PLAYER (Yaxyo) ===== */}
          {/* id = episodeId (db.json dagi episodes[].id) */}
          <Route path="/watch/:id" element={<WatchPage />} />

          {/* ===== REELS (Hayot) ===== */}
          <Route path="/reels" element={<Reels />} />

          {/* ===== TV KANALLAR (Safina) ===== */}
          <Route path="/tv-channels" element={<TVChannels />} />
          <Route path="/channel/:id" element={<ChannelPage />} />

          {/* ===== FILM DETAIL (Jahon) ===== */}
          <Route path="/movie/:id" element={<MovieDetail />} />

          {/* ===== XATO SAHIFALARI (Sitora) ===== */}
          <Route path="/500" element={<ServerError />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
