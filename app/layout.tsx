import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moonphase Tracker - Beautiful Lunar Phase Display',
  description: 'Track the current moon phase with a beautiful watch-style display. See days since new moon and current lunar phase with real-time astronomical calculations.',
  keywords: ['moon phase', 'lunar calendar', 'astronomy', 'moon tracker', 'lunar phase'],
  authors: [{ name: 'Moonphase Tracker' }],
  metadataBase: new URL('https://moonphase-tracker.vercel.app'),
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Moonphase',
  },
  manifest: '/manifest.json',
  openGraph: {
    title: 'Moonphase Tracker',
    description: 'Beautiful watch-style moon phase tracker with real-time lunar calculations',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary',
    title: 'Moonphase Tracker',
    description: 'Beautiful watch-style moon phase tracker',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#1a1a2e',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
