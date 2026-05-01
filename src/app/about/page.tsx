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
      "Every treatment is performed with meticulous attention to detail, using only the most advanced, clinically proven technologies.",
  },
  {
    title: "Personalization",
    description:
      "We treat the person, not just the concern. Your plan is as unique as you are — built around your skin, goals, and lifestyle.",
  },
  {
    title: "Transparency",
    description:
      "We believe in honest consultations, realistic expectations, and clear communication every step of the way.",
  },
  {
    title: "Excellence",
    description:
      "We hold ourselves to the highest standards in client care, clinical training, and treatment outcomes.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-[#1E1A17] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=1920&q=80"
            alt="About Glow Life"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-4 font-light"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white font-light leading-[1.1]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            About <em className="italic">Glow Life</em>
          </motion.h1>
        </div>
      </section>

      {/* Mission */}
      <section className="py-28 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-5 font-light"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Our Mission
              </p>
              <h2
                className="font-light leading-[1.15] text-[#1E1A17] mb-8"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                }}
              >
                Empowering You to Feel{" "}
                <em className="italic">Beautifully Confident</em>
              </h2>
              <div
                className="space-y-5 text-[#8B7B71] leading-relaxed text-base"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                <p>
                  Glow Life Aesthetics & Wellness was founded on a simple but powerful belief: everyone deserves to feel radiant, confident, and at home in their own skin. We created a space where clinical excellence meets genuine warmth — a boutique experience unlike anything else.
                </p>
                <p>
                  Our team of licensed practitioners brings deep expertise in aesthetic medicine and holistic wellness. Every treatment is thoughtfully designed to address your unique needs, delivering measurable results without sacrificing the personal touch that makes Glow Life special.
                </p>
                <p>
                  We stay at the forefront of the industry — continuously training, refining our protocols, and investing in the most advanced technologies — so you always receive the very best care available.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=900&q=85"
                  alt="Glow Life team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 border border-[#E8D5C4] -z-10" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-28 lg:py-36 bg-[#F7F3EF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 lg:mb-20">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-4 font-light"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              What Guides Us
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
              Our Core <em className="italic">Values</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="text-center group"
              >
                <div className="w-px h-12 bg-[#B8977E] mx-auto mb-6" />
                <h3
                  className="text-[#1E1A17] font-light text-2xl mb-4"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {value.title}
                </h3>
                <p
                  className="text-[#8B7B71] text-sm leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 bg-[#1E1A17]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "500+", label: "Happy Clients" },
              { value: "10+", label: "Expert Services" },
              { value: "100%", label: "Custom Plans" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <p
                  className="font-light text-[#E8D5C4] mb-2"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    fontSize: "clamp(2.5rem, 5vw, 4rem)",
                  }}
                >
                  {stat.value}
                </p>
                <p
                  className="text-xs tracking-[0.2em] uppercase text-[#8B7B71] font-light"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#FAF8F5] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-light text-[#1E1A17] mb-5"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Ready to Experience the{" "}
            <em className="italic">Glow Life</em> Difference?
          </h2>
          <p
            className="text-[#8B7B71] text-sm leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            We&apos;d love to meet you. Book a complimentary consultation and take the first step toward your most confident self.
          </p>
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B8977E] hover:bg-[#A0826A] text-white text-xs tracking-[0.3em] uppercase font-light px-10 py-4 transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Book a Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
