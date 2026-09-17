import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/shared/PageHero";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { servicesData } from "@/data/services";
import { Accordion } from "@/components/ui/Accordion";
import { CheckCircle2, ArrowRight, ShieldCheck, Cpu, Layers, Wrench, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { generateBreadcrumbSchema, generateServiceSchema, generateFaqSchema, SITE_URL } from "@/lib/seo";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const title = `${service.title} Services | Yatee Steel Structures`;
  const description = `${service.shortDescription} Turnkey PEB execution, 3D BIM design, certified welding, and single-source project accountability across India.`;

  return {
    title,
    description,
    keywords: [
      `${service.title} India`,
      `${service.title} Services`,
      "PEB Engineering Services",
      "Structural Steel Contractor",
      "Yatee Steel Structures",
    ],
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/services/${service.slug}`,
      images: [service.featuredImage || "/images/yatee-hero-building.jpg"],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [service.featuredImage || "/images/yatee-hero-building.jpg"],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Services", url: "/services" },
    { name: service.title, url: `/services/${service.slug}` },
  ]);

  const serviceSchema = generateServiceSchema({
    name: service.title,
    description: service.overview,
    slug: service.slug,
    image: service.featuredImage,
  });

  const faqSchema = generateFaqSchema(service.faqs || []);

  const structuredDataList = [breadcrumbSchema, serviceSchema, ...(faqSchema ? [faqSchema] : [])];

  return (
    <div className="flex flex-col w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredDataList) }}
      />

      <PageHero
        badge={`SERVICE ${service.number}`}
        title={service.title}
        subtitle={service.tagline}
        breadcrumbs={[
          { label: "Services", href: "/services" },
          { label: service.title },
        ]}
        backgroundImage={service.featuredImage}
      />

      {/* Service Overview & Capabilities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Action Photography Banner */}
              <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden border border-slate-200 shadow-xl group">
                <Image
                  src={service.featuredImage}
                  alt={`${service.title} - Yatee Workforce in Action`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-white bg-blue-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-blue-400/40">
                    Live Field & Factory Execution
                  </span>
                  <span className="text-xs font-semibold text-slate-200 drop-shadow">
                    ISO 9001:2015 Certified
                  </span>
                </div>
              </div>

              {/* Introduction */}
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.2em] bg-blue-50 text-[#1D3A74] px-3.5 py-1.5 rounded border border-blue-100 inline-block mb-3">
                  SERVICE OVERVIEW
                </span>
                <h2 className="text-3xl font-extrabold text-[#0F172A] tracking-tight font-heading">
                  Integrated Engineering & Technical Excellence
                </h2>
                <p className="mt-4 text-slate-600 text-base leading-relaxed">
                  {service.overview}
                </p>
              </div>

              {/* Core Capabilities */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Core Engineering Capabilities
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.capabilities.map((cap, idx) => (
                    <div key={idx} className="bg-[#F8FAFC] p-6 rounded-2xl border border-slate-200">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#1D3A74] flex items-center justify-center mb-4">
                        <Cpu className="w-5 h-5 text-blue-600" />
                      </div>
                      <h4 className="text-base font-bold text-slate-900 leading-snug">{cap.title}</h4>
                      <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">{cap.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-Step Workflow */}
              <div>
                <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                  Our Engineering Execution Workflow
                </h3>
                <div className="space-y-4">
                  {service.engineeringProcess.map((step, idx) => (
                    <div key={idx} className="flex items-start gap-4 p-5 rounded-xl bg-slate-50 border border-slate-200/80">
                      <span className="w-9 h-9 rounded-lg bg-[#1D3A74] text-white font-mono font-bold text-xs flex items-center justify-center shrink-0">
                        {step.number}
                      </span>
                      <div>
                        <h4 className="text-base font-bold text-slate-900">{step.title}</h4>
                        <p className="mt-1 text-xs sm:text-sm text-slate-600 leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Codes & Standards */}
              <div className="p-8 rounded-2xl bg-[#0B1B3D] text-white border border-blue-900 bg-blueprint-grid">
                <h3 className="text-xl font-bold font-heading mb-4 text-white">Technical Standards & Software</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.technicalExpertise.map((tech, idx) => (
                    <div key={idx}>
                      <h4 className="text-sm font-bold text-blue-300 uppercase tracking-wider mb-2">{tech.title}</h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                        {tech.points.map((pt, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              {service.faqs && service.faqs.length > 0 && (
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 font-heading mb-6">
                    Frequently Asked Questions
                  </h3>
                  <Accordion items={service.faqs} />
                </div>
              )}
            </div>

            {/* Right Sticky Sidebar (4 cols) */}
            <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              {/* Quick Inquiry Box */}
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                  Direct Engineering Inquiry
                </span>
                <h4 className="text-lg font-bold text-slate-900 font-heading">
                  Require {service.title}?
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Send your architectural drawings, bay dimensions, and load requirements to our design team for immediate review.
                </p>
                <Button href="/get-a-quote" variant="secondary" size="md" className="w-full" showArrow>
                  Request Technical Quotation
                </Button>
              </div>

              {/* Other Services Directory */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 border-b border-slate-100 pb-2">
                  All 6 Services
                </h4>
                <div className="space-y-1.5">
                  {servicesData.map((s, idx) => (
                    <Link
                      key={idx}
                      href={`/services/${s.slug}`}
                      className={`block px-3 py-2 text-xs font-bold rounded-lg transition-colors ${
                        s.slug === service.slug
                          ? "bg-[#1D3A74] text-white"
                          : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
                      }`}
                    >
                      {s.title}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Key Benefits Card */}
              <div className="bg-blue-900 text-white p-6 rounded-2xl space-y-3">
                <h4 className="text-sm font-bold uppercase tracking-wider text-blue-200">
                  Key Advantages
                </h4>
                <ul className="space-y-2 text-xs text-blue-100">
                  {service.benefits.map((b, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span><strong>{b.title}:</strong> {b.description}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
