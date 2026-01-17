import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck, Zap, ArrowRight, Laptop2, Rocket, Globe } from 'lucide-react';

export default function Partnership() {
    return (
        <section className="py-24 bg-black relative overflow-hidden border-y border-white/5">

            {/* Background Texture - subtly tech */}
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none mix-blend-overlay" />
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-avenix-blue/20 to-transparent rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-7xl relative z-10">

                {/* Section Header */}
                <div className="text-center mb-16">

                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Equipados pelos <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-cyan to-white">Melhores.</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Resultados imensuráveis exigem ferramentas de elite. <br />
                        A nossa equipa opera com tecnologia fornecida pelos maiores especialistas internacionais.
                    </p>
                </div>

                {/* The "Elite Partner" Showcase Card */}
                <div className="relative max-w-5xl mx-auto">

                    {/* Glassmorphism Container */}
                    <div className="relative bg-zinc-900/40 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-avenix-cyan/30 transition-colors duration-500 group">

                        <div className="grid grid-cols-1 md:grid-cols-12 gap-0">

                            {/* Left: Brand Visuals (The "Face" of the partner) */}
                            <div className="md:col-span-5 bg-gradient-to-br from-avenix-blue/50 to-black p-10 md:p-14 flex flex-col items-center justify-center relative border-b md:border-b-0 md:border-r border-white/5">
                                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                                {/* Logo Integration */}
                                <div className="relative w-32 h-32 mb-6 group-hover:scale-105 transition-transform duration-500">
                                    <Image
                                        src="/aspireverse-logo.png"
                                        alt="Aspireverse"
                                        fill
                                        className="object-contain drop-shadow-[0_0_25px_rgba(0,212,255,0.2)]"
                                    />
                                </div>

                                <div className="text-center relative z-10">
                                    <h3 className="text-2xl font-bold text-white tracking-tight">ASPIREVERSE</h3>
                                    <p className="text-avenix-cyan/80 text-xs font-bold tracking-[0.2em] uppercase mt-2">London • United Kingdom</p>
                                </div>

                                <div className="mt-8 flex flex-col items-center gap-6 w-full px-4">
                                    {/* Badge */}
                                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-avenix-cyan/10 border border-avenix-cyan/20 text-avenix-cyan text-[10px] font-bold uppercase tracking-wider">
                                        <ShieldCheck className="w-3 h-3" />
                                        Official Tech Supplier
                                    </span>

                                    {/* Alliance Seal */}
                                    <div className="relative group cursor-default w-full">
                                        <div className="absolute inset-0 bg-gradient-to-r from-avenix-cyan/20 via-white/5 to-avenix-cyan/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                                        <div className="relative flex flex-col items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-avenix-cyan/30 transition-colors">

                                            {/* Row 1: Countries & Flags */}
                                            <div className="flex items-center gap-4 text-[10px] font-bold text-white uppercase tracking-widest w-full justify-center">
                                                <div className="flex items-center gap-2">
                                                    <img
                                                        src="https://flagcdn.com/w40/gb.png"
                                                        alt="UK"
                                                        className="w-4 h-auto rounded-[2px] opacity-80"
                                                    />
                                                    <span className="text-avenix-cyan/80">Reino Unido</span>
                                                </div>

                                                {/* Connector */}
                                                <div className="flex gap-1 opacity-30">
                                                    <span className="w-0.5 h-0.5 rounded-full bg-white" />
                                                    <span className="w-0.5 h-0.5 rounded-full bg-white" />
                                                    <span className="w-0.5 h-0.5 rounded-full bg-white" />
                                                </div>

                                                <div className="flex items-center gap-2">
                                                    <span className="text-avenix-cyan/80">Angola</span>
                                                    <img
                                                        src="https://flagcdn.com/w40/ao.png"
                                                        alt="Angola"
                                                        className="w-4 h-auto rounded-[2px] opacity-80"
                                                    />
                                                </div>
                                            </div>

                                            {/* Row 2: Tagline */}
                                            <div className="flex items-center gap-2">
                                                <span className="h-px w-6 bg-gradient-to-r from-transparent to-white/20"></span>
                                                <span className="text-xs md:text-sm font-medium text-white tracking-wide italic bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                                                    "De mãos dadas"
                                                </span>
                                                <span className="h-px w-6 bg-gradient-to-l from-transparent to-white/20"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: The Capability / "What they give us" */}
                            <div className="md:col-span-7 p-10 md:p-14 flex flex-col justify-center">

                                <h4 className="text-xl font-bold text-white mb-6">
                                    Infraestrutura de Alta Performance
                                </h4>

                                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                                    A ASPIREVERSE fornece à AVENIX os motores de computação, sistemas de segurança e arquitetura de servidores que utilizamos para escalar os projetos dos nossos clientes em Angola.
                                </p>

                                {/* Tools Grid - "What we get access to" */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="mt-1"><Laptop2 className="w-4 h-4 text-avenix-cyan" /></div>
                                        <div>
                                            <div className="text-white text-xs font-bold mb-0.5">Software Customizado</div>
                                            <div className="text-[10px] text-gray-500">Desenvolvimento de elite.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="mt-1"><Rocket className="w-4 h-4 text-avenix-cyan" /></div>
                                        <div>
                                            <div className="text-white text-xs font-bold mb-0.5">Deploy em 8 Semanas</div>
                                            <div className="text-[10px] text-gray-500">Velocidade de mercado.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="mt-1"><ShieldCheck className="w-4 h-4 text-avenix-cyan" /></div>
                                        <div>
                                            <div className="text-white text-xs font-bold mb-0.5">Segurança Militar</div>
                                            <div className="text-[10px] text-gray-500">Protocolos AES-256.</div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5">
                                        <div className="mt-1"><Zap className="w-4 h-4 text-avenix-cyan" /></div>
                                        <div>
                                            <div className="text-white text-xs font-bold mb-0.5">Escala Ilimitada</div>
                                            <div className="text-[10px] text-gray-500">Cloud Architecture.</div>
                                        </div>
                                    </div>
                                </div>



                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
