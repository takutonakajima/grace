"use client";

import { motion } from "framer-motion";
import { Award, Shield, Sparkles, Users } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Team",
    description:
      "Our licensed practitioners bring years of clinical experience and advanced training in aesthetic medicine and wellness.",
  },
  {
    icon: Shield,
    title: "FDA-Cleared Treatments",
    description:
      "Every treatment we offer is clinically validated, FDA-cleared, and performed with the highest safety standards.",
  },
  {
    icon: Sparkles,
    title: "Personalized Protocols",
    description:
      "No two clients are alike. Every plan is designed around your unique skin, body, and wellness goals for optimal results.",
  },
  {
    icon: Users,
    title: "Boutique Experience",
    description:
      "Enjoy unhurried, attentive care in a serene, luxurious setting where every detail is curated for your comfort.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-28 lg:py-40 bg-[#1C1C1C] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:sticky lg:top-32"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px bg-[#C9A96E]/60" />
              <p
                className="text-[10px] tracking-[0.45em] uppercase text-[#C9A96E] font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Why Choose Us
              </p>
            </div>
            <h2
              className="font-light leading-[1.12] text-white mb-8"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.75rem, 4.5vw, 4rem)",
              }}
            >
              A Standard of
              <br />
              <em className="italic text-[#C9A96E]">Excellence</em>
            </h2>
            <p
              className="text-white/45 leading-[1.85] mb-10 text-[15px] max-w-sm"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              We don&apos;t just offer treatments — we cultivate transformation. Our commitment to precision, artistry, and genuine care sets a new standard in aesthetic wellness.
            </p>
            <div className="flex items-center gap-5">
              <div className="w-12 h-px bg-[#C9A96E]/50" />
              <p
                className="text-[10px] tracking-[0.25em] uppercase text-[#C9A96E]/70 font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                The Grace Light Promise
              </p>
            </div>
          </motion.div>

          {/* Right: Reasons grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.12, ease: "easeOut" }}
                  className="group border border-white/5 hover:border-[#C9A96E]/30 p-8 transition-all duration-500 hover:bg-white/[0.02]"
                >
                  <div className="w-11 h-11 flex items-center justify-center border border-white/10 group-hover:border-[#C9A96E]/50 transition-colors duration-500 mb-6">
                    <Icon
                      size={17}
                      className="text-[#C9A96E]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className="text-white font-light text-[1.4rem] mb-3 leading-tight"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-white/40 text-[13px] leading-[1.85]"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
