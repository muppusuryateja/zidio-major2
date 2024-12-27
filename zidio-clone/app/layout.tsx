import './globals.css'
import { Poppins } from 'next/font/google'
import { createContext, useState } from 'react'

const poppins = Poppins({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export const MobileMenuContext = createContext({
  isOpen: false,
  setIsOpen: (isOpen: boolean) => {},
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} bg-gray-50 text-gray-900`}>
        <MobileMenuContext.Provider value={{ isOpen, setIsOpen }}>
          {children}
        </MobileMenuContext.Provider>
      </body>
    </html>
  )
}

