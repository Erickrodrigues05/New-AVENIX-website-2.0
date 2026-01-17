import Link from 'next/link';
import { Bot, Layers, Rocket, CheckCircle2, ArrowRight, Zap, Code2, BarChart3 } from 'lucide-react';

const pillars = [
    {
        icon: Bot,
        name: "Automação",
        subtitle: "O MOTOR DA OPERAÇÃO",
        description: "Substitua dezenas de horas manuais por processos inteligentes. Deixe que os robôs façam o trabalho repetitivo enquanto a sua equipa lidera.",
        features: [
            "Atendimento IA & Chatbots",
            "Gestão de CRM Automática",
            "Follow-up de Vendas Instântaneo"
        ],
        gradient: "from-avenix-orange/20 to-orange-500/5"
    },
    {
        icon: Layers,
        name: "Infraestrutura",
        subtitle: "O ALICERCE DIGITAL",
        description: "Plataformas robustas que não caem, não falham e convertem visitantes em clientes leais. A base sólida que o seu crescimento exige.",
        features: [
            "Websites de Alta Conversão",
            "Sistemas de Agendamento",
            "Integrações API Complexas"
        ],
        gradient: "from-white/10 to-gray-500/5"
    },
    {
        icon: Rocket,
        name: "Escala & Distribuição",
        subtitle: "O ACELERADOR",
        description: "Sistemas desenhados para multiplicar o alcance da sua mensagem e trazer leads qualificados em volume, todos os dias.",
        features: [
            "Fúnis de Vendas Automatizados",
            "Marketing de Conteúdo Escalar",
            "Analytics & Business Intelligence"
        ],
        gradient: "from-avenix-cyan/20 to-avenix-blue/10"
    }
];

export default function Features() {
    return (
        <section id="sistema" className="py-16 md:py-32 bg-black relative overflow-hidden">

            {/* Orbital Background Effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-avenix-orange/5 rounded-full blur-[120px] opacity-30" />
                {/* Connecting Lines (Simulated) */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Header Side-by-Side Text */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl">

                        <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                            O Sistema <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Unificado AVENIX.</span>
                        </h2>
                    </div>
                    <div className="md:text-right max-w-sm ml-auto">
                        <p className="text-gray-400 text-lg font-light leading-relaxed mb-6">
                            O caos não se resolve com mais esforço, resolve-se com infraestrutura. A arquitetura desenhada para substituir o improviso por controlo absoluto.
                        </p>
                        <Link href="/sistema" className="group inline-flex items-center gap-2 text-avenix-orange font-bold uppercase tracking-widest text-sm hover:text-white transition-colors">
                            <span>Explorar a Matriz</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Pillars Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pillars.map((pillar, index) => (
                        <div
                            key={index}
                            className="group relative p-1 rounded-3xl bg-gradient-to-b from-white/10 to-white/0 hover:from-avenix-orange/50 hover:to-avenix-orange/10 transition-all duration-500"
                        >
                            {/* Inner Card Content */}
                            <div className="relative h-full bg-zinc-900/90 backdrop-blur-xl rounded-[22px] p-8 md:p-10 flex flex-col overflow-hidden">

                                {/* Background Glow */}
                                <div className={`absolute top-0 right-0 w-64 h-64 bg-gradient-to-br ${pillar.gradient} blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`} />

                                {/* Icon Area */}
                                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-white/20 transition-all duration-500 relative z-10">
                                    <pillar.icon className="w-8 h-8 text-white group-hover:text-avenix-orange transition-colors" />
                                </div>

                                {/* Content */}
                                <div className="relative z-10 flex-1">
                                    <h4 className="text-avenix-orange/80 text-xs font-bold tracking-widest uppercase mb-3">
                                        {pillar.subtitle}
                                    </h4>
                                    <h3 className="text-3xl font-bold text-white mb-6 group-hover:translate-x-1 transition-transform duration-300">
                                        {pillar.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed mb-8 border-l-2 border-white/10 pl-4 group-hover:border-avenix-orange/50 transition-colors">
                                        {pillar.description}
                                    </p>

                                    {/* Features List */}
                                    <ul className="space-y-4 mt-auto">
                                        {pillar.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-sm text-gray-300">
                                                <CheckCircle2 className="w-4 h-4 text-avenix-orange/50" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
