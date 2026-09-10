"use client";

import React from "react";
import { Building2, Users, Award, ShieldCheck, Factory } from "lucide-react";
import { StatCounter } from "@/components/ui/StatCounter";
import { companyDetails } from "@/data/company";

export const MetricsSection: React.FC = () => {
  return (
    <section className="bg-[#1D3A74] py-10 relative z-20 border-y border-blue-900 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          <StatCounter
            value={companyDetails.stats.projectsCompleted}
            suffix="+"
            label="Projects Delivered"
            sublabel="Across Industrial & Infrastructure Sectors"
            icon={<Building2 className="w-6 h-6" />}
            theme="dark"
            className="bg-white/5 border-white/10 hover:bg-white/10"
          />

          <StatCounter
            value={companyDetails.stats.happyClients}
            suffix="+"
            label="Corporate Clients"
            sublabel="Leading Tier-1 MNCs, EPCs & Logistics Funds"
            icon={<Users className="w-6 h-6" />}
            theme="dark"
            className="bg-white/5 border-white/10 hover:bg-white/10"
          />

          <StatCounter
            value={companyDetails.stats.yearsExperience}
            suffix="+"
            label="Years of Industry Expertise"
            sublabel="Pioneering Structural Steel Engineering since 2004"
            icon={<Award className="w-6 h-6" />}
            theme="dark"
            className="bg-white/5 border-white/10 hover:bg-white/10"
          />

          <StatCounter
            value={companyDetails.stats.skilledProfessionals}
            suffix="+"
            label="Skilled Professionals"
            sublabel="Structural Engineers, Tekla Detailers & Riggers"
            icon={<ShieldCheck className="w-6 h-6" />}
            theme="dark"
            className="bg-white/5 border-white/10 hover:bg-white/10"
          />
        </div>
      </div>
    </section>
  );
};
