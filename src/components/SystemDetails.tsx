"use client";
import { Bot, Layers, Rocket, Check, Code, Cpu, Server, Globe2, Share2, BarChart } from 'lucide-react';
import { Reveal } from './Reveal';

const systems = [
    {
        id: "automation",
        title: "Núcleo de Automação",
        subtitle: "INTELIGÊNCIA OPERACIONAL",
        description: "Não são apenas chatbots. São agentes autónomos capazes de raciocinar, executar tarefas complexas e integrar-se com o seu CRM em tempo real.",
        icon: Bot,
        tech: ["OpenAI GPT-4", "Python v3.11", "LangChain", "Vector DB"],
        features: [
            "Atendimento 24/7 com memória de contexto",
            "Gestão de agendamentos e cancelamentos",
            "Qualificação de leads via análise de sentimento",
            "Integração nativa com WhatsApp Business API"
        ],
        gradient: "from-avenix-orange to-avenix-orange-light", // Strict Orange
        align: "left"
    },
    {
        id: "infrastructure",
        title: "Matriz Digital",
        subtitle: "INFRAESTRUTURA DE ELITE",
        description: "A sua casa digital deve ser inabalável. Construímos ecossistemas web que carregam em milissegundos e convertem visitantes em clientes de alto valor.",
        icon: Layers,
        tech: ["Next.js 14", "React Server Components", "Edge Computing", "TailwindCSS"],
        features: [
            "Arquitetura serverless de alta disponibilidade",
            "SEO técnico automatizado",
            "Design System proprietário (Obsidian UI)",
            "Proteção contra ataques DDoS Enterprise"
        ],
        gradient: "from-white to-gray-400", // Monochromatic/Premium
        align: "right"
    },
    {
        id: "growth",
        title: "Motor de Crescimento",
        subtitle: "ESCALA PROGRAMÁTICA",
        description: "Deixe de perseguir clientes. O nosso sistema de distribuição de conteúdo e anúncios coloca a sua marca à frente das pessoas certas, na hora exata.",
        icon: Rocket,
        tech: ["Meta Ads API", "Google Analytics 4", "Looker Studio", "Zapier"],
        features: [
            "Dashboards de performance em tempo real",
            "Remarketing dinâmico multi-canal",
            "Automação de e-mail marketing comportamental",
            "Scoring preditivo de LTV (Lifetime Value)"
        ],
        gradient: "from-avenix-cyan to-blue-500", // Fixed contrast: ends in visible blue, not black-blue
        align: "left"
    }
];

export default function SystemDetails() {
    return (
        <section className="py-16 md:py-32 bg-black relative overflow-hidden">

            {/* Neural Beam (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-avenix-orange/20 to-transparent -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="space-y-24 md:space-y-40">
                    {systems.map((sys, index) => (
                        <div key={sys.id} className={`relative flex flex-col ${sys.align === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-10 md:gap-16`}>

                            {/* Connector Node on Beam */}
                            <div className={`hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 border-black z-20 ${sys.id === 'growth' ? 'bg-avenix-cyan' : sys.id === 'automation' ? 'bg-avenix-orange' : 'bg-white'} shadow-[0_0_20px_rgba(255,255,255,0.5)]`} />

                            {/* Visual Side */}
                            <div className="flex-1 w-full perspective-1000">
                                <Reveal width="100%">
                                    <div className="relative group transform transition-transform duration-500 hover:rotate-y-2 hover:scale-105">

                                        {/* Ambient Glow */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${sys.gradient} opacity-20 blur-[100px] rounded-full group-hover:opacity-30 transition-opacity duration-500`} />

                                        {/* Holographic Card */}
                                        <div className="relative bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[32px] p-8 md:p-12 overflow-hidden group-hover:border-white/20 transition-colors">

                                            {/* Moving scanline */}
                                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-scanline" />

                                            {/* Tech Grid Header */}
                                            <div className="flex justify-between items-start mb-10">
                                                <div className={`w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                                                    <sys.icon className="w-8 h-8 text-white" />
                                                </div>
                                                <div className="flex gap-1.5">
                                                    {[1, 2, 3].map(dot => (
                                                        <div key={dot} className={`w-1.5 h-1.5 rounded-full ${index === 0 ? 'bg-avenix-orange' : index === 2 ? 'bg-avenix-cyan' : 'bg-white'} opacity-40`} />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Live Telemetry (Simulated) */}
                                            <div className="space-y-4 font-mono text-xs text-gray-400">
                                                {sys.tech.map((tech, i) => (
                                                    <div key={i} className="flex items-center justify-between border-b border-white/5 pb-2 group-hover:border-white/10 transition-colors">
                                                        <span>{tech}</span>
                                                        <span className={`${index === 0 ? 'text-avenix-orange' : index === 2 ? 'text-avenix-cyan' : 'text-white'} opacity-70`}>v.Latest</span>
                                                    </div>
                                                ))}
                                            </div>

                                        </div>
                                    </div>
                                </Reveal>
                            </div>

                            {/* Content Side */}
                            <div className="flex-1 w-full text-left">
                                <Reveal width="100%">
                                    <div className="inline-flex items-center gap-2 mb-6">
                                        <div className={`h-px w-8 bg-gradient-to-r ${sys.gradient}`} />
                                        <h4 className={`text-sm font-bold tracking-[0.2em] uppercase bg-gradient-to-r ${sys.gradient} bg-clip-text text-transparent`}>
                                            {sys.subtitle}
                                        </h4>
                                    </div>

                                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                                        {sys.title.split(' ')[0]} <span className="text-gray-400 font-light">{sys.title.split(' ').slice(1).join(' ')}</span>
                                    </h2>

                                    <p className="text-gray-400 text-lg leading-relaxed mb-10 border-l-2 border-white/10 pl-6 group-hover:border-white/30 transition-colors">
                                        {sys.description}
                                    </p>

                                    <div className="grid grid-cols-1 gap-4">
                                        {sys.features.map((feature, i) => (
                                            <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-all hover:translate-x-2">
                                                <div className={`mt-1 p-1.5 rounded-lg bg-white/5 group-hover/item:${index === 0 ? 'bg-avenix-orange/20' : index === 2 ? 'bg-avenix-cyan/20' : 'bg-white/20'}`}>
                                                    <Check className={`w-3.5 h-3.5 ${index === 0 ? 'text-avenix-orange' : index === 2 ? 'text-avenix-cyan' : 'text-white'}`} />
                                                </div>
                                                <span className="text-gray-300 text-sm font-medium pt-0.5">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </Reveal>
                            </div>

                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
