import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PEB & Structural Steel Projects Portfolio",
  description:
    "Yatee's portfolio of 100+ PEB projects: manufacturing plants, logistics parks, cold storage and commercial complexes across India.",
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
    url: "https://www.yateesteel.com/projects",
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
