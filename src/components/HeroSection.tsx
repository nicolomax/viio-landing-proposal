import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import PhoneSection from './PhoneSection';

const HeroSection: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // Mobile: shorter translate + faster timing to respect quick scroll behavior
  // Desktop: full cinematic timing
  const anim = (delayMs: number, mobileDelayMs?: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 1024;
    const delay = isMobile ? (mobileDelayMs ?? delayMs * 0.6) : delayMs;
    const translateY = isMobile ? '14px' : '24px';

    return {
      opacity: mounted ? 1 : 0,
      transform: mounted ? 'translateY(0px)' : `translateY(${translateY})`,
      transition: `opacity 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms,
                   transform 0.6s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    };
  };

  const words = 'Muévete globalmente con VIIO.'.split(' ');

  return (
    <section className="bg-page-bg w-full overflow-hidden" style={{ height: 'fit-content' }}>
      <div className="relative overflow-hidden bg-hero-base rounded-hero mt-[14px] lg:mt-6 max-h-[820px] lg:max-h-[1105px] w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto">

        {/* Ellipse 5 — top glow */}
        <div className="absolute rounded-full pointer-events-none" style={{
          width: 'min(1553px, 150vw)', height: 'min(1165px, 112vw)',
          left: '50%', top: '-55%', transform: 'translateX(-50%)',
          background: '#3CBDFF', filter: 'blur(120px)',
        }} />

        {/* Ellipse 6 — bottom glow */}
        <div className="absolute rounded-full pointer-events-none" style={{
          width: 'min(1553px, 150vw)', height: 'min(1165px, 112vw)',
          left: '50%', top: '55%', transform: 'translateX(-50%)',
          background: '#3CBDFF', filter: 'blur(120px)',
        }} />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center pt-[75px] lg:pt-hero-card-pt px-6 lg:px-hero-card-px gap-hero-gap">

          {/* Navbar */}
          <div style={anim(0)} className="w-full">
            <Navbar />
          </div>

          <div className="flex flex-col items-center mt-8 lg:mt-hero-content-mt gap-hero-gap w-full">

            {/*
              H1 — word-by-word on desktop, line-by-line on mobile.
              On mobile, individual word spans cause line-height jank — instead
              we animate the whole heading as one block.
            */}
            <h1
              className="font-work-sans font-medium text-white text-[48px] lg:text-[96px] leading-[52px] lg:leading-[78px] tracking-[-2px] lg:tracking-[-6.5px] max-w-full lg:max-w-[850px] text-center"
              aria-label="Muévete globalmente con VIIO."
            >
              {/* Mobile: single block animation */}
              <span className="lg:hidden" style={anim(80)}>
                Muévete globalmente con VIIO.
              </span>

              {/* Desktop: word-by-word */}
              <span className="hidden lg:inline" aria-hidden="true">
                {words.map((word, i) => (
                  <span
                    key={i}
                    className="inline-block"
                    style={{
                      ...anim(120 + i * 80),
                      marginRight: i < words.length - 1 ? '0.22em' : 0,
                    }}
                  >
                    {word}
                  </span>
                ))}
              </span>
            </h1>

            {/* Description */}
            <p
              className="font-work-sans font-normal text-white text-[16px] leading-[24px] max-w-full lg:max-w-[600px] text-center"
              style={anim(520, 200)}
            >
              Tu cuenta en dólares para guardar, transferir y comprar, donde y como tú quieras.
            </p>

            {/* Buttons */}
            <div className="flex flex-col lg:flex-row gap-3 lg:gap-[24px] w-full lg:w-auto">
              <button
                className="bg-viio-blue-cta text-white rounded-full font-work-sans font-bold px-hero-btn-px py-[14px] lg:py-hero-btn-py text-hero-btn shadow-btn hover:opacity-90 transition-opacity w-full lg:w-auto"
                style={anim(620, 280)}
              >
                Descarga la app
              </button>
              <button
                className="bg-transparent border border-white text-white rounded-full font-work-sans font-bold px-hero-btn-px py-[14px] lg:py-hero-btn-py text-hero-btn shadow-btn hover:bg-white/10 transition-colors w-full lg:w-auto"
                style={anim(720, 360)}
              >
                Crea tu cuenta
              </button>
            </div>

          </div>
        </div>

        {/* Bottom fade overlay — mobile only */}
        <div className="absolute bottom-0 left-0 right-0 lg:hidden pointer-events-none" style={{
          height: '120px',
          background: 'linear-gradient(to bottom, transparent, #D0E9FB)',
          zIndex: 20,
        }} />

        {/* Phone mockup */}
        <div style={anim(800, 420)}>
          <PhoneSection />
        </div>

      </div>
    </section>
  );
};

export default HeroSection;