import './globals.css'
import { Noto_Sans } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { Providers } from './providers'

const inter = Noto_Sans({ subsets: ['latin'], weight: ['400'] })

export const metadata = {
  title: '오성노트',
  description: '초등학생들이 자주 헷갈려 하는 주제에 대하여 개념 확립을 위해 제작하였습니다. 오성노트입니다.',
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