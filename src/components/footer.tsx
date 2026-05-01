import Link from "next/link";

const MANGOMINT_URL = "https://www.mangomint.com/";

export default function Footer() {
  return (
    <footer className="bg-[#1E1A17] text-[#FAF8F5]">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex flex-col leading-none mb-6">
              <span
                className="font-serif text-2xl font-light tracking-[0.15em] uppercase text-white"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Glow Life
              </span>
              <span
                className="text-[10px] tracking-[0.35em] uppercase font-light mt-1 text-[#B8977E]"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
              >
                Aesthetics & Wellness
              </span>
            </div>
            <p
              className="text-[#8B7B71] text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Where science meets beauty. We provide premium aesthetic treatments tailored to reveal your most confident, radiant self.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#3D3530] flex items-center justify-center text-[#8B7B71] hover:border-[#B8977E] hover:text-[#B8977E] transition-all duration-300"
                aria-label="Instagram"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full border border-[#3D3530] flex items-center justify-center text-[#8B7B71] hover:border-[#B8977E] hover:text-[#B8977E] transition-all duration-300"
                aria-label="Facebook"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xs tracking-[0.3em] uppercase text-[#B8977E] mb-6 font-normal"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Navigate
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/services" },
                { label: "About Us", href: "/about" },
                { label: "Contact", href: "/contact" },
                { label: "Book Appointment", href: MANGOMINT_URL },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8B7B71] hover:text-[#E8D5C4] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
              className="text-xs tracking-[0.3em] uppercase text-[#B8977E] mb-6 font-normal"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Laser Hair Removal",
                "Body Contouring",
                "RF Microneedling",
                "Botox & Fillers",
                "HydraFacial",
                "IV Therapy",
              ].map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-sm text-[#8B7B71] hover:text-[#E8D5C4] transition-colors duration-200"
                    style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
              className="text-xs tracking-[0.3em] uppercase text-[#B8977E] mb-6 font-normal"
              style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
            >
              Visit Us
            </h4>
            <ul className="space-y-4">
              <li>
                <p
                  className="text-xs tracking-[0.1em] uppercase text-[#8B7B71] mb-1"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Address
                </p>
                <p
                  className="text-sm text-[#C9B8AE] leading-relaxed"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  [Address Coming Soon]
                </p>
              </li>
              <li>
                <p
                  className="text-xs tracking-[0.1em] uppercase text-[#8B7B71] mb-1"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Phone
                </p>
                <p
                  className="text-sm text-[#C9B8AE]"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  [Phone Coming Soon]
                </p>
              </li>
              <li>
                <p
                  className="text-xs tracking-[0.1em] uppercase text-[#8B7B71] mb-1"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                >
                  Hours
                </p>
                <div
                  className="text-sm text-[#C9B8AE] space-y-1"
                  style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
      <div className="border-t border-[#2E2925]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-[#5C504A] tracking-wide"
            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
          >
            © {new Date().getFullYear()} Glow Life Aesthetics & Wellness. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-[#5C504A] hover:text-[#8B7B71] transition-colors duration-200 tracking-wide"
                style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
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
