import React, { useState } from 'react';

const faqs = [
    { id: 'faq-1', question: '¿Cómo funciona la tarjeta VIIO?', answer: 'Puedes utilizar la tarjeta VIIO en cualquier parte del mundo sin cuota de manejo. Descarga la app y comienza a disfrutar del futuro azul.' },
    { id: 'faq-2', question: '¿Qué son dólares digitales?', answer: 'El dólar digital es un tipo de activo conocido como criptomoneda estable que siempre mantiene su mismo valor con el dólar estadounidense.' },
    { id: 'faq-3', question: '¿Puedo crear una cuenta si no tengo dólares digitales?', answer: 'Sí, con VIIO solo necesitas tener tu documento de identidad a la mano para registrarte. Luego, podrás recargar dólares digitales desde la app.' },
    { id: 'faq-4', question: '¿Qué costo tiene la tarjeta VIIO?', answer: 'Puedes solicitar la tarjeta virtual completamente gratis. La tarjeta VIIO no tiene cuota de manejo ni costos ocultos. Visualiza las tasas y tarifas vigentes en el siguiente enlace.' },
];

const FAQSection: React.FC = () => {
    const [openId, setOpenId] = useState<string | null>('faq-1');
    const toggle = (id: string) => setOpenId(prev => prev === id ? null : id);

    return (
        <section className="bg-page-bg w-full py-10 lg:py-24" aria-labelledby="faq-heading">
            <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                    {/* Left */}
                    <div className="lg:w-[38%] shrink-0">
                        <p className="font-work-sans font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] uppercase text-viio-blue-cta mb-4">
                            Centro de soporte
                        </p>
                        <h2 id="faq-heading" className="font-work-sans font-medium text-[28px] lg:text-[48px] leading-[34px] lg:leading-[54px] tracking-[-1px] lg:tracking-[-2px] text-[#0D1117] mb-4">
                            Preguntas frecuentes
                        </h2>
                        <p className="font-work-sans font-normal text-[14px] lg:text-[15px] leading-[22px] text-[#6B7280] max-w-[320px]">
                            Resuelve tus dudas sobre cómo usar VIIO, pagos con dólares y transferencias globales.
                        </p>
                    </div>

                    {/* Right */}
                    <div className="lg:w-[62%] flex flex-col gap-3">
                        <dl className="flex flex-col gap-3">
                            {faqs.map((faq) => {
                                const isOpen = openId === faq.id;
                                return (
                                    <div key={faq.id} className="bg-white rounded-2xl overflow-hidden" style={{ boxShadow: isOpen ? '0 4px 20px rgba(0,0,0,0.08)' : '0 1px 4px rgba(0,0,0,0.06)' }}>
                                        <dt>
                                            <button
                                                type="button"
                                                id={`${faq.id}-trigger`}
                                                aria-expanded={isOpen}
                                                aria-controls={`${faq.id}-panel`}
                                                onClick={() => toggle(faq.id)}
                                                className="w-full flex items-center justify-between px-5 lg:px-6 text-left"
                                                style={{ minHeight: '56px', paddingTop: '16px', paddingBottom: '16px' }}
                                            >
                                                <h3 className="font-work-sans font-medium text-[15px] lg:text-[17px] leading-[22px] lg:leading-[24px] tracking-[-0.2px] text-[#0D1117] pr-4">
                                                    {faq.question}
                                                </h3>
                                                <div className="w-9 h-9 rounded-full bg-viio-blue-cta flex items-center justify-center shrink-0" aria-hidden="true">
                                                    <span className="text-white font-light text-xl leading-none select-none">{isOpen ? '×' : '+'}</span>
                                                </div>
                                            </button>
                                        </dt>
                                        <dd
                                            id={`${faq.id}-panel`}
                                            role="region"
                                            aria-labelledby={`${faq.id}-trigger`}
                                            hidden={!isOpen}
                                            className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="font-work-sans font-normal text-[14px] lg:text-[15px] leading-[22px] text-[#6B7280] px-5 lg:px-6 pb-5 lg:pb-6">
                                                {faq.answer}
                                            </p>
                                        </dd>
                                    </div>
                                );
                            })}
                        </dl>

                        <div className="flex justify-end mt-2">
                            <a
                                href="https://intercom.help/viio_help/es"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 bg-viio-blue-cta text-white font-work-sans font-semibold text-[14px] lg:text-[15px] rounded-full px-8 py-4 hover:opacity-90 transition-opacity shadow-btn w-full lg:w-auto"
                                aria-label="Explorar el centro de ayuda de VIIO"
                            >
                                Explorar centro de ayuda <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FAQSection;