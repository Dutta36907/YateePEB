import React from "react";
import Link from "next/link";
import { Phone, Mail, Award, Clock, ShieldCheck } from "lucide-react";
import { companyDetails } from "@/data/company";

export const TopBar: React.FC = () => {
  return (
    <div className="bg-[#020F24] text-slate-300 text-xs border-b border-slate-800/80 py-2 hidden lg:block select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Left: ISO & Accreditation */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center gap-1.5 text-blue-400 font-semibold">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span>ISO 9001:2015 & ISO 45001 Certified Company</span>
          </div>
          <span className="text-slate-700">|</span>
          <div className="flex items-center gap-1.5 text-slate-400">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>EN 1090-2 (EXC3) Structural Execution Standard</span>
          </div>
        </div>

        {/* Right: Contact & Working Hours & Socials */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
            <Clock className="w-3.5 h-3.5 text-blue-400" />
            <span>Mon–Sat: 9 AM–6:30 PM</span>
          </div>

          <a
            href={`mailto:${companyDetails.contact.email}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-blue-300 transition-colors font-medium"
          >
            <Mail className="w-3.5 h-3.5 text-blue-400" />
            <span>{companyDetails.contact.email}</span>
          </a>

          <a
            href={`tel:${companyDetails.contact.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-white hover:text-blue-300 transition-colors font-bold"
          >
            <Phone className="w-3.5 h-3.5 text-blue-400" />
            <span>{companyDetails.contact.phone}</span>
          </a>

          <div className="flex items-center space-x-3 pl-2 border-l border-slate-800">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-slate-400 hover:text-blue-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.65 1.65 0 1 0 0-3.3 1.66 1.66 0 0 0 0 3.3m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-slate-400 hover:text-red-400 transition-colors"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M10 15l5.19-3L10 9v6m11.56-7.83c.13.47.22 1.1.28 1.9.07.8.1 1.49.1 2.09L22 12c0 2.19-.16 3.8-.44 4.83-.25.9-.83 1.48-1.73 1.73-.47.13-1.33.22-2.65.28-1.3.07-2.49.1-3.59.1L12 19c-4.19 0-6.8-.16-7.83-.44-.9-.25-1.48-.83-1.73-1.73-.13-.47-.22-1.1-.28-1.9-.07-.8-.1-1.49-.1-2.09L2 12c0-2.19.16-3.8.44-4.83.25-.9.83-1.48 1.73-1.73.47-.13 1.33-.22 2.65-.28 1.3-.07 2.49-.1 3.59-.1L12 5c4.19 0 6.8.16 7.83.44.9.25 1.48.83 1.73 1.73z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
