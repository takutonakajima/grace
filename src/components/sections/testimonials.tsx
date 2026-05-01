"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Laser Hair Removal Client",
    quote:
      "I've been coming to Glow Life for over a year now and the results are truly life-changing. My skin is smoother than I ever thought possible, and the team makes every visit feel like a luxury experience.",
    rating: 5,
  },
  {
    name: "Jessica R.",
    role: "RF Microneedling Client",
    quote:
      "I was nervous about RF Microneedling but the team walked me through every step. After just three sessions my skin texture improved dramatically. I receive compliments constantly now!",
    rating: 5,
  },
  {
    name: "Amanda K.",
    role: "Body Contouring Client",
    quote:
      "After two kids I had stubborn areas that no amount of exercise could fix. Glow Life's body contouring changed everything. The results are incredible and the staff made me feel so comfortable.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 lg:py-36 bg-[#F0DDD5]/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-4 font-light"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Client Stories
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-light text-[#1E1A17] leading-[1.15]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            }}
          >
            Real Results, <em className="italic">Real Stories</em>
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white p-8 lg:p-10 relative group hover:shadow-lg transition-shadow duration-500"
            >
              {/* Large quote mark */}
              <span
                className="absolute top-6 right-8 text-7xl font-light text-[#F0DDD5] leading-none select-none pointer-events-none"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                "
              </span>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={13}
                    className="fill-[#B8977E] text-[#B8977E]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#5C5048] leading-relaxed mb-8 text-base relative z-10"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Divider */}
              <div className="w-8 h-px bg-[#E8D5C4] mb-6" />

              {/* Author */}
              <div>
                <p
                  className="text-[#1E1A17] font-light text-lg"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[#B8977E] text-xs tracking-[0.1em] uppercase font-light mt-0.5"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
