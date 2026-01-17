import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SystemHero from "@/components/SystemHero";
import SystemDetails from "@/components/SystemDetails";
import InvestmentCalculator from "@/components/InvestmentCalculator";
import Contact from "@/components/Contact";
import { Reveal } from "@/components/Reveal";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "The AVENIX System — Automation Architecture for Businesses",
    description: "The AVENIX System is a proprietary automation architecture that structures operations, integrates AI, and enables scalable enterprise growth.",
};

export default function ServicesPage() {
    return (
        <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
            <Navbar />

            <SystemHero />

            <SystemDetails />

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
