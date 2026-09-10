import React from "react";
import { Clock, TrendingDown, ShieldCheck, Maximize, Leaf, Award } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { advantagesList } from "@/data/company";

export const AdvantagesSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Clock: <Clock className="w-6 h-6 text-blue-600" />,
    TrendingDown: <TrendingDown className="w-6 h-6 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    Maximize: <Maximize className="w-6 h-6 text-blue-600" />,
    Leaf: <Leaf className="w-6 h-6 text-blue-600" />,
    Award: <Award className="w-6 h-6 text-blue-600" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="WHY CHOOSE US"
          title="Engineered Advantages That Build Better"
          subtitle="Precision engineering, lighter dead-loads, faster schedules, and long-term durability designed into every structural steel system."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {advantagesList.map((adv, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-blue-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#1D3A74] group-hover:text-white transition-colors duration-300">
                    {iconMap[adv.icon] || <ShieldCheck className="w-6 h-6" />}
                  </div>
                  <span className="font-mono text-xs font-black text-slate-300 group-hover:text-blue-600 transition-colors">
                    {adv.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug">
                  {adv.title}
                </h3>

                <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                  {adv.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-2 text-xs font-bold text-blue-600 group-hover:text-[#1D3A74] transition-colors">
                <span>Certified Standard Specification</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
