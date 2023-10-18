import './globals.css'
import { Inter } from 'next/font/google'
import Layout from '@/Components/Layout/Layout'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'FootBall Live',
  description: 'Generated by FootBall Live',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>

    </html>
  )
}
