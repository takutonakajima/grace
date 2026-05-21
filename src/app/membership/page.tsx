"use client";

import { motion } from "framer-motion";
import { Check, Zap, Gift, Syringe, Sparkles, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MANGOMINT_URL = "https://www.mangomint.com/";
const TEAL = "#4ABFBF";
const GOLD = "#C9A96E";

const membershipPerks = [
  {
    icon: Zap,
    label: "$99 Monthly Credit",
    value: "$99",
    detail: "Applied toward any treatment or product every single month — it never expires within 60 days.",
    color: TEAL,
  },
  {
    icon: Gift,
    label: "Extra $25 Bonus Credit",
    value: "+$25",
    detail: "Additional credit toward purchases of $100+ — resets fresh every month.",
    color: GOLD,
  },
  {
    icon: Syringe,
    label: "Exclusive Neurotoxin Rate",
    value: "$10/unit",
    detail: "Member-only pricing on Xeomin & Jeuveau (standard is $12/unit). Saves $80 on 40 units.",
    color: TEAL,
  },
  {
    icon: Sparkles,
    label: "Complimentary LED Therapy",
    value: "FREE",
    detail: "15-minute LED Light Therapy enhancement added to every facial visit at no charge.",
    color: GOLD,
  },
  {
    icon: Heart,
    label: "Monthly Wellness Injection",
    value: "INCLUDED",
    detail: "One complimentary B12 or Lipotropic injection per month — a $25 value, yours free.",
    color: TEAL,
  },
];

const savingsRows = [
  { treatment: "Neurotoxins (40 units)", standard: "$480", member: "$400", saves: "$80" },
  { treatment: "ClearLift Laser — 3 sessions", standard: "$430", member: "$387", saves: "$43" },
  { treatment: "Body Contouring — 6 sessions", standard: "$720", member: "$648", saves: "$72" },
  { treatment: "Laser Hair Removal (Large)", standard: "$189", member: "$170", saves: "$19" },
];

export default function MembershipPage() {
  return (
    <>
      <Navigation />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-[#0E0E0E] overflow-hidden pt-20">
        {/* Animated gold/teal glow blobs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.12] blur-[100px] pointer-events-none" style={{ backgroundColor: GOLD }} />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.14] blur-[90px] pointer-events-none" style={{ backgroundColor: TEAL }} />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          {/* BEST VALUE badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <motion.div
              animate={{ scale: [1, 1.04, 1] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
              className="flex items-center gap-2 px-5 py-2 text-[#0E0E0E] text-[10px] tracking-[0.35em] uppercase font-normal"
              style={{ backgroundColor: GOLD, fontFamily: "var(--font-inter), sans-serif" }}
            >
              <Sparkles size={11} />
              Best Value · Most Popular
              <Sparkles size={11} />
            </motion.div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="text-white font-normal leading-[1.0] mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
            }}
          >
            The Grace Light{" "}
            <em className="heading-highlight">Membership</em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 max-w-2xl mx-auto leading-[1.85] mb-8"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "16px" }}
          >
            The smartest way to invest in your beauty and wellness. For one flat monthly fee, unlock exclusive savings, credits, and premium perks — every single month, without fail.
          </motion.p>

          {/* Urgency pill */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="inline-flex items-center gap-2 mb-10 px-5 py-2 border"
            style={{ borderColor: `${TEAL}50` }}
          >
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: TEAL }} />
            <span
              className="text-[10px] tracking-[0.3em] uppercase font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif", color: TEAL }}
            >
              Join today and start saving immediately
            </span>
          </motion.div>

          {/* Giant price */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="inline-flex flex-col items-center mb-12"
          >
            <div className="flex items-start gap-1 mb-1">
              <span
                className="font-light mt-4"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2.5rem", color: TEAL }}
              >
                $
              </span>
              <span
                className="font-normal leading-none"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(6rem, 16vw, 11rem)",
                  color: TEAL,
                }}
              >
                99
              </span>
              <span
                className="font-light self-end mb-4 text-white/50"
                style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "1rem" }}
              >
                /mo
              </span>
            </div>
            <p
              className="text-[10px] tracking-[0.45em] uppercase text-[#C9A96E]/70 font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              3-month minimum · cancel anytime after
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <motion.a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 text-white text-[11px] tracking-[0.35em] uppercase font-light px-14 py-5 transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: TEAL }}
            >
              Join Now
              <ArrowRight size={13} />
            </motion.a>
            <Link
              href="/pricing"
              className="text-white/40 hover:text-white text-[10px] tracking-[0.28em] uppercase font-light transition-colors duration-300 border-b border-white/15 hover:border-white/50 pb-0.5"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              View Full Pricing
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </section>

      {/* ── TEAL VALUE BANNER ── */}
      <section style={{ backgroundColor: TEAL }} className="py-8">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center text-white">
            {[
              { val: "$124+", sub: "In Monthly Value" },
              { val: "5", sub: "Exclusive Member Perks" },
              { val: "10–15%", sub: "Off Every Treatment" },
            ].map((s) => (
              <div key={s.sub}>
                <p className="font-normal leading-none mb-1" style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2.75rem" }}>
                  {s.val}
                </p>
                <p className="text-[10px] tracking-[0.3em] uppercase font-light text-white/75" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {s.sub}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      <section className="py-24 lg:py-36 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-4 mb-5"
            >
              <div className="w-10 h-px" style={{ backgroundColor: `${GOLD}80` }} />
              <p className="text-[10px] tracking-[0.5em] uppercase font-light" style={{ fontFamily: "var(--font-inter), sans-serif", color: GOLD }}>
                Everything Included
              </p>
              <div className="w-10 h-px" style={{ backgroundColor: `${GOLD}80` }} />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-normal text-[#1C1C1C] leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
            >
              Every Month,{" "}
              <em className="heading-highlight">Without Exception.</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {membershipPerks.map((perk, i) => {
              const Icon = perk.icon;
              return (
                <motion.div
                  key={perk.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-[#E8D9C3]/60 p-8 group cursor-default"
                >
                  {/* Icon + value row */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${perk.color}18` }}
                    >
                      <Icon size={20} style={{ color: perk.color }} strokeWidth={1.5} />
                    </div>
                    <span
                      className="font-normal leading-none"
                      style={{
                        fontFamily: "var(--font-cormorant), serif",
                        fontSize: "1.8rem",
                        color: perk.color,
                      }}
                    >
                      {perk.value}
                    </span>
                  </div>
                  <h3
                    className="font-normal text-[#1C1C1C] leading-tight mb-3"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.5rem" }}
                  >
                    {perk.label}
                  </h3>
                  <p
                    className="text-[#1C1C1C] text-[13px] leading-[1.8]"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {perk.detail}
                  </p>
                  {/* Color bottom bar */}
                  <div className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500" style={{ backgroundColor: perk.color }} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── SAVINGS TABLE ── */}
      <section className="py-24 lg:py-32 bg-[#1C1C1C] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/6 via-transparent to-[#4ABFBF]/5 pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-normal text-white leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 5vw, 4.75rem)" }}
            >
              See What You <em className="heading-highlight">Save</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="border border-white/8 overflow-hidden"
          >
            {/* Header row */}
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-4 px-8 py-4 border-b border-white/8 bg-white/[0.03]">
              {["Treatment", "Standard", "Member", "You Save"].map((h) => (
                <span key={h} className="text-[9px] tracking-[0.25em] uppercase font-light" style={{ fontFamily: "var(--font-inter), sans-serif", color: `${GOLD}90` }}>
                  {h}
                </span>
              ))}
            </div>
            {savingsRows.map((row, ri) => (
              <motion.div
                key={ri}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: ri * 0.08 }}
                className="px-8 py-5 flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_auto] gap-2 sm:gap-4 sm:items-center border-b border-white/5 last:border-0 hover:bg-white/[0.03] transition-colors duration-200"
              >
                <p className="text-[14px] text-white/80 font-light" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {row.treatment}
                </p>
                <p className="text-[13px] text-white/30 sm:w-28 sm:text-right font-light line-through" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                  {row.standard}
                </p>
                <p className="text-[14px] sm:w-24 sm:text-right font-normal" style={{ fontFamily: "var(--font-inter), sans-serif", color: TEAL }}>
                  {row.member}
                </p>
                <div className="sm:w-32 sm:text-right">
                  <span
                    className="inline-block text-[12px] font-normal px-3 py-1 text-[#0E0E0E]"
                    style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: GOLD }}
                  >
                    Save {row.saves}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <p className="text-white/25 text-[11px] mt-5 text-center" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            Plus your $99 monthly credit reduces the net cost of any treatment even further.
          </p>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </section>

      {/* ── FINE PRINT ── */}
      <section className="py-12 bg-[#F3EBE2]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <ul className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] text-[#1C1C1C]/50 font-light" style={{ fontFamily: "var(--font-inter), sans-serif" }}>
            <li>3-month minimum commitment</li>
            <li>·</li>
            <li>Treatment credits roll over up to 60 days</li>
            <li>·</li>
            <li>Bonus credits expire monthly</li>
            <li>·</li>
            <li>Perks exclusive to active members</li>
          </ul>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-28 lg:py-36 bg-[#FAF7F2] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-normal text-[#1C1C1C] mb-6 leading-[1.05]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
            >
              Ready to <em className="heading-highlight">Join?</em>
            </h2>
            <p
              className="text-[#1C1C1C] text-[15px] leading-[1.85] mb-10 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Start enjoying exclusive pricing, $99 in monthly credits, and premium perks — for just $99/month.
            </p>
            <motion.a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 text-white text-[12px] tracking-[0.35em] uppercase font-light px-16 py-5 transition-all duration-300 hover:shadow-2xl"
              style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: TEAL, boxShadow: `0 8px 30px ${TEAL}40` }}
            >
              Become a Member Today
              <ArrowRight size={14} />
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
