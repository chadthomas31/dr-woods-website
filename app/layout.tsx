import './globals.css'
import type { Metadata } from 'next'
import { Inter, Merriweather } from 'next/font/google'
import Script from 'next/script'
import Header from './components/Header'
import Footer from './components/Footer'
import AIChatWidget from './components/AIChatWidget'

const GA_MEASUREMENT_ID = 'G-PJE8GPG1ZN'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Robert L Woods MD - Concierge Psychiatry | Enriching Lives',
  description: 'Experience exceptional psychiatric care in your own space. Dr. Woods brings 25+ years of expertise directly to your home, office, or preferred location with personalized, confidential treatment.',
  keywords: [
    'concierge psychiatry', 
    'private psychiatrist', 
    'home visit psychiatrist', 
    'telepsychiatry', 
    'personalized mental health care',
    'Dr. Robert Woods',
    'premium psychiatric services',
    'executive mental health'
  ],
  authors: [{ name: 'Dr. Robert L. Woods MD' }],
  creator: 'Dr. Robert L. Woods MD',
  publisher: 'Dr. Robert L. Woods MD',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://robertlwoodsmd.com',
    title: 'Robert L Woods MD - Concierge Psychiatry | Enriching Lives',
    description: 'Experience exceptional psychiatric care in your own space. Personalized mental health treatment with 25+ years of expertise.',
    siteName: 'Dr. Robert L. Woods MD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Robert L Woods MD - Concierge Psychiatry | Enriching Lives',
    description: 'Experience exceptional psychiatric care in your own space.',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="font-sans antialiased bg-olive-50 text-gray-900">
        <Header />
        {children}
        <Footer />
        <AIChatWidget />
      </body>
    </html>
  )
}
