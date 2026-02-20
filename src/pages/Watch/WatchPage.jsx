/**
 * ============================================
 * WATCH PAGE (VIDEO KO'RISH SAHIFASI)
 * ============================================
 * 
 * O'QUVCHI: Yaxyo
 * VAZIFA: Watch Page (video ko'rish sahifasi) yaratish
 * 
 * Bu sahifada Video Player komponenti ishlatiladi.
 * 
 * FAYL: src/pages/Watch/WatchPage.jsx
 */

import React from 'react'
import VideoPlayer from '../../components/VideoPlayer/VideoPlayer'

const WatchPage = () => {
  return (
    <div>
      {/* Yaxyo - Watch Page sahifasini yarating */}
      <VideoPlayer />
    </div>
  )
}

export default WatchPage
