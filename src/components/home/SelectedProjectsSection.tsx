"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, MapPin, Calendar } from "lucide-react";
import { projectsData } from "@/data/projects";
import { Button } from "@/components/ui/Button";

export const SelectedProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "All Landmark Projects" },
    { id: "logistics", label: "Mega Logistics" },
    { id: "auto", label: "Automobile & Heavy" },
    { id: "pharma", label: "Pharma Cold Chain" },
    { id: "process", label: "Process & Food" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    const ind = p.industry.toLowerCase();
    if (activeFilter === "logistics") return ind.includes("warehousing") || ind.includes("logistics");
    if (activeFilter === "auto") return ind.includes("industrial") || ind.includes("auto") || p.slug.includes("auto");
    if (activeFilter === "pharma") return ind.includes("cold") || ind.includes("pharma") || p.slug.includes("pharma");
    if (activeFilter === "process") return ind.includes("fmcg") || ind.includes("chemical") || p.slug.includes("chemical") || p.slug.includes("fmcg");
    return true;
  });

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
              SELECTED PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Structures Engineered for Real-World Performance
            </h2>
          </div>
          <Button href="/projects" variant="primary" size="md" showArrow className="shrink-0">
            Explore All Projects ({projectsData.length})
          </Button>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 select-none no-scrollbar">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-bold rounded-xl whitespace-nowrap transition-all border ${
                activeFilter === tab.id
                  ? "bg-[#1D3A74] text-white border-[#1D3A74] shadow-md scale-[1.02]"
                  : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Asymmetric 2x2 Grid with Rich Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.slice(0, 4).map((proj, idx) => (
            <Link
              key={idx}
              href={`/projects/${proj.slug}`}
              className="bg-white rounded-2xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#1D3A74]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Card Header & Visual Meta */}
              <div className="p-7 sm:p-8 space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D3A74] px-3 py-1 rounded-md border border-blue-100">
                    {proj.industry}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>Completed {proj.completionYear}</span>
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                  {proj.title}
                </h3>

                <p className="text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                  <span>{proj.location}</span>
                </p>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-2">
                  {proj.overview}
                </p>
              </div>

              {/* Spec Strip */}
              <div className="px-7 sm:px-8 py-4 bg-slate-50 border-t border-slate-100 grid grid-cols-3 gap-2 text-center text-xs">
                <div>
                  <span className="block font-black text-slate-900 font-heading text-sm">
                    {new Intl.NumberFormat("en-IN").format(proj.builtUpAreaSqFt)}
                  </span>
                  <span className="text-slate-500 text-[11px]">Sq. Ft. Area</span>
                </div>
                <div>
                  <span className="block font-black text-slate-900 font-heading text-sm">
                    {proj.steelTonnageMT} MT
                  </span>
                  <span className="text-slate-500 text-[11px]">Steel Tonnage</span>
                </div>
                <div>
                  <span className="block font-black text-slate-900 font-heading text-sm">
                    {proj.clearHeightMeters}m
                  </span>
                  <span className="text-slate-500 text-[11px]">Clear Height</span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-7 sm:px-8 py-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-[#1D3A74]">
                <span>View Complete Engineering Case Study</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
