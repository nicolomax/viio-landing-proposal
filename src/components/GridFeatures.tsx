import React from 'react';

const features = [
    {
        icon: '/assets/icon-global.svg',
        alt: 'Cuenta global',
        title: ['Una cuenta global', 'en dólares digitales'],
        description: 'Accede a una cuenta en USD para recibir pagos desde EE. UU. y Europa.',
    },
    {
        icon: '/assets/icon-transfer.svg',
        alt: 'Transferencias',
        title: ['Mueve tu dinero', 'sin límites'],
        description: 'Recibe pagos internacionales, transfiere fondos y retira fácilmente.',
    },
    {
        icon: '/assets/icon-card.svg',
        alt: 'Tarjeta',
        title: ['Paga con tu tarjeta', 'en todo el mundo'],
        description: 'Usa tu tarjeta VIIO física o virtual para pagar con USDC. Aceptada globalmente a través de la red Visa.',
    },
];

const GridFeatures: React.FC = () => (
    <section className="bg-page-bg w-full">
        <div className="w-full max-w-[1232px] mx-auto px-6 py-20 flex flex-col items-center gap-14">

            <div className="flex flex-col items-center gap-5 text-center">
                <h2 className="font-work-sans font-medium text-[40px] lg:text-[52px] leading-[1.1] tracking-[-1.5px] text-[#0D0D0D]">
                    Todo lo que puedes<br />
                    hacer con{' '}
                    <span className="text-[#3CBDFF]">tu cuenta VIIO.</span>
                </h2>
                <p className="font-work-sans font-normal text-[16px] leading-[26px] text-[#9CA3AF] max-w-[520px]">
                    Gestiona dólares digitales, paga globalmente y mueve tu dinero sin límites,
                    todo desde una sola cuenta.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
                {features.map(({ icon, alt, title, description }, i) => (
                    <div key={i} className="bg-white rounded-2xl p-8 flex flex-col gap-5">
                        <img src={icon} alt={alt} className="w-7 h-7" />
                        <div className="flex flex-col gap-2">
                            <h3 className="font-work-sans font-medium text-[22px] leading-[30px] tracking-[-0.5px] text-[#0D0D0D]">
                                {title[0]}<br />{title[1]}
                            </h3>
                            <p className="font-work-sans font-normal text-[14px] leading-[22px] text-[#9CA3AF]">
                                {description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    </section>
);

export default GridFeatures;