import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { projectsData } from "@/data/projects";
import { ArrowRight, MapPin, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Completed Projects | Yatee Steel Structures",
  description:
    "Explore our completed landmark industrial projects, manufacturing plants, and high-bay logistics warehouses across India.",
};

export default function CompletedProjectsPage() {
  const completed = projectsData.filter((p) => p.status === "Completed");

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="PORTFOLIO"
        title="Completed Landmark Projects"
        subtitle="Executed on time, within budget, and built to rigorous structural engineering standards."
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: "Completed Projects" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {completed.map((proj, idx) => (
              <Link
                key={idx}
                href={`/projects/${proj.slug}`}
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-2xl hover:border-[#1D3A74]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="p-7 sm:p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider bg-blue-50 text-[#1D3A74] px-3 py-1 rounded-md border border-blue-100">
                      {proj.industry}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      Completed {proj.completionYear}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {proj.title}
                  </h3>

                  <p className="text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                    <span>{proj.location}</span>
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {proj.overview}
                  </p>
                </div>

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

                <div className="px-7 sm:px-8 py-4 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-[#1D3A74]">
                  <span>Explore Technical Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
