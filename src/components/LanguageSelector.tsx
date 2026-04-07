import React from 'react';

const LanguageSelector: React.FC = () => {
  return (
    <div className="flex items-center gap-2 cursor-pointer">
      <img
        src="/assets/flag-colombia.svg"
        alt="Colombia"
        className="w-6 h-6 rounded-full"
      />
      <img
        src="/assets/chevron-down.svg"
        alt=""
        aria-hidden="true"
        className="ml-[5.63px]"
        style={{ width: '12px', height: '7.41px' }}
      />
    </div>
  );
};

export default LanguageSelector;
