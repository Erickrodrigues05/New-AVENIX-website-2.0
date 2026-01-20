"use client";
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const menuVariants = {
        hidden: {
            x: "100%",
            transition: {
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1] as any // Snappier "ease-out" feel
            }
        },
        visible: {
            x: "0%",
            transition: {
                duration: 0.5,
                ease: [0.32, 0.72, 0, 1] as any
            }
        },
        exit: {
            x: "100%",
            transition: {
                duration: 0.4,
                ease: [0.32, 0.72, 0, 1] as any
            }
        }
    };

    const navLinks = [
        { name: "Sistemas", href: "/sistema" },
        { name: "Operação", href: "/como-funciona" },
        { name: "Resultados", href: "/work" },
        { name: "Sobre Nós", href: "/about" },
        { name: "Comunidade", href: "/community" },
    ];

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-black/60 backdrop-blur-xl transition-all duration-300">
                <div className="container mx-auto flex items-center justify-between h-20 px-6">
                    {/* Logo */}
                    <Link href="/" className="hover:opacity-80 transition-opacity z-50 relative" onClick={() => setIsOpen(false)}>
                        <Image src="/avenix-logo.png" alt="AVENIX" width={180} height={60} className="h-12 md:h-16 w-auto object-contain" />
                    </Link>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
                        {navLinks.map(link => (
                            <Link key={link.href} href={link.href} className="hover:text-avenix-orange transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Desktop CTA Button */}
                    <div className="hidden md:flex">
                        <Link href="/diagnostico" className="btn btn-primary text-sm py-2 px-6 shadow-[0_0_20px_rgba(215,117,68,0.4)]">
                            Solicitar Diagnóstico
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-white p-2 z-50 relative focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    >
                        {isOpen ? <X className="w-8 h-8 text-avenix-orange" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Cinematic Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.3 } }}
                        className="fixed inset-0 z-40 bg-black/95 backdrop-blur-3xl md:hidden flex flex-col justify-center px-8"
                    >
                        {/* Decorative Background Elements */}
                        <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-avenix-orange/10 rounded-full blur-[120px] pointer-events-none" />
                        <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-avenix-cyan/10 rounded-full blur-[120px] pointer-events-none" />

                        <div className="flex flex-col gap-6 relative z-10">
                            {navLinks.map((link, i) => (
                                <motion.div
                                    key={link.href}
                                    custom={i}
                                    variants={menuVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                >
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        className="text-4xl font-bold text-white hover:text-avenix-orange transition-colors tracking-tight flex items-center gap-4 group"
                                    >
                                        <span className="w-2 h-2 rounded-full bg-white/20 group-hover:bg-avenix-orange transition-colors" />
                                        {link.name}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                custom={navLinks.length}
                                variants={menuVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="mt-8"
                            >
                                <Link
                                    href="/diagnostico"
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn-primary w-full py-5 text-lg flex items-center justify-center gap-3 shadow-[0_0_30px_rgba(215,117,68,0.3)]"
                                >
                                    Diagnóstico Gratuito
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                                <p className="text-center text-gray-500 text-sm mt-4">
                                    © 2024 Avenix Angola.
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
