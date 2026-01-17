"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Smartphone, ChefHat, Users, Clock, Globe, Code2, Database, Cpu, Wallet, GraduationCap, Shield, Lock, BarChart3, BookOpen } from 'lucide-react';
import { Reveal } from './Reveal';

interface CaseStudiesProps {
    limit?: number;
    compact?: boolean;
}

export default function CaseStudies({ limit, compact = false }: CaseStudiesProps) {

    const [isInteracting, setIsInteracting] = useState(false);

    // Flagship Project - Terra Nostra
    const terraNostra = {
        title: "Terra Nostra",
        tagline: "O sabor que conquista Angola.",
        subtitle: "Menu Digital Interativo v1.0",
        partner: "ASPIREVERSE (UK)",
        description: "Mais do que um menu, um sistema operacional de restaurante. Integração total entre sala e cozinha via WebSocket, reduzindo o tempo de espera em 35% e aumentando o ticket médio em 20% através de upsell visual.",
        features: [
            { icon: Smartphone, label: "Interface Mobile-First", desc: "UX nativa sem instalação" },
            { icon: ChefHat, label: "KDS (Kitchen Display)", desc: "Sincronia sala-cozinha" },
            { icon: Users, label: "Gestão de Staff", desc: "Controlo de turnos e tips" },
            { icon: Clock, label: "Zero Latência", desc: "Atualizações < 50ms" },
        ],
        stack: [
            { icon: Code2, name: "Next.js 14" },
            { icon: Database, name: "PostgreSQL" },
            { icon: Cpu, name: "WebSocket" },
        ],
        stats: [
            { value: "15k+", label: "Visitantes/Mês" },
            { value: "35%", label: "Eficiência" },
            { value: "24/7", label: "Uptime" },
        ],
        year: "2025",
        link: "https://www.terranostramenu.com/"
    };

    return (
        <section id="portfolio" className={`${compact ? 'py-20' : 'py-20 md:pb-32 md:pt-20'} bg-black relative overflow-hidden`}>

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* 1. FLAGSHIP CASE (Terra Nostra) - The Result */}
                <div className="mb-32">
                    <Reveal width="100%">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-px bg-gradient-to-r from-avenix-orange to-transparent w-24"></div>
                            <span className="text-avenix-orange font-bold text-xs uppercase tracking-[0.2em] shadow-orange-glow">Projetos Mais Recentes</span>
                        </div>
                    </Reveal>

                    <Reveal width="100%">
                        <div className="group relative bg-zinc-900/80 backdrop-blur-2xl border border-white/10 rounded-[40px] overflow-hidden hover:border-white/20 transition-colors duration-700 shadow-2xl hover:shadow-[0_0_50px_-12px_rgba(255,255,255,0.05)]">

                            {/* Background Gradient Mesh */}
                            <div className="absolute inset-0 bg-gradient-to-br from-avenix-cyan/10 via-black to-zinc-900/50 pointer-events-none" />

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10">

                                {/* Left: Content (5 cols) */}
                                <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-white/5 bg-black/20 backdrop-blur-sm">

                                    <div className="space-y-8">
                                        {/* Header */}
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-avenix-blue/50 to-avenix-cyan/10 border border-avenix-cyan/20 flex items-center justify-center shadow-lg shadow-avenix-cyan/20">
                                                    <Globe className="w-5 h-5 text-avenix-cyan" />
                                                </div>
                                                <div>
                                                    <div className="text-white font-bold tracking-tight text-xl">{terraNostra.title}</div>
                                                    <div className="text-[10px] text-avenix-cyan font-mono uppercase tracking-widest opacity-80">{terraNostra.tagline}</div>
                                                </div>
                                            </div>
                                            <div className="px-4 py-1.5 bg-white/5 rounded-full border border-white/10 text-[10px] text-gray-400 font-mono uppercase tracking-widest backdrop-blur-md">
                                                Ativo v1.0
                                            </div>
                                        </div>

                                        {/* Main Text */}
                                        <div className="relative">
                                            <div className="absolute -left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-avenix-orange/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                            <div className="text-avenix-orange text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                                                <div className="w-1 h-1 rounded-full bg-avenix-orange animate-pulse" />
                                                {terraNostra.subtitle}
                                            </div>
                                            <p className="text-gray-400 text-lg font-light leading-relaxed">
                                                Desenhamos mais do que um menu. Construímos um <span className="text-gray-200 font-medium">Sistema Operativo Gastronómico</span>. Integração neural entre sala e cozinha via WebSocket, eliminando o erro humano e reduzindo tempos de espera com precisão cirúrgica.
                                            </p>
                                        </div>

                                        {/* Tech Stack Pills */}
                                        <div className="flex flex-wrap gap-2">
                                            {terraNostra.stack.map((tech, i) => (
                                                <div key={i} className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/50 rounded-lg border border-white/5 text-xs text-gray-400 group-hover:border-white/10 transition-colors">
                                                    <tech.icon className="w-3 h-3 text-gray-500" />
                                                    {tech.name}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Stats Footer */}
                                    <div className="mt-12 pt-8 border-t border-white/5 grid grid-cols-3 gap-8">
                                        {terraNostra.stats.map((stat, idx) => (
                                            <div key={idx} className="group/stat">
                                                <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover/stat:text-avenix-cyan transition-colors">{stat.value}</div>
                                                <div className="text-[9px] text-gray-600 uppercase tracking-widest font-bold group-hover/stat:text-gray-400 transition-colors">{stat.label}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* CTA Mobile Only */}
                                    <div className="mt-8 lg:hidden">
                                        <Link href={terraNostra.link} target="_blank" className="flex items-center justify-center gap-2 w-full py-4 bg-avenix-cyan hover:bg-cyan-500 text-black rounded-xl font-bold transition-colors shadow-lg shadow-avenix-cyan/20">
                                            Aceder ao Sistema <ArrowUpRight className="w-4 h-4" />
                                        </Link>
                                    </div>
                                </div>

                                {/* Right: Visual (7 cols) */}
                                <div className="lg:col-span-7 relative min-h-[600px] overflow-hidden flex items-center justify-center p-8 lg:p-0">

                                    {/* Ambient Glow behind phone */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-radial-gradient from-avenix-blue/40 to-transparent opacity-60 pointer-events-none" />

                                    {/* Decorative Circles */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full opacity-20 animate-[spin_60s_linear_infinite]" />
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] border border-white/5 rounded-full opacity-20 animate-[spin_40s_linear_infinite_reverse]" />

                                    {/* Phone Mockup */}
                                    <div className="relative z-10 transform group-hover:scale-[1.05] group-hover:-translate-y-4 transition-transform duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)]">
                                        <div className="relative w-[300px] md:w-[340px] aspect-[9/19] bg-black rounded-[3.5rem] border-[4px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/10 group-hover:ring-avenix-cyan/30 transition-shadow duration-700">
                                            {/* Dynamic Island */}
                                            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-32 h-8 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none border border-zinc-800/50">
                                                <div className="w-20 h-4 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent rounded-full opacity-50" />
                                            </div>

                                            <iframe
                                                src="https://www.terranostramenu.com/"
                                                className="w-full h-full border-none bg-zinc-900 scale-[1.01]"
                                                title="Terra Nostra"
                                                loading="lazy"
                                            />

                                            {/* Interaction Overlay (Click to Activate) */}
                                            <div
                                                className={`absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-500 z-20 cursor-pointer ${isInteracting ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
                                                onClick={() => setIsInteracting(true)}
                                            >
                                                <div className="bg-black/60 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full flex items-center gap-2">
                                                    <div className="w-2 h-2 rounded-full bg-avenix-cyan animate-pulse" />
                                                    <span className="text-[10px] uppercase tracking-widest text-white font-bold">Pré-visualização (Toque para usar)</span>
                                                </div>
                                            </div>

                                            {/* Reflection Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[3.5rem] opacity-30 mix-blend-overlay z-30" />

                                            {/* Inner Shadow for depth */}
                                            <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.5)] pointer-events-none rounded-[3.5rem]" />
                                        </div>

                                        {/* Floating CTA (Desktop) */}
                                        <Link
                                            href={terraNostra.link}
                                            target="_blank"
                                            className="hidden lg:flex absolute bottom-12 -right-12 bg-black/80 backdrop-blur-xl border border-avenix-cyan/20 text-white px-8 py-4 rounded-2xl font-bold items-center gap-3 shadow-2xl hover:shadow-avenix-cyan/20 hover:border-avenix-cyan/50 transition-all hover:-translate-y-2 group/btn"
                                        >
                                            <div className="relative">
                                                <div className="absolute inset-0 bg-avenix-cyan/30 blur-lg rounded-full opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                                                <Globe className="w-5 h-5 text-avenix-cyan relative z-10" />
                                            </div>
                                            <span className="tracking-wide text-sm">Aceder ao Sistema</span>
                                        </Link>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </Reveal>
                </div>

                {!limit && (
                    <>
                        {/* INTRO: Os 3 Pilares Video (Full Width) */}
                        <div className="mb-20">
                            <Reveal width="100%">
                                <div className="group relative aspect-video md:aspect-[21/9] bg-zinc-900 rounded-[32px] border border-white/5 overflow-hidden hover:border-avenix-cyan/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_60px_-10px_rgba(0,212,255,0.2)]">
                                    <iframe
                                        src="https://player.vimeo.com/video/1106954783?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        className="absolute inset-0 w-full h-full scale-[1.15] group-hover:scale-125 transition-transform duration-1000 ease-out"
                                        title="Os 3 Pilares AVENIX"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent group-hover:via-black/20 transition-colors duration-500" />

                                    <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 right-8 pointer-events-none">
                                        <div className="px-4 py-1.5 inline-flex items-center gap-2 bg-avenix-cyan/10 border border-avenix-cyan/30 rounded-full text-xs text-avenix-cyan font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                                            <span className="w-2 h-2 rounded-full bg-avenix-cyan animate-pulse" />
                                            Introdução ao Sistema
                                        </div>
                                        <div className="text-white font-bold text-3xl md:text-5xl drop-shadow-2xl mb-3 tracking-tight">Os 3 Pilares</div>
                                        <div className="text-gray-300 text-base md:text-lg max-w-2xl font-light leading-relaxed">
                                            Do diagnóstico estratégico à implementação cirúrgica. O nosso playbook de crescimento que transforma negócios.
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* 2. STRATEGIC FOUNDATION (Horizontals) - The Capabilities */}
                        <div className="mb-32">
                            <Reveal width="100%">
                                <div className="flex items-end justify-between mb-12 border-b border-white/5 pb-6">
                                    <div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="h-px bg-gradient-to-r from-avenix-cyan to-transparent w-24"></div>
                                            <span className="text-avenix-cyan font-bold text-xs uppercase tracking-[0.2em] shadow-cyan-glow">O Motor Central</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Engenharia de <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">Liderança.</span></h3>
                                    </div>
                                    <div className="hidden md:block text-right text-xs text-gray-500 uppercase tracking-widest max-w-xs leading-loose">
                                        Arquitetura de sistemas e soluções estratégicas que sustentam o crescimento exponencial.
                                    </div>
                                </div>
                            </Reveal>

                            {/* Single Video: Platform Creation (Promotional) - Now Full Width */}
                            <Reveal width="100%">
                                <div className="group relative aspect-video bg-zinc-900 rounded-[32px] border border-white/5 overflow-hidden hover:border-avenix-orange/50 transition-all duration-500 shadow-2xl hover:shadow-[0_0_40px_-10px_rgba(215,117,68,0.15)]">
                                    <iframe
                                        src="https://player.vimeo.com/video/1105301050?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1"
                                        frameBorder="0"
                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                        className="absolute inset-0 w-full h-full scale-[1.01] group-hover:scale-105 transition-transform duration-700 ease-out"
                                        title="Criação de Plataformas Digitais"
                                    />
                                    <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-colors duration-500" />

                                    <div className="absolute bottom-8 left-8 right-8 pointer-events-none transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                        <div className="px-3 py-1 inline-flex items-center gap-2 bg-avenix-orange/10 border border-avenix-orange/20 rounded-full text-[10px] text-avenix-orange font-bold uppercase tracking-wider mb-4 backdrop-blur-md">
                                            <span className="w-1.5 h-1.5 rounded-full bg-avenix-orange animate-pulse" />
                                            Engenharia Central
                                        </div>
                                        <div className="text-white font-bold text-2xl md:text-3xl drop-shadow-2xl mb-2">Plataformas Digitais</div>
                                        <div className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-w-md font-light">
                                            Visualização da nossa capacidade de moldar o caos digital em sistemas complexos e funcionais.
                                        </div>
                                    </div>
                                </div>
                            </Reveal>
                        </div>

                        {/* 3. BRAND AUTHORITY (Verticals) - The Content */}
                        <div className="mb-32">
                            <Reveal width="100%">
                                <div className="flex items-end justify-between mb-16 border-b border-white/5 pb-6">
                                    <div>
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="h-px bg-gradient-to-r from-avenix-cyan to-transparent w-24"></div>
                                            <span className="text-avenix-cyan font-bold text-xs uppercase tracking-[0.2em]">Impacto Visual</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Experiência <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-cyan to-white">Cinematográfica.</span></h3>
                                    </div>
                                    <div className="hidden md:block text-right text-xs text-gray-500 uppercase tracking-widest max-w-xs leading-loose">
                                        Narrativas visuais de alta fidelidade desenhadas para capturar a atenção em &lt; 3 segundos.
                                    </div>
                                </div>
                            </Reveal>

                            {/* Premium Phone Mockup Grid with Staggered Heights */}
                            <div className="grid grid-cols-2 gap-x-12 gap-y-24 max-w-4xl mx-auto justify-items-center">
                                {[
                                    { id: "1107671252", title: "Produção Comercial", tag: "Nível Cinema", color: "blue", offset: "mt-0" },
                                    { id: "1154542569", title: "Social Media", tag: "Engenharia Viral", color: "cyan", offset: "mt-8 md:mt-16" },
                                    { id: "1154543654", title: "Cobertura de Eventos", tag: "Destaques Dinâmicos", color: "orange", offset: "mt-0" },
                                    { id: "1154545560", title: "Storytelling Visual", tag: "Legado de Marca", color: "white", offset: "mt-8 md:mt-16" }
                                ].map((video, i) => {
                                    const colorMap: { [key: string]: string } = {
                                        blue: "from-avenix-blue/30 to-avenix-blue/10",
                                        cyan: "from-avenix-cyan/30 to-avenix-cyan/10",
                                        orange: "from-avenix-orange/30 to-avenix-orange/10",
                                        white: "from-white/20 to-white/5"
                                    };
                                    const borderMap: { [key: string]: string } = {
                                        blue: "group-hover:ring-avenix-blue/50",
                                        cyan: "group-hover:ring-avenix-cyan/50",
                                        orange: "group-hover:ring-avenix-orange/50",
                                        white: "group-hover:ring-white/30"
                                    };
                                    const textMap: { [key: string]: string } = {
                                        blue: "text-avenix-cyan",
                                        cyan: "text-avenix-cyan",
                                        orange: "text-avenix-orange",
                                        white: "text-white"
                                    };

                                    return (
                                        <Reveal key={`v-${i}`} width="fit-content">
                                            <div className={`relative ${video.offset}`}>
                                                {/* Numbered Badge */}
                                                <div className={`absolute -top-4 -left-4 w-10 h-10 rounded-full bg-black border border-white/10 flex items-center justify-center z-30 shadow-xl`}>
                                                    <span className={`text-sm font-bold ${textMap[video.color]}`}>0{i + 1}</span>
                                                </div>

                                                {/* Ambient Glow */}
                                                <div className={`absolute inset-0 bg-gradient-to-b ${colorMap[video.color]} blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity duration-700 rounded-full pointer-events-none`} />

                                                {/* Phone Device Frame */}
                                                <div className={`group relative w-[160px] md:w-[200px] aspect-[9/19] bg-black rounded-[2.5rem] md:rounded-[3rem] border-[3px] border-zinc-800 shadow-2xl overflow-hidden ring-1 ring-white/5 ${borderMap[video.color]} transition-all duration-500 hover:scale-105 hover:-translate-y-2`}>

                                                    {/* Dynamic Island */}
                                                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 md:w-24 h-6 md:h-7 bg-black rounded-full z-20 flex items-center justify-center pointer-events-none border border-zinc-800/50">
                                                        <div className="w-12 h-3 bg-gradient-to-r from-transparent via-zinc-800/50 to-transparent rounded-full opacity-50" />
                                                    </div>

                                                    {/* Video */}
                                                    <iframe
                                                        src={`https://player.vimeo.com/video/${video.id}?badge=0&autopause=0&player_id=0&app_id=58479&background=1&autoplay=1&loop=1&muted=1`}
                                                        frameBorder="0"
                                                        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                                                        className="absolute inset-0 w-full h-full scale-[1.35] group-hover:scale-[1.4] transition-transform duration-1000 ease-out"
                                                        title={video.title}
                                                    />

                                                    {/* Gradient Overlay */}
                                                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90 pointer-events-none z-10" />

                                                    {/* Reflection */}
                                                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none rounded-[2.5rem] md:rounded-[3rem] opacity-20 mix-blend-overlay z-10" />

                                                    {/* Inner Shadow */}
                                                    <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.5)] pointer-events-none rounded-[2.5rem] md:rounded-[3rem] z-10" />

                                                    {/* Text Overlay */}
                                                    <div className="absolute bottom-5 left-4 right-4 pointer-events-none z-20">
                                                        <div className={`h-0.5 w-4 ${video.color === 'white' ? 'bg-white/40' : `bg-${video.color === 'blue' ? 'avenix-blue' : video.color === 'cyan' ? 'avenix-cyan' : 'avenix-orange'}/40`} mb-2 group-hover:w-8 transition-all duration-500`} />
                                                        <div className="text-white font-bold text-sm leading-tight mb-0.5 drop-shadow-md">{video.title}</div>
                                                        <div className={`text-[8px] uppercase tracking-[0.15em] font-medium opacity-90 group-hover:opacity-100 transition-opacity ${textMap[video.color]}`}>{video.tag}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Reveal>
                                    );
                                })}
                            </div>

                            {/* Capability Pills */}
                            <div className="flex flex-wrap justify-center gap-3 mt-16">
                                {["Reels & TikToks", "Produção 4K", "Motion Graphics", "Sound Design", "Color Grading"].map((cap, i) => (
                                    <div key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:border-white/30 transition-colors cursor-default">
                                        {cap}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Confidential Projects Showcase */}
                        <div className="mt-32">
                            <Reveal width="100%">
                                <div className="flex items-end justify-between mb-24 border-b border-white/5 pb-6">
                                    <div className="relative">
                                        <div className="flex items-center gap-4 mb-3">
                                            <div className="h-px bg-gradient-to-r from-avenix-orange/50 to-transparent w-24"></div>
                                            <span className="text-avenix-orange font-mono text-[10px] uppercase tracking-[0.2em]">Restricted Access</span>
                                        </div>
                                        <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tighter">Trabalho <span className="text-zinc-600">Protegido.</span></h3>
                                        <div className="absolute -bottom-6 left-0 w-full h-px bg-gradient-to-r from-avenix-orange/50 to-transparent"></div>
                                    </div>
                                    <div className="hidden md:flex flex-col items-end gap-1 text-right">
                                        <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/5">
                                            <Lock className="w-3 h-3 text-avenix-orange" />
                                            <span className="text-[10px] font-mono text-avenix-orange uppercase tracking-widest">NDA Ativo</span>
                                        </div>
                                        <span className="text-[9px] text-zinc-600 font-mono uppercase tracking-widest mt-2">Infraestrutura Classificada</span>
                                    </div>
                                </div>
                            </Reveal>

                            {/* Vertical Alternating Layout */}
                            <div className="space-y-32">

                                {/* Project 1 - Left aligned */}
                                <Reveal width="100%">
                                    <div className="group flex flex-col md:flex-row items-center gap-16">
                                        {/* Redacted Visual */}
                                        <div className="flex-1 w-full relative">
                                            {/* decorative backdrop */}
                                            <div className="absolute -inset-4 bg-avenix-orange/5 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="relative aspect-[16/10] bg-black rounded-[24px] border border-white/5 overflow-hidden">
                                                {/* Tech Grid Background */}
                                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                                                {/* Animated Scanline */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-avenix-orange/5 to-transparent h-[200%] w-full animate-[scan_4s_linear_infinite]"></div>

                                                {/* Diagonal Warning Stripes */}
                                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #fff 10px, #fff 11px)' }}></div>

                                                {/* Center Lock UI */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-avenix-orange/20 blur-xl rounded-full animate-pulse"></div>
                                                        <div className="w-24 h-24 rounded-full bg-zinc-900/90 border border-avenix-orange/20 backdrop-blur-xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                                                            <Lock className="w-8 h-8 text-avenix-orange/80" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 flex flex-col items-center gap-2">
                                                        <span className="text-avenix-orange/60 font-mono text-[10px] tracking-[0.3em] uppercase">Confidencial</span>
                                                        <span className="px-2 py-0.5 bg-avenix-orange/10 border border-avenix-orange/20 rounded text-[9px] text-avenix-orange font-mono">APENAS PESSOAL AUTORIZADO</span>
                                                    </div>
                                                </div>

                                                {/* Status Badge */}
                                                <div className="absolute top-6 left-6">
                                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-avenix-orange animate-pulse"></div>
                                                        <span className="text-[10px] text-zinc-400 font-mono">Live System</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 w-full md:pl-8">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="w-8 h-px bg-zinc-700"></span>
                                                <span className="text-[10px] text-avenix-orange font-mono uppercase tracking-widest">Fintech • 2024</span>
                                            </div>

                                            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-avenix-orange transition-colors duration-500">
                                                Plataforma de Gestão de Tesouraria
                                            </h4>

                                            <p className="text-zinc-400 text-base leading-relaxed mb-8 border-l-2 border-zinc-800 pl-6">
                                                Aplicação móvel e web para controlo de fluxo de caixa, reconciliação bancária e geração de relatórios de conformidade. Arquitetura distribuída de alta disponibilidade.
                                            </p>

                                            {/* Tech Specs */}
                                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Tecnologia</div>
                                                    <div className="text-sm text-zinc-300">React Native + Node.js</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Escala</div>
                                                    <div className="text-sm text-zinc-300">50k+ Transações/Mês</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Duração</div>
                                                    <div className="text-sm text-zinc-300">4 meses</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Tipo</div>
                                                    <div className="text-sm text-zinc-300">Mobile + Web</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Project 2 - Right aligned */}
                                <Reveal width="100%">
                                    <div className="group flex flex-col md:flex-row-reverse items-center gap-16">
                                        {/* Redacted Visual */}
                                        <div className="flex-1 w-full relative">
                                            {/* decorative backdrop */}
                                            <div className="absolute -inset-4 bg-avenix-blue/20 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="relative aspect-[16/10] bg-black rounded-[24px] border border-white/5 overflow-hidden">
                                                {/* Tech Grid Background */}
                                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                                                {/* Animated Scanline */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-avenix-blue/10 to-transparent h-[200%] w-full animate-[scan_5s_linear_infinite]"></div>

                                                {/* Diagonal Warning Stripes */}
                                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, #000 0, #000 10px, #fff 10px, #fff 11px)' }}></div>

                                                {/* Center Lock UI */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-avenix-blue/30 blur-xl rounded-full animate-pulse"></div>
                                                        <div className="w-24 h-24 rounded-full bg-zinc-900/90 border border-avenix-blue/30 backdrop-blur-xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                                                            <Lock className="w-8 h-8 text-avenix-cyan" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 flex flex-col items-center gap-2">
                                                        <span className="text-avenix-cyan/60 font-mono text-[10px] tracking-[0.3em] uppercase">Confidencial</span>
                                                        <span className="px-2 py-0.5 bg-avenix-blue/20 border border-avenix-blue/40 rounded text-[9px] text-avenix-cyan font-mono">VISUALIZAÇÃO RESTRITA</span>
                                                    </div>
                                                </div>

                                                {/* Status Badge */}
                                                <div className="absolute top-6 left-6">
                                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-avenix-cyan animate-pulse"></div>
                                                        <span className="text-[10px] text-zinc-400 font-mono">Live System</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 w-full md:pr-8">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="w-8 h-px bg-zinc-700"></span>
                                                <span className="text-[10px] text-avenix-cyan font-mono uppercase tracking-widest">EdTech • 2023-24</span>
                                            </div>

                                            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-avenix-cyan transition-colors duration-500">
                                                Sistema de Ensino à Distância
                                            </h4>

                                            <p className="text-zinc-400 text-base leading-relaxed mb-8 border-l-2 border-zinc-800 pl-6">
                                                LMS completo para centro de formação de línguas: aulas síncronas via vídeo (WebRTC), biblioteca de recursos e sistema de avaliação automatizado.
                                            </p>

                                            {/* Tech Specs */}
                                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Tecnologia</div>
                                                    <div className="text-sm text-zinc-300">Next.js + WebRTC</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Usuários</div>
                                                    <div className="text-sm text-zinc-300">2.5k+ Alunos Ativos</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Duração</div>
                                                    <div className="text-sm text-zinc-300">6 meses</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Tipo</div>
                                                    <div className="text-sm text-zinc-300">Web Platform</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                                {/* Project 3 - Left aligned */}
                                <Reveal width="100%">
                                    <div className="group flex flex-col md:flex-row items-center gap-16">
                                        {/* Redacted Visual */}
                                        <div className="flex-1 w-full relative">
                                            {/* decorative backdrop */}
                                            <div className="absolute -inset-4 bg-avenix-cyan/10 rounded-[40px] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                                            <div className="relative aspect-[16/10] bg-black rounded-[24px] border border-white/5 overflow-hidden">
                                                {/* Tech Grid Background */}
                                                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

                                                {/* Animated Scanline */}
                                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-avenix-cyan/10 to-transparent h-[200%] w-full animate-[scan_6s_linear_infinite]"></div>

                                                {/* Diagonal Warning Stripes */}
                                                <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #000 0, #000 10px, #fff 10px, #fff 11px)' }}></div>

                                                {/* Center Lock UI */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-avenix-cyan/20 blur-xl rounded-full animate-pulse"></div>
                                                        <div className="w-24 h-24 rounded-full bg-zinc-900/90 border border-avenix-cyan/30 backdrop-blur-xl flex items-center justify-center relative z-10 group-hover:scale-105 transition-transform duration-500">
                                                            <Lock className="w-8 h-8 text-avenix-cyan" />
                                                        </div>
                                                    </div>
                                                    <div className="mt-6 flex flex-col items-center gap-2">
                                                        <span className="text-avenix-cyan/60 font-mono text-[10px] tracking-[0.3em] uppercase">Confidencial</span>
                                                        <span className="px-2 py-0.5 bg-avenix-blue/30 border border-avenix-cyan/20 rounded text-[9px] text-avenix-cyan font-mono">USO INTERNO APENAS</span>
                                                    </div>
                                                </div>

                                                {/* Status Badge */}
                                                <div className="absolute top-6 left-6">
                                                    <div className="flex items-center gap-2 px-3 py-1.5 bg-black/60 backdrop-blur-md border border-white/10 rounded-full">
                                                        <div className="w-1.5 h-1.5 rounded-full bg-avenix-orange animate-pulse"></div>
                                                        <span className="text-[10px] text-zinc-400 font-mono">Em Desenvolvimento</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 w-full md:pl-8">
                                            <div className="flex items-center gap-3 mb-6">
                                                <span className="w-8 h-px bg-zinc-700"></span>
                                                <span className="text-[10px] text-avenix-cyan font-mono uppercase tracking-widest">Logística • 2024</span>
                                            </div>

                                            <h4 className="text-3xl md:text-4xl font-bold text-white mb-6 group-hover:text-avenix-cyan transition-colors duration-500">
                                                Sistema de Gestão de Frotas
                                            </h4>

                                            <p className="text-zinc-400 text-base leading-relaxed mb-8 border-l-2 border-zinc-800 pl-6">
                                                Painel de controlo centralizado para empresa de distribuição: tracking GPS em tempo real, gestão de motoristas e otimização de rotas por IA.
                                            </p>

                                            {/* Tech Specs */}
                                            <div className="grid grid-cols-2 gap-y-4 gap-x-8">
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Tecnologia</div>
                                                    <div className="text-sm text-zinc-300">Vue.js + Python</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Frota</div>
                                                    <div className="text-sm text-zinc-300">500+ Veículos</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Duração</div>
                                                    <div className="text-sm text-zinc-300">3 meses</div>
                                                </div>
                                                <div>
                                                    <div className="text-[10px] text-zinc-500 font-mono uppercase mb-1">Tipo</div>
                                                    <div className="text-sm text-zinc-300">SaaS Platform</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Reveal>

                            </div>
                        </div>
                    </>
                )}

            </div>
        </section>
    );
}
