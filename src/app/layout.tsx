import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#D77544",
};

export const metadata: Metadata = {
  title: {
    default: "AVENIX — Enterprise Automation Systems & Digital Infrastructure",
    template: "%s | AVENIX",
  },
  description: "AVENIX designs and implements enterprise automation systems and digital infrastructure built for control, scalability, and long-term operations.",
  keywords: [
    // Core Semantics (Head)
    "enterprise automation systems",
    "business automation infrastructure",
    "automation systems architecture",
    // Middle-tail
    "scalable automation systems",
    "AI-powered business systems",
    "automation infrastructure for companies",
    // Authority
    "AVENIX",
    "Avenix Intelligence",
  ],
  authors: [{ name: "AVENIX" }],
  creator: "AVENIX",
  publisher: "AVENIX",
  metadataBase: new URL("https://avenix.org"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://avenix.org",
    siteName: "AVENIX — Enterprise Automation Systems",
    title: "AVENIX — Enterprise Automation Systems & Digital Infrastructure",
    description: "AVENIX designs and implements enterprise automation systems and digital infrastructure built for control, scalability, and long-term operations.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AVENIX - Enterprise Automation Systems",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVENIX — Enterprise Automation Systems",
    description: "Infrastructure focused on efficiency, integration, and operational clarity.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://avenix.org",
  },
  category: "technology",
};

import StarBackground from "@/components/StarBackground";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} relative font-sans`}>
        <StarBackground />

        {/* Schema.org Structured Data: Global Authority + Proprietary System */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "AVENIX",
                "url": "https://avenix.org",
                "logo": "https://avenix.org/logo.png",
                "image": "https://avenix.org/og-image.png",
                "description": "Enterprise automation systems and digital infrastructure company",
                "areaServed": "Global",
                "sameAs": [
                  "https://www.linkedin.com/in/avenix-lda-bb0615399/",
                  "https://www.instagram.com/avenix.ia/"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "SoftwareApplication",
                "name": "AVENIX System",
                "applicationCategory": "BusinessApplication",
                "operatingSystem": "Cloud",
                "offers": {
                  "@type": "Offer",
                  "price": "0",
                  "priceCurrency": "USD"
                }
              }
            ])
          }}
        />

        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
