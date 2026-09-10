import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

const highlights = [
  "45,000 MT annual fabrication throughput across automated SAW beam lines",
  "Advanced 3D BIM structural modeling with STAAD.Pro and Tekla Structures",
  "Certified ISO 9001:2015, ISO 14001:2015, and ISO 45001:2018 execution",
  "Turnkey design-build capability from civil foundations to final commissioning",
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "18+", label: "Years of Excellence" },
  { value: "22", label: "States Covered" },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Outer container — strict equal-height columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">

          {/* ── LEFT: Text panel ── */}
          <div className="flex flex-col justify-between bg-white px-10 py-12 lg:px-14 lg:py-14 border-r border-slate-200">

            {/* Top block */}
            <div className="space-y-6">
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.22em] bg-[#EEF2FF] text-[#1D3A74] px-4 py-1.5 rounded-full border border-[#C7D2FE]">
                Who We Are
              </span>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl xl:text-[2.5rem] font-extrabold text-[#0F172A] leading-[1.15] tracking-tight font-heading">
                Engineering smarter steel buildings for{" "}
                <span className="text-[#1D3A74]">modern industry.</span>
              </h2>

              {/* Body */}
              <p className="text-slate-600 text-base sm:text-[17px] leading-relaxed">
                Yatee Steel Structures Pvt Ltd is an integrated engineering,
                fabrication, and construction company delivering complete
                Pre-Engineered Buildings, structural steelwork, and standing
                seam roof systems with unmatched precision across India.
              </p>

              {/* Bullet points */}
              <ul className="space-y-3 pt-1">
                {highlights.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#1D3A74] shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-[15px] font-semibold text-slate-700 leading-snug">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom block — stats + CTAs */}
            <div className="pt-10 space-y-7">
              {/* Stats row */}
              <div className="flex items-center gap-8 border-t border-slate-100 pt-7">
                {stats.map(({ value, label }, i) => (
                  <div key={i} className="text-center">
                    <p className="text-2xl sm:text-3xl font-extrabold text-[#1D3A74] leading-none">
                      {value}
                    </p>
                    <p className="text-xs text-slate-500 font-semibold mt-1 leading-tight whitespace-nowrap">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex items-center gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-[#1D3A74] hover:bg-[#162E60] text-white text-sm font-bold px-6 py-3 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg group"
                >
                  Discover Our Company
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about/manufacturing-infrastructure"
                  className="inline-flex items-center gap-2 text-[#1D3A74] hover:text-[#162E60] text-sm font-bold border border-[#1D3A74]/30 hover:border-[#1D3A74] px-5 py-3 rounded-xl transition-all duration-200"
                >
                  View Infrastructure
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Image panel ── */}
          <div className="relative min-h-[480px] lg:min-h-0 overflow-hidden bg-slate-200">
            <Image
              src="/images/factory-plant.jpg"
              alt="Yatee Steel Fabrication Facility — SAW Welding Bay"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />

            {/* Dark gradient at bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* ISO Certified badge — top right */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm text-[#1D3A74] rounded-2xl px-4 py-3 shadow-lg border border-slate-200">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-0.5">
                Triple Certified
              </p>
              <p className="text-sm font-extrabold leading-tight text-[#1D3A74]">
                ISO 9001 · 14001 · 45001
              </p>
            </div>

            {/* Bottom info strip */}
            <div className="absolute bottom-0 left-0 right-0 px-8 py-6 flex items-end justify-between">
              <div>
                <p className="text-[10px] uppercase font-bold text-blue-300 tracking-widest mb-0.5">
                  Manufacturing Base
                </p>
                <p className="text-base sm:text-lg font-extrabold text-white leading-tight">
                  25-Acre Chakan Plant, Pune
                </p>
              </div>
              <div className="text-right">
                <p className="text-[10px] uppercase font-bold text-blue-300 tracking-widest mb-0.5">
                  Covered Bays
                </p>
                <p className="text-base sm:text-lg font-extrabold text-white leading-tight">
                  250,000+ Sq. Ft.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
