"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Factory,
  ShieldCheck,
  Layers,
  FileCheck,
  CheckCircle2,
  Phone,
  Calculator,
  Compass,
  Hammer,
  DraftingCompass,
  Boxes,
  Warehouse,
  Wind,
  Cpu,
  Flame,
  Plane,
  ShoppingBag,
  Pill,
  Sparkles,
} from "lucide-react";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { companyDetails } from "@/data/company";

// -------------------------------------------------------------
// ABOUT MEGA MENU
// -------------------------------------------------------------
export const AboutMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const links = [
    {
      title: "Company Overview",
      href: "/about/company-overview",
      description: "20+ years of industrial steel engineering excellence, delivering 500+ landmark projects nationwide.",
      icon: <Building2 className="w-5 h-5 text-white" />,
      tag: "Since 2004",
    },
    {
      title: "Vision, Mission & Values",
      href: "/about/vision-mission-values",
      description: "Core engineering ethics, zero-harm safety standards, ESG compliance, and structural durability.",
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      tag: "Principles",
    },
    {
      title: "Why Choose Yatee",
      href: "/about/why-choose-us",
      description: "6 engineered advantages: 40% faster erection, 30% steel weight reduction, and 90m clear spans.",
      icon: <Layers className="w-5 h-5 text-white" />,
      tag: "Key Benefits",
    },
    {
      title: "Manufacturing Infrastructure",
      href: "/about/manufacturing-infrastructure",
      description: "6-acre heavy fabrication complex in Nandasan, Gujarat, automated SAW lines, and CNC plasma cutters.",
      icon: <Factory className="w-5 h-5 text-white" />,
      tag: "6-Acre Plant",
    },
    {
      title: "Quality & Certifications",
      href: "/about/quality-certifications",
      description: "Certified to ISO 9001:2015, ISO 14001, ISO 45001, and EN 1090-2 (EXC3) execution standards.",
      icon: <FileCheck className="w-5 h-5 text-white" />,
      tag: "ISO Certified",
    },
    {
      title: "Corporate Governance & Team",
      href: "/about",
      description: "Meet our senior structural engineers, Tekla designers, and turnkey project directors.",
      icon: <Compass className="w-5 h-5 text-white" />,
      tag: "Leadership",
    },
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-[1140px] xl:w-[1240px] max-w-[96vw] overflow-hidden select-none animate-fadeIn">
      {/* Top Header Bar inside Mega Menu */}
      <div className="px-8 py-3.5 bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D3A74]">
          <span className="w-2 h-2 rounded-full bg-[#1D3A74]" />
          <span>About Yatee Steel Structures Pvt Ltd</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <span className="text-[#1D3A74]">ISO 9001:2015 & ISO 45001 Certified</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700 font-semibold">22,000 MT Annual Capacity</span>
        </div>
      </div>

      <div className="p-7 grid grid-cols-12 gap-7">
        {/* Left Navigation Grid (8 cols) */}
        <div className="col-span-8 grid grid-cols-2 gap-3.5">
          {links.map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              onClick={onClose}
              className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 hover:bg-blue-50/80 border border-slate-200/80 hover:border-[#1D3A74]/40 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3A74] to-[#0B1B3D] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:from-[#2554A5] group-hover:to-[#1D3A74] transition-all">
                {item.icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#1D3A74] transition-colors">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-extrabold text-[#1D3A74] bg-blue-100/90 border border-blue-200/80 px-2 py-0.5 rounded-full shrink-0">
                    {item.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2 font-normal">
                  {item.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Featured Card (4 cols) */}
        <div 
          style={{ backgroundColor: "#0B1B3D" }}
          className="col-span-4 bg-megamenu-dark-card rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden border border-blue-900/80 shadow-2xl"
        >
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-extrabold tracking-widest bg-[#1D3A74] text-white px-3 py-1 rounded-full border border-blue-400/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Corporate Heritage</span>
            </span>

            <h4 className="text-lg sm:text-xl font-extrabold font-heading leading-snug text-white">
              Engineering Spaces. Building The Future.
            </h4>

            <p className="text-xs text-blue-100 leading-relaxed font-normal">
              India&apos;s trusted turnkey PEB and heavy structural steel enterprise with high-precision fabrication plants and automated SAW welding bays.
            </p>

            <div className="pt-3 border-t border-white/20 space-y-2 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">100+ Landmark Projects</strong> Across India</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">6-Acre Plant:</strong> Nandasan, Gujarat</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Design Codes:</strong> IS 800:2007 & AISC 360</span>
              </div>
            </div>
          </div>

          <div className="pt-5 relative z-10">
            <Link
              href="/about"
              onClick={onClose}
              className="w-full py-3 bg-white text-[#1D3A74] hover:bg-blue-50 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>EXPLORE COMPANY OVERVIEW</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Quick Strip */}
      <div className="px-8 py-3 bg-slate-900 text-slate-300 text-xs border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-blue-400 font-bold">Have a custom structural inquiry?</span>
          <span className="text-slate-400">Speak with our senior design engineers:</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`tel:${companyDetails.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 font-bold text-white hover:text-blue-300 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{companyDetails.contact.phone}</span>
          </a>
          <span className="text-slate-700">|</span>
          <Link
            href="/get-a-quote"
            onClick={onClose}
            className="text-amber-400 hover:text-amber-300 font-extrabold flex items-center gap-1"
          >
            <Calculator className="w-3.5 h-3.5" />
            <span>Launch PEB Steel Calculator →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// SERVICES MEGA MENU
// -------------------------------------------------------------
export const ServicesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const icons = [
    <DraftingCompass key="1" className="w-5 h-5 text-white" />,
    <Hammer key="2" className="w-5 h-5 text-white" />,
    <Layers key="3" className="w-5 h-5 text-white" />,
    <Building2 key="4" className="w-5 h-5 text-white" />,
    <Warehouse key="5" className="w-5 h-5 text-white" />,
    <Factory key="6" className="w-5 h-5 text-white" />,
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-[1140px] xl:w-[1240px] max-w-[96vw] overflow-hidden select-none animate-fadeIn">
      {/* Top Header Bar */}
      <div className="px-8 py-3.5 bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D3A74]">
          <span className="w-2 h-2 rounded-full bg-[#1D3A74]" />
          <span>Turnkey Industrial Steel Services</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <span className="text-[#1D3A74]">3D Tekla BIM Modeling</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700 font-semibold">Zero On-Site Contractor Friction</span>
        </div>
      </div>

      <div className="p-7 grid grid-cols-12 gap-7">
        {/* Left Services Grid (8 cols) */}
        <div className="col-span-8 grid grid-cols-2 gap-3.5">
          {servicesData.map((service, idx) => (
            <Link
              key={idx}
              href={`/services/${service.slug}`}
              onClick={onClose}
              className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 hover:bg-blue-50/80 border border-slate-200/80 hover:border-[#1D3A74]/40 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3A74] to-[#0B1B3D] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:from-[#2554A5] group-hover:to-[#1D3A74] transition-all">
                {icons[idx] || <Boxes className="w-5 h-5 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#1D3A74] transition-colors truncate">
                    {service.title}
                  </h4>
                  <span className="text-[10px] font-mono font-extrabold text-[#1D3A74] bg-blue-100/90 border border-blue-200/80 px-2 py-0.5 rounded-full shrink-0">
                    {service.number}
                  </span>
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2 font-normal">
                  {service.shortDescription}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Featured Card (4 cols) */}
        <div 
          style={{ backgroundColor: "#0B1B3D" }}
          className="col-span-4 bg-megamenu-dark-card rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden border border-blue-900/80 shadow-2xl"
        >
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-extrabold tracking-widest bg-[#1D3A74] text-white px-3 py-1 rounded-full border border-blue-400/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Full EPC Execution</span>
            </span>

            <h4 className="text-lg sm:text-xl font-extrabold font-heading leading-snug text-white">
              Single-Source Accountability from Design to Handover
            </h4>

            <p className="text-xs text-blue-100 leading-relaxed font-normal">
              We eliminate third-party subcontractor delays by handling design, manufacturing, logistics dispatch, and high-elevation crane erection in-house.
            </p>

            <div className="pt-3 border-t border-white/20 space-y-2 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">STAAD.Pro & Tekla:</strong> Exact Detailing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">NDT Inspection:</strong> Ultrasonic & MPI Tested</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Certified Riggers:</strong> Zero-Harm Safety</span>
              </div>
            </div>
          </div>

          <div className="pt-5 relative z-10">
            <Link
              href="/services"
              onClick={onClose}
              className="w-full py-3 bg-white text-[#1D3A74] hover:bg-blue-50 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>VIEW ALL 6 ENGINEERING SERVICES</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Quick Strip */}
      <div className="px-8 py-3 bg-slate-900 text-slate-300 text-xs border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-blue-400 font-bold">Require a rapid structural estimate?</span>
          <span className="text-slate-400">Our engineering desk provides preliminary BOQ in 4 business hours:</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/get-a-quote"
            onClick={onClose}
            className="text-white hover:text-blue-300 font-extrabold flex items-center gap-1.5"
          >
            <span>Instant Project Quote Engine →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// PRODUCTS MEGA MENU
// -------------------------------------------------------------
export const ProductsMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const productMeta: Record<string, { tag: string; spec: string; icon: React.ReactNode }> = {
    "pre-engineered-buildings": {
      tag: "Up to 90m Span",
      spec: "Tapered Built-Up Primary Framing",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    "industrial-sheds": {
      tag: "Heavy Crane Ready",
      spec: "IS 800 Factory & Processing Sheds",
      icon: <Factory className="w-5 h-5 text-white" />,
    },
    "c-z-purlins": {
      tag: "High-Yield Z275",
      spec: "Cold-Formed Secondary Framing",
      icon: <Layers className="w-5 h-5 text-white" />,
    },
    "roofing-sheets": {
      tag: "AZ150 Galvalume",
      spec: "Standing Seam 360° Leak-Proof",
      icon: <Boxes className="w-5 h-5 text-white" />,
    },
    "lgs-structures": {
      tag: "550 MPa Steel",
      spec: "Light Gauge Steel (LGS) Framing",
      icon: <Building2 className="w-5 h-5 text-white" />,
    },
    "ventilation-systems": {
      tag: "Zero-Power",
      spec: "Industrial Turbo Ventilators",
      icon: <Wind className="w-5 h-5 text-white" />,
    },
  };

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-[1140px] xl:w-[1240px] max-w-[96vw] overflow-hidden select-none animate-fadeIn">
      {/* Top Header Bar */}
      <div className="px-8 py-3.5 bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D3A74]">
          <span className="w-2 h-2 rounded-full bg-[#1D3A74]" />
          <span>High-Yield Structural Steel & Enclosure Systems</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <span className="text-[#1D3A74]">ASTM A572 / E350 Grade Prime Steel</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700 font-semibold">100% Mill Test Certified</span>
        </div>
      </div>

      <div className="p-7 grid grid-cols-12 gap-7">
        {/* Left Products Grid (8 cols) */}
        <div className="col-span-8 grid grid-cols-2 gap-3.5">
          {productsData.map((product, idx) => {
            const meta = productMeta[product.slug] || {
              tag: "Standard",
              spec: "Certified Steel",
              icon: <Boxes className="w-5 h-5 text-white" />,
            };

            return (
              <Link
                key={idx}
                href={`/products/${product.slug}`}
                onClick={onClose}
                className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 hover:bg-blue-50/80 border border-slate-200/80 hover:border-[#1D3A74]/40 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3A74] to-[#0B1B3D] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:from-[#2554A5] group-hover:to-[#1D3A74] transition-all">
                  {meta.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#1D3A74] transition-colors truncate">
                      {product.title}
                    </h4>
                    <span className="text-[10px] font-extrabold text-[#1D3A74] bg-blue-100/90 border border-blue-200/80 px-2 py-0.5 rounded-full shrink-0">
                      {meta.tag}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-1 font-normal">
                    {product.subtitle}
                  </p>
                  <span className="inline-block text-[10px] font-semibold text-slate-500 mt-0.5 truncate">
                    {meta.spec}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Right Featured Card (4 cols) */}
        <div 
          style={{ backgroundColor: "#0B1B3D" }}
          className="col-span-4 bg-megamenu-dark-card rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden border border-blue-900/80 shadow-2xl"
        >
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-extrabold tracking-widest bg-[#1D3A74] text-white px-3 py-1 rounded-full border border-blue-400/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Steel Engineering Catalog</span>
            </span>

            <h4 className="text-lg sm:text-xl font-extrabold font-heading leading-snug text-white">
              Precision Cold-Formed & Built-Up Systems
            </h4>

            <p className="text-xs text-blue-100 leading-relaxed font-normal">
              Every steel component is engineered to exact tolerances with automated submerged arc welding, shot blasting to SA 2.5, and multi-layer corrosion protection.
            </p>

            <div className="pt-3 border-t border-white/20 space-y-2 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Primary Frames:</strong> High-Strength E350 Plates</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Secondary Purlins:</strong> Continuous Roll Formed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Thermal Enclosure:</strong> PIR / PUFF Panels</span>
              </div>
            </div>
          </div>

          <div className="pt-5 relative z-10">
            <Link
              href="/products"
              onClick={onClose}
              className="w-full py-3 bg-white text-[#1D3A74] hover:bg-blue-50 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>EXPLORE COMPLETE PRODUCT RANGE</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Quick Strip */}
      <div className="px-8 py-3 bg-slate-900 text-slate-300 text-xs border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-blue-400 font-bold">Looking for C & Z Purlin / Sheeting supply only?</span>
          <span className="text-slate-400">Direct mill dispatch available nationwide.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="text-amber-400 hover:text-amber-300 font-extrabold flex items-center gap-1"
          >
            <span>Request Component Quotation →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

// -------------------------------------------------------------
// INDUSTRIES MEGA MENU
// -------------------------------------------------------------
export const IndustriesMegaMenu: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const industryIcons = [
    <Cpu key="1" className="w-5 h-5 text-white" />,
    <Warehouse key="2" className="w-5 h-5 text-white" />,
    <ShoppingBag key="3" className="w-5 h-5 text-white" />,
    <Pill key="4" className="w-5 h-5 text-white" />,
    <Factory key="5" className="w-5 h-5 text-white" />,
    <Plane key="6" className="w-5 h-5 text-white" />,
  ];

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-200/90 w-[1140px] xl:w-[1240px] max-w-[96vw] overflow-hidden select-none animate-fadeIn">
      {/* Top Header Bar */}
      <div className="px-8 py-3.5 bg-gradient-to-r from-slate-50 via-blue-50/50 to-slate-50 border-b border-slate-200/80 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[#1D3A74]">
          <span className="w-2 h-2 rounded-full bg-[#1D3A74]" />
          <span>Specialized Industrial Sectors Served</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-bold text-slate-600">
          <span className="text-[#1D3A74]">FM Global Compliant</span>
          <span className="text-slate-300">•</span>
          <span className="text-emerald-700 font-semibold">Custom Crane Clearances (Up to 100T)</span>
        </div>
      </div>

      <div className="p-7 grid grid-cols-12 gap-7">
        {/* Left Industries Grid (8 cols) */}
        <div className="col-span-8 grid grid-cols-2 gap-3.5">
          {industriesData.map((industry, idx) => (
            <Link
              key={idx}
              href={`/industries/${industry.slug}`}
              onClick={onClose}
              className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50/70 hover:bg-blue-50/80 border border-slate-200/80 hover:border-[#1D3A74]/40 hover:shadow-md transition-all duration-200 group relative overflow-hidden"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1D3A74] to-[#0B1B3D] text-white flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 group-hover:from-[#2554A5] group-hover:to-[#1D3A74] transition-all">
                {industryIcons[idx] || <Boxes className="w-5 h-5 text-white" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-[#1D3A74] transition-colors truncate">
                    {industry.title}
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1D3A74] opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-1 transition-all shrink-0" />
                </div>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed line-clamp-2 font-normal">
                  {industry.tagline}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Right Featured Card (4 cols) */}
        <div 
          style={{ backgroundColor: "#0B1B3D" }}
          className="col-span-4 bg-megamenu-dark-card rounded-2xl p-6 text-white flex flex-col justify-between relative overflow-hidden border border-blue-900/80 shadow-2xl"
        >
          <div className="relative z-10 space-y-3.5">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase font-extrabold tracking-widest bg-[#1D3A74] text-white px-3 py-1 rounded-full border border-blue-400/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Sector Specialization</span>
            </span>

            <h4 className="text-lg sm:text-xl font-extrabold font-heading leading-snug text-white">
              Engineered for Exact Industry Workflows
            </h4>

            <p className="text-xs text-blue-100 leading-relaxed font-normal">
              From heavy automotive stamping plants with 50T overhead cranes to cleanroom pharmaceutical hubs with zero condensation risk.
            </p>

            <div className="pt-3 border-t border-white/20 space-y-2 text-xs text-blue-100">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Warehousing & 3PL:</strong> High Clear Bay Spans</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Heavy Auto:</strong> Multi-Bay Crane Gantry</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong className="text-white">Food & Pharma:</strong> Clean PUFF Panels</span>
              </div>
            </div>
          </div>

          <div className="pt-5 relative z-10">
            <Link
              href="/industries"
              onClick={onClose}
              className="w-full py-3 bg-white text-[#1D3A74] hover:bg-blue-50 font-extrabold text-xs rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
            >
              <span>VIEW ALL INDUSTRY SECTORS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Quick Strip */}
      <div className="px-8 py-3 bg-slate-900 text-slate-300 text-xs border-t border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="text-blue-400 font-bold">Have a sector-specific engineering requirement?</span>
          <span className="text-slate-400">Consult our structural design specialists today.</span>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            onClick={onClose}
            className="text-white hover:text-blue-300 font-extrabold flex items-center gap-1.5"
          >
            <span>Talk to an Industry Specialist →</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
