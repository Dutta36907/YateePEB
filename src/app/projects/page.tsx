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
          <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Status Tabs */}
            <div className="flex items-center gap-2 bg-white p-1.5 rounded-xl border border-slate-200 w-full sm:w-auto">
              {["All", "Completed", "Ongoing"].map((status) => (
                <button
                  key={status}
                  onClick={() => setSelectedStatus(status)}
                  className={cn(
                    "px-4 py-2 text-xs font-bold rounded-lg transition-all flex-1 sm:flex-initial",
                    selectedStatus === status
                      ? "bg-[#1D3A74] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
                  )}
                >
                  {status} Projects
                </button>
              ))}
            </div>

            {/* Industry Pill Filter */}
            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider hidden lg:inline">
                Industry:
              </span>
              {industries.map((ind) => (
                <button
                  key={ind}
                  onClick={() => setSelectedIndustry(ind)}
                  className={cn(
                    "px-3 py-1.5 text-xs font-semibold rounded-lg border transition-all",
                    selectedIndustry === ind
                      ? "bg-blue-600 text-white border-blue-600 shadow-xs"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-300"
                  )}
                >
                  {ind}
                </button>
              ))}
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
