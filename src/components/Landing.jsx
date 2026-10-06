import Nav from './Nav.jsx'
import Hero from './Hero.jsx'
import { Channels, Features, Marquee, Showcase } from './Sections.jsx'
import TabsSection from './TabsSection.jsx'
import { Fidelity, Stats, Testimonials } from './Proof.jsx'
import { Faq, Pricing } from './Pricing.jsx'
import { CtaBand, Footer } from './Footer.jsx'

export default function Landing() {
  return (
    <div className="site">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Features />
        <Channels />
        <Showcase />
        <TabsSection />
        <Fidelity />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </div>
  )
}
