import image_9e06c99a20a6eafdc113d2416019fd1a48f016f4 from 'figma:asset/9e06c99a20a6eafdc113d2416019fd1a48f016f4.png'
import imgSection from "figma:asset/bb7abed2ed0cc48cad0f4b0eb1fb25ef92602451.png";
import { useEffect } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { trackWhatsAppConversion } from "../components/GoogleAnalytics";
import { PageHeroBanner } from "../components/PageHeroBanner";
import {
  HeartHandshake,
  Car,
  Flower2,
  FlaskConical,
  Flame,
  FileText,
  Building2,
  Archive,
  ArrowRight,
  Phone,
  Leaf,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { ButtonFlip } from "../components/ui/ButtonFlip";

import imgCemiterio from "figma:asset/ec7fbed93c58d7a7eda0608d5476c38a21e63f0c.png";
import svgPaths from "../../imports/svg-0xn1amvdvy";

const services = [
  {
    icon: HeartHandshake,
    id: "velorio-e-sepultamento",
    title: "Velório e Sepultamento",
    tagline: "Uma despedida digna e acolhedora",
    description:
      "No Cemitério Lajeado, organizamos velórios em ambiente apropriado e acolhedor, pensado para reunir família e amigos em um dos momentos mais delicados da vida. Toda a cerimônia é conduzida com respeito, privacidade e suporte completo à família — do preparo do corpo ao sepultamento no cemitério.",
    details: [
      "Salas climatizadas e equipadas para cerimônias religiosas ou civis",
      "Preparação completa e respeitosa do corpo — higienização, tanatopraxia e estética",
      "Sepultamento em jazigos próprios ou locados, com toda a infraestrutura necessária",
      "Equipe de apoio presente durante toda a cerimônia para suporte à família",
      "Coordenação de horários para garantir privacidade e tranquilidade",
    ],
  },
  {
    icon: Car,
    id: "traslado-funerario",
    title: "Traslado Funerário",
    tagline: "Cuidado e segurança em cada trajeto",
    description:
      "O traslado funerário é o serviço de transporte do ente querido desde o local do óbito até o cemitério — passando pela funerária, hospital ou residência. Realizamos o transporte com veículos especializados, equipe treinada e total respeito à dignidade da pessoa.",
    details: [
      "Remoção do corpo a partir do local de óbito (hospital, residência ou IML)",
      "Traslado até a agência funerária para preparação",
      "Transporte até o local de velório e, em seguida, ao sepultamento",
      "Traslados intermunicipais e interestaduais, com toda a documentação exigida",
      "Frota própria de veículos funerários adequados e devidamente licenciados",
    ],
  },
  {
    icon: Flower2,
    id: "coroa-de-flores",
    title: "Coroa de Flores",
    tagline: "Homenagens florais com significado",
    description:
      "As flores são uma das formas mais antigas e universais de expressar amor, gratidão e respeito. Oferecemos uma ampla variedade de arranjos florais — coroas, buquês e composições — para que a homenagem seja tão especial quanto a memória do ente querido.",
    details: [
      "Coroas tradicionais, arranjos modernos e buquês personalizados",
      "Flores naturais frescas ou opções em flores artificiais de alta qualidade",
      "Personalização com faixas, mensagens e cores preferidas do falecido",
      "Entrega direta no velório ou no local de sepultamento",
      "Assessoria para escolha da composição mais adequada ao momento",
    ],
  },
  {
    icon: FlaskConical,
    id: "laboratorio-funerario",
    title: "Laboratório Funerário",
    tagline: "Preservação com técnica e respeito",
    description:
      "Nossa agência funerária conta com laboratório próprio no local, equipado para realizar os procedimentos de conservação, higienização e estética do corpo. Esses cuidados garantem que a família possa se despedir com serenidade, preservando a imagem do ente querido.",
    details: [
      "Tanatopraxia: técnica de conservação que retarda a decomposição natural",
      "Higienização completa e rigorosa, seguindo protocolos sanitários",
      "Estética funerária — maquiagem, penteado e apresentação cuidadosa",
      "Uso de produtos e insumos de alta qualidade, com segurança biológica",
      "Procedimentos realizados por profissionais especializados e certificados",
    ],
  },
  {
    icon: Flame,
    id: "cremacao",
    title: "Cremação",
    tagline: "Uma escolha respeitosa e cada vez mais comum",
    description:
      "No Cemitério Lajeado, realizamos cremações com todo o cuidado e respeito que esse momento exige. A cremação transforma o corpo em cinzas por meio de um processo térmico controlado, oferecendo uma alternativa ao sepultamento tradicional, com toda a estrutura, burocracia e acompanhamento necessários.",
    details: [
      "Assessoria completa no processo e na obtenção das autorizações legais necessárias",
      "Serviço realizado em parceiro credenciado, com rastreabilidade e segurança",
      "Entrega das cinzas à família em urna de sua escolha",
      "Opção de inumação das cinzas no cemitério, em jazigo ou columbário",
      "Cerimônia de despedida pode ser realizada antes ou após a cremação",
    ],
  },
  {
    icon: Archive,
    id: "exumacao",
    title: "Exumação",
    tagline: "Cuidar da memória é um gesto de amor",
    description:
      "A exumação é um momento de respeito e homenagem, permitindo que a história de quem partiu permaneça viva nas lembranças da família. Após 3 anos e 30 dias do sepultamento, a realização da exumação é obrigatória — e estamos aqui para acolher você e oferecer todo o apoio necessário para que esse procedimento seja feito com dignidade e carinho.",
    details: [
      "Atendimento para entes queridos sepultados nos cemitérios Lajeado, Lapa, Parelheiros e Saudade",
      "Orientação completa sobre prazos e obrigações legais relacionadas à exumação",
      "Definição do destino dos restos mortais: jazigo, ossuário ou cremação",
      "Atualização de cadastro e regularização de documentação junto à administração do cemitério",
      "Suporte humanizado à família em cada etapa do processo",
    ],
  },
  {
    icon: Leaf,
    id: "zeladoria-e-jardinagem",
    title: "Zeladoria e Jardinagem",
    tagline: "Preservando a beleza e a tranquilidade do lugar",
    description:
      "O Cemitério Lajeado está localizado em uma área que, desde sua inauguração em 1904, preserva um ambiente verde e natural no extremo leste de São Paulo. Nossa equipe de zeladoria e jardinagem cuida continuamente do espaço para que ele permaneça um lugar de paz, dignidade e memória.",
    details: [
      "Manutenção contínua dos jardins, alamedas e áreas de convivência",
      "Conservação das estruturas de jazigos, muros e patrimônio histórico do cemitério",
      "Limpeza regular dos túmulos e lápides, mediante solicitação da família",
      "Plantio e cuidado de vegetação nativa que respeita o caráter histórico do local",
      "Equipe residente disponível para atendimento e orientação no local",
    ],
  },
  {
    icon: FileText,
    id: "documentacao",
    title: "Assessoria em Documentação",
    tagline: "Burocracia resolvida para você focar no que importa",
    description:
      "Em um momento de dor, lidar com papelada e burocracias é um peso a mais que a família não deveria carregar. Nossa equipe cuida de toda a gestão e liberação de documentos necessários para o registro e sepultamento do falecido, do início ao fim, sem que a família precise se preocupar.",
    details: [
      "Declaração de óbito e registro de óbito em cartório",
      "Certidão de óbito: emissão e retirada junto ao Cartório de Registro Civil",
      "Autorização de sepultamento junto aos órgãos competentes",
      "Acompanhamento de processos junto ao IML quando necessário",
    ],
  },
  {
    icon: Building2,
    id: "venda-e-locacao-de-jazigo",
    title: "Venda e Locação de Jazigo",
    tagline: "Seu espaço para o descanso eterno",
    description:
      "O Cemitério Lajeado oferece diferentes tipos de jazigos para que você possa escolher a opção que melhor atende às necessidades da sua família. Trabalhamos com jazigos verticais, jazigos familiares e sepulturas tradicionais, além de lápides personalizadas — com opções flexíveis de aquisição ou locação.",
    details: [
      "Jazigos verticais e jazigos familiares (múltiplas gavetas)",
      "Opção de jazigo temporário (locação) ou perpétuo (compra definitiva)",
      "Lápides personalizadas para homenagear a memória do ente querido",
      "Columbários para guarda de urnas com cinzas de cremação",
      "Consultoria para escolha do melhor espaço de acordo com a necessidade da família",
    ],
  },
];

export default function FuneraryServices() {
  const isMobile = useIsMobile();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        const el = document.getElementById(hash);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }, 400);
    } else {
      window.scrollTo({ top: 0 });
    }
  }, []);

  return (
    <div className="bg-[#fbfbf9] min-h-screen">
      {/* ── Hero ── */}
      <PageHeroBanner
        badge="CEMITÉRIO LAJEADO"
        title={"Serviços\nFunerários"}
        description="Conheça em detalhes todos os serviços oferecidos pelo Cemitério Lajeado — do velório à documentação, com suporte humanizado e atendimento 24 horas."
        image={imgSection}
        cta={{
          label: "Fale conosco",
          href: "https://wa.me/5511934223751",
          whatsapp: true,
          style: "primary",
        }}
      />

      {/* ── Services list ── */}
      <section className="py-24 md:py-32">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <div className="flex flex-col gap-0">
            {services.map((svc, i) => (
              <ScrollReveal key={svc.title} delay={0.05}>
                <div id={svc.id} className="relative">
                  {/* Border top (except first item) */}
                  {i > 0 && (
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 border-t border-solid pointer-events-none"
                      style={{ borderColor: "rgba(229,229,229,0.7)" }}
                    />
                  )}

                  <div
                    className="flex flex-col lg:flex-row gap-10 lg:gap-[64px] items-start pt-0 md:pt-[64px] lg:pt-[80px] pb-0 lg:pb-[80px] lg:min-h-[403px]"
                  >
                    {/* Number column */}
                    <div className="shrink-0 lg:w-[80px]">
                      <span
                        style={{
                          fontFamily: "'Sorts Mill Goudy', serif",
                          fontSize: "48px",
                          fontWeight: 400,
                          lineHeight: "48px",
                          letterSpacing: "-2px",
                          color: "rgba(10,10,10,0.2)",
                          userSelect: "none",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Content row */}
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-[64px] flex-1 items-start">
                      {/* Left: title + description + CTA */}
                      <div
                        className="flex flex-col gap-[16px] shrink-0 w-full lg:w-[380px]"
                      >
                        <h2
                          style={{
                            fontFamily: "'Sorts Mill Goudy', serif",
                            fontSize: isMobile ? "26px" : "30px",
                            fontWeight: 400,
                            lineHeight: "36px",
                            letterSpacing: "-0.5px",
                            color: "#0a0a0a",
                          }}
                        >
                          {svc.title}
                        </h2>
                        <p
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "16px",
                            fontWeight: 400,
                            lineHeight: "26px",
                            color: "#575757",
                          }}
                        >
                          {svc.description}
                        </p>

                        {/* CTA — WhatsApp */}
                        <div className="mt-2">
                          <a
                            href={`https://wa.me/5511934223751?text=Olá%2C%20gostaria%20de%20solicitar%20o%20serviço%20de%20${encodeURIComponent(svc.title)}.`}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={trackWhatsAppConversion}
                            className="inline-flex items-center gap-1.5 group/cta transition-colors duration-200"
                            style={{
                              fontFamily: "'Inter', sans-serif",
                              fontSize: "12px",
                              fontWeight: 600,
                              letterSpacing: "1.8px",
                              textTransform: "uppercase",
                              textDecoration: "none",
                              color: "#C8963E",
                            }}
                            onMouseEnter={e => (e.currentTarget.style.color = "#b5842f")}
                            onMouseLeave={e => (e.currentTarget.style.color = "#C8963E")}
                          >
                            Solicitar serviço
                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5" />
                          </a>
                        </div>
                      </div>

                      {/* Right: bullet list */}
                      <div className="flex-1 w-full">
                        <ul className="flex flex-col gap-[12px]">
                          {svc.details.map((detail, j) => (
                            <li key={j} className="relative flex items-start">
                              <span
                                className="absolute left-0 top-[9px] w-[6px] h-[6px] rounded-full shrink-0"
                                style={{ background: "#0a0a0a" }}
                              />
                              <span
                                className="pl-[18px]"
                                style={{
                                  fontFamily: "'Inter', sans-serif",
                                  fontSize: "15px",
                                  fontWeight: 400,
                                  lineHeight: "24px",
                                  color: "#2d2d2d",
                                }}
                              >
                                {detail}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="relative overflow-hidden" style={{ height: isMobile ? "auto" : "660px", minHeight: isMobile ? "500px" : "660px" }}>
        {/* Background image — full bleed */}
        <img
          src={image_9e06c99a20a6eafdc113d2416019fd1a48f016f4}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />

        {/* Content grid aligned with site padding */}
        <div
          className="relative z-10 max-w-[1338px] mx-auto px-5 md:px-[52px] flex items-start"
          style={{ paddingTop: isMobile ? "80px" : "136px", paddingBottom: isMobile ? "60px" : "80px" }}
        >
          <ScrollReveal>
            {/* Colored panel — left side, sits on top of the image */}
            <div
              className="flex flex-col bg-[#C8963E]"
              style={{
                width: isMobile ? "100%" : "440px",
                minHeight: "500px",
                padding: isMobile ? "40px 32px" : "56px 48px",
              }}
            >
              {/* Icon */}
              <div className="mb-7">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                  <path d={svgPaths.p2c717700} fill="white" fillOpacity="0.15" stroke="white" strokeOpacity="0.35" strokeWidth="1.5" />
                  <path d={svgPaths.p10fc1080} fill="white" fillOpacity="0.5" />
                </svg>
              </div>

              {/* Heading */}
              <div className="flex flex-col mb-4">
                <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "28px" : "34px", lineHeight: "42.5px", letterSpacing: "-1px", color: "#ffffff" }}>
                  Estamos disponíveis
                </p>
                <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "28px" : "34px", lineHeight: "42.5px", letterSpacing: "-1px", color: "#ffffff" }}>
                  24 horas por dia
                </p>
              </div>

              {/* Paragraph */}
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "24px", color: "rgba(255,255,255,0.7)", maxWidth: "344px" }}>
                Em momentos difíceis, nossa equipe está pronta para orientar e acolher sua família com respeito e humanidade. Entre em contato agora pelo WhatsApp.
              </p>

              {/* CTA button */}
              <div className="mt-[60px]">
                <ButtonFlip
                  as="a"
                  href="https://wa.me/5511934223751"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="bg-white rounded-[8px]"
                  style={{
                    width: "135px",
                    height: "48px",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "15px",
                    fontWeight: 500,
                    color: "#0a0a0a",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  Fale conosco
                </ButtonFlip>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}