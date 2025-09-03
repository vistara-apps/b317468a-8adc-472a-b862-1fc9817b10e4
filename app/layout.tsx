import type { Metadata } from 'next'
import './globals.css'
import { Providers } from './providers'

export const metadata: Metadata = {
  title: 'Redit - Own your posts, share the royalties',
  description: 'A tool for creators to turn any post into a ZK-verified, remixable token with automated royalty distribution',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="gradient-bg min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
