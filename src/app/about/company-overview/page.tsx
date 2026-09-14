import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { companyDetails, companyMilestones, leadershipTeam } from "@/data/company";
import { CheckCircle2, ShieldCheck, Building2, Calendar, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Company Overview & History | Yatee Steel Structures",
  description:
    "Explore the 20+ year journey, historical milestones, executive leadership, and corporate governance of Yatee Steel Structures.",
};

export default function CompanyOverviewPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="CORPORATE OVERVIEW"
        title="Engineering Precision Since 2004"
        subtitle="The journey, foundational values, and technical milestones that have shaped Yatee into a leading national Pre-Engineered Building manufacturer."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Company Overview" },
        ]}
        stats={[
          { label: "Founded", value: "2004" },
          { label: "Annual Output", value: "22,000 MT" },
          { label: "Landmark Projects", value: "100+" },
          { label: "Workforce", value: "20+" },
        ]}
      />

      {/* Narrative Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block">
                WHO WE ARE
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                A Unified Design-to-Erection Structural Steel Enterprise
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Yatee Steel Structures Pvt Ltd (Yatee PEB) is an engineering service provider and manufacturing organization headquartered in Indore, Madhya Pradesh, with branch offices in Siliguri (W.B.) and Patna (Bihar).
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                We provide integrated Pre-Engineered Building (PEB) systems, heavy structural steel fabrication, industrial sheds, and multi-tier structural framing and sheeting systems for industrial corporations, logistics developers, and EPC enterprises.
              </p>
              <p className="text-slate-600 text-base leading-relaxed">
                Our in-house capabilities span 3D BIM structural modeling (STAAD.Pro and Tekla Structures), automated heavy plate cutting and Submerged Arc Welding (SAW), and an Automatic H-Beam line (PTW) machine in our manufacturing unit.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-black text-[#1D3A74] block font-heading">6+ Acres</span>
                  <span className="text-xs text-slate-500 font-semibold">Manufacturing Campus in Nandasan, Gujarat</span>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-2xl font-black text-[#1D3A74] block font-heading">100% In-House</span>
                  <span className="text-xs text-slate-500 font-semibold">Engineering & QA/QC Testing</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0B1B3D] text-white p-8 rounded-2xl border border-blue-900 shadow-2xl relative overflow-hidden bg-blueprint-grid">
              <h3 className="text-xl font-bold font-heading mb-4 text-white">Corporate Fast Facts</h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Headquarters:</strong> {companyDetails.headquarters.addressLine1}, {companyDetails.headquarters.addressLine2}, {companyDetails.headquarters.city} ({companyDetails.headquarters.state}) - {companyDetails.headquarters.postalCode}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Primary Plant:</strong> {companyDetails.manufacturingFacility.addressLine1}, {companyDetails.manufacturingFacility.addressLine2}, {companyDetails.manufacturingFacility.state} – {companyDetails.manufacturingFacility.postalCode}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Certifications:</strong> ISO 9001:2015, ISO 14001:2015, ISO 45001:2018</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Execution Standard:</strong> EN 1090-2 (Execution Class EXC3)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <span><strong>Primary Mill Partners:</strong> Tata Steel, JSW Steel, SAIL</span>
                </li>
              </ul>
              <div className="mt-6 pt-6 border-t border-white/20">
                <Button href="/get-a-quote" variant="secondary" size="sm" className="w-full" showArrow>
                  Request Corporate Brochure
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR JOURNEY"
            title="Two Decades of Engineering Milestones"
            subtitle="From our foundation in 2004 to becoming an industry benchmark with 22,000 MT annual throughput."
          />

          <div className="relative border-l-2 border-blue-200 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
            {companyMilestones.map((milestone, idx) => (
              <div key={idx} className="relative group">
                {/* Year Marker Badge */}
                <div className="absolute -left-[35px] md:-left-[51px] top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-[#1D3A74] text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white">
                  {idx + 1}
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-xs hover:border-blue-400 hover:shadow-lg transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-sm font-extrabold text-blue-600 font-mono bg-blue-50 px-2.5 py-1 rounded">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      {milestone.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
