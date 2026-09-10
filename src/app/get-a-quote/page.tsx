"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { CheckCircle2, ArrowRight, ArrowLeft, UploadCloud, Calculator, ShieldCheck, Check, Building2, Truck, Layers, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export default function GetAQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [inquiryReference, setInquiryReference] = useState("");

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Personal Details
    fullName: "",
    designation: "",
    email: "",
    phone: "",
    whatsapp: "",

    // Step 2: Company Details
    companyName: "",
    gstin: "",
    industrySector: "Manufacturing & Heavy Engineering",

    // Step 3: Project Location & Timeline
    projectCity: "",
    projectState: "Maharashtra",
    expectedTimeline: "Within 3 to 6 Months",
    siteStatus: "Land Acquired & Ready for Foundation",

    // Step 4: Building Dimensions & Requirements
    buildingType: "Pre-Engineered Building (Clear Span)",
    unit: "meters", // 'meters' | 'feet'
    length: "60",
    width: "30",
    clearHeight: "9",
    craneRequirement: "None",
    mezzanineRequired: "No",
    roofingType: "360° Double-Lock Standing Seam (Leak-Proof)",
    insulationType: "50mm Injected PUFF Panels (R-Value 2.2)",
    projectNotes: "",

    // Step 5: Uploads
    uploadedFileName: "",
  });

  // Calculate live area
  const len = parseFloat(formData.length) || 0;
  const wid = parseFloat(formData.width) || 0;
  const isMeters = formData.unit === "meters";

  // Built up area in Sq. Ft.
  const calculatedAreaSqFt = isMeters
    ? Math.round(len * wid * 10.7639)
    : Math.round(len * wid);

  // Approximate steel tonnage calculation (approx 25-35 kg/sq.m for PEB)
  const approxSteelTonnage = calculatedAreaSqFt > 0
    ? Math.round((calculatedAreaSqFt * 0.0929 * 30) / 1000)
    : 0;

  const totalSteps = 5;

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setInquiryReference(`YTE-${Math.floor(100000 + Math.random() * 900000)}`);
      setIsSubmitted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="INSTANT B2B PROJECT ESTIMATOR"
        title="Get a Precision Structural Quotation"
        subtitle="Complete our 5-step engineering intake wizard to receive preliminary 3D analysis, steel tonnage calculation, and techno-commercial timeline."
        breadcrumbs={[
          { label: "Get a Quote" },
        ]}
        stats={[
          { label: "Average Estimation Turnaround", value: "4 Hours" },
          { label: "BIM 3D Detailing", value: "Included Free" },
          { label: "Value Engineering", value: "Up to 25% Savings" },
          { label: "Turnkey Scope", value: "Foundation to Roof" },
        ]}
      />

      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Wizard Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg">
            {!isSubmitted ? (
              <div>
                {/* Progress Bar & Steps Indicator */}
                <div className="mb-10">
                  <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
                    <span className="text-[#1D3A74]">Step 0{currentStep} of 05</span>
                    <span className="text-blue-600">
                      {currentStep === 1 && "Personal Information"}
                      {currentStep === 2 && "Company Profile"}
                      {currentStep === 3 && "Location & Schedule"}
                      {currentStep === 4 && "Building Dimensions & Live Specs"}
                      {currentStep === 5 && "Drawings & Final Submission"}
                    </span>
                  </div>

                  <div className="w-full bg-slate-200 h-2.5 rounded-full overflow-hidden">
                    <div
                      className="bg-blue-600 h-full transition-all duration-500 ease-out rounded-full"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    />
                  </div>

                  {/* Step Markers */}
                  <div className="hidden sm:grid grid-cols-5 gap-2 mt-4 text-[11px] font-bold text-center">
                    {[
                      "1. Contact",
                      "2. Company",
                      "3. Location",
                      "4. Dimensions",
                      "5. Review",
                    ].map((stepTitle, idx) => (
                      <span
                        key={idx}
                        className={cn(
                          "py-1 rounded transition-colors",
                          currentStep === idx + 1
                            ? "text-[#1D3A74] bg-blue-100 font-extrabold"
                            : currentStep > idx + 1
                            ? "text-emerald-700"
                            : "text-slate-400"
                        )}
                      >
                        {stepTitle}
                      </span>
                    ))}
                  </div>
                </div>

                <form onSubmit={handleNext} className="space-y-6">
                  {/* STEP 1: Personal Details */}
                  {currentStep === 1 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          Step 1: Contact Information
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Who should our senior structural design team address the quotation to?
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Rameshwar Patel"
                            value={formData.fullName}
                            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Designation / Role *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. VP – Projects & Infrastructure"
                            value={formData.designation}
                            onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Corporate Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="ramesh@company.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Direct Mobile Phone *
                          </label>
                          <input
                            type="tel"
                            required
                            placeholder="+91 90390 52643"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 2: Company Details */}
                  {currentStep === 2 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          Step 2: Company & Industry Profile
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Tell us about your organization and industry sector.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Company Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Apex Auto Infrastructure Ltd"
                            value={formData.companyName}
                            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            GST Number / Tax ID (Optional)
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 27AABCY8491M1Z8"
                            value={formData.gstin}
                            onChange={(e) => setFormData({ ...formData, gstin: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Industry Sector *
                        </label>
                        <select
                          value={formData.industrySector}
                          onChange={(e) => setFormData({ ...formData, industrySector: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        >
                          <option value="Manufacturing & Heavy Engineering">Manufacturing & Heavy Engineering</option>
                          <option value="Warehousing, 3PL & Logistics">Warehousing, 3PL & Logistics</option>
                          <option value="Automotive & Auto Components">Automotive & Auto Components</option>
                          <option value="Pharmaceuticals & Chemical Processing">Pharmaceuticals & Chemical Processing</option>
                          <option value="Cold Storage & Food Processing">Cold Storage & Food Processing</option>
                          <option value="Commercial & Retail Development">Commercial & Retail Development</option>
                          <option value="Aviation, Infrastructure & Government">Aviation, Infrastructure & Government</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* STEP 3: Project Location */}
                  {currentStep === 3 && (
                    <div className="space-y-4 animate-fadeIn">
                      <div className="border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          Step 3: Project Site & Delivery Schedule
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Location dictates wind and seismic zone calculations per IS 875 and IS 1893.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Project City / District *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Chakan, Pune / Sanand, Ahmedabad"
                            value={formData.projectCity}
                            onChange={(e) => setFormData({ ...formData, projectCity: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            State *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Maharashtra"
                            value={formData.projectState}
                            onChange={(e) => setFormData({ ...formData, projectState: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Target Execution Timeline
                          </label>
                          <select
                            value={formData.expectedTimeline}
                            onChange={(e) => setFormData({ ...formData, expectedTimeline: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <option value="Urgent (Within 60-90 Days)">Urgent (Within 60–90 Days)</option>
                            <option value="Within 3 to 6 Months">Within 3 to 6 Months</option>
                            <option value="6 to 12 Months (Planning Stage)">6 to 12 Months (Planning Stage)</option>
                            <option value="Budgetary Estimation Only">Budgetary Estimation Only</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Site Status
                          </label>
                          <select
                            value={formData.siteStatus}
                            onChange={(e) => setFormData({ ...formData, siteStatus: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <option value="Land Acquired & Ready for Foundation">Land Acquired & Ready for Foundation</option>
                            <option value="Civil Work in Progress">Civil Work in Progress</option>
                            <option value="Land Acquisition Phase">Land Acquisition Phase</option>
                            <option value="Architectural Layout Finalization">Architectural Layout Finalization</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 4: Building Dimensions & Live Specs */}
                  {currentStep === 4 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          Step 4: Building Dimensions & Technical Parameters
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Configure your building dimensions to calculate live footprint and estimated steel requirements.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Building System
                          </label>
                          <select
                            value={formData.buildingType}
                            onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <option value="Pre-Engineered Building (Clear Span)">Pre-Engineered Building (Clear Span)</option>
                            <option value="Industrial Factory Shed">Industrial Factory Shed</option>
                            <option value="Multi-Bay Logistics Warehouse">Multi-Bay Logistics Warehouse</option>
                            <option value="Cold Storage Insulated Facility">Cold Storage Insulated Facility</option>
                            <option value="Multi-Storey Structural Steel Complex">Multi-Storey Structural Steel Complex</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Measurement Unit
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, unit: "meters" })}
                              className={cn(
                                "py-3 text-xs font-bold rounded-xl border transition-all",
                                formData.unit === "meters"
                                  ? "bg-[#1D3A74] text-white border-[#1D3A74]"
                                  : "bg-white text-slate-700 border-slate-200"
                              )}
                            >
                              Meters (Metric)
                            </button>
                            <button
                              type="button"
                              onClick={() => setFormData({ ...formData, unit: "feet" })}
                              className={cn(
                                "py-3 text-xs font-bold rounded-xl border transition-all",
                                formData.unit === "feet"
                                  ? "bg-[#1D3A74] text-white border-[#1D3A74]"
                                  : "bg-white text-slate-700 border-slate-200"
                              )}
                            >
                              Feet (Imperial)
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Dimension Inputs */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Building Length ({isMeters ? "Meters" : "Feet"}) *
                          </label>
                          <input
                            type="number"
                            required
                            min="5"
                            value={formData.length}
                            onChange={(e) => setFormData({ ...formData, length: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Clear Span Width ({isMeters ? "Meters" : "Feet"}) *
                          </label>
                          <input
                            type="number"
                            required
                            min="5"
                            value={formData.width}
                            onChange={(e) => setFormData({ ...formData, width: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Clear Eave Height ({isMeters ? "Meters" : "Feet"}) *
                          </label>
                          <input
                            type="number"
                            required
                            min="3"
                            value={formData.clearHeight}
                            onChange={(e) => setFormData({ ...formData, clearHeight: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 font-mono"
                          />
                        </div>
                      </div>

                      {/* Live Calculation Panel */}
                      <div className="bg-[#041638] text-white p-6 rounded-2xl border border-blue-900 bg-blueprint-grid">
                        <div className="flex items-center gap-2 text-xs font-bold text-blue-300 uppercase tracking-wider mb-3">
                          <Calculator className="w-4 h-4 text-blue-400" />
                          <span>Live Footprint Calculation</span>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
                          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                            <span className="text-xl sm:text-2xl font-black text-white font-heading block">
                              {new Intl.NumberFormat("en-IN").format(calculatedAreaSqFt)}
                            </span>
                            <span className="text-[11px] text-slate-300">Built-Up Area (Sq. Ft.)</span>
                          </div>
                          <div className="bg-white/5 p-3 rounded-xl border border-white/10">
                            <span className="text-xl sm:text-2xl font-black text-blue-300 font-heading block">
                              ~{approxSteelTonnage} MT
                            </span>
                            <span className="text-[11px] text-slate-300">Approx. Steel Weight</span>
                          </div>
                          <div className="col-span-2 sm:col-span-1 bg-white/5 p-3 rounded-xl border border-white/10">
                            <span className="text-xl sm:text-2xl font-black text-emerald-300 font-heading block">
                              8–12 Wks
                            </span>
                            <span className="text-[11px] text-slate-300">Estimated Erection</span>
                          </div>
                        </div>
                      </div>

                      {/* Crane & Insulation Options */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Overhead Crane Requirement
                          </label>
                          <select
                            value={formData.craneRequirement}
                            onChange={(e) => setFormData({ ...formData, craneRequirement: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <option value="None">None (Standard Building)</option>
                            <option value="5 Tonnes EOT Crane">5 Tonnes EOT Crane</option>
                            <option value="10 Tonnes EOT Crane">10 Tonnes EOT Crane</option>
                            <option value="20 Tonnes EOT Crane">20 Tonnes EOT Crane</option>
                            <option value="35 Tonnes Heavy Crane">35 Tonnes Heavy Crane</option>
                            <option value="50 Tonnes Heavy Stamping Crane">50 Tonnes Heavy Stamping Crane</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                            Insulation / Wall Envelope
                          </label>
                          <select
                            value={formData.insulationType}
                            onChange={(e) => setFormData({ ...formData, insulationType: e.target.value })}
                            className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                          >
                            <option value="50mm Injected PUFF Panels (R-Value 2.2)">50mm Injected PUFF Panels (R-Value 2.2)</option>
                            <option value="80mm Deep Chill PUFF Panels">80mm Deep Chill PUFF Panels</option>
                            <option value="50mm Rockwool Insulation with Wire Mesh">50mm Rockwool Insulation with Wire Mesh</option>
                            <option value="Single Skin Sheet (Uninsulated)">Single Skin Sheet (Uninsulated)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* STEP 5: Document Upload & Submission */}
                  {currentStep === 5 && (
                    <div className="space-y-6 animate-fadeIn">
                      <div className="border-b border-slate-200 pb-3">
                        <h3 className="text-xl font-bold text-slate-900 font-heading">
                          Step 5: Review & Project Uploads
                        </h3>
                        <p className="text-xs text-slate-500 mt-0.5">
                          Attach your site plan, architectural layout, or RFQ document for detailed verification.
                        </p>
                      </div>

                      {/* Review Summary Box */}
                      <div className="p-5 rounded-2xl bg-white border border-slate-200 space-y-3 text-xs">
                        <h4 className="font-bold text-slate-900 text-sm">Specification Summary:</h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          <div>
                            <span className="text-slate-500 block">Contact:</span>
                            <span className="font-bold text-slate-800">{formData.fullName} ({formData.companyName})</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Location:</span>
                            <span className="font-bold text-slate-800">{formData.projectCity}, {formData.projectState}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Footprint:</span>
                            <span className="font-bold text-blue-700 font-mono">{new Intl.NumberFormat("en-IN").format(calculatedAreaSqFt)} Sq. Ft.</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Dimensions:</span>
                            <span className="font-bold text-slate-800 font-mono">{formData.length} × {formData.width} × {formData.clearHeight} {formData.unit}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Crane Support:</span>
                            <span className="font-bold text-slate-800">{formData.craneRequirement}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Timeline:</span>
                            <span className="font-bold text-slate-800">{formData.expectedTimeline}</span>
                          </div>
                        </div>
                      </div>

                      {/* File Upload Box */}
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Attach Drawings / Tender RFQ (PDF / DWG / ZIP)
                        </label>
                        <div className="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center bg-white hover:border-blue-400 transition-colors">
                          <UploadCloud className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                          <p className="text-xs sm:text-sm font-semibold text-slate-700">
                            {formData.uploadedFileName ? formData.uploadedFileName : "Drag and drop your CAD / PDF drawings here"}
                          </p>
                          <span className="text-[10px] text-slate-400 block mt-1">
                            Accepts .dwg, .pdf, .docx, .zip (Max file size: 50MB)
                          </span>
                          <input
                            type="file"
                            accept=".pdf,.dwg,.dxf,.zip,.rar,.doc,.docx"
                            onChange={(e) => {
                              if (e.target.files && e.target.files[0]) {
                                setFormData({ ...formData, uploadedFileName: e.target.files[0].name });
                              }
                            }}
                            className="hidden"
                            id="quote-files"
                          />
                          <label
                            htmlFor="quote-files"
                            className="inline-block mt-3 px-4 py-1.5 text-xs font-bold text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg cursor-pointer transition-colors"
                          >
                            Browse Local Files
                          </label>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Special Engineering Notes or Questions
                        </label>
                        <textarea
                          rows={3}
                          placeholder="Include any specific foundation conditions, dock door counts, skylight requirements, or brand preferences..."
                          value={formData.projectNotes}
                          onChange={(e) => setFormData({ ...formData, projectNotes: e.target.value })}
                          className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="pt-6 border-t border-slate-200 flex items-center justify-between gap-4">
                    {currentStep > 1 ? (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="px-5 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-100 text-sm font-bold flex items-center gap-2 transition-colors"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Previous Step</span>
                      </button>
                    ) : <div />}

                    <button
                      type="submit"
                      className="px-8 py-3.5 bg-[#1D3A74] hover:bg-[#162E60] text-white font-bold rounded-xl shadow-md transition-all flex items-center gap-2 text-sm ml-auto"
                    >
                      <span>{currentStep === totalSteps ? "SUBMIT ESTIMATE REQUEST" : "Continue to Next Step"}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </div>
            ) : (
              /* Success Screen */
              <div className="text-center py-12 space-y-6 animate-fadeIn">
                <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                  <Check className="w-10 h-10 stroke-[3]" />
                </div>

                <div className="max-w-xl mx-auto space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200 inline-block">
                    Inquiry Reference: {inquiryReference}
                  </span>
                  <h3 className="text-3xl font-extrabold text-slate-900 font-heading">
                    Estimate Request Successfully Submitted!
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Thank you, <span className="font-bold text-slate-900">{formData.fullName}</span> ({formData.companyName}). Our structural engineering and proposal bureau has received your requirements for a <span className="font-bold">{new Intl.NumberFormat("en-IN").format(calculatedAreaSqFt)} Sq. Ft.</span> facility in <span className="font-bold">{formData.projectCity}, {formData.projectState}</span>.
                  </p>
                </div>

                {/* What Happens Next 3-Step Banner */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto text-left pt-4">
                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Step 1
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-2">Design Review</h4>
                    <p className="text-[11px] text-slate-500 mt-1">STAAD.Pro preliminary load calculation and wind code check.</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Step 2
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-2">BOQ & Steel Estimate</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Detailed Bill of Quantities, purlin schedule, and coating specs.</p>
                  </div>

                  <div className="bg-white p-5 rounded-xl border border-slate-200">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      Step 3
                    </span>
                    <h4 className="font-bold text-slate-900 text-sm mt-2">Consultation Call</h4>
                    <p className="text-[11px] text-slate-500 mt-1">Direct walkthrough with our senior structural director.</p>
                  </div>
                </div>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-4">
                  <Button href="/" variant="primary" size="md">
                    Return to Homepage
                  </Button>
                  <Button href="/projects" variant="outline" size="md">
                    View Similar Case Studies
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
