import React from 'react'
import './styles.css'

export const metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  description:
    'Join us for the Nordic-Baltic Meeting 2025 - bringing together professionals, researchers, and enthusiasts from across the Nordic and Baltic regions for collaboration, innovation, and networking.',
  title: 'Nordic-Baltic Meeting 2025',
  icons: {
    icon: '/images/logo.ico',
    apple: '/images/logo.ico',
  },
  openGraph: {
    title: 'Nordic-Baltic Meeting 2025',
    description:
      'Join us for the Nordic-Baltic Meeting 2025 - bringing together professionals, researchers, and enthusiasts from across the Nordic and Baltic regions.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Nordic-Baltic Meeting 2025',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nordic-Baltic Meeting 2025',
    description: 'Join us for the Nordic-Baltic Meeting in 2025',
    images: ['/images/hero.jpg'],
  },
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/logo.png" />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
