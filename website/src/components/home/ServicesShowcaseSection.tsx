"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { cn } from "@/lib/utils";

export const ServicesShowcaseSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = servicesData[activeIndex];

  return (
    <section className="py-20 lg:py-28 bg-[#0B1B3D] text-white overflow-hidden bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="END-TO-END CAPABILITIES"
          title="From Engineering to Execution"
          subtitle="Integrated turnkey structural steel capabilities eliminating contractor friction and guaranteeing on-time handover."
          theme="dark"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Service Selector List (5 cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            {servicesData.map((service, idx) => {
              const isActive = idx === activeIndex;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  onMouseEnter={() => setActiveIndex(idx)}
                  className={cn(
                    "w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border select-none group",
                    isActive
                      ? "bg-[#1D3A74] text-white border-blue-500 shadow-xl scale-[1.02]"
                      : "bg-slate-900/60 text-slate-300 border-slate-800 hover:bg-slate-800/80 hover:text-white"
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "font-mono text-xs font-bold px-2 py-1 rounded shrink-0",
                        isActive ? "bg-white/20 text-white" : "bg-blue-950 text-blue-400"
                      )}
                    >
                      {service.number}
                    </span>
                    <span className="font-bold text-base sm:text-lg">{service.title}</span>
                  </div>

                  <ChevronRight
                    className={cn(
                      "w-5 h-5 transition-transform duration-200",
                      isActive ? "translate-x-1 text-white" : "text-slate-600 group-hover:text-slate-300"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Active Service Showcase Card (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-xs">
            {/* Visual Action Banner */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden border-b border-slate-800 group">
              <Image
                key={activeService.slug}
                src={activeService.featuredImage}
                alt={`${activeService.title} - Yatee Team in Action`}
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="text-xs font-mono font-bold bg-[#1D3A74]/90 backdrop-blur-md text-white px-3 py-1 rounded-full border border-blue-400/30 shadow-md">
                  Service Capability {activeService.number} of 06
                </span>
              </div>
              <div className="absolute bottom-4 left-6 right-6 z-10">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading drop-shadow-md">
                  {activeService.title}
                </h3>
                <p className="text-blue-300 text-xs sm:text-sm font-semibold mt-0.5 drop-shadow">
                  {activeService.tagline}
                </p>
              </div>
            </div>

            {/* Card Content Area */}
            <div className="p-6 sm:p-8 space-y-6 flex-1 flex flex-col justify-between">
              <div className="space-y-5">
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeService.overview}
                </p>

                {/* Core Capabilities Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                  {activeService.capabilities.slice(0, 4).map((cap, i) => (
                    <div key={i} className="bg-slate-950/60 p-3.5 rounded-xl border border-slate-800/80">
                      <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                        <span>{cap.title}</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {cap.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Link */}
              <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                <Link
                  href={`/services/${activeService.slug}`}
                  className="inline-flex items-center gap-2 text-sm font-extrabold text-white bg-[#1D3A74] hover:bg-[#162E60] px-6 py-3 rounded-xl transition-all shadow-md group border border-blue-500/30"
                >
                  <span>Full Technical Details for {activeService.title}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="text-xs text-slate-400 hover:text-white transition-colors"
                >
                  View all capabilities →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
