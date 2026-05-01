"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-[#E5D8CF] focus:border-[#B8977E] outline-none py-3 text-sm text-[#1E1A17] placeholder-[#C9B8AE] transition-colors duration-300 font-light";

  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-40 pb-24 bg-[#1E1A17] overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=1920&q=80"
            alt="Contact Glow Life"
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-4 font-light"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            We&apos;d Love to Meet You
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-white font-light leading-[1.1]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3rem, 6vw, 5rem)",
            }}
          >
            Get in <em className="italic">Touch</em>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-28 lg:py-36 bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
            >
              <p
                className="text-xs tracking-[0.4em] uppercase text-[#B8977E] mb-5 font-light"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Visit or Contact Us
              </p>
              <h2
                className="font-light leading-[1.15] text-[#1E1A17] mb-8"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2rem, 3.5vw, 3rem)",
                }}
              >
                Let&apos;s Start Your{" "}
                <em className="italic">Glow Journey</em>
              </h2>
              <p
                className="text-[#8B7B71] leading-relaxed mb-12 text-base"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Whether you&apos;re ready to book or just have questions, our team is here to help. Reach out and we&apos;ll get back to you promptly.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "[Address Coming Soon]",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "[Phone Coming Soon]",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "[Email Coming Soon]",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Mon–Fri: 9am–7pm  |  Sat: 9am–5pm",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-10 h-10 border border-[#E5D8CF] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} className="text-[#B8977E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] tracking-[0.25em] uppercase text-[#B8977E] mb-1 font-light"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-sm text-[#1E1A17] font-light"
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Book online */}
              <div className="mt-12 p-6 bg-[#F0DDD5]/40 border border-[#E8D5C4]">
                <p
                  className="text-[#1E1A17] text-lg font-light mb-2"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Ready to Book?
                </p>
                <p
                  className="text-[#8B7B71] text-sm mb-4 font-light"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Schedule your appointment instantly through our online booking system.
                </p>
                <a
                  href={MANGOMINT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#B8977E] hover:bg-[#A0826A] text-white text-xs tracking-[0.25em] uppercase font-light px-8 py-3 transition-all duration-300"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Book Online
                </a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1 }}
            >
              <div className="bg-white p-10 lg:p-12">
                <h3
                  className="text-[#1E1A17] font-light text-2xl mb-8"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  Send Us a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-12 h-12 border border-[#B8977E] rounded-full flex items-center justify-center mx-auto mb-6">
                      <span className="text-[#B8977E] text-xl">✓</span>
                    </div>
                    <h4
                      className="text-[#1E1A17] font-light text-2xl mb-3"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      Message Received
                    </h4>
                    <p
                      className="text-[#8B7B71] text-sm"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Thank you for reaching out. We&apos;ll be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <input
                          type="text"
                          placeholder="Your Name"
                          required
                          value={formState.name}
                          onChange={(e) =>
                            setFormState({ ...formState, name: e.target.value })
                          }
                          className={inputClass}
                          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          placeholder="Email Address"
                          required
                          value={formState.email}
                          onChange={(e) =>
                            setFormState({ ...formState, email: e.target.value })
                          }
                          className={inputClass}
                          style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className={inputClass}
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      />
                      <select
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                        className={`${inputClass} cursor-pointer`}
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                      >
                        <option value="" className="text-[#C9B8AE]">
                          Service of Interest
                        </option>
                        <option>Laser Hair Removal</option>
                        <option>Body Contouring</option>
                        <option>RF Microneedling</option>
                        <option>Botox & Fillers</option>
                        <option>HydraFacial</option>
                        <option>IV Therapy</option>
                        <option>Chemical Peels</option>
                        <option>Other</option>
                      </select>
                    </div>

                    <textarea
                      placeholder="Your Message or Questions"
                      rows={4}
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      className={`${inputClass} resize-none`}
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#1E1A17] hover:bg-[#B8977E] text-white text-xs tracking-[0.3em] uppercase font-light py-4 transition-all duration-400"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
