import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WorkHero from '@/components/WorkHero';
import CaseStudies from '@/components/CaseStudies';
import Contact from '@/components/Contact';
import { Reveal } from '@/components/Reveal';
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automation Systems Delivered — AVENIX",
    description: "Real automation systems delivered by AVENIX. Structured infrastructure focused on efficiency, integration, and operational clarity.",
};

export default function Work() {
    return (
        <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
            <Navbar />

            <WorkHero />

            <CaseStudies />

            <Reveal width="100%">
                <Contact />
            </Reveal>

            <Footer />
        </main>
    );
}
