import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { newsArticles } from "@/data/news";
import { Calendar, Clock, User, ArrowRight, Share2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { generateBreadcrumbSchema, generateArticleSchema, SITE_URL } from "@/lib/seo";

interface NewsDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return newsArticles.map((a) => ({
    slug: a.slug,
  }));
}

export async function generateMetadata({ params }: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const title = `${article.title} | Yatee Steel Insights`;
  const description = article.summary;

  return {
    title,
    description,
    keywords: [
      ...article.tags,
      "PEB Engineering Whitepaper",
      "Structural Steel Insights",
      "Yatee Steel Structures",
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/news/${article.slug}`,
      images: [article.featuredImage || "/images/yatee-hero-building.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [article.featuredImage || "/images/yatee-hero-building.jpg"],
    },
  };
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const article = newsArticles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  const otherArticles = newsArticles.filter((a) => a.slug !== article.slug);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "News & Insights", url: "/news" },
    { name: article.title, url: `/news/${article.slug}` },
  ]);

  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.summary,
    slug: article.slug,
    publishDate: article.publishDate,
    image: article.featuredImage,
    authorName: article.author.name,
  });

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, articleSchema]) }}
      />

      <PageHero
        badge={article.category.toUpperCase()}
        title={article.title}
        subtitle={article.summary}
        breadcrumbs={[
          { label: "News & Insights", href: "/news" },
          { label: article.title },
        ]}
        backgroundImage="/images/services/design-engineering.jpg"
      />

      {/* Article Body */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Author & Meta Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-8 mb-10 border-b border-slate-200 text-xs text-slate-500">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#1D3A74] text-white flex items-center justify-center font-bold text-sm">
                {article.author.name[0]}
              </div>
              <div>
                <p className="font-bold text-slate-900 text-sm">{article.author.name}</p>
                <p className="text-slate-500">{article.author.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span>{article.publishDate}</span>
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>{article.readTime}</span>
              </span>
            </div>
          </div>

          {/* Body Content */}
          <div className="prose prose-slate max-w-none space-y-8 text-base sm:text-lg leading-relaxed text-slate-700">
            {article.content.map((sec, idx) => (
              <div key={idx} className="space-y-4">
                {sec.heading && (
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-heading pt-4">
                    {sec.heading}
                  </h2>
                )}
                {sec.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-slate-500 mr-2">Tags:</span>
            {article.tags.map((tag, i) => (
              <span key={i} className="text-xs font-semibold bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          {/* Back & CTA */}
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/news"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-[#1D3A74]"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Knowledge Hub</span>
            </Link>
            <Button href="/get-a-quote" variant="primary" size="md" showArrow>
              Consult With Our Authors
            </Button>
          </div>

          {/* Related Articles */}
          {otherArticles.length > 0 && (
            <div className="mt-16 pt-12 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                Related Technical Analyses
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {otherArticles.slice(0, 2).map((rel, idx) => (
                  <Link
                    key={idx}
                    href={`/news/${rel.slug}`}
                    className="p-6 rounded-2xl bg-slate-50 border border-slate-200 hover:bg-white hover:border-blue-400 hover:shadow-lg transition-all group"
                  >
                    <span className="text-[10px] uppercase font-bold text-blue-600 block">{rel.category}</span>
                    <h4 className="font-bold text-base text-slate-900 group-hover:text-blue-600 mt-1 font-heading leading-snug">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2">{rel.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
