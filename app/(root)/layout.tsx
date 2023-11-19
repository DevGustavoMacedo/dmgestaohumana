import '../globals.css'
import type { Metadata } from 'next'
import { Arimo, Changa } from 'next/font/google'

const arimo = Arimo({
  variable: '--font-arimo',
  display: 'swap',
  weight: ['400', '700'],
  subsets: ['latin'],
})

const changa = Changa({
  variable: '--font-changa',
  display: 'swap',
  weight: ['700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'DM Gestão Humana',
  description: 'Empresa de Headhunter e Recolocação Profissional',
  openGraph: {
    title: 'DM Gestão Humana',
    description: 'Empresa de Headhunter e Recolocação Profissional',
    images:
      'https://raw.githubusercontent.com/DevGustavoMacedo/devgustavomacedo/main/public/dmgestaohumana.webp',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br" className={`${arimo.variable} ${changa.variable}`}>
      <body className="scroll-smooth selection:bg-brand-darkGray selection:text-brand-yellow bg-brand-gray text-brand-white font-text">
        {children}
      </body>
    </html>
  )
}
