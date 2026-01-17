import Navbar from "@/components/Navbar";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import { AboutHero, MissionStats, ValuesGrid, Comparison, TeamGrid } from "@/components/AboutComponents";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About AVENIX — Building Automation Infrastructure for the Future",
    description: "AVENIX is an automation systems company focused on long-term infrastructure, operational clarity, and scalable digital architecture.",
};

export default function AboutPage() {
    return (
        <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
            <Navbar />

            <AboutHero />
            <Logos />

            <MissionStats />
            <ValuesGrid />
            <Comparison />
            <TeamGrid />

            <FAQ
                title="Perguntas Frequentes"
                subtitle="Saiba mais sobre a nossa equipa e processo."
                items={[
                    { question: "Qual a experiência da equipa?", answer: "A nossa equipa é composta por engenheiros de IA séniores e especialistas em automação com mais de 10 anos de experiência combinada na área." },
                    { question: "Trabalham com startups?", answer: "Sim! Somos especialistas em ajudar startups em fase de crescimento a escalar as suas operações de forma eficiente usando IA." },
                    { question: "Posso juntar-me à equipa?", answer: "Estamos sempre à procura de talentos. Verifique a nossa página de carreiras para posições em aberto." }
                ]}
            />

            {/* About CTA */}
            <section className="py-32 text-center bg-gradient-to-b from-black to-avenix-blue/20">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                        Deixe a IA trabalhar, <br />
                        para que possa <span className="text-avenix-orange">escalar.</span>
                    </h2>
                    <Link href="/#contact" className="btn btn-primary text-lg px-8 py-4 shadow-[0_0_30px_rgba(215,117,68,0.4)]">
                        Agendar Diagnóstico Gratuito
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
