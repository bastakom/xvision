import "./globals.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Metadata } from "next";
import Script from "next/script";

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
    <html lang={process.env.STORYBLOCK_LANG}>
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qnl0pvt.css" />
        <Script src="https://consent.cookiebot.com/uc.js" />
        <script
          id="Cookiebot"
          src="https://consent.cookiebot.com/uc.js"
          data-cbid="d966ab86-14d2-42ab-9df9-ebbffc2988a1"
          type="text/javascript"
          async
        ></script>
      </head>
      <body>
        <Header lang={process.env.STORYBLOCK_LANG} />
        {children}
        <Footer lang={process.env.STORYBLOCK_LANG} />
      </body>
    </html>
  );
}
