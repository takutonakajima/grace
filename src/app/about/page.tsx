"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MANGOMINT_URL = "https://www.mangomint.com/";

const values = [
  {
    title: "Precision",
    description:
      "Every treatment is performed with meticulous attention to detail, using only the most advanced, medical-grade technologies and all-natural products.",
  },
  {
    title: "Personalization",
    description:
      "We treat the person, not just the concern. No two clients — and no two results — should ever be the same. Your plan is built entirely around you.",
  },
  {
    title: "Transparency",
    description:
      "We believe in honest consultations, realistic expectations, and clear education every step of the way, so you always feel informed and empowered.",
  },
  {
    title: "Accessibility",
    description:
      "High-quality care should feel within reach. Our thoughtful pricing and membership option make consistent, results-focused treatment accessible.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-44 pb-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/luxury-spa-interior.jpg"
            alt="About Grace Light"
            fill
            quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/60 to-[#1C1C1C]/80" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-10 h-px bg-[#C9A96E]/50" />
            <p
              className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Our Story
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-white font-light leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
            }}
          >
            About <em className="italic text-[#E8D9C3]">Grace Light</em>
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 lg:py-40 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-28 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C9A96E]" />
                <p
                  className="text-[10px] tracking-[0.45em] uppercase text-[#C9A96E] font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Who We Are
                </p>
              </div>
              <h2
                className="font-normal leading-[1.12] text-[#1C1C1C] mb-9"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.75rem, 4.5vw, 4.25rem)",
                }}
              >
                Confidence That Feels{" "}
                <em className="heading-highlight">Natural, Attainable,<br />and Entirely Your Own</em>
              </h2>
              <div
                className="space-y-5 text-[#1C1C1C] leading-[1.85] text-[15px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <p>
                  Located in Livonia, Grace Light Aesthetics & Wellness is a boutique med spa designed to feel calm, refined, and genuinely inviting from the moment you arrive.
                </p>
                <p>
                  We specialize in results-driven aesthetic treatments using advanced, medical-grade technology paired with specialized, all-natural products — carefully selected to support the healthiest skin and the most visible, lasting results. Every service we offer is intentional, focused, and designed to deliver real outcomes without unnecessary complexity.
                </p>
                <p>
                  Your safety is our foundation. Every treatment is performed with precision, clinical integrity, and a deep respect for your individual goals. We take the time to understand what you&apos;re looking for, educate you on your options, and create a fully customized plan — because no two clients, and no two results, should ever be the same.
                </p>
                <p>
                  At Grace Light, it&apos;s not just about how you look — it&apos;s about how you feel when you leave: refreshed, empowered, and confident in your own skin.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=100&w=1200"
                  alt="Grace Light luxury spa experience"
                  fill
                  quality={100}
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-7 -left-7 w-52 h-52 border border-[#C9A96E]/20 -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-40 bg-[#F3EBE2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                What Guides Us
              </p>
              <div className="w-10 h-px bg-[#C9A96E]/50" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-normal text-[#1C1C1C] leading-[1.12]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(3.25rem, 5.5vw, 4.75rem)",
              }}
            >
              Our Core <em className="heading-highlight">Values</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="text-center group bg-white p-8 border border-[#E8D9C3]/50 hover:border-[#C9A96E]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.04)] transition-all duration-500"
              >
                <div className="w-px h-10 bg-[#C9A96E]/50 mx-auto mb-7 group-hover:bg-[#C9A96E] transition-colors duration-500" />
                <h3
                  className="text-[#1C1C1C] font-light mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.6rem" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#1C1C1C] text-[13px] leading-[1.85]"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-[#1C1C1C]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Gold line top */}
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mb-16" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "21+", label: "Expert Services" },
              { value: "FDA", label: "Cleared Technologies" },
              { value: "100%", label: "Custom Plans" },
              { value: "Livonia", label: "MI" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
              >
                <p
                  className="font-light text-[#E8D9C3] mb-2 leading-none"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(2.75rem, 5vw, 4.25rem)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-[10px] tracking-[0.25em] uppercase text-white/30 font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mt-16" />
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#FAF7F2] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-normal text-[#1C1C1C] mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
            }}
          >
            Experience the{" "}
            <em className="heading-highlight">Grace Light</em> Difference
          </h2>
          <p
            className="text-[#1C1C1C] text-[14px] leading-[1.85] mb-10"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book your appointment today and take the first step toward results you can see and confidence you can feel.
          </p>
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ABFBF]/20"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
