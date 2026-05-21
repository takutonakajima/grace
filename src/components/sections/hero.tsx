"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 120]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/hero-1.jpg"
          alt="Grace Light Aesthetics & Wellness"
          fill
          priority
          quality={100}
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
      </motion.div>

      {/* Layered overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/65 z-[1]" />
      <div className="absolute inset-0 bg-[#1C1C1C]/10 z-[1]" />

      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center"
        style={{ opacity }}
      >
        {/* Location pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="w-10 h-px bg-[#C9A96E]/60" />
          <p
            className="text-[#C9A96E] text-[10px] tracking-[0.55em] uppercase font-light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Boutique Med Spa · Livonia, MI
          </p>
          <div className="w-10 h-px bg-[#C9A96E]/60" />
        </motion.div>

        {/* Grace Light heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.6 }}
          className="text-white leading-[1.0] mb-4 px-4"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.8rem, 10vw, 8.5rem)",
            fontWeight: 300,
            letterSpacing: "-0.01em",
          }}
        >
          Grace Light
        </motion.h1>

        {/* Aesthetics and Wellness */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-[#E8D9C3]/90 tracking-[0.4em] uppercase mb-12"
          style={{
            fontFamily: "var(--font-inter), sans-serif",
            fontSize: "clamp(0.7rem, 2vw, 1rem)",
            fontWeight: 300,
          }}
        >
          Aesthetics and Wellness
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.05 }}
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
