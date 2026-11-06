import React from "react";
import Link from "next/link";
import { Award, ShieldCheck, Leaf, CheckCircle2, Sun, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certificationsData } from "@/data/certifications";

export const QualityCertSection: React.FC = () => {
  const iconMap: Record<string, React.ReactNode> = {
    Award: <Award className="w-8 h-8 text-blue-600" />,
    Leaf: <Leaf className="w-8 h-8 text-emerald-600" />,
    ShieldCheck: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    CheckCircle2: <CheckCircle2 className="w-8 h-8 text-blue-600" />,
    Sun: <Sun className="w-8 h-8 text-amber-500" />,
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
              QUALITY & CERTIFICATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Quality Built Into Every Structure
            </h2>
          </div>
          <Link
            href="/about/quality-certifications"
            className="text-sm font-bold text-blue-600 hover:text-[#1D3A74] inline-flex items-center gap-1.5"
          >
            <span>View Quality Workflow & Audits</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {certificationsData.map((cert, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 text-center flex flex-col items-center justify-between hover:bg-white hover:border-[#1D3A74]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-white shadow-xs border border-slate-200 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {iconMap[cert.iconName] || <Award className="w-8 h-8 text-blue-600" />}
                </div>

                <span className="text-[10px] uppercase font-bold tracking-wider text-[#1D3A74] bg-blue-50 px-2.5 py-1 rounded block w-fit mx-auto mb-2">
                  {cert.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-tight">
                  {cert.name}
                </h3>

                <p className="mt-2 text-xs text-slate-500 leading-relaxed line-clamp-3">
                  {cert.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/80 w-full text-[11px] text-slate-400 font-medium">
                <span>Audited Annually</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
