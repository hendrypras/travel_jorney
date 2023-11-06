import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import styles from './layout.module.scss'

import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default MainLayout
