import svgPaths from "./svg-0xn1amvdvy";
import imgImage from "figma:asset/ec7fbed93c58d7a7eda0608d5476c38a21e63f0c.png";

function Image() {
  return (
    <div className="absolute h-[660px] left-0 top-0 w-[1482px]" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[36px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g id="Icon">
          <path d={svgPaths.p2c717700} fill="var(--fill-0, white)" fillOpacity="0.15" id="Vector" stroke="var(--stroke-0, white)" strokeOpacity="0.35" strokeWidth="1.5" />
          <path d={svgPaths.p10fc1080} fill="var(--fill-0, white)" fillOpacity="0.5" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[274.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[42.5px] left-0 not-italic text-[34px] text-white top-0 tracking-[-1px]">Estamos disponíveis</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[42.5px] relative shrink-0 w-[213.547px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[42.5px] left-0 not-italic text-[34px] text-white top-0 tracking-[-1px]">24 horas por dia</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[85px] relative shrink-0 w-[344px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start justify-end relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[344px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[15px] text-[rgba(255,255,255,0.7)] top-[-1px] w-[344px] whitespace-pre-wrap">Em momentos difíceis, nossa equipe está pronta para orientar e acolher sua família com respeito e humanidade. Entre em contato agora pelo WhatsApp.</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[344px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[28px] h-[261px] items-start left-[48px] top-[56px] w-[344px]" data-name="Container">
      <Icon />
      <Container3 />
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 top-0 w-[135.219px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[15px]">Fale conosco</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-center justify-center left-0 top-[48px] w-[135.219px]" data-name="Text">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[#0a0a0a] text-[15px]">Fale conosco</p>
    </div>
  );
}

function Link() {
  return (
    <div className="absolute bg-white h-[48px] left-[48px] overflow-clip rounded-[4px] top-[396px] w-[135.219px]" data-name="Link">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[#c8963e] h-[500px] relative shrink-0 w-[440px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container2 />
        <Link />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex h-[500px] items-start left-[21px] pl-[52px] top-[80px] w-[1440px]" data-name="Container">
      <Container1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="relative size-full" data-name="Section">
      <Image />
      <Container />
    </div>
  );
}