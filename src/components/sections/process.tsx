"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "Schedule your complimentary consultation online or by phone. We&apos;ll learn about your goals and introduce you to our menu of treatments.",
  },
  {
    number: "02",
    title: "Your Custom Plan",
    description:
      "Our experts design a personalized treatment protocol tailored to your unique skin, body, and wellness goals with a clear path to results.",
  },
  {
    number: "03",
    title: "Transform & Glow",
    description:
      "Begin your treatment journey and watch your confidence grow. We support you every step of the way with follow-ups and plan adjustments.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 lg:py-36 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-4 font-light"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            How It Works
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-light text-[#1E1A17] leading-[1.15]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
            }}
          >
            Your Journey to <em className="italic">Glowing</em> Starts Here
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: "easeOut" }}
              className="relative text-center px-8 lg:px-12 py-12 group"
            >
              {/* Connecting line (desktop) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-[4.5rem] right-0 w-1/2 h-px border-t border-dashed border-[#E5D8CF] z-10" />
              )}
              {i > 0 && (
                <div className="hidden md:block absolute top-[4.5rem] left-0 w-1/2 h-px border-t border-dashed border-[#E5D8CF] z-10" />
              )}

              {/* Step number */}
              <div className="relative inline-flex items-center justify-center mb-8">
                <span
                  className="text-7xl font-light text-[#F0DDD5] leading-none select-none"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {step.number}
                </span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border border-[#B8977E] rounded-full" />
                </div>
              </div>

              <h3
                className="text-[#1E1A17] font-light text-2xl mb-4"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {step.title}
              </h3>
              <p
                className="text-[#8B7B71] text-sm leading-relaxed max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
