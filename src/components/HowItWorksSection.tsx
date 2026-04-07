import React from 'react';

const steps = [
    {
        number: 1,
        icon: (
            // Person-add icon
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" fill="white" />
            </svg>
        ),
        title: 'Crea tu cuenta',
        description: 'Regístrate y accede a tu cuenta VIIO en dólares digitales.',
        image: '/assets/crea-tu-cuenta-viio.svg',
        imageAlt: 'Mujer sonriendo con auriculares creando su cuenta VIIO',
    },
    {
        number: 2,
        icon: (
            // Wallet/card icon
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 7.28V5c0-1.1-.9-2-2-2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" fill="white" />
                <circle cx="16" cy="12" r="1.5" fill="white" />
            </svg>
        ),
        title: 'Recarga tu cuenta',
        description: 'Añade fondos fácilmente y comienza a gestionar tu dinero.',
        image: '/assets/recarga-tu-cuenta-viio.svg',
        imageAlt: 'Mano sosteniendo teléfono con app VIIO mostrando saldo en dólares',
    },
    {
        number: 3,
        icon: (
            // Credit card icon
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" fill="white" />
            </svg>
        ),
        title: 'Solicita tu tarjeta',
        description: 'Usa tu tarjeta VIIO y paga globalmente',
        image: '/assets/solicita-tu-tarjeta-viio.svg',
        imageAlt: 'Tarjeta VIIO siendo usada en terminal de pago',
    },
];

const HowItWorksSection: React.FC = () => (
    <section
        className="bg-page-bg w-full"
        style={{ padding: '80px 0' }}
        aria-labelledby="how-it-works-heading"
    >
        <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">

            {/* Heading — centered */}
            <div className="text-center" style={{ marginBottom: '80px' }}>
                <h2
                    id="how-it-works-heading"
                    className="font-work-sans font-medium text-[40px] lg:text-[64px] leading-[44px] lg:leading-[68px] tracking-[-1.5px] lg:tracking-[-3px] text-[#0D1117]"
                >
                    Cómo funciona <span className="text-viio-blue-cta">VIIO.</span>
                </h2>
                <p className="font-work-sans font-normal text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] mt-4 max-w-[420px] mx-auto">
                    Empieza a usar dólares digitales en minutos y paga globalmente sin fricción.
                </p>
            </div>

            {/* Steps grid — 48px gap between cards, 32px outer margin accounted in container */}
            <ol
                className="grid grid-cols-1 lg:grid-cols-3 list-none items-stretch"
                style={{ gap: '48px' }}
                aria-label="Pasos para comenzar con VIIO"
            >
                {steps.map((step) => (
                    <li key={step.number} className="relative flex flex-col items-center h-full" style={{ paddingTop: '24px' }}>

                        {/* Step number badge — 48×48px per Figma, centered on card top edge */}
                        <div
                            className="absolute top-0 z-10 w-12 h-12 rounded-full bg-white border border-[#E5E7EB] flex items-center justify-center"
                            style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.10)' }}
                            aria-hidden="true"
                        >
                            <span className="font-work-sans font-semibold text-[15px] text-viio-blue-cta leading-none">
                                {step.number}
                            </span>
                        </div>

                        {/* Card — 40px padding, 66px bottom */}
                        <article
                            className="bg-white rounded-hero w-full h-full flex flex-col items-center text-center overflow-hidden"
                            style={{ paddingTop: '40px', paddingLeft: '40px', paddingRight: '40px', paddingBottom: '66px' }}
                        >
                            {/* Icon — cyan rounded square, 72px */}
                            <div
                                className="w-[72px] h-[72px] rounded-2xl bg-viio-blue-cta flex items-center justify-center shrink-0"
                                style={{ marginBottom: '24px' }}
                                aria-hidden="true"
                            >
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h3 className="font-work-sans font-medium text-[22px] lg:text-[24px] leading-[30px] tracking-[-0.3px] text-[#0D1117]" style={{ marginBottom: '12px' }}>
                                {step.title}
                            </h3>

                            {/* Description */}
                            <p className="font-work-sans font-normal text-[14px] leading-[22px] text-[#6B7280]" style={{ marginBottom: '24px' }}>
                                {step.description}
                            </p>

                            {/* Step photo — rounded corners, mt-auto pushes to bottom regardless of content height */}
                            <div className="w-full rounded-2xl overflow-hidden mt-auto" style={{ aspectRatio: '3/2' }}>
                                <img
                                    src={step.image}
                                    alt={step.imageAlt}
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                    decoding="async"
                                    onError={(e) => { e.currentTarget.style.display = 'none'; }}
                                />
                            </div>
                        </article>
                    </li>
                ))}
            </ol>

        </div>
    </section>
);

export default HowItWorksSection;