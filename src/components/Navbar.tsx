import React, { useState } from 'react'
import LanguageSelector from './LanguageSelector'

const Navbar = () => {
  const [activeSegment, setActiveSegment] = useState<'personas' | 'empresas'>('personas')

  return (
    <nav className="absolute top-[12px] lg:top-[40px] left-1/2 -translate-x-1/2 w-full max-w-[1152px] px-[14px] lg:px-0 z-50">
      <div className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.8)] rounded-full h-[57px] flex items-center justify-between pl-[32px] pr-[32px] py-[16px] shadow-[0px_8px_32px_0px_rgba(0,0,0,0.04)]">

        {/* Logo */}
        <div className="shrink-0 flex items-center">
          <img src="/assets/viio-logo.svg" alt="VIIO" className="h-[16px] w-[80px] object-contain" />
        </div>

        {/* Segment Toggles */}
        <div className="hidden lg:flex items-center gap-[6px] bg-white/50 rounded-full p-[5px]">
          <button
            onClick={() => setActiveSegment('personas')}
            className={`px-[18px] py-[8px] flex items-center justify-center rounded-full text-hero-btn font-medium tracking-[-0.3px] transition-all duration-300 ${activeSegment === 'personas'
              ? 'bg-viio-blue-cta text-white shadow-btn'
              : 'text-viio-nav-inactive'
              }`}
          >
            Personas
          </button>
          <button
            onClick={() => setActiveSegment('empresas')}
            className={`px-[18px] py-[8px] flex items-center justify-center rounded-full text-hero-btn font-medium tracking-[-0.3px] transition-all duration-300 ${activeSegment === 'empresas'
              ? 'bg-viio-blue-cta text-white shadow-btn'
              : 'text-viio-nav-inactive'
              }`}
          >
            Empresas
          </button>
        </div>

        {/* Nav Links — desktop only */}
        <div className="hidden lg:flex items-center gap-[48px]">
          <a href="#" className="font-work-sans text-hero-btn font-medium text-viio-nav-inactive tracking-[-0.3px] hover:text-viio-blue-cta transition-colors leading-[12px]">Productos</a>
          <a href="#" className="font-work-sans text-hero-btn font-medium text-viio-nav-inactive tracking-[-0.3px] hover:text-viio-blue-cta transition-colors leading-[12px]">Tasas y tarifas</a>
          <a href="#" className="font-work-sans text-hero-btn font-medium text-viio-nav-inactive tracking-[-0.3px] hover:text-viio-blue-cta transition-colors leading-[12px]">Blog</a>
          <a href="#" className="font-work-sans text-hero-btn font-medium text-viio-nav-inactive tracking-[-0.3px] hover:text-viio-blue-cta transition-colors leading-[12px]">Ayuda</a>

          <LanguageSelector />
        </div>

        {/* Mobile right-side controls */}
        <div className="flex lg:hidden items-center gap-2">
          <LanguageSelector />
          <button className="p-2 rounded-full text-gray-700 hover:bg-black/5 transition-colors" aria-label="Menú">
            <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="20" height="2" rx="1" fill="currentColor" />
              <rect y="6" width="20" height="2" rx="1" fill="currentColor" />
              <rect y="12" width="20" height="2" rx="1" fill="currentColor" />
            </svg>
          </button>
        </div>

        {/* Auth Button — desktop only */}
        <div className="hidden lg:flex shrink-0 items-center">
          <button className="bg-white text-black font-work-sans text-hero-btn font-bold px-hero-btn-px py-hero-btn-py rounded-full shadow-btn tracking-[-0.3px] hover:scale-105 transition-transform">
            Inicia sesión
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;

