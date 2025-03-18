import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import './styles/scrollbar-hide.css'
import Header from './components/Header'
import Footer from './components/Footer'
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Codilar Technologies',
  description: 'Digital Commerce Solutions & Services',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} overflow-x-hidden max-w-full`}>
        <Header />
        <main className="pt-0 w-full">
          {children}
        </main>
        <Footer/>
      </body>
      
    </html>
  )
} 