import { useEffect } from "react";
import { scrollToSection, scrollToTop } from "../utils/scroll";
import { Link } from "react-router";
import { trackWhatsAppConversion } from "../components/GoogleAnalytics";
import { PageHeroBanner } from "../components/PageHeroBanner";
import {
  Building2,
  Archive,
  Leaf,
  MessageCircle,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";

import imgHero from "../../assets/hero-cemiteriais.webp";

const services = [
  {
    icon: Building2,
    id: "venda-e-locacao-de-jazigo",
    title: "Venda e Locação de Jazigo",
    tagline: "Seu espaço para o descanso eterno",
    description:
      "Oferecemos jazigos verticais, jazigos familiares e sepulturas tradicionais, além de lápides personalizadas — com opções flexíveis de aquisição ou locação.",
    details: [
      "Jazigos verticais e jazigos familiares (múltiplas gavetas)",
      "Jazigo temporário (locação) ou perpétuo (compra definitiva)",
      "Lápides personalizadas para homenagear a memória",
      "Columbários para guarda de urnas com cinzas de cremação",
      "Consultoria para escolha do melhor espaço",
    ],
  },
  {
    icon: Leaf,
    id: "zeladoria-e-jardinagem",
    title: "Zeladoria e Jardinagem",
    tagline: "Preservando a beleza e a tranquilidade do lugar",
    description:
      "Nossa equipe cuida continuamente dos cemitérios para que permaneçam lugares de paz, dignidade e memória — dos jardins ao patrimônio histórico.",
    details: [
      "Manutenção dos jardins, alamedas e áreas de convivência",
      "Conservação das estruturas de jazigos e do patrimônio histórico",
      "Limpeza de túmulos e lápides, mediante solicitação",
      "Plantio de vegetação nativa respeitando o caráter histórico",
      "Equipe residente para atendimento no local",
    ],
  },
  {
    icon: Archive,
    id: "exumacao",
    title: "Exumação",
    tagline: "Cuidar da memória é um gesto de amor",
    description:
      "Após 3 anos e 30 dias do sepultamento, a exumação é obrigatória. Acolhemos sua família com suporte humanizado em cada etapa desse processo.",
    details: [
      "Atendimento nos cemitérios Lajeado, Lapa, Parelheiros e Saudade",
      "Orientação sobre prazos e obrigações legais",
      "Definição do destino: jazigo, ossuário ou cremação",
      "Regularização de documentação junto ao cemitério",
      "Suporte humanizado à família em cada etapa",
    ],
  },
];

const cemeteries = [
  "Cemitério Lajeado",
  "Cemitério da Lapa",
  "Cemitério Campo Grande",
  "Cemitério Parelheiros",
  "Cemitério da Saudade",
];

function ServiceCard({ svc, index }: { svc: typeof services[0]; index: number }) {
  const Icon = svc.icon;
  return (
    <ScrollReveal delay={index * 0.08}>
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
            style={{ background: "rgba(43,94,58,0.1)" }}
          >
            <Icon size={17} strokeWidth={1.6} style={{ color: "#2B5E3A" }} />
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
                  style={{ background: "#2B5E3A" }}
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
              className="inline-flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "1.4px",
                textTransform: "uppercase",
                textDecoration: "none",
                color: "#ffffff",
                background: "#2B5E3A",
                padding: "12px 22px",
                borderRadius: "4px",
                border: "1.5px solid #2B5E3A",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = "#1f4429";
                (e.currentTarget as HTMLElement).style.borderColor = "#1f4429";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "#2B5E3A";
                (e.currentTarget as HTMLElement).style.borderColor = "#2B5E3A";
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

export default function CemeteryServices() {
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
        title="Serviços Cemiteriais"
        description="Jazigos, zeladoria, exumação e recadastramento — suporte completo para cuidar da memória dos seus entes queridos com respeito e humanidade."
        image={imgHero}
        cta={{
          label: "Fale conosco",
          href: "https://wa.me/5511934243013",
          whatsapp: true,
          style: "primary",
        }}
      />

      {/* ── Cemitérios atendidos ── */}
      <section className="border-b border-[#e8e8e4]" style={{ backgroundColor: "#ffffff" }}>
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] py-7">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2 flex-shrink-0">
              <MapPin size={14} strokeWidth={2} style={{ color: "#2B5E3A" }} />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase", color: "#6b6b6b" }}>
                Cemitérios atendidos
              </span>
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {cemeteries.map((name) => (
                <span
                  key={name}
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13.5px", fontWeight: 400, color: "#2d2d2d" }}
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                  Cuidado contínuo com os seus
                </h2>
              </div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "1.7", color: "#6b6b6b", maxWidth: "340px", textWrap: "pretty" }}>
                Serviços cemiteriais com estrutura, orientação e atendimento humanizado nos cinco cemitérios do Grupo Maya.
              </p>
            </div>
          </ScrollReveal>

          {/* Grid — 3 colunas no desktop */}
          <div
            className="grid gap-3"
            style={{ gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)" }}
          >
            {services.map((svc, i) => (
              <ServiceCard key={svc.id} svc={svc} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Recadastramento callout ── */}
      <section className="bg-[#f0efeb] py-16 md:py-20">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div className="flex flex-col gap-3 max-w-[460px]">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2px", textTransform: "uppercase", color: "#6b6b6b" }}>
                  RECADASTRAMENTO DE JAZIGO
                </p>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "28px" : "34px", fontWeight: 400, lineHeight: 1.25, letterSpacing: "-0.5px", color: "#0a0a0a", textWrap: "balance" }}>
                  Regularize a posse do seu jazigo
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#575757", textWrap: "pretty" }}>
                  Garanta o direito de uso do seu jazigo para as próximas gerações. Atendemos os cinco cemitérios do Grupo Maya com processo simplificado.
                </p>
              </div>
              <Link
                to="/recadastramento-de-jazigos"
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
                Saiba como recadastrar
                <ArrowUpRight size={15} className="transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

    </div>
  );
}
