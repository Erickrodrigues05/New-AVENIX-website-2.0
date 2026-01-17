import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DiagnosisScanner from "@/components/DiagnosisScanner";
import FAQ from "@/components/FAQ";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Automation Systems Diagnosis — AVENIX",
    description: "Identify structural gaps, automation bottlenecks, and scalability limits through a focused enterprise systems diagnosis.",
};

export default function DiagnosticoPage() {
    return (
        <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
            <Navbar />

            {/* Diagnostic Hero */}
            <section className="pt-32 pb-12 px-4 text-center">

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                    O Seu <span className="text-avenix-orange">Diagnóstico</span>
                </h1>
                <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                    Primeiro, responda ao scanner de diagnóstico. Depois, simule o investimento e receba uma análise personalizada em menos de 24 horas.
                </p>
            </section>

            {/* Step 1: Diagnosis Scanner */}
            <DiagnosisScanner />

            <FAQ />

            <Footer />
        </main>
    );
}
