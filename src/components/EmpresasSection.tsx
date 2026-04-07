import React, { useState, useRef, useEffect, useCallback } from 'react';

const AUTOPLAY_INTERVAL = 3500;
const GAP = 8;

const features = [
    { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="white" /></svg>), text: 'Emite tarjetas corporativas en segundos' },
    { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14l-5-5 1.41-1.41L12 14.17l7.59-7.59L21 8l-9 9z" fill="white" /></svg>), text: 'Controla presupuestos y aprobaciones en tiempo real' },
    { icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" fill="white" /></svg>), text: 'Pagos globales sin comisiones bancarias tradicionales' },
];

const cards = [
    { image: '/assets/cobertura-global-viio.svg', alt: 'Cobertura global: Opera globalmente desde una sola cuenta con VIIO' },
    { image: '/assets/tarjeta-viio-para-equipo.svg', alt: 'Tarjeta para equipo: Emite tarjetas para todos en segundos con VIIO' },
    { image: '/assets/control-financiero-viio.svg', alt: 'Control financiero: Controla todos los pagos de tu empresa con VIIO' },
];

const EmpresasSection: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLElement | null)[]>([]);
    const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);
    const isPausedRef = useRef(false);

    const scrollToIndex = useCallback((index: number, manual = false) => {
        const track = trackRef.current;
        const card = cardRefs.current[index];
        if (!track || !card) return;
        if (manual) {
            isPausedRef.current = true;
            setTimeout(() => { isPausedRef.current = false; }, AUTOPLAY_INTERVAL * 2);
        }
        const trackLeft = track.getBoundingClientRect().left;
        const cardLeft = card.getBoundingClientRect().left;
        track.scrollTo({ left: track.scrollLeft + (cardLeft - trackLeft), behavior: 'smooth' });
        setActiveIndex(index);
    }, []);

    const handleScroll = useCallback(() => {
        const track = trackRef.current;
        if (!track) return;
        const cardWidth = cardRefs.current[0]?.getBoundingClientRect().width ?? 0;
        const newIndex = Math.round(track.scrollLeft / (cardWidth + GAP));
        setActiveIndex(Math.min(newIndex, cards.length - 1));
    }, []);

    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            if (isPausedRef.current) return;
            setActiveIndex(prev => {
                const next = (prev + 1) % cards.length;
                const track = trackRef.current;
                const card = cardRefs.current[next];
                if (track && card) {
                    const trackLeft = track.getBoundingClientRect().left;
                    const cardLeft = card.getBoundingClientRect().left;
                    track.scrollTo({ left: track.scrollLeft + (cardLeft - trackLeft), behavior: 'smooth' });
                }
                return next;
            });
        }, AUTOPLAY_INTERVAL);
        return () => { if (autoplayRef.current) clearInterval(autoplayRef.current); };
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        track.addEventListener('scroll', handleScroll, { passive: true });
        return () => track.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    return (
        <section className="bg-page-bg w-full py-10 lg:py-24" aria-labelledby="empresas-heading">
            <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center">

                    {/* Left */}
                    <div className="lg:w-[45%] shrink-0 flex flex-col">
                        <p className="font-work-sans font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] uppercase text-viio-blue-cta mb-4 lg:mb-6">
                            VIIO para empresas
                        </p>
                        <h2 id="empresas-heading" className="font-work-sans font-medium text-[28px] lg:text-[56px] leading-[34px] lg:leading-[62px] tracking-[-1px] lg:tracking-[-2.5px] text-[#0D1117] mb-4 lg:mb-8">
                            Gestiona las finanzas de{' '}
                            <span className="text-viio-blue-cta">tu empresa en dólares o euros.</span>
                        </h2>
                        <p className="font-work-sans font-normal text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] mb-6 lg:mb-10">
                            La plataforma integral para equipos globales. Emite tarjetas, controla gastos y realiza pagos internacionales en USDC con total transparencia.
                        </p>
                        <ul className="flex flex-col gap-4 lg:gap-5 mb-8 lg:mb-12 list-none" aria-label="Características para empresas">
                            {features.map((f, i) => (
                                <li key={i} className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-viio-blue-cta flex items-center justify-center shrink-0" aria-hidden="true">{f.icon}</div>
                                    <span className="font-work-sans font-normal text-[14px] lg:text-[15px] leading-[22px] text-[#374151]">{f.text}</span>
                                </li>
                            ))}
                        </ul>
                        <div>
                            <button className="bg-viio-blue-cta text-white font-work-sans font-semibold text-[14px] lg:text-[15px] rounded-full px-10 py-4 hover:opacity-90 transition-opacity inline-flex items-center gap-3 shadow-btn w-full lg:w-auto justify-center lg:justify-start">
                                Conoce más <span aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>

                    {/* Right: carousel */}
                    <div className="lg:w-[55%] flex flex-col gap-4 lg:gap-5">
                        <div
                            ref={trackRef}
                            className="flex overflow-x-auto"
                            style={{ gap: `${GAP}px`, scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' } as React.CSSProperties}
                            role="region"
                            aria-label="Soluciones para empresas"
                            aria-roledescription="carousel"
                        >
                            {cards.map((card, i) => (
                                <article
                                    key={i}
                                    ref={el => { cardRefs.current[i] = el; }}
                                    className="relative shrink-0 rounded-3xl overflow-hidden cursor-pointer"
                                    style={{ width: 'calc(83% - 4px)', aspectRatio: '3 / 4', scrollSnapAlign: 'start' }}
                                    aria-label={card.alt}
                                    aria-roledescription="slide"
                                    aria-current={i === activeIndex ? 'true' : undefined}
                                    onClick={() => scrollToIndex(i, true)}
                                >
                                    <img src={card.image} alt={card.alt} className="w-full h-full object-cover" loading="lazy" decoding="async" />
                                </article>
                            ))}
                        </div>

                        {/* Dots with 44px tap targets */}
                        <div className="flex items-center justify-center" role="tablist" aria-label="Diapositivas del carrusel">
                            {cards.map((_, i) => (
                                <button
                                    key={i}
                                    role="tab"
                                    aria-selected={i === activeIndex}
                                    aria-label={`Diapositiva ${i + 1}`}
                                    onClick={() => scrollToIndex(i, true)}
                                    className="flex items-center justify-center"
                                    style={{ width: '44px', height: '44px' }}
                                >
                                    <span className="rounded-full transition-all duration-300 block" style={{ width: i === activeIndex ? '24px' : '8px', height: '8px', background: i === activeIndex ? '#3CBDFF' : '#D1D5DB' }} />
                                </button>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default EmpresasSection;