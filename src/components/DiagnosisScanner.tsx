"use client";

import { useState, useEffect } from "react";
import { Check, Loader2, ArrowRight, Building2, Users, Target, Briefcase, Globe, UserCheck, CreditCard, Layers, Calendar, Rocket, Lock } from "lucide-react";
import { Reveal } from "./Reveal";
import { motion, AnimatePresence } from "framer-motion";

// Wizard Steps: 0=Identity, 1=Operations, 2=Strategy, 3=Scanning, 4=Result
type WizardStep = 0 | 1 | 2 | 3 | 4;

export default function DiagnosisScanner() {
    const [step, setStep] = useState<WizardStep>(0);
    const [scanProgress, setScanProgress] = useState(0);

    // Enterprise Data
    const [formData, setFormData] = useState({
        // Identity
        company: "",
        nif: "",
        website: "",
        repName: "",
        repRole: "",
        // Operations
        sector: "",
        teamSize: "",
        currentStack: "",
        annualRevenue: "",
        // Strategy
        mainChallenge: "",
        growthGoal: "",
        budget: "",
        timeline: ""
    });

    // Investment Data from Calculator
    const [investmentData, setInvestmentData] = useState<any>(null);

    useEffect(() => {
        const cart = localStorage.getItem('avenix_investment_cart');
        if (cart) {
            setInvestmentData(JSON.parse(cart));
        }
    }, []);

    const scanningSteps = [
        "A validar NIF e dados empresariais...",
        "A analisar maturidade digital do sector...",
        "A calcular ineficiências operacionais...",
        "A projetar arquitetura de automação...",
        "Dossier Estratégico Gerado com Sucesso."
    ];

    // Simulation Logic
    useEffect(() => {
        if (step === 3) {
            if (scanProgress < scanningSteps.length - 1) {
                const timeout = setTimeout(() => {
                    setScanProgress(prev => prev + 1);
                }, 1200);
                return () => clearTimeout(timeout);
            } else {
                setTimeout(() => setStep(4), 1000); // Complete
            }
        }
    }, [step, scanProgress]);

    const handleNext = (e: React.FormEvent) => {
        e.preventDefault();
        setStep(prev => (prev + 1) as WizardStep);
    };

    const formatCurrency = (val: number) => val.toLocaleString('pt-AO').replace(/,/g, ' ');

    const getWhatsAppLink = () => {
        let message = `📋 *NOVO LEAD ESTRATÉGICO (AVENIX)*
-----------------------------------
*🏢 IDENTIDADE*
Empresa: ${formData.company}
NIF: ${formData.nif}
Site: ${formData.website}
Rep: ${formData.repName} (${formData.repRole})

*⚙️ OPERAÇÃO*
Sector: ${formData.sector}
Equipa: ${formData.teamSize}
Stack: ${formData.currentStack}
Faturação: ${formData.annualRevenue}

*🎯 ESTRATÉGIA*
Desafio: ${formData.mainChallenge}
Meta: ${formData.growthGoal}
Orçamento: ${formData.budget}
Urgência: ${formData.timeline}`;

        // Append Investment Data if available
        if (investmentData) {
            message += `
            
*💰 INVESTIMENTO PRÉ-APROVADO*
Items: ${investmentData.items.join(", ")}
Setup: ${formatCurrency(investmentData.totals.setup)} Kz
Mensal: ${formatCurrency(investmentData.totals.monthly)} Kz/mês`;
        }

        message += `
-----------------------------------
*AGENDA:* Solicito o agendamento de uma *Sessão Estratégica* para rever este dossier.`;

        return `https://wa.me/244943634766?text=${encodeURIComponent(message)}`;
    };

    return (
        <section className="py-24 bg-black min-h-[80vh] flex items-center justify-center relative overflow-hidden">

            {/* Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-avenix-orange/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-4 max-w-3xl text-center relative z-10">
                <Reveal width="100%">

                    {/* HEADER */}
                    {step < 3 && (
                        <div className="mb-12">
                            {investmentData && (
                                <div className="inline-flex items-center gap-2 bg-avenix-cyan/10 text-avenix-cyan px-4 py-2 rounded-full mb-6 border border-avenix-cyan/20 animate-fade-in-up">
                                    <Check className="w-4 h-4" />
                                    <span className="text-xs font-bold uppercase tracking-widest">Simulação Financeira Detectada</span>
                                </div>
                            )}
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Diagnóstico <span className="text-avenix-orange">Corporativo</span>
                            </h2>
                            <p className="text-gray-400">
                                Preencha o perfil estratégico para habilitar a simulação da sua arquitetura digital.
                            </p>

                            {/* Progress Bar */}
                            <div className="flex items-center justify-center gap-2 mt-8">
                                {[0, 1, 2].map((s) => (
                                    <div key={s} className={`h-1 rounded-full transition-all duration-500 ${s <= step ? 'w-12 bg-avenix-orange' : 'w-4 bg-white/10'}`} />
                                ))}
                            </div>
                        </div>
                    )}

                    <AnimatePresence mode="wait">

                        {/* STEP 0: IDENTIDADE */}
                        {step === 0 && (
                            <motion.form
                                key="step0"
                                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleNext}
                                className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                    <Building2 className="w-5 h-5 text-avenix-orange" />
                                    <h3 className="text-lg font-bold text-white">Identidade Corporativa</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nome da Empresa</label>
                                        <input type="text" required placeholder="Ex: Grupo Avenix" className="input-field"
                                            value={formData.company} onChange={(e) => setFormData({ ...formData, company: e.target.value })} />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">NIF Empresarial</label>
                                        <input type="text" required placeholder="Ex: 5410000000" className="input-field"
                                            value={formData.nif} onChange={(e) => setFormData({ ...formData, nif: e.target.value })} />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Website / LinkedIn</label>
                                    <div className="relative">
                                        <Globe className="input-icon" />
                                        <input type="text" placeholder="Ex: www.suaempresa.co.ao" className="input-field pl-10"
                                            value={formData.website} onChange={(e) => setFormData({ ...formData, website: e.target.value })} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Nome do Representante</label>
                                        <div className="relative">
                                            <UserCheck className="input-icon" />
                                            <input type="text" required placeholder="Seu Nome" className="input-field pl-10"
                                                value={formData.repName} onChange={(e) => setFormData({ ...formData, repName: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Cargo</label>
                                        <input type="text" required placeholder="Ex: CEO / Diretor" className="input-field"
                                            value={formData.repRole} onChange={(e) => setFormData({ ...formData, repRole: e.target.value })} />
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-end">
                                    <button type="submit" className="btn btn-primary px-8">Continuar <ArrowRight className="w-4 h-4 ml-2" /></button>
                                </div>
                            </motion.form>
                        )}

                        {/* STEP 1: OPERAÇÃO */}
                        {step === 1 && (
                            <motion.form
                                key="step1"
                                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                onSubmit={handleNext}
                                className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                    <Layers className="w-5 h-5 text-avenix-cyan" />
                                    <h3 className="text-lg font-bold text-white">Contexto Operacional</h3>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Sector de Atuação</label>
                                        <div className="relative">
                                            <Briefcase className="input-icon" />
                                            <input type="text" required placeholder="Ex: Logística e Distribuição" className="input-field pl-10"
                                                value={formData.sector} onChange={(e) => setFormData({ ...formData, sector: e.target.value })} />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Dimensão da Equipa</label>
                                        <div className="relative">
                                            <Users className="input-icon" />
                                            <select required className="input-field pl-10 appearance-none"
                                                value={formData.teamSize} onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}>
                                                <option value="" disabled>Selecione...</option>
                                                <option value="1-10">1 - 10 Colaboradores</option>
                                                <option value="11-50">11 - 50 Colaboradores</option>
                                                <option value="51-200">51 - 200 Colaboradores</option>
                                                <option value="200+">+200 Colaboradores</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Tecnologia Atual (Stack)</label>
                                    <select required className="input-field appearance-none"
                                        value={formData.currentStack} onChange={(e) => setFormData({ ...formData, currentStack: e.target.value })}>
                                        <option value="" disabled>Selecione o sistema principal...</option>
                                        <option value="Manual">Processos Manuais / Papel</option>
                                        <option value="Excel">Excel / Google Sheets</option>
                                        <option value="Legacy ERP">ERP Antigo / On-Premise</option>
                                        <option value="SaaS">Vários Softwares Desconectados</option>
                                        <option value="Cloud">Ecossistema Cloud Integrado</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Faturação Anual (Estimativa)</label>
                                    <div className="relative">
                                        <CreditCard className="input-icon" />
                                        <select required className="input-field pl-10 appearance-none"
                                            value={formData.annualRevenue} onChange={(e) => setFormData({ ...formData, annualRevenue: e.target.value })}>
                                            <option value="" disabled>Selecione o intervalo...</option>
                                            <option value="<10M">Inferior a 10 Milhões Kz</option>
                                            <option value="10M-50M">10M - 50M Kz</option>
                                            <option value="50M-200M">50M - 200M Kz</option>
                                            <option value="200M-500M">200M - 500M Kz</option>
                                            <option value=">500M">Superior a 500M Kz</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-between">
                                    <button type="button" onClick={() => setStep(0)} className="text-gray-400 hover:text-white text-sm">Voltar</button>
                                    <button type="submit" className="btn btn-primary px-8">Continuar <ArrowRight className="w-4 h-4 ml-2" /></button>
                                </div>
                            </motion.form>
                        )}

                        {/* STEP 2: ESTRATÉGIA */}
                        {step === 2 && (
                            <motion.form
                                key="step2"
                                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                                onSubmit={(e) => { e.preventDefault(); setStep(3); }}
                                className="bg-zinc-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10 text-left space-y-6"
                            >
                                <div className="flex items-center gap-3 mb-6 border-b border-white/5 pb-4">
                                    <Target className="w-5 h-5 text-avenix-orange" />
                                    <h3 className="text-lg font-bold text-white">Visão Estratégica</h3>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Principal Desafio (Pain Point)</label>
                                    <select required className="input-field appearance-none"
                                        value={formData.mainChallenge} onChange={(e) => setFormData({ ...formData, mainChallenge: e.target.value })}>
                                        <option value="" disabled>Qual é o maior obstáculo hoje?</option>
                                        <option value="Vendas">Estagnação de Vendas / Receita</option>
                                        <option value="Ineficiência">Ineficiência Operacional / Custos Altos</option>
                                        <option value="Cegueira">Falta de Dados para Decisão</option>
                                        <option value="Segurança">Segurança e Controlo de Processos</option>
                                        <option value="Talento">Dependência de Pessoas Chave</option>
                                    </select>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Meta de Crescimento (12 Meses)</label>
                                    <div className="relative">
                                        <Rocket className="input-icon" />
                                        <input type="text" required placeholder="Ex: Dobrar a faturação; Reduzir custos em 30%..." className="input-field pl-10"
                                            value={formData.growthGoal} onChange={(e) => setFormData({ ...formData, growthGoal: e.target.value })} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Orçamento para Inovação</label>
                                        <select required className="input-field appearance-none"
                                            value={formData.budget} onChange={(e) => setFormData({ ...formData, budget: e.target.value })}>
                                            <option value="" disabled>Selecione...</option>
                                            <option value="Exploratório">Exploratório (Sem verba definida)</option>
                                            <option value="1M-5M">1M - 5M Kz</option>
                                            <option value="5M-20M">5M - 20M Kz</option>
                                            <option value=">20M">Superior a 20M Kz</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Urgência de Implementação</label>
                                        <div className="relative">
                                            <Calendar className="input-icon" />
                                            <select required className="input-field pl-10 appearance-none"
                                                value={formData.timeline} onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}>
                                                <option value="" disabled>Quando?</option>
                                                <option value="Imediato">Imediato (Crítico)</option>
                                                <option value="3 Meses">3 Meses (Curto Prazo)</option>
                                                <option value="6 Meses">6 Meses+ (Planeamento)</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-4 flex justify-between">
                                    <button type="button" onClick={() => setStep(1)} className="text-gray-400 hover:text-white text-sm">Voltar</button>
                                    <button type="submit" className="btn btn-primary px-8 py-4 w-full md:w-auto shadow-[0_0_30px_rgba(215,117,68,0.2)]">
                                        Gerar Diagnóstico <ArrowRight className="w-4 h-4 ml-2" />
                                    </button>
                                </div>
                            </motion.form>
                        )}

                        {/* STEP 3: SIMULATION */}
                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                                className="relative z-10 p-12 rounded-3xl bg-zinc-900/80 border border-white/10 backdrop-blur-xl min-h-[400px] flex flex-col items-center justify-center"
                            >
                                <Loader2 className="w-16 h-16 text-avenix-orange animate-spin mb-8" />
                                <div className="space-y-6 w-full max-w-md text-left">
                                    {scanningSteps.map((s, i) => (
                                        <div key={i} className={`flex items-center gap-4 transition-all duration-500 ${i <= scanProgress ? 'opacity-100 translate-x-0' : 'opacity-30 -translate-x-4'}`}>
                                            {i < scanProgress ? (
                                                <div className="w-6 h-6 rounded-full bg-avenix-cyan/20 flex items-center justify-center">
                                                    <Check className="w-3.5 h-3.5 text-avenix-cyan" />
                                                </div>
                                            ) : i === scanProgress ? (
                                                <div className="w-6 h-6 flex items-center justify-center">
                                                    <span className="w-2.5 h-2.5 bg-avenix-orange rounded-full animate-pulse shadow-[0_0_10px_#D77544]" />
                                                </div>
                                            ) : (
                                                <div className="w-6 h-6 rounded-full border border-white/10" />
                                            )}
                                            <span className={`font-mono text-sm md:text-base ${i === scanProgress ? 'text-white font-bold' : 'text-gray-500'}`}>
                                                {s}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {/* STEP 4: RESULT */}
                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                                className="p-10 rounded-3xl bg-zinc-900/90 border border-avenix-cyan/40 backdrop-blur-xl shadow-[0_0_60px_rgba(0,212,255,0.15)] max-w-xl mx-auto"
                            >
                                <div className="w-20 h-20 bg-avenix-cyan/10 rounded-full flex items-center justify-center mx-auto mb-8 ring-1 ring-avenix-cyan/30">
                                    <Lock className="w-10 h-10 text-avenix-cyan" />
                                </div>

                                <h3 className="text-3xl font-bold text-white mb-4">Dossier Gerado</h3>

                                <p className="text-gray-300 mb-8 leading-relaxed">
                                    O perfil estratégico da <strong className="text-white">{formData.company}</strong> foi compilado com sucesso. A engenharia da Avenix já tem os dados necessários para desenhar a sua <span className="text-avenix-orange">Máquina Digital</span>.
                                </p>

                                <div className="flex flex-col gap-3 mb-8">
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                        <Check className="w-5 h-5 text-avenix-cyan" />
                                        <span className="text-sm text-gray-300">Validação B2B (NIF) Concluída</span>
                                    </div>
                                    <div className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5">
                                        <Check className="w-5 h-5 text-avenix-cyan" />
                                        <span className="text-sm text-gray-300">Arquitetura preliminar desenhada</span>
                                    </div>
                                </div>

                                <a
                                    href={getWhatsAppLink()}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary w-full py-5 flex items-center justify-center gap-3 text-lg group hover:bg-avenix-cyan hover:text-black transition-all shadow-[0_0_30px_rgba(0,212,255,0.2)]"
                                >
                                    Agendar Sessão Estratégica
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </a>
                                <p className="text-xs text-gray-600 mt-4 text-center">Protocolo de Segurança: Os seus dados estratégicos estão encriptados.</p>
                            </motion.div>
                        )}

                    </AnimatePresence>
                </Reveal>
            </div>

            {/* Global Styles for Inputs */}
            <style jsx global>{`
                .input-field {
                    width: 100%;
                    background-color: rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    border-radius: 0.75rem;
                    padding: 1rem 1rem 1rem 1rem;
                    color: white;
                    transition: all 0.2s;
                    outline: none;
                }
                .input-field:focus {
                    border-color: rgba(215, 117, 68, 0.5);
                    box-shadow: 0 0 0 1px rgba(215, 117, 68, 0.2);
                }
                .input-field:placeholder {
                    color: #52525b;
                }
                .input-icon {
                    position: absolute;
                    left: 1rem;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 1.25rem;
                    height: 1.25rem;
                    color: #9ca3af;
                }
            `}</style>
        </section>
    );
}
