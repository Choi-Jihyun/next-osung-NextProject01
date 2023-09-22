import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '오성노트',
  description: '프론트엔드와 관련된 다양한 프로그램들에 대하여 노트를 작성했습니다. 오성노트입니다.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <Providers>
          {children}
        </Providers>
        <Footer/>
      </body>
    </html>
  )
}