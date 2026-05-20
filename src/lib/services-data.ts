export interface Service {
  id: string;
  name: string;
  category: "Body" | "Face" | "Wellness";
  tagline: string;
  description: string;
  benefits: string[];
  image: string;
  popular?: boolean;
  duration?: string;
}

export const services: Service[] = [
  // ─── FACE ───────────────────────────────────────────────
  {
    id: "neurotoxins",
    name: "Neurotoxins",
    category: "Face",
    tagline: "Smooth expression lines while preserving your natural look.",
    description:
      "Xeomin and Jeuveau are advanced, pure neurotoxins that precisely relax the muscles responsible for dynamic expression lines — smoothing forehead wrinkles, crow's feet, and frown lines while keeping your expression entirely natural.",
    benefits: [
      "Xeomin & Jeuveau — precise, effective formulas",
      "Smooths forehead lines, crow's feet & frown lines",
      "Results last 3–4 months with no downtime",
      "Member pricing: $10/unit",
    ],
    image: "/images/botox-injection.jpg",
    duration: "20–30 min",
  },
  {
    id: "dermal-fillers",
    name: "Dermal Fillers",
    category: "Face",
    tagline: "Restore volume and define contours with natural-looking results.",
    description:
      "Evolysse and Belotero Balance dermal fillers restore lost facial volume and beautifully define lips, cheeks, and jawline. Our expert injectors deliver balanced, natural results that enhance without over-correcting.",
    benefits: [
      "Evolysse & Belotero Balance available",
      "Restores volume and defines facial contours",
      "Results last 9–18+ months",
      "Expert injectors for balanced, natural outcomes",
    ],
    image: "/images/lip-filler.jpg",
    duration: "30–45 min",
  },
  {
    id: "biostimulator",
    name: "Biostimulator (Radiesse)",
    category: "Face",
    tagline: "Deep volumizing with long-term collagen stimulation.",
    description:
      "Radiesse is a powerful biostimulator that immediately restores volume while triggering your body's own collagen production — delivering results that look natural and improve progressively over time.",
    benefits: [
      "Immediate volume restoration",
      "Stimulates long-term collagen production",
      "Results can last 12–24 months",
      "Treats face, neck, and hands",
    ],
    image: "/images/biostimulator.jpg",
    duration: "30–45 min",
  },
  {
    id: "rf-microneedling",
    name: "Microneedling",
    category: "Face",
    tagline: "Resurface and rejuvenate with precision-guided collagen induction.",
    description:
      "Microneedling uses ultra-fine needles to create controlled micro-channels in the skin, triggering natural collagen and elastin production. This proven treatment reduces fine lines, minimizes pores, and improves skin texture — with optional PRP, PRF, or Exosome add-ons for enhanced results.",
    benefits: [
      "Reduces fine lines, wrinkles & acne scars",
      "Improves skin texture and minimizes pores",
      "Optional PRP, PRF, or Exosome enhancement",
      "Treats face, neck, and scalp",
    ],
    image: "/images/microneedling.jpg",
    popular: true,
    duration: "45–75 min",
  },
  {
    id: "clearlift-laser",
    name: "ClearLift Laser",
    category: "Face",
    tagline: "The zero-downtime laser for smoother, tighter skin.",
    description:
      "ClearLift is a non-ablative Q-switched laser that targets fine lines, skin laxity, and uneven texture at multiple skin depths with absolutely no downtime. Safe for all skin tones year-round.",
    benefits: [
      "Zero downtime — resume daily activities immediately",
      "Treats fine lines, texture & skin laxity",
      "Safe for all skin tones year-round",
      "Face, neck & décolletage options",
    ],
    image: "/images/laser-facial.jpg",
    popular: true,
    duration: "20–40 min",
  },
  {
    id: "dye-vl",
    name: "Dye-VL Laser",
    category: "Face",
    tagline: "Target redness, pigmentation, and vascular concerns.",
    description:
      "Dye-VL is an intense pulsed light treatment that effectively reduces redness, broken capillaries, sun spots, and hyperpigmentation — leaving skin more even, clear, and radiant.",
    benefits: [
      "Reduces redness, rosacea & broken capillaries",
      "Fades sun spots and hyperpigmentation",
      "Evens overall skin tone and clarity",
      "Treats face, neck & décolletage",
    ],
    image: "/images/skin-resurfacing-laser.jpg",
    duration: "20–40 min",
  },
  {
    id: "signature-duo-laser",
    name: "Signature Duo Laser Facial",
    category: "Face",
    tagline: "Two powerful lasers combined for complete skin renewal.",
    description:
      "Our Signature Duo pairs ClearLift with Dye-VL or Q-Beam to address texture, laxity, pigment, and redness in a single comprehensive session — more complete results than either laser alone.",
    benefits: [
      "Combines two laser modalities for full-skin renewal",
      "Targets texture, laxity, pigment & redness together",
      "ClearLift + Dye-VL or ClearLift + Q-Beam options",
      "Enhanced outcomes over single-laser sessions",
    ],
    image: "/images/rf-radiofrequency.jpg",
    duration: "45–60 min",
  },
  {
    id: "aqua-facial",
    name: "Aqua Facial",
    category: "Face",
    tagline: "Deep cleanse, extract, and hydrate for an instant glow.",
    description:
      "Our Aqua Facial delivers multi-step cleansing, exfoliation, extraction, and serum infusion in one session. The advanced version uses medical-grade serums and boosters for targeted skin concerns and a dramatically enhanced glow.",
    benefits: [
      "Deep pore cleansing and hydration",
      "Medical-grade serums & boosters available",
      "Immediate visible results, zero downtime",
      "Suitable for all skin types",
    ],
    image: "/images/hydrafacial.jpg",
    popular: true,
    duration: "45–75 min",
  },
  {
    id: "carbon-peel",
    name: "Carbon Peel Facial",
    category: "Face",
    tagline: "The Hollywood glow treatment for radiant, refined skin.",
    description:
      "Hollywood and Acne Carbon Peel facials use a liquid carbon mask and Q-switched laser to deeply exfoliate, tighten pores, reduce acne, and leave skin luminous. Loved by celebrities for its dramatic, immediate glow.",
    benefits: [
      "Hollywood & Acne Carbon Peel variants",
      "Tightens pores and reduces acne",
      "Exfoliates and evens skin tone",
      "Immediate radiance, no downtime",
    ],
    image: "/images/carbon-peel-facial.jpg",
    duration: "45–60 min",
  },
  {
    id: "vi-peel",
    name: "VI Peel",
    category: "Face",
    tagline: "Medical-grade chemical peel for transformative renewal.",
    description:
      "The VI Peel is a medical-grade chemical peel that targets hyperpigmentation, acne scarring, fine lines, and dull skin — safe for all skin tones with minimal recovery time and remarkable results.",
    benefits: [
      "Reduces hyperpigmentation & acne scarring",
      "Smooths fine lines and uneven texture",
      "Safe for all skin tones",
      "Minimal peeling, dramatic results",
    ],
    image: "/images/chemical-peel.jpg",
    duration: "30–45 min",
  },
  // ─── BODY ────────────────────────────────────────────────
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Body",
    tagline: "Permanent hair reduction with precision technology.",
    description:
      "Our advanced laser targets hair follicles at the root for long-lasting smooth skin on any area of the face or body. Single sessions and 8-session packages for small through extra-large treatment areas.",
    benefits: [
      "80–90% permanent hair reduction",
      "Treats face, body & bikini areas",
      "Small through extra-large area options",
      "8-session packages for maximum results",
    ],
    image: "/images/hair-removal-laser.jpg",
    popular: true,
    duration: "15–60 min",
  },
  {
    id: "double-chin-duo",
    name: "Double Chin Duo Laser",
    category: "Body",
    tagline: "Contour and define your jawline non-surgically.",
    description:
      "Our Double Chin Duo Laser combines two laser modalities to target submental fat and tighten skin beneath the chin — delivering a more defined, sculpted jawline without surgery or downtime.",
    benefits: [
      "Reduces double chin and submental fat",
      "Tightens and firms under-chin skin",
      "Dual-laser technology for optimal results",
      "No surgery, no downtime",
    ],
    image: "/images/jawline-double-chin.jpg",
    duration: "30–45 min",
  },
  {
    id: "body-contouring",
    name: "Body Contouring",
    category: "Body",
    tagline: "Sculpt and define your body without surgery or downtime.",
    description:
      "Non-invasive body contouring targets stubborn fat and tightens skin across multiple body areas — from inner thighs and flanks to the full back and legs. Packages of 1, 3, 6, or 10 treatments deliver progressive, visible results.",
    benefits: [
      "Non-invasive, zero downtime",
      "Targets stubborn fat and tightens skin",
      "Treats small through X-large areas",
      "1, 3, 6, and 10-session packages",
    ],
    image: "/images/body-contouring.jpg",
    duration: "30–60 min",
  },
  {
    id: "cellulite-reduction",
    name: "Cellulite Reduction",
    category: "Body",
    tagline: "Smooth skin texture and reduce the appearance of cellulite.",
    description:
      "Our targeted cellulite reduction treatments use advanced energy-based technology to break down fibrous bands, stimulate collagen, and improve circulation — resulting in noticeably smoother, firmer skin texture.",
    benefits: [
      "Visibly reduces cellulite appearance",
      "Firms and smooths skin texture",
      "Improves circulation and skin tone",
      "Comfortable, no downtime treatment",
    ],
    image: "/images/cellulite-reduction.jpg",
    duration: "30–60 min",
  },
  {
    id: "ems-sculpting",
    name: "EMS Body Sculpting",
    category: "Body",
    tagline: "Build muscle and reduce fat simultaneously.",
    description:
      "EMS body sculpting induces thousands of supramaximal muscle contractions per session — equivalent to an intense workout — to simultaneously build muscle tone and reduce fat. 30 or 60-minute sessions with 4-pad treatment.",
    benefits: [
      "Builds and tones muscle without exercise",
      "Simultaneous fat reduction",
      "30 or 60-minute session options",
      "No downtime, comfortable treatment",
    ],
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=100&w=800",
    duration: "30–60 min",
  },
  {
    id: "pelvic-floor",
    name: "Pelvic Floor Treatment",
    category: "Wellness",
    tagline: "Strengthen and restore pelvic floor function non-invasively.",
    description:
      "Our non-invasive pelvic floor treatment uses EMS technology to stimulate deep pelvic floor muscles — helping restore strength, control, and confidence. An effective option for postpartum recovery and pelvic floor rehabilitation.",
    benefits: [
      "Strengthens pelvic floor muscles",
      "Improves bladder control and core stability",
      "Completely non-invasive, fully clothed",
      "Ideal for postpartum recovery",
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=100&w=800",
    duration: "28–30 min",
  },
  {
    id: "tattoo-removal",
    name: "Tattoo Removal",
    category: "Body",
    tagline: "Safely fade and remove unwanted tattoos.",
    description:
      "Our laser tattoo removal progressively fades and removes tattoos of all sizes — from XXS to XL and larger. Cosmetic eyebrow tattoo removal and sleeve consultations also available.",
    benefits: [
      "All tattoo sizes treated (XXS to XL+)",
      "Eyebrow cosmetic tattoo removal",
      "Safe, gradual, clinical process",
      "Multi-color tattoos treated effectively",
    ],
    image: "/images/tattoo-removal.jpg",
    duration: "15–45 min",
  },
  // ─── WELLNESS ─────────────────────────────────────────────
  {
    id: "red-light-therapy",
    name: "Red Light Therapy",
    category: "Wellness",
    tagline: "Heal, rejuvenate, and restore with therapeutic light energy.",
    description:
      "Red and near-infrared LED light therapy stimulates cellular repair, collagen production, and circulation — reducing inflammation, improving skin quality, and supporting whole-body recovery. Face or full-body options.",
    benefits: [
      "Stimulates collagen and cellular repair",
      "Reduces inflammation and redness",
      "Face (15 min) and full-body (30 min) options",
      "Complimentary LED enhancement for members",
    ],
    image: "/images/red-light-therapy.jpg",
    duration: "15–30 min",
  },
  {
    id: "vitamin-injections",
    name: "Vitamin Injections",
    category: "Wellness",
    tagline: "Fast-absorbing nutrients for energy, glow, and wellbeing.",
    description:
      "Our vitamin injection menu includes B12, B Complex, Vitamin C, Lipotropic, Glutathione, and NAD+ — each targeting specific wellness goals from energy and immunity to skin radiance, detox, and cellular repair.",
    benefits: [
      "B12, B Complex, Vitamin C & Lipotropic available",
      "Glutathione & NAD+ for advanced wellness",
      "100% bioavailable — faster than oral supplements",
      "Quick in-office treatment, no downtime",
    ],
    image: "https://images.unsplash.com/photo-1559181567-c3190ca9d222?q=100&w=800",
    duration: "5–15 min",
  },
  {
    id: "weight-loss",
    name: "Weight Loss Programs",
    category: "Wellness",
    tagline: "Medically supervised GLP programs for lasting results.",
    description:
      "Our physician-supervised weight loss programs utilize Semaglutide (GLP-1) and Tirzepatide (GLP-2) to help you achieve safe, sustainable weight loss with ongoing medical support.",
    benefits: [
      "Semaglutide (GLP-1) & Tirzepatide (GLP-2) options",
      "Medically supervised, personalized program",
      "6-month Semaglutide or 4-month Tirzepatide supply",
      "Clinically proven for significant, lasting results",
    ],
    image: "/images/weight-loss-injection.jpg",
    duration: "Consultation",
  },
  {
    id: "hair-restoration",
    name: "Scalp & Hair Restoration",
    category: "Wellness",
    tagline: "Stimulate natural hair regrowth with precision technology.",
    description:
      "Our scalp RF microneedling and PRP/PRF hair restoration treatments stimulate dormant follicles, improve scalp health, and promote natural hair regrowth — with no surgery or downtime.",
    benefits: [
      "Scalp RF microneedling for follicle stimulation",
      "PRP & PRF treatment options available",
      "Improves hair density and thickness",
      "Non-surgical, no recovery time",
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=100&w=800",
    duration: "45–60 min",
  },
];

export const categories = ["All", "Face", "Body", "Wellness"] as const;
export type Category = (typeof categories)[number];
