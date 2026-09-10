import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { industriesData } from "@/data/industries";
import { projectsData } from "@/data/projects";
import { CheckCircle2, ArrowRight, AlertTriangle, ShieldCheck, Layers, Cpu } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface IndustryDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return industriesData.map((ind) => ({
    slug: ind.slug,
  }));
}

export async function generateMetadata({ params }: IndustryDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: `${industry.title} Building Solutions | Yatee Steel Structures`,
    description: industry.shortDescription,
  };
}

export default async function IndustryDetailPage({ params }: IndustryDetailPageProps) {
  const { slug } = await params;
  const industry = industriesData.find((ind) => ind.slug === slug);

  if (!industry) {
    notFound();
  }

  // Find related case studies
  const relatedProjects = projectsData.filter((p) =>
    industry.caseStudySlugs.includes(p.slug)
  );

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="INDUSTRY APPLICATION"
        title={industry.title}
        subtitle={industry.tagline}
        breadcrumbs={[
          { label: "Industries", href: "/industries" },
          { label: industry.title },
        ]}
      />

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Overview */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
                  SECTOR PROFILE
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                  Engineered for Sector-Specific Structural Demands
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {industry.overview}
                </p>
              </div>

              {/* Challenges vs Yatee Solutions */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Industry Challenges & Engineered Solutions
                </h3>

                <div className="space-y-6">
                  {industry.challenges.map((ch, idx) => {
                    const sol = industry.solutions[idx];

                    return (
                      <div key={idx} className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-6 space-y-4">
                        <div className="flex items-start gap-3">
                          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <h4 className="text-base font-bold text-slate-900">{ch.title}</h4>
                            <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">{ch.description}</p>
                          </div>
                        </div>

                        {sol && (
                          <div className="p-4 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                            <div>
                              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block">
                                Yatee Engineered Solution: {sol.title}
                              </span>
                              <p className="text-xs sm:text-sm text-slate-700 mt-0.5 leading-relaxed">{sol.description}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Building Systems Employed */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Recommended Building Systems
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {industry.buildingSystems.map((sys, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                      <Layers className="w-6 h-6 text-blue-600 mb-3" />
                      <h4 className="text-base font-bold text-slate-900">{sys.title}</h4>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed">{sys.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Considerations */}
              <div className="p-8 rounded-2xl bg-[#0B1B3D] text-white border border-blue-900 bg-blueprint-grid">
                <h3 className="text-xl font-bold font-heading mb-4 text-white">
                  Key Engineering Considerations & Codes
                </h3>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                  {industry.engineeringConsiderations.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Related Projects / Case Studies */}
              {relatedProjects.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                    Featured Landmark Case Studies
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {relatedProjects.map((p, idx) => (
                      <Link
                        key={idx}
                        href={`/projects/${p.slug}`}
                        className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:bg-white hover:border-[#1D3A74]/40 hover:shadow-xl transition-all group"
                      >
                        <span className="text-[10px] uppercase font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                          {p.location}
                        </span>
                        <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#1D3A74] mt-2 font-heading">
                          {p.title}
                        </h4>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-2">{p.overview}</p>
                        <div className="mt-4 pt-3 border-t border-slate-200 flex items-center justify-between text-xs font-bold text-blue-600">
                          <span>View Full Project</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Typical Spans Box */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  Typical Parameters
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Standard Dimension Guidelines
                </h4>
                <div className="space-y-3 pt-2">
                  {industry.typicalSpansAndSpecs.map((spec, i) => (
                    <div key={i} className="flex items-center justify-between text-xs border-b border-slate-200/80 pb-2">
                      <span className="text-slate-600 font-medium">{spec.label}:</span>
                      <span className="font-bold text-slate-900 font-mono">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quote CTA */}
              <div className="bg-[#1D3A74] text-white p-6 rounded-2xl shadow-xl space-y-4 relative overflow-hidden bg-blueprint-grid">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block">
                  FAST-TRACK ESTIMATION
                </span>
                <h4 className="text-xl font-bold font-heading">
                  Planning a {industry.title} Facility?
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Our industrial sector team will model your required clear heights, crane capacities, and bay spacing for an optimized proposal.
                </p>
                <Button href="/get-a-quote" variant="secondary" size="md" className="w-full" showArrow>
                  Request Sector Quotation
                </Button>
              </div>

              {/* Other Industries Links */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  Other Sectors
                </h4>
                <div className="space-y-1.5">
                  {industriesData.map((ind, idx) => (
                    <Link
                      key={idx}
                      href={`/industries/${ind.slug}`}
                      className={`block px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                        ind.slug === industry.slug
                          ? "bg-[#1D3A74] text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {ind.title}
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
