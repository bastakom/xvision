import "./globals.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Synkorrigering & Ögonlaser i Malmö | X-Vision",
  description:
    "Säg hejdå till glasögon! Vi på X-Vision i Malmö erbjuder avancerad ögonlaser för klarare syn med SMILE, FS-Lasik, Surface och PRK-Laser. Du hittar oss i Malmö Hyllie – boka din konsultation idag.",
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
