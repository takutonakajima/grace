"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "Laser Hair Removal Client",
    quote:
      "I've been coming to Grace Light for over a year now and the results are truly life-changing. My skin is smoother than I ever thought possible, and the team makes every visit feel like a luxury experience.",
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
      "After two kids I had stubborn areas that no amount of exercise could fix. Grace Light's body contouring changed everything. The results are incredible and the staff made me feel so comfortable.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 lg:py-40 bg-[#F3EBE2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-5"
          >
            <div className="w-10 h-px bg-[#C9A96E]/50" />
            <p
              className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Client Stories
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-light text-[#1C1C1C] leading-[1.12]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.75rem, 4.5vw, 3.75rem)",
            }}
          >
            Real Results, <em className="italic text-[#C9A96E]">Real Stories</em>
          </motion.h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.15, ease: "easeOut" }}
              className="bg-white p-9 lg:p-11 relative group hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-shadow duration-500 border border-[#E8D9C3]/50"
            >
              {/* Large decorative quote */}
              <span
                className="absolute top-5 right-7 text-8xl font-light leading-none select-none pointer-events-none"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  color: "#F3EBE2",
                }}
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="flex items-center gap-1 mb-7">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={12}
                    className="fill-[#C9A96E] text-[#C9A96E]"
                  />
                ))}
              </div>

              {/* Quote */}
              <p
                className="text-[#5C5048] leading-[1.85] mb-9 relative z-10"
                style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "14px" }}
              >
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Gold divider */}
              <div className="w-10 h-px bg-[#C9A96E]/40 mb-7" />

              {/* Author */}
              <div>
                <p
                  className="text-[#1C1C1C] font-light"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.25rem" }}
                >
                  {t.name}
                </p>
                <p
                  className="text-[#C9A96E] text-[10px] tracking-[0.15em] uppercase font-light mt-1"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
