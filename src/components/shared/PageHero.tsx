import React from "react";
import { Breadcrumbs, BreadcrumbItem } from "@/components/layout/Breadcrumbs";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  badge?: string;
  title: string;
  subtitle?: string;
  breadcrumbs: BreadcrumbItem[];
  stats?: { label: string; value: string }[];
  children?: React.ReactNode;
  backgroundImage?: string;
  className?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
  stats,
  children,
  backgroundImage,
  className,
}) => {
  return (
    <section
      className={cn(
        "relative bg-[#0B1B3D] text-white pt-10 pb-16 sm:pt-14 sm:pb-20 overflow-hidden border-b border-blue-900/50 bg-blueprint-grid",
        className
      )}
    >
      {/* Background Lighting Scrim */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#020F24] via-[#0B1B3D]/95 to-[#1D3A74]/80 pointer-events-none" />
      <div className="absolute inset-0 radial-navy-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Breadcrumbs items={breadcrumbs} theme="dark" />

        <div className="max-w-3xl">
          {badge && (
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] bg-blue-500/20 text-blue-300 px-3.5 py-1.5 rounded-md border border-blue-400/30">
                {badge}
              </span>
            </div>
          )}

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] font-heading text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="mt-5 text-base sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed">
              {subtitle}
            </p>
          )}

          {children && <div className="mt-8">{children}</div>}
        </div>

        {/* Optional Stats Banner */}
        {stats && stats.length > 0 && (
          <div className="mt-12 pt-8 border-t border-blue-900/60 grid grid-cols-2 sm:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <div key={idx} className="bg-slate-900/40 p-4 rounded-xl border border-blue-900/40">
                <span className="text-2xl sm:text-3xl font-black text-white block font-heading tracking-tight">
                  {stat.value}
                </span>
                <span className="text-xs text-blue-200 mt-1 block uppercase tracking-wider font-semibold">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
