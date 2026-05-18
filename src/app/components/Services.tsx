import { useState } from "react";
import { Link } from "react-router";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import { scrollToTop } from "../utils/scroll";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import YardRoundedIcon from "@mui/icons-material/YardRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import ApartmentRoundedIcon from "@mui/icons-material/ApartmentRounded";
import imgPhoto1 from "../../assets/services-cemetery.webp";
import imgPhoto2 from "figma:asset/9e9e53106d3dba120f72b5f22c02a5a1218ef85c.png";
import { useIsMobile } from "../hooks/useIsMobile";

const funerarios = [
  {
    icon: HandshakeRoundedIcon,
    title: "Velório e Sepultamento",
    slug: "velorio-e-sepultamento",
    description: "Preparação completa e respeitosa para as cerimônias de velório e o descanso final com dignidade.",
  },
  {
    icon: DirectionsCarRoundedIcon,
    title: "Traslado Funerário",
    slug: "traslado-funerario",
    description: "Transporte seguro e cuidadoso do ente querido até o local das cerimônias e de sepultamento.",
  },
  {
    icon: WhatshotRoundedIcon,
    title: "Cremação",
    slug: "cremacao",
    description: "Serviço respeitoso de incineração para a preservação e guarda das cinzas com todo o cuidado.",
  },
  {
    icon: BusinessRoundedIcon,
    title: "Venda e Locação de Jazigo",
    slug: "venda-e-locacao-de-jazigo",
    description: "Opções flexíveis de espaços temporários ou definitivos para o descanso final do ente querido.",
  },
];

const cemiteriais = [
  {
    icon: ApartmentRoundedIcon,
    title: "Jazigos Verticais",
    slug: "jazigos-verticais",
    description: "Estruturas modernas em gaveta para famílias que buscam praticidade e dignidade no descanso eterno.",
  },
  {
    icon: YardRoundedIcon,
    title: "Zeladoria e Conservação",
    slug: "zeladoria",
    description: "Serviços de jardinagem, limpeza e reforma de túmulos para manter o espaço sempre digno e cuidado.",
  },
  {
    icon: SearchRoundedIcon,
    title: "Exumação",
    slug: "exumacao",
    description: "Retirada de ossadas após o período legal para transferência a ossuários ou encaminhamento à cremação.",
  },
  {
    icon: AssignmentTurnedInRoundedIcon,
    title: "Recadastramento de Jazigo",
    slug: "recadastramento",
    description: "Regularize a posse do seu jazigo e garanta o direito de uso para as próximas gerações da família.",
  },
];

const CARD_BG = "#f0efeb";

type ServiceType = typeof funerarios[0];

function ServiceCard({ svc, delay = 0, iconColor, basePath }: { svc: ServiceType; delay?: number; iconColor: string; basePath: string }) {
  const Icon = svc.icon;
  return (
    <ScrollReveal delay={delay} className="h-full">
      <Link
        to={`${basePath}#${svc.slug}`}
        className="group h-full flex flex-col justify-between p-8 md:p-10 transition-all duration-300 hover:brightness-95"
        style={{ backgroundColor: CARD_BG, textDecoration: "none", minHeight: "380px" }}
      >
        <div>
          <div
            className="w-11 h-11 rounded-[8px] flex items-center justify-center mb-6"
            style={{ backgroundColor: iconColor, transition: "background-color 0.3s ease" }}
          >
            <Icon style={{ fontSize: 20, color: "#fff" }} />
          </div>
          <h3
            className="text-[#0a0a0a]"
            style={{
              fontFamily: "'Sorts Mill Goudy', serif",
              fontSize: "22px",
              fontWeight: 400,
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
            }}
          >
            {svc.title}
          </h3>
        </div>

        <div className="mt-6">
          <p
            className="text-[#6b6b6b] mb-6"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "1.7" }}
          >
            {svc.description}
          </p>
          <span
            className="inline-flex items-center gap-1 text-[#0a0a0a] transition-colors duration-200"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase" }}
          >
            SAIBA MAIS
            <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}

export function Services() {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState<"funerarios" | "cemiteriais">("funerarios");
  const services = activeTab === "funerarios" ? funerarios : cemiteriais;
  const isCemiterial = activeTab === "cemiteriais";
  const iconColor = isCemiterial ? "#2B5E3A" : "#C8963E";
  const basePath = isCemiterial ? "/servicos-cemiteriais" : "/servicos-funerarios";
  const ctaBg = isCemiterial ? "#C8963E" : "#2B5E3A";
  const currentPhoto = isCemiterial ? imgPhoto2 : imgPhoto1;

  return (
    <section
      id="solucoes"
      className="py-24 md:py-32 bg-white"
      style={{}}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-[60px] mb-12 md:mb-16">
          <ScrollReveal className="md:w-[220px] flex-shrink-0 pt-1">
            <p style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: "12px", letterSpacing: "2.4px", textTransform: "uppercase", color: "#6b6b6b" }}>
              NOSSOS SERVIÇOS
            </p>
          </ScrollReveal>

          <div className="flex flex-col gap-3 flex-1">
            <ScrollReveal delay={0.1}>
              <h2
                className="text-[#0a0a0a]"
                style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "34px" : "48px", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-1px", maxWidth: "520px", textWrap: "balance" }}
              >
                Seu parceiro em serviços funerários completos
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-[#575757]"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: "1.7", maxWidth: "480px" }}
              >
                Facilitamos cada etapa para que você possa se concentrar no que mais importa. Do velório ao jazigo, oferecemos suporte completo com respeito e humanidade.
              </p>
            </ScrollReveal>

            {/* Toggle inline com a headline */}
            <ScrollReveal delay={0.28}>
              <div className="flex items-center gap-1 p-1 w-fit mt-2" style={{ backgroundColor: "#f0efeb" }}>
                {(["funerarios", "cemiteriais"] as const).map((tab) => {
                  const label = tab === "funerarios" ? "Serviços Funerários" : "Serviços Cemiteriais";
                  const isActive = activeTab === tab;
                  return (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: isActive ? 500 : 400,
                        letterSpacing: "0.1px",
                        padding: "10px 20px",
                        border: "none",
                        cursor: "pointer",
                        borderRadius: "6px",
                        backgroundColor: isActive ? "#0a0a0a" : "transparent",
                        color: isActive ? "#fff" : "#6b6b6b",
                        transition: "background-color 0.2s ease, color 0.2s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* ── Grid ── */}
        {isMobile ? (
          <div className="flex flex-col gap-3">
            {services.map((svc, i) => (
              <ServiceCard key={svc.slug} svc={svc} delay={i * 0.08} iconColor={iconColor} basePath={basePath} />
            ))}
          </div>
        ) : (
          <div
            className="grid gap-2"
            style={{ gridTemplateColumns: "repeat(3, 1fr)", gridTemplateRows: "repeat(2, 400px)" }}
          >
            <ScrollReveal className="row-span-1">
              <div className="w-full h-full overflow-hidden">
                <img src={currentPhoto} alt="Grupo Maya — Cemitério" className="w-full h-full object-cover" style={{ display: "block", transition: "opacity 0.3s ease" }} />
              </div>
            </ScrollReveal>

            <ServiceCard svc={services[0]} delay={0.05} iconColor={iconColor} basePath={basePath} />
            <ServiceCard svc={services[1]} delay={0.1} iconColor={iconColor} basePath={basePath} />
            <ServiceCard svc={services[2]} delay={0.12} iconColor={iconColor} basePath={basePath} />
            <ServiceCard svc={services[3]} delay={0.17} iconColor={iconColor} basePath={basePath} />

            <ScrollReveal className="row-span-1">
              <Link
                to={basePath}
                onClick={() => scrollToTop(true)}
                className="group h-full flex flex-col justify-between p-8 md:p-10 transition-all duration-300 hover:brightness-95"
                style={{ backgroundColor: ctaBg, minHeight: "380px", textDecoration: "none", transition: "background-color 0.3s ease" }}
              >
                <div>
                  <div
                    className="w-11 h-11 rounded-[8px] flex items-center justify-center mb-6"
                    style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
                  >
                    <ArrowUpRight size={20} color="#fff" />
                  </div>
                  <h3
                    style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "22px", fontWeight: 400, letterSpacing: "-0.3px", lineHeight: "1.3", color: "#fff", maxWidth: "260px", textWrap: "balance" }}
                  >
                    Conheça todos os serviços do Grupo Maya
                  </h3>
                </div>
                <div className="mt-6">
                  <p
                    className="mb-6"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, lineHeight: "1.7", color: "rgba(255,255,255,0.8)", textWrap: "pretty" }}
                  >
                    Do velório ao jazigo, do traslado à zeladoria — temos suporte completo para cada etapa com respeito e humanidade.
                  </p>
                  <span
                    className="inline-flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase", color: "#fff" }}
                  >
                    VER TODOS
                    <ArrowUpRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            </ScrollReveal>
          </div>
        )}

      </div>
    </section>
  );
}
