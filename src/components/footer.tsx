import Link from "next/link";
import Image from "next/image";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-[#FAF7F2]">
      {/* Gold top accent */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#C9A96E]/40 to-transparent" />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-7">
              <Image
                src="/images/logo.jpg"
                alt="Grace Light Aesthetics & Wellness"
                width={148}
                height={57}
                quality={100}
                className="object-contain rounded-sm opacity-90"
                style={{ mixBlendMode: "multiply" }}
              />
            </div>
            <p
              className="text-white/35 text-[13px] leading-[1.85] mb-7 max-w-xs"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              A boutique med spa in Livonia, MI — results-driven aesthetic treatments, medical-grade technology, and personalized care in a calm, refined setting.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 border border-white/10 flex items-center justify-center text-white/35 hover:border-[#C9A96E]/60 hover:text-[#C9A96E] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80 mb-7 font-normal"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3.5">
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Membership Program", href: "/membership" },
                { label: "Services", href: "/services" },
                { label: "Pricing", href: "/pricing" },
                { label: "Payment Options", href: "/payment-options" },
                { label: "Contact", href: "/contact" },
                { label: "Book Appointment", href: MANGOMINT_URL },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[13px] text-white/40 hover:text-[#C9A96E] transition-colors duration-200 font-light"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                    {...(link.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80 mb-7 font-normal"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3.5">
              {[
                "Microneedling",
                "ClearLift & Dye-VL Laser",
                "Neurotoxins & Fillers",
                "Laser Hair Removal",
                "Body Contouring & EMS",
                "Vitamin Injections",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-[13px] text-white/40 hover:text-[#C9A96E] transition-colors duration-200 font-light"
                    style={{ fontFamily: "var(--font-inter), sans-serif" }}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-[10px] tracking-[0.35em] uppercase text-[#C9A96E]/80 mb-7 font-normal"
              style={{ fontFamily: "var(--font-inter), sans-serif" }}
            >
              Visit Us
            </h4>
            <ul className="space-y-5">
              <li>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase text-[#C9A96E]/50 mb-1.5"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Address
                </p>
                <p
                  className="text-[13px] text-white/45 leading-relaxed font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  36103 Plymouth Road<br />Livonia, MI 48150
                </p>
              </li>
              <li>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase text-[#C9A96E]/50 mb-1.5"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Phone
                </p>
                <p
                  className="text-[13px] text-white/45 font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Coming Soon
                </p>
              </li>
              <li>
                <p
                  className="text-[10px] tracking-[0.15em] uppercase text-[#C9A96E]/50 mb-1.5"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  Hours
                </p>
                <div
                  className="text-[13px] text-white/45 space-y-1 font-light"
                  style={{ fontFamily: "var(--font-inter), sans-serif" }}
                >
                  <p>Mon – Fri: 9am – 7pm</p>
                  <p>Saturday: 9am – 5pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-[11px] text-white/20 tracking-wide"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            © {new Date().getFullYear()} Grace Light Aesthetics & Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[11px] text-white/20 hover:text-white/45 transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "var(--font-inter), sans-serif" }}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
