import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, BookOpen } from "lucide-react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { newsArticles } from "@/data/news";
import { Button } from "@/components/ui/Button";

export const InsightsSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-28 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
              KNOWLEDGE & NEWS
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0F172A] tracking-tight font-heading">
              Engineering Insights & Industry Updates
            </h2>
          </div>
          <Button href="/news" variant="outline" size="md" showArrow className="shrink-0">
            View All Articles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {newsArticles.map((article, idx) => (
            <Link
              key={idx}
              href={`/news/${article.slug}`}
              className="bg-white rounded-2xl border border-slate-200/80 p-7 flex flex-col justify-between hover:border-[#1D3A74]/40 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1D3A74] bg-blue-50 px-2.5 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#1D3A74] transition-colors leading-snug font-heading">
                  {article.title}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                  {article.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-[#1D3A74]">
                <span>Read Full Engineering Analysis</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
