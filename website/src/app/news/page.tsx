import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { newsArticles } from "@/data/news";
import { ArrowRight, Clock, Calendar, BookOpen, Tag } from "lucide-react";
import { generateBreadcrumbSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "PEB Technical Insights & News | Yatee Steel Structures",
  description:
    "Explore engineering whitepapers, PEB structural optimization guides, factory milestones, and steel construction insights from Yatee Steel Structures.",
  keywords: [
    "PEB Technical Insights",
    "Pre-Engineered Building Design Guide",
    "Tekla 3D Detailing Whitepaper",
    "Structural Steel News India",
    "Yatee Steel Updates",
  ],
  openGraph: {
    title: "Technical Insights & News | Yatee Steel Structures",
    description:
      "Engineering insights, 3D BIM structural optimization whitepapers, and PEB industry analyses.",
    url: "https://yateesteel.com/news",
    images: ["/images/yatee-hero-building.jpg"],
  },
};

export default function NewsPage() {
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News & Insights", url: "/news" },
  ]);

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PageHero
        badge="ENGINEERING KNOWLEDGE HUB"
        title="Technical Insights & Company Updates"
        subtitle="Thought leadership articles, 3D BIM structural optimization whitepapers, factory capacity milestones, and PEB industry analyses."
        breadcrumbs={[{ label: "News & Updates" }]}
        backgroundImage="/images/services/design-engineering.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="PUBLICATIONS"
            title="Latest Engineering Articles & Case Studies"
            subtitle="Explore in-depth technical analyses authored by Yatee structural engineering leaders and operations directors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsArticles.map((article, idx) => (
              <Link
                key={idx}
                href={`/news/${article.slug}`}
                className="bg-[#F8FAFC] rounded-2xl border border-slate-200 p-8 flex flex-col justify-between hover:bg-white hover:border-blue-400 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded">
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

                  <p className="text-xs text-slate-500">
                    By <span className="font-bold text-slate-700">{article.author.name}</span> ({article.author.role})
                  </p>

                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {article.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-white border border-slate-200 px-2 py-0.5 rounded text-slate-600 font-medium">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-[#1D3A74]">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
