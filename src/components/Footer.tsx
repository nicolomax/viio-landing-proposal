import React from 'react';

const columns = [
    {
        heading: 'Productos',
        links: [
            { label: 'Empresas', href: '/empresas' },
            { label: 'Cuenta', href: '/cuenta' },
            { label: 'Tarjeta', href: '/tarjeta' },
            { label: 'Seguridad', href: '/seguridad' },
        ],
    },
    {
        heading: 'Tasas y tarifas',
        links: [
            { label: 'Tarifas de tus productos', href: '/tarifas' },
        ],
    },
    {
        heading: 'Ayuda',
        links: [
            { label: 'Contacto', href: '/contacto' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'T&C', href: '/terminos' },
        ],
    },
    {
        heading: 'Legal',
        links: [
            { label: 'Política de privacidad', href: '/privacidad' },
        ],
    },
];

const Footer: React.FC = () => (
    <footer
        className="bg-page-bg w-full"
        aria-label="Pie de página de VIIO"
    >
        <div className="w-[calc(100%-25px)] lg:w-[calc(100%-48px)] mx-auto max-w-[1232px] py-14 lg:py-16">

            {/* ── Main grid ── */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12 lg:mb-16">

                {/* Column 1 — Brand / Logo */}
                <div className="col-span-2 lg:col-span-1">
                    <a href="/" aria-label="VIIO — Ir al inicio" className="inline-block">
                        <img
                            src="/assets/viio-logo.svg"
                            alt="VIIO"
                            width="100"
                            height="20"
                            className="h-6 w-auto opacity-40"
                            loading="lazy"
                            decoding="async"
                        />
                    </a>
                </div>

                {/* Columns 2–5 — Nav groups */}
                {columns.map((col) => (
                    <nav
                        key={col.heading}
                        aria-label={`Navegación: ${col.heading}`}
                    >
                        <h3 className="font-work-sans font-medium text-[14px] leading-[20px] text-[#0D1117] mb-4">
                            {col.heading}
                        </h3>
                        <ul className="flex flex-col gap-3 list-none">
                            {col.links.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="font-work-sans font-normal text-[14px] leading-[20px] text-[#9CA3AF] hover:text-[#6B7280] transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                ))}

            </div>

            {/* ── Divider ── */}
            <div className="border-t border-[#E5E7EB] mb-6" />

            {/* ── Legal disclaimer ── */}
            <p className="font-work-sans font-normal text-[11px] lg:text-[12px] leading-[18px] text-[#9CA3AF]">
                Persimon (VIIO) No presta ni ofrece servicios financieros ni lleva a cabo ninguna actividad propia de las entidades financieras que requieren autorización para su funcionamiento. Al utilizar los servicios de VIIO, los usuarios reconocen expresamente que conocen las particularidades y los riesgos asociados a los mismos, según se establece en los términos y condiciones disponibles en esta web.{' '}
                <span>© 2026 viio.me</span>
            </p>

        </div>
    </footer>
);

export default Footer;