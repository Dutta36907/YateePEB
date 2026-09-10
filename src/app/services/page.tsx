import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "End-to-End Services & Capabilities | Yatee Steel Structures",
  description:
    "Explore Yatee's comprehensive turnkey structural steel services: 3D BIM design, automated fabrication, heavy crane erection, standing seam roofing, and turnkey EPC delivery.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="END-TO-END CAPABILITIES"
        title="Engineering to Execution. One Integrated Partner."
        subtitle="We deliver turnkey structural steel and pre-engineered building solutions with complete single-point accountability—eliminating contractor friction and ensuring predictable project handovers."
        breadcrumbs={[{ label: "Services" }]}
        stats={[
          { label: "Design Team", value: "40+ Specialists" },
          { label: "Fabrication Output", value: "45,000 MT/Yr" },
          { label: "Crane Fleet", value: "Up to 150T" },
          { label: "Safe Man-Hours", value: "3M+ Hours" },
        ]}
      />

      {/* Services Showcase Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR SERVICE PORTFOLIO"
            title="Six Core Turnkey Capabilities"
            subtitle="From initial geotechnical intake and 3D Tekla detailing to automated shop-floor fabrication and certified site rigging."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                      Service {service.number}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">IS / AISC Code Compliant</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {service.title}
                  </h3>

                  <p className="text-xs font-bold text-blue-600 mt-1">
                    {service.tagline}
                  </p>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {service.shortDescription}
                  </p>

                  <div className="space-y-2 mt-5 pt-5 border-t border-slate-200/80">
                    {service.capabilities.slice(0, 3).map((cap, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{cap.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center justify-between w-full text-sm font-bold text-[#1D3A74] group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Engineering Details</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center bg-[#1D3A74] text-white p-8 sm:p-12 rounded-3xl relative overflow-hidden bg-blueprint-grid">
            <h3 className="text-2xl sm:text-3xl font-bold font-heading">Need a Customized Engineering Consultation?</h3>
            <p className="mt-2 text-slate-200 text-sm sm:text-base max-w-xl mx-auto">
              Our chief structural engineers can review your site plans, crane requirements, and geotechnical data to provide a preliminary 3D model and BOQ.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button href="/get-a-quote" variant="secondary" size="lg" showArrow>
                Request Free Engineering Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
