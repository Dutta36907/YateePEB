"use client";

import React, { useState } from "react";
import { PageHero } from "@/components/shared/PageHero";
import { companyDetails } from "@/data/company";
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ShieldCheck, Building2, Factory } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/seo";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    city: "",
    projectType: "Pre-Engineered Building",
    areaSqFt: "",
    message: "",
    consent: true,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Contact Us", url: "/contact" },
  ]);

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge="GET IN TOUCH"
        title="Let's Build Something Exceptional"
        subtitle="Connect directly with our senior structural engineering consultants, proposal estimation bureau, and manufacturing facility directors."
        breadcrumbs={[{ label: "Contact Us" }]}
        backgroundImage="/images/yatee-hero-slide-1.jpg"
        stats={[
          { label: "Phone Hotline", value: "+91 90390 52643" },
          { label: "Engineering Desk", value: "info@yateesteel.com" },
          { label: "Working Hours", value: "Mon–Sat 9AM–6:30PM" },
          { label: "Direct WhatsApp", value: "+91 90390 52643" },
        ]}
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Contact Form (7 cols) */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                      Inquiry Form
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-2">
                      Send a Direct Project Message
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Our structural estimation team responds within 4 business hours with preliminary technical feedback.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Patel"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Logistics Ltd"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="ramesh@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 90390 52643"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Project Location / City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Indore, MP"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Building System *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      >
                        <option value="Pre-Engineered Building">Pre-Engineered Building (PEB)</option>
                        <option value="Industrial Factory Shed">Industrial Factory Shed</option>
                        <option value="High-Bay Warehouse">High-Bay Warehouse</option>
                        <option value="Light Gauge Steel (LGS) Structure">Light Gauge Steel (LGS) Structure</option>
                        <option value="Multi-Storey Steel Complex">Multi-Storey Steel Complex</option>
                        <option value="C & Z Purlins / Sheeting">C & Z Purlins / Sheeting Supply</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Approx. Area (Sq.Ft.)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. 50,000"
                        value={formData.areaSqFt}
                        onChange={(e) => setFormData({ ...formData, areaSqFt: e.target.value })}
                        className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Project Requirements / Bay Clearances / Notes
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Please specify clear height, crane requirements (if any), mezzanine needs, or target completion schedule..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 text-sm bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-2xs"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="consent-check"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                    />
                    <label htmlFor="consent-check" className="text-xs text-slate-600">
                      I agree to receive preliminary techno-commercial proposals from Yatee Steel Structures.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1D3A74] hover:bg-[#162E60] text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 text-base"
                  >
                    <Send className="w-5 h-5" />
                    <span>SUBMIT DIRECT ENQUIRY</span>
                  </button>
                </form>
              ) : (
                <div className="text-center py-12 space-y-5">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading">
                    Thank You, {formData.name}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed">
                    Your inquiry regarding <span className="font-bold">{formData.projectType}</span> has been received. Our senior engineering estimator will contact you within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-bold text-blue-600 hover:underline pt-4 block mx-auto"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              )}
            </div>

            {/* Right Office & Direct Coordinates (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Corporate & Registered HQ */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#1D3A74] flex items-center justify-center border border-blue-100">
                    <Building2 className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">
                      Corporate Headquarters
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Indore Headquarters
                    </h3>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1 text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">{companyDetails.headquarters.addressLine1},</p>
                  <p>{companyDetails.headquarters.addressLine2}, {companyDetails.headquarters.city} ({companyDetails.headquarters.state})</p>
                  <p className="text-slate-500 font-medium">PIN Code: {companyDetails.headquarters.postalCode}, {companyDetails.headquarters.country}</p>
                </div>

                {/* Direct Phone & Email */}
                <div className="pt-2 border-t border-slate-100 space-y-2.5 text-xs sm:text-sm">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Direct Telephones</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <a
                      href="tel:+919039052643"
                      className="flex items-center gap-2 p-2.5 bg-blue-50/60 hover:bg-blue-100/60 border border-blue-100 rounded-xl text-[#1D3A74] font-bold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                      <div>
                        <span className="block text-[10px] uppercase font-semibold text-blue-600">Primary Hotline</span>
                        <span>+91 90390 52643</span>
                      </div>
                    </a>
                    <a
                      href="tel:+919039052644"
                      className="flex items-center gap-2 p-2.5 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-xl text-slate-800 font-bold transition-colors"
                    >
                      <Phone className="w-4 h-4 text-slate-600 shrink-0" />
                      <div>
                        <span className="block text-[10px] uppercase font-semibold text-slate-500">Alternate Desk</span>
                        <span>+91 90390 52644</span>
                      </div>
                    </a>
                  </div>

                  <a
                    href={`mailto:${companyDetails.contact.email}`}
                    className="flex items-center gap-3 p-3 bg-emerald-50/50 hover:bg-emerald-100/60 border border-emerald-200/70 rounded-xl text-slate-800 transition-colors"
                  >
                    <Mail className="w-4 h-4 text-emerald-600 shrink-0" />
                    <div>
                      <span className="block text-[10px] uppercase font-bold text-emerald-700">Official Inquiries & Proposals</span>
                      <span className="font-semibold text-slate-900 text-sm">{companyDetails.contact.email}</span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Manufacturing Plant */}
              <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-xs space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center">
                    <Factory className="w-5 h-5 text-amber-600" />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-600 block">
                      Heavy Fabrication Facility (6 Acres)
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 font-heading">
                      Nandasan Plant, Gujarat
                    </h3>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200/80 space-y-1 text-xs sm:text-sm text-slate-700">
                  <p className="font-semibold text-slate-900">{companyDetails.name}</p>
                  <p>{companyDetails.manufacturingFacility.addressLine1}, {companyDetails.manufacturingFacility.addressLine2}</p>
                  <p className="text-slate-500 font-medium">{companyDetails.manufacturingFacility.city}, {companyDetails.manufacturingFacility.state} – {companyDetails.manufacturingFacility.postalCode}</p>
                </div>

                <div className="pt-2 border-t border-slate-100 space-y-1 text-xs text-slate-500">
                  <p><strong>Capacity:</strong> 22,000 MT / Annum</p>
                  <p><strong>Campus:</strong> 6 Acres Heavy Fabrication Bays</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Branch Offices & Instant Quotation Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* Regional Branch Offices (7 cols) */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    Regional Network
                  </span>
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 font-heading">
                  Regional Branch Offices
                </h3>
                <p className="text-sm text-slate-500 mt-1 mb-6">
                  Direct commercial and project liaison offices supporting client operations across East and North-Eastern industrial corridors.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {companyDetails.branches.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-blue-300 hover:bg-blue-50/30 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-900 uppercase tracking-wide">
                            {b.city} Branch
                          </span>
                          <span className="text-[10px] font-semibold bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600">
                            {b.state}
                          </span>
                        </div>
                        <p className="text-slate-500 text-xs leading-relaxed mb-4">
                          {b.region}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-slate-200/60 space-y-1.5 text-xs">
                        <a
                          href={`tel:${b.phone.replace(/[^+\d]/g, "")}`}
                          className="flex items-center gap-2 font-semibold text-slate-700 hover:text-blue-600 transition-colors"
                        >
                          <Phone className="w-3.5 h-3.5 text-blue-600" />
                          <span>{b.phone}</span>
                        </a>
                        <a
                          href={`mailto:${b.email}`}
                          className="flex items-center gap-2 font-semibold text-blue-600 hover:underline transition-colors"
                        >
                          <Mail className="w-3.5 h-3.5 text-blue-600" />
                          <span>{b.email}</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Instant Quotation & Working Hours Banner (5 cols) */}
            <div className="lg:col-span-5 bg-[#041638] text-white p-8 sm:p-10 rounded-3xl border border-blue-900 shadow-sm flex flex-col justify-between bg-blueprint-grid relative overflow-hidden">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-xs text-blue-300 font-semibold">
                  <Clock className="w-4 h-4 text-blue-400" />
                  <span>{companyDetails.contact.workingHours}</span>
                </div>

                <h3 className="text-2xl font-extrabold font-heading text-white tracking-tight">
                  Need an Instant Quotation?
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  Use our interactive 5-stage B2B project calculator to estimate steel tonnage, clear spans, and budget in minutes.
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-blue-800/60">
                <Button
                  href="/get-a-quote"
                  variant="secondary"
                  size="lg"
                  className="w-full justify-center shadow-lg font-bold"
                  showArrow
                >
                  Launch Interactive Quote Engine
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
