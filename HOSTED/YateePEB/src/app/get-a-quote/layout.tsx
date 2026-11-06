import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a PEB Cost Estimate & Quotation",
  description:
    "Request a quick cost estimate for pre-engineered buildings, industrial sheds and heavy steel. Share your width, length and crane needs.",
  keywords: [
    "PEB Cost Estimator",
    "Pre-Engineered Building Price per Sq Ft",
    "Industrial Shed Quotation India",
    "PEB Cost Calculator",
    "Structural Steel Tonnage Estimation",
  ],
  openGraph: {
    title: "Get a PEB Cost Estimate & Technical Quotation | Yatee Steel",
    description:
      "Calculate your steel building dimensions, crane requirements, and budget with our interactive engineering estimator.",
    url: "https://www.yateesteel.com/get-a-quote",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function GetAQuoteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
