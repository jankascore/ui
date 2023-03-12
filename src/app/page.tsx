import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Providers>
      <div>hi</div>
    </Providers>
  )
}
