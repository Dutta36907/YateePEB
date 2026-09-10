import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productsData } from "@/data/products";
import { ArrowRight, CheckCircle2, ShieldCheck, Download } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Products & Steel Building Systems | Yatee Steel Structures",
  description:
    "Explore Yatee's engineered product range: Pre-Engineered Buildings, Industrial Factory Sheds, Cold-Formed C & Z Purlins, Colour-Coated Roofing Sheets, PUFF Sandwich Panels, and Turbo Ventilators.",
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="ENGINEERED PRODUCT SYSTEMS"
        title="Complete Pre-Engineered Steel Systems"
        subtitle="Manufactured using high-yield E350 grade structural steel, hot-dip galvanized cold-rolled purlins, and premium insulated sandwich panels."
        breadcrumbs={[{ label: "Products" }]}
        stats={[
          { label: "Product Lines", value: "6 Core Systems" },
          { label: "Steel Yield", value: "350–550 MPa" },
          { label: "Zinc Coating", value: "Up to 275 GSM" },
          { label: "Thermal Rating", value: "U < 0.22 W/m²K" },
        ]}
      />

      {/* Product Catalog Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PRODUCT DIRECTORY"
            title="Engineered for Strength, Precision & Thermal Efficiency"
            subtitle="Explore our comprehensive range of structural frames, secondary cold-formed profiles, insulated wall cladding, and natural ventilation systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productsData.map((product, idx) => (
              <div
                key={idx}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-2xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                      Product 0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-400">IS / ASTM Certified</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {product.title}
                  </h3>

                  <p className="text-xs font-bold text-blue-600 mt-1">
                    {product.subtitle}
                  </p>

                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {product.shortDescription}
                  </p>

                  <div className="space-y-2 mt-5 pt-5 border-t border-slate-200/80">
                    {product.features.slice(0, 3).map((f, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{f.title}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <Link
                    href={`/products/${product.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-[#1D3A74] group-hover:text-blue-600 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-[#0B1B3D] text-white p-8 sm:p-12 rounded-3xl border border-blue-900 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden bg-blueprint-grid">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block mb-1">
                COMPREHENSIVE CATALOGUE
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-heading">
                Download Yatee Product Catalogue & Load Span Tables
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-2">
                Detailed dimensions, section properties, coating specs, and design charts for architects and structural consultants.
              </p>
            </div>
            <Button href="/contact" variant="secondary" size="lg" icon={<Download className="w-5 h-5" />}>
              Download Full PDF Catalog
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
