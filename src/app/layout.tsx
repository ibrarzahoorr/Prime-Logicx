import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import PageTransition from "@/components/shared/PageTransition";
import ScrollProgress from "@/components/shared/ScrollProgress";
import CursorSpotlight from "@/components/shared/CursorSpotlight";
import {
  organizationSchema,
  websiteSchema,
  professionalServiceSchema,
  speakableSchema,
  personSchema,
  itemListSchema,
} from "@/lib/schema";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title: {
    default: `${siteConfig.name} — Top Custom Software, Web & App Development Company`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "best software company",
    "top software development agency",
    "custom software development",
    "hire software developers",
    "expert web developers",
    "mobile app development company",
    "AI automation agency",
    "machine learning developers",
    "top digital marketing agency",
    "best SEO services",
    "SaaS development company",
    "software engineers for hire",
    "custom app development",
    "elite web development",
  ],
  authors: [{ name: siteConfig.name }],
  category: "technology",
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } as never,
  alternates: { 
    canonical: "/",
    languages: {
      "en-US": "/",
      "en-GB": "/",
      "en-CA": "/",
      "en-AU": "/",
      "en-AE": "/",
      "x-default": "/"
    }
  },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    title: `${siteConfig.name} — Top Custom Software, Web & App Development Company`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Top Custom Software, Web & App Development Company`,
    description: siteConfig.description,
  },
  verification: {
    google: "8NgnyqWurYq3EpiFdQmdwtgiOzqYcusjhSNAfpTz00Q",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR5ZTLJJ');`,
          }}
        />
        <script
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              websiteSchema,
              professionalServiceSchema,
              speakableSchema,
              personSchema,
              itemListSchema,
            ]),
          }}
        />
        <script
          suppressHydrationWarning
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "xy7c8e1mye");`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), sans-serif" }} suppressHydrationWarning>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PR5ZTLJJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <ScrollProgress />
        <CursorSpotlight />
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
