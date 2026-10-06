import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import LogoCloud from '@/components/sections/LogoCloud';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import WorkflowSection from '@/components/sections/Workflow';
import Integrations from '@/components/sections/Integrations';
import Stats from '@/components/sections/Stats';
import Pricing from '@/components/sections/Pricing';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <HowItWorks />
      <WorkflowSection />
      <Stats />
      <Integrations />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
