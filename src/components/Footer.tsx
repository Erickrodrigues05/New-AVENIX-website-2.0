import Link from 'next/link';
import Image from 'next/image';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-transparent border-t border-white/5 pt-24 pb-12">
            <div className="container mx-auto px-4">



                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 border-t border-white/10 pt-16">
                    <div className="col-span-1 md:col-span-1">
                        <Link href="/" className="mb-6 block hover:opacity-80 transition-opacity">
                            <Image src="/avenix-logo.png" alt="AVENIX" width={120} height={40} className="h-8 w-auto object-contain" />
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed">
                            O seu parceiro em inovações digitais. Construímos sistemas inteligentes que trabalham por si.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Mapa</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-avenix-orange transition-colors">Início</Link></li>
                            <li><Link href="/sistema" className="hover:text-avenix-orange transition-colors">Sistema AVENIX</Link></li>
                            <li><Link href="/como-funciona" className="hover:text-avenix-orange transition-colors">Como Funciona</Link></li>
                            <li><Link href="/work" className="hover:text-avenix-orange transition-colors">Trabalho</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Empresa</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/about" className="hover:text-avenix-orange transition-colors">Sobre Nós</Link></li>
                            <li><Link href="/community" className="hover:text-avenix-orange transition-colors">Insights</Link></li>
                            <li><Link href="/diagnostico" className="hover:text-avenix-orange transition-colors">Diagnóstico</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-6">Conectar</h4>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-avenix-orange hover:text-white transition-all">
                                <Instagram className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-avenix-orange hover:text-white transition-all">
                                <Linkedin className="w-5 h-5" />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-avenix-orange hover:text-white transition-all">
                                <Twitter className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 mt-16 pt-8 text-center text-gray-600 text-xs">
                    © {new Date().getFullYear()} AVENIX. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    );
}
