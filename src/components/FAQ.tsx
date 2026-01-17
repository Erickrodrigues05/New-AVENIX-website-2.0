"use client";
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

interface FAQProps {
    title?: string;
    subtitle?: string;
    items?: FAQItem[];
}

const defaultFaqs: FAQItem[] = [
    {
        question: "AI é muito complexo para o meu negócio?",
        answer: "Nós simplificamos e entregamos pronto a usar. A complexidade técnica fica do nosso lado. Você só vê os resultados e a facilidade de uso no dia-a-dia."
    },
    {
        question: "Não sei se isso funciona em Angola.",
        answer: "As soluções são adaptadas à realidade local e global. Trabalhamos com empresas angolanas e internacionais, entendendo as particularidades de cada mercado e garantindo funcionalidade plena."
    },
    {
        question: "Já tentei digitalizar e não deu resultado.",
        answer: "Provavelmente faltou estratégia, não tecnologia. A diferença está em criar soluções focadas em resolver problemas reais, não apenas 'ter tecnologia' por ter. Nosso foco é o resultado operacional."
    },
    {
        question: "Quanto custa implementar AI no meu negócio?",
        answer: "Depende da solução específica. Fazemos um diagnóstico gratuito e apresentamos uma proposta transparente, sempre com foco em um retorno sobre investimento (ROI) claro para o seu negócio."
    },
    {
        question: "Quanto tempo demora a implementação?",
        answer: "Projetos simples podem estar operacionais em 2-4 semanas. Soluções mais complexas podem levar 2-3 meses. O importante é que o cliente começa a ver valor logo nas primeiras fases do projeto."
    }
];

export default function FAQ({
    title = "Perguntas Frequentes",
    subtitle = "Tire suas dúvidas sobre como podemos ajudar seu negócio.",
    items
}: FAQProps) {
    const faqs = items || defaultFaqs;

    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 bg-transparent relative max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    {title}
                </h2>
                <p className="text-gray-400">
                    {subtitle}
                </p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`rounded-2xl border transition-all duration-300 ${openIndex === index
                            ? "bg-avenix-blue/20 border-avenix-orange/30"
                            : "bg-zinc-900/30 border-white/5 hover:border-white/10"
                            }`}
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="w-full flex items-center justify-between p-6 text-left"
                        >
                            <span className={`font-medium text-lg ${openIndex === index ? "text-white" : "text-gray-300"}`}>
                                {faq.question}
                            </span>
                            <div className={`p-2 rounded-full transition-colors ${openIndex === index ? "bg-avenix-orange text-white" : "bg-white/5 text-gray-400"}`}>
                                {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                            </div>
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="p-6 pt-0 text-gray-400 leading-relaxed">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
