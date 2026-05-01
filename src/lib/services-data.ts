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
  {
    id: "laser-hair-removal",
    name: "Laser Hair Removal",
    category: "Body",
    tagline: "Permanent hair reduction with cutting-edge technology.",
    description:
      "Say goodbye to razors and waxing forever. Our state-of-the-art laser technology targets hair follicles at the root, delivering long-lasting smooth skin on all skin tones. FDA-cleared and clinically proven.",
    benefits: [
      "Permanent 80–90% hair reduction",
      "Safe for all skin tones",
      "Minimal discomfort with cooling technology",
      "Treats face, body, and bikini areas",
    ],
    image:
      "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
    popular: true,
    duration: "15–60 min",
  },
  {
    id: "body-contouring",
    name: "Body Contouring",
    category: "Body",
    tagline: "Sculpt and define without surgery or downtime.",
    description:
      "Advanced non-invasive body contouring treatments that target stubborn fat, tighten skin, and define your natural curves. Our personalized protocols are designed to achieve visible results with zero recovery time.",
    benefits: [
      "Non-invasive, no downtime",
      "Targets stubborn fat deposits",
      "Firms and tightens loose skin",
      "Visible results in as few as 4 sessions",
    ],
    image:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
    popular: true,
    duration: "30–60 min",
  },
  {
    id: "rf-microneedling",
    name: "RF Microneedling",
    category: "Face",
    tagline: "Resurface, tighten, and rejuvenate at a cellular level.",
    description:
      "Combining the proven benefits of microneedling with the power of radiofrequency energy, this advanced treatment stimulates collagen production deep within the skin for transformative anti-aging results.",
    benefits: [
      "Reduces fine lines and wrinkles",
      "Tightens and lifts sagging skin",
      "Minimizes pores and acne scarring",
      "Long-lasting collagen remodeling",
    ],
    image:
      "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
    popular: true,
    duration: "45–75 min",
  },
  {
    id: "botox-fillers",
    name: "Botox & Fillers",
    category: "Face",
    tagline: "Natural-looking enhancement, expertly delivered.",
    description:
      "Our experienced injectors create subtle, balanced results that enhance your natural beauty without sacrificing expression. From smoothing dynamic wrinkles to restoring facial volume, every treatment is a work of art.",
    benefits: [
      "Smooths forehead lines and crow's feet",
      "Restores lost facial volume",
      "Defines lips and cheekbones",
      "Results in 1–2 weeks, lasting 3–6 months",
    ],
    image:
      "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800&q=80",
    duration: "30–45 min",
  },
  {
    id: "chemical-peels",
    name: "Chemical Peels",
    category: "Face",
    tagline: "Reveal brighter, smoother, younger-looking skin.",
    description:
      "Medical-grade chemical peels exfoliate and renew the skin's surface, targeting hyperpigmentation, uneven texture, and signs of aging. We offer a range of peel depths customized to your skin goals.",
    benefits: [
      "Evens skin tone and texture",
      "Reduces hyperpigmentation and sun damage",
      "Minimizes pores and acne",
      "Reveals fresh, radiant skin",
    ],
    image:
      "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&q=80",
    duration: "30–60 min",
  },
  {
    id: "hydrafacial",
    name: "HydraFacial",
    category: "Face",
    tagline: "Deeply cleanse, extract, and hydrate in one session.",
    description:
      "The HydraFacial is a multi-step treatment that cleanses, exfoliates, extracts impurities, and infuses the skin with nourishing serums tailored to your skin type. Instantly glowing, zero downtime.",
    benefits: [
      "Immediate visible glow with no downtime",
      "Deep pore cleansing and hydration",
      "Customizable with boosters",
      "Suitable for all skin types",
    ],
    image:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=800&q=80",
    popular: true,
    duration: "30–60 min",
  },
  {
    id: "iv-therapy",
    name: "IV Therapy",
    category: "Wellness",
    tagline: "Replenish, restore, and revitalize from the inside out.",
    description:
      "Customized IV vitamin infusions deliver essential nutrients, antioxidants, and hydration directly to your bloodstream for maximum absorption. Whether you need an energy boost, immune support, or beauty enhancement, we have a drip for you.",
    benefits: [
      "100% nutrient absorption",
      "Boosts energy and immunity",
      "Enhances skin glow and hydration",
      "Supports recovery and performance",
    ],
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80",
    duration: "45–60 min",
  },
  {
    id: "skin-tightening",
    name: "Skin Tightening",
    category: "Body",
    tagline: "Firm, lift, and smooth loose or lax skin.",
    description:
      "Our radiofrequency skin tightening treatments heat the deep layers of the skin to stimulate collagen and elastin production, resulting in firmer, smoother, more youthful-looking skin — on the face and body.",
    benefits: [
      "Non-surgical lift and tightening",
      "Effective on face, neck, arms, and abdomen",
      "Progressive, natural-looking results",
      "No downtime required",
    ],
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    duration: "30–60 min",
  },
  {
    id: "prp-treatments",
    name: "PRP Treatments",
    category: "Wellness",
    tagline: "Harness your body's own healing power for regeneration.",
    description:
      "Platelet-Rich Plasma (PRP) therapy uses your body's own growth factors to stimulate natural regeneration. Offered for facial rejuvenation (Vampire Facial), hair restoration, and joint wellness.",
    benefits: [
      "100% natural, uses your own blood",
      "Stimulates hair regrowth",
      "Rejuvenates and tightens facial skin",
      "Long-lasting regenerative effects",
    ],
    image:
      "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80",
    duration: "60–90 min",
  },
  {
    id: "wellness-consultations",
    name: "Wellness Consultations",
    category: "Wellness",
    tagline: "A personalized plan built around you and your goals.",
    description:
      "Your wellness journey begins with a one-on-one consultation with our expert team. We assess your skin, health history, and aesthetic goals to design a fully customized treatment protocol that delivers real, lasting results.",
    benefits: [
      "Comprehensive skin and health assessment",
      "Personalized treatment roadmap",
      "Ongoing support and plan adjustments",
      "Exclusive client membership options",
    ],
    image:
      "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=800&q=80",
    duration: "30–45 min",
  },
];

export const categories = ["All", "Face", "Body", "Wellness"] as const;
export type Category = (typeof categories)[number];
