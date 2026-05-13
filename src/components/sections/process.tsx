"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Book a Consultation",
    description:
      "Schedule your complimentary consultation online. We'll learn about your goals and introduce you to our full menu of treatments.",
  },
  {
    number: "02",
    title: "Your Custom Plan",
    description:
      "Our experts design a personalized treatment protocol tailored to your unique skin, body, and wellness goals with a clear path to results.",
  },
  {
    number: "03",
    title: "Transform & Thrive",
    description:
      "Begin your treatment journey and watch your confidence grow. We support you every step with follow-ups and plan adjustments.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 lg:py-40 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-28">
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
              How It Works
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-light text-[#1C1C1C] leading-[1.12]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2.75rem, 4.5vw, 3.75rem)",
            }}
          >
            Your Journey to <em className="italic text-[#C9A96E]">Confidence</em>
          </motion.h2>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 relative">
          {/* Connecting lines on desktop */}
          <div className="hidden md:block absolute top-12 left-1/3 right-1/3 h-px border-t border-dashed border-[#C9A96E]/25 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.18, ease: "easeOut" }}
              className="relative text-center px-8 lg:px-14 py-4 group z-10"
            >
              {/* Step number — large decorative */}
              <div className="relative flex items-center justify-center mb-10">
                <span
                  className="text-[7rem] font-light leading-none select-none"
                  style={{
                    fontFamily: "var(--font-cormorant), serif",
                    color: "#E8D9C3",
                  }}
                >
                  {step.number}
                </span>
                {/* Gold ring overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 border border-[#C9A96E]/40 rounded-full group-hover:border-[#C9A96E] transition-colors duration-500" />
                </div>
              </div>

              <h3
                className="text-[#1C1C1C] font-light mb-4 leading-tight"
                style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.5rem" }}
              >
                {step.title}
              </h3>

              {/* Gold divider */}
              <div className="w-8 h-px bg-[#C9A96E]/50 mx-auto mb-5" />

              <p
                className="text-[#7A6E65] text-[13px] leading-[1.85] max-w-xs mx-auto"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
                dangerouslySetInnerHTML={{ __html: step.description }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
