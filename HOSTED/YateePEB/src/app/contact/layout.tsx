import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Indore HQ & Gujarat Plant",
  description:
    "Contact Yatee Steel Structures: headquarters in Indore, MP, a 6-acre fabrication plant in Gujarat and branches in Siliguri and Patna.",
  keywords: [
    "Contact Yatee Steel Structures",
    "PEB Manufacturer Contact Indore",
    "Steel Fabrication Factory Nandasan Gujarat",
    "PEB Supplier Siliguri Patna",
    "Yatee PEB Phone +91 90390 52643",
    "Yatee PEB Phone +91 90390 52644",
  ],
  openGraph: {
    title: "Contact Yatee Steel Structures | Corporate HQ & Manufacturing Campus",
    description:
      "Get in touch with our engineering estimators and plant directors for turnkey PEB and structural steel solutions.",
    url: "https://www.yateesteel.com/contact",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
