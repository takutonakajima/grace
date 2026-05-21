"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MANGOMINT_URL = "https://www.mangomint.com/";
const TEAL = "#4ABFBF";

type PricingRow = {
  service: string;
  standard: string;
  member: string;
  note?: string;
};

type PricingSection = {
  title: string;
  subtitle?: string;
  rows: PricingRow[];
};

const pricingSections: PricingSection[] = [
  {
    title: "Neurotoxins",
    rows: [
      { service: "Xeomin", standard: "$12 / unit", member: "$10 / unit" },
      { service: "Jeuveau", standard: "$12 / unit", member: "$10 / unit" },
    ],
  },
  {
    title: "Dermal Fillers",
    rows: [
      { service: "Evolysse", standard: "$633 / syringe", member: "$600 / syringe" },
      { service: "Belotero Balance", standard: "$633 / syringe", member: "$600 / syringe" },
    ],
  },
  {
    title: "Biostimulator",
    rows: [
      { service: "Radiesse", standard: "$840 / syringe", member: "$800 / syringe" },
    ],
  },
  {
    title: "ClearLift Laser",
    subtitle: "1 treatment / 3-treatment package",
    rows: [
      { service: "Face", standard: "$179 / $430", member: "$160 / $387" },
      { service: "Neck", standard: "$150 / $360", member: "$135 / $324" },
      { service: "Décolletage", standard: "$200 / $480", member: "$184 / $432" },
      { service: "Face & Neck", standard: "$299 / $718", member: "$269 / $646" },
      { service: "Face, Neck & Décolletage", standard: "$399 / $958", member: "$359 / $862" },
    ],
  },
  {
    title: "Dye-VL Laser",
    subtitle: "1 treatment / 3-treatment package",
    rows: [
      { service: "Face", standard: "$199 / $478", member: "$179 / $430" },
      { service: "Neck", standard: "$179 / $429", member: "$161 / $387" },
      { service: "Décolletage", standard: "$220 / $528", member: "$200 / $475" },
      { service: "Face & Neck", standard: "$319 / $758", member: "$287 / $689" },
      { service: "Face, Neck & Décolletage", standard: "$419 / $1,006", member: "$377 / $905" },
    ],
  },
  {
    title: "Signature Duo Laser Facials",
    subtitle: "1 treatment / 3-treatment package",
    rows: [
      { service: "ClearLift + Dye-VL", standard: "$429 / $1,158", member: "$390 / $1,042" },
      { service: "ClearLift + Q-Beam", standard: "$429 / $1,158", member: "$390 / $1,042" },
    ],
  },
  {
    title: "Non-Ablative Skin Resurfacing",
    subtitle: "1 treatment / 3-treatment package",
    rows: [
      { service: "Lavandula 1927nm Thulium", standard: "$419 / $1,006", member: "$377 / $905" },
      { service: "Lavandula 1550 Erbium Glass", standard: "$419 / $1,006", member: "$377 / $905" },
    ],
  },
  {
    title: "Microneedling",
    subtitle: "1 treatment / 3-treatment package",
    rows: [
      { service: "Face or Scalp", standard: "$400 / $1,020", member: "$360 / $918" },
      { service: "Face & Neck", standard: "$450 / $1,148", member: "$405 / $1,032" },
      { service: "Body", standard: "Consultation", member: "Consultation" },
      { service: "Add PRP", standard: "+$180 / +$486", member: "+$150 / +$437" },
      { service: "Add PRF", standard: "+$200 / +$540", member: "+$170 / +$486" },
      { service: "Add Exosomes", standard: "+$200 / +$540", member: "+$170 / +$486" },
    ],
  },
  {
    title: "Double Chin Duo Laser",
    subtitle: "1 treatment / 3-treatment package",
    rows: [
      { service: "Double Chin Duo", standard: "$450 / $1,148", member: "$405 / $1,032" },
    ],
  },
  {
    title: "Laser Hair Removal",
    subtitle: "1 session / 8-session package",
    rows: [
      { service: "Small (chin, upper lip, sideburns, etc.)", standard: "$50 / $250", member: "$45 / $225" },
      { service: "Medium (bikini, underarm, full face, etc.)", standard: "$100 / $500", member: "$90 / $450" },
      { service: "Large (Brazilian, chest, full arms, etc.)", standard: "$189 / $879", member: "$170 / $791" },
      { service: "Extra Large (full back, full legs, etc.)", standard: "$250 / $1,050", member: "$225 / $945" },
    ],
  },
  {
    title: "Tattoo Removal",
    subtitle: "Per session",
    rows: [
      { service: 'XXS — 1"×1"', standard: "$42", member: "$35" },
      { service: 'XS — 2"×2"', standard: "$91", member: "$70" },
      { service: 'S — 3"×3"', standard: "$105", member: "$88" },
      { service: 'M — 4"×4"', standard: "$168", member: "$140" },
      { service: 'L — 5"×5"', standard: "$270", member: "$225" },
      { service: 'XL — 7"×7"', standard: "$432", member: "$360" },
      { service: "Eyebrow Cosmetic Tattoo", standard: "Consultation", member: "Consultation" },
      { service: "Sleeves or larger", standard: "Consultation", member: "Consultation" },
    ],
  },
  {
    title: "Body Contouring",
    subtitle: "1 / 3 / 6 / 10 treatments",
    rows: [
      { service: "Small (inner thighs, abs, flanks, etc.)", standard: "$160 / $360 / $720 / $1,050", member: "$144 / $324 / $648 / $945" },
      { service: "Medium (inner & outer thighs, buttocks, full back)", standard: "$200 / $480 / $960 / $1,500", member: "$180 / $432 / $864 / $1,350" },
      { service: "Large (full upper leg or 2-area combo)", standard: "$240 / $600 / $1,200 / $1,875", member: "$216 / $540 / $1,089 / $1,688" },
      { service: "X-Large (3-area combo or full legs + 2 areas)", standard: "$300 / $720 / $1,440 / $2,250", member: "$270 / $648 / $1,296 / $2,025" },
    ],
  },
  {
    title: "EMS Body Sculpting",
    subtitle: "1 / 3 / 6 / 10 treatments (4 pads)",
    rows: [
      { service: "30 min", standard: "$66 / $176 / $363 / $616", member: "$60 / $160 / $330 / $560" },
      { service: "60 min", standard: "$132 / $374 / $759 / $1,270", member: "$120 / $340 / $690 / $1,160" },
    ],
  },
  {
    title: "Grace Light Facials",
    rows: [
      { service: "Standard Aqua Facial", standard: "$72", member: "$65" },
      { service: "Aqua Facial with Med-Grade Serums/Boosters", standard: "$140", member: "$126" },
      { service: "Hollywood Carbon Peel Facial", standard: "$190", member: "$171" },
      { service: "Acne Carbon Peel Facial", standard: "$190", member: "$171" },
      { service: "Add-on RF Laser Treatment", standard: "+$55", member: "+$50" },
    ],
  },
  {
    title: "VI Peel",
    rows: [
      { service: "VI Peel", standard: "$200–$300", member: "$200–$300", note: "Pricing varies by peel type" },
    ],
  },
  {
    title: "Red Light Therapy",
    rows: [
      { service: "Face (15 min)", standard: "$25", member: "$22" },
      { service: "Full Body (30 min)", standard: "$55", member: "$49" },
    ],
  },
  {
    title: "Vitamin Injections",
    rows: [
      { service: "B12 — Energy", standard: "$25", member: "$22" },
      { service: "B Complex — Metabolism", standard: "$25", member: "$22" },
      { service: "Vitamin C — Immunity & Collagen", standard: "$25", member: "$22" },
      { service: "Lipotropic — Metabolize Fat", standard: "$25", member: "$22" },
      { service: "Glutathione — Detox & Skin", standard: "$55", member: "$49" },
      { service: "NAD+ — Anti-Aging & Cellular Repair", standard: "$55", member: "$49" },
    ],
  },
  {
    title: "Weight Loss Programs",
    rows: [
      { service: "Semaglutide (GLP-1) — 6-month supply", standard: "$1,098", member: "$999" },
      { service: "Tirzepatide (GLP-2) — 4-month supply", standard: "$1,098", member: "$999" },
    ],
  },
];

const membershipPerks = [
  { label: "$99 Monthly Credit", detail: "Use toward nearly any treatment or product" },
  { label: "Extra $25 GL Bonus Credit", detail: "Additional credit toward purchases of $100+ (resets monthly)" },
  { label: "Exclusive Neurotoxin Pricing", detail: "$10/unit on Xeomin and Jeuveau" },
  { label: "Complimentary LED Enhancement", detail: "FREE 15-minute LED Light Therapy with every facial" },
  { label: "Monthly Wellness Injection", detail: "1 complimentary B12 or Lipotropic Injection per month" },
];

export default function PricingPage() {
  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-44 pb-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/80 to-[#1C1C1C]" />
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
              Transparent & Accessible
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-white font-normal leading-[1.05] mb-6"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(5rem, 9vw, 8.5rem)",
            }}
          >
            Our <em className="heading-highlight">Pricing</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/45 max-w-xl mx-auto leading-[1.85]"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px" }}
          >
            Thoughtfully structured pricing to make consistent, results-focused care accessible.
            Members enjoy exclusive rates on every treatment.
          </motion.p>
        </div>
      </section>

      {/* Membership Section — bold hero card */}
      <section className="py-0 bg-[#1C1C1C] relative overflow-hidden">
        {/* Subtle gold texture overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#C9A96E]/8 via-transparent to-[#C9A96E]/5 pointer-events-none" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/60 to-transparent" />

        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
          {/* Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="flex items-center justify-center gap-4 mb-6"
            >
              <div className="w-14 h-px bg-[#C9A96E]/60" />
              <p
                className="text-[10px] tracking-[0.6em] uppercase text-[#C9A96E] font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Exclusive Membership
              </p>
              <div className="w-14 h-px bg-[#C9A96E]/60" />
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="font-normal text-white leading-[1.05] mb-6"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(3.5rem, 7vw, 6.5rem)",
              }}
            >
              The Grace Light{" "}
              <em className="heading-highlight">Membership</em>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-white/55 max-w-2xl mx-auto leading-[1.85] mb-10"
              style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px" }}
            >
              The smartest way to invest in your beauty and wellness. For just $99/month, unlock exclusive pricing, monthly credits, and premium perks — every single month.
            </motion.p>

            {/* Price badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="inline-flex items-center gap-3 border border-[#C9A96E]/40 bg-[#C9A96E]/10 px-8 py-4 mb-4"
            >
              <span
                className="font-light text-[#C9A96E]"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(3rem, 6vw, 5rem)",
                }}
              >
                $99
              </span>
              <div className="flex flex-col text-left">
                <span
                  className="text-white/70 text-[11px] tracking-[0.2em] uppercase font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  per month
                </span>
                <span
                  className="text-[#C9A96E]/70 text-[10px] tracking-[0.15em] uppercase font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  3-month minimum
                </span>
              </div>
            </motion.div>
          </div>

          {/* Perks grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10"
          >
            {membershipPerks.map((perk, i) => (
              <motion.div
                key={perk.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.08 }}
                className="border border-[#C9A96E]/20 bg-white/[0.04] hover:bg-white/[0.07] hover:border-[#C9A96E]/50 p-7 transition-all duration-400 group"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-6 h-6 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: TEAL }}
                  >
                    <Check size={12} className="text-white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <p
                      className="text-white font-normal leading-snug mb-2"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.25rem" }}
                    >
                      {perk.label}
                    </p>
                    <p
                      className="text-white/50 text-[12px] leading-[1.7] font-light"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      {perk.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Fine print + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <div className="mb-8 text-center">
              <ul
                className="inline-flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] text-white/30 font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                <li>3-month minimum commitment</li>
                <li>·</li>
                <li>Treatment credits roll over up to 60 days</li>
                <li>·</li>
                <li>Bonus credits expire monthly</li>
                <li>·</li>
                <li>Perks are exclusive to active members</li>
              </ul>
            </div>

            <a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-[11px] tracking-[0.35em] uppercase font-light px-16 py-5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#4ABFBF]/30 hover:scale-[1.02]"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                backgroundColor: TEAL,
              }}
            >
              Become a Member Today
            </a>
            <p
              className="text-white/25 text-[11px] mt-4 font-light"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Questions? <Link href="/contact" className="text-[#C9A96E]/60 hover:text-[#C9A96E] transition-colors">Contact us</Link> — we&apos;d love to help.
            </p>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent" />
      </section>

      {/* Pricing Tables */}
      <section className="py-16 pb-28 bg-[#FAF7F2]">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">

          {/* Column Header Legend */}
          <div className="mb-14 text-center">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-10 h-px bg-[#C9A96E]/50" />
              <p
                className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Treatment Pricing
              </p>
              <div className="w-10 h-px bg-[#C9A96E]/50" />
            </div>
            <h2
              className="font-normal text-[#1C1C1C] leading-[1.12] mb-9"
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "clamp(4.5rem, 5vw, 5.5rem)",
              }}
            >
              Full <em className="heading-highlight">Menu</em>
            </h2>
            <div className="inline-flex items-center gap-8 border border-[#E8D9C3] px-8 py-3.5 bg-white">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#1C1C1C]" />
                <span
                  className="text-[10px] tracking-[0.15em] uppercase font-light text-[#1C1C1C]/60"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Standard Rate
                </span>
              </div>
              <div className="w-px h-4 bg-[#E8D9C3]" />
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5" style={{ backgroundColor: TEAL }} />
                <span
                  className="text-[10px] tracking-[0.15em] uppercase font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif", color: TEAL }}
                >
                  Member Rate
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {pricingSections.map((section, si) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: Math.min(si * 0.04, 0.25) }}
                className="bg-white overflow-hidden border border-[#E8D9C3]/50"
              >
                {/* Section Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-7 py-5 border-b border-[#F3EBE2] bg-[#FAF7F2]">
                  <div style={{ borderLeft: "3px solid #C9A96E", paddingLeft: "16px" }}>
                    <h3
                      className="text-[#1C1C1C] leading-tight"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "2rem", fontWeight: 700 }}
                    >
                      {section.title}
                    </h3>
                    {section.subtitle && (
                      <p
                        className="text-[10px] tracking-[0.15em] uppercase text-[#1C1C1C]/50 font-light mt-1"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {section.subtitle}
                      </p>
                    )}
                  </div>
                  <a
                    href={MANGOMINT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[9px] tracking-[0.25em] uppercase font-light px-4 py-1.5 border transition-all duration-300 whitespace-nowrap self-start sm:self-auto hover:text-white"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      color: TEAL,
                      borderColor: `${TEAL}60`,
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = TEAL;
                      (e.currentTarget as HTMLElement).style.borderColor = TEAL;
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.backgroundColor = "transparent";
                      (e.currentTarget as HTMLElement).style.borderColor = `${TEAL}60`;
                      (e.currentTarget as HTMLElement).style.color = TEAL;
                    }}
                  >
                    Become a Member
                  </a>
                </div>

                {/* Column Headers */}
                <div className="hidden sm:grid sm:grid-cols-[1fr_auto_auto] gap-4 px-7 py-2.5 border-b border-[#F3EBE2]">
                  <span
                    className="text-[9px] tracking-[0.22em] uppercase text-[#C9A96E]/70 font-light"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Treatment
                  </span>
                  <span
                    className="text-[9px] tracking-[0.22em] uppercase text-[#1C1C1C]/50 font-light w-36 text-right"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Standard
                  </span>
                  <span
                    className="text-[9px] tracking-[0.22em] uppercase font-light w-36 text-right"
                    style={{ fontFamily: "var(--font-inter), sans-serif", color: `${TEAL}90` }}
                  >
                    Member
                  </span>
                </div>

                {/* Rows */}
                {section.rows.map((row, ri) => (
                  <div
                    key={ri}
                    className={`px-7 py-4 flex flex-col sm:grid sm:grid-cols-[1fr_auto_auto] gap-1 sm:gap-4 sm:items-center border-b border-[#F3EBE2]/70 last:border-0 ${ri % 2 === 1 ? "bg-[#FAF7F2]/40" : "bg-white"}`}
                  >
                    <div>
                      <p
                        className="text-[13px] text-[#1C1C1C] font-light leading-relaxed"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {row.service}
                      </p>
                      {row.note && (
                        <p
                          className="text-[10px] text-[#C9A96E]/70 font-light mt-0.5"
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        >
                          {row.note}
                        </p>
                      )}
                    </div>
                    <div className="flex sm:block items-center gap-2">
                      <span
                        className="sm:hidden text-[10px] tracking-[0.15em] uppercase text-[#1C1C1C]/60 font-light w-20"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        Standard:
                      </span>
                      <p
                        className="text-[13px] text-[#1C1C1C] sm:w-36 sm:text-right font-light"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {row.standard}
                      </p>
                    </div>
                    <div className="flex sm:block items-center gap-2">
                      <span
                        className="sm:hidden text-[10px] tracking-[0.15em] uppercase font-light w-20"
                        style={{ fontFamily: "var(--font-inter), sans-serif", color: TEAL }}
                      >
                        Member:
                      </span>
                      <p
                        className="text-[13px] sm:w-36 sm:text-right font-light"
                        style={{ fontFamily: "var(--font-inter), sans-serif", color: TEAL }}
                      >
                        {row.member}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 bg-[#1C1C1C] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mb-16" />
          <h2
            className="font-normal text-white mb-6 leading-[1.1]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3rem, 5vw, 4.5rem)",
            }}
          >
            Unlock <em className="heading-highlight">Member Pricing</em> on Every Treatment
          </h2>
          <p
            className="text-white/40 text-[14px] leading-[1.85] mb-10"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            Join the Grace Light Membership for $99/month and enjoy exclusive rates, monthly credits, and complimentary perks on every visit.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ABFBF]/20 hover:opacity-90"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                backgroundColor: TEAL,
              }}
            >
              Become a Member
            </a>
            <Link
              href="/contact"
              className="inline-block border border-white/25 hover:border-[#C9A96E] text-white hover:text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Ask a Question
            </Link>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/30 to-transparent mt-16" />
        </div>
      </section>

      <Footer />
    </>
  );
}
