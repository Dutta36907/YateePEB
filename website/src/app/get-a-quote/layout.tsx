import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a PEB Cost Estimate & Technical Quotation | Yatee Steel",
  description:
    "Request an instant techno-commercial cost estimate for Pre-Engineered Buildings, industrial sheds, and heavy structural steel. Input your building width, length, and crane requirements.",
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
    url: "https://yateesteel.com/get-a-quote",
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
