import imgSection from "figma:asset/640252e39f4d13e81fc69a21fa7fa9db2fa9946d.png";

function Container() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[13px] text-white tracking-[2.4px] uppercase whitespace-nowrap">
        <p className="leading-[24px]">CEMITÉRIO CAMPO GRANDE</p>
      </div>
    </div>
  );
}

function CoverlyInsurance() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Coverly insurance">
      <Container />
    </div>
  );
}

function YourPerfectPolicyFastAffordableHeading() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Your perfect policy, fast & affordable → Heading 1">
      <div className="flex flex-col font-['Sorts_Mill_Goudy:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[56px] text-white tracking-[-2px] w-full">
        <p className="leading-[64.4px] whitespace-pre-wrap">Serviços Funerários</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start max-w-[541px] relative shrink-0 w-[541px]" data-name="header">
      <CoverlyInsurance />
      <YourPerfectPolicyFastAffordableHeading />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white w-full">
        <p className="leading-[26px] whitespace-pre-wrap">Conheça em detalhes todos os serviços oferecidos pelo Cemitério Campo Grande — do velório à documentação, com suporte humanizado e atendimento 24 horas.</p>
      </div>
    </div>
  );
}

function GetAFreeQuoteInUnder2MinutesExperiencePeaceOfMindWithOurReliableInsuranceOptions() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0 w-full" data-name="Get a free quote in under 2 minutes. Experience peace of mind with our reliable insurance options.">
      <Container1 />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#0a0a0a] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Contact Us</p>
      </div>
    </div>
  );
}

function BuyTemplate() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0" data-name="Buy Template">
      <Container2 />
    </div>
  );
}

function BuyTemplate1() {
  return (
    <div className="absolute bottom-[-30px] content-stretch flex flex-col items-start justify-center left-[13.67%] right-[13.86%]" data-name="Buy Template">
      <div className="h-[24px] shrink-0 w-full" data-name="Rectangle" />
    </div>
  );
}

function LinkSecondary() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center overflow-clip px-[16px] py-[12px] relative rounded-[4px] shrink-0" data-name="Link - Secondary">
      <BuyTemplate />
      <BuyTemplate1 />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-col gap-[28px] items-start max-w-[429px] relative shrink-0 w-[429px]" data-name="content">
      <GetAFreeQuoteInUnder2MinutesExperiencePeaceOfMindWithOurReliableInsuranceOptions />
      <LinkSecondary />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col h-[610px] items-start justify-between min-w-[1338px] overflow-clip relative shrink-0 w-full" data-name="Frame">
      <Header />
      <Content />
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[52px] py-[80px] relative size-full" data-name="Section">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <img alt="" className="absolute max-w-none object-cover size-full" src={imgSection} />
        <div className="absolute bg-[rgba(0,0,0,0.5)] inset-0" />
      </div>
      <Frame />
    </div>
  );
}