import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { companyDetails } from "@/data/company";
import { Factory, Cpu, Flame, Sparkles, CheckCircle2, ShieldCheck, Truck, Cog } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Manufacturing & Infrastructure | Yatee Steel Structures",
  description:
    "Explore Yatee's 6-acre heavy structural steel fabrication plant in Nandasan, Gujarat, equipped with automated SAW beam lines, CNC plasma cutting machines, and shot blasting.",
};

export default function ManufacturingInfrastructurePage() {
  const machinery = [
    {
      title: "Automated Submerged Arc Welding (SAW) Lines",
      description: "Dual-torch and multi-head automatic SAW portal welding machines capable of deep-penetration continuous welding on I-beams and built-up sections.",
      spec: "Welding Speed: 1.2m/min | Deep Penetration",
      icon: <Flame className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Automatic H-Beam Line (PTW) Machine",
      description: "Automated structural beam assembly and welding line for high-precision manufacturing of tapered and parallel flange H-beams.",
      spec: "Continuous Alignment | Heavy Duty",
      icon: <Cpu className="w-6 h-6 text-blue-500" />,
    },
    {
      title: "CNC Plasma Cutting Machine",
      description: "Computer-controlled high-definition CNC plasma cutting machine for smooth and precise plate cutting, profiling, and tight angular bevels.",
      spec: "Smooth & Precise Plate Cutting | High Tolerance",
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
    },
    {
      title: "Automatic Centrifugal Shot Blasting Machine",
      description: "Through-feed centrifugal abrasive blasting chamber achieving SA 2.5 surface cleanliness standard for optimal paint adhesion.",
      spec: "Standard: Swedish SA 2.5 | Profile: 40-75 Microns",
      icon: <Sparkles className="w-6 h-6 text-cyan-500" />,
    },
    {
      title: "Continuous High-Tensile Z & C Purlin Mill",
      description: "Cold roll-forming line with online hydraulic punching and flying shear cut-off for high-strength galvanized steel purlins.",
      spec: "Yield Strength: Up to 450 MPa | Custom Lengths",
      icon: <Cog className="w-6 h-6 text-indigo-500" />,
    },
    {
      title: "Heavy-Duty Overhead EOT Crane Fleet",
      description: "Overhead traveling cranes spanning fabrication bays for safe material handling of massive built-up steel sections.",
      spec: "Full Bay Coverage | Safe Material Handling",
      icon: <Truck className="w-6 h-6 text-blue-600" />,
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="MANUFACTURING POWERHOUSE"
        title="Manufacturing & Infrastructure"
        subtitle="6 Acres Dedicated Industrial Land. Heavy Fabrication Bays. 22,000 MT Annual Throughput in Nandasan, Gujarat."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Manufacturing & Infrastructure" },
        ]}
        stats={[
          { label: "Annual Capacity", value: "22,000 MT" },
          { label: "Industrial Campus", value: "6 Acres" },
          { label: "Plant Location", value: "Nandasan, GJ" },
          { label: "Max Clear Span", value: "90m+" },
        ]}
      />

      {/* Facility Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block">
                STATE-OF-THE-ART PLANT
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                Engineered for High-Tonnage, Fast-Track Execution
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Located in the prime industrial belt of Nandasan, Kadi (Near Ahmedabad Mehsana Highway, Gujarat), Yatee&apos;s 6-acre heavy manufacturing campus is designed according to lean manufacturing principles. Raw materials enter through dedicated quality inspection bays and move seamlessly through automated CNC plasma cutting, automatic H-beam lines (PTW), submerged arc welding (SAW), shot blasting, and painting without bottlenecking.
              </p>
              <div className="space-y-3 pt-2">
                {[
                  "Direct digital integration between Tekla BIM detailing and shop floor CNC plasma machines",
                  "100% prime steel sourcing directly from primary producers (Tata Steel, JSW, SAIL)",
                  "Automatic H-beam line (PTW) and multi-head SAW welding stations",
                  "Dedicated temperature-controlled paint application bays with dry film gauge verification",
                  "Barcode-tagged component dispatch aligned with on-site crane erection sequences",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-16/10">
                <Image
                  src="/images/factory-plant.jpg"
                  alt="Yatee Nandasan Manufacturing Campus, Gujarat"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Machinery & Equipment Grid */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="EQUIPMENT & CAPABILITIES"
            title="Advanced Machine Fleet & Heavy Tooling"
            subtitle="Automated, computer-controlled machinery delivering sub-millimeter fabrication accuracy and high monthly steel throughput."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {machinery.map((mach, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center mb-5">
                    {mach.icon}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug font-heading">
                    {mach.title}
                  </h3>
                  <p className="mt-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {mach.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-mono font-bold text-blue-600 bg-blue-50/60 px-3 py-2 rounded-lg">
                  {mach.spec}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Schedule a Physical Plant Visit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
