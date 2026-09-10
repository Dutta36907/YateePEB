import { NewsArticle } from "@/types";

export const newsArticles: NewsArticle[] = [
  {
    slug: "optimizing-peb-steel-weight-tekla-staad",
    title: "How Advanced 3D BIM Detailing Reduces PEB Steel Consumption by up to 25%",
    category: "Technical Whitepaper",
    publishDate: "January 18, 2026",
    readTime: "6 min read",
    author: {
      name: "Vikramaditya Sengupta",
      role: "Director – Technical & Engineering",
    },
    summary:
      "A technical deep-dive into how finite element analysis in STAAD.Pro and automated connection detailing in Tekla Structures optimize tapered plate sections to reduce dead-weight and foundation costs without compromising safety.",
    featuredImage: "/images/news/news-bim.webp",
    tags: ["Structural Engineering", "Tekla BIM", "Value Engineering", "PEB Optimization"],
    content: [
      {
        heading: "The Conventional vs. Optimized PEB Paradigm",
        paragraphs: [
          "Conventional structural steel buildings traditionally rely on uniform, standard hot-rolled I-beams (ISMB/ISMC sections). While readily available, uniform beams result in massive material waste because bending moment stress varies significantly across the span of a structural rafter or column.",
          "Pre-Engineered Building (PEB) design revolutionizes this by fabricating custom tapered built-up sections. The flange thickness and web depth match the exact bending moment envelope of the structure, concentrating structural steel precisely where stresses peak and slimming down where loads are low.",
        ],
      },
      {
        heading: "Integrating STAAD.Pro & Tekla for Zero-Defect Detailing",
        paragraphs: [
          "At Yatee, our engineering workflow links 3D finite element structural analysis directly into Tekla Structures. By modeling every stiffener, gusset plate, sag rod, and high-tensile bolt in 3D BIM, we eliminate the on-site clash errors that historically plagued complex industrial projects.",
          "Furthermore, automated numerical control (NC) files are exported directly to our shop floor CNC cutting and drilling centers. This digital continuum eliminates manual drafting inaccuracies and ensures structural tolerances within ±1.0 mm.",
        ],
      },
      {
        heading: "Financial & Operational Impact for Developers",
        paragraphs: [
          "For a typical 200,000 sq. ft. industrial warehouse, value engineering through 3D BIM detailing achieves an average steel savings of 15% to 22%—equivalent to 200–300 metric tonnes of steel. In addition to direct procurement savings, the lighter dead-weight reduces civil foundation concrete by up to 30%, significantly accelerating project ROI.",
        ],
      },
    ],
  },
  {
    slug: "yatee-commissions-45000-mt-manufacturing-capacity",
    title: "Yatee Expands Annual Fabrication Capacity to 45,000 MT with New Automated Heavy Bay",
    category: "Company Milestone",
    publishDate: "December 05, 2025",
    readTime: "4 min read",
    author: {
      name: "Arun K. Pillai",
      role: "VP – Plant Operations",
    },
    summary:
      "Yatee Steel Structures commissions its fourth heavy fabrication bay in Chakan, Pune, featuring advanced submerged arc welding lines and high-definition CNC plasma cutting.",
    featuredImage: "/images/news/news-facility.webp",
    tags: ["Manufacturing", "Capacity Expansion", "Automated Welding", "Pune Facility"],
    content: [
      {
        heading: "Scaling for High-Value Mega Infrastructure",
        paragraphs: [
          "To cater to the surging national demand for Grade-A logistics parks, high-bay e-commerce fulfillment hubs, and heavy industrial manufacturing facilities, Yatee Steel Structures has formally commissioned its expanded 25-acre Chakan manufacturing campus.",
          "The newly inaugurated 75,000 sq. ft. heavy bay features dual automated 4-torch Submerged Arc Welding (SAW) lines, capable of assembling built-up I-girders and box columns up to 2,500 mm web depth and 50 mm plate thickness.",
        ],
      },
      {
        heading: "Technology Highlights of the New Line",
        paragraphs: [
          "The facility upgrade introduces high-definition 6-axis CNC plasma profile cutting tables, automated multi-spindle beam drilling lines, and an enclosed automated centrifugal shot blasting chamber that processes structural steel to SA 2.5 cleanliness standards at high speed.",
          "With this expansion, Yatee's annualized fabrication capacity reaches 45,000 Metric Tonnes, solidifying our position among India's elite PEB and heavy structural steel manufacturers.",
        ],
      },
    ],
  },
  {
    slug: "standing-seam-roofing-leak-proof-technology",
    title: "Why 360° Double-Lock Standing Seam Roofing is Essential for Grade-A Warehousing",
    category: "Industry Insights",
    publishDate: "November 14, 2025",
    readTime: "5 min read",
    author: {
      name: "Pooja Malhotra",
      role: "Head – Project Erection & Safety",
    },
    summary:
      "An analysis of why traditional screw-down roof sheets fail in high-rainfall tropical zones and how concealed-clip standing seam systems guarantee 100% leak-proof operations.",
    featuredImage: "/images/news/news-roofing.webp",
    tags: ["Roofing Systems", "Standing Seam", "Warehousing", "Waterproofing"],
    content: [
      {
        heading: "The Vulnerability of Screw-Down Fasteners",
        paragraphs: [
          "Conventional industrial roofing relies on self-drilling screws puncturing through the valley or crest of the metal sheet. Over time, thermal expansion and contraction cause structural movement that elongates these screw holes. Degraded rubber EPDM washers combined with heavy monsoons inevitably lead to water leaks.",
          "In modern logistics hubs storing sensitive electronic appliances, pharmaceutical inventory, or dry food goods, a single water ingress point can result in severe damages and tenant claims.",
        ],
      },
      {
        heading: "The Engineering of 360° Mechanical Seaming",
        paragraphs: [
          "Standing seam systems utilize concealed sliding clips fastened to the roof purlins. The adjacent roof panel vertical ribs are then mechanically folded and crimped 360 degrees using an automated robotic seaming machine on site.",
          "Because no screws penetrate the weather-facing pan of the roof sheet, and because sheets can be roll-formed on-site in continuous lengths exceeding 70 meters without horizontal end laps, the roof acts as a monolithic, hermetically sealed metallic membrane.",
        ],
      },
    ],
  },
];
