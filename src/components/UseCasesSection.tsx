import React from 'react';

const useCases = [
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 7.28V5c0-1.1-.9-2-2-2H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-2.28c.59-.35 1-.98 1-1.72V9c0-.74-.41-1.37-1-1.72zM20 9v6h-7V9h7zM5 19V5h14v2h-6c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h6v2H5z" fill="white" /><circle cx="16" cy="12" r="1.5" fill="white" /></svg>),
    title: 'Freelancers',
    description: 'Recibe pagos internacionales en dólares digitales sin las comisiones abusivas de los bancos locales.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" fill="white" /></svg>),
    title: 'Nómadas digitales',
    description: 'Mueve tu dinero contigo. Gestiona tus finanzas en una moneda estable mientras exploras el mundo.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20 18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z" fill="white" /></svg>),
    title: 'Remote workers',
    description: 'Ahorra en una moneda fuerte independientemente de dónde te encuentres.',
  },
  {
    icon: (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z" fill="white" /></svg>),
    title: 'Viajeros',
    description: 'Convierte y gasta en cualquier lugar con la mejor tasa de cambio del mercado, sin sorpresas.',
  },
];

const UseCasesSection: React.FC = () => (
  <section className="bg-page-bg w-full py-10 lg:py-24" aria-labelledby="use-cases-heading">
    <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">

      <p className="font-work-sans font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] uppercase text-viio-blue-cta mb-4 lg:mb-6">
        Viviendo global
      </p>

      <h2
        id="use-cases-heading"
        className="font-work-sans font-medium text-[28px] lg:text-[64px] leading-[34px] lg:leading-[68px] tracking-[-1px] lg:tracking-[-3px] text-[#0D1117] mb-4 lg:mb-8"
      >
        Casos de uso <br className="hidden lg:block" />
        para <span className="text-viio-blue-cta">una vida global.</span>
      </h2>

      <p className="font-work-sans font-normal text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] max-w-[560px] mb-8 lg:mb-16">
        VIIO está diseñado para personas que trabajan, viajan y viven sin fronteras usando dólares.
      </p>

      {/* 2-col on mobile, 4-col on desktop */}
      <ul className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-6 list-none" aria-label="Casos de uso de VIIO">
        {useCases.map((useCase, i) => (
          <li key={i}>
            <article className="bg-white rounded-[24px] flex flex-col gap-4 h-full p-5 lg:p-8">
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-viio-blue-cta flex items-center justify-center shrink-0" aria-hidden="true">
                {useCase.icon}
              </div>
              <h3 className="font-work-sans font-medium text-[14px] lg:text-[20px] leading-[20px] lg:leading-[26px] tracking-[-0.3px] text-[#0D1117]">
                {useCase.title}
              </h3>
              <p className="font-work-sans font-normal text-[12px] lg:text-[14px] leading-[18px] lg:leading-[22px] text-[#6B7280]">
                {useCase.description}
              </p>
            </article>
          </li>
        ))}
      </ul>

    </div>
  </section>
);

export default UseCasesSection;