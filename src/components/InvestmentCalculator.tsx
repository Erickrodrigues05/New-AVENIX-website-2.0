"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Check, Server, Layout, Gem, Bot, BrainCircuit, Sparkles,
    Rocket, BarChart3, Video, PenTool, Search,
    Smartphone, Database, Globe, ShoppingCart, MessageSquare,
    Zap, Instagram, Megaphone, ArrowRight, Activity
} from 'lucide-react';
import Link from 'next/link';

// --- DATA STRUCTURES ---

// 1. INFRAESTRUTURA (White/Gray)
const infraOptions = [
    {
        id: "landing-page",
        name: "Landing Page",
        description: "Página única de alta conversão.",
        setupPrice: 380000,
        monthlyPrice: 38500,
        icon: Layout
    },
    {
        id: "website-inst",
        name: "Website Institucional",
        description: "Portal corporativo completo.",
        setupPrice: 580000,
        monthlyPrice: 58900,
        icon: Globe
    },
    {
        id: "webapp",
        name: "Web App / SaaS",
        description: "Painéis e sistemas complexos.",
        setupPrice: 850000,
        monthlyPrice: 85000,
        icon: Database
    },
    {
        id: "mobile-app",
        name: "App Mobile (iOS/And)",
        description: "Aplicativo nativo Premium.",
        setupPrice: 15000000,
        monthlyPrice: 189900,
        icon: Smartphone
    }
];

const infraAddons = [
    { id: "payments", name: "Gateway Pagamentos", price: 120000, monthly: 55000 },
    { id: "cms", name: "Painel Gestão (CMS)", price: 169000, monthly: 0 },
    { id: "members", name: "Área de Membros", price: 170000, monthly: 25000 },
    { id: "blog", name: "Blog Dinâmico", price: 125000, monthly: 0 },
    { id: "3d", name: "Experiência 3D", price: 250000, monthly: 0 },
    { id: "i18n", name: "Multi-idioma", price: 80000, monthly: 9000 },
];

// 2. AUTOMAÇÃO (Orange)
const autoOptions = [
    {
        id: "agent-faq",
        name: "Agente de Triagem",
        description: "Tira dúvidas e filtra leads 24/7.",
        setupPrice: 180000,
        monthlyPrice: 150000,
        icon: MessageSquare
    },
    {
        id: "agent-sales",
        name: "Agente de Vendas",
        description: "Qualifica e agenda reuniões.",
        setupPrice: 350000,
        monthlyPrice: 280000,
        icon: Bot
    },
    {
        id: "agent-ops",
        name: "Agente Operacional",
        description: "Suporte técnico e processos.",
        setupPrice: 600000,
        monthlyPrice: 450000,
        icon: BrainCircuit
    }
];

const autoAddons = [
    { id: "whatsapp", name: "WhatsApp API Oficial", price: 50000, monthly: 35000 },
    { id: "crm", name: "Integração CRM Premium", price: 80000, monthly: 25000 },
    { id: "voice", name: "Voz (Áudio <-> Texto)", price: 95000, monthly: 55000 },
    { id: "vision", name: "Visão Computacional", price: 120000, monthly: 85000 },
    { id: "calendar", name: "Agendamento Inteligente", price: 65000, monthly: 20000 },
    { id: "active", name: "Nutrição Automática", price: 75000, monthly: 45000 },
];

// 3. ESCALA (Cyan)
// No Core options, just a list of services
const scaleServices = [
    {
        id: "ads-traffic",
        name: "Gestão de Tráfego",
        description: "Meta & Google Ads",
        setupPrice: 100000,
        monthlyPrice: 200000,
        icon: Activity
    },
    {
        id: "social-media",
        name: "Gestão Social Media",
        description: "Posts e Comunidade",
        setupPrice: 0,
        monthlyPrice: 250000,
        icon: Instagram
    },
    {
        id: "content-creation",
        name: "Criação Conteúdo",
        description: "Vídeos curtos/Design",
        setupPrice: 0,
        monthlyPrice: 350000,
        icon: Video
    },
    {
        id: "copy-email",
        name: "Copy & Email Mkt",
        description: "Fúnis de Venda",
        setupPrice: 55000,
        monthlyPrice: 120000,
        icon: PenTool
    },
    {
        id: "seo",
        name: "SEO Técnico",
        description: "Rankeamento Google",
        setupPrice: 80000,
        monthlyPrice: 180000,
        icon: Search
    },
    {
        id: "bi",
        name: "Analytics & BI",
        description: "Relatórios de Dados",
        setupPrice: 60000,
        monthlyPrice: 100000,
        icon: BarChart3
    },
];

export default function InvestmentCalculator() {
    // STATE
    // Infra
    const [infraCore, setInfraCore] = useState("");
    const [infraSelection, setInfraSelection] = useState<string[]>([]);

    // Auto
    const [autoCoreId, setAutoCoreId] = useState<string>("");
    const [autoSelection, setAutoSelection] = useState<string[]>([]);

    // Scale
    const [scaleSelection, setScaleSelection] = useState<string[]>([]);

    // FORM STATE (Step 4)
    const [formStep4, setFormStep4] = useState({
        company: "",
        nif: "",
        repName: "",
        email: "",
        phone: ""
    });

    // UI State: Active Accordion Section (default: 1 = Infra)
    const [activeSection, setActiveSection] = useState<number | null>(1);


    // CALCULATIONS
    const [totals, setTotals] = useState({ setup: 0, monthly: 0 });
    // Also calculate totals per section for the minimized view
    const [sectionTotals, setSectionTotals] = useState({
        infra: { setup: 0, monthly: 0 },
        auto: { setup: 0, monthly: 0 },
        scale: { setup: 0, monthly: 0 }
    });

    useEffect(() => {
        let setup = 0;
        let monthly = 0;

        let infraS = 0; let infraM = 0;
        let autoS = 0; let autoM = 0;
        let scaleS = 0; let scaleM = 0;

        // 1. Infra
        if (infraCore) {
            const core = infraOptions.find(i => i.id === infraCore);
            if (core) { infraS += core.setupPrice; infraM += core.monthlyPrice; }
            infraSelection.forEach(id => {
                const addon = infraAddons.find(a => a.id === id);
                if (addon) { infraS += addon.price; infraM += addon.monthly; }
            });
        }

        // 2. Auto
        if (autoCoreId) {
            const core = autoOptions.find(i => i.id === autoCoreId);
            if (core) { autoS += core.setupPrice; autoM += core.monthlyPrice; }
            autoSelection.forEach(id => {
                const addon = autoAddons.find(a => a.id === id);
                if (addon) { autoS += addon.price; autoM += addon.monthly; }
            });
        }

        // 3. Scale
        scaleSelection.forEach(id => {
            const srv = scaleServices.find(s => s.id === id);
            if (srv) { scaleS += srv.setupPrice; scaleM += srv.monthlyPrice; }
        });

        setup = infraS + autoS + scaleS;
        monthly = infraM + autoM + scaleM;

        setTotals({ setup, monthly });
        setSectionTotals({
            infra: { setup: infraS, monthly: infraM },
            auto: { setup: autoS, monthly: autoM },
            scale: { setup: scaleS, monthly: scaleM }
        });

    }, [infraCore, infraSelection, autoCoreId, autoSelection, scaleSelection]);


    // HANDLERS
    const toggleInfraAddon = (id: string) => {
        setInfraSelection(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleAutoAddon = (id: string) => {
        setAutoSelection(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleScaleService = (id: string) => {
        setScaleSelection(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);
    };

    const toggleSection = (idx: number) => {
        setActiveSection(prev => prev === idx ? null : idx);
    };

    const formatCurrency = (val: number) => val.toLocaleString('pt-AO').replace(/,/g, ' ');

    return (
        <section className="py-24 pb-32 lg:pb-24 bg-black relative border-t border-white/5" id="simulador">
            <div className="container mx-auto px-4 max-w-7xl">

                <div className="mb-16 text-center">
                    <span className="text-avenix-orange font-bold tracking-widest uppercase text-xs mb-3 block">Calculadora de Investimentos</span>
                    <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                        Construa a sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-avenix-orange via-white to-avenix-cyan">Máquina Digital.</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg font-light leading-relaxed">
                        Selecione as peças fundamentais para cada fase do seu crescimento.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                    {/* --- LEFT COLUMN: BUILDER (8 cols) --- */}
                    <div className="lg:col-span-8 space-y-6">

                        {/* 1. INFRAESTRUTURA ACCORDION */}
                        <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${activeSection === 1 ? 'bg-zinc-900/40 border-white/20 shadow-2xl shadow-white/5' : 'bg-black border-white/10 hover:border-white/20'}`}>

                            {/* HEADER */}
                            <div
                                onClick={() => toggleSection(1)}
                                className="p-6 md:p-8 cursor-pointer flex items-center justify-between group select-none"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${activeSection === 1 ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-500 border-white/10 group-hover:bg-white/10 group-hover:text-white'}`}>
                                        <Layout className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Passo 01</div>
                                        <h3 className={`text-2xl font-bold transition-colors ${activeSection === 1 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Infraestrutura</h3>
                                        {activeSection !== 1 && infraCore && (
                                            <div className="text-sm text-white/70 mt-1 flex items-center gap-2">
                                                <Check className="w-3 h-3 text-avenix-orange" />
                                                {infraOptions.find(i => i.id === infraCore)?.name} selecionado
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === 1 ? 'rotate-180 bg-white/10' : ''}`}>
                                    <ArrowRight className={`w-5 h-5 transition-colors ${activeSection === 1 ? 'text-white' : 'text-gray-600'}`} />
                                </div>
                            </div>

                            {/* CONTENT (EXPANDABLE) */}
                            <AnimatePresence>
                                {activeSection === 1 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/5">
                                            <div className="py-6">
                                                <p className="text-gray-400 text-sm mb-6">Comece pela base. Onde os seus clientes vão aterrar?</p>

                                                {/* Core Selector */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                                                    {infraOptions.map(opt => (
                                                        <div
                                                            key={opt.id}
                                                            onClick={() => setInfraCore(prev => prev === opt.id ? "" : opt.id)}
                                                            className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${infraCore === opt.id
                                                                ? 'bg-white text-black border-white shadow-xl scale-[1.02]'
                                                                : 'bg-black border-white/10 hover:border-white/30 text-gray-400 hover:text-white'
                                                                }`}
                                                        >
                                                            <div className="flex justify-between items-start mb-2">
                                                                <opt.icon className={`w-6 h-6 ${infraCore === opt.id ? 'text-black' : 'text-current'}`} />
                                                                {infraCore === opt.id && <div className="w-5 h-5 bg-black text-white rounded-full flex items-center justify-center"><Check className="w-3 h-3" /></div>}
                                                            </div>
                                                            <div className="font-bold text-lg mb-1 leading-tight">{opt.name}</div>
                                                            <div className={`text-xs mb-3 ${infraCore === opt.id ? 'text-gray-600' : 'text-gray-500'}`}>{opt.description}</div>
                                                            <div className={`text-[10px] uppercase font-bold tracking-wider ${infraCore === opt.id ? 'text-black/60' : 'text-gray-700'}`}>
                                                                Setup: {formatCurrency(opt.setupPrice)} Kz
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Addons (Only Show if Core Selected) */}
                                                {infraCore && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="bg-black/40 rounded-2xl p-6 border border-white/10"
                                                    >
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="h-px w-8 bg-white/20"></div>
                                                            <div className="text-[10px] font-bold text-white uppercase tracking-widest">Funcionalidades Extras</div>
                                                            <div className="h-px flex-1 bg-white/20"></div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {infraAddons.map(addon => (
                                                                <div
                                                                    key={addon.id}
                                                                    onClick={() => toggleInfraAddon(addon.id)}
                                                                    className={`cursor-pointer px-4 py-3 rounded-xl border text-xs font-bold transition-all select-none flex items-center gap-2 ${infraSelection.includes(addon.id)
                                                                        ? 'bg-white/20 text-white border-white/40 shadow-lg'
                                                                        : 'bg-zinc-900 border-white/5 text-gray-500 hover:border-white/20 hover:text-gray-300'
                                                                        }`}
                                                                >
                                                                    {infraSelection.includes(addon.id) && <Check className="w-3 h-3" />}
                                                                    {addon.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>

                                            {/* Navigation Helper */}
                                            <div className="flex justify-end pt-4 border-t border-white/5">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); toggleSection(2); }}
                                                    className="text-xs font-bold uppercase tracking-widest text-white hover:text-avenix-orange transition-colors flex items-center gap-2"
                                                >
                                                    Próximo Passo: Automação <ArrowRight className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* 2. AUTOMATION ACCORDION */}
                        <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${activeSection === 2 ? 'bg-zinc-900/40 border-avenix-orange/30 shadow-2xl shadow-avenix-orange/5' : 'bg-black border-white/10 hover:border-avenix-orange/20'}`}>

                            <div
                                onClick={() => toggleSection(2)}
                                className="p-6 md:p-8 cursor-pointer flex items-center justify-between group select-none"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${activeSection === 2 ? 'bg-avenix-orange text-white border-avenix-orange' : 'bg-avenix-orange/5 text-avenix-orange/50 border-avenix-orange/10 group-hover:bg-avenix-orange/10 group-hover:text-avenix-orange'}`}>
                                        <Bot className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs font-bold text-avenix-orange/50 uppercase tracking-widest mb-1">Passo 02</div>
                                        <h3 className={`text-2xl font-bold transition-colors ${activeSection === 2 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Automação IA</h3>

                                        {/* Minimized Summary */}
                                        {activeSection !== 2 && autoCoreId && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <span className="text-[10px] font-bold uppercase bg-avenix-orange/20 text-avenix-orange px-2 py-1 rounded-full border border-avenix-orange/20">
                                                    {autoOptions.find(i => i.id === autoCoreId)?.name}
                                                </span>
                                                {autoSelection.length > 0 && (
                                                    <span className="text-[10px] font-bold uppercase bg-white/5 text-gray-400 px-2 py-1 rounded-full border border-white/5">
                                                        +{autoSelection.length} extras
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === 2 ? 'rotate-180 bg-avenix-orange/10' : ''}`}>
                                    <ArrowRight className={`w-5 h-5 transition-colors ${activeSection === 2 ? 'text-avenix-orange' : 'text-gray-600'}`} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeSection === 2 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/5">
                                            <div className="py-6">
                                                <p className="text-gray-400 text-sm mb-6">Adicione inteligência para reduzir custos e aumentar vendas.</p>

                                                {/* Core Selector */}
                                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                                    {autoOptions.map(opt => (
                                                        <div
                                                            key={opt.id}
                                                            onClick={() => setAutoCoreId(prev => prev === opt.id ? "" : opt.id)}
                                                            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 relative overflow-hidden group ${autoCoreId === opt.id
                                                                ? 'bg-avenix-orange text-white border-avenix-orange shadow-[0_0_30px_rgba(215,117,68,0.4)] scale-[1.02] z-10'
                                                                : 'bg-black/40 border-white/10 hover:border-avenix-orange/40 text-gray-400 hover:text-white hover:bg-avenix-orange/5'
                                                                }`}
                                                        >
                                                            <div className="flex justify-between items-start mb-4">
                                                                <opt.icon className={`w-6 h-6 ${autoCoreId === opt.id ? 'text-white' : 'text-current'}`} />
                                                                {autoCoreId === opt.id && <div className="w-5 h-5 bg-black/20 text-white rounded-full flex items-center justify-center"><Check className="w-3 h-3" /></div>}
                                                            </div>
                                                            <div className="font-bold text-lg mb-1 leading-tight">{opt.name}</div>
                                                            <div className={`text-xs mb-4 ${autoCoreId === opt.id ? 'text-white/80' : 'text-gray-500'}`}>{opt.description}</div>
                                                            <div className={`text-[10px] uppercase font-bold tracking-wider rounded-lg inline-block px-2 py-1 ${autoCoreId === opt.id ? 'bg-black/20 text-white' : 'bg-white/5 text-gray-500'}`}>
                                                                Mensal: {formatCurrency(opt.monthlyPrice)} Kz
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>

                                                {/* Addons */}
                                                {autoCoreId && (
                                                    <motion.div
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        className="bg-zinc-900/50 rounded-2xl p-6 border border-avenix-orange/10"
                                                    >
                                                        <div className="flex items-center gap-3 mb-4">
                                                            <div className="h-px w-8 bg-avenix-orange/20"></div>
                                                            <div className="text-[10px] font-bold text-avenix-orange uppercase tracking-widest">Módulos de Inteligência</div>
                                                            <div className="h-px flex-1 bg-avenix-orange/20 opacity-20"></div>
                                                        </div>
                                                        <div className="flex flex-wrap gap-2">
                                                            {autoAddons.map(addon => (
                                                                <div
                                                                    key={addon.id}
                                                                    onClick={() => toggleAutoAddon(addon.id)}
                                                                    className={`cursor-pointer px-4 py-3 rounded-xl border text-xs font-bold transition-all select-none flex items-center gap-2 ${autoSelection.includes(addon.id)
                                                                        ? 'bg-avenix-orange/20 text-avenix-orange border-avenix-orange/50 shadow-md shadow-avenix-orange/10'
                                                                        : 'bg-black/20 border-white/5 text-gray-500 hover:border-avenix-orange/30 hover:text-gray-300'
                                                                        }`}
                                                                >
                                                                    {autoSelection.includes(addon.id) && <Check className="w-3 h-3" />}
                                                                    {addon.name}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </motion.div>
                                                )}
                                            </div>
                                            {/* Navigation Helper */}
                                            <div className="flex justify-end pt-4 border-t border-white/5">
                                                <button
                                                    onClick={(e) => { e.stopPropagation(); toggleSection(3); }}
                                                    className="text-xs font-bold uppercase tracking-widest text-white hover:text-avenix-cyan transition-colors flex items-center gap-2 group/btn"
                                                >
                                                    Próximo Passo: Aceleração
                                                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>


                        {/* 3. SCALE ACCORDION */}
                        <div className={`rounded-3xl border overflow-hidden transition-all duration-500 relative ${activeSection === 3 ? 'bg-zinc-900/30 border-avenix-cyan/30 shadow-[0_0_50px_rgba(6,182,212,0.1)]' : 'bg-black border-white/10 hover:border-avenix-cyan/20'}`}>
                            {activeSection === 3 && <div className="absolute top-0 left-0 w-1 h-full bg-avenix-cyan"></div>}

                            <div
                                onClick={() => toggleSection(3)}
                                className="p-6 md:p-8 cursor-pointer flex items-center justify-between group select-none"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${activeSection === 3 ? 'bg-avenix-cyan text-black border-avenix-cyan shadow-lg shadow-avenix-cyan/20' : 'bg-avenix-cyan/5 text-avenix-cyan/50 border-avenix-cyan/10 group-hover:bg-avenix-cyan/10 group-hover:text-avenix-cyan'}`}>
                                        <Rocket className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs font-bold text-avenix-cyan/50 uppercase tracking-widest mb-1">Passo 03</div>
                                        <h3 className={`text-2xl font-bold transition-colors ${activeSection === 3 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Aceleração</h3>

                                        {/* Minimized Summary */}
                                        {activeSection !== 3 && scaleSelection.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                <span className="text-[10px] font-bold uppercase bg-avenix-cyan/20 text-avenix-cyan px-2 py-1 rounded-full border border-avenix-cyan/20">
                                                    {scaleSelection.length} serviços ativos
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === 3 ? 'rotate-180 bg-avenix-cyan/10' : ''}`}>
                                    <ArrowRight className={`w-5 h-5 transition-colors ${activeSection === 3 ? 'text-avenix-cyan' : 'text-gray-600'}`} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeSection === 3 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/5">
                                            <div className="py-6">
                                                <p className="text-gray-400 text-sm mb-6">Tráfego e crescimento para alavancar os seus resultados.</p>

                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                                                    {scaleServices.map(srv => (
                                                        <div
                                                            key={srv.id}
                                                            onClick={() => toggleScaleService(srv.id)}
                                                            className={`cursor-pointer p-6 rounded-2xl border transition-all duration-300 group ${scaleSelection.includes(srv.id)
                                                                ? 'bg-avenix-cyan/20 border-avenix-cyan/50 shadow-[0_0_30px_rgba(6,182,212,0.2)]'
                                                                : 'bg-black/40 border-white/10 hover:border-avenix-cyan/30 hover:bg-avenix-cyan/5'
                                                                }`}
                                                        >
                                                            <div className="flex items-center gap-3 mb-4">
                                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${scaleSelection.includes(srv.id) ? 'bg-avenix-cyan text-black' : 'bg-white/5 text-gray-600'}`}>
                                                                    <srv.icon className="w-4 h-4" />
                                                                </div>
                                                                <div className="font-bold text-white text-sm flex-1">{srv.name}</div>
                                                                {scaleSelection.includes(srv.id) && <Check className="w-4 h-4 text-avenix-cyan" />}
                                                            </div>

                                                            <div className="text-[10px] font-mono text-gray-500 uppercase tracking-wider pl-1">
                                                                {(srv.setupPrice > 0 && srv.monthlyPrice > 0)
                                                                    ? `${formatCurrency(srv.setupPrice)} Setup + ${formatCurrency(srv.monthlyPrice)}/mês`
                                                                    : srv.setupPrice > 0
                                                                        ? `Setup: ${formatCurrency(srv.setupPrice)}`
                                                                        : `Mensal: ${formatCurrency(srv.monthlyPrice)}`
                                                                }
                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* 4. IDENTIFICAÇÃO (Step 4) */}
                        <div className={`rounded-3xl border overflow-hidden transition-all duration-500 ${activeSection === 4 ? 'bg-zinc-900/40 border-white/20 shadow-2xl shadow-white/5' : 'bg-black border-white/10 hover:border-white/20'}`}>

                            <div
                                onClick={() => toggleSection(4)}
                                className="p-6 md:p-8 cursor-pointer flex items-center justify-between group select-none"
                            >
                                <div className="flex items-center gap-6">
                                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border transition-all duration-300 ${activeSection === 4 ? 'bg-white text-black border-white' : 'bg-white/5 text-gray-500 border-white/10 group-hover:bg-white/10 group-hover:text-white'}`}>
                                        <Smartphone className="w-6 h-6" />
                                    </div>
                                    <div className="text-left">
                                        <div className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">Passo 04</div>
                                        <h3 className={`text-2xl font-bold transition-colors ${activeSection === 4 ? 'text-white' : 'text-gray-400 group-hover:text-white'}`}>Identificação</h3>
                                        {activeSection !== 4 && formStep4.company && (
                                            <div className="text-sm text-white/70 mt-1 flex items-center gap-2">
                                                <Check className="w-3 h-3 text-avenix-orange" />
                                                Dados preenchidos
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeSection === 4 ? 'rotate-180 bg-white/10' : ''}`}>
                                    <ArrowRight className={`w-5 h-5 transition-colors ${activeSection === 4 ? 'text-white' : 'text-gray-600'}`} />
                                </div>
                            </div>

                            <AnimatePresence>
                                {activeSection === 4 && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                    >
                                        <div className="px-6 md:px-8 pb-8 pt-0 border-t border-white/5">
                                            <div className="py-6">
                                                <p className="text-gray-400 text-sm mb-6">Para validar a proposta, precisamos identificar a sua empresa.</p>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Nome da Empresa</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Ex: Grupo Avenix"
                                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-avenix-orange/50 outline-none transition-colors"
                                                            value={formStep4.company}
                                                            onChange={(e) => setFormStep4({ ...formStep4, company: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">NIF Empresarial</label>
                                                        <input
                                                            type="text"
                                                            placeholder="Ex: 541000..."
                                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-avenix-orange/50 outline-none transition-colors"
                                                            value={formStep4.nif}
                                                            onChange={(e) => setFormStep4({ ...formStep4, nif: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-1 mb-4">
                                                    <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Nome do Representante</label>
                                                    <input
                                                        type="text"
                                                        placeholder="Seu Nome Completo"
                                                        className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-avenix-orange/50 outline-none transition-colors"
                                                        value={formStep4.repName}
                                                        onChange={(e) => setFormStep4({ ...formStep4, repName: e.target.value })}
                                                    />
                                                </div>

                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Email Corporativo</label>
                                                        <input
                                                            type="email"
                                                            placeholder="email@empresa.com"
                                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-avenix-orange/50 outline-none transition-colors"
                                                            value={formStep4.email}
                                                            onChange={(e) => setFormStep4({ ...formStep4, email: e.target.value })}
                                                        />
                                                    </div>
                                                    <div className="space-y-1">
                                                        <label className="text-[10px] uppercase font-bold text-gray-500 tracking-widest">Telefone / WhatsApp</label>
                                                        <input
                                                            type="text"
                                                            placeholder="+244 9..."
                                                            className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-avenix-orange/50 outline-none transition-colors"
                                                            value={formStep4.phone}
                                                            onChange={(e) => setFormStep4({ ...formStep4, phone: e.target.value })}
                                                        />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* --- RIGHT COLUMN: SUMMARY (Sticky) --- */}
                    <div className="lg:col-span-4 lg:sticky lg:top-8">
                        <div className="bg-zinc-900/60 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl relative overflow-hidden">

                            {/* Decorative Blur */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-[60px] pointer-events-none" />

                            <div className="flex items-center gap-3 mb-8 relative z-10">
                                <Activity className="w-5 h-5 text-gray-400" />
                                <h3 className="text-xl font-bold text-white tracking-tight">Investimento Estimado</h3>
                            </div>

                            {/* ITEM LIST */}
                            <div className="space-y-6 mb-8 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                                {/* INFRA */}
                                {(sectionTotals.infra.setup > 0 || sectionTotals.infra.monthly > 0) && (
                                    <div className="border-l-2 border-white pl-4 py-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="text-[10px] uppercase text-white font-bold opacity-50">Infraestrutura</div>
                                            <div className="text-[10px] text-white/50">{formatCurrency(sectionTotals.infra.setup + sectionTotals.infra.monthly)} kz</div>
                                        </div>
                                        {infraCore && (
                                            <div className="text-sm font-medium text-white mb-1">
                                                {infraOptions.find(i => i.id === infraCore)?.name}
                                            </div>
                                        )}
                                        {infraSelection.length > 0 && (
                                            <div className="text-xs text-gray-500">
                                                + {infraSelection.map(id => infraAddons.find(a => a.id === id)?.name).join(", ")}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* AUTO */}
                                {(sectionTotals.auto.setup > 0 || sectionTotals.auto.monthly > 0) && (
                                    <div className="border-l-2 border-avenix-orange pl-4 py-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="text-[10px] uppercase text-avenix-orange font-bold opacity-80">Automação</div>
                                            <div className="text-[10px] text-avenix-orange/50">{formatCurrency(sectionTotals.auto.setup + sectionTotals.auto.monthly)} kz</div>
                                        </div>
                                        {autoCoreId && (
                                            <div className="text-sm font-medium text-white mb-1">
                                                {autoOptions.find(i => i.id === autoCoreId)?.name}
                                            </div>
                                        )}
                                        {autoSelection.length > 0 && (
                                            <div className="text-xs text-gray-500">
                                                + {autoSelection.map(id => autoAddons.find(a => a.id === id)?.name).join(", ")}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* SCALE */}
                                {(sectionTotals.scale.setup > 0 || sectionTotals.scale.monthly > 0) && (
                                    <div className="border-l-2 border-avenix-cyan pl-4 py-1">
                                        <div className="flex justify-between items-center mb-1">
                                            <div className="text-[10px] uppercase text-avenix-cyan font-bold opacity-80">Aceleração</div>
                                            <div className="text-[10px] text-avenix-cyan/50">{formatCurrency(sectionTotals.scale.setup + sectionTotals.scale.monthly)} kz</div>
                                        </div>
                                        <div className="text-sm font-medium text-white opacity-90">
                                            {scaleSelection.map(id => scaleServices.find(s => s.id === id)?.name).join(", ")}
                                        </div>
                                    </div>
                                )}

                                {(!infraCore && !autoCoreId && scaleSelection.length === 0) && (
                                    <div className="text-center py-8 text-gray-600 text-sm">
                                        Configure o seu ecossistema nos passos ao lado.
                                    </div>
                                )}
                            </div>

                            {/* TOTALS */}
                            <div className="space-y-4 mb-8 pt-6 border-t border-white/5">
                                <div className="flex justify-between items-center">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Setup Único</div>
                                    <div className="text-xl font-bold text-white">{formatCurrency(totals.setup)} <span className="text-xs font-normal text-gray-500">Kz</span></div>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-xs text-gray-500 uppercase tracking-widest">Mensalidade</div>
                                    <div className="text-xl font-bold text-avenix-cyan">{formatCurrency(totals.monthly)} <span className="text-xs font-normal text-gray-500">Kz/mês</span></div>
                                </div>
                            </div>

                            {/* CTA */}
                            <button
                                disabled={!formStep4.company || !formStep4.nif || !formStep4.repName || !formStep4.phone}
                                onClick={() => {
                                    // 1. Gather Cart Data (Re-used logic)
                                    const items = [
                                        // Infra
                                        infraCore && infraOptions.find(i => i.id === infraCore)?.name,
                                        ...infraSelection.map(id => infraAddons.find(a => a.id === id)?.name),
                                        // Auto
                                        autoCoreId && autoOptions.find(i => i.id === autoCoreId)?.name,
                                        ...autoSelection.map(id => autoAddons.find(a => a.id === id)?.name),
                                        // Scale
                                        ...scaleSelection.map(id => scaleServices.find(s => s.id === id)?.name)
                                    ].filter(Boolean);

                                    // 2. Build Message
                                    const message = `📋 *NOVA PROPOSTA VALIDADA (CALCULADORA)*
-----------------------------------
*🏢 CLIENTE*
Empresa: ${formStep4.company}
NIF: ${formStep4.nif}
Rep: ${formStep4.repName}
Contato: ${formStep4.phone} / ${formStep4.email}

*💰 INVESTIMENTO APROVADO*
Itens: ${items.join(", ")}
-----------------------------------
*Setup: ${formatCurrency(totals.setup)} Kz*
*Mensal: ${formatCurrency(totals.monthly)} Kz/mês*
-----------------------------------
*AGENDA:* Tenho interesse nesta configuração e gostaria de *agendar uma reunião* para validação técnica.`;

                                    // 3. Open WhatsApp
                                    window.open(`https://wa.me/244943634766?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className={`group w-full py-4 font-bold rounded-xl flex items-center justify-center gap-2 transition-all ${(!formStep4.company || !formStep4.nif || !formStep4.repName || !formStep4.phone)
                                    ? 'bg-zinc-800 text-gray-500 cursor-not-allowed opacity-50'
                                    : 'bg-white text-black hover:bg-gray-100 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]'
                                    }`}
                            >
                                {(!formStep4.company || !formStep4.nif) ? 'Preencha o Passo 4' : 'Validar Proposta'}
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>

                            {/* Secondary CTA: Discuss without validating */}
                            <button
                                disabled={!formStep4.company || !formStep4.nif || !formStep4.repName || !formStep4.phone}
                                onClick={() => {
                                    // 1. Gather Cart Data (Re-used logic)
                                    const items = [
                                        infraCore && infraOptions.find(i => i.id === infraCore)?.name,
                                        ...infraSelection.map(id => infraAddons.find(a => a.id === id)?.name),
                                        autoCoreId && autoOptions.find(i => i.id === autoCoreId)?.name,
                                        ...autoSelection.map(id => autoAddons.find(a => a.id === id)?.name),
                                        ...scaleSelection.map(id => scaleServices.find(s => s.id === id)?.name)
                                    ].filter(Boolean);

                                    // 2. Build Message
                                    const message = `💬 *DISCUSSÃO DE PROPOSTA (CALCULADORA)*
-----------------------------------
*🏢 CLIENTE*
Empresa: ${formStep4.company}
NIF: ${formStep4.nif}
Rep: ${formStep4.repName}
Contato: ${formStep4.phone} / ${formStep4.email}

*💰 INVESTIMENTO EM ANÁLISE*
Itens: ${items.join(", ")}
-----------------------------------
*Setup: ${formatCurrency(totals.setup)} Kz*
*Mensal: ${formatCurrency(totals.monthly)} Kz/mês*
-----------------------------------
*DÚVIDA:* Estou interessado nesta configuração mas gostaria de esclarecer alguns pontos antes de validar...`;

                                    window.open(`https://wa.me/244943634766?text=${encodeURIComponent(message)}`, '_blank');
                                }}
                                className={`w-full py-3 mt-3 text-xs font-bold uppercase tracking-wider rounded-xl transition-all flex items-center justify-center gap-2 group/discuss ${(!formStep4.company || !formStep4.nif || !formStep4.repName || !formStep4.phone)
                                    ? 'bg-zinc-800 text-gray-600 cursor-not-allowed border border-white/5'
                                    : 'bg-[#25D366] text-black hover:bg-[#20bd5a] hover:scale-[1.02] shadow-[0_0_20px_rgba(37,211,102,0.2)]'
                                    }`}
                            >
                                <svg viewBox="0 0 24 24" fill="currentColor" className={`w-4 h-4 transition-colors ${(!formStep4.company || !formStep4.nif || !formStep4.repName || !formStep4.phone) ? 'text-gray-600' : 'text-black'}`}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                                </svg>
                                Discutir Proposta
                            </button>
                            <p className="text-[10px] text-gray-500 text-center mt-4 border-t border-white/5 pt-3 leading-relaxed">
                                Entre em contacto com nossos <span className="text-white font-bold">Consultores Estratégicos</span> para ajustar e validar o seu investimento em detalhe.
                            </p>
                        </div>
                    </div>

                </div>

                {/* --- MOBILE STICKY FOOTER (Visible only on small screens) --- */}
                <div className="fixed bottom-0 left-0 right-0 p-4 bg-zinc-900/90 backdrop-blur-xl border-t border-white/10 z-30 lg:hidden flex items-center justify-between gap-4 safe-area-bottom">
                    <div className="flex flex-col">
                        <span className="text-[10px] uppercase text-gray-500 font-bold tracking-wider">Investimento Mensal</span>
                        <div className="text-xl font-bold text-avenix-cyan leading-none">
                            {formatCurrency(totals.monthly)} <span className="text-xs font-normal text-gray-400">Kz</span>
                        </div>
                        {totals.setup > 0 && <span className="text-[10px] text-gray-400">+ {formatCurrency(totals.setup)} setup</span>}
                    </div>

                    <button
                        disabled={!formStep4.company || !formStep4.nif}
                        onClick={() => {
                            // Re-use logic (duplicated for now for simplicity, ideally refactor to handler)
                            const items = [
                                infraCore && infraOptions.find(i => i.id === infraCore)?.name,
                                ...infraSelection.map(id => infraAddons.find(a => a.id === id)?.name),
                                autoCoreId && autoOptions.find(i => i.id === autoCoreId)?.name,
                                ...autoSelection.map(id => autoAddons.find(a => a.id === id)?.name),
                                ...scaleSelection.map(id => scaleServices.find(s => s.id === id)?.name)
                            ].filter(Boolean);

                            const message = `📋 *NOVA PROPOSTA VALIDADA (MOBILE)*
-----------------------------------
*🏢 CLIENTE*
Empresa: ${formStep4.company}
NIF: ${formStep4.nif}
Rep: ${formStep4.repName}
Contato: ${formStep4.phone} / ${formStep4.email}

*💰 INVESTIMENTO APROVADO*
Itens: ${items.join(", ")}
-----------------------------------
*Setup: ${formatCurrency(totals.setup)} Kz*
*Mensal: ${formatCurrency(totals.monthly)} Kz/mês*
-----------------------------------
Gostaria de avançar com esta configuração.`;
                            window.open(`https://wa.me/244943634766?text=${encodeURIComponent(message)}`, '_blank');
                        }}
                        className={`h-12 px-6 rounded-xl font-bold text-sm flex items-center gap-2 transition-all ${(!formStep4.company || !formStep4.nif)
                            ? 'bg-white/10 text-gray-500'
                            : 'bg-avenix-orange text-white shadow-[0_0_20px_rgba(215,117,68,0.4)]'
                            }`}
                    >
                        {(!formStep4.company || !formStep4.nif) ? 'Dados?' : 'Validar'}
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </div>
        </section>
    );
}
