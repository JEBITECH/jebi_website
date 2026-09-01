import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/chatbot/ChatWidget";
import EmailPopup from "@/components/EmailPopup";
import AnnouncementBar from "@/components/AnnouncementBar";
import { Analytics } from "@vercel/analytics/react";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import LocalBusinessSchema from "@/components/seo/LocalBusinessSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://jebitech.com"),
  title: {
    default: "jebitech - hospitality technology company",
    template: "%s",
  },
  description: "JebiTech Solutions builds hospitality technology products including property management, guest experience, and franchise operations software tools.",
  keywords: [
    "jebitech",
    "jebi softech services",
    "hospitality technology company",
    "hospitality tech partner",
    "vacation rental technology",
    "property management software solutions",
    "hospitality SaaS platform",
    "proptech solutions",
    "short-term rental technology",
    "hospitality technology company Pune India",
  ],
  alternates: {
    canonical: "https://jebitech.com/",
  },
  openGraph: {
    title: "jebitech - hospitality technology company",
    description: "JebiTech Solutions builds hospitality technology products including property management, guest experience, and franchise operations software tools.",
    url: "https://jebitech.com/",
    siteName: "JebiTech",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://jebitech.com/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "JebiTech Solutions - Hospitality Technology Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "jebitech - hospitality technology company",
    description: "JebiTech Solutions builds hospitality technology products including property management, guest experience, and franchise operations software tools.",
    images: ["https://jebitech.com/images/og-default.jpg"],
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }, { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  ...(process.env.BING_VERIFICATION_CODE ? { verification: { other: { "msvalidate.01": process.env.BING_VERIFICATION_CODE } } } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T488C5DS');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T488C5DS" height="0" width="0" style={{ display: "none", visibility: "hidden" }} />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <OrganizationSchema />
        <LocalBusinessSchema />
        <AnnouncementBar />
        <Header />
        <main>
          {children}

          <ChatWidget />
          {/* <EmailPopup 
            delaySeconds={8}
            showOnExitIntent={true}
          /> */}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
