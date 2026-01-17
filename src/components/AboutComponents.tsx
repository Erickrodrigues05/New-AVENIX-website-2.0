import { Brain, Users, Globe, Target, Shield, Zap, Search, Check, X } from 'lucide-react';
import { Reveal } from './Reveal';

export function AboutHero() {
    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-black pb-20 pt-32">

            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial Gradient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-avenix-orange/10 rounded-full blur-[120px] opacity-20" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">



                <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight leading-none">
                    Sobre a <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-orange via-white to-avenix-cyan">
                        AVENIX.
                    </span>
                </h1>

                <p className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed">
                    Liderando a revolução da <span className="text-white font-medium">automação inteligente</span> em Angola e no mundo.

                </p>

            </div>

            {/* Scroll Indicator */}
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <div className="text-gray-500 flex flex-col items-center gap-2 animate-bounce">
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-avenix-orange to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest opacity-90 text-avenix-orange">Conhecer a Equipa</span>
                </div>
            </div>
        </section>
    );
}

export function MissionStats() {
    return (
        <section className="py-24 relative overflow-hidden bg-black">
            {/* Neural Beam (Desktop Only) */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-avenix-orange/20 to-transparent -translate-x-1/2" />


            <div className="container mx-auto px-4 relative z-10">
                <Reveal width="100%">
                    <div className="flex flex-col md:flex-row items-center gap-16">
                        <div className="w-full md:w-1/2 space-y-8">
                            <div className="inline-block px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-avenix-orange backdrop-blur-sm">
                                Nossa Missão
                            </div>
                            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                                Tornar o ecossistema digital <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-orange to-white">
                                    mais evoluído.
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed border-l-2 border-white/10 pl-6">
                                Permitimos que empresas e pessoas cresçam de forma automatizada, escalável e sustentável. Não somos apenas uma agência, somos um parceiro estratégico que identifica problemas reais e entrega soluções digitais inteligentes.
                            </p>

                            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
                                {[
                                    { val: "2024", label: "Fundada em Dezembro" },
                                    { val: "80%", label: "ROI Médio" },
                                    { val: "Angola", label: "Base em Luanda" },
                                    { val: "Global", label: "Atuação Internacional" }
                                ].map((stat, i) => (
                                    <div key={i}>
                                        <div className="text-3xl font-bold text-white mb-1 font-mono">{stat.val}</div>
                                        <div className="text-sm text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-avenix-blue/40 to-transparent rounded-[32px] blur-2xl group-hover:blur-3xl transition-all duration-700 opacity-60" />

                            <div className="relative p-8 md:p-12 rounded-[32px] bg-zinc-900/80 backdrop-blur-2xl border border-white/10 group-hover:border-white/20 transition-colors">

                                {/* Moving scanline */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-y-full group-hover:animate-scanline" />

                                <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                                    <Target className="w-6 h-6 text-avenix-orange" />
                                    Porquê a AVENIX?
                                </h3>

                                <div className="space-y-8">
                                    {[
                                        { icon: Zap, title: "Foco no Resultado", desc: "Não vendemos apenas tecnologia, entregamos resultado operacional real." },
                                        { icon: Brain, title: "Inteligência Real", desc: "Trabalhadores virtuais com memória, objetivos claros e execução contínua." },
                                        { icon: Globe, title: "Escala Global", desc: "Soluções adaptadas à realidade local de Angola, mas com padrão internacional." }
                                    ].map((item, i) => (
                                        <div key={i} className="flex gap-4 group/item">
                                            <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/item:bg-avenix-orange/10 group-hover/item:border-avenix-orange/30 transition-colors">
                                                <item.icon className="w-6 h-6 text-gray-400 group-hover/item:text-avenix-orange transition-colors" />
                                            </div>
                                            <div>
                                                <h4 className="text-white font-medium mb-1 group-hover/item:text-avenix-orange transition-colors">{item.title}</h4>
                                                <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function ValuesGrid() {
    const values = [
        {
            icon: Search,
            title: "Transparência",
            description: "Sem promessas vazias ou soluções genéricas. Dizemos o que funciona e o que não funciona."
        },
        {
            icon: Zap,
            title: "Eficácia",
            description: "Tecnologia só faz sentido quando resolve problemas. Focamos no que traz retorno."
        },
        {
            icon: Shield,
            title: "Respeito",
            description: "Pelo cliente, pelo negócio e pelo investimento feito. Somos parceiros de confiança."
        }
    ];

    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-4">
                <Reveal width="100%">
                    <h2 className="text-3xl font-bold text-white mb-12 text-center">Nossos Valores</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {values.map((value, i) => (
                            <div key={i} className="p-8 rounded-[32px] bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-avenix-orange/30 transition-all text-center group hover:-translate-y-2 duration-500">
                                <div className="w-16 h-16 mx-auto rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-avenix-orange/10 group-hover:border-avenix-orange/30 transition-all duration-500">
                                    <value.icon className="w-8 h-8 text-gray-400 group-hover:text-avenix-orange transition-colors duration-500" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-avenix-orange transition-colors">{value.title}</h3>
                                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function Comparison() {
    return (
        <section className="py-32 bg-black relative">
            <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center bg-fixed opacity-20 [mask-image:linear-gradient(0deg,transparent,black,transparent)]" />

            <div className="container mx-auto px-4 max-w-5xl relative z-10">
                <Reveal width="100%">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-20 text-center">
                        A Diferença <span className="text-avenix-orange">AVENIX</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                        {/* Traditional */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-red-500/5 rounded-[32px] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative h-full p-8 md:p-10 rounded-[32px] bg-zinc-900/30 border border-white/5 group-hover:border-red-500/20 transition-all duration-500">
                                <h3 className="text-xl font-bold text-gray-400 mb-8 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-red-500/10 text-red-500">
                                        <X className="w-5 h-5" />
                                    </div>
                                    Agências Tradicionais
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        "Vendem tecnologia sem estratégia",
                                        "Custos operacionais elevados",
                                        "Processos manuais e lentos",
                                        "Foco em 'entregáveis', não em ROI"
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4 text-gray-500 group-hover:text-gray-400 transition-colors">
                                            <X className="w-5 h-5 mt-0.5 shrink-0 opacity-50" />
                                            <span className="text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* AVENIX */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-avenix-cyan/20 rounded-[32px] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-700" />
                            <div className="relative h-full p-8 md:p-10 rounded-[32px] bg-zinc-900/80 backdrop-blur-xl border border-avenix-orange/30 group-hover:border-avenix-cyan/50 transition-all duration-500 overflow-hidden shadow-2xl">

                                {/* Glow Effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-avenix-orange/20 blur-[60px] rounded-full translate-x-1/2 -translate-y-1/2" />

                                <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-avenix-cyan/10 text-avenix-cyan">
                                        <Check className="w-5 h-5" />
                                    </div>
                                    Model Avenix
                                </h3>
                                <ul className="space-y-6">
                                    {[
                                        { text: "Foco em resultado operacional real", hl: true },
                                        { text: "Automação que reduz custos", hl: true },
                                        { text: "Trabalhadores virtuais 24/7", hl: true },
                                        { text: "ROI mensurável e claro", hl: true }
                                    ].map((item, i) => (
                                        <li key={i} className="flex gap-4">
                                            <div className="mt-0.5 p-1 rounded-full bg-avenix-cyan/20 text-avenix-cyan">
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className={`text-sm ${item.hl ? 'text-white font-medium' : 'text-gray-300'}`}>
                                                {item.text}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function TeamGrid() {
    const team = [
        {
            name: "Geovane Carneiro",
            role: "Consultor Estratégico",
            bio: "Especialista em arquitetura de negócios e expansão de mercado. Transforma visão corporativa em roteiros de crescimento tangíveis.",
            initials: "GC",
            gradient: "from-avenix-cyan to-blue-600"
        },
        {
            name: "Erick Rodrigues",
            role: "Consultor Estratégico",
            bio: "Arquitetura de sistemas e eficiência operacional. Garante que a tecnologia implementada gera valor mensurável e escala.",
            initials: "ER",
            gradient: "from-avenix-orange to-red-600"
        }
    ];

    return (
        <section className="py-32 bg-black border-t border-white/5 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <Reveal width="100%">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
                            <span className="text-gray-400 text-xs font-medium uppercase tracking-wider">Núcleo Estratégico</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            Mentes por trás da Estratégia
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg hover:text-gray-300 transition-colors">
                            Consultores experientes focados em transformar a visão de negócio em resultados tangíveis e escaláveis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {team.map((member, i) => (
                            <div key={i} className="group relative p-8 rounded-[32px] bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2">
                                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${member.gradient} opacity-10 blur-[50px] rounded-full group-hover:opacity-20 transition-all`} />

                                <div className="relative flex items-center gap-8">
                                    <div className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${member.gradient} flex items-center justify-center text-3xl font-bold text-white shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-500`}>
                                        {member.initials}
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">{member.name}</h3>
                                        <div className="text-avenix-orange text-sm font-medium tracking-wide mb-3">{member.role}</div>
                                        <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                                            {member.bio}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
