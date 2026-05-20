"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

const MANGOMINT_URL = "https://www.mangomint.com/";
const featured = services.filter((s) => s.popular).slice(0, 4);

export default function FeaturedServicesSection() {
  return (
    <section className="py-28 lg:py-40 bg-[#F3EBE2]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 lg:mb-20">
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
              Our Signature Treatments
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-normal text-[#1C1C1C] leading-[1.12]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.25rem, 5.5vw, 4.75rem)",
            }}
          >
            Treatments That <em className="heading-highlight">Transform</em>
          </motion.h2>
        </div>

        {/* Cards Grid — hover reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }}
              className="group relative overflow-hidden aspect-[3/4] cursor-pointer"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.name}
                fill
                quality={100}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.08]"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Permanent gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/80 via-[#1C1C1C]/15 to-transparent transition-opacity duration-500" />

              {/* Category badge */}
              <div className="absolute top-5 left-5 z-10">
                <span
                  className="text-[8px] tracking-[0.35em] uppercase text-white/90 bg-[#C9A96E]/75 px-3 py-1.5 font-light backdrop-blur-sm"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {service.category}
                </span>
              </div>

              {/* Static bottom text — slides away on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10 transition-transform duration-500 group-hover:-translate-y-full group-hover:opacity-0">
                <h3
                  className="text-white font-light leading-tight text-[1.35rem]"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-white/60 text-[11px] mt-1.5 font-light italic"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "0.95rem" }}
                >
                  {service.tagline}
                </p>
              </div>

              {/* Hover reveal panel */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C]/97 via-[#1C1C1C]/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-20 flex flex-col justify-end p-7">
                <h3
                  className="text-white font-light leading-tight mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.4rem" }}
                >
                  {service.name}
                </h3>
                <p
                  className="text-[#C9A96E] italic mb-3 font-light"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
                >
                  {service.tagline}
                </p>
                <p
                  className="text-white/55 text-[12px] leading-relaxed mb-5 line-clamp-3"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  {service.description}
                </p>
                <a
                  href={MANGOMINT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#4ABFBF] hover:text-white text-[10px] tracking-[0.28em] uppercase font-light transition-colors duration-300 group/cta"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Book Treatment
                  <ArrowRight size={11} className="transition-transform duration-300 group-hover/cta:translate-x-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <Link
            href="/services"
            className="inline-flex items-center gap-3 border border-[#1C1C1C] text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white px-12 py-4 text-[10px] tracking-[0.32em] uppercase font-light transition-all duration-500 group"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            View All Treatments
            <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
