import { Link } from "react-router";
import { ScrollReveal } from "./ScrollReveal";
import { ArrowUpRight } from "lucide-react";
import HandshakeRoundedIcon from "@mui/icons-material/HandshakeRounded";
import DirectionsCarRoundedIcon from "@mui/icons-material/DirectionsCarRounded";
import LocalFloristRoundedIcon from "@mui/icons-material/LocalFloristRounded";
import ScienceRoundedIcon from "@mui/icons-material/ScienceRounded";
import WhatshotRoundedIcon from "@mui/icons-material/WhatshotRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import DescriptionRoundedIcon from "@mui/icons-material/DescriptionRounded";
import NightShelterRoundedIcon from "@mui/icons-material/NightShelterRounded";

const services = [
  {
    icon: HandshakeRoundedIcon,
    title: "Velório e Sepultamento",
    slug: "velorio-e-sepultamento",
    description:
      "Preparação completa e respeitosa do corpo para as cerimônias de velório e o descanso final.",
  },
  {
    icon: DirectionsCarRoundedIcon,
    title: "Traslado Funerário",
    slug: "traslado-funerario",
    description:
      "Transporte seguro e cuidadoso do ente querido até o local das cerimônias e de sepultamento.",
  },
  {
    icon: LocalFloristRoundedIcon,
    title: "Coroa de Flores",
    slug: "coroa-de-flores",
    description:
      "Homenagens florais que simbolizam carinho, gratidão e respeito à memória daquele que partiu.",
  },
  {
    icon: ScienceRoundedIcon,
    title: "Laboratório",
    slug: "laboratorio-funerario",
    description:
      "Técnicas de conservação, higienização e estética para garantir uma despedida com dignidade.",
  },
  {
    icon: WhatshotRoundedIcon,
    title: "Cremação",
    slug: "cremacao",
    description:
      "Serviço respeitoso de incineração do corpo para a preservação e guarda das cinzas.",
  },
  {
    icon: BusinessRoundedIcon,
    title: "Venda e Locação\nde Jazigo",
    slug: "venda-e-locacao-de-jazigo",
    description:
      "Opções flexíveis de espaços temporários ou definitivos para o descanso final do ente querido.",
  },
  {
    icon: DescriptionRoundedIcon,
    title: "Assessoria Documental",
    slug: "assessoria-documental",
    description:
      "Apoio completo na obtenção de certidões, declarações e demais documentos necessários.",
  },
  {
    icon: NightShelterRoundedIcon,
    title: "Exumação",
    slug: "exumacao",
    description:
      "Processo técnico e humanizado de exumação de restos mortais conforme normas municipais.",
  },
];

// Duplicate for seamless infinite loop
const track = [...services, ...services];

export function Services() {
  return (
    <section
      id="solucoes"
      className="py-24 md:py-32 bg-[#fbfbf9] overflow-hidden"
      style={{ borderTop: "1px solid rgba(229,229,229,0.5)" }}
    >
      {/* Header */}
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="flex flex-col gap-[16px] items-start mb-16 max-w-[560px]">
          <ScrollReveal>
            <p
              className="text-[#0a0a0a] text-[14px]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 500,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                lineHeight: "21px",
              }}
            >
              NOSSOS SERVIÇOS
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h2
              className="text-[#0a0a0a]"
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: "36px",
                letterSpacing: "-0.5px",
              }}
            >
              Soluções completas para todas as necessidades
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <p
              className="text-[#575757]"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.6",
                maxWidth: "445px",
              }}
            >
              O Grupo Maya oferece uma gama completa de serviços funerários e cemiteriais em todas as suas unidades, para que você não precise se preocupar com nada.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* ── Infinite carousel ── */}
      <div className="relative">
        {/* Left fade */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 z-10 w-16 md:w-28"
          style={{
            background: "linear-gradient(to right, #fbfbf9 0%, transparent 100%)",
          }}
        />
        {/* Right fade */}
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 z-10 w-16 md:w-28"
          style={{
            background: "linear-gradient(to left, #fbfbf9 0%, transparent 100%)",
          }}
        />

        <div className="flex" style={{ gap: "0px" }}>
          <div
            className="flex flex-shrink-0 gap-5"
            style={{
              animation: "marquee-services 32s linear infinite",
              willChange: "transform",
            }}
          >
            {track.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <Link
                  key={`${svc.slug}-${i}`}
                  to={`/servicos-funerarios#${svc.slug}`}
                  className="group flex-shrink-0 bg-white border border-[#e0e0dc] p-7 flex flex-col gap-5 transition-all duration-300 hover:shadow-lg hover:shadow-[#C8963E]/06 hover:-translate-y-1 hover:border-[#C8963E]/30"
                  style={{
                    width: "260px",
                    textDecoration: "none",
                  }}
                >
                  {/* Icon */}
                  <div className="w-11 h-11 rounded-[8px] bg-[#C8963E] flex items-center justify-center flex-shrink-0">
                    <Icon style={{ fontSize: 20, color: "#ffffff" }} />
                  </div>

                  {/* Text */}
                  <div className="flex flex-col gap-2 flex-1">
                    <h3
                      className="text-[#0a0a0a]"
                      style={{
                        fontFamily: "'Sorts Mill Goudy', serif",
                        fontSize: "20px",
                        fontWeight: 400,
                        letterSpacing: "-0.3px",
                        lineHeight: "1.3",
                        whiteSpace: "pre-line",
                      }}
                    >
                      {svc.title}
                    </h3>
                    <p
                      className="text-[#6b6b6b]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "1.65",
                      }}
                    >
                      {svc.description}
                    </p>
                  </div>

                  {/* CTA */}
                  <span
                    className="inline-flex items-center gap-1 text-[#0a0a0a] group-hover:text-[#C8963E] transition-colors duration-200"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "1.6px",
                      textTransform: "uppercase",
                    }}
                  >
                    SAIBA MAIS
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* CTA link */}
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] mt-12">
        <ScrollReveal>
          <Link
            to="/servicos-funerarios"
            onClick={() => window.scrollTo({ top: 0, behavior: "instant" })}
            className="inline-flex items-center gap-2 group"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#C8963E",
              textDecoration: "none",
            }}
          >
            VER TODOS OS SERVIÇOS
            <ArrowUpRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </ScrollReveal>
      </div>

      {/* Keyframe animation */}
      <style>{`
        @keyframes marquee-services {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .flex > div[style*="marquee-services"] {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}