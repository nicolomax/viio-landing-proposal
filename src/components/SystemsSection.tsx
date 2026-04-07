import React from 'react';

const cards = [
  {
    title: 'Sin comisiones\nmensuales',
    description: 'Sin costos ocultos al pagar con dólares en todo el mundo',
  },
  {
    title: 'Pagos globales\ncon aceptación Visa',
    description: 'Usa dólares en millones de comercios con la red Visa.',
  },
  {
    title: 'Obtén tu\ntarjeta en minutos',
    description: 'Solicita tu tarjeta VIIO y paga globalmente al instante',
  },
];

const SystemsSection: React.FC = () => (
  <section className="bg-page-bg w-full py-10 lg:py-24">
    <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px]">

      <p className="font-work-sans font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] uppercase text-viio-blue-cta mb-4 lg:mb-8">
        Tarjeta en dólares digitales
      </p>

      <h2 className="font-work-sans font-medium text-[28px] lg:text-[64px] leading-[34px] lg:leading-[68px] tracking-[-1px] lg:tracking-[-3px] text-[#0D1117] mb-4 lg:mb-8 max-w-[700px]">
        La forma más fácil de usar{' '}
        <span className="text-viio-blue-cta">dólares a nivel global.</span>
      </h2>

      <p className="font-work-sans font-normal text-[15px] lg:text-[16px] leading-[24px] text-[#6B7280] max-w-[560px] mb-8 lg:mb-16">
        Usa tu tarjeta VIIO para pagar con dólares en cualquier comercio que acepte Visa. Sin comisiones ocultas, con conversiones en tiempo real y control total desde la app.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 mb-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-hero flex flex-col"
            style={{ padding: '32px 24px', gap: '18px' }}
          >
            <h3 className="font-work-sans font-medium text-[18px] lg:text-[22px] leading-[26px] lg:leading-[28px] tracking-[-0.5px] text-[#0D1117] whitespace-pre-line">
              {card.title}
            </h3>
            <p className="font-work-sans font-normal text-[14px] lg:text-[15px] leading-[22px] text-[#6B7280]">
              {card.description}
            </p>
          </div>
        ))}
      </div>

      <button className="bg-viio-blue-cta text-white font-work-sans font-semibold text-[14px] lg:text-[15px] rounded-full px-10 py-4 hover:opacity-90 transition-opacity inline-flex items-center gap-3 shadow-btn w-full lg:w-auto justify-center lg:justify-start">
        Conoce más <span aria-hidden="true">→</span>
      </button>

    </div>
  </section>
);

export default SystemsSection;