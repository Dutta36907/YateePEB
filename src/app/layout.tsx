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
  metadataBase: new URL("https://www.yateesteel.com"),
  alternates: { canonical: "./" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  title: {
    default: "Yatee Steel Structures | Leading PEB Manufacturer in India",
    template: "%s | Yatee Steel",
  },
  description:
    "Yatee Steel Structures is a leading PEB and heavy structural steel manufacturer in India. 22,000 MT capacity and a 6-acre Gujarat plant.",
  keywords: [
    "Pre-Engineered Buildings",
    "PEB Manufacturer India",
    "PEB Manufacturer Gujarat",
    "PEB Company Indore",
    "Industrial Shed Manufacturer",
    "Heavy Structural Steel Fabrication",
    "Prefabricated Warehouse Construction",
    "C Z Purlins Manufacturer",
    "Colour Coated Roofing Sheets",
    "Light Gauge Steel Structures",
    "LGS Framing India",
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
    url: "https://www.yateesteel.com",
    siteName: "Yatee Steel Structures Pvt Ltd",
    title: "Yatee Steel Structures | Leading PEB Manufacturer in India",
    description:
      "Engineering spaces, building the future. 22,000 MT annual manufacturing capacity across a 6-acre heavy fabrication plant in Nandasan, Gujarat. ISO 9001:2015 certified.",
    images: [
      {
        url: "/images/yatee-hero-building.jpg",
        width: 1200,
        height: 630,
        alt: "Yatee Steel Structures PEB Facility",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yatee Steel Structures | PEB & Structural Steel Manufacturer",
    description:
      "Premier Pre-Engineered Building and heavy structural steel manufacturing enterprise in India with 22,000 MT capacity.",
    images: ["/images/yatee-hero-building.jpg"],
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
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Corporation",
      name: companyDetails.name,
      alternateName: companyDetails.brandName,
      url: "https://www.yateesteel.com",
      logo: "https://www.yateesteel.com/images/yatee-hero-building.jpg",
      description:
        "Turnkey Pre-Engineered Steel Building (PEB) manufacturer, structural steel fabrication, industrial sheds, and roofing solutions in India.",
      foundingDate: "2004",
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
        availableLanguage: ["English", "Hindi"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "PEB & Structural Steel Solutions",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Pre-Engineered Building (PEB) Manufacturing & Construction",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Heavy Structural Steel Fabrication & Erection",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Turnkey Industrial Shed EPC Solutions",
            },
          },
        ],
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Yatee Steel Structures - Corporate Headquarters",
      image: "https://www.yateesteel.com/images/yatee-hero-building.jpg",
      telephone: companyDetails.contact.phone,
      email: companyDetails.contact.email,
      url: "https://www.yateesteel.com",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: companyDetails.headquarters.addressLine1,
        addressLocality: companyDetails.headquarters.city,
        addressRegion: companyDetails.headquarters.state,
        postalCode: companyDetails.headquarters.postalCode,
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:30",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Yatee Steel Structures - Gujarat Manufacturing Plant",
      image: "https://www.yateesteel.com/images/yatee-hero-building.jpg",
      telephone: companyDetails.contact.phone,
      email: companyDetails.contact.email,
      url: "https://www.yateesteel.com/about/manufacturing-infrastructure",
      priceRange: "₹₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nandasan, Kadi, Near Ahmedabad Mehsana Highway",
        addressLocality: "Kadi",
        addressRegion: "Gujarat",
        postalCode: "382705",
        addressCountry: "IN",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Yatee Steel Structures",
      url: "https://www.yateesteel.com",
    },
  ];

  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
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
