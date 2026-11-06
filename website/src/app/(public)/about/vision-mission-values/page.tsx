import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Target, Compass, HeartHandshake, ShieldCheck, Leaf, Award, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vision, Mission & Core Values | Yatee Steel Structures",
  description:
    "Discover the engineering vision, corporate mission, safety ethics, and sustainability principles guiding Yatee Steel Structures Pvt Ltd.",
  keywords: [
    "Yatee Vision and Mission",
    "PEB Engineering Principles",
    "Structural Steel Safety Ethics",
    "Sustainable Steel Construction India",
    "ISO 45001 Safety Culture",
  ],
  openGraph: {
    title: "Vision, Mission & Values | Yatee Steel Structures",
    description:
      "Engineering precision, zero-harm safety culture, and sustainable steel building innovation across India.",
    url: "https://yateesteel.com/about/vision-mission-values",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function VisionMissionValuesPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Vision, Mission & Values", url: "/about/vision-mission-values" },
  ]);

  const coreValues = [
    {
      title: "Engineering Precision",
      description: "Zero tolerance for structural compromises. Every connection, weld bead, and bolt schedule strictly adheres to international design codes.",
      icon: <Target className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Uncompromising Safety",
      description: "ISO 45001 certified zero-harm culture across our 6-acre manufacturing facility and high-elevation nationwide erection sites.",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Client-Centric Transparency",
      description: "Fixed-price contracts, 100% material test certificate traceability, and open milestone tracking with zero hidden surprises.",
      icon: <HeartHandshake className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Green & Sustainable Construction",
      description: "100% recyclable structural steel, energy-efficient thermal envelopes, daylight harvesting, and low-VOC coating applications.",
      icon: <Leaf className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Innovation & Continuous Learning",
      description: "Continual investment in advanced 3D BIM detailing, robotic plasma cutting, and high-speed submerged arc welding technologies.",
      icon: <Lightbulb className="w-6 h-6 text-blue-600" />,
    },
    {
      title: "Turnkey Accountability",
      description: "End-to-end responsibility from preliminary civil intake to final structural handover, ensuring speed and cost certainty.",
      icon: <Award className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge="GUIDING PRINCIPLES"
        title="Vision, Mission & Values"
        subtitle="The foundational engineering ethics and commitments that guide our teams across design, manufacturing, and on-site structural erection."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Vision, Mission & Values" },
        ]}
        backgroundImage="/images/yatee-hero-slide-1.jpg"
      />

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="bg-gradient-to-br from-[#0B1B3D] to-[#1D3A74] text-white p-8 sm:p-12 rounded-3xl border border-blue-900 shadow-xl relative overflow-hidden bg-blueprint-grid flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-xs border border-white/20">
                  <Compass className="w-7 h-7 text-blue-300" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-2">
                  OUR VISION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight font-heading leading-snug">
                  To be India&apos;s most trusted, technologically advanced Pre-Engineered Building and structural steel enterprise.
                </h2>
                <p className="mt-4 text-slate-200 text-sm sm:text-base leading-relaxed">
                  Setting the national benchmark for structural safety, architectural excellence, speed of delivery, and sustainable steel infrastructure for modern global industries.
                </p>
              </div>
            </div>

            {/* Mission */}
            <div className="bg-[#F8FAFC] p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#1D3A74]" />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-600 block mb-2">
                  OUR MISSION
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-heading leading-snug">
                  Deliver optimized, code-compliant steel structures through integrated engineering and automated manufacturing.
                </h2>
                <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                  Empowering clients to build faster, reduce carbon footprints, and achieve maximum operational efficiency with total structural reliability and safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 Core Values */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="OUR FOUNDATIONAL PILLARS"
            title="Core Values Driving Excellence"
            subtitle="The ethical and technical standards maintained by every structural designer, welder, detailer, and erection engineer at Yatee."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {coreValues.map((val, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 leading-snug">{val.title}</h3>
                  <p className="mt-3 text-slate-600 text-sm leading-relaxed">{val.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
