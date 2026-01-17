import Link from 'next/link';
import { Clock, Users, TrendingDown, AlertTriangle, Phone, Moon, Target, Flame } from 'lucide-react';

const painScenarios = [
    {
        icon: Clock,
        trigger: "Segunda-feira, 9h.",
        title: "A caixa de entrada tem 47 mensagens.",
        description: "Nenhuma é estratégica. Todas são urgentes. O dia é gasto a reagir, não a construir.",
        emotion: "Exaustão",
    },
    {
        icon: Phone,
        trigger: "O cliente liga. Outra vez.",
        title: "\"Onde está a minha encomenda?\"",
        description: "A equipa não sabe. O sistema não mostra. Tu não consegues responder. A confiança evapora.",
        emotion: "Frustração",
    },
    {
        icon: Users,
        trigger: "O teu melhor colaborador sai.",
        title: "\"Cansado de ser um robô.\"",
        description: "Copiar dados. Enviar emails manuais. Atualizar folhas de cálculo. Repetir. O talento procura desafios, não repetição.",
        emotion: "Desperdício",
    },
    {
        icon: Moon,
        trigger: "Sexta-feira, 23h.",
        title: "Ainda no escritório.",
        description: "Informação espalhada por 5 ferramentas. 3 horas para juntar dados que deviam levar 3 segundos.",
        emotion: "Sacrifício",
    },
    {
        icon: Target,
        trigger: "O concorrente lançou primeiro.",
        title: "A tua ideia, executada por eles.",
        description: "Enquanto estavas ocupado a \"manter as luzes ligadas\", eles construíram sistemas de escala.",
        emotion: "Atraso",
    },
    {
        icon: Flame,
        trigger: "Modo Bombeiro.",
        title: "Sempre a apagar fogos.",
        description: "O negócio cresce, o caos multiplica-se. Em vez de CEO, tornaste-te o gestor de crises oficial.",
        emotion: "Sufoco",
    },
];

export default function Problem() {
    return (
        <section className="py-16 md:py-32 bg-black relative overflow-hidden">

            {/* Cinematic Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Deep Subtle Avenix Orange Pulse */}
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-avenix-orange/10 rounded-full blur-[180px] opacity-30 mix-blend-screen" />
                <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-gradient-to-t from-avenix-orange/10 to-transparent rounded-full blur-[150px]" />
            </div>

            <div className="container mx-auto px-4 max-w-6xl relative z-10">

                {/* Header - Minimalist & Impactful */}
                <div className="text-center mb-24">


                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tight">
                        O preço silencioso <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-b from-avenix-orange to-avenix-orange/60">do improviso.</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                        Não é falta de esforço. É o resultado matemático de crescer sem infraestrutura.
                    </p>
                </div>

                {/* Grid - Obsidian/Glass Aesthetics */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                    {painScenarios.map((scenario, index) => (
                        <div
                            key={index}
                            className="group relative p-8 h-full rounded-3xl bg-zinc-900/40 border border-white/5 hover:border-avenix-orange/20 hover:bg-zinc-900/60 transition-all duration-500 overflow-hidden backdrop-blur-sm"
                        >
                            {/* Hover Spotlight Effect */}
                            <div className="absolute -inset-px bg-gradient-to-br from-avenix-orange/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl" />

                            <div className="relative z-10 flex flex-col h-full">
                                {/* Header: Trigger & Emotion */}
                                <div className="flex justify-between items-start mb-6">
                                    <div className="p-3 rounded-2xl bg-white/5 border border-white/5 group-hover:scale-110 group-hover:bg-avenix-orange/10 group-hover:border-avenix-orange/10 transition-all duration-500">
                                        <scenario.icon className="w-5 h-5 text-gray-400 group-hover:text-avenix-orange transition-colors" />
                                    </div>
                                    <span className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[10px] font-bold uppercase tracking-wider text-gray-500 group-hover:text-avenix-orange/80 group-hover:border-avenix-orange/10 transition-colors">
                                        {scenario.emotion}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1">
                                    <p className="text-avenix-orange/80 text-xs font-mono mb-3 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-2 group-hover:translate-y-0">
                                        {scenario.trigger}
                                    </p>
                                    <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:translate-x-1 transition-transform duration-500">
                                        {scenario.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed border-t border-white/5 pt-4 mt-auto group-hover:text-gray-400 transition-colors">
                                        {scenario.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA - The Pivot */}
                <div className="relative text-center">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md h-32 bg-avenix-orange/20 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        <p className="text-gray-300 font-medium">
                            A boa notícia? <span className="text-white">Estes problemas são opcionais.</span>
                        </p>

                        <Link
                            href="/diagnostico"
                            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-white text-black font-bold text-lg rounded-full overflow-hidden hover:scale-105 transition-all duration-300 shadow-[0_0_50px_rgba(255,255,255,0.1)]"
                        >
                            <span className="relative z-10">Parar o ciclo agora</span>
                            <span className="relative z-10 group-hover:translate-x-1 transition-transform">→</span>
                            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
