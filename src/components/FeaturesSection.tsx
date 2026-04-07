import React from 'react';

const FeaturesSection: React.FC = () => (
    <section className="bg-page-bg w-full py-6 lg:py-8">
        {/* Outer wrapper: positions the white card + allows image to bleed upward */}
        <div className="relative w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]"
        >
            <div className="w-full flex flex-col lg:flex-row overflow-hidden" style={{ aspectRatio: '1208 / 591' }}>

                {/* Left — text content */}
                <div className="flex flex-col justify-center px-8 lg:px-16 py-14 lg:py-20 lg:w-1/2 shrink-0">
                    <h2 className="font-work-sans font-medium text-[40px] lg:text-[56px] leading-[44px] lg:leading-[60px] tracking-[-1.5px] lg:tracking-[-2.5px] text-[#0D1117] mb-0">
                        Crea tu cuenta,
                    </h2>
                    <h2 className="font-work-sans font-medium text-[40px] lg:text-[56px] leading-[44px] lg:leading-[60px] tracking-[-1.5px] lg:tracking-[-2.5px] text-viio-blue-cta mb-8 lg:mb-10">
                        pide tu tarjeta.
                    </h2>

                    <p className="font-work-sans font-normal text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] max-w-[380px] mb-10 lg:mb-14">
                        Con VIIO tienes una tarjeta física y virtual para que puedas gastar tus dólares sin fronteras y de forma segura.
                    </p>

                    <div>
                        <button className="bg-viio-blue-cta text-white font-work-sans font-semibold text-[14px] lg:text-[15px] rounded-full px-10 py-4 hover:opacity-90 transition-opacity inline-flex items-center gap-3 shadow-btn">
                            Crea tu cuenta
                            <span className="text-[16px]">→</span>
                        </button>
                    </div>
                </div>

                {/* Right — image fills full column */}
                <div className="relative lg:w-1/2 min-h-[280px] lg:min-h-0">
                    <img
                        src="/assets/viio_card_spiral.svg"
                        alt="Tarjeta VIIO"
                        className="w-full h-full object-cover object-center"
                        onError={(e) => {
                            const img = e.currentTarget;
                            if (!img.src.includes('.png')) img.src = '/assets/viio_card_spiral.png';
                            else if (!img.src.includes('.webp')) img.src = '/assets/viio_card_spiral.webp';
                        }}
                    />
                </div>

            </div>
        </div>
    </section>
);

export default FeaturesSection;