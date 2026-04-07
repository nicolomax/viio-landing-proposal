import { useState } from 'react'
import { imgIPhone16Pro, imgDashboard1 } from './assets'
import { Colombia, UnitedStates, EuropeanUnion, UnitedKingdom, Canada, Mexico } from './Flags'

export const PhoneMockup = () => {
  const [pagas, setPagas] = useState('$10.000.000')
  const [recargas, setRecargas] = useState('$2.722,27')

  return (
    <div className="relative w-full max-w-[1077px] h-[749px] mx-auto z-20" style={{ transform: 'translateX(2px)' }}>
      {/* 
        Mockup Container (node 92:566)
        x=152.5, y=763 in the Header. 
        It extends 749px below, bleeding out of the 1077px card!
      */}

      {/* 
        Phone Screen (node 92:567) 
        x=306.26, y=0 
      */}
      <div className="absolute top-0 w-[308.56px] h-[670.86px] z-20" style={{ left: '306.26px' }}>
        <div className="absolute left-[0.23px] top-[30px] w-[308px] h-[637px] rounded-[38px] overflow-hidden bg-white z-0">
          <img src={imgDashboard1} className="w-full h-auto" alt="Dashboard content" />
        </div>
        <img src={imgIPhone16Pro} className="absolute inset-0 z-10 w-full h-full object-contain pointer-events-none" alt="iPhone Case" />
      </div>

      {/* 
        Floating Flag Column (node 92:578) 
        x=639.5, y=36
      */}
      <div className="absolute flex flex-col gap-[-10px] z-10" style={{ left: '600px', top: '36px' }}>
        <Colombia className="w-[33px] h-[33px] rounded-full overflow-hidden relative shadow-sm" />
        <UnitedStates className="w-[33px] h-[33px] rounded-full overflow-hidden relative shadow-sm" />
        <EuropeanUnion className="w-[33px] h-[33px] rounded-full overflow-hidden relative shadow-sm" />
        <UnitedKingdom className="w-[33px] h-[33px] rounded-full overflow-hidden relative shadow-sm" />
        <Canada className="w-[33px] h-[33px] rounded-full overflow-hidden relative shadow-sm" />
        <Mexico className="w-[33px] h-[33px] rounded-full overflow-hidden relative shadow-sm" />
      </div>

      {/* 
        Floating Input Card (node 92:585)
        x=80.5, y=153
        It has a specific complex drop shadow.
      */}
      <div
        className="absolute bg-white rounded-[13.589px] w-[201px] h-[118.335px] z-30 flex flex-col justify-center px-[14.7px]"
        style={{
          left: '80.5px',
          top: '153px',
          boxShadow: '0px 2.831px 6.794px 0px rgba(0,0,0,0.03), 0px 11.89px 11.89px 0px rgba(0,0,0,0.03), 0px 26.611px 15.854px 0px rgba(0,0,0,0.02), 0px 47.561px 19.251px 0px rgba(0,0,0,0.01), 0px 74.738px 20.949px 0px rgba(0,0,0,0)'
        }}
      >
        <div className="flex flex-col gap-[7.3px] mb-[15px]">
          <span className="font-['Work_Sans'] font-medium text-[9.06px] text-[#8e8e8e] leading-none mb-[1px]">Pagas:</span>
          <div className="bg-white flex items-center p-[6.8px] rounded-lg border border-[transparent] relative">
            <div className="absolute inset-0 bg-white shadow-sm rounded-lg" />
            <div className="relative z-10 flex items-center gap-[4px] w-full">
              <div className="flex items-center gap-[3.4px] border-[0.566px] border-[#e1e1e1] px-[4.5px] py-[2.2px] rounded-full bg-white">
                <span className="font-['Work_Sans'] font-medium text-[9.06px] text-[#4b4b4b]">COP</span>
                <Colombia className="w-[13.5px] h-[13.5px] rounded-full relative overflow-hidden" />
              </div>
              <input value={pagas} onChange={e => setPagas(e.target.value)} className="w-full bg-transparent font-['Work_Sans'] font-medium text-[9.06px] text-black focus:outline-none" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[7.3px]">
          <span className="font-['Work_Sans'] font-medium text-[9.06px] text-[#8e8e8e] leading-none mb-[1px]">Recargas:</span>
          <div className="bg-white flex items-center p-[6.8px] rounded-lg border border-[transparent] relative">
            <div className="absolute inset-0 bg-white shadow-sm rounded-lg" />
            <div className="relative z-10 flex items-center gap-[4px] w-full">
              <div className="flex items-center gap-[3.4px] border-[0.566px] border-[#e1e1e1] px-[4.5px] py-[2.2px] rounded-[163px] bg-white">
                <span className="font-['Work_Sans'] font-medium text-[9.06px] text-[#4b4b4b]">USD</span>
                <UnitedStates className="w-[13.5px] h-[13.5px] rounded-full relative overflow-hidden" />
              </div>
              <input value={recargas} onChange={e => setRecargas(e.target.value)} className="w-full bg-transparent font-['Work_Sans'] font-medium text-[9.06px] text-black focus:outline-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
