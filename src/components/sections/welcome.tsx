"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WelcomeSection() {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF8F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=900&q=85"
                alt="Glow Life Aesthetics treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[#E8D5C4] -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#F0DDD5] -z-10" />

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-8 -right-4 lg:-right-12 bg-[#1E1A17] text-white p-6 shadow-xl"
            >
              <p
                className="text-3xl font-light text-[#B8977E]"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                500+
              </p>
              <p
                className="text-xs tracking-[0.2em] uppercase text-[#8B7B71] mt-1 font-light"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Happy Clients
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
          >
            <p
              className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-5 font-light"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Welcome to Glow Life
            </p>
            <h2
              className="font-light leading-[1.15] mb-8 text-[#1E1A17]"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(2.5rem, 4vw, 3.75rem)",
              }}
            >
              Your Destination for{" "}
              <em className="italic">Radiant</em> Results
            </h2>
            <div
              className="space-y-5 text-[#8B7B71] leading-relaxed mb-10"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              <p>
                At Glow Life Aesthetics & Wellness, we believe that true beauty is a harmony of confidence, care, and clinical expertise. Our boutique med spa was founded with one vision: to help every client feel like their most radiant self.
              </p>
              <p>
                Every treatment is thoughtfully customized to your unique skin, body, and wellness goals. From your first consultation to your final follow-up, you&apos;ll experience the attentive, personalized care that sets us apart.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-10">
              {[
                { value: "10+", label: "Years of Expertise" },
                { value: "FDA", label: "Approved Treatments" },
                { value: "500+", label: "Satisfied Clients" },
                { value: "100%", label: "Personalized Plans" },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#E8D5C4] pl-4">
                  <p
                    className="text-2xl font-light text-[#1E1A17] mb-0.5"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {stat.value}
                  </p>
                  <p
                    className="text-xs tracking-[0.1em] text-[#8B7B71] uppercase font-light"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 text-[#B8977E] text-xs tracking-[0.25em] uppercase font-light group"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Our Story
              <span className="w-8 h-px bg-[#B8977E] transition-all duration-300 group-hover:w-16" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
