import { Poppins } from "next/font/google"
import "./globals.css"
// import Providers from "@/components/Providers"
import NavbarComponent from "@/components/Navbar"

const poppins = Poppins({ subsets: ["latin"], weight: "400" })

export const metadata = {
  title: "Beasiswa",
  description: "Generated by create next app",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavbarComponent />
        {children}
      </body>
    </html>
  )
}
