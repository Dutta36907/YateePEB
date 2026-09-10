"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Sliders,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Building,
  Layers,
  Clock,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export const PebEstimatorSection: React.FC = () => {
  const [span, setSpan] = useState<number>(30); // meters (15 to 90)
  const [length, setLength] = useState<number>(80); // meters (30 to 250)
  const [height, setHeight] = useState<number>(9); // meters (6 to 18)
  const [crane, setCrane] = useState<string>("10T"); // 'None', '5T', '10T', '25T', '50T'
  const [cladding, setCladding] = useState<string>("puff"); // 'bare', 'ppgl', 'puff', 'pir'

  // Calculations
  const areaSqM = span * length;
  const areaSqFt = Math.round(areaSqM * 10.7639);

  const craneTonnageMap: Record<string, number> = {
    None: 0,
    "5T": 3.5,
    "10T": 6.2,
    "25T": 11.5,
    "50T": 19.0,
  };

  const claddingWeightMap: Record<string, number> = {
    bare: 4.5,
    ppgl: 5.5,
    puff: 12.0,
    pir: 14.5,
  };

  // Base steel weight kg/sq.m for PEB primary + secondary frames
  const baseWeightPerSqM = 24 + (span > 35 ? (span - 35) * 0.35 : 0) + (height - 6) * 0.9;
  const craneAddition = (craneTonnageMap[crane] || 0) * (length / 6); // crane brackets & runway beams
  const claddingAddition = ((claddingWeightMap[cladding] || 5) * (areaSqM * 1.3)) / 1000;

  const estimatedSteelTonnage = Math.round(
    (areaSqM * baseWeightPerSqM) / 1000 + craneAddition + claddingAddition
  );

  // Delivery & erection weeks estimate
  const leadTimeWeeks = Math.max(5, Math.min(16, Math.round(4 + estimatedSteelTonnage / 90)));

  // Frame recommendation
  const getFrameType = (w: number) => {
    if (w <= 30) return "Clear Span Tapered Rigid Frame (Column-Free)";
    if (w <= 60) return "Heavy-Duty Clear Span Portal with Deep-Haunch Rafters";
    return "Ultra-Wide Clear Span or Modular Multi-Span Engineered Portal";
  };

  return (
    <section id="peb-estimator" className="py-20 lg:py-28 bg-[#0B1B3D] text-white overflow-hidden relative bg-blueprint-grid border-y border-blue-950">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/15 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-900/60 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest mb-3">
            <Calculator className="w-4 h-4 text-blue-400" />
            <span>Interactive PEB Structural Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-heading leading-tight">
            Configure Your Steel Structure & <br className="hidden sm:inline" />
            <span className="text-blue-400">Estimate Tonnage & Schedule</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Adjust building dimensions, crane capacity, and insulation to generate instant structural engineering estimates based on IS 800 & AISC guidelines.
          </p>
        </div>

        {/* Calculator Interactive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Controls Panel (7 cols) */}
          <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-2xl space-y-7 backdrop-blur-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-400" />
                <span>Building Geometry & Equipment Parameters</span>
              </h3>
              <span className="text-xs text-blue-400 font-mono">Live Inputs</span>
            </div>

            {/* Slider 1: Span */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="span-slider" className="font-bold text-slate-200">
                  Building Clear Span (Width):
                </label>
                <span className="font-mono font-extrabold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                  {span} Meters <span className="text-slate-400 text-xs font-normal">({Math.round(span * 3.28084)} ft)</span>
                </span>
              </div>
              <input
                id="span-slider"
                type="range"
                min="15"
                max="90"
                step="1"
                value={span}
                onChange={(e) => setSpan(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>15m (Small Bay)</span>
                <span>45m (Standard Factory)</span>
                <span>90m (Mega Clear Span)</span>
              </div>
            </div>

            {/* Slider 2: Length */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="length-slider" className="font-bold text-slate-200">
                  Building Length:
                </label>
                <span className="font-mono font-extrabold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                  {length} Meters <span className="text-slate-400 text-xs font-normal">({Math.round(length * 3.28084)} ft)</span>
                </span>
              </div>
              <input
                id="length-slider"
                type="range"
                min="30"
                max="250"
                step="5"
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>30m (5 Bays)</span>
                <span>120m (20 Bays)</span>
                <span>250m+ (Mega Warehouse)</span>
              </div>
            </div>

            {/* Slider 3: Eave Height */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="height-slider" className="font-bold text-slate-200">
                  Clear Eave Height:
                </label>
                <span className="font-mono font-extrabold text-blue-400 bg-blue-950 px-2.5 py-1 rounded border border-blue-800">
                  {height} Meters <span className="text-slate-400 text-xs font-normal">({Math.round(height * 3.28084)} ft)</span>
                </span>
              </div>
              <input
                id="height-slider"
                type="range"
                min="6"
                max="18"
                step="0.5"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>6m (Standard Shed)</span>
                <span>12m (High-Bay Racking)</span>
                <span>18m (Heavy Stamping)</span>
              </div>
            </div>

            {/* Selector: Crane Capacity */}
            <div className="space-y-2 pt-1">
              <label className="text-sm font-bold text-slate-200 block">
                Overhead EOT Crane Runway System:
              </label>
              <div className="grid grid-cols-5 gap-2">
                {["None", "5T", "10T", "25T", "50T"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setCrane(opt)}
                    className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${
                      crane === opt
                        ? "bg-blue-600 text-white border-blue-400 shadow-md scale-105"
                        : "bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800"
                    }`}
                  >
                    {opt === "None" ? "No Crane" : `${opt} Crane`}
                  </button>
                ))}
              </div>
            </div>

            {/* Selector: Cladding & Insulation */}
            <div className="space-y-2 pt-1">
              <label className="text-sm font-bold text-slate-200 block">
                Roof & Wall Envelope System:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {[
                  { id: "bare", label: "Bare Galvalume", sub: "AZ150 Metallic" },
                  { id: "ppgl", label: "PPGL Color Sheet", sub: "Single Skin" },
                  { id: "puff", label: "PUFF Sandwich", sub: "50mm Insulated" },
                  { id: "pir", label: "PIR Cleanroom", sub: "80mm Fire-Safe" },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setCladding(item.id)}
                    className={`p-2.5 text-left rounded-lg border transition-all ${
                      cladding === item.id
                        ? "bg-blue-600 text-white border-blue-400 shadow-md"
                        : "bg-slate-950/70 text-slate-300 border-slate-800 hover:bg-slate-800"
                    }`}
                  >
                    <span className="block font-bold text-xs">{item.label}</span>
                    <span className="text-[10px] text-blue-200/80 block">{item.sub}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Results Output Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-br from-[#0B1B3D] via-[#1D3A74] to-[#1F4283] rounded-3xl p-6 sm:p-8 border border-blue-700/60 shadow-2xl flex flex-col justify-between relative overflow-hidden bg-blueprint-grid">
            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-white/20 pb-4">
                <span className="text-xs font-mono uppercase font-bold tracking-wider text-blue-200">
                  Engineering Output
                </span>
                <span className="text-[11px] bg-blue-500/30 text-blue-200 px-2.5 py-1 rounded border border-blue-400/30 font-bold">
                  IS 800:2007 Verified
                </span>
              </div>

              {/* Floor Area Metric */}
              <div className="grid grid-cols-2 gap-4 bg-slate-950/40 p-4 rounded-2xl border border-white/10">
                <div>
                  <span className="text-[11px] text-blue-200 block font-semibold">Total Floor Area</span>
                  <p className="text-2xl font-black text-white font-heading">
                    {new Intl.NumberFormat("en-IN").format(areaSqFt)}
                  </p>
                  <span className="text-[10px] text-slate-300 font-mono">Sq. Ft. ({areaSqM.toLocaleString()} m²)</span>
                </div>
                <div>
                  <span className="text-[11px] text-blue-200 block font-semibold">Estimated Steel Weight</span>
                  <p className="text-2xl font-black text-white font-heading">
                    ~{estimatedSteelTonnage} MT
                  </p>
                  <span className="text-[10px] text-slate-300 font-mono">Structural Steel Tonnage</span>
                </div>
              </div>

              {/* Spec Highlights */}
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Building className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Recommended Frame Type:</span>
                    <span className="text-slate-200 text-[11px] leading-tight">
                      {getFrameType(span)}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <Clock className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Turnkey Completion Lead Time:</span>
                    <span className="text-slate-200 text-[11px]">
                      ~{leadTimeWeeks} to {leadTimeWeeks + 2} Weeks (Fabrication + Erection)
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 bg-white/5 p-3 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-white block">Primary Steel Grade:</span>
                    <span className="text-slate-200 text-[11px]">
                      ASTM A572 Grade 50 / IS 2062 E350 (Yield: 350 MPa)
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Quote CTA */}
            <div className="pt-6 mt-6 border-t border-white/20 relative z-10 space-y-2">
              <Button
                href={`/get-a-quote?span=${span}&length=${length}&height=${height}&crane=${crane}&cladding=${cladding}&tonnage=${estimatedSteelTonnage}`}
                variant="white"
                size="lg"
                showArrow
                className="w-full bg-white text-[#1D3A74] hover:bg-blue-50 font-extrabold shadow-lg rounded-xl"
              >
                REQUEST PROPOSAL FOR THIS CONFIG
              </Button>
              <p className="text-center text-[11px] text-blue-200">
                Includes preliminary 3D STAAD.Pro model & bill of materials (BOM) within 24 business hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
