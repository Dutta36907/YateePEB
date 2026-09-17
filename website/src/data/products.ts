import { Product } from "@/types";

export const productsData: Product[] = [
  {
    slug: "pre-engineered-buildings",
    title: "Pre-Engineered Buildings (PEB)",
    subtitle: "Complete Custom-Engineered Structural Steel Building Systems",
    shortDescription:
      "Fully customized, long-span structural steel buildings engineered for industrial factories, mega warehouses, distribution centers, and infrastructure facilities.",
    fullDescription:
      "Yatee Pre-Engineered Buildings (PEB) represent the pinnacle of modern structural steel engineering. Designed through advanced 3D structural optimization in STAAD.Pro and Tekla Structures, and manufactured with automated CNC machinery, our PEB systems deliver unmatched strength, column-free clear spans of up to 90 meters, 40% faster erection, and long-term durability conforming to IS 800:2007 and AISC standards.",
    featuredImage: "/images/products/peb-buildings.jpg",
    galleryImages: [
      "/images/products/peb-1.webp",
      "/images/products/peb-2.webp",
      "/images/products/peb-3.webp",
    ],
    features: [
      { title: "Column-Free Clear Spans", description: "Clear spans up to 90m (300 ft) allowing total floor layout freedom for racking, conveyors, and machinery." },
      { title: "Optimized Tapered Framing", description: "Tapered I-section members tailored to moment diagrams, reducing overall steel dead weight and foundation load." },
      { title: "Integrated Crane Systems", description: "Engineered to support 5T to 100T overhead EOT cranes with heavy crane runway brackets." },
      { title: "Modular Future Expandability", description: "End-wall framing designed for seamless longitudinal extension without interrupting plant operations." },
    ],
    benefits: [
      { title: "40–50% Faster Construction", description: "Off-site automated fabrication coincides with foundation work for rapid bolted on-site erection." },
      { title: "Up to 30% Cost Savings", description: "Reduced steel dead-weight and simplified shallow foundations significantly lower overall project capital." },
      { title: "High Seismic & Cyclone Resistance", description: "Engineered in strict accordance with IS 1893 (Seismic) and IS 875 (Wind loads up to 55 m/s)." },
    ],
    applications: [
      "Heavy Manufacturing & Automobile Plants",
      "E-Commerce Logistics & Fulfillment Centers",
      "Aviation Hangars & Maintenance Depots",
      "Multi-Tier Commercial Exhibition Halls",
    ],
    specifications: [
      { parameter: "Primary Frame Steel Grade", value: "ASTM A572 Grade 50 / IS 2062 E350 Grade (Yield Strength: 345–350 MPa)", standard: "ASTM / IS" },
      { parameter: "Secondary Framing (Purlins/Girts)", value: "High-Tensile Galvanized Steel (Yield Strength: 345–450 MPa, Z120-Z275 GSM)", standard: "IS 277 / ASTM A653" },
      { parameter: "Standard Building Width", value: "15m to 90m Clear Span (or Multi-Span up to 200m+)", standard: "Customizable" },
      { parameter: "Eave Height Range", value: "6m to 24m Standard (Custom heights on request)", standard: "ISO Standard" },
      { parameter: "Roof Slope", value: "1:10 Standard (1:20 to 1:5 available)", standard: "MBMA" },
      { parameter: "Crane Capacity Compatibility", value: "5 Tonnes to 100 Tonnes EOT Cranes", standard: "AISE Standard" },
    ],
    dimensions: [
      { parameter: "Clear Span Width", range: "15m – 90m (Column-Free)" },
      { parameter: "Bay Spacing", range: "6m – 12m Standard" },
      { parameter: "Clear Eave Height", range: "6m – 24m" },
      { parameter: "Building Length", range: "Modular (No upper limit)" },
    ],
    availableCoatingsOrColors: [
      "Standard Epoxy Primer (35-50 microns DFT)",
      "Polyurethane (PU) Topcoat (Navy Blue, Light Grey, Off-White)",
      "High-Durability Intumescent Fireproof Coating (1 to 4 Hour Rating)",
      "Heavy-Duty Polyamine Cured Epoxy for Chemical Environments",
    ],
    manufacturingProcess: [
      { step: "01", title: "CNC Plasma Plate Cutting", description: "High-definition plate nesting and cutting for smooth, precise plate edges from mill-certified steel." },
      { step: "02", title: "Automatic H-Beam Line (PTW)", description: "Continuous Submerged Arc Welding (SAW) creating deep penetration fillet welds on built-up I-sections." },
      { step: "03", title: "Automatic Shot Blasting to SA 2.5", description: "Centrifugal abrasive shot blasting to eliminate mill scale, rust, and optimize primer adhesion." },
      { step: "04", title: "Airless Primer Coating & Barcoding", description: "Corrosion-resistant epoxy primer application and individual component barcoding for sequenced erection." },
    ],
    qualityAssurance: [
      "100% Weld Visual Inspection per AWS D1.1 & ISO 9001:2015",
      "Ultrasonic Testing (UT) of Full Penetration Butt Welds",
      "Magnetic Particle Testing (MPI) on Critical Flange-to-Web Fillet Welds",
      "Dry Film Thickness (DFT) Digital Gauge Paint Measurement",
    ],
    faqs: [
      { question: "What is the expected lifespan of a Yatee Pre-Engineered Building?", answer: "When properly maintained, Yatee PEBs have a design service life exceeding 50 years, backed by high-tensile mill-certified steel and anti-corrosive industrial coatings." },
      { question: "Can mezzanine office floors be incorporated within the PEB frame?", answer: "Yes, we integrate heavy-duty mezzanine floors with composite metal decking designed for office spaces, electrical rooms, or high-density material storage." },
      { question: "What structural codes does Yatee follow for PEB design?", answer: "Our structural engineering conforms strictly to IS 800:2007 (General Construction In Steel), IS 875 (Design Loads for Buildings), IS 1893 (Criteria for Earthquake Resistant Design), and AISC/MBMA international guidelines." },
    ],
    relatedProjectSlugs: ["pune-mega-logistics-park", "ahmedabad-heavy-auto-manufacturing-plant"],
    relatedProductSlugs: ["c-z-purlins", "roofing-sheets", "lgs-structures"],
  },
  {
    slug: "industrial-sheds",
    title: "Industrial Sheds & Factory Sheds",
    subtitle: "Robust Steel Framing for Workshops, Warehouses & Process Facilities",
    shortDescription:
      "Cost-effective, rapid-deploy industrial sheds with integrated natural ventilation, daylighting panels, and heavy-duty crane runway supports.",
    fullDescription:
      "Yatee Industrial Sheds offer an engineered, high-performance structural steel solution for workshops, factories, agricultural storage, and processing yards. Engineered for rapid fabrication and assembly, these sheds maximize natural lighting and ventilation while providing long-term structural integrity and compliance with IS 800 standards.",
    featuredImage: "/images/products/industrial-sheds.jpg",
    galleryImages: [
      "/images/products/shed-1.webp",
      "/images/products/shed-2.webp",
      "/images/products/shed-3.webp",
    ],
    features: [
      { title: "Daylight & Ventilation Integration", description: "Pre-designed with ridge ventilators, turbo fans, and UV-stabilized polycarbonate skylights." },
      { title: "Heavy EOT Crane Runway Ready", description: "Built-in stepped columns and crane bracket provisions for smooth material handling." },
      { title: "Quick-Lock Secondary Framing", description: "Pre-punched Z/C purlins for rapid erection with minimal site welding required." },
      { title: "Weatherproof Enclosure", description: "Corrosion-resistant color-coated sheet cladding with deep trapezoidal crests." },
    ],
    benefits: [
      { title: "Economical Capex", description: "Optimized structural profiles lower initial capital investment by up to 20% compared to conventional sheds." },
      { title: "Rapid Handover", description: "Standard industrial sheds can be delivered and fully erected within 6 to 10 weeks." },
      { title: "Low Maintenance", description: "Galvanized secondary framing and baked-on paint coatings prevent rust formation." },
    ],
    applications: [
      "Machinery Workshops & Tool Rooms",
      "Raw Material Staging & Stockyards",
      "Automobile Service Centers & Garages",
      "Agriculture & Grain Storage Sheds",
    ],
    specifications: [
      { parameter: "Primary Columns & Trusses", value: "IS 2062 Grade E250/E350 Structural Steel / Built-up Sections", standard: "IS 800" },
      { parameter: "Roof & Wall Cladding", value: "0.50mm / 0.60mm PPGL / Galvalume AZ150", standard: "ASTM A792" },
      { parameter: "Crane Capability", value: "3T to 25T EOT Crane Bracket Provision", standard: "IS 807" },
      { parameter: "Purlin Coating", value: "Pre-Galvanized Z120 / Z275 gsm Coating", standard: "IS 277" },
    ],
    dimensions: [
      { parameter: "Standard Width", range: "12m – 45m Clear Span" },
      { parameter: "Standard Length", range: "30m – 150m+ (Modular)" },
      { parameter: "Eave Height", range: "5m – 12m" },
    ],
    availableCoatingsOrColors: [
      "Off-White (RAL 9002)",
      "Sky Blue / Corporate Navy (RAL 5012 / RAL 5002)",
      "Mist Green (RAL 6021)",
      "Bare Galvalume Natural Metallic",
    ],
    manufacturingProcess: [
      { step: "01", title: "CNC Plasma Cutting", description: "Precision plate cutting ensuring clean edges for truss gusset plates and base connections." },
      { step: "02", title: "Jig-Assisted Welding", description: "Fabricated using specialized fixtures to maintain strict straightness and squareness." },
      { step: "03", title: "Shot Blasting & Painting", description: "Thorough surface prep to SA 2.5 followed by anti-corrosive primer and topcoat." },
    ],
    qualityAssurance: [
      "Dimensional Check on Pin-to-Pin Distances",
      "Weld Throat & Penetration Gauge Check",
      "Coating Thickness DFT Verification per ISO 9001:2015",
    ],
    faqs: [
      { question: "How quickly can a 20,000 sq. ft. industrial shed be installed?", answer: "Following foundation curing, the steel superstructure and roofing sheets can be fully installed in approximately 4 to 6 weeks." },
      { question: "Can we install solar panels on the roof of Yatee industrial sheds?", answer: "Yes, our roof engineering calculations include dead load allowances for rooftop solar PV installations." },
    ],
    relatedProjectSlugs: ["ahmedabad-heavy-auto-manufacturing-plant", "hyderabad-fmcg-distribution-center"],
    relatedProductSlugs: ["pre-engineered-buildings", "c-z-purlins", "roofing-sheets"],
  },
  {
    slug: "c-z-purlins",
    title: "C & Z Purlins (Cold-Formed)",
    subtitle: "High-Tensile Galvanized Structural Steel Secondary Framing",
    shortDescription:
      "Precision roll-formed C and Z purlins manufactured from high-yield galvanized steel with pre-punched elongated holes for quick bolted assembly.",
    fullDescription:
      "Yatee C and Z Purlins are engineered secondary structural framing components used to support roof sheeting and wall cladding. Cold roll-formed from high-tensile galvanized steel (up to 450 MPa yield strength), our purlins provide an exceptional strength-to-weight ratio, zero on-site welding, and superior corrosion resistance.",
    featuredImage: "/images/products/cz-purlins.jpg",
    galleryImages: [
      "/images/products/purlin-1.webp",
      "/images/products/purlin-2.webp",
      "/images/products/purlin-3.webp",
    ],
    features: [
      { title: "Continuous Lap Z-Purlin Capability", description: "Z-purlins overlap at interior supports to create continuous beam action with 30% higher load capacity." },
      { title: "Automated Online Punching", description: "Pre-punched standard hole patterns (round and slotted) matching Tekla detailing exactly." },
      { title: "High Corrosion Protection", description: "Manufactured from hot-dip galvanized steel coil with zinc coating up to 275 GSM." },
      { title: "Custom Cut Lengths", description: "Roll-formed to exact specified lengths up to 14 meters, eliminating site wastage." },
    ],
    benefits: [
      { title: "Zero Site Cutting & Welding", description: "Ready-to-bolt installation saves tremendous on-site labor and erection time." },
      { title: "Reduced Structural Dead Weight", description: "Cold-formed profiles achieve higher bending resistance with 40% less steel than hot-rolled channels." },
      { title: "Smooth Uniform Finish", description: "Precision cold roll-forming ensures uniform straightness and sharp corner radiuses." },
    ],
    applications: [
      "PEB Roof Secondary Framing & Purlins",
      "Wall Cladding Girts & Header Beams",
      "Solar Panel Mounting Module Structures",
      "Light Gauge Steel Framing (LGS) & Mezzanines",
    ],
    specifications: [
      { parameter: "Raw Material Grade", value: "High-Tensile Galvanized Steel (Yield Strength: 345 MPa to 450 MPa)", standard: "IS 277 / ASTM A653" },
      { parameter: "Zinc Coating Mass", value: "Z120 to Z275 gsm (Hot-Dip Galvanized)", standard: "IS 277" },
      { parameter: "Depth Range (Web)", value: "100mm to 350mm", standard: "Custom" },
      { parameter: "Flange Width", value: "40mm to 100mm", standard: "Standard / Custom" },
      { parameter: "Thickness Range", value: "1.50mm to 3.50mm", standard: "Precision Gauge" },
      { parameter: "Lip Size", value: "15mm to 30mm", standard: "Standard" },
    ],
    dimensions: [
      { parameter: "Web Depth (D)", range: "100, 150, 175, 200, 250, 300, 350 mm" },
      { parameter: "Flange Size (B)", range: "50, 60, 65, 75, 80 mm" },
      { parameter: "Thickness (T)", range: "1.5mm – 3.5mm" },
      { parameter: "Standard Length", range: "Up to 14.0 meters (Custom to order)" },
    ],
    availableCoatingsOrColors: [
      "Hot-Dip Galvanized (Z120 / Z180 / Z275 GSM)",
      "Galvalume (AZ100 / AZ150 GSM)",
      "High-Performance Bare Steel with Red Oxide Primer (On Request)",
    ],
    manufacturingProcess: [
      { step: "01", title: "Decoiling & Leveling", description: "Continuous feeding and precision multi-roll leveling of high-strength steel coils." },
      { step: "02", title: "Hydraulic CNC Punching", description: "Online high-speed hydraulic punching of slotted bolt holes per Tekla NC files." },
      { step: "03", title: "Progressive Multi-Stage Roll Forming", description: "18-station cold roll-forming mill shaping exact web, flange, and return lip profiles." },
      { step: "04", title: "Flying Hydraulic Shearing", description: "Burr-free flying cut-off to specified length without stopping line motion." },
    ],
    qualityAssurance: [
      "Coil Tensile Test & Elongation Verification",
      "Zinc Coating Mass Test per IS 6745",
      "Dimensional Flange/Web/Lip Vernier Caliper Check",
      "Straightness & Camber Tolerances per ASTM A653",
    ],
    faqs: [
      { question: "Why choose Z-purlins over C-purlins for PEB roofs?", answer: "Z-purlins can be nested and lapped over frame supports to form continuous beams, reducing bending deflection and optimizing steel thickness." },
      { question: "What is the standard hole spacing for Yatee purlins?", answer: "We punch standard 18mm x 22mm slotted holes at customized gauge distances matching your rafter connection clip plates." },
    ],
    relatedProjectSlugs: ["pune-mega-logistics-park", "gujarat-chemical-process-facility"],
    relatedProductSlugs: ["pre-engineered-buildings", "industrial-sheds", "roofing-sheets"],
  },
  {
    slug: "roofing-sheets",
    title: "Colour-Coated Roofing Sheets",
    subtitle: "High-Tensile Galvalume & Pre-Painted Steel Cladding Profiles",
    shortDescription:
      "Premium trapezoidal and standing-seam colour-coated Galvalume sheets engineered for maximum weather resistance, aesthetic appeal, and structural strength.",
    fullDescription:
      "Yatee Roofing Sheets are roll-formed from premium 55% Aluminum-Zinc alloy coated steel (Galvalume) and pre-painted with advanced multi-layer coating systems (SMP, RMP, and PVDF). Designed with high crest trapezoidal ribs, our roof and wall profiles deliver exceptional water discharge capacity, span capability, and long-term colour vibrancy.",
    featuredImage: "/images/products/roofing-sheets.jpg",
    galleryImages: [
      "/images/products/roof-sheet-1.webp",
      "/images/products/roof-sheet-2.webp",
      "/images/products/roof-sheet-3.webp",
    ],
    features: [
      { title: "Deep Anti-Capillary Groove", description: "Precision-engineered side lap return prevents water siphoning under torrential monsoon downpours." },
      { title: "High-Yield Steel Substrate", description: "550 MPa minimum yield strength allows greater purlin spans with zero panel sagging." },
      { title: "Superior Thermal Reflectance", description: "High Solar Reflectance Index (SRI) coatings reflect solar heat, keeping building interiors cooler." },
      { title: "Multi-Coat Paint Systems", description: "20-25 micron topcoat over anti-corrosive primer provides 25+ years UV color durability." },
    ],
    benefits: [
      { title: "100% Leak-Proof Performance", description: "Engineered side-lap overlap and self-drilling EPDM washer fasteners prevent water entry." },
      { title: "Corrosion Resistance 4x Higher", description: "Galvalume alloy provides 4 to 6 times greater atmospheric corrosion resistance than galvanized steel." },
      { title: "Architectural Visual Appeal", description: "Available in a wide range of RAL shades to complement corporate brand identities." },
    ],
    applications: [
      "Industrial Warehouse Roofs & Sidewalls",
      "Manufacturing & Automobile Assembly Plants",
      "Airport Cargo Sheds & Logistic Hubs",
      "Agricultural Canopy & Processing Buildings",
    ],
    specifications: [
      { parameter: "Base Metal Substrate", value: "High-Tensile Steel (Yield Strength: 550 MPa)", standard: "AS 1397 / ASTM A792" },
      { parameter: "Metallic Coating", value: "Galvalume (55% Al, 43.4% Zn, 1.6% Si) AZ150 (150 g/m²)", standard: "IS 15965 / ASTM A792" },
      { parameter: "Paint System", value: "Regular Modified Polyester (RMP) / Silicon Modified Polyester (SMP) / PVDF", standard: "IS 14246" },
      { parameter: "Top Coat Thickness", value: "20–25 Microns over 5 Micron Primer", standard: "ISO 2808" },
      { parameter: "Back Coat Thickness", value: "7–10 Microns Grey Epoxy Primer", standard: "ISO 2808" },
      { parameter: "Profile Width / Pitch", value: "1060mm Overall (1000mm Cover Width), 250mm Pitch, 30mm Crest Height", standard: "Standard Profile" },
      { parameter: "Sheet Thickness", value: "0.45mm, 0.50mm, 0.55mm, 0.60mm (TCT)", standard: "Standard Gauge" },
    ],
    dimensions: [
      { parameter: "Effective Cover Width", range: "1000 mm" },
      { parameter: "Crest Depth / Height", range: "28 mm – 32 mm" },
      { parameter: "Pitch", range: "200 mm – 250 mm" },
      { parameter: "Sheet Length", range: "Cut to customer requirement (up to 12m+)" },
    ],
    availableCoatingsOrColors: [
      "Off-White / Caulfield Green (RAL 9002 / RAL 6005)",
      "Sky Blue / Industrial Navy (RAL 5012 / RAL 5002)",
      "Terracotta Red / Brick Red (RAL 3011 / RAL 3000)",
      "Charcoal Grey / Slate Grey (RAL 7016 / RAL 7012)",
      "Bare Galvalume (Metallic Silver Spangle)",
    ],
    manufacturingProcess: [
      { step: "01", title: "Coil Quality Inspection", description: "Testing coating thickness, cross-hatch paint adhesion, and pencil hardness." },
      { step: "02", title: "Multi-Station Roll Forming", description: "Continuous cold roll-forming with hardened chrome-plated rollers for scratch-free profiling." },
      { step: "03", title: "Flying Shear Cut-to-Length", description: "Precision hydraulic cutting ensuring clean, burr-free edges without coating fracture." },
      { step: "04", title: "Protective Guard Film & Packing", description: "Application of temporary peel-off PE protective film to safeguard sheets during transport." },
    ],
    qualityAssurance: [
      "Cross-Hatch Adhesion Test (ASTM D3359)",
      "Impact Resistance & T-Bend Flexibility Check",
      "Salt Spray Corrosion Testing (1,000 Hours ASTM B117)",
    ],
    faqs: [
      { question: "What is the difference between Galvalume and Galvanized sheets?", answer: "Galvalume uses an alloy of 55% Aluminum and 43.4% Zinc, which offers superior barrier protection against atmospheric corrosion and lasts 4 to 6 times longer than ordinary galvanized zinc sheets." },
      { question: "Can Yatee supply curved roof sheets?", answer: "Yes, we produce crimp-curved roofing sheets for eaves, bullnoses, and curved barrel arch roofs with specified radii." },
    ],
    relatedProjectSlugs: ["bengaluru-pharma-cold-storage-hub", "hyderabad-fmcg-distribution-center"],
    relatedProductSlugs: ["c-z-purlins", "lgs-structures", "ventilation-systems"],
  },
  {
    slug: "lgs-structures",
    title: "Light Gauge Steel (LGS) Structures",
    subtitle: "Precision Cold-Formed Steel Framing for Commercial & Modular Buildings",
    shortDescription:
      "High-speed, lightweight cold-formed steel framing systems designed for multi-storey residential, commercial offices, site offices, and institutional structures.",
    fullDescription:
      "Yatee Light Gauge Steel (LGS) Framing Structures offer a revolutionary, lightweight alternative to conventional RCC and heavy steel framing. Engineered with precision CNC roll-forming technology from high-tensile galvanized steel (550 MPa), LGS frames provide extreme dimensional accuracy, rapid dry construction, superior earthquake resistance, and termite/corrosion immunity.",
    featuredImage: "/images/products/puff-panels.jpg",
    galleryImages: [
      "/images/products/puff-1.webp",
      "/images/products/puff-2.webp",
      "/images/products/puff-3.webp",
    ],
    features: [
      { title: "High-Speed Dry Construction", description: "100% factory pre-assembled wall panels and roof trusses enable up to 60% faster project completion." },
      { title: "High Strength-to-Weight Ratio", description: "7x lighter than concrete framing, drastically reducing foundation costs and seismic inertia." },
      { title: "CNC Precision Pre-Punching", description: "Pre-punched service holes for electrical conduits and plumbing lines with zero on-site drilling." },
      { title: "Termite & Moisture Immune", description: "Galvanized zinc coating (Z275 GSM) prevents corrosion, warping, cracking, and rot." },
    ],
    benefits: [
      { title: "Significant Foundation Savings", description: "Lighter superstructure reduces pile and footing concrete volume by 30% to 40%." },
      { title: "Green & Sustainable", description: "100% recyclable steel, zero on-site water consumption, and minimal environmental impact." },
      { title: "Design Flexibility", description: "Accommodates diverse architectural claddings including fiber cement boards, ACP, and glass facades." },
    ],
    applications: [
      "Commercial & Site Administrative Offices",
      "Multi-Storey Modular Buildings & Rooftop Extensions",
      "Healthcare Clinics & Institutional Facilities",
      "Industrial Security & Control Rooms",
    ],
    specifications: [
      { parameter: "Steel Grade & Yield Strength", value: "High-Tensile Cold-Formed Steel (Yield: 550 MPa)", standard: "ASTM A653 / IS 277" },
      { parameter: "Zinc Coating Mass", value: "Z275 gsm (Hot-Dip Galvanized Coating)", standard: "IS 277" },
      { parameter: "Profile Depths (C-Studs & Tracks)", value: "89mm / 140mm Web Depth, 41mm Flange", standard: "Standard LGSF" },
      { parameter: "Steel Sheet Thickness", value: "0.75mm to 1.50mm BMT", standard: "Precision Gauge" },
      { parameter: "Connection Fasteners", value: "Class 3 / Class 4 Self-Drilling Hex Head Screws", standard: "AS 3566" },
      { parameter: "Fire & Acoustic Rating", value: "Up to 2-Hour Fire Rating with Gypsum/Fibre Cement Boards", standard: "IS 3809 / BS 476" },
    ],
    dimensions: [
      { parameter: "Stud Depths", range: "89 mm, 140 mm, 200 mm" },
      { parameter: "Gauge Thickness", range: "0.75 mm – 1.50 mm" },
      { parameter: "Wall Height Capability", range: "Up to 4.5m per storey" },
      { parameter: "Maximum Building Storeys", range: "G + 3 Floors (Self-Supporting LGSF)" },
    ],
    availableCoatingsOrColors: [
      "Hot-Dip Galvanized Z275 Finish",
      "Compatible with Fibre Cement, Gypsum, ACP, or Tile Cladding Facades",
    ],
    manufacturingProcess: [
      { step: "01", title: "CAD/BIM to CNC Direct Interface", description: "Direct machine output from Tekla / Vertex BD design models with zero manual programming error." },
      { step: "02", title: "CNC Multi-Tool Punching", description: "Automated lip cuts, swage dimples, service holes, and chamfered truss connections." },
      { step: "03", title: "Continuous High-Yield Roll Forming", description: "Precision roll-forming of high-tensile galvanized coils into C-studs, tracks, and nogging." },
      { step: "04", title: "Jigged Panel Assembly & Tagging", description: "Factory pre-assembly into framed wall cassettes with individual QR tracking codes." },
    ],
    qualityAssurance: [
      "Dimensional Tolerance Check (< 1mm per cassette)",
      "Zinc Coating Verification per IS 6745",
      "Screw Pull-Out & Shear Strength Tests",
    ],
    faqs: [
      { question: "What is Light Gauge Steel (LGS) Framing?", answer: "LGS framing is a modern construction technology utilizing precision cold-formed galvanized steel studs and tracks to build structural walls, floors, and roof trusses up to G+3 storeys." },
      { question: "How does LGS construction compare with conventional brick and concrete?", answer: "LGS construction is 3x faster, 7x lighter, produces zero site wet-waste, and provides superior seismic and termite resistance." },
    ],
    relatedProjectSlugs: ["bengaluru-pharma-cold-storage-hub", "hyderabad-fmcg-distribution-center"],
    relatedProductSlugs: ["pre-engineered-buildings", "roofing-sheets", "c-z-purlins"],
  },
  {
    slug: "ventilation-systems",
    title: "Industrial Ventilation Systems",
    subtitle: "Natural Roof Ventilators, Ridge Vents, Louvers & Air Exchange Systems",
    shortDescription:
      "Zero-power wind-driven turbo ventilators, continuous ridge air monitors, heavy-duty storm-proof louvers, and natural daylighting integration.",
    fullDescription:
      "Effective thermal comfort and air exchange are vital for industrial factory productivity and worker safety. Yatee designs and manufactures engineered natural and mechanical ventilation systems, including aerodynamic wind-driven rotary turbo ventilators, continuous ridge ventilators, and architectural aluminum storm louvers.",
    featuredImage: "/images/products/ventilation.jpg",
    galleryImages: [
      "/images/products/vent-1.webp",
      "/images/products/vent-2.webp",
      "/images/products/vent-3.webp",
    ],
    features: [
      { title: "Zero Electricity Running Cost", description: "Operates purely on wind dynamics and internal thermal convection currents with zero power consumption." },
      { title: "Marine-Grade Aluminum Blades", description: "Corrosion-resistant light alloy vanes with permanently sealed dual ZZ stainless steel ball bearings." },
      { title: "Continuous Ridge Ventilators", description: "Aerodynamically baffled throat openings for high-volume hot air exhaustion along the building apex." },
      { title: "Storm-Proof Wall Louvers", description: "Heavy-duty extruded aluminum louvers preventing rainwater ingress while maximizing intake airflow." },
    ],
    benefits: [
      { title: "Rapid Heat & Fume Exhaustion", description: "Achieves 10 to 15 air changes per hour, removing toxic welding fumes, heat pockets, and airborne moisture." },
      { title: "100% Weather & Leak Resistance", description: "Matching FRP/Polycarbonate molded base plates integrate seamlessly into roofing sheets with zero leakage." },
      { title: "Zero Maintenance Operation", description: "Teflon-sealed precision bearings require no lubrication or maintenance for 10+ years." },
    ],
    applications: [
      "Foundries, Forging & Heavy Fabrication Bays",
      "Plastic Injection & Rubber Molding Plants",
      "Chemical Processing & Paint Booth Facilities",
      "High-Occupancy Logistics Warehouses",
    ],
    specifications: [
      { parameter: "Turbine Diameter", value: "21 Inch (530mm) / 24 Inch (600mm) / 32 Inch (800mm)", standard: "Standard" },
      { parameter: "Vane / Blade Material", value: "High-Grade Aluminum Alloy (Alloy 5052 / 3003) / Stainless Steel 304", standard: "ASTM B209" },
      { parameter: "Bearings", value: "Dual Permanently Lubricated SKF / NBC Stainless Steel Ball Bearings", standard: "Precision Grade" },
      { parameter: "Base Plate Material", value: "Molded FRP (Fiberglass Reinforced Polymer) / Polycarbonate Matching Roof Profile", standard: "UV Stabilized" },
      { parameter: "Exhaust Air Flow Capacity", value: "1,800 to 4,500 CFM per unit at 8 km/h wind velocity", standard: "ASHRAE Standard" },
      { parameter: "Continuous Ridge Throat Width", value: "600mm to 1500mm Throat Opening with Internal Rain Dampers", standard: "Custom" },
    ],
    dimensions: [
      { parameter: "Turbo Throat Diameter", range: "21\", 24\", 28\", 32\"" },
      { parameter: "Continuous Ridge Width", range: "600 mm – 1500 mm" },
      { parameter: "Louver Blade Depth", range: "50 mm, 75 mm, 100 mm" },
    ],
    availableCoatingsOrColors: [
      "Natural Mill Finish Aluminum (Bright Silver)",
      "Powder-Coated Corporate Navy / Off-White",
      "Stainless Steel 304 Buff Finish",
    ],
    manufacturingProcess: [
      { step: "01", title: "Precision Vane Stamping", description: "Hydraulic die stamping of aerodynamic curvature vanes for maximum rotational torque." },
      { step: "02", title: "Dynamic Balancing & Alignment", description: "Dynamic centrifugal balancing on dual bearings to eliminate rotational wobble." },
      { step: "03", title: "Molded Base Plate Matching", description: "Compression molding of UV-resistant translucent FRP bases matching specific sheet crest profiles." },
    ],
    qualityAssurance: [
      "Dynamic Balance Vibration Test (< 0.5 mm/s)",
      "Simulated High-Speed Wind Tunnel Rotation Check",
      "Salt Fog Exposure Corrosion Test per ISO 9001:2015",
    ],
    faqs: [
      { question: "How many turbo ventilators are required for a standard 20,000 sq. ft. factory?", answer: "Depending on internal heat load and required air changes (typically 10-12 ACH), a 20,000 sq. ft. plant with 8m height requires approximately 16 to 22 units of 24\" diameter ventilators." },
      { question: "Do wind ventilators leak during torrential monsoon storms?", answer: "No, the centrifugal rotation of the blades creates positive outward air pressure that deflects driving rain, and our seamless FRP base plates prevent joint leakage." },
    ],
    relatedProjectSlugs: ["ahmedabad-heavy-auto-manufacturing-plant", "pune-mega-logistics-park"],
    relatedProductSlugs: ["pre-engineered-buildings", "industrial-sheds", "roofing-sheets"],
  },
];
