import svgPaths from "./svg-9lbd7jlnxv";
import imgImageCemiterioCampoGrande from "figma:asset/30be17876f10a6eb4f046e14c0dea29cbd38f0e7.png";
import imgImageMemorialGarden from "figma:asset/a6a03c9dac9f2083ffa65c8917c8cf3f3d37a5b5.png";
import imgImagem from "figma:asset/cb5a49899d56b150f15997a1bc2bc2a55a2f88d4.png";
import imgImagem1 from "figma:asset/fc923101d7edf52b83b293511189487e62c7b26c.png";
import imgImageAreaVerdeDoCemiterioCampoGrande from "figma:asset/622070712a82a3b66ff401c26ca448a2373e6c93.png";
import { imgGroup } from "./svg-vs28o";

function ImageCemiterioCampoGrande() {
  return (
    <div className="h-[706px] relative shrink-0 w-full" data-name="Image (Cemitério Campo Grande)">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[269.83%] left-0 max-w-none top-[-149.69%] w-full" src={imgImageCemiterioCampoGrande} />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[706px] items-start left-0 overflow-clip top-[358.38px] w-[1903px]" data-name="Container">
      <ImageCemiterioCampoGrande />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#0a0a0a] text-[14px] top-0 tracking-[2.4px] uppercase">DESDE 1953 • ZONA SUL, SÃO PAULO</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="font-['Sorts_Mill_Goudy:Regular',sans-serif] h-[134.375px] leading-[67.2px] not-italic relative shrink-0 text-[#0a0a0a] text-[56px] tracking-[-2.5px] w-full" data-name="Heading 1">
      <p className="absolute left-0 top-0">Cemitério</p>
      <p className="absolute left-0 top-[67.19px]">Campo Grande</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[174.375px] relative shrink-0 w-[341.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph />
        <Heading />
      </div>
    </div>
  );
}

function IcBaselineWhatsapp() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="ic:baseline-whatsapp">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-whatsapp">
          <path d={svgPaths.p93fc700} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#2b5e3a] h-[48px] relative rounded-[4px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[10px] h-full items-center justify-center px-[24px] py-[11px] relative">
        <IcBaselineWhatsapp />
        <p className="font-['Inter:Medium',sans-serif] font-medium leading-[24px] not-italic relative shrink-0 text-[16px] text-white">Atendimento 24h</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[440px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[28px] items-start relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] not-italic relative shrink-0 text-[#575757] text-[14px] w-[437px] whitespace-pre-wrap">Inaugurado em 1953, pela Prefeitura de São Paulo, devido à necessidade de um local para o sepultamento para os moradores da zona sul do Município de São Paulo</p>
        <Button />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex h-[174.375px] items-end justify-between left-[283.5px] top-[120px] w-[1336px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Hero() {
  return (
    <div className="bg-[#fbfbf9] h-[1064.375px] relative shrink-0 w-full" data-name="Hero">
      <Container />
      <Container1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[56px] h-[21px] items-center justify-center relative shrink-0 text-[#b5b5b2] w-full" data-name="Container">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">LAPA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px]">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">LAGEADO</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px]">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] tracking-[1px] uppercase w-[127px] whitespace-pre-wrap">Campo GRANDE</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px]">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">PARELHEIROS</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">Saudade</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">LAPA</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">LAGEADO</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] tracking-[1px] uppercase w-[127px] whitespace-pre-wrap">Campo GRANDE</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">PARELHEIROS</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[12px] text-center tracking-[1px] uppercase">Saudade</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[12px] not-italic relative shrink-0 text-[8px] text-center">●</p>
    </div>
  );
}

function SlowCarouselMotion() {
  return (
    <div className="bg-white h-[80px] relative shrink-0 w-full" data-name="Slow carousel motion">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip relative rounded-[inherit] size-full">
        <Container4 />
      </div>
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function ImageMemorialGarden() {
  return (
    <div className="h-[522px] relative rounded-[8px] shrink-0 w-full" data-name="Image (Memorial garden)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImageMemorialGarden} />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-full items-start overflow-clip relative shrink-0 w-[620px]" data-name="Container">
      <ImageMemorialGarden />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-[620px]">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#c8963e] text-[14px] tracking-[2.4px] uppercase">SOBRE NÓS</p>
      <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.5px] w-[457.559px] whitespace-pre-wrap">Tradição e acolhimento há mais de 70 anos</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[1.6] relative shrink-0 text-[#575757] text-[16px] w-[602px] whitespace-pre-wrap">
        <p className="mb-0">O Cemitério Campo Grande, administrado pelo Grupo Maya desde 2008, é referência no segmento funerário da zona sul de São Paulo. Com uma equipe dedicada e infraestrutura completa, oferecemos um espaço de paz e dignidade para homenagear a memória de seus entes queridos.</p>
        <p className="mb-0">&nbsp;</p>
        <p>Nossa missão é proporcionar conforto e tranquilidade nos momentos mais difíceis, com atendimento humanizado e serviços de excelência.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#c8963e] text-[28px] top-0 tracking-[-1px]">70+</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">Anos de história</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="col-1 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#c8963e] text-[28px] top-0 tracking-[-1px]">50mil+</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">Famílias atendidas</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="col-2 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#c8963e] text-[28px] top-0 tracking-[-1px]">24h</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">Atendimento</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="col-3 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph5 />
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[42px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:Bold',sans-serif] font-bold leading-[42px] left-0 text-[#c8963e] text-[28px] top-0 tracking-[-1px]">100%</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">Dedicação</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="col-4 content-stretch flex flex-col items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function Container7() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(4,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[61.5px] relative shrink-0 w-full" data-name="Container">
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[80px] items-start min-h-px min-w-px relative" data-name="Container">
      <Frame2 />
      <Container7 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[80px] items-center justify-center max-w-[1336px] min-h-px min-w-px relative">
      <div className="flex flex-row items-center self-stretch">
        <Container5 />
      </div>
      <Container6 />
    </div>
  );
}

function Section1() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section 2">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] py-[103px] relative w-full">
          <Frame3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[1.6] left-[0.5px] not-italic text-[#575757] text-[16px] top-[-1.38px] w-[445px] whitespace-pre-wrap">Oferecemos uma gama completa de serviços para que você não precise se preocupar com nada.</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[205px] items-start relative shrink-0 w-[560px]" data-name="Container">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#c8963e] text-[14px] tracking-[2.4px] uppercase">NOSSOS SERVIÇOS</p>
      <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[1.2] not-italic relative shrink-0 text-[#0a0a0a] text-[48px] tracking-[-1.5px] w-[503.018px] whitespace-pre-wrap">Soluções completas para todas as necessidades</p>
      <Paragraph9 />
    </div>
  );
}

function Imagem() {
  return (
    <div className="h-[218px] pointer-events-none relative rounded-[4px] shrink-0 w-[430px]" data-name="Imagem">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgImagem} />
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pe4db4a0} fill="var(--fill-0, #FBFBF9)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-full">Velório e Sepultamento</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-full">Preparação completa e respeitosa do corpo para as cerimônias de velório e o descanso final.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container16 />
      <Heading1 />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute inset-[8.33%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-2px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Group">
          <path d={svgPaths.p201f3d80} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p3a9afc80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p2b5ef800} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p3c2ca600} fill="var(--fill-0, white)" id="Vector_4" />
          <path d={svgPaths.p2664fa00} fill="var(--fill-0, white)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup />
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <Frame />
    </div>
  );
}

function Heading2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-full">Traslado Funerário</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-full">Transporte seguro e cuidadoso do ente querido até o local das cerimônias e de sepultamento.</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container18 />
      <Heading2 />
    </div>
  );
}

function BoxiconsFlowerFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="boxicons:flower-filled">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:flower-filled">
          <path d={svgPaths.p11ff1040} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <BoxiconsFlowerFilled />
    </div>
  );
}

function Heading3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-full">Coroa de Flores</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-full">Homenagens florais que simbolizam carinho, gratidão e respeito à memória daquele que partiu.</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container20 />
      <Heading3 />
    </div>
  );
}

function StreamlineFlexHealthCare2Solid() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="streamline-flex:health-care-2-solid">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="streamline-flex:health-care-2-solid">
          <path clipRule="evenodd" d={svgPaths.p24c50500} fill="var(--fill-0, white)" fillRule="evenodd" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <StreamlineFlexHealthCare2Solid />
    </div>
  );
}

function Heading4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-full">Laboratório</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-full">Técnicas de conservação, higienização e estética para garantir uma despedida com dignidade.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container22 />
      <Heading4 />
    </div>
  );
}

function BoxiconsMilkBottleFilled() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="boxicons:milk-bottle-filled">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="boxicons:milk-bottle-filled">
          <path d={svgPaths.p3810cb70} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <BoxiconsMilkBottleFilled />
    </div>
  );
}

function Heading5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] min-w-full relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-[min-content]">Cremação</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-[349px]">Serviço respeitoso de incineração do corpo para a preservação e guarda das cinzas.</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container24 />
      <Heading5 />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[8.33%_10.42%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2.5px_-2px] mask-size-[24px_24px]" data-name="Group" style={{ maskImage: `url('${imgGroup}')` }}>
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 19 20">
        <g id="Group">
          <path d={svgPaths.p15ba7700} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p326f5400} fill="var(--fill-0, white)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group1 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ClipPathGroup1 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <Frame1 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-full">Documentação</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-full">Assessoria completa na emissão de registros e certidões, garantindo tranquilidade à família.</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container26 />
      <Heading6 />
    </div>
  );
}

function MdiTombstone() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="mdi:tombstone">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="mdi:tombstone">
          <path d={svgPaths.p168b6200} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#c8963e] content-stretch flex items-center justify-center relative rounded-[8px] shrink-0 size-[48px]" data-name="Container">
      <MdiTombstone />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full whitespace-pre-wrap" data-name="Heading 3">
      <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[23.4px] relative shrink-0 text-[#0a0a0a] text-[18px] tracking-[-0.3px] w-full">Venda e Locação de Jazigo</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[#575757] text-[15px] w-full">Opções flexíveis de espaços temporários ou definitivos para o descanso final do ente querido.</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[33px] relative rounded-[4px] shrink-0 w-[430px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <Container28 />
      <Heading7 />
    </div>
  );
}

function Imagem1() {
  return (
    <div className="h-[218px] pointer-events-none relative rounded-[4px] shrink-0 w-[430px]" data-name="Imagem">
      <img alt="" className="absolute inset-0 max-w-none object-cover rounded-[4px] size-full" src={imgImagem1} />
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 rounded-[4px]" />
    </div>
  );
}

function Container14() {
  return (
    <div className="content-start flex flex-wrap gap-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Imagem />
      <Container15 />
      <Container17 />
      <Container19 />
      <Container21 />
      <Container23 />
      <Container25 />
      <Container27 />
      <Imagem1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start max-w-[1338px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Section2() {
  return (
    <div className="bg-[#fbfbf9] relative shrink-0 w-full" data-name="Section 3">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[128px] relative w-full">
          <Container12 />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Title">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#e4b562] text-[14px] tracking-[2.4px] uppercase">O CEMITÉRIO</p>
      <div className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[1.2] relative shrink-0 text-[48px] text-white tracking-[-1.5px] w-[355.987px] whitespace-pre-wrap">
        <p className="mb-0">Um espaço de paz</p>
        <p>e acolhimento</p>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p184f2c80} id="Vector" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 18.3333V15.8333" id="Vector_2" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon1 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[230px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[16px] text-white tracking-[-0.16px]">Ampla Área Verde</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] w-[min-content] whitespace-pre-wrap">Mais de 60.000m² de área arborizada com paisagismo cuidadosamente planejado.</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1ecd6152} id="Vector" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p17796300} id="Vector_2" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container35() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon2 />
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-[230px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[16px] text-white tracking-[-0.16px]">Infraestrutura Completa</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] w-[min-content] whitespace-pre-wrap">Salas de velório, capela ecumênica, estacionamento e acessibilidade total.</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container35 />
      <Container36 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Container31 />
      <Container34 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_50_738)" id="Icon">
          <path d={svgPaths.p20d10600} id="Vector" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 1.66667V3.33333" id="Vector_2" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 16.6667V18.3333" id="Vector_3" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2561cd80} id="Vector_4" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1a2cf7c0} id="Vector_5" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M1.66667 10H3.33333" id="Vector_6" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M16.6667 10H18.3333" id="Vector_7" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3d0afd40} id="Vector_8" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p18688e80} id="Vector_9" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_50_738">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container38() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon3 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[16px] text-white tracking-[-0.16px]">Ambiente Sereno</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] w-[min-content] whitespace-pre-wrap">Espaço projetado para proporcionar paz e conforto em momentos de reflexão.</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #E4B562)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container41() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative w-full">
        <p className="font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[20.8px] relative shrink-0 text-[16px] text-white tracking-[-0.16px]">Localização Privilegiada</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] min-w-full not-italic relative shrink-0 text-[15px] text-[rgba(255,255,255,0.7)] w-[min-content] whitespace-pre-wrap">Fácil acesso pela zona sul de São Paulo, com estacionamento amplo e gratuito.</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px relative" data-name="Container">
      <Container41 />
      <Container42 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[32px] items-start relative shrink-0 w-full">
      <Container37 />
      <Container40 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full" data-name="Container">
      <Frame4 />
      <Frame5 />
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-between min-h-px min-w-px relative" data-name="Text">
      <Title />
      <Container30 />
    </div>
  );
}

function ImageAreaVerdeDoCemiterioCampoGrande() {
  return (
    <div className="h-[552px] relative rounded-[8px] shrink-0 w-full" data-name="Image (Área verde do Cemitério Campo Grande)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[8px] size-full" src={imgImageAreaVerdeDoCemiterioCampoGrande} />
      <div className="size-full" />
    </div>
  );
}

function Image() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px overflow-clip relative rounded-[4px]" data-name="Image">
      <ImageAreaVerdeDoCemiterioCampoGrande />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[96px] items-center max-w-[1338px] min-h-px min-w-px relative" data-name="Container">
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Text />
      </div>
      <div className="flex flex-[1_0_0] flex-row items-center self-stretch">
        <Image />
      </div>
    </div>
  );
}

function Section3() {
  return (
    <div className="bg-[#22402b] relative shrink-0 w-full" data-name="Section 4">
      <div aria-hidden="true" className="absolute border-[#e4b562] border-solid border-t inset-0 pointer-events-none" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[40px] py-[128px] relative w-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function Headline() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start not-italic relative shrink-0 w-full" data-name="Headline">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] relative shrink-0 text-[#c8963e] text-[14px] tracking-[2.4px] uppercase">CONTATO</p>
      <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] min-w-full relative shrink-0 text-[#0a0a0a] text-[40px] tracking-[-1.5px] w-[min-content] whitespace-pre-wrap">Estamos aqui para ajudar</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[28px] relative shrink-0 text-[#575757] text-[16px] w-[591px] whitespace-pre-wrap">Entre em contato conosco a qualquer momento. Nossa equipe está preparada para oferecer todo o suporte necessário com agilidade e acolhimento.</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_50_728)" id="Icon">
          <path d={svgPaths.p1a7ce800} id="Vector" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_50_728">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container45() {
  return (
    <div className="bg-[#fbfbf9] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon5 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start leading-[1.6] not-italic relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[13px]">Telefone</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0a0a0a] text-[15px] w-[min-content] whitespace-pre-wrap">(11) 3195-2733</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-center relative shrink-0 w-full" data-name="Container">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pd919a80} id="Vector" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p189c1170} id="Vector_2" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[#fbfbf9] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon6 />
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start leading-[1.6] not-italic relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[13px]">E-mail</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0a0a0a] text-[15px] w-[min-content] whitespace-pre-wrap">contato@grupomaya.com.br</p>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-center relative shrink-0 w-full" data-name="Container">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container51() {
  return (
    <div className="bg-[#fbfbf9] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container52() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start leading-[1.6] not-italic relative w-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[13px]">Endereço</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium min-w-full relative shrink-0 text-[#0a0a0a] text-[15px] w-[min-content] whitespace-pre-wrap">Rua Engenheiro Moacyr de Souza Dias, 45 — Santo Amaro, São Paulo — SP</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[16px] h-[46px] items-center relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_50_787)" id="Icon">
          <path d={svgPaths.p14d24500} id="Vector" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 5V10L13.3333 11.6667" id="Vector_2" stroke="var(--stroke-0, #C8963E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_50_787">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-[#fbfbf9] relative rounded-[4px] shrink-0 size-[44px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center p-px relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container55() {
  return (
    <div className="flex-[1_0_0] h-[44px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[2px] items-start leading-[1.6] not-italic relative size-full">
        <p className="font-['Inter:Regular',sans-serif] font-normal relative shrink-0 text-[#6b6b6b] text-[13px]">Horário</p>
        <p className="font-['Inter:Medium',sans-serif] font-medium relative shrink-0 text-[#0a0a0a] text-[15px]">Atendimento 24 horas, todos os dias</p>
      </div>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex gap-[16px] h-[44px] items-center relative shrink-0 w-full" data-name="Container">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[254px] items-start relative shrink-0 w-full" data-name="Container">
      <Container44 />
      <Container47 />
      <Container50 />
      <Container53 />
    </div>
  );
}

function Text1() {
  return (
    <div className="content-stretch flex flex-col gap-[96px] h-full items-start relative shrink-0 w-[620px]" data-name="Text">
      <Headline />
      <Container43 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex h-[26px] items-start relative shrink-0 w-full" data-name="Heading 3">
      <p className="flex-[1_0_0] font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[26px] min-h-px min-w-px relative text-[#0a0a0a] text-[20px] tracking-[-0.3px] whitespace-pre-wrap">Envie uma mensagem</p>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#575757] text-[14px] top-0">Nome</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[48.5px] relative rounded-[4px] shrink-0 w-full" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0a8] text-[15px]">Seu nome completo</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <TextInput />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#575757] text-[14px] top-0">Telefone</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="bg-white h-[48.5px] relative rounded-[4px] shrink-0 w-full" data-name="Phone Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[#b0b0a8] text-[15px]">(11) 00000-0000</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[75.5px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <PhoneInput />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#575757] text-[14px] top-0">Mensagem</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="bg-white h-[116px] relative rounded-[4px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-start px-[16px] py-[12px] relative size-full">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22.5px] not-italic relative shrink-0 text-[#b0b0a8] text-[15px]">Como podemos ajudar?</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] h-[149px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <TextArea />
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#c8963e] h-[48px] relative rounded-[4px] shrink-0 w-full" data-name="Button">
      <p className="-translate-x-1/2 absolute font-['Inter:Medium',sans-serif] font-medium leading-[24px] left-[268.86px] not-italic text-[16px] text-center text-white top-[11px]">Enviar mensagem</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] h-[408px] items-start relative shrink-0 w-full" data-name="Form">
      <Container57 />
      <Container58 />
      <Container59 />
      <Button1 />
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[#fbfbf9] flex-[1_0_0] h-[540px] min-h-px min-w-px relative rounded-[4px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e0e0dc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[41px] px-[41px] relative size-full">
        <Heading8 />
        <Form />
      </div>
    </div>
  );
}

function Section() {
  return (
    <div className="max-w-[1338px] relative shrink-0 w-full" data-name="Section">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[96px] items-center max-w-[inherit] relative w-full">
        <div className="flex flex-row items-center self-stretch">
          <Text1 />
        </div>
        <Container56 />
      </div>
    </div>
  );
}

function Section4() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="Section 5">
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col items-center px-[283.5px] py-[128px] relative w-full">
          <Section />
        </div>
      </div>
    </div>
  );
}

function Logo1() {
  return (
    <div className="col-1 h-[26.611px] ml-0 mt-0 relative row-1 w-[26.589px]" data-name="Logo">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 26.5888 26.6115">
        <g id="Logo">
          <path d={svgPaths.p33a12c00} fill="var(--fill-0, #D99E45)" id="Vector" />
          <path d={svgPaths.p11d2aa80} fill="var(--fill-0, #D99E45)" id="Vector_2" />
          <path d={svgPaths.p20ec40f0} fill="var(--fill-0, #D99E45)" id="Vector_3" />
          <path d={svgPaths.p1927cd80} fill="var(--fill-0, #D99E45)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Maya() {
  return (
    <div className="col-1 h-[19.091px] ml-0 mt-[21.32%] relative row-1 w-[62.712px]" data-name="Maya">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 62.7119 19.0908">
        <g id="Maya">
          <path d={svgPaths.p23d91d00} fill="var(--fill-0, white)" id="Vector" />
          <path d={svgPaths.p8db6e80} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p3c55fd00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.pab96000} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Group3() {
  return (
    <div className="col-1 h-[2.993px] ml-[0.31%] mt-0 relative row-1 w-[15.474px]" data-name="Group">
      <div className="absolute inset-[-1.98%_-0.39%_-1.99%_-0.38%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5935 3.11167">
          <g id="Group">
            <path d={svgPaths.p25d71d80} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeWidth="0.0594648" />
            <path d={svgPaths.p2c851480} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeWidth="0.0594648" />
            <path d={svgPaths.p2ef3e580} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeWidth="0.0594648" />
            <path d={svgPaths.p12cdae00} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, white)" strokeWidth="0.0594648" />
            <path d={svgPaths.p209bdb00} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, white)" strokeWidth="0.0594648" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Maya />
      <Group3 />
    </div>
  );
}

function Type() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.22%] mt-[24.18%] place-items-start relative row-1" data-name="Type">
      <Group2 />
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
    <div className="content-stretch flex flex-col h-[32px] items-start overflow-clip relative shrink-0" data-name="Logo">
      <LogoGrupoMaya />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[66px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[#6b6b6b] text-[14px] top-0 w-[309px] whitespace-pre-wrap">Cemitério Campo Grande — Tradição, respeito e acolhimento há mais de 70 anos na zona sul de São Paulo.</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[163px] relative shrink-0 w-[320px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <Logo />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.5px] uppercase">Institucional</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] top-px">Sobre nós</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] top-px">Cemitérios</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] top-px">Serviços</p>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[126px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[163px] items-start left-[317.33px] top-0 w-[285.328px]" data-name="Container">
      <Paragraph11 />
      <List />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[21px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Plus_Jakarta_Sans:SemiBold',sans-serif] font-semibold leading-[21px] left-0 text-[14px] text-white top-0 tracking-[0.5px] uppercase">Legal</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] top-px">Política de Privacidade</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[21px] left-0 not-italic text-[#6b6b6b] text-[14px] top-px">Termos de Uso</p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[58px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container64() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[163px] items-start left-[634.66px] top-0 w-[285.344px]" data-name="Container">
      <Paragraph12 />
      <List1 />
    </div>
  );
}

function Container62() {
  return (
    <div className="flex-[1_0_0] h-[163px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container63 />
        <Container64 />
      </div>
    </div>
  );
}

function Container60() {
  return (
    <div className="content-stretch flex gap-[96px] h-[163px] items-start relative shrink-0 w-[1336px]" data-name="Container">
      <Container61 />
      <Container62 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[315.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">© 2026 Grupo Maya. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[345.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">Cemitério Campo Grande — CNPJ: 00.000.000/0001-00</p>
      </div>
    </div>
  );
}

function Container66() {
  return (
    <div className="h-[67.5px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[52px] relative size-full">
          <Paragraph13 />
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function Container65() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px px-[231.5px] relative shrink-0 w-[1903px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container66 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[80px] items-center py-[56px] relative shrink-0 w-full" data-name="Footer">
      <Container60 />
      <Container65 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[10px] relative shrink-0 w-[8px]" data-name="Icon">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 8 10">
        <g clipPath="url(#clip0_58_1301)" id="Icon">
          <path d={svgPaths.p39bde000} fill="var(--fill-0, #0A0A0A)" id="Vector" />
          <path d={svgPaths.p387bae00} fill="var(--fill-0, #0A0A0A)" id="Vector_2" />
          <path d={svgPaths.p31858b40} fill="var(--fill-0, #0A0A0A)" id="Vector_3" />
          <path d={svgPaths.p28b38760} fill="var(--fill-0, #0A0A0A)" id="Vector_4" />
          <path d={svgPaths.p6e7fd40} fill="var(--fill-0, #0A0A0A)" id="Vector_5" />
          <path d={svgPaths.p2469bd70} fill="var(--fill-0, #0A0A0A)" id="Vector_6" />
        </g>
        <defs>
          <clipPath id="clip0_58_1301">
            <rect fill="white" height="10" width="8" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Open() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Open">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Menu() {
  return (
    <div className="relative shrink-0" data-name="Menu">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[8px] items-center relative">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[21px] not-italic relative shrink-0 text-[#0a0a0a] text-[14px] text-center">Menu</p>
        <Open />
      </div>
    </div>
  );
}

function Logo3() {
  return (
    <div className="col-1 h-[33.264px] ml-0 mt-0 relative row-1 w-[33.236px]" data-name="Logo">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 33.236 33.2644">
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

function Maya1() {
  return (
    <div className="col-1 h-[23.863px] ml-0 mt-[21.32%] relative row-1 w-[78.39px]" data-name="Maya">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 78.3897 23.8633">
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

function Group5() {
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

function Group4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-0 place-items-start relative row-1" data-name="Group">
      <Maya1 />
      <Group5 />
    </div>
  );
}

function Type1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[33.22%] mt-[24.18%] place-items-start relative row-1" data-name="Type">
      <Group4 />
    </div>
  );
}

function LogoGrupoMaya1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Logo Grupo Maya">
      <Logo3 />
      <Type1 />
    </div>
  );
}

function Logo2() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Logo">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col h-full items-start overflow-clip relative rounded-[inherit]">
        <LogoGrupoMaya1 />
      </div>
    </div>
  );
}

function IcRoundPhone() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="ic:round-phone">
      <svg className="absolute block inset-0" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
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

function Container68() {
  return (
    <div className="content-stretch flex h-[60px] items-center justify-between max-w-[1338px] relative shrink-0 w-full" data-name="Container">
      <Menu />
      <Logo2 />
      <Link />
    </div>
  );
}

function Navigation() {
  return (
    <div className="bg-[#fbfbf9] relative shrink-0 w-full" data-name="Navigation">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center px-[40px] py-[6px] relative w-full">
          <Container68 />
        </div>
      </div>
    </div>
  );
}

function Container67() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e0e0dc] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Navigation />
      </div>
    </div>
  );
}

export default function Site() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="SITE">
      <Hero />
      <SlowCarouselMotion />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <div className="-translate-x-1/2 absolute backdrop-blur-[10.15px] bg-[rgba(255,255,255,0.16)] content-stretch flex flex-col items-start left-1/2 pb-px top-0 w-[1903px]" data-name="Menu">
        <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.5)] border-b border-solid inset-0 pointer-events-none" />
        <Container67 />
      </div>
    </div>
  );
}