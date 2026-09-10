import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industriesData } from "@/data/industries";
import { ArrowRight, Factory, Warehouse, Building2, Landmark, Snowflake, Network, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Industries & Sectors Served | Yatee Steel Structures",
  description:
    "Discover Yatee's specialized structural steel and PEB solutions for Industrial Manufacturing, Warehousing & Logistics, Commercial, Institutional, Cold Storage, and Public Infrastructure.",
};

export default function IndustriesPage() {
  const iconMap: Record<string, React.ReactNode> = {
    "industrial-manufacturing": <Factory className="w-8 h-8 text-blue-600" />,
    "warehousing-logistics": <Warehouse className="w-8 h-8 text-blue-600" />,
    "commercial": <Building2 className="w-8 h-8 text-blue-600" />,
    "institutional": <Landmark className="w-8 h-8 text-blue-600" />,
    "cold-storage": <Snowflake className="w-8 h-8 text-blue-600" />,
    "infrastructure": <Network className="w-8 h-8 text-blue-600" />,
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="TAILORED INDUSTRY SOLUTIONS"
        title="Engineered for Diverse Sectors"
        subtitle="Sector-specific structural steel engineering tailored for heavy machinery vibrations, high-density logistics racking, cleanroom climate control, and monumental clear spans."
        breadcrumbs={[{ label: "Industries" }]}
        stats={[
          { label: "Sectors Covered", value: "6 Major Verticals" },
          { label: "Max Clear Span", value: "90m+ Column-Free" },
          { label: "Crane Integration", value: "Up to 100 MT" },
          { label: "Thermal Rating", value: "-40°C to +25°C" },
        ]}
      />

      {/* Industry Verticals Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="SECTOR VERTICALS"
            title="Custom Steel Building Solutions by Industry"
            subtitle="Explore how our design bureau addresses the unique operational demands, floor loadings, and environmental conditions of your industry."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industriesData.map((ind, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:bg-[#1D3A74] group-hover:text-white transition-colors duration-300">
                    {iconMap[ind.slug] || <Factory className="w-8 h-8 text-blue-600" />}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {ind.title}
                  </h3>

                  <p className="text-xs font-bold text-blue-600 mt-1">
                    {ind.tagline}
                  </p>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {ind.shortDescription}
                  </p>

                  <div className="mt-6 pt-5 border-t border-slate-200/80 space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                      Key Highlights
                    </span>
                    {ind.typicalSpansAndSpecs.slice(0, 2).map((spec, i) => (
                      <div key={i} className="flex items-center justify-between text-xs">
                        <span className="text-slate-500 font-medium">{spec.label}:</span>
                        <span className="font-bold text-slate-800 font-mono">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-[#1D3A74] group-hover:text-blue-600 transition-colors"
                  >
                    <span>Explore Sector Solutions</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
