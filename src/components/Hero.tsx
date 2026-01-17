import Link from 'next/link';

export default function Hero() {
    return (
        <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden selection:bg-avenix-orange/30">

            {/* 1. ATMOSPHERE LAYER (Video Background) */}
            <div className="absolute inset-0 z-0 bg-black">
                {/* Noise Texture - slightly reduced for clearer text */}
                <div className="absolute inset-0 opacity-40 mix-blend-overlay z-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-150 contrast-150" />

                {/* Video Iframe - 110% ensures full coverage without cutting slogan */}
                <div className="absolute top-[40%] md:top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[135%] h-[135%] md:w-[110%] md:h-[110%] pointer-events-none grayscale-[10%] opacity-70">
                    <iframe
                        src="https://player.vimeo.com/video/1153910066?background=1&autoplay=1&loop=1&muted=1&quality=1080p&dnt=1"
                        className="w-full h-full"
                        allow="autoplay; fullscreen"
                        style={{ border: 'none' }}
                    />
                </div>

                {/* Smart Gradients - Darker center for text, transparent bottom for slogan */}
                <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/0 via-black/50 to-black/40" />
                <div className="absolute inset-0 z-20 bg-gradient-to-r from-black/50 via-black/20 to-black/50" />

                {/* Radial vignetting to focus center */}
                <div className="absolute inset-0 z-20 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
            </div>

            {/* 2. CONTENT LAYER */}
            <div className="relative z-30 container mx-auto px-4 text-center max-w-6xl pt-16">

                {/* Premium Glass Label */}


                {/* Headline - Improved Contrast & Shadow */}
                <h1 className="text-4xl md:text-7xl lg:text-9xl font-bold text-white tracking-tighter leading-[1.05] mb-8 drop-shadow-[0_4px_4px_rgba(0,0,0,0.5)]">
                    Sistemas que <br className="md:hidden" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-gray-300 drop-shadow-sm">
                        escalam negócios.
                    </span>
                </h1>

                {/* Tagline - Better separation */}
                <p className="text-2xl md:text-3xl text-gray-300 font-light tracking-wide mb-14 max-w-4xl mx-auto drop-shadow-md">
                    Automação, infraestrutura digital e crescimento. <br />
                    <span className="text-white font-medium">Sem improviso.</span>
                </p>

                {/* Glass Button CTA */}
                <div className="flex flex-col items-center gap-8">
                    <Link
                        href="/diagnostico"
                        className="group relative inline-flex items-center justify-center px-14 py-6 text-lg font-bold text-white bg-white/5 border border-white/10 backdrop-blur-md rounded-full overflow-hidden transition-all duration-500 hover:bg-white/10 hover:scale-105 hover:border-white/20 shadow-[0_0_60px_rgba(255,255,255,0.05)]"
                    >
                        <span className="absolute inset-0 bg-gradient-to-r from-avenix-orange/80 to-orange-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                        <span className="absolute inset-0 bg-gradient-to-r from-avenix-orange to-orange-600 opacity-80 group-hover:opacity-100 transition-opacity duration-500" />

                        <span className="relative z-10 flex items-center gap-3">
                            Iniciar Diagnóstico
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </Link>

                </div>
            </div>

            {/* Scroll Indicator - Minimalist */}
            {/* Scroll Indicator - Minimalist */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30 opacity-60">
                <div className="flex flex-col items-center gap-3 animate-bounce">
                    <span className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/50">Explorar</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white/50 to-transparent" />
                </div>
            </div>

        </section>
    );
}
