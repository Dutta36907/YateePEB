import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Executed PEB & Structural Steel Projects Portfolio | Yatee Steel",
  description:
    "Explore Yatee's nationwide portfolio of 100+ landmark Pre-Engineered Buildings, heavy industrial manufacturing plants, automated logistics parks, and cold storage facilities.",
  keywords: [
    "PEB Projects Portfolio India",
    "Completed Industrial Sheds",
    "Structural Steel Case Studies",
    "Warehouse Construction Portfolio",
    "Yatee Delivered Projects",
  ],
  openGraph: {
    title: "Executed PEB & Structural Steel Projects | Yatee Steel Structures",
    description:
      "100+ delivered industrial projects spanning heavy manufacturing, logistics parks, and commercial complexes.",
    url: "https://yateesteel.com/projects",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
