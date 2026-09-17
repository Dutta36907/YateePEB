"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { projectsData } from "@/data/projects";
import { ArrowRight, MapPin, Calendar, Building, Filter, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export default function ProjectsPage() {
  const [selectedStatus, setSelectedStatus] = useState<string>("All");
  const [selectedIndustry, setSelectedIndustry] = useState<string>("All");

  const industries = ["All", ...Array.from(new Set(projectsData.map((p) => p.industry)))];

  const filteredProjects = projectsData.filter((p) => {
    const matchesStatus =
      selectedStatus === "All" || p.status === selectedStatus;
    const matchesIndustry =
      selectedIndustry === "All" || p.industry === selectedIndustry;
    return matchesStatus && matchesIndustry;
  });

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="LANDMARK PORTFOLIO"
        title="Structures Engineered for Real-World Performance"
        subtitle="Explore our nationwide track record of heavy industrial manufacturing plants, automated logistics fulfillment parks, and specialized structural steel projects."
        breadcrumbs={[{ label: "Projects" }]}
        backgroundImage="/images/yatee-hero-slide-2.jpg"
        stats={[
          { label: "Delivered Facilities", value: "500+" },
          { label: "Built-Up Footprint", value: "15M+ Sq.Ft." },
          { label: "Structural Steel Tonnage", value: "250,000+ MT" },
          { label: "Safety Milestone", value: "Zero Harm" },
        ]}
      />

      {/* Filter & Listing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Status and Industry Filter Bar */}
          <div className="bg-[#F8FAFC] p-5 sm:p-6 rounded-2xl border border-slate-200 mb-12 space-y-4 shadow-2xs">
            {/* Top Row: Primary Status Tabs & Counter */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200/80">
              {/* Segmented Status Tabs */}
              <div className="inline-flex p-1 bg-slate-200/70 rounded-xl border border-slate-200 w-full sm:w-auto overflow-x-auto">
                {[
                  { key: "All", label: "All Projects", count: projectsData.length },
                  { key: "Completed", label: "Completed", count: projectsData.filter((p) => p.status === "Completed").length },
                  { key: "Ongoing", label: "Ongoing", count: projectsData.filter((p) => p.status === "Ongoing").length },
                ].map((tab) => {
                  const isActive = selectedStatus === tab.key;
                  return (
                    <button
                      key={tab.key}
                      onClick={() => setSelectedStatus(tab.key)}
                      className={cn(
                        "px-4 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap flex-1 sm:flex-initial",
                        isActive
                          ? "bg-[#1D3A74] text-white shadow-xs"
                          : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                      )}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={cn(
                          "text-[10px] px-1.5 py-0.5 rounded-full font-semibold",
                          isActive ? "bg-white/20 text-white" : "bg-slate-300/70 text-slate-700"
                        )}
                      >
                        {tab.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Showing count indicator & Reset */}
              <div className="text-xs text-slate-500 font-medium flex items-center gap-2">
                <span>
                  Showing <strong className="text-slate-900 font-bold">{filteredProjects.length}</strong> of <strong className="text-slate-900 font-bold">{projectsData.length}</strong> projects
                </span>
                {(selectedStatus !== "All" || selectedIndustry !== "All") && (
                  <button
                    onClick={() => {
                      setSelectedStatus("All");
                      setSelectedIndustry("All");
                    }}
                    className="ml-2 text-xs font-bold text-blue-600 hover:text-[#1D3A74] underline"
                  >
                    Reset Filters
                  </button>
                )}
              </div>
            </div>

            {/* Bottom Row: Industry Filter Pills */}
            <div className="flex items-center gap-2 flex-wrap pt-0.5">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5 mr-1">
                <Filter className="w-3.5 h-3.5 text-[#1D3A74]" />
                <span>Industry:</span>
              </span>
              {industries.map((ind) => {
                const isActive = selectedIndustry === ind;
                const matchCount = ind === "All"
                  ? (selectedStatus === "All" ? projectsData.length : projectsData.filter((p) => p.status === selectedStatus).length)
                  : projectsData.filter((p) => p.industry === ind && (selectedStatus === "All" || p.status === selectedStatus)).length;

                return (
                  <button
                    key={ind}
                    onClick={() => setSelectedIndustry(ind)}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition-all flex items-center gap-1.5",
                      isActive
                        ? "bg-[#1D3A74] text-white border-[#1D3A74] shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    )}
                  >
                    <span>{ind}</span>
                    {ind !== "All" && (
                      <span
                        className={cn(
                          "text-[10px] px-1 rounded-full",
                          isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                        )}
                      >
                        {matchCount}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj, idx) => (
              <Link
                key={idx}
                href={`/projects/${proj.slug}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#1D3A74]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-7 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D3A74] px-3 py-1 rounded-md border border-blue-100">
                      {proj.industry}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{proj.status} ({proj.completionYear})</span>
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {proj.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{proj.location}, {proj.state}</span>
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {proj.overview}
                  </p>
                </div>

                {/* Specs Strip */}
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

                {/* Card CTA */}
                <div className="px-7 sm:px-8 py-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-[#1D3A74]">
                  <span>Explore Technical Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-slate-200">
              <p className="text-slate-600 font-semibold">No projects match the selected filter criteria.</p>
              <button
                onClick={() => {
                  setSelectedStatus("All");
                  setSelectedIndustry("All");
                }}
                className="mt-4 text-xs font-bold text-blue-600 hover:underline"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
