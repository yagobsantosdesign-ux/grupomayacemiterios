import imgLageado from "figma:asset/598a21b94e6c6990f8409e67be049272aed8c784.png";
import imgLapa from "figma:asset/fc327dd60e544345aa52c2b63d75329e9ab06d6f.png";
import imgParelheiros from "figma:asset/2f1d62726cc42cc12a4e4edf77039db3b48d1564.png";
import imgSaudade from "figma:asset/fe7b9e805228b0eb636a1dab76f22573c5dee6dc.png";
import imgCampoGrande from "figma:asset/f96252e92aa1d51ca25eaa5118a3820d5ec9b390.png";
import { ScrollReveal } from "./ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { ArrowUpRight } from "lucide-react";

const cemeteries = [
  {
    name: "Cemitério Lajeado",
    region: "Zona Leste",
    address: "Estr. do Lajeado Velho, 1490\nGuaianases, São Paulo – SP",
    img: imgLageado,
    siteUrl: "https://cemiteriolajeado.com.br",
  },
  {
    name: "Cemitério da Lapa",
    region: "Zona Oeste",
    address: "R. Bergson, 347\nVila Leopoldina, São Paulo – SP",
    img: imgLapa,
    siteUrl: "https://cemiteriolapa.com",
  },
  {
    name: "Cemitério Campo Grande",
    region: "Zona Sul",
    address: "Av. Nossa Senhora do Sabará, 1371\nCampo Grande, São Paulo – SP",
    img: imgCampoGrande,
    siteUrl: "https://cemiteriocampogrande.com",
  },
  {
    name: "Cemitério Parelheiros",
    region: "Zona Sul",
    address: "R. Amaro de Pontes, 237\nParelheiros, São Paulo – SP",
    img: imgParelheiros,
    siteUrl: "https://cemiterioparelheiros.com.br",
  },
  {
    name: "Cemitério da Saudade",
    region: "Zona Leste",
    address: "R. Samuel de Carvalho, 60\nJd. São Sebastião, São Paulo – SP",
    img: imgSaudade,
    siteUrl: "https://cemiteriosaudade.com.br",
  },
];

function CemeteryCard({ cemetery, featured = false }: { cemetery: typeof cemeteries[0]; featured?: boolean }) {
  return (
    <a
      href={cemetery.siteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex flex-col overflow-hidden border border-[#e0e0dc] bg-white hover:border-[#C8963E] hover:shadow-xl hover:shadow-[#C8963E]/8 hover:-translate-y-1 transition-all duration-400"
      style={{ textDecoration: "none" }}
    >
      {/* Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ height: featured ? "320px" : "220px" }}
      >
        <img
          src={cemetery.img}
          alt={cemetery.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
        />
        {/* Region badge */}
        <div
          className="absolute top-4 left-4 px-3 py-1 rounded-[4px]"
          style={{
            background: "rgba(43,94,58,0.92)",
            backdropFilter: "blur(4px)",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "1.5px",
              textTransform: "uppercase",
              color: "#ffffff",
            }}
          >
            {cemetery.region}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-3 p-6">
        <p
          style={{
            fontFamily: "'Sorts Mill Goudy', serif",
            fontSize: "20px",
            fontWeight: 400,
            letterSpacing: "-0.3px",
            lineHeight: "1.3",
            color: "#0a0a0a",
          }}
        >
          {cemetery.name}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            lineHeight: "22px",
            color: "#6b6b6b",
            whiteSpace: "pre-line",
          }}
        >
          {cemetery.address}
        </p>
        <span
          className="inline-flex items-center gap-1.5 text-[#0a0a0a] group-hover:text-[#C8963E] transition-colors duration-200 mt-1"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "1.8px",
            textTransform: "uppercase",
          }}
        >
          VISITAR SITE
          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </span>
      </div>
    </a>
  );
}

export function Cemeteries() {
  const isMobile = useIsMobile();

  return (
    <section
      id="cemiterios"
      className="py-24 md:py-32 bg-[#F7F7F5]"
      style={{}}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="flex flex-col gap-3 max-w-[540px]">
            <ScrollReveal>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13px",
                  fontWeight: 500,
                  letterSpacing: "2.4px",
                  textTransform: "uppercase",
                  color: "#C8963E",
                  lineHeight: "21px",
                }}
              >
                NOSSOS CEMITÉRIOS
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: isMobile ? "34px" : "48px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-1.5px",
                  color: "#0a0a0a",
                }}
              >
                Presença em toda a cidade de São Paulo
              </h2>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.12}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "28px",
                color: "#575757",
                maxWidth: "400px",
              }}
            >
              5 unidades nas regiões Leste, Oeste e Sul de São Paulo para atender você com proximidade, estrutura e cuidado.
            </p>
          </ScrollReveal>
        </div>

        {/* Grid */}
        {isMobile ? (
          /* Mobile: single column */
          <div className="flex flex-col gap-5">
            {cemeteries.map((cem, i) => (
              <ScrollReveal key={cem.name} delay={i * 0.07}>
                <CemeteryCard cemetery={cem} />
              </ScrollReveal>
            ))}
          </div>
        ) : (
          /* Desktop: bento-style layout */
          <div className="flex flex-col gap-5">
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-3 gap-5">
              {cemeteries.slice(0, 3).map((cem, i) => (
                <ScrollReveal key={cem.name} delay={0.08 + i * 0.08}>
                  <CemeteryCard cemetery={cem} />
                </ScrollReveal>
              ))}
            </div>
            {/* Row 2: 2 featured cards */}
            <div className="grid grid-cols-2 gap-5">
              {cemeteries.slice(3).map((cem, i) => (
                <ScrollReveal key={cem.name} delay={0.08 + i * 0.1}>
                  <CemeteryCard cemetery={cem} featured />
                </ScrollReveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}