import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import HeroSection from "@/components/sections/hero";
import WelcomeSection from "@/components/sections/welcome";
import FeaturedServicesSection from "@/components/sections/featured-services";
import WhyUsSection from "@/components/sections/why-us";
import ProcessSection from "@/components/sections/process";
import TestimonialsSection from "@/components/sections/testimonials";
import CtaSection from "@/components/sections/cta";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <WelcomeSection />
        <FeaturedServicesSection />
        <WhyUsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
