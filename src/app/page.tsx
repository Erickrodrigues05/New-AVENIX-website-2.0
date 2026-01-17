import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Features from "@/components/Features";
import CaseStudies from "@/components/CaseStudies";
import Partnership from "@/components/Partnership";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "AVENIX — Enterprise Automation Systems & Digital Infrastructure",
  description: "AVENIX designs and implements enterprise automation systems and digital infrastructure built for control, scalability, and long-term operations.",
};

export default function Home() {
  return (
    <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
      <Navbar />
      <Hero />
      <Reveal width="100%">
        <Problem />
      </Reveal>
      <Reveal width="100%">
        <Features />
      </Reveal>
      <Reveal width="100%">
        <CaseStudies limit={2} compact />
      </Reveal>
      <Reveal width="100%">
        <Partnership />
      </Reveal>
      <Reveal width="100%">
        <InvestmentCalculator />
      </Reveal>
      <Reveal width="100%">
        <Contact />
      </Reveal>
      <Reveal width="100%">
        <Footer />
      </Reveal>
    </main>
  );
}

