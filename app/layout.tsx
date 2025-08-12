import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Hello World SPA',
  description: 'A simple Next.js Single Page Application',
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
