import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LinkFinity Networks",
  description: "Made with Love",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">

        {children}


        <Script
          id="crisp-chat"
          strategy="afterInteractive"
        >
          {`
          window.$crisp = [];
          window.CRISP_WEBSITE_ID = "b141f8da-a2c6-4dd6-96a2-cad335742391";

          (function () {
              var d = document;
              var s = d.createElement("script");

              s.src = "https://client.crisp.chat/l.js";
              s.async = 1;

              d.getElementsByTagName("head")[0].appendChild(s);
          })();
          `}
        </Script>


      </body>

    </html>
  );
}