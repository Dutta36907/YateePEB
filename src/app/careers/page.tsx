import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { careerBenefits, jobOpeningsData } from "@/data/careers";
import { Building2, GraduationCap, ShieldCheck, Award, MapPin, Briefcase, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Careers | Structural Engineering & Project Management Jobs | Yatee Steel",
  description:
    "Explore engineering and management careers at Yatee Steel Structures. Openings in STAAD.Pro design, Tekla BIM detailing, plant QA/QC, and nationwide site erection.",
  keywords: [
    "PEB Structural Engineer Jobs",
    "Tekla Detailer Careers India",
    "Steel Fabrication Plant Jobs Gujarat",
    "Civil Erection Engineer Openings",
    "Yatee Steel Careers",
  ],
  openGraph: {
    title: "Careers at Yatee Steel Structures | Build Your Future",
    description:
      "Join India's premier structural steel and PEB manufacturing enterprise. Explore active engineering, fabrication, and project management roles.",
    url: "https://yateesteel.com/careers",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function CareersPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
  ]);

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-blue-600" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-blue-600" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    Award: <Award className="w-6 h-6 text-blue-600" />,
  };

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge="JOIN OUR ENGINEERING TEAM"
        title="Build Structures. Build Your Career."
        subtitle="Work alongside experienced structural engineers on monumental industrial facilities, logistics parks, and specialized heavy steel structures."
        breadcrumbs={[{ label: "Careers" }]}
        backgroundImage="/images/services/fabrication-plant.jpg"
        stats={[
          { label: "Active Openings", value: `${jobOpeningsData.length} Roles` },
          { label: "Engineering Team", value: "20+ Specialists" },
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
            subtitle="Discover full-time engineering and project management roles across our Indore Headquarters, Nandasan Plant, and Nationwide Project Sites."
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
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors font-heading">
                    {job.title}
                  </h3>

                  <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      <span>{job.location}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-3.5 h-3.5 text-slate-400" />
                      <span>Exp: {job.experienceRequired}</span>
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Link
                    href={`/careers/${job.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#1D3A74] text-white text-xs font-bold hover:bg-[#162E60] transition-colors shadow-xs"
                  >
                    <span>View Role & Apply</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
