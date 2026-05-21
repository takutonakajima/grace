"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navLinksLeft = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Membership", href: "/membership" },
  { label: "Services", href: "/services" },
];

const navLinksRight = [
  { label: "Pricing", href: "/pricing" },
  { label: "Payment Options", href: "/payment-options" },
  { label: "Contact", href: "/contact" },
];

const allNavLinks = [...navLinksLeft, ...navLinksRight];

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

  const linkClass = (href: string) =>
    `text-[10px] tracking-[0.14em] uppercase font-light transition-colors duration-200 relative group whitespace-nowrap ${
      pathname === href
        ? "text-[#C9A96E]"
        : `${textColor} hover:text-[#C9A96E]`
    }`;

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Desktop: 3-column centered-logo layout ── */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-[76px]">

          {/* Left links */}
          <nav className="flex items-center gap-6">
            {navLinksLeft.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
          </nav>

          {/* Center logo — mix-blend-mode multiply makes white JPG bg transparent */}
          <Link
            href="/"
            className={`flex justify-center px-8 transition-all duration-500 hover:opacity-80 ${
              isHome && !scrolled ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          >
            <Image
              src="/images/logo.jpg"
              alt="Grace Light Aesthetics & Wellness"
              width={110}
              height={42}
              quality={100}
              className="object-contain rounded-sm"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </Link>

          {/* Right links + Book Now */}
          <nav className="flex items-center justify-end gap-6">
            {navLinksRight.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}
                style={{ fontFamily: "var(--font-inter), sans-serif" }}>
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-px bg-[#C9A96E] transition-all duration-300 ${pathname === link.href ? "w-full" : "w-0 group-hover:w-full"}`} />
              </Link>
            ))}
            <a
              href={MANGOMINT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 bg-[#4ABFBF] hover:bg-[#3AAFAF] text-white px-5 py-2.5 text-[9.5px] tracking-[0.22em] uppercase font-light transition-all duration-300 hover:shadow-md hover:shadow-[#4ABFBF]/20 whitespace-nowrap"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Book Now
            </a>
          </nav>
        </div>

        {/* ── Mobile: logo left + hamburger right ── */}
        <div className="flex lg:hidden items-center justify-between h-[72px]">
          <Link href="/" className="transition-opacity hover:opacity-85 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="Grace Light Aesthetics & Wellness"
              width={120}
              height={46}
              quality={100}
              className="object-contain rounded-sm"
              style={{ mixBlendMode: "multiply" }}
              priority
            />
          </Link>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={
                <button
                  className={`p-2 transition-colors ${textColor}`}
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
                    style={{ mixBlendMode: "multiply" }}
                  />
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="text-[#7A6E65] hover:text-[#1C1C1C] transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <nav className="flex flex-col px-8 py-10 gap-7 flex-1">
                  {allNavLinks.map((link, i) => (
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
