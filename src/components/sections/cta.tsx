"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function CtaSection() {
  return (
    <section className="relative py-32 lg:py-44 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/woman-glowing-skin.jpg"
          alt="Book your appointment"
          fill
          quality={100}
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1C1C1C]/78" />
        {/* Subtle gold gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/8 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-4 mb-7"
        >
          <div className="w-10 h-px bg-[#C9A96E]/50" />
          <p
            className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Begin Your Transformation
          </p>
          <div className="w-10 h-px bg-[#C9A96E]/50" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-white font-light leading-[1.05] mb-8"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(3rem, 6vw, 5.5rem)",
          }}
        >
          Ready to <em className="heading-highlight">Begin?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-white/55 leading-[1.85] max-w-lg mx-auto mb-12"
          style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px" }}
        >
          Take the first step toward your most confident, radiant self. Book a complimentary consultation and let us craft your personalized wellness journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.38 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white text-[10px] tracking-[0.32em] uppercase font-light px-14 py-4 transition-all duration-300 hover:shadow-xl hover:shadow-[#4ABFBF]/25"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Book a Free Consultation
          </a>
          <Link
            href="/contact"
            className="inline-block border border-white/35 hover:border-[#C9A96E] text-white hover:text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase font-light px-14 py-4 transition-all duration-300"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
