'use client'

import { useState, useEffect } from 'react'
import { Moon } from 'lunarphase-js'
import styles from './page.module.css'

type PageType = 'home' | 'about' | 'contact' | 'moon'

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageType>('home')
  const [daysSinceNewMoon, setDaysSinceNewMoon] = useState<number>(0)

  useEffect(() => {
    // Get days since last new moon using lunarphase-js
    const lunarAge = Moon.lunarAge() // Days since last new moon
    setDaysSinceNewMoon(Math.floor(lunarAge))
  }, [])

  const renderContent = () => {
    switch (currentPage) {
      case 'home':
        return (
          <div className={styles.pageContent}>
            <h2>Welcome!</h2>
            <p>Hello World! This is a Next.js Single Page Application.</p>
            <p>Navigate using the buttons above to see different content with smooth client-side routing.</p>
          </div>
        )
      case 'about':
        return (
          <div className={styles.pageContent}>
            <h2>About This SPA</h2>
            <p>This is a Next.js Single Page Application built with React and TypeScript.</p>
            <p>It demonstrates modern React patterns, client-side state management, and component-based architecture.</p>
          </div>
        )
      case 'contact':
        return (
          <div className={styles.pageContent}>
            <h2>Contact</h2>
            <p>This is the contact page of our Hello World Next.js SPA.</p>
            <p>In a real application, you might have a contact form with server actions here!</p>
          </div>
        )
      case 'moon':
        return (
          <div className={styles.pageContent}>
            <h2>Moon Phase Tracker</h2>
            <p>Days since last new moon: <strong>{daysSinceNewMoon}</strong></p>
            <p>The lunar cycle is approximately 29.5 days long, starting fresh with each new moon.</p>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Hello World SPA</h1>
        
        <nav className={styles.nav}>
          <button
            onClick={() => setCurrentPage('home')}
            className={`${styles.navButton} ${currentPage === 'home' ? styles.active : ''}`}
          >
            Home
          </button>
          <button
            onClick={() => setCurrentPage('about')}
            className={`${styles.navButton} ${currentPage === 'about' ? styles.active : ''}`}
          >
            About
          </button>
          <button
            onClick={() => setCurrentPage('contact')}
            className={`${styles.navButton} ${currentPage === 'contact' ? styles.active : ''}`}
          >
            Contact
          </button>
          <button
            onClick={() => setCurrentPage('moon')}
            className={`${styles.navButton} ${currentPage === 'moon' ? styles.active : ''}`}
          >
            Moon
          </button>
        </nav>
        
        <div className={styles.content}>
          {renderContent()}
        </div>
      </div>
    </div>
  )
}
