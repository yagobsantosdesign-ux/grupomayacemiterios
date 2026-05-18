import imgSection from "../../assets/hero-funerarios.webp";
import { useEffect } from "react";
import { scrollToSection, scrollToTop } from "../utils/scroll";
import { Link } from "react-router";
import { trackWhatsAppConversion } from "../components/GoogleAnalytics";
import { PageHeroBanner } from "../components/PageHeroBanner";
import {
  HeartHandshake,
  Car,
  Flower2,
  FlaskConical,
  Flame,
  FileText,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";

const services = [
  {
    icon: HeartHandshake,
    id: "velorio-e-sepultamento",
    title: "Velório e Sepultamento",
    tagline: "Uma despedida digna e acolhedora",
    description:
      "Organizamos velórios em ambiente acolhedor, com toda a cerimônia conduzida com respeito, privacidade e suporte completo à família — do preparo do corpo ao sepultamento.",
    details: [
      "Salas climatizadas para cerimônias religiosas ou civis",
      "Preparação completa: higienização, tanatopraxia e estética",
      "Sepultamento em jazigos próprios ou locados",
      "Equipe de apoio presente durante toda a cerimônia",
    ],
  },
  {
    icon: Car,
    id: "traslado-funerario",
    title: "Traslado Funerário",
    tagline: "Cuidado e segurança em cada trajeto",
    description:
      "Transporte do ente querido desde o local do óbito até o cemitério, com veículos especializados, equipe treinada e total respeito à dignidade.",
    details: [
      "Remoção do corpo do local de óbito (hospital, residência ou IML)",
      "Traslado à agência funerária para preparação",
      "Traslados intermunicipais e interestaduais com documentação",
      "Frota própria de veículos devidamente licenciados",
    ],
  },
  {
    icon: Flower2,
    id: "coroa-de-flores",
    title: "Coroa de Flores",
    tagline: "Homenagens florais com significado",
    description:
      "Ampla variedade de arranjos florais — coroas, buquês e composições — para que a homenagem seja tão especial quanto a memória do ente querido.",
    details: [
      "Coroas tradicionais, arranjos modernos e buquês personalizados",
      "Flores naturais frescas ou artificiais de alta qualidade",
      "Personalização com faixas, mensagens e cores do falecido",
      "Entrega direta no velório ou no local de sepultamento",
    ],
  },
  {
    icon: FlaskConical,
    id: "laboratorio-funerario",
    title: "Laboratório Funerário",
    tagline: "Preservação com técnica e respeito",
    description:
      "Laboratório próprio no local para conservação, higienização e estética do corpo, permitindo que a família se despeça com serenidade.",
    details: [
      "Tanatopraxia: técnica de conservação do corpo",
      "Higienização rigorosa com protocolos sanitários",
      "Estética funerária — maquiagem, penteado e apresentação",
      "Profissionais especializados e certificados",
    ],
  },
  {
    icon: Flame,
    id: "cremacao",
    title: "Cremação",
    tagline: "Uma escolha respeitosa e cada vez mais comum",
    description:
      "Realizamos cremações com todo o cuidado que o momento exige, oferecendo uma alternativa ao sepultamento com acompanhamento completo.",
    details: [
      "Assessoria e obtenção das autorizações legais necessárias",
      "Serviço realizado em parceiro credenciado com rastreabilidade",
      "Entrega das cinzas à família em urna de sua escolha",
      "Cerimônia de despedida antes ou após a cremação",
    ],
  },
  {
    icon: FileText,
    id: "documentacao",
    title: "Assessoria em Documentação",
    tagline: "Burocracia resolvida para você focar no que importa",
    description:
      "Nossa equipe cuida de toda a gestão e liberação de documentos necessários para o registro e sepultamento, do início ao fim.",
    details: [
      "Declaração e registro de óbito em cartório",
      "Emissão da Certidão de Óbito junto ao Cartório Civil",
      "Autorização de sepultamento junto aos órgãos competentes",
      "Acompanhamento de processos junto ao IML quando necessário",
    ],
  },
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const Icon = svc.icon;
  return (
    <ScrollReveal delay={index * 0.06}>
      <div
        id={svc.id}
        className="flex flex-col h-full"
        style={{
          background: "#ffffff",
          border: "1px solid rgba(229,229,229,0.9)",
          borderRadius: "6px",
          overflow: "hidden",
        }}
      >
        {/* Card top bar */}
        <div
          className="flex items-center justify-between px-8 py-5"
          style={{ borderBottom: "1px solid rgba(229,229,229,0.7)" }}
        >
          <span
            style={{
              fontFamily: "'Sorts Mill Goudy', serif",
              fontSize: "13px",
              fontWeight: 400,
              letterSpacing: "1px",
              color: "rgba(10,10,10,0.25)",
              userSelect: "none",
            }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <div
            className="w-9 h-9 flex items-center justify-center rounded-[6px]"
            style={{ background: "rgba(200,150,62,0.1)" }}
          >
            <Icon size={17} strokeWidth={1.6} style={{ color: "#C8963E" }} />
          </div>
        </div>

        {/* Card body */}
        <div className="flex flex-col flex-1 px-8 pt-7 pb-8 gap-5">
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "22px",
                fontWeight: 400,
                lineHeight: "1.3",
                letterSpacing: "-0.3px",
                color: "#0a0a0a",
                textWrap: "balance",
              }}
            >
              {svc.title}
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "1.7",
                color: "#6b6b6b",
                textWrap: "pretty",
              }}
            >
              {svc.description}
            </p>
          </div>

          {/* Details */}
          <ul className="flex flex-col gap-2.5 flex-1">
            {svc.details.map((detail, j) => (
              <li key={j} className="flex items-start gap-3">
                <span
                  className="shrink-0 mt-[6px] w-[5px] h-[5px] rounded-full"
                  style={{ background: "#C8963E" }}
                />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 400,
                    lineHeight: "1.6",
                    color: "#2d2d2d",
                  }}
                >
                  {detail}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <div className="pt-2">
            <a
              href={`https://wa.me/5511934243013?text=Olá%2C%20gostaria%20de%20solicitar%20o%20serviço%20de%20${encodeURIComponent(svc.title)}.`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-flex items-center gap-2.5 group/btn transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#ffffff",
                background: "#C8963E",
                padding: "12px 22px",
                borderRadius: "4px",
                border: "1.5px solid #C8963E",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#b5842f";
                (e.currentTarget as HTMLElement).style.borderColor = "#b5842f";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#C8963E";
                (e.currentTarget as HTMLElement).style.borderColor = "#C8963E";
              }}
            >
              <MessageCircle size={14} strokeWidth={2} />
              Solicitar serviço
            </a>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function FuneraryServices() {
  const isMobile = useIsMobile();

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => scrollToSection(hash, true), 150);
    } else {
      scrollToTop(true);
    }
  }, []);

  return (
    <div className="bg-[#fbfbf9] min-h-screen">
      {/* ── Hero ── */}
      <PageHeroBanner
        badge="SERVIÇOS · GRUPO MAYA"
        title="Serviços Funerários"
        description="Conheça em detalhes todos os serviços oferecidos pelo Grupo Maya — do velório à documentação, com suporte humanizado e atendimento 24 horas."
        image={imgSection}
        cta={{
          label: "Fale conosco",
          href: "https://wa.me/5511934243013",
          whatsapp: true,
          style: "primary",
        }}
      />

      {/* ── Services grid ── */}
      <section className="py-20 md:py-28">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

          {/* Section intro */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12 md:mb-16">
              <div className="flex flex-col gap-2">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: "#6b6b6b" }}>
                  SERVIÇOS DISPONÍVEIS
                </p>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "34px" : "40px", fontWeight: 400, lineHeight: 1.2, letterSpacing: "-0.8px", color: "#0a0a0a", textWrap: "balance" }}>
                  Suporte completo em cada etapa
                </h2>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.7", color: "#6b6b6b", maxWidth: "340px", textWrap: "pretty" }}>
                Atendimento 24h, equipe especializada e suporte humanizado para acompanhar sua família com respeito.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)" }}
          >
            {services.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Cross-link: Serviços Cemiteriais ── */}
      <section className="bg-[#f0efeb] py-16 md:py-20">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-3 max-w-[460px]">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6b6b" }}>
                  SERVIÇOS CEMITERIAIS
                </p>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "28px" : "34px", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.5px", color: "#0a0a0a", textWrap: "balance" }}>
                  Precisa de um jazigo, exumação ou zeladoria?
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#575757", textWrap: "pretty" }}>
                  Conheça nossos serviços voltados aos cemitérios: venda e locação de jazigos, zeladoria, exumação e recadastramento.
                </p>
              </div>
              <Link
                to="/servicos-cemiteriais"
                className="inline-flex items-center gap-2 flex-shrink-0 group/cta"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 600,
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  color: "#0a0a0a",
                  padding: "14px 28px",
                  border: "1.5px solid #0a0a0a",
                  borderRadius: "4px",
                  transition: "all 0.2s ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "#0a0a0a"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "#0a0a0a"; }}
              >
                Ver serviços cemiteriais
                <ArrowUpRight size={15} className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
