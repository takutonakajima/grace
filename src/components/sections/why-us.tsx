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
    title: "FDA-Approved Treatments",
    description:
      "Every treatment we offer is clinically validated, FDA-approved, and performed with the highest safety standards.",
  },
  {
    icon: Sparkles,
    title: "Personalized Protocols",
    description:
      "No two clients are alike. Every plan is designed around your unique skin, goals, and lifestyle for optimal results.",
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
    <section className="py-28 lg:py-36 bg-[#1E1A17] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-5 font-light"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Why Choose Us
            </p>
            <h2
              className="font-light leading-[1.15] text-white mb-8"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
              }}
            >
              A Standard of
              <br />
              <em className="italic text-[#E8D5C4]">Excellence</em>
            </h2>
            <p
              className="text-[#8B7B71] leading-relaxed mb-10 text-base max-w-md"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              We don&apos;t just offer treatments — we cultivate transformation. Our commitment to precision, artistry, and genuine care sets a new standard in aesthetic wellness.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-px bg-[#B8977E]" />
              <p
                className="text-xs tracking-[0.2em] uppercase text-[#B8977E] font-light"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Glow Life Promise
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
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
                  className="group"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-[#3D3530] group-hover:border-[#B8977E] transition-colors duration-300 mb-5">
                    <Icon
                      size={18}
                      className="text-[#B8977E]"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3
                    className="text-white font-light text-xl mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {reason.title}
                  </h3>
                  <p
                    className="text-[#8B7B71] text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
