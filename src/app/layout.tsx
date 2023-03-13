import Nav from '@/components/Nav'
import Providers from '../components/Providers'
import './globals.css'

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

          {children}
        </Providers>
      </body>
    </html>
  )
}
