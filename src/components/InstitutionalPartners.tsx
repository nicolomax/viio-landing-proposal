import React from 'react';

const logos = [
    { src: '/assets/logo-fireblocks.svg', alt: 'Fireblocks — infraestructura de seguridad para activos digitales' },
    { src: '/assets/logo-chainalysis.svg', alt: 'Chainalysis — análisis blockchain y cumplimiento normativo' },
    { src: '/assets/logo-visa.svg', alt: 'Visa — red global de pagos' },
];

const track = [...logos, ...logos, ...logos];

const InstitutionalPartners: React.FC = () => (
    <section
        className="bg-page-bg w-full py-10 lg:py-14"
        aria-label="Socios y aliados institucionales de VIIO"
    >
        <style>{`
      @keyframes viio-marquee {
        0%   { transform: translateX(0); }
        100% { transform: translateX(-33.333%); }
      }
      .viio-marquee-track {
        animation: viio-marquee 18s linear infinite;
        will-change: transform;
      }
      .viio-marquee-track:hover {
        animation-play-state: paused;
      }
      @media (prefers-reduced-motion: reduce) {
        .viio-marquee-track { animation: none; }
      }
    `}</style>

        {/* Container matches global layout margins */}
        <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">

            {/* Static title — always visible, never scrolls */}
            <p className="font-work-sans font-medium text-[13px] lg:text-[14px] tracking-[0.4em] uppercase text-[#9CA3AF] text-center mb-6 lg:mb-8">
                Nuestros aliados
            </p>

            {/* overflow-hidden clips marquee at the container edges */}
            <div className="relative overflow-hidden">

                {/* Left fade — aligns with container left edge */}
                <div
                    className="absolute inset-y-0 left-0 z-10 w-12 lg:w-24 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #F3F4F6, transparent)' }}
                    aria-hidden="true"
                />
                {/* Right fade — aligns with container right edge */}
                <div
                    className="absolute inset-y-0 right-0 z-10 w-12 lg:w-24 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #F3F4F6, transparent)' }}
                    aria-hidden="true"
                />

                {/* Scrolling track */}
                <ul
                    className="viio-marquee-track flex items-center list-none m-0 p-0"
                    style={{ width: 'max-content', gap: '80px' }}
                    aria-hidden="true"
                >
                    {track.map((logo, i) => (
                        <li
                            key={i}
                            className="flex items-center justify-center shrink-0"
                            style={{ height: '28px' }}
                        >
                            <img
                                src={logo.src}
                                alt=""
                                className="h-full w-auto object-contain"
                                style={{ filter: 'grayscale(100%) opacity(0.45)' }}
                                loading="lazy"
                                decoding="async"
                            />
                        </li>
                    ))}
                </ul>

            </div>
        </div>

        {/* Screen reader list */}
        <ul className="sr-only">
            {logos.map((logo) => (
                <li key={logo.src}>{logo.alt}</li>
            ))}
        </ul>
    </section>
);

export default InstitutionalPartners;