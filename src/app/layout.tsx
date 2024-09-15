import type { Metadata } from 'next'
 
// These styles apply to every route in the application
import './globals.css'
 //👇 Import Open Sans font
import { Merriweather  } from 'next/font/google'


const poppins = Merriweather({
  weight: "300",
  subsets: ['latin'],
  variable: '--font-poppins'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"className={`${poppins.variable} `}>
      <body>{children}</body>
    </html>
  )
}