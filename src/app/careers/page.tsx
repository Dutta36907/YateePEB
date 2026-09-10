import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerBenefits, jobOpeningsData } from "@/data/careers";
import { Building2, GraduationCap, ShieldCheck, Award, MapPin, Briefcase, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Careers | Build Structures. Build Your Career | Yatee Steel Structures",
  description:
    "Join Yatee Steel Structures. Explore career opportunities in Structural Design, Tekla Detailing, QA/QC, Heavy Fabrication, and Site Erection Management.",
};

export default function CareersPage() {
  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    Award: <Award className="w-6 h-6 text-blue-600" />,
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="JOIN OUR ENGINEERING TEAM"
        title="Build Structures. Build Your Career."
        subtitle="Work alongside India's premier structural engineering talent on monumental industrial facilities, heavy aerospace hangars, and mega distribution centers."
        breadcrumbs={[{ label: "Careers" }]}
        stats={[
          { label: "Active Openings", value: `${jobOpeningsData.length} Roles` },
          { label: "Engineering Team", value: "300+" },
          { label: "Safety Culture", value: "ISO 45001" },
          { label: "Learning & Dev", value: "Tekla & BIM" },
        ]}
      />

      {/* Why Work With Us Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="LIFE AT YATEE"
            title="Why Build Your Future With Us?"
            subtitle="We invest in our people through continuous BIM software training, clear merit-based leadership paths, and a deeply ingrained safety culture."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {careerBenefits.map((b, idx) => (
              <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-4">
                    {iconMap[b.icon] || <Award className="w-6 h-6 text-blue-600" />}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 font-heading">{b.title}</h3>
                  <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{b.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="CURRENT OPENINGS"
            title="Explore Open Opportunities"
            subtitle="Discover full-time engineering and project management roles across our Pune Headquarters, Chakan Plant, and Project Sites."
          />

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobOpeningsData.map((job, idx) => (
              <div
                key={idx}
                className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-xl transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-6 group"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                      {job.department}
                    </span>
                    <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
                      {job.employmentType}
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      {job.openingsCount} Openings
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors font-heading">
                    {job.title}
                  </h3>

                  <div className="flex items-center gap-4 text-xs text-slate-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-blue-600" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>Exp: {job.experienceRequired}</span>
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pt-1 line-clamp-2">
                    {job.summary}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1D3A74] hover:bg-[#162E60] text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-white p-8 rounded-2xl border border-slate-200 max-w-2xl mx-auto">
            <h4 className="text-base font-bold text-slate-900 font-heading">
              Don&apos;t see a matching profile?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Send your CV directly to our talent acquisition team at{" "}
              <a href="mailto:careers@yateesteel.com" className="font-bold text-blue-600 hover:underline">
                careers@yateesteel.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
