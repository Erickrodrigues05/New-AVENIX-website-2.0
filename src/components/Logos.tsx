"use client";
import { Globe, Layers, Command, Cpu, Box, Activity } from "lucide-react";
import { Reveal } from "./Reveal";

const logos = [
    { name: "TerraNostra", icon: Globe },
    { name: "TechFlow", icon: Layers },
    { name: "NEXUS", icon: Command },
    { name: "Vertex", icon: Cpu },
    { name: "GlobalNet", icon: Activity },
    { name: "CubeSystems", icon: Box },
];

export default function Logos() {
    return (
        <section className="py-20 bg-black border-y border-white/5 overflow-hidden">
            <div className="container mx-auto px-4">
                <Reveal>
                    <p className="text-center text-gray-500 text-sm font-medium tracking-[0.2em] uppercase mb-12">
                        Impulsionando a inovação em <span className="text-avenix-orange">Angola e no Mundo</span>
                    </p>
                </Reveal>

                <div className="relative flex overflow-x-hidden group">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

                    {/* Marquee Animation */}
                    <div className="flex animate-marquee-standard-v2 whitespace-nowrap gap-16 md:gap-32 items-center">
                        {/* Repeat logos twice for seamless loop */}
                        {[...logos, ...logos, ...logos].map((logo, index) => (
                            <div key={index} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default">
                                <logo.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                                <span className="text-xl md:text-2xl font-bold tracking-tight">{logo.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
