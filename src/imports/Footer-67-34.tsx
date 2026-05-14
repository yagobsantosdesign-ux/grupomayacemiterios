import imgLogos1 from "figma:asset/fcc44f60bdc2306d6ee576b97d7d54d9e9ae234e.png";

function Container1() {
  return (
    <div className="h-[163px] relative shrink-0 w-[387px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[20px] items-start relative size-full">
        <div className="h-[32px] relative shrink-0 w-[314.4px]" data-name="Logos 1">
          <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgLogos1} />
        </div>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] min-w-full not-italic relative shrink-0 text-[#6b6b6b] text-[14px] w-[min-content] whitespace-pre-wrap">Cemitério Campo Grande — Tradição, respeito e acolhimento há mais de 70 anos na zona sul de São Paulo.</p>
      </div>
    </div>
  );
}

function Paragraph() {
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

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[163px] items-start left-[317.33px] top-0 w-[285.328px]" data-name="Container">
      <Paragraph />
      <List />
    </div>
  );
}

function Paragraph1() {
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

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[163px] items-start left-[634.66px] top-0 w-[285.344px]" data-name="Container">
      <Paragraph1 />
      <List1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] h-[163px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[96px] h-[163px] items-start max-w-[1338px] relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[315.219px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">© 2026 Grupo Maya. Todos os direitos reservados.</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[19.5px] relative shrink-0 w-[345.859px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.5px] left-0 not-italic text-[#6b6b6b] text-[13px] top-0">Cemitério Campo Grande — CNPJ: 48.222.338/0001-14</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[67.5px] max-w-[1338px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center max-w-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between max-w-[inherit] px-[52px] relative size-full">
          <Paragraph2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col h-[68.5px] items-start pt-px px-[231.5px] relative shrink-0 w-[1903px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(255,255,255,0.1)] border-solid border-t inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

export default function Footer() {
  return (
    <div className="bg-[#0a0a0a] content-stretch flex flex-col gap-[80px] items-center py-[56px] relative size-full" data-name="Footer">
      <Container />
      <Container5 />
    </div>
  );
}