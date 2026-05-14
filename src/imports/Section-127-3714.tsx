function Container1() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(10,10,10,0.2)] tracking-[-2px]">01</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px]">Velório e Sepultamento</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#575757] text-[16px] w-[376px] whitespace-pre-wrap">O velório é o momento de reunir família e amigos para prestar as últimas homenagens. Nosso cemitério dispõe de salas de velório climatizadas, confortáveis e privativas, pensadas para oferecer acolhimento e dignidade em um dos momentos mais delicados da vida.</p>
      </div>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[469.469px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Salas climatizadas e equipadas para cerimônias religiosas ou civis</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text />
        <Text1 />
      </div>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[593.078px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Preparação completa e respeitosa do corpo — higienização, tanatopraxia e estética</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text2 />
        <Text3 />
      </div>
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[593.063px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Sepultamento em jazigos próprios ou locados, com toda a infraestrutura necessária</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text4 />
        <Text5 />
      </div>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[519.438px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Equipe de apoio presente durante toda a cerimônia para suporte à família</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text6 />
        <Text7 />
      </div>
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[472.203px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Coordenação de horários para garantir privacidade e tranquilidade</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text8 />
        <Text9 />
      </div>
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Container4() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <List />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-center relative w-full">
        <Container3 />
        <Container4 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[403px] relative shrink-0 w-[1336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.7)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pb-px pt-[80px] relative size-full">
        <Container1 />
        <Container2 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(10,10,10,0.2)] tracking-[-2px]">02</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[242px] relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative size-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px]">Traslado Funerário</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#575757] text-[16px] w-[375px] whitespace-pre-wrap">O traslado funerário é o serviço de transporte do ente querido desde o local do óbito até o cemitério — passando pela funerária, hospital ou residência. Realizamos o transporte com veículos especializados, equipe treinada e total respeito à dignidade da pessoa.</p>
      </div>
    </div>
  );
}

function Paragraph() {
  return <div className="h-[19.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Text10() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text11() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[516.125px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Remoção do corpo a partir do local de óbito (hospital, residência ou IML)</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text10 />
        <Text11 />
      </div>
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text13() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[349.641px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Traslado até a agência funerária para preparação</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text12 />
        <Text13 />
      </div>
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text15() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[458.766px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Transporte até o local de velório e, em seguida, ao sepultamento</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text14 />
        <Text15 />
      </div>
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text17() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[550.234px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Traslados intermunicipais e interestaduais, com toda a documentação exigida</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text16 />
        <Text17 />
      </div>
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text19() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[528.844px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Frota própria de veículos funerários adequados e devidamente licenciados</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text18 />
        <Text19 />
      </div>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container9() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph />
        <List1 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[403px] relative shrink-0 w-[1336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.7)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pb-px pt-[80px] relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(10,10,10,0.2)] tracking-[-2px]">03</p>
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[242px] relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative size-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px]">Coroa de Flores</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#575757] text-[16px] w-[377px] whitespace-pre-wrap">As flores são uma das formas mais antigas e universais de expressar amor, gratidão e respeito. Oferecemos uma ampla variedade de arranjos florais — coroas, buquês e composições — para que a homenagem seja tão especial quanto a memória do ente querido.</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return <div className="h-[19.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Text20() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text21() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[461.156px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Coroas tradicionais, arranjos modernos e buquês personalizados</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text20 />
        <Text21 />
      </div>
    </div>
  );
}

function Text22() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text23() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[504.578px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Flores naturais frescas ou opções em flores artificiais de alta qualidade</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text22 />
        <Text23 />
      </div>
    </div>
  );
}

function Text24() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text25() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[495.875px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Personalização com faixas, mensagens e cores preferidas do falecido</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text24 />
        <Text25 />
      </div>
    </div>
  );
}

function Text26() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text27() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[377.984px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Entrega direta no velório ou no local de sepultamento</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text26 />
        <Text27 />
      </div>
    </div>
  );
}

function Text28() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text29() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[490.109px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Assessoria para escolha da composição mais adequada ao momento</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text28 />
        <Text29 />
      </div>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
    </div>
  );
}

function Container14() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph1 />
        <List2 />
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start relative size-full">
        <Container13 />
        <Container14 />
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[403px] relative shrink-0 w-[1336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.7)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pb-px pt-[80px] relative size-full">
        <Container11 />
        <Container12 />
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(10,10,10,0.2)] tracking-[-2px]">04</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[242px] relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative size-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px]">Laboratório Funerário</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#575757] text-[16px] w-[369px] whitespace-pre-wrap">Nossa agência funerária conta com laboratório próprio no local, equipado para realizar os procedimentos de conservação, higienização e estética do corpo. Esses cuidados garantem que a família possa se despedir com serenidade, preservando a imagem do ente querido.</p>
      </div>
    </div>
  );
}

function Paragraph2() {
  return <div className="h-[19.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Text30() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text31() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[530.172px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Tanatopraxia: técnica de conservação que retarda a decomposição natural</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text30 />
        <Text31 />
      </div>
    </div>
  );
}

function Text32() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text33() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[463.516px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Higienização completa e rigorosa, seguindo protocolos sanitários</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text32 />
        <Text33 />
      </div>
    </div>
  );
}

function Text34() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text35() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[497.484px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Estética funerária — maquiagem, penteado e apresentação cuidadosa</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text34 />
        <Text35 />
      </div>
    </div>
  );
}

function Text36() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text37() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[506.703px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Uso de produtos e insumos de alta qualidade, com segurança biológica</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text36 />
        <Text37 />
      </div>
    </div>
  );
}

function Text38() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text39() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[516.688px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Procedimentos realizados por profissionais especializados e certificados</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text38 />
        <Text39 />
      </div>
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function Container19() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph2 />
        <List3 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start relative size-full">
        <Container18 />
        <Container19 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[403px] relative shrink-0 w-[1336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.7)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pb-px pt-[80px] relative size-full">
        <Container16 />
        <Container17 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(10,10,10,0.2)] tracking-[-2px]">05</p>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[286px] relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative size-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px]">Cremação</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#575757] text-[16px] w-[376px] whitespace-pre-wrap">A cremação é um serviço que transforma o corpo em cinzas por meio de um processo térmico controlado, oferecendo uma alternativa ao sepultamento tradicional. O Cemitério Campo Grande oferece esse serviço com toda a estrutura, burocracia e acompanhamento necessários.</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return <div className="h-[19.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Text40() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text41() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[605.188px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Assessoria completa no processo e na obtenção das autorizações legais necessárias</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text40 />
        <Text41 />
      </div>
    </div>
  );
}

function Text42() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text43() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[544.984px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Serviço realizado em parceiro credenciado, com rastreabilidade e segurança</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text42 />
        <Text43 />
      </div>
    </div>
  );
}

function Text44() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text45() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[370.578px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Entrega das cinzas à família em urna de sua escolha</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text44 />
        <Text45 />
      </div>
    </div>
  );
}

function Text46() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text47() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[496.672px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Opção de inumação das cinzas no cemitério, em jazigo ou columbário</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text46 />
        <Text47 />
      </div>
    </div>
  );
}

function Text48() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text49() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[499.141px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Cerimônia de despedida pode ser realizada antes ou após a cremação</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text48 />
        <Text49 />
      </div>
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
      <ListItem24 />
    </div>
  );
}

function Container24() {
  return (
    <div className="flex-[1_0_0] h-[286px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph3 />
        <List4 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="flex-[1_0_0] h-[286px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start relative size-full">
        <Container23 />
        <Container24 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[447px] relative shrink-0 w-[1336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.7)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pb-px pt-[80px] relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] not-italic relative shrink-0 text-[48px] text-[rgba(10,10,10,0.2)] tracking-[-2px]">06</p>
      </div>
    </div>
  );
}

function Paragraph4() {
  return <div className="h-[36px] shrink-0 w-[380px]" data-name="Paragraph" />;
}

function Container28() {
  return (
    <div className="h-[296px] relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph4 />
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] not-italic relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px] w-[220px] whitespace-pre-wrap">Assessoria em Documentação</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] not-italic relative shrink-0 text-[#575757] text-[16px] w-[359px] whitespace-pre-wrap">Em um momento de dor, lidar com papelada e burocracias é um peso a mais que a família não deveria carregar. Nossa equipe cuida de toda a documentação necessária para o registro e sepultamento do falecido, do início ao fim, sem que a família precise se preocupar.</p>
      </div>
    </div>
  );
}

function Paragraph5() {
  return <div className="h-[19.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Text50() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text51() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[361.172px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Declaração de óbito e registro de óbito em cartório</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text50 />
        <Text51 />
      </div>
    </div>
  );
}

function Text52() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text53() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[503.25px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Certidão de óbito: emissão e retirada junto ao Cartório de Registro Civil</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text52 />
        <Text53 />
      </div>
    </div>
  );
}

function Text54() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text55() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[426.766px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Autorização de sepultamento junto aos órgãos competentes</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text54 />
        <Text55 />
      </div>
    </div>
  );
}

function Text56() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text57() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[460.281px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Acompanhamento de processos junto ao IML quando necessário</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text56 />
        <Text57 />
      </div>
    </div>
  );
}

function Text58() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text59() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[561.328px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Orientação sobre inventário, previdência social (INSS) e demais procedimentos</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text58 />
        <Text59 />
      </div>
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem25 />
      <ListItem26 />
      <ListItem27 />
      <ListItem28 />
      <ListItem29 />
    </div>
  );
}

function Container29() {
  return (
    <div className="flex-[1_0_0] h-[296px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph5 />
        <List5 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="flex-[1_0_0] h-[296px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start relative size-full">
        <Container28 />
        <Container29 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[1336px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[rgba(229,229,229,0.7)] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pb-px pt-[80px] relative size-full">
        <Container26 />
        <Container27 />
      </div>
    </div>
  );
}

function Text60() {
  return (
    <div className="h-[48px] relative shrink-0 w-[45.453px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[48px] left-0 not-italic text-[48px] text-[rgba(10,10,10,0.2)] top-[-1px] tracking-[-2px]">07</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="relative shrink-0 w-[80px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative w-full">
        <Text60 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="relative shrink-0 w-[380px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start not-italic relative w-full">
        <p className="font-['Sorts_Mill_Goudy:Regular',sans-serif] leading-[36px] relative shrink-0 text-[#0a0a0a] text-[30px] tracking-[-0.5px]">Venda e Locação de Jazigo</p>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[26px] relative shrink-0 text-[#575757] text-[16px] w-[347px] whitespace-pre-wrap">O jazigo é o espaço onde o ente querido descansará. Oferecemos opções flexíveis de aquisição (compra) ou locação, em diferentes modelos e categorias, para atender às necessidades e ao orçamento de cada família com respeito e transparência.</p>
      </div>
    </div>
  );
}

function Paragraph6() {
  return <div className="h-[19.5px] shrink-0 w-full" data-name="Paragraph" />;
}

function Text61() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text62() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[414.953px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Jazigos individuais, duplos e familiares (múltiplas gavetas)</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text61 />
        <Text62 />
      </div>
    </div>
  );
}

function Text63() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text64() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[496.656px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Opção de jazigo temporário (locação) ou perpétuo (compra definitiva)</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text63 />
        <Text64 />
      </div>
    </div>
  );
}

function Text65() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text66() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[457.625px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Mausoléus e espaços diferenciados para homenagens especiais</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text65 />
        <Text66 />
      </div>
    </div>
  );
}

function Text67() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text68() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[427.375px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Columbários para guarda de urnas com cinzas de cremação</p>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text67 />
        <Text68 />
      </div>
    </div>
  );
}

function Text69() {
  return <div className="absolute bg-[#0a0a0a] left-0 rounded-[33554400px] size-[6px] top-[6px]" data-name="Text" />;
}

function Text70() {
  return (
    <div className="absolute h-[24px] left-[18px] top-0 w-[598.203px]" data-name="Text">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[24px] left-0 not-italic text-[#2d2d2d] text-[15px] top-[-1px]">Consultoria para escolha do melhor espaço de acordo com a necessidade da família</p>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-[748px]" data-name="List Item">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Text69 />
        <Text70 />
      </div>
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[168px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem30 />
      <ListItem31 />
      <ListItem32 />
      <ListItem33 />
      <ListItem34 />
    </div>
  );
}

function Container34() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[16px] items-start relative size-full">
        <Paragraph6 />
        <List6 />
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="flex-[1_0_0] h-[242px] min-h-px min-w-px relative" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start relative size-full">
        <Container33 />
        <Container34 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="h-[402px] relative shrink-0 w-[1336px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[64px] items-start pt-[80px] relative size-full">
        <Container31 />
        <Container32 />
      </div>
    </div>
  );
}

export default function Section() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Section">
      <Container />
      <Container5 />
      <Container10 />
      <Container15 />
      <Container20 />
      <Container25 />
      <Container30 />
    </div>
  );
}