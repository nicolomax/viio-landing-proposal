import React, { useState, useRef, useEffect, useCallback } from 'react';

const AUTOPLAY_INTERVAL = 4000;
const GAP = 16;

const articles = [
    {
        outlet: 'La República',
        headline: 'VIIO, Dock y VISA firman alianza y lanzan una tarjeta para acceder a dólares digitales.',
        url: 'https://www.larepublica.co/finanzas/viio-dock-y-visa-firman-alianza-y-lanzan-una-tarjeta-para-acceder-a-dolares-digitales-4033154',
    },
    {
        outlet: 'Portafolio',
        headline: 'VISA lanza tarjeta para operaciones con dólares digitales.',
        url: 'https://www.portafolio.co/mis-finanzas/creditos/visa-lanza-tarjeta-para-operaciones-con-dolares-digitales-en-colombia-621286',
    },
    {
        outlet: 'Caracol',
        headline: 'VIIO, plataforma colombiana para ahorrar en dólares: ¿cómo funciona?',
        url: 'https://www.youtube.com/watch?v=IHIk0vgnAAU',
    },
    {
        outlet: 'Pulzo',
        headline: 'Beneficios y cómo funciona la nueva tarjeta de dólares en Colombia, respaldada por VISA.',
        url: 'https://www.pulzo.com/economia/beneficios-como-funciona-tarjeta-dolares-colombia-respaldada-visa-PP4216367A',
    },
    {
        outlet: 'Enter.co',
        headline: 'VIIO y Visa lanzan en Colombia tarjeta en dólares para nómadas digitales.',
        url: 'https://www.enter.co/empresas/negocios/viio-y-visa-lanzan-en-colombia-tarjeta-en-dolares-digitales-para-nomadas-digitales-trabajadores-remotos-y-expatriados/',
    },
    {
        outlet: 'DataiFX',
        headline: 'Llega a Colombia la tarjeta en dólares digitales USD de VIIO, Visa y Dock.',
        url: 'https://dataifx.com/post/llega-colombia-la-tarjeta-en-dolares-digitales-usdc-de-viio-visa-y-dock',
    },
    {
        outlet: 'Technocio',
        headline: 'VIIO, Visa y Dock lanzan tarjeta en dólares en Colombia.',
        url: 'https://www.technocio.com/viio-visa-y-dock-lanzan-tarjeta-en-dolares-usdc-en-colombia/',
    },
    {
        outlet: 'Portafolio',
        headline: 'Así puede ahorrar en dólares sin tener una cuenta en el exterior.',
        url: 'https://www.portafolio.co/mis-finanzas/ahorro/viio-startup-que-permite-ahorrar-en-dolares-sin-tener-que-abrir-una-cuenta-en-el-exterior-585397',
    },
    {
        outlet: 'Caracol',
        headline: '¿Por qué el precio del dólar continúa bajando en Colombia?',
        url: 'https://www.youtube.com/watch?v=3G4j874hdrE',
    },
    {
        outlet: 'Techcetera',
        headline: 'VIIO, la App colombiana para ahorrar en dólares.',
        url: 'https://techcetera.co/viio-la-app-colombiana-para-ahorrar-en-dolares/',
    },
    {
        outlet: 'Enter.co',
        headline: 'Startup colombiana lanza app que permite ahorrar en dólares.',
        url: 'https://www.enter.co/startups/startup-colombiana-lanza-app-que-permite-ahorrar-en-dolares-sin-tener-cuentas-internacionales/',
    },
];

const MediaSection: React.FC = () => {
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
        setActiveIndex(Math.min(newIndex, articles.length - 1));
    }, []);

    // Autoplay
    useEffect(() => {
        autoplayRef.current = setInterval(() => {
            if (isPausedRef.current) return;
            setActiveIndex(prev => {
                const next = (prev + 1) % articles.length;
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
        <section
            className="bg-page-bg w-full py-16 lg:py-24"
            aria-labelledby="media-heading"
        >
            <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">

                {/* ── Header: two-column layout ── */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-14">

                    {/* Left — eyebrow + headline */}
                    <div>
                        <p className="font-work-sans font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] uppercase text-viio-blue-cta mb-4">
                            Prensa y noticias
                        </p>
                        <h2
                            id="media-heading"
                            className="font-work-sans font-medium text-[40px] lg:text-[56px] leading-[44px] lg:leading-[62px] tracking-[-1.5px] lg:tracking-[-2.5px] text-[#0D1117]"
                        >
                            VIIO en los <span className="text-viio-blue-cta">Medios.</span>
                        </h2>
                    </div>

                    {/* Right — description */}
                    <p className="font-work-sans font-normal text-[14px] lg:text-[15px] leading-[22px] text-[#6B7280] max-w-[320px] lg:pb-2">
                        Descubre lo que dicen los principales medios sobre cómo VIIO está transformando el uso de dólares digitales.
                    </p>

                </div>

                {/* ── Carousel ── */}
                <div className="flex flex-col gap-6">

                    {/* Scroll track */}
                    <div
                        ref={trackRef}
                        className="flex overflow-x-auto"
                        style={{
                            gap: `${GAP}px`,
                            scrollSnapType: 'x mandatory',
                            scrollbarWidth: 'none',
                            msOverflowStyle: 'none',
                            WebkitOverflowScrolling: 'touch',
                        } as React.CSSProperties}
                        role="region"
                        aria-label="VIIO en los medios — artículos de prensa"
                        aria-roledescription="carousel"
                    >
                        {articles.map((article, i) => (
                            <article
                                key={i}
                                ref={el => { cardRefs.current[i] = el; }}
                                className="shrink-0 rounded-[20px] flex flex-col overflow-hidden group cursor-pointer"
                                style={{
                                    width: 'calc(25% - 12px)',
                                    minWidth: '260px',
                                    backgroundColor: '#0F1117',
                                    scrollSnapAlign: 'start',
                                }}
                                aria-roledescription="slide"
                                aria-current={i === activeIndex ? 'true' : undefined}
                                onClick={() => {
                                    scrollToIndex(i, true);
                                    window.open(article.url, '_blank', 'noopener,noreferrer');
                                }}
                            >
                                {/* Thin dark header — outlet name */}
                                <div className="flex items-center justify-between px-5 py-4">
                                    <span className="font-work-sans font-semibold text-[10px] tracking-[0.14em] uppercase text-white/60">
                                        {article.outlet}
                                    </span>
                                    {/* Arrow appears on hover to signal the card is clickable */}
                                    <span
                                        className="text-white/0 group-hover:text-white/50 transition-all duration-200 text-sm"
                                        aria-hidden="true"
                                    >
                                        ↗
                                    </span>
                                </div>

                                {/* White area — fills the rest of the card */}
                                <div className="bg-white rounded-[14px] mx-2 mb-2 flex-1 flex flex-col justify-between p-6">
                                    <h3 className="font-work-sans font-semibold text-[15px] leading-[22px] tracking-[-0.2px] text-[#0D1117]">
                                        {article.headline}
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 font-work-sans font-medium text-[13px] text-viio-blue-cta mt-5">
                                        Leer artículo
                                        <span aria-hidden="true">→</span>
                                    </span>
                                </div>

                            </article>
                        ))}
                    </div>

                    {/* Dot indicators — condensed for 11 articles */}
                    <div
                        className="flex items-center justify-center gap-2"
                        role="tablist"
                        aria-label="Artículos del carrusel"
                    >
                        {articles.map((_, i) => {
                            const distance = Math.abs(i - activeIndex);
                            const size = distance === 0 ? '24px' : distance === 1 ? '8px' : distance === 2 ? '6px' : '4px';
                            const opacity = distance > 3 ? 0 : 1;
                            return (
                                <button
                                    key={i}
                                    role="tab"
                                    aria-selected={i === activeIndex}
                                    aria-label={`Artículo ${i + 1}: ${articles[i].outlet}`}
                                    onClick={() => scrollToIndex(i, true)}
                                    className="rounded-full transition-all duration-300 shrink-0"
                                    style={{
                                        width: size,
                                        height: i === activeIndex ? '8px' : size,
                                        opacity,
                                        background: i === activeIndex ? '#3CBDFF' : '#D1D5DB',
                                    }}
                                />
                            );
                        })}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default MediaSection;