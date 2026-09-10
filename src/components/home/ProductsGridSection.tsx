import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { productsData } from "@/data/products";
import { Button } from "@/components/ui/Button";

export const ProductsGridSection: React.FC = () => {
  const featuredProduct = productsData[0];
  const otherProducts = productsData.slice(1);

  const productBadges: Record<string, string> = {
    "industrial-sheds": "Factory Ready",
    "c-z-purlins": "Z275 Galvanized",
    "roofing-sheets": "AZ150 Galvalume",
    "puff-panels": "PIR / PUF Core",
    "ventilation-systems": "Zero-Power Turbo",
  };

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-4 py-1.5 rounded-full border border-blue-200/80 inline-block mb-3">
              OUR PRODUCTS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Complete Steel Building Systems
            </h2>
          </div>
          <Button href="/products" variant="outline" size="md" showArrow className="shrink-0">
            View All Products
          </Button>
        </div>

        {/* 1 Large Featured + 5 Grid Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Featured Product (5 cols on desktop) - Deep Navy guaranteed high contrast */}
          <Link
            href={`/products/${featuredProduct.slug}`}
            className="lg:col-span-5 bg-[#0B1B3D] text-white rounded-3xl p-7 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-2xl hover:border-blue-500 border border-blue-900 transition-all duration-300 bg-blueprint-grid"
          >
            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-widest bg-blue-500/30 text-blue-200 px-3 py-1 rounded border border-blue-400/40 inline-block">
                  Featured Flagship System
                </span>
                <span className="text-xs font-mono font-bold text-blue-400">Up to 90m Clear Span</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading text-white">
                {featuredProduct.title}
              </h3>

              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                {featuredProduct.fullDescription}
              </p>

              <div className="space-y-2.5 pt-3 border-t border-white/10">
                {featuredProduct.features.slice(0, 3).map((f, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-blue-100 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{f.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 pt-6 mt-6 border-t border-white/20 flex items-center justify-between">
              <span className="text-xs sm:text-sm font-bold text-white group-hover:text-blue-300 transition-colors">
                Explore Technical Specifications & Drawings
              </span>
              <div className="w-10 h-10 rounded-full bg-blue-600 group-hover:bg-blue-500 flex items-center justify-center transition-colors shadow-md shrink-0">
                <ArrowRight className="w-5 h-5 text-white transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>

          {/* 5 Smaller Products (7 cols on desktop) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            {otherProducts.map((prod, idx) => (
              <Link
                key={idx}
                href={`/products/${prod.slug}`}
                className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        0{idx + 2}
                      </span>
                      {productBadges[prod.slug] && (
                        <span className="text-[10px] font-bold text-slate-500 bg-slate-200/80 px-2 py-0.5 rounded">
                          {productBadges[prod.slug]}
                        </span>
                      )}
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                  </div>

                  <h4 className="text-lg font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                    {prod.title}
                  </h4>

                  <p className="mt-2 text-xs sm:text-sm text-slate-600 line-clamp-2 leading-relaxed">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-blue-700">
                  <span>View Sizes & Load Limits</span>
                  <span className="text-blue-600 font-bold">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

