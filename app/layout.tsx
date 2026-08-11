import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' })
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' })

export const metadata: Metadata = {
  title: 'Vitor Jimenez — Engenharia de software com clareza',
  description: 'Portfólio de Vitor Jimenez, desenvolvedor full stack focado em produtos digitais confiáveis, rápidos e bem construídos.',
  icons: { icon: '/favicon.ico' },
}

export const viewport: Viewport = { themeColor: '#f7f8f5', width: 'device-width', initialScale: 1 }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" className="bg-background"><body className={`${geist.variable} ${geistMono.variable}`}>{children}</body></html>
}
