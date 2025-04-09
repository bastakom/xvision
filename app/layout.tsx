import "./globals.scss";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Script from "next/script";
import { apiPlugin, storyblokInit } from "@storyblok/react";
import { StoryblokProvider } from "@/components/StoryblokProvider";
import { Metadata } from "next";
import { getData } from "@/lib/get-data";

const cachedFetch = (input: any, init?: any): Promise<Response> => {
  return fetch(input, {
    ...init,
    cache: "no-cache",
  });
};

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const pathname = params.slug;
  const slugName = pathname === undefined ? `home` : pathname;
  const res = await getData(slugName);

  return {
    title: res?.data?.data?.story?.content?.SEO_Title || "XVISION",
    description:
      res?.data?.data?.story?.content?.SEO_Meta || "Default description",
  };
};

storyblokInit({
  accessToken: process.env.STORYBLOK_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    fetch: cachedFetch,
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang={process.env.STORYBLOCK_LANG}>
        <head>
          <script
            dangerouslySetInnerHTML={{
              __html: `
             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NJHGNW4H');`,
            }}
          />
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
          <noscript
            dangerouslySetInnerHTML={{
              __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NJHGNW4H"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
            }}
          />
          <Header lang={process.env.STORYBLOCK_LANG} />
          {children}
          <Footer lang={process.env.STORYBLOCK_LANG} />
        </body>
      </html>
    </StoryblokProvider>
  );
}
