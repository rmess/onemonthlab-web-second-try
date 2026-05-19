import { Header } from './_components/header'
import { HeroSection } from './_components/hero-section'
import { ProblemSection } from './_components/problem-section'
import { SolutionSection } from './_components/solution-section'
import { ProcessSection } from './_components/process-section'
import { PricingSection } from './_components/pricing-section'
import { ReassuranceSection } from './_components/reassurance-section'
import { FaqSection } from './_components/faq-section'
import { BookingSection } from './_components/booking-section'
import { ContactSection } from './_components/contact-section'
import { CtaSection } from './_components/cta-section'
import { Footer } from './_components/footer'
import { JsonLd } from './_components/json-ld'

export default function HomePage() {
  return (
    <>
      <JsonLd />
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProcessSection />
        <PricingSection />
        <ReassuranceSection />
        <FaqSection />
        <BookingSection />
        <ContactSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
