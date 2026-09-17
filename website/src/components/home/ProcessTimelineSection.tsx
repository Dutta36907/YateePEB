import React from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { processSteps } from "@/data/company";

export const ProcessTimelineSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="OUR PROCESS"
          title="One Integrated Process. Concept to Completion."
          subtitle="A synchronized eight-stage execution workflow designed for predictable timelines, certified safety, and zero on-site modifications."
        />

        {/* 8-Step Grid / Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {processSteps.map((step, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-6 relative hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D3A74] font-mono font-black text-sm flex items-center justify-center group-hover:bg-[#1D3A74] group-hover:text-white transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400">
                    Phase 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-[11px] font-semibold text-blue-600">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                <span>Standard Milestone QA Gate</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
