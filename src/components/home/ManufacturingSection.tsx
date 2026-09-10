import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Factory, Cpu, Flame, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const ManufacturingSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#020F24] text-white overflow-hidden relative border-t border-blue-950 bg-blueprint-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual & Stats (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-blue-900/60 shadow-2xl aspect-16/10 group">
              <Image
                src="/images/factory-plant.jpg"
                alt="Yatee 25-Acre Heavy Fabrication Facility in Chakan, Pune"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020F24] via-transparent to-transparent" />
            </div>

            {/* Factual Plant Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-900/40">
                <span className="text-xl sm:text-2xl font-black text-white block font-heading">45,000 MT</span>
                <span className="text-xs text-blue-300">Annual Fabrication</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-900/40">
                <span className="text-xl sm:text-2xl font-black text-white block font-heading">25 Acres</span>
                <span className="text-xs text-blue-300">Industrial Land Base</span>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-900/40">
                <span className="text-xl sm:text-2xl font-black text-white block font-heading">250,000+</span>
                <span className="text-xs text-blue-300">Sq. Ft. Shop Area</span>
              </div>
            </div>
          </div>

          {/* Right Text & Machine Capabilities (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-900/60 text-blue-300 px-3.5 py-1.5 rounded border border-blue-700/50">
                MANUFACTURING EXCELLENCE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-[1.15] font-heading">
              Precision engineered. <br />
              <span className="text-blue-400">Manufactured at scale.</span>
            </h2>

            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Our 25-acre manufacturing complex in Chakan, Pune is equipped with modern heavy fabrication technology. By eliminating subcontracting dependencies, we guarantee complete metallurgical traceability and strict dimensional control.
            </p>

            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Flame className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Automated Submerged Arc Welding (SAW)</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Heavy 4-head automatic beam welders producing continuous, deep-penetration fillet welds up to 2500mm web depth.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Cpu className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">CNC High-Definition Plasma Cutting</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Multi-axis computerized plate nesting and beveling ensuring exact pin-to-pin alignment and zero on-site hole reaming.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                <Sparkles className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Centrifugal Shot Blasting to SA 2.5</h4>
                  <p className="text-xs text-slate-400 mt-0.5">Automated 8-wheel abrasive shot blasting removing all rust and mill scale before airless epoxy primer application.</p>
                </div>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Button href="/about/manufacturing-infrastructure" variant="secondary" size="md" showArrow>
                Explore Manufacturing Facility
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
