import type { Metadata } from "next";
/* import localFont from "next/font/local"; */
import "./globals.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";

/* const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */

export const metadata: Metadata = {
  title: "XVISION - Slipp glasögon och kontaktlinser",
  description:
    "Slipp glasögon och kontaktlinser med hjälp av X-Vision ögonklinik i Malmö. ✓ Just nu: 5.000-15.000 kr rabatt ✓ Över 30 års erfarenhet ✓ Moderna maskiner.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qnl0pvt.css" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
