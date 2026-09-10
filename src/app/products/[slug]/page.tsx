import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productsData } from "@/data/products";
import { SpecTable } from "@/components/ui/SpecTable";
import { Accordion } from "@/components/ui/Accordion";
import { CheckCircle2, ArrowRight, ShieldCheck, Download, Layers, Sparkles, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProductDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} | Yatee Steel Structures`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  const product = productsData.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <PageHero
        badge="PRODUCT SPECIFICATION"
        title={product.title}
        subtitle={product.subtitle}
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: product.title },
        ]}
      />

      {/* Main Content & Specs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Product Overview */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
                  OVERVIEW & DESIGN
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                  Engineered for Performance & Long-Term Reliability
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {product.fullDescription}
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Key Technical Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {product.features.map((feat, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                      <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                        <span>{feat.title}</span>
                      </h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">
                        {feat.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Specifications Table */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Standard Specifications & Material Properties
                </h3>
                <SpecTable specifications={product.specifications} title={`${product.title} Parameters`} />
              </div>

              {/* Available Dimensions or Coatings */}
              {product.dimensions && product.dimensions.length > 0 && (
                <div className="p-8 rounded-2xl bg-slate-900 text-white border border-slate-800">
                  <h3 className="text-xl font-bold font-heading mb-4 text-white">
                    Available Dimensions & Standard Ranges
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {product.dimensions.map((dim, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 flex items-center justify-between">
                        <span className="text-xs text-slate-300 font-semibold">{dim.parameter}:</span>
                        <span className="text-xs font-mono font-bold text-blue-400">{dim.range}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Manufacturing & QA Workflow */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Manufacturing Process & QA Gates
                </h3>
                <div className="space-y-4">
                  {product.manufacturingProcess.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200">
                      <span className="w-9 h-9 rounded-lg bg-[#1D3A74] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {step.step}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Applications List */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-4">
                  Typical Industrial Applications
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.applications.map((app, i) => (
                    <div key={i} className="p-3.5 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>{app}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              {product.faqs && product.faqs.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                    Frequently Asked Questions
                  </h3>
                  <Accordion items={product.faqs} />
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Quote CTA */}
              <div className="bg-[#1D3A74] text-white p-6 rounded-2xl shadow-xl space-y-4 relative overflow-hidden bg-blueprint-grid">
                <span className="text-xs font-bold uppercase tracking-widest text-blue-300 block">
                  FAST-TRACK ESTIMATION
                </span>
                <h4 className="text-xl font-bold font-heading">
                  Get a Quotation for {product.title}
                </h4>
                <p className="text-xs text-slate-200 leading-relaxed">
                  Provide your length, width, clear height, and location parameters for an instant preliminary estimate and structural schedule.
                </p>
                <Button href="/get-a-quote" variant="secondary" size="md" className="w-full" showArrow>
                  Start Project Estimator
                </Button>
              </div>

              {/* Product Catalog Download */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Technical Documentation
                </h4>
                <p className="text-xs text-slate-600">
                  Download technical brochures, section modulus tables, and CAD profiles.
                </p>
                <Button href="/contact" variant="outline" size="sm" className="w-full" icon={<Download className="w-4 h-4" />}>
                  Download Data Sheet (PDF)
                </Button>
              </div>

              {/* Other Products Navigation */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  Other Product Lines
                </h4>
                <div className="space-y-1.5">
                  {productsData.map((p, idx) => (
                    <Link
                      key={idx}
                      href={`/products/${p.slug}`}
                      className={`block px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                        p.slug === product.slug
                          ? "bg-[#1D3A74] text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {p.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
