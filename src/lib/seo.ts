import { companyDetails } from "@/data/company";

export const SITE_URL = "https://yateesteel.com";

/**
 * Generate BreadcrumbList Schema JSON-LD
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${SITE_URL}${item.url}`,
    })),
  };
}

/**
 * Generate FAQPage Schema JSON-LD
 */
export function generateFaqSchema(faqs: { question: string; answer: string }[]) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate Product Schema JSON-LD
 */
export function generateProductSchema(product: {
  name: string;
  description: string;
  image?: string;
  slug: string;
  category?: string;
  sku?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: product.image?.startsWith("http")
      ? product.image
      : `${SITE_URL}${product.image || "/images/yatee-hero-building.jpg"}`,
    url: `${SITE_URL}/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: "Yatee Steel Structures",
    },
    manufacturer: {
      "@type": "Organization",
      name: companyDetails.name,
      url: SITE_URL,
    },
    category: product.category || "Pre-Engineered Buildings & Industrial Steel",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      price: "100000",
      lowPrice: "100000",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      itemCondition: "https://schema.org/NewCondition",
      seller: {
        "@type": "Organization",
        name: companyDetails.name,
      },
    },
  };
}

/**
 * Generate Service Schema JSON-LD
 */
export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
  image?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    provider: {
      "@type": "Organization",
      name: companyDetails.name,
      url: SITE_URL,
      telephone: companyDetails.contact.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyDetails.headquarters.addressLine1,
        addressLocality: companyDetails.headquarters.city,
        addressRegion: companyDetails.headquarters.state,
        postalCode: companyDetails.headquarters.postalCode,
        addressCountry: "IN",
      },
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: "Pre-Engineered Building (PEB) & Heavy Structural Steel Engineering",
    url: `${SITE_URL}/services/${service.slug}`,
  };
}

/**
 * Generate Article Schema JSON-LD
 */
export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  publishDate: string;
  image?: string;
  authorName?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: article.image?.startsWith("http")
      ? article.image
      : `${SITE_URL}${article.image || "/images/yatee-hero-building.jpg"}`,
    datePublished: article.publishDate,
    dateModified: article.publishDate,
    author: {
      "@type": "Person",
      name: article.authorName || "Yatee Engineering Desk",
    },
    publisher: {
      "@type": "Organization",
      name: companyDetails.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/yatee-hero-building.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/news/${article.slug}`,
    },
  };
}

/**
 * Generate JobPosting Schema JSON-LD
 */
export function generateJobPostingSchema(job: {
  title: string;
  summary: string;
  slug: string;
  department: string;
  location: string;
  employmentType: string;
  experienceRequired?: string;
  responsibilities?: string[];
  requirements?: string[];
}) {
  const isGujarat = job.location.toLowerCase().includes("gujarat") || job.location.toLowerCase().includes("nandasan");
  const address = isGujarat ? {
    "@type": "PostalAddress",
    streetAddress: companyDetails.manufacturingFacility.addressLine1,
    addressLocality: companyDetails.manufacturingFacility.city,
    addressRegion: companyDetails.manufacturingFacility.state,
    postalCode: companyDetails.manufacturingFacility.postalCode,
    addressCountry: "IN",
  } : {
    "@type": "PostalAddress",
    streetAddress: companyDetails.headquarters.addressLine1,
    addressLocality: companyDetails.headquarters.city,
    addressRegion: companyDetails.headquarters.state,
    postalCode: companyDetails.headquarters.postalCode,
    addressCountry: "IN",
  };

  const formattedDescription = `
    <p>${job.summary}</p>
    ${job.responsibilities && job.responsibilities.length > 0 ? `
      <h3>Key Responsibilities</h3>
      <ul>
        ${job.responsibilities.map((r) => `<li>${r}</li>`).join("")}
      </ul>
    ` : ""}
    ${job.requirements && job.requirements.length > 0 ? `
      <h3>Requirements & Qualifications</h3>
      <ul>
        ${job.requirements.map((req) => `<li>${req}</li>`).join("")}
      </ul>
    ` : ""}
  `;

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: formattedDescription,
    datePosted: "2026-01-15",
    validThrough: "2027-12-31",
    employmentType: job.employmentType === "Full-Time" ? "FULL_TIME" : "CONTRACTOR",
    hiringOrganization: {
      "@type": "Organization",
      name: companyDetails.name,
      sameAs: SITE_URL,
      logo: `${SITE_URL}/images/yatee-hero-building.jpg`,
    },
    jobLocation: {
      "@type": "Place",
      address,
    },
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    experienceRequirements: job.experienceRequired || "3+ Years",
    occupationalCategory: job.department,
    url: `${SITE_URL}/careers/${job.slug}`,
  };
}

