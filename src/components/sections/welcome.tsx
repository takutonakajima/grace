"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-28 lg:py-40 bg-[#FAF7F2] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=100&w=1200"
                alt="Grace Light Aesthetics — luxury spa experience"
                fill
                quality={100}
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/15 via-transparent to-transparent" />
            </div>

            {/* Decorative lines */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 border border-[#C9A96E]/25 -z-10" />
            <div className="absolute -top-8 -left-8 w-36 h-36 bg-[#EDDDCF]/50 -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#C9A96E]" />
              <p
                className="text-[10px] tracking-[0.45em] uppercase text-[#C9A96E] font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Welcome to Grace Light
              </p>
            </div>

            <h2
              className="font-normal leading-[1.12] mb-8 text-[#1C1C1C]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
              }}
            >
              Confidence That Feels{" "}
              <em className="heading-highlight">Entirely Your Own</em>
            </h2>

            <div
              className="space-y-5 text-[#1C1C1C] leading-[1.85] mb-10 text-[15px]"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              <p>
                Located in Livonia, Grace Light Aesthetics & Wellness is a boutique med spa designed to feel calm, refined, and genuinely inviting from the moment you arrive.
              </p>
              <p>
                We specialize in results-driven aesthetic treatments using advanced, medical-grade technology paired with specialized, all-natural products — carefully selected to support the healthiest skin and the most visible, lasting results.
              </p>
            </div>

            {/* Stats — 3 items */}
            <div className="grid grid-cols-3 gap-6 mb-12">
              {[
                { value: "21+", label: "Expert Services" },
                { value: "FDA", label: "Cleared Technologies" },
                { value: "100%", label: "Personalized Plans" },
              ].map((stat) => (
                <div key={stat.label} className="border-l border-[#C9A96E]/40 pl-5">
                  <p
                    className="text-3xl font-light text-[#1C1C1C] mb-1 leading-none"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-[10px] tracking-[0.15em] text-[#7A6E65] uppercase font-light"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-4 text-[#C9A96E] text-[10px] tracking-[0.3em] uppercase font-light group"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Our Story
              <span className="w-10 h-px bg-[#C9A96E] transition-all duration-500 group-hover:w-20" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
