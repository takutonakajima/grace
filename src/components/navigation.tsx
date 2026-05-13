"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg =
    isHome && !scrolled
      ? "bg-transparent"
      : "bg-[#FAF7F2]/92 backdrop-blur-2xl shadow-[0_1px_0_rgba(201,169,110,0.15)]";

  const textColor =
    isHome && !scrolled ? "text-white" : "text-[#1C1C1C]";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-[76px]">
          {/* Logo */}
          <Link href="/" className="transition-opacity duration-300 hover:opacity-85 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Grace Light Aesthetics & Wellness"
              width={148}
              height={57}
              quality={100}
              className="object-contain rounded-sm"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-9">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-[11px] tracking-[0.18em] uppercase font-light transition-colors duration-200 relative group ${
                  pathname === link.href
                    ? "text-[#C9A96E]"
                    : `${textColor} hover:text-[#C9A96E]`
                }`}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${
                    pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white px-6 py-2.5 text-[10px] tracking-[0.22em] uppercase font-light transition-all duration-300 hover:shadow-md hover:shadow-[#4ABFBF]/20"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Book Now
            </a>
          </nav>

          {/* Mobile Menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  className={`md:hidden p-2 transition-colors ${textColor}`}
                  aria-label="Open menu"
                />
              }
            >
              <Menu size={22} />
            </SheetTrigger>
            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-80 bg-[#FAF7F2] border-l border-[#E8D9C3] p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-8 py-6 border-b border-[#E8D9C3]">
                  <Image
                    src="/images/logo.jpg"
                    alt="Grace Light Aesthetics & Wellness"
                    width={124}
                    height={48}
                    quality={100}
                    className="object-contain rounded-sm"
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-[#7A6E65] hover:text-[#1C1C1C] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col px-8 py-10 gap-7 flex-1">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.07, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={`text-[11px] tracking-[0.22em] uppercase font-light transition-colors duration-200 ${
                          pathname === link.href
                            ? "text-[#C9A96E]"
                            : "text-[#1C1C1C] hover:text-[#C9A96E]"
                        }`}
                        style={{ fontFamily: "var(--font-inter), sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="px-8 pb-10">
                  <a
                    href={MANGOMINT_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white py-3.5 text-[10px] tracking-[0.28em] uppercase font-light transition-all duration-300"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    Book Your Appointment
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
