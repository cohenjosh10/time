import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Moonphase Tracker',
  description: 'Track days since the new moon',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no',
  themeColor: '#1a1a2e',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Moonphase',
  },
  manifest: '/manifest.json',
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
