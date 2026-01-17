"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FileText, Waypoints, Target, CheckCircle } from 'lucide-react';

export default function ProcessHero() {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <section ref={targetRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black pb-20 pt-32">

            {/* Dynamic Background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Radial Gradient Glow */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-avenix-cyan/10 rounded-full blur-[120px] opacity-20" />

                {/* Grid */}
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <motion.div
                style={{ opacity, scale, y }}
                className="container mx-auto px-4 relative z-10 text-center"
            >
                {/* Badge */}


                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-none"
                >
                    Método de <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-cyan via-white to-avenix-cyan">
                        Operações.
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="text-gray-400 text-xl md:text-2xl max-w-3xl mx-auto mb-16 font-light leading-relaxed"
                >
                    Não acreditamos em "sorte". A nossa implementação segue um rastro rigoroso de <span className="text-white font-medium">diagnóstico, engenharia e validação</span>.
                </motion.p>

                {/* Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8, type: "spring" }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
                >
                    {[
                        { icon: Waypoints, label: "Mapeamento", color: "text-avenix-orange", border: "border-avenix-orange/20" },
                        { icon: FileText, label: "Documentação", color: "text-white", border: "border-white/20" },
                        { icon: Target, label: "Execução", color: "text-avenix-cyan", border: "border-avenix-cyan/20" },
                        { icon: CheckCircle, label: "Validação", color: "text-avenix-blue", border: "border-avenix-blue/40" },
                    ].map((item, i) => (
                        <div key={i} className={`p-4 rounded-2xl bg-white/5 border ${item.border} backdrop-blur-sm flex flex-col items-center gap-3 hover:bg-white/10 transition-colors`}>
                            <item.icon className={`w-6 h-6 ${item.color}`} />
                            <span className="text-gray-300 text-sm font-medium">{item.label}</span>
                        </div>
                    ))}
                </motion.div>

            </motion.div>
            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-gray-500 flex flex-col items-center gap-2"
                >
                    <div className="w-px h-12 bg-gradient-to-b from-transparent via-avenix-cyan to-transparent" />
                    <span className="text-[10px] uppercase tracking-widest opacity-90">Explorar Método</span>
                </motion.div>
            </div>
        </section>
    );
}
