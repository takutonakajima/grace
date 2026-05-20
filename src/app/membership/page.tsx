"use client";

import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MANGOMINT_URL = "https://www.mangomint.com/";
const TEAL = "#4ABFBF";

const membershipPerks = [
  {
    label: "$99 Monthly Credit",
    detail: "Use toward nearly any treatment or product each month",
    icon: "✦",
  },
  {
    label: "Extra $25 GL Bonus Credit",
    detail: "Additional credit toward purchases of $100+ — resets monthly",
    icon: "✦",
  },
  {
    label: "Exclusive Neurotoxin Pricing",
    detail: "$10/unit on Xeomin and Jeuveau (vs. $12 standard)",
    icon: "✦",
  },
  {
    label: "Complimentary LED Enhancement",
    detail: "FREE 15-minute LED Light Therapy with every facial treatment",
    icon: "✦",
  },
  {
    label: "Monthly Wellness Injection",
    detail: "1 complimentary B12 or Lipotropic Injection included each month",
    icon: "✦",
  },
];

const savingsExamples = [
  {
    treatment: "Laser Hair Removal (Large Area)",
    standard: "$189",
    member: "$170",
    savings: "$19 per session",
  },
  {
    treatment: "ClearLift Laser — Face",
    standard: "$179",
    member: "$160",
    savings: "$19 per session",
  },
  {
    treatment: "Neurotoxins — 40 units",
    standard: "$480",
    member: "$400",
    savings: "$80 per treatment",
  },
  {
    treatment: "Body Contouring — Small (6-pack)",
    standard: "$720",
    member: "$648",
    savings: "$72 on package",
  },
];

export default function MembershipPage() {
  return (
    <>
      <Navigation />

      {/* Hero */}
      <section className="relative pt-44 pb-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/10 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-px bg-[#C9A96E]/50" />
            <p
              className="text-[10px] tracking-[0.6em] uppercase text-[#C9A96E] font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Exclusive Membership
            </p>
            <div className="w-12 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-white font-normal leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(4rem, 9vw, 7rem)",
            }}
          >
            The Grace Light{" "}
            <em className="heading-highlight">Membership</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/50 max-w-2xl mx-auto leading-[1.85] text-[16px] mb-12"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            The smartest investment in your beauty and wellness. Unlock exclusive savings, monthly credits, and premium perks — delivered every single month for just $99.
          </motion.p>
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            href={MANGOMINT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white text-[11px] tracking-[0.35em] uppercase font-light px-16 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4ABFBF]/30 hover:scale-[1.02]"
            style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: TEAL }}
          >
            Become a Member Today
          </motion.a>
        </div>
      </section>

      {/* Price callout */}
      <section className="py-20 bg-[#FAF7F2]">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-6 border border-[#C9A96E]/40 bg-white px-12 py-8 shadow-[0_4px_40px_rgba(0,0,0,0.06)]"
          >
            <div>
              <p
                className="font-light text-[#1C1C1C] leading-none"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(4rem, 8vw, 6rem)" }}
              >
                $99
              </p>
              <p
                className="text-[10px] tracking-[0.25em] uppercase text-[#7A6E65] font-light mt-1"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                per month
              </p>
            </div>
            <div className="w-px h-20 bg-[#C9A96E]/30" />
            <div className="text-left">
              <p
                className="text-[#1C1C1C] font-light mb-1"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.4rem" }}
              >
                3-Month Minimum
              </p>
              <p
                className="text-[#7A6E65] text-[12px] leading-relaxed max-w-xs font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Cancel anytime after your initial term. Credits roll over up to 60 days.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Perks grid */}
      <section className="py-20 lg:py-32 bg-[#F3EBE2]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-4 mb-5"
            >
              <div className="w-10 h-px bg-[#C9A96E]/50" />
              <p
                className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                What You Get
              </p>
              <div className="w-10 h-px bg-[#C9A96E]/50" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-normal text-[#1C1C1C] leading-[1.12]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              Every Month, <em className="heading-highlight">Without Exception</em>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {membershipPerks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="bg-white p-8 border border-[#E8D9C3]/60 hover:border-[#C9A96E]/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
              >
                <div className="w-10 h-10 flex items-center justify-center mb-5" style={{ backgroundColor: TEAL }}>
                  <Check size={16} className="text-white" strokeWidth={2.5} />
                </div>
                <h3
                  className="text-[#1C1C1C] font-normal leading-tight mb-3"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.45rem" }}
                >
                  {perk.label}
                </h3>
                <p
                  className="text-[#1C1C1C] text-[13px] leading-[1.8] font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {perk.detail}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings examples */}
      <section className="py-20 lg:py-32 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-4 mb-5"
            >
              <div className="w-10 h-px bg-[#C9A96E]/50" />
              <p
                className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Real Savings
              </p>
              <div className="w-10 h-px bg-[#C9A96E]/50" />
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-normal text-[#1C1C1C] leading-[1.12]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}
            >
              See What You <em className="heading-highlight">Save</em>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="bg-white border border-[#E8D9C3]/50 overflow-hidden"
          >
            <div className="hidden sm:grid grid-cols-[1fr_auto_auto_auto] gap-4 px-8 py-4 bg-[#FAF7F2] border-b border-[#F3EBE2]">
              {["Treatment", "Standard", "Member", "You Save"].map((h) => (
                <span
                  key={h}
                  className="text-[9px] tracking-[0.22em] uppercase text-[#C9A96E]/70 font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {h}
                </span>
              ))}
            </div>
            {savingsExamples.map((row, ri) => (
              <div
                key={ri}
                className={`px-8 py-5 flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto_auto] gap-2 sm:gap-4 sm:items-center border-b border-[#F3EBE2]/70 last:border-0 ${ri % 2 === 1 ? "bg-[#FAF7F2]/40" : ""}`}
              >
                <p
                  className="text-[14px] text-[#1C1C1C] font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {row.treatment}
                </p>
                <p
                  className="text-[13px] text-[#7A6E65] sm:w-28 sm:text-right font-light line-through"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {row.standard}
                </p>
                <p
                  className="text-[13px] sm:w-24 sm:text-right font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif", color: TEAL }}
                >
                  {row.member}
                </p>
                <p
                  className="text-[12px] sm:w-36 sm:text-right font-normal text-[#1C1C1C] bg-[#C9A96E]/10 px-2 py-0.5 rounded"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {row.savings}
                </p>
              </div>
            ))}
          </motion.div>
          <p
            className="text-[#7A6E65] text-[11px] mt-4 text-center font-light"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Plus your monthly $99 credit applies toward any treatment. Savings add up fast.
          </p>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-28 bg-[#1C1C1C] text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/8 via-transparent to-transparent" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />
        <div className="relative max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              {[1, 2, 3].map((i) => (
                <Star key={i} size={14} className="fill-[#C9A96E] text-[#C9A96E]" />
              ))}
            </div>
            <h2
              className="font-normal text-white mb-6 leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(3rem, 6vw, 5rem)" }}
            >
              Ready to <em className="heading-highlight">Join?</em>
            </h2>
            <p
              className="text-white/45 text-[15px] leading-[1.85] mb-10 max-w-lg mx-auto"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Start enjoying exclusive member pricing, monthly credits, and premium perks. Join the Grace Light Membership for $99/month.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={MANGOMINT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white text-[11px] tracking-[0.32em] uppercase font-light px-14 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ABFBF]/20 hover:opacity-90"
                style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: TEAL }}
              >
                Become a Member
              </a>
              <Link
                href="/pricing"
                className="inline-block border border-white/25 hover:border-[#C9A96E] text-white hover:text-[#C9A96E] text-[11px] tracking-[0.32em] uppercase font-light px-14 py-4 transition-all duration-300"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                View All Pricing
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </section>

      <Footer />
    </>
  );
}
