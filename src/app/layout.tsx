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
import { organizationSchema, websiteSchema } from "@/lib/schema";

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
    default: `${siteConfig.name} — Web & App Development, AI Automation & Digital Marketing`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "software agency",
    "web development",
    "app development",
    "AI automation agency",
    "digital marketing agency",
    "SEO agency",
  ],
  authors: [{ name: siteConfig.name }],
  robots: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large", "max-video-preview": -1 } as never,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.domain,
    title: `${siteConfig.name} — Web & App Development, AI Automation & Digital Marketing`,
    description: siteConfig.description,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Web & App Development, AI Automation & Digital Marketing`,
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
    <html lang="en" className={`${sora.variable} ${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PR5ZTLJJ');`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema]) }}
        />
        <script
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
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
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
