"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { services, categories, type Category } from "@/lib/services-data";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");

  const filtered =
    activeCategory === "All"
      ? services
      : services.filter((s) => s.category === activeCategory);

  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-[#1E1A17] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1559494007-9f5847c49d94?w=1920&q=80"
            alt="Services"
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
            What We Offer
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
            Our <em className="italic">Treatments</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-white/60 mt-6 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            From advanced skin rejuvenation to transformative body treatments, our full menu of services is designed to help you look and feel your best.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex items-center justify-center flex-wrap gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs tracking-[0.25em] uppercase font-light px-6 py-2.5 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1E1A17] text-white border-[#1E1A17]"
                    : "bg-transparent text-[#8B7B71] border-[#E5D8CF] hover:border-[#B8977E] hover:text-[#B8977E]"
                }`}
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group bg-white overflow-hidden flex flex-col md:flex-row hover:shadow-xl transition-shadow duration-500"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-56 aspect-[3/2] md:aspect-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 224px"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-[9px] tracking-[0.3em] uppercase text-white bg-[#B8977E]/90 px-2.5 py-1 font-light"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="text-[#1E1A17] font-light text-2xl leading-snug"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {service.name}
                      </h3>
                      {service.duration && (
                        <span
                          className="text-[10px] tracking-[0.15em] uppercase text-[#B8977E] whitespace-nowrap font-light mt-1"
                          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                        >
                          {service.duration}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-sm text-[#8B7B71] leading-relaxed mb-5 italic"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
                    >
                      {service.tagline}
                    </p>
                    <p
                      className="text-sm text-[#8B7B71] leading-relaxed mb-6 line-clamp-2"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-xs text-[#8B7B71]"
                          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                        >
                          <Check size={12} className="text-[#B8977E] mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={MANGOMINT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block text-[10px] tracking-[0.3em] uppercase font-light text-[#B8977E] border-b border-[#B8977E] pb-0.5 hover:text-[#1E1A17] hover:border-[#1E1A17] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Book This Treatment
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#F0DDD5]/40 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2
            className="font-light text-[#1E1A17] mb-4"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
            }}
          >
            Not Sure Where to Start?
          </h2>
          <p
            className="text-[#8B7B71] text-sm leading-relaxed mb-8"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Book a complimentary consultation and our experts will guide you toward the perfect treatment plan for your goals.
          </p>
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B8977E] hover:bg-[#A0826A] text-white text-xs tracking-[0.3em] uppercase font-light px-10 py-4 transition-all duration-300"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Book a Free Consultation
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
