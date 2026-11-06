import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Super Admin Portal | Yatee PEB",
  description: "Secure administrative management console",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SuperAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#070D18] text-slate-100 antialiased selection:bg-[#F26522] selection:text-white">
      {children}
    </div>
  );
}
