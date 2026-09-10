import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, ShieldCheck, Factory, FileCheck, Users, Award, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { companyDetails, companyMilestones, leadershipTeam } from "@/data/company";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us | Yatee Steel Structures",
  description:
    "Learn about Yatee Steel Structures Pvt Ltd, India's leading Pre-Engineered Building and heavy structural steel manufacturer since 2004.",
};

export default function AboutPage() {
  const subNav = [
    { title: "Company Overview", href: "/about/company-overview", desc: "Corporate history, 20+ years milestones and leadership." },
    { title: "Vision, Mission & Values", href: "/about/vision-mission-values", desc: "Engineering principles, ethical safety and green building commitment." },
    { title: "Why Choose Us", href: "/about/why-choose-us", desc: "6 engineered advantages, value engineering and cost optimization." },
    { title: "Manufacturing & Infrastructure", href: "/about/manufacturing-infrastructure", desc: "25-acre Chakan plant, automated SAW lines and CNC machinery." },
    { title: "Quality & Certifications", href: "/about/quality-certifications", desc: "ISO 9001, 14001, 45001, CE EN 1090-2 standards and testing protocols." },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="ABOUT YATEE"
        title="Building Expertise. Engineering Trust."
        subtitle="Two decades of pioneering structural steel fabrication, value engineering, and high-performance Pre-Engineered Buildings across India."
        breadcrumbs={[{ label: "About Us" }]}
        stats={[
          { label: "Delivered Projects", value: "500+" },
          { label: "Annual Capacity", value: "45,000 MT" },
          { label: "Manufacturing Base", value: "25 Acres" },
          { label: "Engineering Team", value: "300+" },
        ]}
      />

      {/* Navigation Sub-Hub Cards */}
      <section className="py-16 bg-[#F8FAFC] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="EXPLORE OUR CORPORATE PILLARS"
            title="Comprehensive Corporate Overview"
            subtitle="Navigate through our manufacturing infrastructure, leadership governance, quality standards, and technical engineering capabilities."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {subNav.map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 font-mono font-bold text-xs flex items-center justify-center mb-4 group-hover:bg-[#1D3A74] group-hover:text-white transition-colors">
                    0{idx + 1}
                  </span>
                  <h3 className="font-bold text-base text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-1 text-xs font-bold text-blue-600">
                  <span>Explore Section</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Heritage Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block">
                OUR HERITAGE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                From a Specialized Fabrication Shop to a National PEB Powerhouse
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Founded in 2004 in Pune, Maharashtra, Yatee Steel Structures was established with a singular mission: to bring precision structural engineering and off-site pre-engineering methods to India&apos;s rapidly growing industrial sector.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Over the past 20+ years, we have expanded from an initial 3,000 MT workshop into a 45,000 MT automated manufacturing facility spanning 25 acres in Chakan. Today, Yatee partners with global Fortune 500 companies, Tier-1 EPC contractors, and top logistics developers to build monumental, code-compliant steel structures.
              </p>
              <div className="pt-2">
                <Button href="/about/company-overview" variant="primary" size="md" showArrow>
                  Read Full Company Timeline
                </Button>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-16/10">
                <Image
                  src="/images/hero-building.jpg"
                  alt="Yatee Industrial Facility"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="GOVERNANCE & LEADERSHIP"
            title="Executive Leadership Team"
            subtitle="Led by veteran structural engineers, project managers, and operations specialists with over a century of combined steel construction experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-full bg-[#1D3A74] text-white font-extrabold text-xl flex items-center justify-center mb-4 font-heading">
                    {member.name.split(" ")[0][0]}
                    {member.name.split(" ")[1]?.[0] || ""}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug">{member.name}</h3>
                  <p className="text-xs font-bold text-blue-600 mt-1">{member.role}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{member.experience}</p>
                  <p className="mt-3 text-xs text-slate-600 leading-relaxed">{member.bio}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-mono text-slate-500">
                  <span>{member.credentials}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
