import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ChatWidget from '@/components/chatbot/ChatWidget';

export const metadata: Metadata = {
  title: 'JEBITECH – Empowering Hospitality Technology',
  description: 'Drive growth and success in the hospitality industry with Jebitech. As your strategic partner, we offer comprehensive technology solutions and consultancy services tailored to hotels, vacation rentals, serviced apartments, and technology companies. Our expertise in revenue optimization, cost reduction, and operational efficiency empowers you to streamline operations, optimize business processes, and maximize profitability.',
  keywords: 'hospitality technology solutions, revenue optimization consultancy, cost reduction strategies for hotels, operational efficiency solutions for vacation rentals, process optimization in hospitality industry, expertise hire for hospitality companies, technology consultancy for hotels, technology consultancy for vacation rentals, technology solutions for serviced apartments, business process optimization in hospitality',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
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