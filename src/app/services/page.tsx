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
      <section className="relative pt-44 pb-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-25">
          <Image
            src="/images/laser-facial.jpg"
            alt="Grace Light Services"
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
              What We Offer
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-white font-normal leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(4.5rem, 9vw, 7.5rem)",
            }}
          >
            Our <em className="heading-highlight">Treatments</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="text-white/50 mt-6 max-w-xl mx-auto leading-[1.85]"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px" }}
          >
            From advanced skin rejuvenation to transformative body treatments, our full menu of services is designed to help you look and feel your best.
          </motion.p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="py-24 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex items-center justify-center flex-wrap gap-2.5 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] tracking-[0.28em] uppercase font-light px-7 py-2.5 border transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#1C1C1C] text-white border-[#1C1C1C]"
                    : "bg-transparent text-[#1C1C1C] border-[#E8D9C3] hover:border-[#C9A96E] hover:text-[#C9A96E]"
                }`}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {filtered.map((service, i) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.07 }}
                  className="group bg-white overflow-hidden flex flex-col md:flex-row hover:shadow-[0_8px_40px_rgba(0,0,0,0.07)] transition-shadow duration-500 border border-[#E8D9C3]/40"
                >
                  {/* Image */}
                  <div className="relative w-full md:w-52 aspect-[3/2] md:aspect-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      quality={100}
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
                      sizes="(max-width: 768px) 100vw, 400px"
                    />
                    <div className="absolute top-3 left-3">
                      <span
                        className="text-[8px] tracking-[0.3em] uppercase text-white bg-[#C9A96E]/85 px-2.5 py-1 font-light backdrop-blur-sm"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-7 lg:p-8">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3
                        className="text-[#1C1C1C] font-light leading-tight"
                        style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.5rem" }}
                      >
                        {service.name}
                      </h3>
                      {service.duration && (
                        <span
                          className="text-[9px] tracking-[0.15em] uppercase text-[#C9A96E] whitespace-nowrap font-light mt-1"
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        >
                          {service.duration}
                        </span>
                      )}
                    </div>
                    <p
                      className="text-[#1C1C1C] leading-relaxed mb-4 italic"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.05rem" }}
                    >
                      {service.tagline}
                    </p>
                    <p
                      className="text-[13px] text-[#1C1C1C] leading-[1.8] mb-5 line-clamp-2"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-2 mb-6">
                      {service.benefits.slice(0, 3).map((b) => (
                        <li
                          key={b}
                          className="flex items-start gap-2 text-[12px] text-[#1C1C1C]"
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        >
                          <Check size={11} className="text-[#C9A96E] mt-0.5 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>

                    <a
                      href={MANGOMINT_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[9px] tracking-[0.3em] uppercase font-light text-[#4ABFBF] border-b border-[#4ABFBF]/40 pb-0.5 hover:text-[#1C1C1C] hover:border-[#1C1C1C] transition-colors duration-300"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
      <section className="py-24 bg-[#1C1C1C] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mb-16" />
          <h2
            className="font-light text-white mb-5"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
            }}
          >
            Not Sure Where to <em className="italic text-[#C9A96E]">Start?</em>
          </h2>
          <p
            className="text-white/40 text-[14px] leading-[1.85] mb-10"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book a complimentary consultation and our experts will guide you toward the perfect treatment plan for your goals.
          </p>
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ABFBF]/20"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book a Free Consultation
          </a>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mt-16" />
        </div>
      </section>

      <Footer />
    </>
  );
}
