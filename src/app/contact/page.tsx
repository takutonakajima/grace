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
    "w-full bg-transparent border-b border-[#E8D9C3] focus:border-[#C9A96E] outline-none py-3.5 text-[14px] text-[#1C1C1C] placeholder-[#C0B0A0] transition-colors duration-300 font-light";

  return (
    <>
      <Navigation />

      {/* Page Header */}
      <section className="relative pt-44 pb-28 bg-[#1C1C1C] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/luxury-spa-interior.jpg"
            alt="Contact Grace Light"
            fill
            quality={100}
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/60 to-[#1C1C1C]/80" />
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
              We&apos;d Love to Meet You
            </p>
            <div className="w-10 h-px bg-[#C9A96E]/50" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-white font-light leading-[1.05]"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(3.5rem, 7vw, 5.5rem)",
            }}
          >
            We&apos;d Love to <em className="italic text-[#E8D9C3]">Meet You</em>
          </motion.h1>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-28 lg:py-40 bg-[#FAF7F2]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Left: Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-[#C9A96E]" />
                <p
                  className="text-[10px] tracking-[0.45em] uppercase text-[#C9A96E] font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Visit or Contact Us
                </p>
              </div>
              <h2
                className="font-light leading-[1.12] text-[#1C1C1C] mb-8"
                style={{
                  fontFamily: "var(--font-cormorant), serif",
                  fontSize: "clamp(2.25rem, 3.5vw, 3.25rem)",
                }}
              >
                Start Your{" "}
                <em className="italic text-[#C9A96E]">Grace Light Experience</em>
              </h2>
              <p
                className="text-[#7A6E65] leading-[1.85] mb-12 text-[15px]"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                Whether you&apos;re ready to book or just have questions, our team is here to help. Reach out and we&apos;ll get back to you promptly.
              </p>

              <div className="space-y-8">
                {[
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "36103 Plymouth Road\nLivonia, MI 48150",
                  },
                  {
                    icon: Phone,
                    label: "Phone",
                    value: "Coming Soon",
                  },
                  {
                    icon: Mail,
                    label: "Email",
                    value: "Coming Soon",
                  },
                  {
                    icon: Clock,
                    label: "Hours",
                    value: "Mon–Fri: 9am–7pm  |  Sat: 9am–5pm",
                  },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-5">
                    <div className="w-11 h-11 border border-[#E8D9C3] hover:border-[#C9A96E]/50 flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                      <Icon size={15} className="text-[#C9A96E]" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p
                        className="text-[10px] tracking-[0.3em] uppercase text-[#C9A96E] mb-1.5 font-light"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {label}
                      </p>
                      <p
                        className="text-[13px] text-[#1C1C1C] font-light whitespace-pre-line leading-relaxed"
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {value}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Book online */}
              <div className="mt-12 p-8 bg-[#1C1C1C] border border-[#C9A96E]/15">
                <p
                  className="text-white font-light mb-2 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.5rem" }}
                >
                  Ready to Book?
                </p>
                <p
                  className="text-white/40 text-[13px] mb-6 font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Schedule your appointment instantly through our online booking system.
                </p>
                <a
                  href={MANGOMINT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white text-[10px] tracking-[0.28em] uppercase font-light px-8 py-3 transition-all duration-300"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
              transition={{ duration: 1, delay: 0.1 }}
            >
              <div className="bg-white p-10 lg:p-12 border border-[#E8D9C3]/60">
                <h3
                  className="text-[#1C1C1C] font-light mb-10 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.75rem" }}
                >
                  Send Us a Message
                </h3>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-14 h-14 border border-[#C9A96E]/50 flex items-center justify-center mx-auto mb-7">
                      <span className="text-[#C9A96E] text-xl">✓</span>
                    </div>
                    <h4
                      className="text-[#1C1C1C] font-light mb-3 leading-tight"
                      style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.75rem" }}
                    >
                      Message Received
                    </h4>
                    <p
                      className="text-[#7A6E65] text-[13px]"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    >
                      Thank you for reaching out. We&apos;ll be in touch shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
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
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
                          style={{ fontFamily: "var(--font-inter), sans-serif" }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-9">
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        value={formState.phone}
                        onChange={(e) =>
                          setFormState({ ...formState, phone: e.target.value })
                        }
                        className={inputClass}
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      />
                      <select
                        value={formState.service}
                        onChange={(e) =>
                          setFormState({ ...formState, service: e.target.value })
                        }
                        className={`${inputClass} cursor-pointer`}
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        <option value="">Service of Interest</option>
                        <option>Neurotoxins (Xeomin / Jeuveau)</option>
                        <option>Dermal Fillers</option>
                        <option>Biostimulator (Radiesse)</option>
                        <option>RF Microneedling</option>
                        <option>ClearLift Laser</option>
                        <option>Dye-VL Laser</option>
                        <option>Signature Duo Laser Facial</option>
                        <option>Aqua Facial</option>
                        <option>Carbon Peel Facial</option>
                        <option>VI Peel</option>
                        <option>Laser Hair Removal</option>
                        <option>Double Chin Duo Laser</option>
                        <option>Body Contouring</option>
                        <option>Cellulite Reduction</option>
                        <option>EMS Body Sculpting</option>
                        <option>Pelvic Floor Treatment</option>
                        <option>Tattoo Removal</option>
                        <option>Red Light Therapy</option>
                        <option>Vitamin Injections</option>
                        <option>Weight Loss Programs</option>
                        <option>Scalp & Hair Restoration</option>
                        <option>Membership</option>
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
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    />

                    <button
                      type="submit"
                      className="w-full bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white text-[10px] tracking-[0.32em] uppercase font-light py-4.5 transition-all duration-300 hover:shadow-lg hover:shadow-[#4ABFBF]/20"
                      style={{ fontFamily: "var(--font-inter), sans-serif" }}
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
