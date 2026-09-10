"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, ChevronRight, Play, Calculator, Sparkles, Building2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const HeroSection: React.FC = () => {
  const tickerItems = [
    "500+ Landmark PEB & Steel Facilities Delivered Nationwide",
    "45,000 MT Annual Fabrication Capacity",
    "Up to 90m Column-Free Clear Spans",
    "25-Acre Heavy Fabrication Complex in Chakan, Pune",
    "Automated Submerged Arc Welding (SAW) Lines",
    "ISO 9001:2015, ISO 14001:2015 & ISO 45001:2018 Certified",
    "IS 800:2007 & AISC 360 Structural Engineering Compliance",
  ];

  return (
    <div className="flex flex-col w-full">
      <section className="relative min-h-[85vh] lg:min-h-[88vh] flex items-center bg-[#020F24] text-white overflow-hidden bg-blueprint-grid">
        {/* Hero Background Image with Gradient Mask */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-building.jpg"
            alt="Modern Pre-Engineered Building Industrial Facility by Yatee"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-35 lg:opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020F24] via-[#020F24]/90 to-transparent lg:w-3/4" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020F24] via-transparent to-[#020F24]/60" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10 w-full">
          <div className="max-w-3xl space-y-6">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/70 border border-blue-500/50 text-blue-200 text-xs font-bold uppercase tracking-wider backdrop-blur-md shadow-sm">
              <ShieldCheck className="w-4 h-4 text-blue-400" />
              <span>Turnkey Pre-Engineered Buildings & Heavy Structural Steel</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white font-heading">
              BUILDING <span className="text-blue-400">SPACES.</span>
              <br />
              BUILDING <span className="text-white">THE FUTURE.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-200 font-normal leading-relaxed max-w-2xl">
              Complete structural steel and pre-engineered building solutions—from 3D BIM design and automated fabrication to precision high-elevation erection. Stronger, Faster, Smarter.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                href="/get-a-quote"
                variant="primary"
                size="lg"
                showArrow
                className="bg-[#1D3A74] hover:bg-[#162E60] font-bold px-7 shadow-lg shadow-blue-950/60 text-white border-blue-600/40"
              >
                REQUEST A QUOTE
              </Button>
              <a
                href="#peb-estimator"
                className="px-5 py-3.5 bg-blue-950/80 hover:bg-[#1D3A74] text-blue-200 hover:text-white font-bold text-sm rounded-xl border border-blue-500/40 backdrop-blur-md transition-all inline-flex items-center gap-2 group shadow-sm"
              >
                <Calculator className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                <span>Calculate PEB Specs & Lead Time</span>
              </a>
              <Button
                href="/projects"
                variant="white"
                size="lg"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xs text-sm rounded-xl"
              >
                VIEW PROJECTS
              </Button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="pt-6 border-t border-slate-700/60 grid grid-cols-3 gap-4 max-w-xl text-xs sm:text-sm">
              <div className="bg-slate-900/70 border border-blue-900/50 p-3.5 rounded-2xl backdrop-blur-xs">
                <span className="block font-extrabold text-lg sm:text-xl text-white font-heading">45,000 MT</span>
                <span className="text-blue-300 text-xs">Annual Fabrication</span>
              </div>
              <div className="bg-slate-900/70 border border-blue-900/50 p-3.5 rounded-2xl backdrop-blur-xs">
                <span className="block font-extrabold text-lg sm:text-xl text-white font-heading">90m+</span>
                <span className="text-blue-300 text-xs">Clear Span Capability</span>
              </div>
              <div className="bg-slate-900/70 border border-blue-900/50 p-3.5 rounded-2xl backdrop-blur-xs">
                <span className="block font-extrabold text-lg sm:text-xl text-white font-heading">ISO Certified</span>
                <span className="text-blue-300 text-xs">9001 / 14001 / 45001</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Engineering Ticker Tape */}
      <div className="w-full bg-[#1D3A74] border-y border-blue-800/80 text-white py-2.5 overflow-hidden relative select-none shadow-sm">
        <div className="animate-marquee items-center gap-10">
          {[...tickerItems, ...tickerItems].map((text, idx) => (
            <div key={idx} className="flex items-center gap-3 text-xs sm:text-sm font-bold text-blue-100 shrink-0">
              <span className="w-2 h-2 rounded-full bg-blue-300 shrink-0" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
