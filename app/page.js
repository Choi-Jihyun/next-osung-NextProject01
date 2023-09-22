import Image from 'next/image'
import MyProjectsSection from '@/components/home/myProjectsSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 max-sm:p-3">
      <MyProjectsSection />
    </main>
  )
}
