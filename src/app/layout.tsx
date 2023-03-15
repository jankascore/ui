import Nav from '@/components/Nav/Nav'
import Providers from '../components/Providers'
import './globals.css'

export const metadata = {
  icons: {
    icon: '/crystalball.svg'
  },
  title: 'Janka Score 🌳'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Nav />

          <div className="h-screen w-screen bg-gradient-to-tr from-slate-900 to-slate-700 pt-24 px-8">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
