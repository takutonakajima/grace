"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function CtaSection() {
  return (
    <section className="relative py-28 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1567721913486-6585f068b695?w=1920&q=85"
          alt="Book your appointment"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#1E1A17]/75" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.45em] uppercase text-[#E8D5C4] mb-6 font-light"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Begin Your Transformation
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-white font-light leading-[1.1] mb-8"
          style={{
            fontFamily: "var(--font-cormorant), serif",
            fontSize: "clamp(2.75rem, 5vw, 4.5rem)",
          }}
        >
          Ready to <em className="italic text-[#E8D5C4]">Glow?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-white/65 text-base leading-relaxed max-w-xl mx-auto mb-12"
          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
        >
          Take the first step toward your most confident, radiant self. Book a complimentary consultation and let us craft your personalized wellness journey.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#B8977E] hover:bg-[#A0826A] text-white text-xs tracking-[0.3em] uppercase font-light px-12 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#B8977E]/30"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Book a Free Consultation
          </a>
          <Link
            href="/contact"
            className="inline-block border border-white/50 hover:border-white text-white text-xs tracking-[0.3em] uppercase font-light px-12 py-4 transition-all duration-300 hover:bg-white/10"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            Contact Us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
