'use client'

import { useEffect, useState } from 'react'
import { Moon } from 'lunarphase-js'
import styles from './page.module.css'

export default function Home() {
  const [daysSinceNewMoon, setDaysSinceNewMoon] = useState<number>(0)

  useEffect(() => {
    // Get days since last new moon using lunarphase-js
    const lunarAge = Moon.lunarAge() // Days since last new moon
    setDaysSinceNewMoon(Math.floor(lunarAge))
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Moonphase</h1>

        <div className={styles.content}>
          <div className={styles.pageContent}>
            <div className={styles.moonDisplay}>
              <span className={styles.daysNumber}>{daysSinceNewMoon}</span>
              <span className={styles.daysLabel}>days since new moon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
