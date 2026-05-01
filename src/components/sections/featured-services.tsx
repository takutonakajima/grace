"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { services } from "@/lib/services-data";

const featured = services.filter((s) => s.popular).slice(0, 4);

export default function FeaturedServicesSection() {
  return (
    <section className="py-28 lg:py-36 bg-[#F7F3EF]">
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
            Our Signature Treatments
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
            Treatments That <em className="italic">Transform</em>
          </motion.h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              className="group bg-white overflow-hidden hover:shadow-xl transition-shadow duration-500"
            >
              {/* Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[9px] tracking-[0.3em] uppercase text-white/90 bg-[#B8977E]/80 px-3 py-1 font-light"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {service.category}
                  </span>
                </div>

                {/* Bottom overlay text */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3
                    className="text-white font-light leading-snug text-xl"
                    style={{ fontFamily: "var(--font-cormorant), serif" }}
                  >
                    {service.name}
                  </h3>
                  <p
                    className="text-white/70 text-xs mt-1 font-light leading-snug line-clamp-2"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                  >
                    {service.tagline}
                  </p>
                </div>
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
            className="inline-flex items-center gap-3 border border-[#1E1A17] text-[#1E1A17] hover:bg-[#1E1A17] hover:text-white px-10 py-4 text-xs tracking-[0.3em] uppercase font-light transition-all duration-300 group"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            View All Services
            <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
