function Paragraph() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.6] left-[0.5px] not-italic text-[#575757] text-[16px] top-[-1.38px] w-[445px] whitespace-pre-wrap">Oferecemos uma gama completa de serviços para que você não precise se preocupar com nada.</p>
    </div>
  );
}

export default function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative size-full" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#c8963e] text-[14px] tracking-[2.4px] uppercase">NOSSOS SERVIÇOS</p>
      <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.5px] w-[503.018px] whitespace-pre-wrap">Soluções completas para todas as necessidades</p>
      <Paragraph />
    </div>
  );
}