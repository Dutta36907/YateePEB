import React from "react";
import Image from "next/image";
import Link from "next/image";
import { Button } from "@/components/ui/Button";

export const CinematicBannerSection: React.FC = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-[#020F24] text-white overflow-hidden bg-blueprint-grid">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/warehouse-interior.jpg"
          alt="High-Bay Structural Steel Warehouse Framework"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#020F24] via-[#020F24]/70 to-[#020F24]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-300 bg-blue-900/60 px-4 py-1.5 rounded-full border border-blue-700/50 inline-block">
          ARCHITECTURAL EXCELLENCE
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] font-heading">
          From engineering drawings <br />
          <span className="text-blue-400">to structures that perform.</span>
        </h2>

        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Over 500 turnkey industrial facilities delivered nationwide with zero compromise on structural integrity, weather-tightness, and safety.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/about/quality-certifications" variant="secondary" size="lg" showArrow>
            OUR QUALITY STANDARDS
          </Button>
          <Button href="/get-a-quote" variant="white" size="lg" className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-xs">
            GET A PROJECT ESTIMATE
          </Button>
        </div>
      </div>
    </section>
  );
};
