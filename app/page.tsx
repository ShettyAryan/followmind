import Nav          from "@/components/Nav";
import Hero         from "@/components/Hero";
import IntegrationBar from "@/components/IntegrationBar";
import LiveTicker   from "@/components/LiveTicker";
import HowItWorks   from "@/components/HowItWorks";
import GlowDivider  from "@/components/GlowDivider";
import Features     from "@/components/Features";
import EmailDemo    from "@/components/EmailDemo";
import Metrics      from "@/components/Metrics";
import Comparison   from "@/components/Comparison";
import Testimonials from "@/components/Testimonials";
import Pricing      from "@/components/Pricing";
import FAQ          from "@/components/FAQ";
import FooterCTA    from "@/components/FooterCTA";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <IntegrationBar />
      <LiveTicker />
      <HowItWorks />
      <GlowDivider dim />
      <Features />
      <GlowDivider />
      <EmailDemo />
      <GlowDivider dim />
      {/* <Metrics /> */}
      <GlowDivider />
      <Comparison />
      <GlowDivider dim />
      {/* <Testimonials /> */}
      <GlowDivider />
      {/* <Pricing /> */}
      <GlowDivider dim />
      <FAQ />
      <FooterCTA />
    </main>
  );
}
