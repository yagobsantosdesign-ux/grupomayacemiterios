import imgFrame1171274922 from "figma:asset/fc327dd60e544345aa52c2b63d75329e9ab06d6f.png";
import imgFrame1171274921 from "figma:asset/598a21b94e6c6990f8409e67be049272aed8c784.png";
import imgFrame1171274923 from "figma:asset/2f1d62726cc42cc12a4e4edf77039db3b48d1564.png";
import imgFrame1171274924 from "figma:asset/fe7b9e805228b0eb636a1dab76f22573c5dee6dc.png";
import imgFrame1171274925 from "figma:asset/f96252e92aa1d51ca25eaa5118a3820d5ec9b390.png";

function Paragraph() {
  return (
    <div className="h-[16.5px] relative shrink-0 w-[520px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Medium',sans-serif] font-medium leading-[16.5px] left-0 not-italic text-[#c8963e] text-[11px] top-0 tracking-[2.5px] uppercase">Grupo Maya</p>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[36px] relative shrink-0 w-[520px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#0a0a0a] text-[30px] top-0 tracking-[-0.5px]">Nossos Cemitérios</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[52px] relative shrink-0 w-[520px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26px] left-0 not-italic text-[#575757] text-[15px] top-[-1px] w-[433px] whitespace-pre-wrap">O Grupo Maya administra cemitérios em diferentes regiões de São Paulo para atender você com proximidade e cuidado.</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph />
      <Heading />
      <Paragraph1 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <div className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[272.11%] left-0 max-w-none top-[-106.08%] w-full" src={imgFrame1171274922} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="relative shrink-0 w-[156.391px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#0a0a0a] text-[22px] tracking-[-0.3px]">Cemitério Lapa</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#575757] text-[14px] w-[129px] whitespace-pre-wrap">R. Bergson, 347, Vila Leopoldina, SP</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#575757] text-[12px] tracking-[0.5px]">SAIBA MAIS</p>
      </div>
    </div>
  );
}

function Link() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col gap-[24px] items-start justify-end p-[25px] relative rounded-[4px] row-1 self-stretch shrink-0 w-[335px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame3 />
      <Text />
    </div>
  );
}

function Frame2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1171274921} />
    </div>
  );
}

function Text1() {
  return (
    <div className="relative shrink-0 w-[191px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#0a0a0a] text-[22px] tracking-[-0.3px]">Cemitério Lageado</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full relative shrink-0 text-[#575757] text-[14px] w-[min-content] whitespace-pre-wrap">Estrada do Lageado Velho, nº 1490, Vila Independente</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#575757] text-[12px] tracking-[0.5px]">SAIBA MAIS</p>
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[24px] items-start justify-end p-[25px] relative rounded-[4px] row-1 self-stretch shrink-0 w-[336px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame2 />
      <Text1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1171274923} />
    </div>
  );
}

function Text2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full whitespace-pre-wrap">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[26px] min-w-full relative shrink-0 text-[#0a0a0a] text-[22px] tracking-[-0.3px] w-[min-content]">Cemitério Parelheiros</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#575757] text-[14px] w-[156px]">Rua Amaro de Pontes, nº 237, Parelheiros.</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#575757] text-[12px] tracking-[0.5px] w-[107px]">SAIBA MAIS</p>
      </div>
    </div>
  );
}

function Link2() {
  return (
    <div className="bg-white col-1 content-stretch flex flex-col gap-[24px] items-start justify-end p-[25px] relative rounded-[4px] row-2 self-stretch shrink-0 w-[336px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame4 />
      <Text2 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1171274924} />
    </div>
  );
}

function Text3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[26px] relative shrink-0 text-[#0a0a0a] text-[22px] tracking-[-0.3px]">Cemitério da Saudade</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#575757] text-[14px] w-[180px] whitespace-pre-wrap">Rua Samuel de Carvalho, nº 60J. São Sebastião</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#575757] text-[12px] tracking-[0.5px]">SAIBA MAIS</p>
      </div>
    </div>
  );
}

function Link3() {
  return (
    <div className="bg-white col-2 content-stretch flex flex-col gap-[24px] items-start justify-end p-[25px] relative rounded-[4px] row-2 self-stretch shrink-0 w-[335px]" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Frame5 />
      <Text3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="gap-x-[16px] gap-y-[16px] grid-cols-[repeat(2,fit-content(100%))] grid-rows-[repeat(2,minmax(0,1fr))] h-[763px] inline-grid relative shrink-0" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFrame1171274925} />
    </div>
  );
}

function Text4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start not-italic relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[26px] min-w-full relative shrink-0 text-[#0a0a0a] text-[22px] tracking-[-0.3px] w-[min-content] whitespace-pre-wrap">Cemitério Campo Grande</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] relative shrink-0 text-[#575757] text-[14px] w-[206px] whitespace-pre-wrap">Av. Nossa Senhora do Sabará, nº 1371, Campo Grande</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[18px] relative shrink-0 text-[#575757] text-[12px] tracking-[0.5px]">SAIBA MAIS</p>
      </div>
    </div>
  );
}

function Link4() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Link">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="flex flex-col justify-end size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start justify-end p-[25px] relative size-full">
          <Frame6 />
          <Text4 />
        </div>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[1097px]">
      <Container1 />
      <Link4 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] items-start relative shrink-0 w-full">
      <Container />
      <Frame1 />
    </div>
  );
}

export default function Section() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start px-[193px] py-[112px] relative size-full" data-name="Section">
      <Frame />
    </div>
  );
}