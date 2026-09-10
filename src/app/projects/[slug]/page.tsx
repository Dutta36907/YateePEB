import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { projectsData } from "@/data/projects";
import { MapPin, Calendar, Building, Layers, CheckCircle2, AlertTriangle, ArrowRight, Quote, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} Case Study | Yatee Steel Structures`,
    description: project.overview,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const otherProjects = projectsData.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge={`CASE STUDY | ${project.status.toUpperCase()}`}
        title={project.title}
        subtitle={`${project.client} — ${project.location}, ${project.state}`}
        breadcrumbs={[
          { label: "Projects", href: "/projects" },
          { label: project.title },
        ]}
        stats={[
          { label: "Built-up Area", value: `${new Intl.NumberFormat("en-IN").format(project.builtUpAreaSqFt)} Sq.Ft.` },
          { label: "Structural Steel", value: `${project.steelTonnageMT} MT` },
          { label: "Clear Span", value: `${project.clearSpanMeters}m Column-Free` },
          { label: "Clear Height", value: `${project.clearHeightMeters}m Height` },
        ]}
      />

      {/* Main Case Study Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Narrative (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
                  PROJECT OVERVIEW
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                  High-Performance Structural Engineering
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Requirement vs Engineering Challenge */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 font-heading mb-2">The Requirement</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{project.requirement}</p>
                </div>

                <div className="bg-amber-50/50 p-6 rounded-2xl border border-amber-200/80">
                  <div className="flex items-center gap-2 text-amber-800 font-bold mb-2">
                    <AlertTriangle className="w-4 h-4" />
                    <h3 className="text-lg font-heading">Engineering Challenge</h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">{project.engineeringChallenge}</p>
                </div>
              </div>

              {/* Structural Solution */}
              <div className="p-8 rounded-2xl bg-[#0B1B3D] text-white border border-blue-900 bg-blueprint-grid">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-2">
                  OUR SOLUTION
                </span>
                <h3 className="text-2xl font-bold font-heading mb-4 text-white">
                  Engineered Structural Steel Strategy
                </h3>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed mb-6">
                  {project.structuralSolution}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-blue-900/60">
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Design Details</h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.designDetails.map((d, i) => (
                        <li key={i}>• {d}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Fabrication</h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.fabricationHighlights.map((f, i) => (
                        <li key={i}>• {f}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-blue-300 mb-2">Erection</h4>
                    <ul className="space-y-1 text-xs text-slate-300">
                      {project.installationHighlights.map((ins, i) => (
                        <li key={i}>• {ins}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Client Testimonial if exists */}
              {project.testimonial && (
                <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-slate-200 relative">
                  <Quote className="w-12 h-12 text-blue-200 absolute top-6 right-6 opacity-60" />
                  <p className="text-base sm:text-lg font-bold text-slate-800 italic relative z-10 font-heading">
                    &ldquo;{project.testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-4 pt-4 border-t border-slate-200/80">
                    <p className="font-bold text-sm text-[#1D3A74]">{project.testimonial.person}</p>
                    <p className="text-xs text-slate-500">{project.testimonial.designation}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Right Project Sidebar Meta (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Project Meta Card */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  Project Data Sheet
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Structural Metrics
                </h4>

                <div className="space-y-3 pt-2 text-xs divide-y divide-slate-200/80">
                  <div className="flex items-center justify-between pb-2">
                    <span className="text-slate-500 font-medium">Client:</span>
                    <span className="font-bold text-slate-900">{project.client}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Location:</span>
                    <span className="font-bold text-slate-900">{project.location}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Industry Vertical:</span>
                    <span className="font-bold text-slate-900">{project.industry}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Building Typology:</span>
                    <span className="font-bold text-slate-900">{project.buildingType}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Built-Up Area:</span>
                    <span className="font-bold text-slate-900 font-mono">{new Intl.NumberFormat("en-IN").format(project.builtUpAreaSqFt)} Sq. Ft.</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Steel Tonnage:</span>
                    <span className="font-bold text-slate-900 font-mono">{project.steelTonnageMT} MT</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Clear Height:</span>
                    <span className="font-bold text-slate-900 font-mono">{project.clearHeightMeters} Meters</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-slate-500 font-medium">Clear Span:</span>
                    <span className="font-bold text-slate-900 font-mono">{project.clearSpanMeters} Meters</span>
                  </div>
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-slate-500 font-medium">Status / Year:</span>
                    <span className="font-bold text-blue-700">{project.status} ({project.completionYear})</span>
                  </div>
                </div>
              </div>

              {/* Similar Project CTA */}
              <div className="bg-[#1D3A74] text-white p-6 rounded-2xl shadow-xl space-y-4 relative overflow-hidden bg-blueprint-grid">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block">
                  SIMILAR REQUIREMENT?
                </span>
                <h4 className="text-xl font-bold font-heading">
                  Build a Similar High-Performance Facility
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Our estimation engineers will provide a preliminary 3D model and steel tonnage calculation for your site location.
                </p>
                <Button href="/get-a-quote" variant="secondary" size="md" className="w-full" showArrow>
                  Request Similar Project Estimate
                </Button>
              </div>

              {/* Other Projects */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  Other Landmark Projects
                </h4>
                <div className="space-y-2">
                  {otherProjects.map((p, idx) => (
                    <Link
                      key={idx}
                      href={`/projects/${p.slug}`}
                      className="block p-3 rounded-xl bg-slate-50 hover:bg-blue-50 transition-colors group"
                    >
                      <span className="text-[10px] uppercase font-bold text-blue-600 block">{p.industry}</span>
                      <h5 className="text-xs font-bold text-slate-900 group-hover:text-blue-700 leading-snug mt-0.5">{p.title}</h5>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
