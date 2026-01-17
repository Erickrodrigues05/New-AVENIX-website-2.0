import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProcessHero from "@/components/ProcessHero";
import ProcessTimeline from "@/components/ProcessTimeline";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "How the AVENIX Automation System Works",
    description: "A predictable, risk-controlled method to design, build, and integrate automation systems across business operations.",
};

export default function ProcessPage() {
    return (
        <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
            <Navbar />

            <ProcessHero />

            <ProcessTimeline />

            <div className="relative z-10 bg-black">
                <Reveal width="100%">
                    <InvestmentCalculator />
                </Reveal>
            </div>

            <Reveal width="100%">
                <Contact />
            </Reveal>

            <Footer />
        </main>
    );
}
