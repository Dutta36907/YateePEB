import React from "react";
import Link from "next/link";
import { ArrowRight, Factory, Warehouse, Building2, Landmark, Snowflake, Network } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industriesData } from "@/data/industries";
import { Button } from "@/components/ui/Button";

export const IndustriesGridSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    "industrial-manufacturing": <Factory className="w-6 h-6" />,
    "warehousing-logistics": <Warehouse className="w-6 h-6" />,
    "commercial": <Building2 className="w-6 h-6" />,
    "institutional": <Landmark className="w-6 h-6" />,
    "cold-storage": <Snowflake className="w-6 h-6" />,
    "infrastructure": <Network className="w-6 h-6" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
              APPLICATIONS & SECTORS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Built for Diverse Industries
            </h2>
          </div>
          <Button href="/industries" variant="outline" size="md" showArrow className="shrink-0">
            Explore All Sectors
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industriesData.map((ind, idx) => (
            <Link
              key={idx}
              href={`/industries/${ind.slug}`}
              className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#1D3A74]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-5 group-hover:bg-[#1D3A74] group-hover:text-white transition-colors duration-300">
                  {iconMap[ind.slug] || <Factory className="w-6 h-6" />}
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug">
                  {ind.title}
                </h3>

                <p className="mt-2 text-xs font-bold text-blue-600 line-clamp-1">
                  {ind.tagline}
                </p>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {ind.shortDescription}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-600 transition-colors">
                <span>View Typical Spans & Specs</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
