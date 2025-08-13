'use client'

import { useEffect, useState } from 'react'
import { Moon } from 'lunarphase-js'
import styles from './page.module.css'

export default function Home() {
  const [daysSinceNewMoon, setDaysSinceNewMoon] = useState<number>(0)
  const [currentPhase, setCurrentPhase] = useState<string>('')

  useEffect(() => {
    // Get days since last new moon using lunarphase-js
    const lunarAge = Moon.lunarAge() // Days since last new moon
    const phase = Moon.lunarPhase() // Get current phase name

    setDaysSinceNewMoon(Math.floor(lunarAge))
    setCurrentPhase(phase)
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
              <div className={styles.phaseInfo}>
                <span className={styles.phaseLabel}>{currentPhase}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
