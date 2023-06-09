import Footer from './Components/Footer'
import Header from './Components/Header'

import './globals.css'

export const metadata = {
  title: 'Panaverse Dao',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
