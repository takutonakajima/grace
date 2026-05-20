"use client";

import { motion } from "framer-motion";
import { CreditCard, DollarSign, Repeat, Gift } from "lucide-react";
import Link from "next/link";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MANGOMINT_URL = "https://www.mangomint.com/";
const TEAL = "#4ABFBF";

const paymentMethods = [
  { label: "Visa", detail: "All Visa credit and debit cards accepted" },
  { label: "Mastercard", detail: "All Mastercard credit and debit cards accepted" },
  { label: "American Express", detail: "Amex credit and charge cards accepted" },
  { label: "Discover", detail: "Discover credit cards accepted" },
  { label: "Cash", detail: "Cash payments accepted at the time of service" },
  { label: "HSA / FSA Cards", detail: "Health savings and flexible spending accounts accepted for eligible services" },
];

const options = [
  {
    icon: CreditCard,
    title: "Major Credit & Debit Cards",
    description:
      "We accept all major credit and debit cards — Visa, Mastercard, American Express, and Discover — at the time of service. No additional processing fees.",
  },
  {
    icon: DollarSign,
    title: "Cash & HSA/FSA",
    description:
      "Cash payments are always welcome. We also accept HSA and FSA cards for qualifying wellness and medical aesthetic services.",
  },
  {
    icon: Repeat,
    title: "Grace Light Membership",
    description:
      "Join our $99/month membership to receive monthly treatment credits that apply toward any service, plus exclusive member-only pricing on every treatment.",
  },
  {
    icon: Gift,
    title: "Gift Cards",
    description:
      "Give the gift of confidence. Grace Light gift cards are available for any dollar amount and can be used toward any treatment or product.",
  },
];

export default function PaymentOptionsPage() {
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
              Flexible & Convenient
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
              fontSize: "clamp(4rem, 9vw, 7rem)",
            }}
          >
            Payment <em className="heading-highlight">Options</em>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/45 max-w-xl mx-auto leading-[1.85]"
            style={{ fontFamily: "var(--font-inter), sans-serif", fontSize: "15px" }}
          >
            We make it easy to invest in your wellness. Multiple payment options are available so you can focus on results, not logistics.
          </motion.p>
        </div>
      </section>

      {/* Options grid */}
      <section className="py-28 lg:py-40 bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {options.map((option, i) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={option.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="bg-white p-9 border border-[#E8D9C3]/50 hover:border-[#C9A96E]/30 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all duration-500 group"
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${TEAL}18` }}
                  >
                    <Icon size={20} style={{ color: TEAL }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-[#1C1C1C] font-normal leading-tight mb-4"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.65rem" }}
                  >
                    {option.title}
                  </h3>
                  <p
                    className="text-[#1C1C1C] text-[14px] leading-[1.85] font-light"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {option.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Accepted cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#1C1C1C] p-10 lg:p-14"
          >
            <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent mb-10" />
            <div className="text-center mb-10">
              <p
                className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] font-light mb-4"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Accepted At Grace Light
              </p>
              <h2
                className="text-white font-normal leading-[1.1]"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}
              >
                We Accept <em className="heading-highlight">All of These</em>
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {paymentMethods.map((method, i) => (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="border border-white/8 hover:border-[#C9A96E]/30 p-5 transition-colors duration-300"
                >
                  <p
                    className="text-white font-normal mb-1.5"
                    style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.2rem" }}
                  >
                    {method.label}
                  </p>
                  <p
                    className="text-white/35 text-[12px] font-light leading-relaxed"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {method.detail}
                  </p>
                </motion.div>
              ))}
            </div>
            <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/50 to-transparent mt-10" />
          </motion.div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="py-24 bg-[#F3EBE2] text-center">
        <div className="max-w-2xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-normal text-[#1C1C1C] mb-5 leading-[1.1]"
              style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "clamp(2.75rem, 5vw, 4rem)" }}
            >
              Make Every Dollar{" "}
              <em className="heading-highlight">Go Further</em>
            </h2>
            <p
              className="text-[#1C1C1C] text-[14px] leading-[1.85] mb-10"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Members receive $99 in monthly treatment credits plus exclusive pricing on every service — making our membership the most powerful payment option of all.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/membership"
                className="inline-block text-white text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ABFBF]/20 hover:opacity-90"
                style={{ fontFamily: "var(--font-inter), sans-serif", backgroundColor: TEAL }}
              >
                Learn About Membership
              </Link>
              <Link
                href="/contact"
                className="inline-block border border-[#1C1C1C]/30 hover:border-[#C9A96E] text-[#1C1C1C] hover:text-[#C9A96E] text-[10px] tracking-[0.32em] uppercase font-light px-12 py-4 transition-all duration-300"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Have Questions?
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
