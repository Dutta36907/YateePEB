import { JobOpening } from "@/types";

export const careerBenefits = [
  {
    title: "Engineering Scale & Iconic Projects",
    description: "Work on landmark industrial structures, heavy aerospace hangars, and mega distribution centers spanning millions of square feet.",
    icon: "Building2",
  },
  {
    title: "Continuous Learning & Tech Stack",
    description: "Hands-on exposure to advanced structural design tools (Tekla Structures, STAAD.Pro), automated CNC robotics, and ISO 45001 safety systems.",
    icon: "GraduationCap",
  },
  {
    title: "Comprehensive Health & Safety Coverage",
    description: "Premium medical insurance, accidental coverage, life insurance, and strict zero-harm site safety culture.",
    icon: "ShieldCheck",
  },
  {
    title: "Performance Rewards & Fast Growth",
    description: "Merit-driven career advancement with annual bonuses, project completion incentives, and leadership development paths.",
    icon: "Award",
  },
];

export const jobOpeningsData: JobOpening[] = [
  {
    slug: "senior-structural-design-engineer-peb",
    title: "Senior Structural Design Engineer (PEB & Heavy Steel)",
    department: "Design & Structural Engineering",
    location: "Corporate Office, Indore (Hybrid)",
    experienceRequired: "5–9 Years",
    employmentType: "Full-Time",
    openingsCount: 3,
    summary:
      "We are seeking an experienced Senior Structural Design Engineer to lead structural analysis, connection design, and value engineering for complex long-span PEB and multi-storey structural steel projects.",
    responsibilities: [
      "Perform complete 3D structural analysis and design of PEB frames using STAAD.Pro per IS 800:2007, AISC 360, and MBMA guidelines.",
      "Design primary frames, stepped crane columns, continuous crane girders, portal bracing, and composite mezzanine floor systems.",
      "Collaborate with Tekla detailing teams to review 3D BIM connection details, anchor bolt layouts, and fabrication drawings.",
      "Conduct structural value engineering to optimize steel weight while maintaining structural safety and code compliance.",
      "Interact with client structural consultants, architects, and proof consultants for design approval.",
    ],
    requirements: [
      "M.Tech / B.Tech in Structural / Civil Engineering from a recognized institution.",
      "Minimum 5 years of dedicated design experience in Pre-Engineered Buildings (PEB) or Heavy Structural Steel.",
      "High proficiency in STAAD.Pro and AutoCAD. Familiarity with Tekla Structures is a strong plus.",
      "In-depth knowledge of IS 800, IS 875 (Parts 1-5), IS 1893, and AISC 360 codes.",
    ],
    skills: ["STAAD.Pro", "IS 800:2007", "AISC 360", "Tekla Review", "Value Engineering"],
  },
  {
    slug: "lead-tekla-structural-detailer",
    title: "Lead Tekla Structural Detailer / Checker",
    department: "Design & Structural Engineering",
    location: "Corporate Office, Indore",
    experienceRequired: "4–8 Years",
    employmentType: "Full-Time",
    openingsCount: 4,
    summary:
      "Lead 3D modeling and preparation of fabrication shop drawings, anchor bolt plans, and erection sequence drawings for large-scale industrial PEB buildings using Tekla Structures.",
    responsibilities: [
      "Create clash-free 3D models in Tekla Structures for primary framing, secondary purlins, sheeting, and complex connection nodes.",
      "Generate automated NC files, bill of materials (BOM), assembly drawings, and single-part fabrication drawings.",
      "Review and verify connection details against structural engineer design calculation sheets.",
      "Coordinate with plant fabrication teams to resolve RFIs and ensure seamless CNC machine data processing.",
    ],
    requirements: [
      "Diploma / B.E. in Civil / Mechanical Engineering.",
      "4+ years of hands-on experience in Tekla Structures for PEB and heavy structural steel.",
      "Strong understanding of structural steel fabrication processes, weld symbols, and erection sequencing.",
    ],
    skills: ["Tekla Structures 3D", "BIM Detailing", "Fabrication Drawings", "NC File Export", "Shop Drawing Review"],
  },
  {
    slug: "manager-plant-quality-assurance-qc",
    title: "Manager – Plant Quality Assurance & QC (Welding & NDT)",
    department: "Fabrication & Quality",
    location: "Nandasan Plant, Gujarat",
    experienceRequired: "7–12 Years",
    employmentType: "Full-Time",
    openingsCount: 2,
    summary:
      "Lead the QA/QC department at our 6-acre fabrication plant in Nandasan, Gujarat, overseeing incoming raw material inspection, automated welding quality, NDT testing, and ISO compliance.",
    responsibilities: [
      "Manage incoming steel plate and coil inspection, verifying mill test certificates (MTC), chemical spectrometry, and thickness tolerances.",
      "Supervise automated SAW beam welding and manual welding processes in compliance with AWS D1.1 and EN 1090-2 standards.",
      "Conduct and oversee Ultrasonic Testing (UT), Magnetic Particle Testing (MPI), and Liquid Penetrant Testing (LPT) with third-party inspectors.",
      "Monitor surface preparation (shot blasting to SA 2.5) and dry film thickness (DFT) gauge paint inspections.",
      "Maintain ISO 9001:2015, ISO 14001, and ISO 45001 documentation and lead internal/external quality audits.",
    ],
    requirements: [
      "B.Tech / Diploma in Mechanical / Metallurgy Engineering.",
      "Certified ASNT Level II in UT, MPI, and PT (Level III preferred).",
      "CSWIP 3.1 / AWS Certified Welding Inspector (CWI) credential.",
      "7+ years experience in heavy structural steel or PEB fabrication plant QA/QC.",
    ],
    skills: ["QA/QC Management", "AWS D1.1", "ASNT Level II UT/MPI", "Shot Blasting SA 2.5", "ISO 9001 Audits"],
  },
  {
    slug: "senior-site-erection-manager",
    title: "Senior Site Erection Manager (PEB & Heavy Structures)",
    department: "Site Erection & Safety",
    location: "Multiple Project Sites (Nationwide)",
    experienceRequired: "8–14 Years",
    employmentType: "Full-Time",
    openingsCount: 3,
    summary:
      "Manage turnkey on-site structural steel erection, heavy crane rigging, contractor coordination, and strict zero-harm safety enforcement for large-scale industrial projects.",
    responsibilities: [
      "Lead on-site structural erection of columns, rafters, crane girders, purlins, and roofing systems.",
      "Develop and enforce engineered heavy crane lifting plans and rigging procedures using 50T to 150T mobile cranes.",
      "Enforce ISO 45001 safety standards, daily safety toolbox talks, life-line netting, and fall-protection harnesses.",
      "Coordinate with client project managers, civil contractors, and statutory safety inspectors for timely milestone sign-offs.",
      "Manage site inventory, sequenced steel unloading, and torque-controlled high-tensile bolting quality.",
    ],
    requirements: [
      "B.E. / Diploma in Civil / Mechanical Engineering.",
      "8+ years of field experience in on-site PEB structural erection and heavy rigging.",
      "NEBOSH / IOSH or Certified Safety credential is an advantage.",
      "Willingness to travel and manage nationwide project sites.",
    ],
    skills: ["Heavy Crane Rigging", "Site Erection", "ISO 45001 Safety", "Standing Seam Installation", "Total Station Alignment"],
  },
  {
    slug: "manager-b2b-sales-estimation",
    title: "Manager – B2B Business Development & PEB Estimation",
    department: "B2B Sales & Estimation",
    location: "Indore HQ / Regional Branches",
    experienceRequired: "6–10 Years",
    employmentType: "Full-Time",
    openingsCount: 2,
    summary:
      "Drive institutional B2B sales, client relationships with EPC contractors, industrial developers, and logistics park investors, preparing techno-commercial PEB proposals.",
    responsibilities: [
      "Identify and pursue high-value industrial PEB inquiries across logistics, manufacturing, automotive, and infrastructure sectors.",
      "Work with design engineers to prepare preliminary steel weight estimations and competitive techno-commercial quotations.",
      "Deliver technical presentations to corporate clients, structural consultants, and architects.",
      "Negotiate contract terms, payment schedules, and project milestone agreements.",
    ],
    requirements: [
      "B.Tech (Civil / Mechanical) + MBA in Marketing / Sales preferred.",
      "6+ years in PEB or structural steel B2B sales and proposal estimation.",
      "Strong network with industrial developers, logistics funds, EPC firms, and structural consultants.",
    ],
    skills: ["B2B Technical Sales", "PEB Estimation", "Contract Negotiation", "Client Relationship", "Techno-Commercial Proposals"],
  },
];
