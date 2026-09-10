import React from "react";
import { Quote, Star } from "lucide-react";
import { testimonialsData } from "@/data/certifications";

export const TestimonialSection: React.FC = () => {
  const featuredTestimonial = testimonialsData[0];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-slate-200/80 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#EEF2F6] rounded-3xl p-8 sm:p-12 lg:p-16 border border-slate-200/80 shadow-xs relative">
          <Quote className="w-16 h-16 text-blue-200 absolute top-8 right-8 pointer-events-none opacity-60" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-500 ml-2">Executive Recommendation</span>
            </div>

            <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-[#0F172A] tracking-tight leading-relaxed font-heading">
              &ldquo;{featuredTestimonial.quote}&rdquo;
            </blockquote>

            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-lg font-extrabold text-[#1D3A74]">
                  {featuredTestimonial.author}
                </h4>
                <p className="text-xs sm:text-sm text-slate-600">
                  {featuredTestimonial.designation}, <span className="font-semibold">{featuredTestimonial.company}</span>
                </p>
              </div>

              <div className="text-left sm:text-right">
                <span className="text-xs uppercase font-bold text-blue-600 block">Project Executed</span>
                <span className="text-xs text-slate-500 font-medium">{featuredTestimonial.project} ({featuredTestimonial.location})</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
