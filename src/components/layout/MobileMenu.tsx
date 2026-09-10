"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, X, Phone, Mail } from "lucide-react";
import { companyDetails } from "@/data/company";
import { servicesData } from "@/data/services";
import { productsData } from "@/data/products";
import { industriesData } from "@/data/industries";
import { Button } from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  if (!isOpen) return null;

  const toggleGroup = (group: string) => {
    setExpandedGroup(expandedGroup === group ? null : group);
  };

  const aboutLinks = [
    { title: "About Hub", href: "/about" },
    { title: "Company Overview", href: "/about/company-overview" },
    { title: "Vision, Mission & Values", href: "/about/vision-mission-values" },
    { title: "Why Choose Us", href: "/about/why-choose-us" },
    { title: "Manufacturing & Infrastructure", href: "/about/manufacturing-infrastructure" },
    { title: "Quality & Certifications", href: "/about/quality-certifications" },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      {/* Drawer Container */}
      <div className="w-full max-w-md ml-auto h-full bg-white flex flex-col shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <Link href="/" onClick={onClose} className="flex items-center gap-2">
            <Image
              src="/images/yatee-logo.webp"
              alt="Yatee Steel Structures"
              width={160}
              height={44}
              className="h-9 w-auto object-contain"
            />
          </Link>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-200 text-slate-700 hover:bg-slate-300 transition-colors"
            aria-label="Close Navigation Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-5 space-y-2 flex-1">
          <Link
            href="/"
            onClick={onClose}
            className="block px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 hover:text-[#1D3A74] rounded-xl transition-colors"
          >
            Home
          </Link>

          {/* About Group */}
          <div>
            <button
              onClick={() => toggleGroup("about")}
              className="w-full px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>About Us</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedGroup === "about" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {expandedGroup === "about" && (
              <div className="pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-blue-200 ml-4 my-1">
                {aboutLinks.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={onClose}
                    className="block py-2 text-sm font-medium text-slate-600 hover:text-[#1D3A74]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Group */}
          <div>
            <button
              onClick={() => toggleGroup("services")}
              className="w-full px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Services</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedGroup === "services" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {expandedGroup === "services" && (
              <div className="pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-blue-200 ml-4 my-1">
                <Link
                  href="/services"
                  onClick={onClose}
                  className="block py-2 text-sm font-bold text-blue-700"
                >
                  All Services Hub →
                </Link>
                {servicesData.map((service, idx) => (
                  <Link
                    key={idx}
                    href={`/services/${service.slug}`}
                    onClick={onClose}
                    className="block py-2 text-sm font-medium text-slate-600 hover:text-[#1D3A74]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Products Group */}
          <div>
            <button
              onClick={() => toggleGroup("products")}
              className="w-full px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Products</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedGroup === "products" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {expandedGroup === "products" && (
              <div className="pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-blue-200 ml-4 my-1">
                <Link
                  href="/products"
                  onClick={onClose}
                  className="block py-2 text-sm font-bold text-blue-700"
                >
                  All Products Hub →
                </Link>
                {productsData.map((product, idx) => (
                  <Link
                    key={idx}
                    href={`/products/${product.slug}`}
                    onClick={onClose}
                    className="block py-2 text-sm font-medium text-slate-600 hover:text-[#1D3A74]"
                  >
                    {product.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Industries Group */}
          <div>
            <button
              onClick={() => toggleGroup("industries")}
              className="w-full px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 rounded-xl flex items-center justify-between transition-colors"
            >
              <span>Industries</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  expandedGroup === "industries" ? "rotate-180 text-blue-600" : "text-slate-400"
                }`}
              />
            </button>
            {expandedGroup === "industries" && (
              <div className="pl-6 pr-2 py-2 space-y-1.5 border-l-2 border-blue-200 ml-4 my-1">
                <Link
                  href="/industries"
                  onClick={onClose}
                  className="block py-2 text-sm font-bold text-blue-700"
                >
                  All Industries Hub →
                </Link>
                {industriesData.map((industry, idx) => (
                  <Link
                    key={idx}
                    href={`/industries/${industry.slug}`}
                    onClick={onClose}
                    className="block py-2 text-sm font-medium text-slate-600 hover:text-[#1D3A74]"
                  >
                    {industry.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projects"
            onClick={onClose}
            className="block px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 hover:text-[#1D3A74] rounded-xl transition-colors"
          >
            Projects
          </Link>

          <Link
            href="/news"
            onClick={onClose}
            className="block px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 hover:text-[#1D3A74] rounded-xl transition-colors"
          >
            News & Updates
          </Link>

          <Link
            href="/careers"
            onClick={onClose}
            className="block px-4 py-3 text-base font-bold text-slate-800 hover:bg-blue-50 hover:text-[#1D3A74] rounded-xl transition-colors"
          >
            Careers
          </Link>

          <Link
            href="/contact"
            onClick={onClose}
            className="block px-4 py-3 text-base font-extrabold text-slate-800 hover:bg-blue-50 hover:text-[#1D3A74] rounded-xl transition-colors"
          >
            Contact Us
          </Link>
        </div>

        {/* Footer Actions */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-3">
          <Button href="/get-a-quote" variant="primary" size="lg" className="w-full bg-[#1D3A74] hover:bg-[#162E60] font-extrabold rounded-xl" showArrow>
            GET A QUOTE
          </Button>

          <div className="pt-2 flex items-center justify-between text-xs text-slate-600">
            <a
              href={`tel:${companyDetails.contact.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 font-bold text-[#1D3A74]"
            >
              <Phone className="w-3.5 h-3.5 text-blue-600" />
              <span>{companyDetails.contact.phone}</span>
            </a>
            <a
              href={`mailto:${companyDetails.contact.email}`}
              className="flex items-center gap-1.5 text-slate-600 hover:text-[#1D3A74]"
            >
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
