"use client";

import React from "react";
import { Check, X, ShieldCheck, Zap, TrendingDown, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";

export const ComparisonSection: React.FC = () => {
  const comparisonRows = [
    {
      feature: "Structural Dead Weight",
      peb: "30% – 40% lighter due to tapered I-sections matching moment stress.",
      conventional: "Heavier uniform hot-rolled sections throughout entire span.",
      benefit: "Saves up to 25% on civil foundation concrete and pile depth.",
    },
    {
      feature: "Project Delivery Schedule",
      peb: "6 to 12 weeks from design sign-off to full turnkey handover.",
      conventional: "6 to 12 months with slow on-site cutting, welding, and fabrication.",
      benefit: "50% faster commercial occupancy and accelerated revenue generation.",
    },
    {
      feature: "Column-Free Clear Span",
      peb: "Up to 90 meters (300 ft) column-free clear span width.",
      conventional: "Difficult and prohibitively costly beyond 20 to 30 meters.",
      benefit: "100% unobstructed floor area for automated racking and forklifts.",
    },
    {
      feature: "On-Site Assembly Quality",
      peb: "100% factory CNC punched and bolted with Grade 8.8 HSFG fasteners.",
      conventional: "Extensive error-prone site welding and manual torch cutting.",
      benefit: "Zero weather delays, zero field weld defects, and strict QA/QC.",
    },
    {
      feature: "Seismic & Wind Performance",
      peb: "Engineered flexibility per IS 1893 & IS 875 with ductile bolted joints.",
      conventional: "Rigid heavy mass attracts higher seismic inertial base forces.",
      benefit: "Superior resilience in high seismic zones (Zone IV & V).",
    },
    {
      feature: "Future Expansion & Modularity",
      peb: "Standard modular end-wall framing allows seamless bay extensions.",
      conventional: "Complex demolition and expensive structural modifications.",
      benefit: "Expand building length anytime without interrupting operations.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="ENGINEERING BENCHMARK"
          title="Yatee Engineered PEB vs. Conventional Steel"
          subtitle="Why leading infrastructure funds, EPCs, and industrial developers choose Pre-Engineered Building technology over conventional structural steel."
        />

        {/* Comparison Table */}
        <div className="mt-12 overflow-x-auto rounded-2xl border border-slate-200 shadow-xl bg-white">
          <table className="w-full text-left border-collapse min-w-[700px]">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50">
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-500 w-1/4">
                  Engineering Criterion
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-white bg-[#1D3A74] w-3/8">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-blue-300" />
                    <span>Yatee Pre-Engineered Building (PEB)</span>
                  </div>
                </th>
                <th className="p-5 text-xs font-bold uppercase tracking-wider text-slate-600 bg-slate-100 w-3/8">
                  Conventional Structural Steel
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                  <td className="p-5 font-bold text-slate-900 bg-slate-50/50">
                    <div>
                      <span>{row.feature}</span>
                      <span className="block text-[11px] text-[#1D3A74] font-semibold mt-0.5">
                        {row.benefit}
                      </span>
                    </div>
                  </td>
                  <td className="p-5 bg-blue-50/40 text-slate-900 font-semibold border-x border-blue-100">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{row.peb}</span>
                    </div>
                  </td>
                  <td className="p-5 text-slate-600">
                    <div className="flex items-start gap-2.5">
                      <div className="w-5 h-5 rounded-full bg-slate-200 text-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                        <X className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="leading-relaxed">{row.conventional}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-8 p-6 rounded-2xl bg-[#0B1B3D] text-white flex flex-col sm:flex-row items-center justify-between gap-4 bg-blueprint-grid border border-blue-900 shadow-md">
          <div>
            <h4 className="text-base font-bold font-heading">
              Ready to value-engineer your upcoming facility?
            </h4>
            <p className="text-xs text-blue-200 mt-0.5">
              Send us your architectural drawings for a free structural steel optimization audit.
            </p>
          </div>
          <Button
            href="/get-a-quote"
            variant="primary"
            size="md"
            showArrow
            className="shrink-0 bg-[#1D3A74] hover:bg-[#162E60] text-white font-extrabold rounded-xl"
          >
            REQUEST FREE OPTIMIZATION AUDIT
          </Button>
        </div>
      </div>
    </section>
  );
};
