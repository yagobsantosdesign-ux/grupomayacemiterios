import svgPaths from "./svg-p82ww0xvl";

function Icon() {
  return (
    <div className="relative shrink-0 size-[12.7px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.7 12.6997">
        <g id="Icon">
          <path d={svgPaths.p127ded80} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0583" />
          <path d={svgPaths.p3c5706a0} id="Vector_2" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.0583" />
        </g>
      </svg>
    </div>
  );
}

function Close() {
  return (
    <div className="relative rounded-[10.16px] shrink-0 size-[24px]" data-name="Close">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center relative size-full">
        <Icon />
      </div>
    </div>
  );
}

function Menu1() {
  return (
    <div className="relative shrink-0" data-name="Menu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Menu</p>
        <Close />
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="col-1 h-[33.264px] ml-0 mt-0 relative row-1 w-[33.236px]" data-name="Logo">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 33.236 33.2644">
        <g id="Logo">
          <path d={svgPaths.p35fdad80} fill="var(--fill-0, #D99E45)" id="Vector" />
          <path d={svgPaths.p70df480} fill="var(--fill-0, #D99E45)" id="Vector_2" />
          <path d={svgPaths.p15ab0c80} fill="var(--fill-0, #D99E45)" id="Vector_3" />
          <path d={svgPaths.p30a56900} fill="var(--fill-0, #D99E45)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Maya() {
  return (
    <div className="col-1 h-[23.863px] ml-0 mt-[21.32%] relative row-1 w-[78.39px]" data-name="Maya">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 78.3898 23.8633">
        <g id="Maya">
          <path d={svgPaths.p2510ab00} fill="var(--fill-0, #092A1A)" id="Vector" />
          <path d={svgPaths.p2a1e8000} fill="var(--fill-0, #092A1A)" id="Vector_2" />
          <path d={svgPaths.p3b013c00} fill="var(--fill-0, #092A1A)" id="Vector_3" />
          <path d={svgPaths.p2e997380} fill="var(--fill-0, #092A1A)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="col-1 h-[3.741px] ml-[0.31%] mt-0 relative row-1 w-[19.343px]" data-name="Group">
      <div className="absolute inset-[-1.99%_-0.38%_-1.98%_-0.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.4918 3.88955">
          <g id="Group">
            <path d={svgPaths.p22ce1700} fill="var(--fill-0, #092A1A)" id="Vector" stroke="var(--stroke-0, #092A1A)" strokeWidth="0.074331" />
            <path d={svgPaths.p31c9e400} fill="var(--fill-0, #092A1A)" id="Vector_2" stroke="var(--stroke-0, #092A1A)" strokeWidth="0.074331" />
            <path d={svgPaths.p115cd480} fill="var(--fill-0, #092A1A)" id="Vector_3" stroke="var(--stroke-0, #092A1A)" strokeWidth="0.074331" />
            <path d={svgPaths.p2339da00} fill="var(--fill-0, #092A1A)" id="Vector_4" stroke="var(--stroke-0, #092A1A)" strokeWidth="0.074331" />
            <path d={svgPaths.p10fa2970} fill="var(--fill-0, #092A1A)" id="Vector_5" stroke="var(--stroke-0, #092A1A)" strokeWidth="0.074331" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Maya />
      <Group1 />
    </div>
  );
}

function Type() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.22%] mt-[24.18%] place-items-start relative row-1" data-name="Type">
      <Group />
    </div>
  );
}

function LogoGrupoMaya() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo Grupo Maya">
      <Logo1 />
      <Type />
    </div>
  );
}

function Logo() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <LogoGrupoMaya />
      </div>
    </div>
  );
}

function IcRoundPhone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ic:round-phone">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="ic:round-phone">
          <path d={svgPaths.p3b953c20} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-[#c8963e] h-[37px] relative rounded-[4px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] h-full items-center justify-center pl-[16px] pr-[20px] py-[8px] relative">
        <IcRoundPhone />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[21px] not-italic relative shrink-0 text-[14px] text-white">Fale conosco</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between max-w-[1338px] relative shrink-0 w-full" data-name="Container">
      <Menu1 />
      <Logo />
      <Link />
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[#fbfbf9] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[6px] relative w-full">
          <Container1 />
        </div>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Sorts_Mill_Goudy:Regular',sans-serif] h-full leading-[48px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[32px] tracking-[-0.64px] whitespace-pre-wrap">Home</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Sorts_Mill_Goudy:Regular',sans-serif] h-full leading-[48px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[32px] tracking-[-0.64px] whitespace-pre-wrap">Sobre</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Link">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <p className="flex-[1_0_0] font-['Sorts_Mill_Goudy:Regular',sans-serif] h-full leading-[48px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[32px] tracking-[-0.64px] whitespace-pre-wrap">Serviços</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="content-stretch flex items-center py-[16px] relative shrink-0 w-full" data-name="Link">
      <p className="flex-[1_0_0] font-['Sorts_Mill_Goudy:Regular',sans-serif] h-full leading-[48px] min-h-px min-w-px not-italic relative text-[#2d2d2d] text-[32px] tracking-[-0.64px] whitespace-pre-wrap">Cemitérios</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="max-w-[1338px] relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center justify-center max-w-[inherit] relative w-full">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
      </div>
    </div>
  );
}

function Gaveta() {
  return (
    <div className="bg-[#fbfbf9] relative shrink-0 w-full" data-name="Gaveta">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center pb-[24px] px-[40px] relative w-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[1199px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0dc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Navigation />
        <Gaveta />
      </div>
    </div>
  );
}

export default function Menu() {
  return (
    <div className="backdrop-blur-[10.15px] bg-[rgba(255,255,255,0.16)] content-stretch flex flex-col items-start pb-px relative size-full" data-name="Menu">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
      <Container />
    </div>
  );
}