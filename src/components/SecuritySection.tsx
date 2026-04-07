import React from 'react';

const SecuritySection: React.FC = () => (
    <section
        className="bg-page-bg w-full py-6 lg:py-8"
        aria-labelledby="security-heading"
    >
        <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">

            {/* White card — same pattern as FeaturesSection */}
            <div className="bg-white rounded-hero w-full flex flex-col lg:flex-row overflow-hidden">

                {/* Left — text content */}
                <div className="flex flex-col justify-center px-8 lg:px-16 py-14 lg:py-20 lg:w-1/2 shrink-0">

                    {/* Eyebrow */}
                    <p className="font-work-sans font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] uppercase text-viio-blue-cta mb-5 lg:mb-6">
                        Seguridad global
                    </p>

                    {/* Headline */}
                    <h2
                        id="security-heading"
                        className="font-work-sans font-medium text-[40px] lg:text-[56px] leading-[44px] lg:leading-[62px] tracking-[-1.5px] lg:tracking-[-2.5px] text-[#0D1117] mb-6 lg:mb-8"
                    >
                        Tu capital, custodiado con{' '}
                        <span className="text-viio-blue-cta">estándares de grado institucional.</span>
                    </h2>

                    {/* Description */}
                    <p className="font-work-sans font-normal text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] max-w-[420px] mb-10 lg:mb-12">
                        Gracias al soporte y tecnología de nuestros aliados, tu cuenta está custodiada por expertos en seguridad.
                    </p>

                    {/* CTA */}
                    <div>
                        <button className="bg-viio-blue-cta text-white font-work-sans font-semibold text-[14px] lg:text-[15px] rounded-full px-10 py-4 hover:opacity-90 transition-opacity inline-flex items-center gap-3 shadow-btn">
                            Conoce más
                            <span className="text-[16px]">→</span>
                        </button>
                    </div>

                </div>

                {/* Right — security image, 520×400px per Figma */}
                <div className="relative lg:w-1/2 flex items-center justify-center p-8 lg:p-10 min-h-[300px] lg:min-h-0">
                    <img
                        src="/assets/seguridad-global-viio.svg"
                        alt="Tarjeta VIIO y app mostrando saldo de $870 USD, custodiados con estándares institucionales"
                        className="w-full rounded-2xl object-cover"
                        style={{ aspectRatio: '520 / 400' }}
                        loading="lazy"
                        decoding="async"
                        onError={(e) => { e.currentTarget.style.display = 'none'; }}
                    />
                </div>

            </div>
        </div>
    </section>
);

export default SecuritySection;