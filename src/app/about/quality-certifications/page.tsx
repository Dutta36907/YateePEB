import React from "react";
import type { Metadata } from "next";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { certificationsData } from "@/data/certifications";
import { Award, ShieldCheck, FileCheck, CheckCircle2, CheckSquare, Search, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "ISO 9001:2015 Quality & Certifications | Yatee Steel Structures",
  description:
    "Review Yatee's ISO 9001:2015, ISO 14001:2015, ISO 45001:2018, and CE EN 1090-2 structural steel quality standards, NDT testing workflows, and safety governance.",
  keywords: [
    "ISO 9001:2015 PEB Manufacturer",
    "Structural Steel Quality Testing India",
    "Ultrasonic Testing Weld Inspection AWS D1.1",
    "EN 1090-2 Structural Steel Standards",
    "IS 800:2007 Compliant Steel Fabrication",
  ],
  openGraph: {
    title: "Quality Management & ISO 9001:2015 Certifications | Yatee Steel",
    description:
      "Certified ISO 9001:2015 quality control, non-destructive weld testing, and IS 800:2007 code compliance across all structural fabrication.",
    url: "https://yateesteel.com/about/quality-certifications",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function QualityCertificationsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about" },
    { name: "Quality & Certifications", url: "/about/quality-certifications" },
  ]);

  const qaWorkflow = [
    {
      phase: "01",
      title: "Incoming Raw Material Inspection",
      points: [
        "100% verification of Mill Test Certificates (MTC) from primary producers (Tata Steel / JSW / SAIL)",
        "Spectrometric chemical composition testing (Carbon, Manganese, Silicon limits)",
        "Ultrasonic lamination flaw checks on plates exceeding 25mm thickness",
        "Visual inspection for surface pitting, lamination, and dimensional gauge tolerances",
      ],
    },
    {
      phase: "02",
      title: "In-Process Fabrication & Welding QA",
      points: [
        "CNC cutting and weld bevel angle verification per AWS D1.1 structural welding code",
        "Weld throat thickness, fit-up alignment, and tack weld quality checks",
        "Submerged Arc Welding (SAW) parameter monitoring (Voltage, Current, Travel Speed)",
        "100% Visual Inspection (VT) on all structural weld seams by certified inspectors",
      ],
    },
    {
      phase: "03",
      title: "Non-Destructive Testing (NDT) Protocol",
      points: [
        "Ultrasonic Testing (UT) on 100% of full penetration flange/web butt joints",
        "Magnetic Particle Testing (MPI) on critical moment connection fillet welds",
        "Liquid Penetrant Testing (LPT) on heavy gusset plate edges and shear lugs",
        "Third-Party Inspection (TPI) coordination with Bureau Veritas, TUV, DNV, or Lloyds",
      ],
    },
    {
      phase: "04",
      title: "Surface Treatment & Paint Inspection",
      points: [
        "Abrasive shot blasting surface profile verification (Swedish Standard SA 2.5)",
        "Ambient relative humidity and steel surface temperature check prior to primer application",
        "Dry Film Thickness (DFT) measurement using calibrated digital electromagnetic gauges",
        "Cross-hatch adhesion and scratch resistance testing per ASTM D3359 standards",
      ],
    },
  ];

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge="CERTIFIED EXCELLENCE"
        title="Quality & Certifications"
        subtitle="Uncompromising Quality Assurance built into every stage—from incoming mill plate inspection to ultrasonic weld testing and ISO 45001 certified on-site rigging."
        breadcrumbs={[
          { label: "About Us", href: "/about" },
          { label: "Quality & Certifications" },
        ]}
        backgroundImage="/images/services/custom-structures.jpg"
        stats={[
          { label: "Quality System", value: "ISO 9001:2015" },
          { label: "Safety Standard", value: "ISO 45001:2018" },
          { label: "Environment", value: "ISO 14001:2015" },
          { label: "Execution Code", value: "EN 1090-2" },
        ]}
      />

      {/* Certification Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="ACCREDITATIONS"
            title="Recognized International Standards"
            subtitle="Yatee operates under rigorous third-party audited quality and safety certifications governing all plant and on-site activities."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificationsData.map((cert, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 flex flex-col justify-between shadow-xs hover:border-blue-400 hover:shadow-xl transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">
                      {cert.badge}
                    </span>
                    <ShieldCheck className="w-5 h-5 text-blue-600" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 font-heading">{cert.name}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-1">{cert.code}</p>
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">{cert.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/80 text-xs text-slate-500 space-y-1">
                  <p><strong>Auditing Body:</strong> {cert.issuer}</p>
                  <p><strong>Status:</strong> {cert.validUntil}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QA/QC 4-Stage Workflow */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="STRINGENT TESTING PROTOCOL"
            title="Our 4-Stage Quality Assurance Workflow"
            subtitle="Every fabricated tonne of steel passes through strict quality gates before being tagged for logistics dispatch."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {qaWorkflow.map((stage, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 rounded-xl bg-[#1D3A74] text-white font-mono font-bold text-sm flex items-center justify-center">
                    {stage.phase}
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 font-heading">{stage.title}</h3>
                </div>

                <ul className="space-y-3 pt-2">
                  {stage.points.map((pt, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                      <CheckSquare className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Request Quality Manual & Sample NDT Reports
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
