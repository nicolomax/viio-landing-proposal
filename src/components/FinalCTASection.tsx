import React from 'react';

const FinalCTASection: React.FC = () => (
    <section className="bg-page-bg w-full py-4 lg:py-8" aria-labelledby="final-cta-heading">
        <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">
            <div
                className="relative rounded-hero w-full overflow-hidden flex flex-col items-center justify-center text-center px-6 py-12 lg:py-24"
                style={{ background: '#D0E9FB' }}
            >
                <div className="absolute rounded-full pointer-events-none" style={{ width: 'min(1553px, 150vw)', height: 'min(1165px, 112vw)', left: '50%', top: '-55%', transform: 'translateX(-50%)', background: '#3CBDFF', filter: 'blur(120px)' }} />
                <div className="absolute rounded-full pointer-events-none" style={{ width: 'min(1553px, 150vw)', height: 'min(1165px, 112vw)', left: '50%', top: '55%', transform: 'translateX(-50%)', background: '#3CBDFF', filter: 'blur(120px)' }} />

                <div className="relative z-10 flex flex-col items-center w-full">
                    <h2 id="final-cta-heading" className="font-work-sans font-medium text-[26px] lg:text-[56px] leading-[32px] lg:leading-[64px] tracking-[-0.5px] lg:tracking-[-2.5px] text-white max-w-[680px] mb-4 lg:mb-5">
                        Para personas que se mueven globalmente, está VIIO.
                    </h2>

                    <p className="font-work-sans font-normal text-[14px] lg:text-[15px] leading-[22px] text-white/80 max-w-[420px] mb-5 lg:mb-7">
                        Accede a tu cuenta desde tu celular con nuestra app en Android y en iOS o desde{' '}
                        <a href="https://wallet.viio.me" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-white transition-colors">wallet.viio.me</a>
                    </p>

                    <p className="font-work-sans font-medium text-[14px] lg:text-[16px] text-white mb-5 lg:mb-7">
                        Descarga VIIO. Únete hoy
                    </p>

                    {/* Stacked on mobile, side by side on sm+ */}
                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto" role="list" aria-label="Descargar la app VIIO">
                        <a href="https://play.google.com/store/apps/details?id=me.viio.wallet.app&hl=es_CO" target="_blank" rel="noopener noreferrer" aria-label="Descargar VIIO en Google Play" role="listitem" className="hover:opacity-90 transition-opacity w-full sm:w-auto flex justify-center">
                            <img src="/assets/google-play-buttom.svg" alt="Disponible en Google Play" className="h-[44px] w-auto" loading="lazy" decoding="async" />
                        </a>
                        <a href="https://apps.apple.com/co/app/viio/id6452803312" target="_blank" rel="noopener noreferrer" aria-label="Descargar VIIO en App Store" role="listitem" className="hover:opacity-90 transition-opacity w-full sm:w-auto flex justify-center">
                            <img src="/assets/app-store-buttom.svg" alt="Disponible en App Store" className="h-[44px] w-auto" loading="lazy" decoding="async" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default FinalCTASection;