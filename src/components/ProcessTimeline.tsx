"use client";
import { Search, PenTool, Zap, TrendingUp, Check } from 'lucide-react';
import { Reveal } from './Reveal';

const steps = [
    {
        id: "step-1",
        number: "01",
        title: "Diagnóstico Profundo",
        subtitle: "A FUNDAÇÃO",
        description: "A maioria dos projetos falha antes de começar por falta de clareza. Não prescrevemos sem examinar. Mergulhamos na sua operação para identificar gargalos invisíveis, ineficiências de custo e oportunidades de automação imediata.",
        icon: Search,
        tech: ["Análise de Processos", "Auditoria Técnica", "Mapeamento de Dados", "Entrevistas"],
        features: [
            "Relatório de Maturidade Digital",
            "Mapa de Gargalos Operacionais",
            "Calculadora de ROI Projetado",
            "Roadmap de Oportunidades"
        ],
        align: "left",
        gradient: "from-avenix-orange to-avenix-orange-light"
    },
    {
        id: "step-2",
        number: "02",
        title: "Arquitetura de Solução",
        subtitle: "O BLUEPRINT",
        description: "Com os dados em mãos, desenhamos o sistema ideal. Não usamos 'templates'. Selecionamos a stack tecnológica exata, definimos os fluxos de dados e criamos o plano de execução passo-a-passo.",
        icon: PenTool,
        tech: ["Design System", "Prototipagem", "Arquitetura Cloud", "Fluxos de Dados"],
        features: [
            "Diagrama de Arquitetura Técnica",
            "Design System Completo (Mockups)",
            "Cronograma de Implementação",
            "Planeamento de Escalabilidade"
        ],
        align: "right",
        gradient: "from-white to-gray-400"
    },
    {
        id: "step-3",
        number: "03",
        title: "Engenharia & Deploy",
        subtitle: "O BUILD",
        description: "Codificamos, integramos e testamos. A nossa equipa de elite constrói a sua infraestrutura com foco obsessivo em segurança, velocidade e escalabilidade. O código é limpo, documentado e propriedade sua.",
        icon: Zap,
        tech: ["Next.js/React", "Python/AI", "Cloud Deploy", "CI/CD Pipeline"],
        features: [
            "Desenvolvimento Frontend/Backend",
            "Integração de APIs e IA",
            "Testes de Carga e Segurança",
            "Deploy em Infraestrutura Segura"
        ],
        align: "left",
        gradient: "from-avenix-cyan to-avenix-blue"
    },
    {
        id: "step-4",
        number: "04",
        title: "Otimização Contínua",
        subtitle: "A ESCALA",
        description: "O lançamento é apenas o dia 1. Monitorizamos a performance em tempo real e ajustamos os algoritmos para garantir que o seu ROI cresce mês após mês. Não o abandonamos após a entrega.",
        icon: TrendingUp,
        tech: ["Analytics 4", "Dashboards", "A/B Testing", "Machine Learning"],
        features: [
            "Dashboards em Tempo Real",
            "Testes A/B de Conversão",
            "Manutenção Evolutiva",
            "Relatórios de Performance Mensal"
        ],
        align: "right",
        gradient: "from-avenix-blue to-avenix-cyan"
    }
];

export default function ProcessTimeline() {
    return (
        <section className="py-16 md:py-32 bg-black relative overflow-hidden">

            {/* Neural Beam (Desktop Only) - Same as SystemDetails */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-avenix-cyan/20 to-transparent -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="space-y-24 md:space-y-40">
                    {steps.map((step, index) => {
                        // Color logic: step 0 = orange, step 1 = white, step 2 = cyan, step 3 = cyan
                        const colorClass = index === 0 ? 'text-avenix-orange' : index === 1 ? 'text-white' : 'text-avenix-cyan';
                        const bgColorClass = index === 0 ? 'bg-avenix-orange' : index === 1 ? 'bg-white' : 'bg-avenix-cyan';
                        const dotColorClass = index === 0 ? 'bg-avenix-orange' : index === 1 ? 'bg-white' : 'bg-avenix-cyan';

                        return (
                            <div key={step.id} className={`relative flex flex-col ${step.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>

                                {/* Connector Node on Beam - Same style as SystemDetails */}
                                <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black z-20 ${dotColorClass} shadow-[0_0_20px_rgba(255,255,255,0.5)]`} />

                                {/* Visual Side - Tech Card (Same as SystemDetails) */}
                                <div className="flex-1 w-full perspective-1000">
                                    <Reveal width="100%">
                                        <div className="relative group transform transition-transform duration-500 hover:rotate-y-2 hover:scale-105">

                                            {/* Ambient Glow */}
                                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500`} />

                                            {/* Holographic Card - Same structure as SystemDetails */}
                                            <div className="relative bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden group-hover:border-white/20 transition-colors">

                                                {/* Moving scanline */}
                                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-scanline" />

                                                {/* Tech Grid Header */}
                                                <div className="flex justify-between items-start mb-10">
                                                    <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                                                        <step.icon className="w-8 h-8 text-white" />
                                                    </div>
                                                    <div className="flex gap-1.5">
                                                        {[1, 2, 3].map(dot => (
                                                            <div key={dot} className={`w-1.5 h-1.5 rounded-full ${dotColorClass} opacity-40`} />
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Live Telemetry (Simulated) - Same as SystemDetails */}
                                                <div className="space-y-4 font-mono text-xs text-gray-400">
                                                    {step.tech.map((tech, i) => (
                                                        <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors">
                                                            <span>{tech}</span>
                                                            <span className={`${colorClass} opacity-70`}>Active</span>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        </div>
                                    </Reveal>
                                </div>

                                {/* Content Side - Same structure as SystemDetails */}
                                <div className="flex-1 w-full text-left">
                                    <Reveal width="100%">
                                        <div className="inline-flex items-center gap-2 mb-6">
                                            <div className={`h-px w-8 bg-gradient-to-r ${step.gradient}`} />
                                            <h4 className={`text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r ${step.gradient} bg-clip-text text-transparent`}>
                                                Fase {step.number} — {step.subtitle}
                                            </h4>
                                        </div>

                                        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                                            {step.title.split(' ')[0]} <span className="text-gray-400 font-light">{step.title.split(' ').slice(1).join(' ')}</span>
                                        </h2>

                                        <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6 group-hover:border-white/30 transition-colors">
                                            {step.description}
                                        </p>

                                        <div className="grid grid-cols-1 gap-4">
                                            {step.features.map((feature, i) => (
                                                <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:translate-x-2">
                                                    <div className={`mt-1 p-1.5 rounded-lg bg-white/5`}>
                                                        <Check className={`w-3.5 h-3.5 ${colorClass}`} />
                                                    </div>
                                                    <span className="text-gray-300 text-sm font-medium pt-0.5">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </Reveal>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}
