import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Limitless Blessings - Premium Lifestyle & Wellness Products',
  description: 'Discover premium lifestyle and wellness products that bring limitless blessings to your life. Shop our curated collection of high-quality items.',
  keywords: 'wellness, lifestyle, premium products, blessings, health, beauty, home',
  authors: [{ name: 'Limitless Blessings' }],
  openGraph: {
    title: 'Limitless Blessings - Premium Lifestyle & Wellness Products',
    description: 'Discover premium lifestyle and wellness products that bring limitless blessings to your life.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
} 