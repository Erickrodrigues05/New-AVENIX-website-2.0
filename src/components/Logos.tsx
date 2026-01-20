"use client";
import Image from "next/image";
import { Layers, Command, Cpu, Box, Activity } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion } from "framer-motion";

type LogoItem =
    | { type: "icon"; name: string; icon: any }
    | { type: "image"; name: string; src: string };

const logos: LogoItem[] = [
    { name: "TerraNostra", type: "image", src: "/terranostra.png" },
    { name: "TechFlow", type: "icon", icon: Layers },
    { name: "NEXUS", type: "icon", icon: Command },
    { name: "Vertex", type: "icon", icon: Cpu },
    { name: "GlobalNet", type: "icon", icon: Activity },
    { name: "CubeSystems", type: "icon", icon: Box },
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

                <div className="relative overflow-hidden group w-full mask-linear-fade">
                    {/* Gradient Fade Edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10" />
                    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10" />

                    {/* Marquee Animation via Framer Motion */}
                    <div className="flex overflow-hidden">
                        <motion.div
                            className="flex gap-16 md:gap-32 items-center flex-nowrap pr-16 md:pr-32"
                            animate={{ x: "-50%" }}
                            transition={{
                                ease: "linear",
                                duration: 30,
                                repeat: Infinity
                            }}
                        >
                            {/* Duplicate strictly twice for perfect -50% loop */}
                            {[...logos, ...logos].map((logo, index) => (
                                <div key={index} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default shrink-0">
                                    {logo.type === "image" ? (
                                        <div className="h-14 md:h-20 w-auto relative flex items-center">
                                            <Image
                                                src={logo.src}
                                                alt={logo.name}
                                                width={250}
                                                height={100}
                                                className="h-full w-auto object-contain brightness-0 invert group-hover:brightness-0 group-hover:invert scale-125"
                                            />
                                        </div>
                                    ) : (
                                        <>
                                            <logo.icon className="w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                                            <span className="text-xl md:text-2xl font-bold tracking-tight">{logo.name}</span>
                                        </>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
