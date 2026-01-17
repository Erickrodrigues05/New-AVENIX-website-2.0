import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Bell, MessageSquare, TrendingUp, Play } from "lucide-react";

export default function CommunityPage() {
    return (
        <main className="min-h-screen relative text-white selection:bg-avenix-orange/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-16">
                {/* Background Effects */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-avenix-blue/30 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gradient-to-b from-avenix-blue/30 to-transparent rounded-full blur-[60px]" />
                </div>

                {/* Content */}
                <div className="relative z-10 max-w-4xl mx-auto space-y-8">


                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight">
                        Comunidade AVENIX <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-orange to-white">
                            Educação & Tecnologia.
                        </span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
                        Estamos a construir uma comunidade focada em educação digital, tecnologia, inteligência artificial e oportunidades globais.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <button className="btn btn-primary min-w-[200px] flex items-center gap-2 justify-center">
                            <Bell className="w-4 h-4" />
                            Notifique-me do Lançamento
                        </button>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-avenix-blue/10 to-transparent pointer-events-none" />

                <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
                    <div className="inline-block px-3 py-1 mb-6 rounded-full border border-avenix-orange/30 bg-avenix-orange/10 text-xs text-avenix-orange">
                        Brevemente
                    </div>

                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        Não perca o lançamento
                    </h2>

                    <p className="text-gray-300 text-lg mb-8">
                        A comunidade será gratuita, com planos avançados para quem quer escalar.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="seuemail@exemplo.com"
                            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-avenix-orange focus:outline-none text-white placeholder:text-gray-500"
                        />
                        <button className="px-6 py-3 bg-avenix-orange hover:bg-[#C06030] rounded-lg font-semibold transition-colors whitespace-nowrap shadow-[0_0_30px_rgba(215,117,68,0.3)]">
                            Entrar na Lista
                        </button>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
