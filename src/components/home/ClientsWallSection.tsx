import React from "react";
import { clientLogos } from "@/data/certifications";

export const ClientsWallSection: React.FC = () => {
  return (
    <section className="py-16 bg-[#F8FAFC] border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-2">
            TRUSTED BY INDUSTRY LEADERS
          </span>
          <p className="text-slate-600 text-sm">
            Partnering with India&apos;s foremost industrial conglomerates, logistics park developers, and EPC enterprises.
          </p>
        </div>

        {/* Quiet Monochrome Client Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {clientLogos.map((client, idx) => (
            <div
              key={idx}
              className="bg-white border border-slate-200/80 rounded-xl p-4 sm:p-5 flex flex-col items-center justify-center text-center hover:border-[#1D3A74]/40 hover:shadow-md transition-all duration-300 group"
            >
              <span className="font-extrabold text-sm sm:text-base tracking-wider text-slate-500 group-hover:text-[#1D3A74] transition-colors font-heading uppercase">
                {client.logoText}
              </span>
              <span className="text-[10px] text-slate-400 mt-1 block truncate max-w-full">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
