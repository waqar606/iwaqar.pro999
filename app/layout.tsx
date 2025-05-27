import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Waqar_Ahmed",
  description: "My professional portfolio showcasing my work and skills",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/navbar_icon_2.png', type: 'image/png' }
    ],
    shortcut: '/navbar_icon_2.png',
    apple: '/navbar_icon_2.png',
  },
}

// import type React from "react"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: "dark" }} suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}


// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" className="dark" style={{ colorScheme: "dark" }}>
//       <head>
//         <link rel="icon" type="image/png" href="/navbar_icon_2.png" />
//         <link rel="apple-touch-icon" href="/navbar_icon_2.png" />
//       </head>
//       <body className="min-h-screen bg-gray-900 text-gray-50">
//         <ThemeProvider forcedTheme="dark">{children}</ThemeProvider>
//       </body>
//     </html>
//   )
// }
