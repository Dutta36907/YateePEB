export interface CompanyStats {
  projectsCompleted: number;
  happyClients: number;
  yearsExperience: number;
  skilledProfessionals: number;
  annualCapacityMT: number;
  manufacturingAreaSqFt: number;
}

export interface Certification {
  id: string;
  name: string;
  code: string;
  issuer: string;
  scope: string;
  validUntil: string;
  iconName: string;
  badge: string;
  description: string;
}

export interface ClientLogo {
  name: string;
  industry: string;
  location: string;
  logoText: string;
  highlight?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation: string;
  company: string;
  project: string;
  location: string;
  rating: number;
  avatar?: string;
}

export interface ProductSpecification {
  parameter: string;
  value: string;
  standard?: string;
}

export interface Product {
  slug: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  fullDescription: string;
  featuredImage: string;
  galleryImages: string[];
  features: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  applications: string[];
  specifications: ProductSpecification[];
  dimensions?: { parameter: string; range: string }[];
  availableCoatingsOrColors?: string[];
  manufacturingProcess: { step: string; title: string; description: string }[];
  qualityAssurance: string[];
  faqs: { question: string; answer: string }[];
  relatedProjectSlugs: string[];
  relatedProductSlugs: string[];
}

export interface ServiceStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  slug: string;
  number: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  featuredImage: string;
  galleryImages: string[];
  capabilities: { title: string; description: string; icon: string }[];
  engineeringProcess: ServiceStep[];
  benefits: { title: string; description: string }[];
  technicalExpertise: { title: string; points: string[] }[];
  applications: string[];
  relatedIndustries: string[];
  relatedProjectSlugs: string[];
  faqs: { question: string; answer: string }[];
}

export interface Industry {
  slug: string;
  title: string;
  tagline: string;
  shortDescription: string;
  overview: string;
  featuredImage: string;
  challenges: { title: string; description: string }[];
  solutions: { title: string; description: string }[];
  buildingSystems: { title: string; description: string }[];
  advantages: string[];
  typicalSpansAndSpecs: { label: string; value: string }[];
  engineeringConsiderations: string[];
  relevantProductSlugs: string[];
  relevantServiceSlugs: string[];
  caseStudySlugs: string[];
}

export type ProjectStatus = "Completed" | "Ongoing";

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  state: string;
  industry: string;
  buildingType: string;
  builtUpAreaSqFt: number;
  steelTonnageMT: number;
  clearHeightMeters: number;
  clearSpanMeters: number;
  completionYear: number;
  status: ProjectStatus;
  featuredImage: string;
  galleryImages: {
    before?: string[];
    during?: string[];
    after?: string[];
  };
  overview: string;
  requirement: string;
  engineeringChallenge: string;
  structuralSolution: string;
  designDetails: string[];
  fabricationHighlights: string[];
  installationHighlights: string[];
  testimonial?: {
    quote: string;
    person: string;
    designation: string;
  };
}

export interface NewsArticle {
  slug: string;
  title: string;
  category: "Industry Insights" | "Company Milestone" | "Technical Whitepaper" | "Project Handover" | "Sustainability";
  publishDate: string;
  readTime: string;
  author: {
    name: string;
    role: string;
  };
  summary: string;
  content: {
    heading?: string;
    paragraphs: string[];
  }[];
  featuredImage: string;
  tags: string[];
}

export interface JobOpening {
  slug: string;
  title: string;
  department: "Design & Structural Engineering" | "Fabrication & Quality" | "Site Erection & Safety" | "Project Management" | "B2B Sales & Estimation";
  location: string;
  experienceRequired: string;
  employmentType: "Full-Time" | "Contract";
  openingsCount: number;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skills: string[];
}

export interface LeadershipMember {
  name: string;
  role: string;
  experience: string;
  bio: string;
  credentials: string;
}
