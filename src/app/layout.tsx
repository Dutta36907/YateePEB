import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { companyDetails } from "@/data/company";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yateesteel.com"),
  title: {
    default: "Yatee Steel Structures | Pre-Engineered Buildings (PEB) & Industrial Steel",
    template: "%s | Yatee Steel Structures",
  },
  description:
    "Yatee Steel Structures Pvt Ltd is a premier Pre-Engineered Building (PEB) and heavy structural steel manufacturer in India with 45,000 MT annual capacity. Turnkey industrial sheds, warehouses, and steel structures.",
  keywords: [
    "Pre-Engineered Buildings",
    "PEB Manufacturer",
    "Industrial Sheds",
    "Structural Steel Fabrication",
    "Warehouse Construction",
    "C Z Purlins",
    "Roofing Sheets",
    "PUFF Panels",
    "Turnkey Steel Solutions",
    "Yatee Steel Structures",
  ],
  authors: [{ name: "Yatee Steel Structures Pvt Ltd" }],
  creator: "Yatee Steel Structures",
  publisher: "Yatee Steel Structures Pvt Ltd",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://yateesteel.com",
    siteName: "Yatee Steel Structures Pvt Ltd",
    title: "Yatee Steel Structures | Pre-Engineered Buildings (PEB) & Industrial Steel",
    description:
      "Engineering spaces, building the future. 45,000 MT annual manufacturing capacity across 250,000 sq. ft. of heavy fabrication bays in Chakan, Pune.",
    images: [
      {
        url: "/images/hero-building.jpg",
        width: 1200,
        height: 630,
        alt: "Yatee Steel Structures PEB Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatee Steel Structures | PEB & Structural Steel",
    description:
      "Premier Pre-Engineered Building and heavy structural steel manufacturing enterprise in India.",
    images: ["/images/hero-building.jpg"],
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: companyDetails.name,
    alternateName: companyDetails.brandName,
    url: "https://yateesteel.com",
    logo: "https://yateesteel.com/images/hero-building.jpg",
    description:
      "Turnkey Pre-Engineered Steel Building (PEB) manufacturer, structural steel fabrication, industrial sheds, and roofing solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: companyDetails.headquarters.addressLine1,
      addressLocality: companyDetails.headquarters.city,
      addressRegion: companyDetails.headquarters.state,
      postalCode: companyDetails.headquarters.postalCode,
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: companyDetails.contact.phone,
      contactType: "customer service",
      email: companyDetails.contact.email,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
  };

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900 selection:bg-[#1D3A74] selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
