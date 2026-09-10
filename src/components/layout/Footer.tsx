import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ShieldCheck, ArrowRight } from "lucide-react";
import { companyDetails } from "@/data/company";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#07132B] text-slate-300 border-t border-slate-800 text-sm">
      {/* Top CTA Banner */}
      <div className="bg-[#1D3A74] border-b border-blue-800/80 py-12 relative overflow-hidden bg-blueprint-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="max-w-2xl text-center md:text-left">
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-200 bg-blue-950/60 px-3.5 py-1.5 rounded-full border border-blue-400/30 inline-block mb-3">
              Start Your Project
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
              Planning your next industrial or PEB project?
            </h3>
            <p className="mt-2 text-slate-200 text-sm sm:text-base leading-relaxed font-normal">
              Talk to our structural engineering specialists for preliminary 3D analysis, steel optimization, and fast-track estimation.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
            <Link
              href="/get-a-quote"
              className="px-6 py-3.5 bg-white hover:bg-blue-50 text-[#1D3A74] font-black rounded-xl shadow-lg transition-all inline-flex items-center gap-2 group tracking-wide text-sm"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-xs transition-all border border-white/20 text-sm"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block group" aria-label="Yatee Steel Structures Home">
              <Image
                src="/images/yatee-logo-white.webp"
                alt="Yatee Steel Structures Pvt Ltd"
                width={200}
                height={54}
                className="h-11 sm:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
              />
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              India&apos;s premier Pre-Engineered Building (PEB) and heavy structural steel manufacturing enterprise. Delivering precision-engineered turnkey facilities with 45,000 MT annual throughput.
            </p>

            {/* Certifications Badge */}
            <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Certified Engineering Standards</span>
              </div>
              <p className="text-xs text-slate-400">
                ISO 9001:2015 (Quality), ISO 14001:2015 (Environment), ISO 45001:2018 (Safety) & EN 1090-2 (EXC3)
              </p>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 transition-colors border border-slate-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-lg bg-slate-900 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 transition-colors border border-slate-800"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {servicesData.map((s, idx) => (
                <li key={idx}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors block leading-tight"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-bold text-xs flex items-center gap-1">
                  <span>View All Services</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Products (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Our Products
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {productsData.map((p, idx) => (
                <li key={idx}>
                  <Link
                    href={`/products/${p.slug}`}
                    className="text-slate-400 hover:text-white transition-colors block leading-tight"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link href="/products" className="text-blue-400 hover:text-blue-300 font-bold text-xs flex items-center gap-1">
                  <span>View Product Catalog</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quick Links & Sectors (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Yatee
                </Link>
              </li>
              <li>
                <Link href="/about/manufacturing-infrastructure" className="text-slate-400 hover:text-white transition-colors">
                  Manufacturing Plant
                </Link>
              </li>
              <li>
                <Link href="/about/quality-certifications" className="text-slate-400 hover:text-white transition-colors">
                  Quality & Standards
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-400 hover:text-white transition-colors">
                  Project Portfolio
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-slate-400 hover:text-white transition-colors">
                  Technical Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-400 hover:text-white transition-colors">
                  Careers & Openings
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Office
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Contact Coordinates (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-white font-bold text-sm tracking-wider uppercase border-b border-slate-800 pb-2">
              Locations
            </h4>

            <div className="space-y-4 text-xs">
              <div>
                <p className="font-bold text-white flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>Corporate Office:</span>
                </p>
                <p className="text-slate-400 pl-4.5 leading-relaxed">
                  {companyDetails.headquarters.addressLine1}, {companyDetails.headquarters.addressLine2}, {companyDetails.headquarters.city} ({companyDetails.headquarters.state}) - {companyDetails.headquarters.postalCode}
                </p>
              </div>

              <div>
                <p className="font-bold text-white flex items-center gap-1 mb-1">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Manufacturing Plant:</span>
                </p>
                <p className="text-slate-400 pl-4.5 leading-relaxed">
                  {companyDetails.manufacturingFacility.addressLine1}, Chakan, Pune - {companyDetails.manufacturingFacility.postalCode}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/60 space-y-1.5">
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${companyDetails.contact.phone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-slate-300 hover:text-white font-bold"
                  >
                    <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>{companyDetails.contact.phone}</span>
                  </a>
                  <a
                    href={`tel:${companyDetails.contact.altPhone.replace(/\s+/g, "")}`}
                    className="flex items-center gap-2 text-slate-400 hover:text-white text-xs pl-5.5"
                  >
                    <span>{companyDetails.contact.altPhone}</span>
                  </a>
                </div>
                <a
                  href={`mailto:${companyDetails.contact.email}`}
                  className="flex items-center gap-2 text-slate-300 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span>{companyDetails.contact.email}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {companyDetails.name}. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <span className="text-slate-600">CIN: {companyDetails.cin}</span>
            <span className="text-slate-600">GST: {companyDetails.gstin}</span>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap.xml" className="hover:text-slate-400 transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
