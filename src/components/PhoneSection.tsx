import React from 'react';

const PhoneSection: React.FC = () => (
  <div
    className="relative mx-auto w-full max-w-[380px] lg:max-w-[624px] mt-2 lg:mt-[60.5px]"
    style={{ aspectRatio: '624 / 706.5' }}
  >
    {/* Frame 47 — phone + flags wrapper */}
    <div className="absolute inset-0 pointer-events-none" style={{
      width: '100%',
      height: '100%',
      left: '0%',
      top: '0%',
    }}>
      <img
        src="/assets/mock-up-hero-1.png"
        alt="VIIO app mockup"
        className="absolute pointer-events-none"
        style={{
          width: '50.5%',
          left: '24.8%',
          top: '-2.5%',
        }}
      />
      <img
        src="/assets/flags-vertical.png"
        alt="Países soportados"
        className="absolute pointer-events-none"
        style={{
          width: '5.3%',
          left: '82%',
          top: '4%',
        }}
      />
    </div>

    {/* Recarga Pop Up — floating card */}
    <img
      src="/assets/recarga-popup.png"
      alt="Recarga"
      className="absolute pointer-events-none"
      style={{
        width: '38.5%',
        left: '2%',
        top: '35%',
      }}
    />
  </div>
);

export default PhoneSection;
