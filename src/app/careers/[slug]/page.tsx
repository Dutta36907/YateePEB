import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { jobOpeningsData } from "@/data/careers";
import { CheckCircle2, ArrowLeft } from "lucide-react";
import { JobApplicationForm } from "@/components/careers/JobApplicationForm";
import { generateBreadcrumbSchema, generateJobPostingSchema } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return jobOpeningsData.map((job) => ({
    slug: job.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = jobOpeningsData.find((j) => j.slug === slug);

  if (!job) {
    return {
      title: "Job Not Found | Yatee Steel Structures",
    };
  }

  const title = `${job.title} | Careers at Yatee Steel Structures`;
  const description = `${job.summary.slice(0, 155)}...`;

  return {
    title,
    description,
    keywords: [
      job.title,
      `${job.department} Jobs`,
      `Steel Engineering Jobs ${job.location}`,
      "Yatee Steel Careers",
      ...job.skills,
    ],
    alternates: {
      canonical: `https://yateesteel.com/careers/${job.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://yateesteel.com/careers/${job.slug}`,
      type: "article",
      images: ["/images/yatee-hero-building.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/yatee-hero-building.jpg"],
    },
  };
}

export default async function CareerDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const job = jobOpeningsData.find((j) => j.slug === slug);

  if (!job) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
    { name: job.title, url: `/careers/${job.slug}` },
  ]);

  const jobPostingSchema = generateJobPostingSchema({
    title: job.title,
    summary: job.summary,
    slug: job.slug,
    department: job.department,
    location: job.location,
    employmentType: job.employmentType,
    experienceRequired: job.experienceRequired,
    responsibilities: job.responsibilities,
    requirements: job.requirements,
  });

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingSchema) }}
      />

      <PageHero
        badge={job.department.toUpperCase()}
        title={job.title}
        subtitle={`Location: ${job.location} | Experience Required: ${job.experienceRequired}`}
        breadcrumbs={[
          { label: "Careers", href: "/careers" },
          { label: job.title },
        ]}
        backgroundImage="/images/services/fabrication-plant.jpg"
      />

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
                  ROLE OVERVIEW
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                  About the Opportunity
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {job.summary}
                </p>
              </div>

              {/* Responsibilities */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-4">
                  Key Responsibilities
                </h3>
                <ul className="space-y-3">
                  {job.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Requirements */}
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-heading mb-4">
                  Candidate Requirements & Qualifications
                </h3>
                <ul className="space-y-3">
                  {job.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Required Skills Badges */}
              <div>
                <h3 className="text-base font-bold text-slate-900 mb-3">Key Tools & Competencies</h3>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, idx) => (
                    <span key={idx} className="text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 px-3 py-1 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-slate-200">
                <Link
                  href="/careers"
                  className="inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-[#1D3A74]"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>View All Open Positions</span>
                </Link>
              </div>
            </div>

            {/* Right Application Form (5 cols) */}
            <div className="lg:col-span-5">
              <JobApplicationForm job={job} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
