"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Layers,
  CheckCircle2,
  Cpu,
  ShieldCheck,
  Building,
  Flame,
  Maximize2,
  ArrowRight,
} from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { cn } from "@/lib/utils";

export const PebAnatomySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const subsystems = [
    {
      id: "primary-frame",
      number: "01",
      name: "Primary Tapered Frames",
      role: "Main Load-Bearing Superstructure",
      steelGrade: "IS 2062 E350 / ASTM A572 Grade 50 (350 MPa Yield)",
      description:
        "Custom moment-resisting I-sections with tapered webs engineered in strict proportion to bending moment diagrams. By concentrating steel where stress is highest, we achieve up to 30% reduction in structural dead load while supporting column-free spans up to 90 meters.",
      specs: [
        { label: "Clear Span Range", val: "15m to 90m Column-Free" },
        { label: "Welding Process", val: "Continuous Submerged Arc Welding (SAW)" },
        { label: "Haunch Depth", val: "Optimized up to 2,500mm web depth" },
        { label: "Standard Codes", val: "IS 800:2007 & AISC 360-16" },
      ],
      advantage: "Zero intermediate columns allows 100% floor layout freedom for automated racking.",
    },
    {
      id: "secondary-framing",
      number: "02",
      name: "Cold-Formed Z & C Purlins",
      role: "Roof & Wall Envelope Framing",
      steelGrade: "Galvanized High-Tensile Steel (Yield: 345–450 MPa, Z275 GSM)",
      description:
        "Precision cold roll-formed Z-sections that overlap and nest at rafter support points. This creates continuous beam structural action, increasing load-bearing capacity by 30% compared to simple span channels with zero on-site cutting or welding.",
      specs: [
        { label: "Coating Standard", val: "Hot-Dip Galvanized Z120 to Z275 GSM" },
        { label: "Web Depth Range", val: "100mm to 350mm" },
        { label: "Hole Punching", val: "Automated CNC slotted round/oval holes" },
        { label: "Standard Codes", val: "IS 801 / IS 811 / ASTM A653" },
      ],
      advantage: "Pre-punched bolt holes eliminate on-site drilling and field welding errors.",
    },
    {
      id: "cladding-roofing",
      number: "03",
      name: "High-Crest Galvalume Sheets",
      role: "Weatherproof Enclosure & Drainage",
      steelGrade: "High-Tensile Steel (550 MPa Yield) + AZ150 Galvalume Alloy",
      description:
        "Trapezoidal and standing-seam profiles with 30mm deep crests and anti-capillary siphon grooves. 55% Aluminum-Zinc alloy delivers 4 to 6 times greater corrosion resistance than ordinary galvanized iron under severe monsoon exposure.",
      specs: [
        { label: "Alloy Coating", val: "55% Al, 43.4% Zn, 1.6% Si (AZ150)" },
        { label: "Paint Systems", val: "RMP / SMP / PVDF (20–25 Microns)" },
        { label: "Fasteners", val: "Corrosion-Class 3 Self-Drilling Screws with EPDM" },
        { label: "Standard Codes", val: "IS 15965 / ASTM A792" },
      ],
      advantage: "Engineered side laps guarantee 100% weather-tight and leak-proof performance.",
    },
    {
      id: "crane-system",
      number: "04",
      name: "Integrated EOT Crane Girders",
      role: "Heavy Material Handling Infrastructure",
      steelGrade: "Built-up Built-to-Order Runway Beams with Surge Brackets",
      description:
        "Columns engineered with heavy stepped brackets and lateral surge girders designed to safely absorb dynamic crane acceleration, braking thrust, and vertical impact forces for 5T up to 100T overhead cranes.",
      specs: [
        { label: "Crane Capacities", val: "5T, 10T, 25T, 50T, 100T EOT Cranes" },
        { label: "Rail Fastening", val: "Forged Adjustable Crane Clips & Rubber Pads" },
        { label: "Deflection Limit", val: "Strict L/600 to L/1000 per AISE No. 13" },
        { label: "Standard Codes", val: "IS 807 / IS 3177 / AISE Standard" },
      ],
      advantage: "Factory integrated crane runways eliminate costly post-construction retrofitting.",
    },
    {
      id: "thermal-insulation",
      number: "05",
      name: "PUFF & PIR Insulated Panels",
      role: "Thermal Comfort & Cold Chain Enclosure",
      steelGrade: "0.50mm PPGI / PPGL Facings + 40 kg/m³ Rigid PIR/PUF Core",
      description:
        "Continuous high-pressure foaming sandwich panels with tongue-and-groove interlocking joints. Delivers low thermal conductivity (k = 0.022 W/mK), cutting HVAC power consumption by up to 40% for pharma, food, and climate-controlled assembly plants.",
      specs: [
        { label: "Core Density", val: "40 ± 2 kg/m³ (CFC/HCFC Free, Zero ODP)" },
        { label: "Thickness Options", val: "30mm to 150mm" },
        { label: "Fire Resistance", val: "PIR Class B-s1,d0 (Self-Extinguishing)" },
        { label: "Standard Codes", val: "EN 13501-1 / IS 11239 / ASTM C591" },
      ],
      advantage: "Maintains required internal temperatures from -40°C to +25°C with zero thermal bridging.",
    },
    {
      id: "anchor-connections",
      number: "06",
      name: "High-Tensile Base Connections",
      role: "Seismic & Wind Uplift Anchor System",
      steelGrade: "Grade 8.8 / Grade 10.9 High-Strength Friction Grip (HSFG) Bolts",
      description:
        "High-strength anchor bolt cages cast into reinforced concrete footings. Designed to transmit heavy column base shear, axial compression, and wind uplift directly into foundations with strict zero-slip tolerance.",
      specs: [
        { label: "Bolt Specifications", val: "Grade 8.8 / 10.9 HSFG Bolts" },
        { label: "Base Plate Steel", val: "IS 2062 E250 / E350 Heavy Base Plates" },
        { label: "Grouting", val: "High-Strength Non-Shrink Epoxy/Cementitious Grout" },
        { label: "Standard Codes", val: "IS 4000 / IS 1893 (Seismic Criteria)" },
      ],
      advantage: "Precision bolt templates guarantee 100% pin-point column alignment on site.",
    },
  ];

  const current = subsystems[activeTab];

  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC] border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="STRUCTURAL ARCHITECTURE"
          title="Anatomy of a Yatee Pre-Engineered Building"
          subtitle="Explore the 6 synchronized structural subsystems that give Yatee PEB structures unmatched strength, precision, and longevity."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mt-12">
          {/* Subsystem Selector Buttons (4 cols) */}
          <div className="lg:col-span-4 space-y-2.5">
            {subsystems.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={cn(
                    "w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center justify-between select-none group",
                    isActive
                      ? "bg-[#1D3A74] text-white border-[#1D3A74] shadow-lg scale-[1.02]"
                      : "bg-white text-slate-700 border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-mono text-xs font-extrabold px-2.5 py-1 rounded-lg shrink-0",
                        isActive ? "bg-[#1F4283] text-white border border-blue-400/40" : "bg-blue-50 text-[#1D3A74] border border-blue-200/60"
                      )}
                    >
                      {item.number}
                    </span>
                    <div>
                      <h4 className="font-extrabold text-sm sm:text-base leading-tight">
                        {item.name}
                      </h4>
                      <p
                        className={cn(
                          "text-[11px] mt-0.5",
                          isActive ? "text-blue-100" : "text-slate-500 font-medium"
                        )}
                      >
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={cn(
                      "w-4 h-4 transition-transform",
                      isActive ? "translate-x-1 text-blue-300" : "text-slate-300 group-hover:text-[#1D3A74]"
                    )}
                  />
                </button>
              );
            })}
          </div>

          {/* Active Subsystem Detail Card (8 cols) */}
          <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-200 shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="space-y-6">
              {/* Header Strip */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-extrabold text-[#1D3A74] bg-blue-50 border border-blue-200/80 px-3 py-1 rounded-lg">
                    Subsystem {current.number} of 06
                  </span>
                  <span className="text-xs font-bold text-slate-600">{current.role}</span>
                </div>
                <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                  Certified Quality Standard
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                  {current.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#1D3A74] mt-1">
                  Steel Specification: {current.steelGrade}
                </p>
                <p className="text-slate-700 text-sm sm:text-base mt-4 leading-relaxed font-normal">
                  {current.description}
                </p>
              </div>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {current.specs.map((spec, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80"
                  >
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block">
                      {spec.label}
                    </span>
                    <span className="text-sm font-black text-slate-900 mt-0.5 block">
                      {spec.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Engineering Advantage Highlight */}
              <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#1D3A74] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-extrabold text-[#1D3A74] uppercase tracking-wide block">
                    Engineering Advantage:
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 mt-0.5 font-medium leading-relaxed">
                    {current.advantage}
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/products/pre-engineered-buildings"
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold text-white bg-[#1D3A74] hover:bg-[#162E60] px-6 py-3 rounded-xl transition-all shadow-md"
              >
                <span>Full Technical Specifications</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about/manufacturing-infrastructure"
                className="text-xs font-bold text-[#1D3A74] hover:underline transition-colors"
              >
                See how we fabricate this subsystem →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
