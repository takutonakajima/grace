"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const MANGOMINT_URL = "https://www.mangomint.com/";

const slides = [
  {
    src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=100&w=1920",
    alt: "Grace Light Aesthetics & Wellness — Livonia, MI",
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=100&w=1920",
    alt: "Grace Light Aesthetics & Wellness — Results-Driven Care",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Slideshow backgrounds with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={slides[current].src}
              alt={slides[current].alt}
              fill
              priority
              quality={100}
              className="object-cover object-center scale-105"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Layered overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70 z-[1]" />
      <div className="absolute inset-0 bg-[#1C1C1C]/10 z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="w-12 h-px bg-[#C9A96E]/60" />
          <p
            className="text-[#C9A96E] text-[10px] tracking-[0.55em] uppercase font-light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Boutique Med Spa · Livonia, MI
          </p>
          <div className="w-12 h-px bg-[#C9A96E]/60" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.5 }}
          className="text-white font-light leading-[1.02] mb-7"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(4rem, 10vw, 9rem)",
            letterSpacing: "-0.01em",
          }}
        >
          Where Beauty
          <br />
          <em className="italic font-light" style={{ color: "#E8D9C3" }}>Meets Science</em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="text-white/65 text-base md:text-[17px] font-light leading-relaxed max-w-lg mx-auto mb-12 tracking-wide"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Results-driven aesthetic treatments using advanced, medical-grade technology — paired with genuine, personalized care.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ABFBF]/25"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book a Consultation
          </a>
          <Link
            href="/services"
            className="inline-block border border-white/45 hover:border-[#C9A96E] text-white hover:text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300 hover:bg-white/5"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Explore Services
          </Link>
        </motion.div>
      </motion.div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className="transition-all duration-500 py-2"
          >
            <div
              className={`h-px transition-all duration-500 ${
                i === current ? "w-10 bg-[#C9A96E]" : "w-5 bg-white/30"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.9 }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/35 z-20"
      >
        <span
          className="text-[8px] tracking-[0.5em] uppercase"
          style={{ fontFamily: "var(--font-inter), sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={13} />
        </motion.div>
      </motion.div>
    </section>
  );
}
