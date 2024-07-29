import type { Metadata } from 'next'
import { Figtree } from 'next/font/google'
import './globals.css'

const figtree = Figtree({ subsets: ['latin'], weight: ['500', '800'] })

export const metadata: Metadata = {
  title: 'Blog preview card',
  description: 'A frontendmentor beginner level challenge by harshv5094'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.className} bg-cus-yellow`}>{children}</body>
    </html>
  )
}
