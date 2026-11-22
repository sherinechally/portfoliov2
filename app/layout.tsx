import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
import './overprint.css'

export const metadata: Metadata = {
  title: 'Sherine Chally — Software Engineer · AI & ML',
  description: 'Sherine Chally is a software engineer building scalable systems, intelligent applications, and responsible AI. Explore selected work, experience, and technical focus.',
  keywords: ['Sherine Chally', 'Software Engineer', 'AI', 'Machine Learning', 'Responsible AI', 'Backend Engineering'],
  openGraph: {
    title: 'Sherine Chally — Engineering. Intelligence. Responsibly.',
    description: 'Scalable systems, intelligent applications, and responsible AI.',
    type: 'website',
  },
  generator: 'v0.app',
  icons: {
    icon: '/site-icon.png',
    apple: '/site-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: '#f4efe4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,400..900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
