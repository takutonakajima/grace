"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
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
      : "bg-[#FAF8F5]/95 backdrop-blur-md shadow-[0_1px_0_rgba(229,216,207,0.8)]";

  const textColor =
    isHome && !scrolled ? "text-white" : "text-[#1E1A17]";

  const logoColor =
    isHome && !scrolled ? "text-white" : "text-[#1E1A17]";

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className={`transition-colors duration-300 ${logoColor}`}>
            <div className="flex flex-col leading-none">
              <span
                className="font-serif text-2xl font-light tracking-[0.15em] uppercase"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Glow Life
              </span>
              <span
                className="text-[10px] tracking-[0.35em] uppercase font-light mt-0.5 opacity-80"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Aesthetics & Wellness
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm tracking-[0.12em] uppercase font-light transition-colors duration-200 hover:text-[#B8977E] ${
                  pathname === link.href
                    ? "text-[#B8977E]"
                    : textColor
                }`}
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-block bg-[#B8977E] hover:bg-[#A0826A] text-white border-0 px-6 py-2 text-xs tracking-[0.2em] uppercase font-light transition-all duration-300"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
              className="w-80 bg-[#FAF8F5] border-l border-[#E5D8CF] p-0"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between px-8 py-6 border-b border-[#E5D8CF]">
                  <div className="flex flex-col leading-none">
                    <span
                      className="font-serif text-xl font-light tracking-[0.15em] uppercase text-[#1E1A17]"
                      style={{ fontFamily: "var(--font-cormorant), serif" }}
                    >
                      Glow Life
                    </span>
                    <span
                      className="text-[9px] tracking-[0.35em] uppercase font-light mt-0.5 text-[#8B7B71]"
                      style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                    >
                      Aesthetics & Wellness
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-[#8B7B71] hover:text-[#1E1A17] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col px-8 py-10 gap-6 flex-1">
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
                        className={`text-sm tracking-[0.18em] uppercase font-light transition-colors duration-200 hover:text-[#B8977E] ${
                          pathname === link.href
                            ? "text-[#B8977E]"
                            : "text-[#1E1A17]"
                        }`}
                        style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
                    className="block w-full text-center bg-[#B8977E] hover:bg-[#A0826A] text-white border-0 py-3 text-xs tracking-[0.25em] uppercase font-light transition-all duration-300"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
