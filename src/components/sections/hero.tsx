"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&q=85"
          alt="Glow Life Aesthetics & Wellness"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Gradient overlay — warm dark at bottom, lighter in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/30 to-black/70" />
        <div className="absolute inset-0 bg-[#1E1A17]/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-[#E8D5C4] text-xs tracking-[0.45em] uppercase mb-8 font-light"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Premium Med Spa
        </motion.p>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-pink-300 font-light leading-[1.1] mb-6"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(3.5rem, 8vw, 7rem)",
          }}
        >
          Where Beauty
          <br />
          <em className="italic font-light">Meets Science</em>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-white/75 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-12 tracking-wide"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Transformative aesthetic treatments and wellness services, delivered with precision and personalized care by our expert team.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B8977E] hover:bg-[#A0826A] text-white text-xs tracking-[0.3em] uppercase font-light px-10 py-4 transition-all duration-300 hover:shadow-lg"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Book a Consultation
          </a>
          <Link
            href="/services"
            className="inline-block border border-white/60 hover:border-white text-white text-xs tracking-[0.3em] uppercase font-light px-10 py-4 transition-all duration-300 hover:bg-white/10"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Explore Services
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
      >
        <span
          className="text-[10px] tracking-[0.3em] uppercase"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
