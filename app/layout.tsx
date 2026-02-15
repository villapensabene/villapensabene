import type React from "react"
import type { Metadata } from "next"
import { Geist, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import SplashScreen from "@/components/splash-screen"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _playfair = Playfair_Display({ subsets: ["latin"] })

export const viewport = {
  themeColor: "#8B2630",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}


export const metadata: Metadata = {
  title: "Villa Pensabene - Ristorante Pizzeria",
  description:
    "Autentica cucina italiana e pizzeria nel cuore della tradizione. Scopri i nostri piatti preparati con passione e ingredienti freschi.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Villa Pensabene",
    startupImage: [
      {
        url: "/icon-512x512.png",
        media: "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2)",
      },
    ],
  },

  formatDetection: {
    telephone: false,
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it">
      <body className={`font-sans antialiased`}>
        <SplashScreen />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
