import Link from 'next/link';

export default function Contact() {
    return (
        <section id="contact" className="py-32 bg-transparent relative overflow-hidden">

            {/* Ambient Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-avenix-orange/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                <div className="max-w-4xl mx-auto bg-zinc-900/50 backdrop-blur-2xl border border-white/10 rounded-[30px] p-12 md:p-16 text-center relative overflow-hidden group hover:border-white/20 transition-colors duration-500">

                    {/* Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />



                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                        Está pronto para <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">liderar o seu mercado?</span>
                    </h2>

                    <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light">
                        Uma conversa estratégica de 20 minutos para alinhar a sua visão com a nossa tecnologia. <span className="text-white font-medium">Sem compromisso, apenas clareza.</span>
                    </p>

                    <div className="flex flex-col items-center gap-6">
                        <Link
                            href="/diagnostico"
                            className="group relative inline-flex items-center justify-center px-12 py-5 text-lg font-bold text-white bg-avenix-orange rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(215,117,68,0.4)]"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                            <span className="relative z-10 flex items-center gap-3">
                                Solicitar Diagnóstico Oficial
                                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </span>
                        </Link>

                        <div className="flex items-center gap-6 text-sm text-gray-500">
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@avenix.org
                            </span>
                            <span className="w-1 h-1 rounded-full bg-gray-700" />
                            <span className="flex items-center gap-2">
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Luanda, Angola
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

