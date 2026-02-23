import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'

const Layout = () => {
  return (
    <div className="min-h-screen bg-[#0d0d0d]">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default Layout
