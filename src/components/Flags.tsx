import { 
  imgMexico, imgVector, imgCanadaGroup, imgUKGroup, imgUnitedKingdom, 
  imgEuropeanUnion, imgEUGroup, imgUSGroup, imgUSVector,
  imgVector1, imgVector2 
} from './assets';

export function Mexico({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-hidden relative w-[33px] h-[33px]"}>
      <img alt="Mexico Base" className="absolute block max-w-none w-full h-full" src={imgMexico} />
    </div>
  );
}

export function Canada({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-hidden relative w-[33px] h-[33px]"}>
      <img alt="Canada Base" className="absolute block max-w-none w-full h-full" src={imgMexico} />
      <div className="absolute inset-[4.96%_0]">
        <img alt="Leaf" className="absolute block max-w-none w-full h-full" src={imgCanadaGroup} />
      </div>
    </div>
  );
}

export function UnitedKingdom({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-hidden relative w-[33px] h-[33px]"}>
      <img alt="UK Base" className="absolute block max-w-none w-full h-full" src={imgMexico} />
      <div className="absolute inset-[1.72%]">
        <img alt="UK Detail" className="absolute block max-w-none w-full h-full" src={imgUKGroup} />
      </div>
      <img alt="UK Flag" className="absolute block max-w-none w-full h-full" src={imgUnitedKingdom} />
    </div>
  );
}

export function EuropeanUnion({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-hidden relative w-[33px] h-[33px]"}>
      <img alt="EU Base" className="absolute block max-w-none w-full h-full" src={imgEuropeanUnion} />
      <div className="absolute inset-[19.57%]">
        <img alt="Stars" className="absolute block max-w-none w-full h-full" src={imgEUGroup} />
      </div>
    </div>
  );
}

export function UnitedStates({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-hidden relative w-[33px] h-[33px]"}>
      <img alt="US Base" className="absolute block max-w-none w-full h-full" src={imgMexico} />
      <div className="absolute inset-[10.87%_0_0_1.72%]">
        <img alt="US Stripes" className="absolute block max-w-none w-full h-full" src={imgUSGroup} />
      </div>
      <div className="absolute bottom-[50%] left-0 right-[50%] top-0">
        <img alt="US Stars" className="absolute block max-w-none w-full h-full" src={imgUSVector} />
      </div>
    </div>
  );
}

export function Colombia({ className }: { className?: string }) {
  return (
    <div className={className || "overflow-hidden relative w-[33px] h-[33px]"}>
      <div className="absolute inset-[0_0_45.65%_0]">
        <img alt="Yellow" className="block max-w-none w-full h-full" src={imgVector} />
      </div>
      <div className="absolute inset-[71.74%_6.69%_0_6.69%]">
        <img alt="Red" className="block max-w-none w-full h-full" src={imgVector1} />
      </div>
      <div className="absolute bottom-[25%] left-0 right-0 top-[50%]">
        <img alt="Blue" className="block max-w-none w-full h-full" src={imgVector2} />
      </div>
    </div>
  );
}
