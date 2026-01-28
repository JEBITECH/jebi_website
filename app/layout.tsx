import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/chatbot/ChatWidget';

export const metadata: Metadata = {
  title: 'JebiTech - Empowering Hospitality Technology',
  description: 'Leading hospitality technology solutions provider',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}

          <ChatWidget />

        </main>
        <Footer />
      </body>
    </html>
  )
}