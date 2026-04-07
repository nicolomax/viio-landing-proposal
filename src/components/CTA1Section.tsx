import React from 'react';

const CTA1Section: React.FC = () => (
    <section
        className="bg-page-bg w-full py-10 lg:py-16"
        aria-labelledby="cta1-heading"
    >
        <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

                {/* Left — image standalone, no card wrapper */}
                <div className="lg:w-[50%] shrink-0">
                    <img
                        src="/assets/cta-1.svg"
                        alt="Mano sosteniendo teléfono con app VIIO y tarjeta física VIIO Visa"
                        className="w-full h-auto rounded-2xl object-cover"
                        style={{ boxShadow: '0 0px 0px rgba(0,0,0,0.15)' }}
                        loading="eager"
                        decoding="async"
                    />
                </div>

                {/* Right — text content */}
                <div className="lg:w-[45%] flex flex-col gap-6 lg:gap-8">

                    {/* Eyebrow pill */}
                    <div>
                        <span className="inline-flex bg-viio-blue-cta text-white font-work-sans font-semibold text-[11px] tracking-[0.12em] uppercase rounded-full px-4 py-2">
                            Más que una cuenta global
                        </span>
                    </div>

                    {/* Headline — 3 lines at ~48px */}
                    <h2
                        id="cta1-heading"
                        className="font-work-sans font-medium text-[40px] lg:text-[48px] leading-[44px] lg:leading-[54px] tracking-[-1.5px] lg:tracking-[-2px] text-[#0D1117]"
                    >
                        Una nueva forma de usar tu{' '}
                        <span className="text-viio-blue-cta">dinero globalmente.</span>
                    </h2>

                    {/* CTA button */}
                    <div>
                        <a
                            href="https://viio.page.link/n3UL"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-viio-blue-cta text-white font-work-sans font-semibold text-[15px] lg:text-[16px] rounded-full px-12 py-4 hover:opacity-90 transition-opacity shadow-btn w-full lg:w-auto"
                            aria-label="Descarga la app VIIO"
                        >
                            Descarga la app
                        </a>
                    </div>

                </div>
            </div>
        </div>
    </section>
);

export default CTA1Section;