import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text & Value (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-4 py-1.5 rounded-full border border-blue-200/80">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15] font-heading">
              Engineering smarter steel buildings for modern industry.
            </h2>

            <p className="text-slate-700 text-base sm:text-lg leading-relaxed font-normal">
              Yatee Steel Structures Pvt Ltd is an integrated engineering, fabrication, and structural construction company. Delivering complete Pre-Engineered Buildings (PEB), structural steelwork, and standing seam roof systems with unmatched structural precision across India.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "45,000 MT annual fabrication throughput across automated SAW beam lines",
                "Advanced 3D BIM structural modeling with STAAD.Pro and Tekla Structures",
                "Certified ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 execution",
                "Turnkey design-build capability from civil foundations to final commissioning",
              ].map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#1D3A74] shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-bold text-slate-800">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="/about" variant="primary" size="md" showArrow>
                Discover Our Company
              </Button>
              <Button href="/about/manufacturing-infrastructure" variant="outline" size="md">
                View Infrastructure
              </Button>
            </div>
          </div>

          {/* Right Image Composition (6 cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-4/3 group">
              <Image
                src="/images/factory-plant.jpg"
                alt="Yatee Steel Fabrication Facility and SAW Welding Bay"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 text-white p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase font-bold text-blue-300 block">Manufacturing Base</span>
                  <p className="text-sm font-extrabold text-white">25-Acre Chakan Plant, Pune</p>
                </div>
                <div className="text-right">
                  <span className="text-xs uppercase font-bold text-blue-300 block">Covered Bays</span>
                  <p className="text-sm font-extrabold text-white">250,000+ Sq. Ft.</p>
                </div>
              </div>
            </div>

            {/* Accent backdrop element */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-3xl -z-10 hidden sm:block" />
          </div>
        </div>
      </div>
    </section>
  );
};
