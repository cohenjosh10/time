'use client'

import { useEffect, useState } from 'react'
import { Moon } from 'lunarphase-js'
import styles from './page.module.css'

export default function Home() {
  const [daysSinceNewMoon, setDaysSinceNewMoon] = useState<number>(0)
  const [currentPhase, setCurrentPhase] = useState<string>('')
  const [lunarAgePercent, setLunarAgePercent] = useState<number>(0)

  useEffect(() => {
    // Get days since last new moon using lunarphase-js
    const lunarAge = Moon.lunarAge() // Days since last new moon
    const phase = Moon.lunarPhase() // Get current phase name
    const agePercent = Moon.lunarAgePercent() // Percentage through lunar cycle

    setDaysSinceNewMoon(Math.floor(lunarAge))
    setCurrentPhase(phase)
    setLunarAgePercent(agePercent)
  }, [])

  // Calculate watch-style moon phase display
  const getMoonPhaseDisplay = () => {
    // Convert lunar age to angle (0-360 degrees)
    const angle = lunarAgePercent * 360

    // Calculate the illuminated portion for watch-style display
    const illumination = (1 - Math.cos((lunarAgePercent * 2 * Math.PI))) / 2

    return {
      angle,
      illumination,
      isWaxing: lunarAgePercent < 0.5,
      phase: currentPhase
    }
  }

  const moonPhase = getMoonPhaseDisplay()

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Moonphase</h1>

        <div className={styles.content}>
          <div className={styles.pageContent}>
            <div className={styles.moonDisplay}>
              <div className={styles.moonVisualization}>
                <div className={styles.watchMoonContainer}>
                  <div className={styles.watchBezel}>
                    <div className={styles.watchTicks}>
                      {[...Array(12)].map((_, i) => (
                        <div
                          key={i}
                          className={styles.tick}
                          style={{ transform: `rotate(${i * 30}deg)` }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className={styles.moonDisk}>
                    <div className={styles.moonSurface}>
                      <div
                        className={styles.moonShadow}
                        style={{
                          transform: `rotate(${moonPhase.angle}deg)`,
                          opacity: moonPhase.isWaxing ? 1 - moonPhase.illumination : moonPhase.illumination
                        }}
                      />
                      <div className={styles.moonCraters}>
                        <div className={styles.crater1}></div>
                        <div className={styles.crater2}></div>
                        <div className={styles.crater3}></div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.watchGlass}></div>
                </div>
              </div>
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
