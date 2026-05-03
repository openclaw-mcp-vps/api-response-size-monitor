import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'API Response Size Monitor — Stop Bandwidth Cost Spikes',
  description: 'Monitor API payload sizes across endpoints and get alerted before bandwidth costs spiral out of control.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="e310bbf2-1538-46bd-bfea-b64b9526f470"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
