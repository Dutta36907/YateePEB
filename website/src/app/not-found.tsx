import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, Building2, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-[#020F24] text-white py-20 px-4 bg-blueprint-grid">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue-400 bg-blue-900/60 px-3.5 py-1.5 rounded border border-blue-700/50 inline-block">
          ERROR 404 — PAGE NOT FOUND
        </span>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight font-heading">
          Structure Not Located
        </h1>

        <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-lg mx-auto">
          The page or structural blueprint you requested has either moved or is currently being pre-engineered. Please use the navigation links below to return to the core site.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="secondary" size="lg" icon={<Home className="w-4 h-4" />}>
            Return to Homepage
          </Button>
          <Button href="/services" variant="white" size="lg" className="bg-white/10 text-white border-white/20">
            Explore Services
          </Button>
          <Button href="/contact" variant="outline" size="lg" className="border-slate-600 text-slate-300 hover:bg-slate-800">
            Contact Support
          </Button>
        </div>

        <div className="pt-10 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-slate-400">
          <Link href="/about" className="hover:text-blue-400 transition-colors">
            About Company
          </Link>
          <Link href="/products" className="hover:text-blue-400 transition-colors">
            Steel Products
          </Link>
          <Link href="/projects" className="hover:text-blue-400 transition-colors">
            Project Case Studies
          </Link>
          <Link href="/get-a-quote" className="hover:text-blue-400 transition-colors">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  );
}
