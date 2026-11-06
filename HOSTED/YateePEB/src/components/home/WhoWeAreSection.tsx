import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, Award, Globe2, Zap } from "lucide-react";

const pillars = [
  {
    icon: TrendingUp,
    label: "22,000 MT / Year",
    sub: "Fabrication Throughput",
  },
  {
    icon: Award,
    label: "ISO 9001 · 14001 · 45001",
    sub: "Triple Certified",
  },
  {
    icon: Globe2,
    label: "22 States",
    sub: "Pan-India Delivery",
  },
  {
    icon: Zap,
    label: "40% Faster",
    sub: "vs. Conventional Build",
  },
];

export const WhoWeAreSection: React.FC = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Top header row ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.25em] text-[#1D3A74] mb-4">
              <span className="w-8 h-[2px] bg-[#1D3A74] inline-block" />
              Who We Are
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] leading-[1.12] tracking-tight font-heading">
              Engineering smarter steel
              <br />
              <span className="text-[#1D3A74]">buildings for modern industry.</span>
            </h2>
          </div>
          <p className="text-slate-500 text-base leading-relaxed max-w-sm md:text-right">
            Yatee Steel Structures Pvt Ltd — an integrated engineering, fabrication,
            and turnkey construction company delivering PEB systems across India
            since 2006.
          </p>
        </div>

        {/* ── Main body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* Image — spans 7 cols */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-slate-200 min-h-[420px] lg:min-h-[520px]">
            <Image
              src="/images/factory-plant.jpg"
              alt="Yatee Steel Manufacturing Facility"
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              priority
            />
            {/* Dark gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1827]/80 via-[#0B1827]/20 to-transparent" />

            {/* Bottom-left label */}
            <div className="absolute bottom-6 left-6">
              <p className="text-[10px] uppercase font-bold tracking-widest text-blue-300 mb-0.5">
                Manufacturing Base
              </p>
              <p className="text-xl font-extrabold text-white">6-Acre Plant, Nandasan, Gujarat</p>
              <p className="text-sm text-slate-300 font-medium mt-0.5">Heavy Fabrication & Automated SAW Bays</p>
            </div>

            {/* Top-right certified chip */}
            <div className="absolute top-5 right-5 bg-white text-[#1D3A74] rounded-xl px-4 py-2.5 shadow-lg">
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Certified</p>
              <p className="text-sm font-extrabold">ISO 9001 · 14001 · 45001</p>
            </div>
          </div>

          {/* Right column — 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-5">

            {/* Description card */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8 border border-slate-200 flex-1">
              <p className="text-slate-700 text-base leading-relaxed mb-8">
                We deliver complete Pre-Engineered Buildings, structural
                steelwork, and standing seam roof systems — engineered with
                3D BIM precision using STAAD.Pro and Tekla Structures, and
                built under strict ISO quality protocols.
              </p>

              {/* Key capabilities list */}
              <ul className="space-y-4">
                {[
                  "Automated SAW beam line fabrication",
                  "Turnkey from foundations to commissioning",
                  "Advanced 3D BIM structural modeling",
                  "IS 800 · IS 1893 · IS 875 compliant design",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#1D3A74]/10 text-[#1D3A74] flex items-center justify-center text-[10px] font-extrabold shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA card */}
            <div className="bg-[#1D3A74] rounded-2xl p-7 flex items-center justify-between gap-4">
              <div>
                <p className="text-white font-extrabold text-base leading-snug">
                  100+ Landmark Projects.<br />20+ Years. Across India.
                </p>
                <p className="text-blue-300 text-xs mt-1 font-medium">
                  Trusted by India's largest industrial groups.
                </p>
              </div>
              <Link
                href="/about"
                className="shrink-0 inline-flex items-center gap-2 bg-white text-[#1D3A74] hover:bg-blue-50 text-sm font-extrabold px-5 py-3 rounded-xl transition-all duration-200 group whitespace-nowrap"
              >
                Our Story
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

          </div>
        </div>

        {/* ── Bottom pillars strip ── */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map(({ icon: Icon, label, sub }, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-[#F8FAFC] border border-slate-200 rounded-2xl px-6 py-5 hover:border-[#1D3A74]/30 hover:bg-white hover:shadow-md transition-all duration-200"
            >
              <span className="shrink-0 w-10 h-10 rounded-xl bg-[#1D3A74]/8 text-[#1D3A74] flex items-center justify-center">
                <Icon className="w-5 h-5" />
              </span>
              <div>
                <p className="text-sm font-extrabold text-[#0F172A] leading-snug">{label}</p>
                <p className="text-xs text-slate-500 font-medium mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
