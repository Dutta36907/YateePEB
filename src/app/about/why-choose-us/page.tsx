import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { advantagesList } from "@/data/company";
import { Clock, TrendingDown, ShieldCheck, Maximize, Leaf, Award, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Why Choose Yatee | Engineered Advantages in PEB Construction",
  description:
    "Discover why leading industrial corporations choose Yatee: In-house Tekla 3D engineering, 22,000 MT fabrication throughput, 40% faster schedules, and up to 30% capital savings.",
  keywords: [
    "Why Choose Yatee PEB",
    "PEB Advantages India",
    "Turnkey PEB Contractor Benefits",
    "Pre-Engineered vs Conventional Steel",
    "Cost Optimized Steel Construction",
  ],
  openGraph: {
    title: "Why Choose Yatee Steel Structures | Engineered Advantages",
    description:
      "40-50% faster construction, 30% steel weight savings, column-free clear spans up to 90m, and ISO 9001:2015 certified fabrication.",
    url: "https://yateesteel.com/about/why-choose-us",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function WhyChooseUsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Why Choose Us", url: "/about/why-choose-us" },
  ]);

  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-8 h-8 text-blue-600" />,
    TrendingDown: <TrendingDown className="w-8 h-8 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-blue-600" />,
    Maximize: <Maximize className="w-8 h-8 text-blue-600" />,
    Leaf: <Leaf className="w-8 h-8 text-blue-600" />,
    Award: <Award className="w-8 h-8 text-blue-600" />,
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge="ENGINEERED ADVANTAGES"
        title="Why Industry Leaders Choose Yatee"
        subtitle="We combine advanced 3D structural engineering, 22,000 MT automated manufacturing capacity, and certified on-site rigging to deliver superior projects faster and more cost-effectively."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Why Choose Us" },
        ]}
        backgroundImage="/images/yatee-hero-slide-1.jpg"
      />

      {/* 6 Core Advantages Detailed */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="VALUE PROPOSITION"
            title="The Yatee Engineering Advantage"
            subtitle="Explore how our off-site pre-engineering methodology creates substantial financial and operational value for your facility."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantagesList.map((adv, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                      {iconMap[adv.icon] || <ShieldCheck className="w-8 h-8 text-blue-600" />}
                    </div>
                    <span className="text-sm font-mono font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                      {adv.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {adv.title}
                  </h3>

                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center gap-2 text-xs font-bold text-blue-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  <span>Guaranteed Code Compliance</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison: Yatee PEB vs Conventional Steel */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="HEAD-TO-HEAD COMPARISON"
            title="Yatee PEB vs. Conventional Construction"
            subtitle="A clear side-by-side analysis of delivery timelines, structural weight, cost predictability, and quality control."
          />

          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-[#1D3A74] text-white">
                  <tr>
                    <th className="px-6 py-4 font-bold">Evaluation Parameter</th>
                    <th className="px-6 py-4 font-bold text-blue-200">Yatee Pre-Engineered Buildings</th>
                    <th className="px-6 py-4 font-bold text-slate-300">Conventional Steel / Concrete</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    { param: "Construction Schedule", yatee: "40% to 50% Faster (Erection in 8–16 weeks)", conv: "Slow (9 to 18 months, weather prone)" },
                    { param: "Structural Steel Weight", yatee: "Optimized tapered plates (Up to 30% lighter)", conv: "Heavy standard hot-rolled I-sections" },
                    { param: "Foundation Costs", yatee: "Shallow, lighter concrete foundations needed", conv: "Heavy massive deep pile/raft foundations" },
                    { param: "Clear Span Width", yatee: "Up to 90m+ column-free clear spans", conv: "Limited spans (requires columns every 9–12m)" },
                    { param: "Quality Control", yatee: "100% Automated factory SAW welding & NDT checks", conv: "Manual on-site welding subject to defects" },
                    { param: "Future Expandability", yatee: "Simple modular longitudinal extension", conv: "Difficult and disruptive structural demolition" },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/40 transition-colors">
                      <td className="px-6 py-4 font-bold text-slate-900">{row.param}</td>
                      <td className="px-6 py-4 text-[#1D3A74] font-semibold bg-blue-50/30">{row.yatee}</td>
                      <td className="px-6 py-4 text-slate-500">{row.conv}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href="/get-a-quote" variant="primary" size="lg" showArrow>
              Calculate Your Project Savings
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
