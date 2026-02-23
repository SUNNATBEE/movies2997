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

// Layout
import Layout from './components/Layout/Layout'

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
import Movies from './pages/Movies/Movies'
import MovieDetail from './pages/MovieDetail/MovieDetail'
import NotFound from './pages/Error/NotFound'
import ServerError from './pages/Error/ServerError'

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/library" element={<Library />} />
            <Route path="/profile" element={<ProfileSettings />} />
            <Route path="/watch/:id" element={<WatchPage />} />
            <Route path="/reels" element={<Reels />} />
            <Route path="/tv-channels" element={<TVChannels />} />
            <Route path="/channel/:id" element={<ChannelPage />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            <Route path="/500" element={<ServerError />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
