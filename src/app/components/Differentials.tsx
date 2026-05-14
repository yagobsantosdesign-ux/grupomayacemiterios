import image_9e9e53106d3dba120f72b5f22c02a5a1218ef85c from 'figma:asset/9e9e53106d3dba120f72b5f22c02a5a1218ef85c.png'
import imgLageado from "figma:asset/598a21b94e6c6990f8409e67be049272aed8c784.png";
import imgLapa from "figma:asset/fc327dd60e544345aa52c2b63d75329e9ab06d6f.png";
import imgParelheiros from "figma:asset/2f1d62726cc42cc12a4e4edf77039db3b48d1564.png";
import imgSaudade from "figma:asset/fe7b9e805228b0eb636a1dab76f22573c5dee6dc.png";
import imgCampoGrande from "figma:asset/f96252e92aa1d51ca25eaa5118a3820d5ec9b390.png";
import { ScrollReveal } from "./ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import svgPaths from "../../imports/svg-vghu6dqmcb";
import { ArrowUpRight } from "lucide-react";

const GOLD = "#E4B562";

const features = [
  {
    iconPaths: [
      { d: svgPaths.p184f2c80 },
      { d: "M10 18.3333V15.8333" },
    ],
    title: "5 Unidades na Cidade",
    description:
      "Cemitérios nas zonas Leste, Oeste e Sul de São Paulo, próximos à sua família em toda a cidade.",
  },
  {
    iconPaths: [
      { d: svgPaths.p1ecd6152 },
      { d: svgPaths.p17796300 },
    ],
    title: "Infraestrutura Completa",
    description:
      "Velórios climatizados, atendimento 24h, estacionamento e acessibilidade total em todas as unidades.",
  },
  {
    iconPaths: [
      { d: svgPaths.p20d10600 },
      { d: "M10 1.66667V3.33333" },
      { d: "M10 16.6667V18.3333" },
      { d: "M1.66667 10H3.33333" },
      { d: "M16.6667 10H18.3333" },
      { d: svgPaths.p2561cd80 },
      { d: svgPaths.p1a2cf7c0 },
      { d: svgPaths.p3d0afd40 },
      { d: svgPaths.p18688e80 },
    ],
    title: "Atendimento Humanizado",
    description:
      "Equipe treinada para acolher famílias com respeito, empatia e apoio integral em momentos de luto.",
  },
  {
    iconPaths: [
      { d: svgPaths.p26ddc800 },
      { d: svgPaths.p35ba4680 },
    ],
    title: "Concessão Municipal",
    description:
      "Administradora oficial de cemitérios municipais, credenciada e fiscalizada pela Prefeitura de São Paulo.",
  },
];

const cemeteries = [
  {
    name: "Cemitério Lajeado",
    region: "Zona Leste",
    img: imgLageado,
    mapsUrl: "https://maps.google.com/?q=Estr.+do+Lajeado+Velho,+1490,+Guaianases,+São+Paulo,+SP",
  },
  {
    name: "Cemitério da Lapa",
    region: "Zona Oeste",
    img: imgLapa,
    mapsUrl: "https://maps.google.com/?q=R.+Bergson,+347,+Vila+Leopoldina,+São+Paulo,+SP",
  },
  {
    name: "Cemitério Campo Grande",
    region: "Zona Sul",
    img: imgCampoGrande,
    mapsUrl: "https://maps.google.com/?q=Av.+Nossa+Senhora+do+Sabará,+1371,+Campo+Grande,+São+Paulo,+SP",
  },
  {
    name: "Cemitério Parelheiros",
    region: "Zona Sul",
    img: imgParelheiros,
    mapsUrl: "https://maps.google.com/?q=Rua+Amaro+de+Pontes,+237,+Parelheiros,+São+Paulo,+SP",
  },
  {
    name: "Cemitério da Saudade",
    region: "Zona Leste",
    img: imgSaudade,
    mapsUrl: "https://maps.google.com/?q=Rua+Samuel+de+Carvalho,+60,+Jardim+São+Sebastião,+São+Paulo,+SP",
  },
];

function FeatureCard({ feat, delay }: { feat: typeof features[0]; delay: number }) {
  return (
    <ScrollReveal delay={delay}>
      <div className="flex flex-col gap-6">
        {/* Icon box */}
        <div
          className="flex items-center justify-center flex-shrink-0"
          style={{
            width: "44px",
            height: "44px",
            background: "rgba(255,255,255,0.1)",
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
          }}
        >
          <svg viewBox="0 0 20 20" width="20" height="20" fill="none">
            {feat.iconPaths.map((p, j) => (
              <path
                key={j}
                d={p.d}
                stroke={GOLD}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.66667"
              />
            ))}
          </svg>
        </div>

        {/* Text */}
        <div className="flex flex-col gap-1">
          <p
            className="text-white"
            style={{
              fontFamily: "'Sorts Mill Goudy', serif",
              fontSize: "20px",
              fontWeight: 400,
              letterSpacing: "-0.5px",
              lineHeight: "36px",
            }}
          >
            {feat.title}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "15px",
              fontWeight: 400,
              lineHeight: "24px",
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {feat.description}
          </p>
        </div>
      </div>
    </ScrollReveal>
  );
}

export function Differentials() {
  const isMobile = useIsMobile();
  return (
    <section
      id="diferenciais"
      className="py-24 md:py-32"
      style={{
        background: "#22402b",
        borderTopWidth: "1px",
        borderTopStyle: "solid",
        borderTopColor: GOLD,
      }}
    >
      {/* Anchor para "cemiterios" */}
      <div id="cemiterios" style={{ position: "relative", top: "-100px" }} />

      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[96px] lg:items-stretch">

          {/* Left — Image */}
          <ScrollReveal className="w-full lg:w-[480px] lg:shrink-0 lg:self-stretch" direction="left">
            <div className="relative overflow-hidden w-full h-[420px] md:h-[520px] lg:h-full">
              <img
                src={image_9e9e53106d3dba120f72b5f22c02a5a1218ef85c}
                alt="Grupo Maya — Diferenciais"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </ScrollReveal>

          {/* Right — Text + 2×2 grid */}
          <div className="w-full flex-1 min-w-0 flex flex-col justify-between gap-10 lg:py-2">
            {/* Label + Heading */}
            <div className="flex flex-col gap-4">
              <ScrollReveal>
                <p
                   className="text-[12px] md:text-[14px]"
                   style={{
                     fontFamily: "'Inter', sans-serif",
                     fontWeight: 500,
                     letterSpacing: "2.4px",
                     textTransform: "uppercase",
                     color: "#FFFFFF",
                   }}
                 >
                   POR QUE O GRUPO MAYA
                </p>
              </ScrollReveal>

              <ScrollReveal delay={0.1}>
                <h2
                   className="text-white"
                   style={{
                     fontFamily: "'Sorts Mill Goudy', serif",
                     fontSize: isMobile ? "34px" : "48px",
                     fontWeight: 400,
                     lineHeight: 1.2,
                     letterSpacing: "-1.5px",
                   }}
                 >
                  Compromisso com
                  <br />sua família
                </h2>
              </ScrollReveal>
            </div>

            {/* 2×2 grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feat, i) => (
                <FeatureCard key={feat.title} feat={feat} delay={0.15 + i * 0.08} />
              ))}
            </div>
          </div>

        </div>

        {/* ── Nossas Unidades strip ── */}
        <ScrollReveal delay={0.1}>
          <div
            className="mt-16 pt-12"
            style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            {/* Strip header */}
            <div className="flex items-center justify-between mb-6">
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.5)",
                }}
              >
                Nossas Unidades — 5 cemitérios em São Paulo
              </p>
            </div>

            {/* 5 mini-cards */}
            <div
              className="grid gap-3"
              style={{ gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(5, 1fr)" }}
            >
              {cemeteries.map((cem, i) => (
                <ScrollReveal key={cem.name} delay={0.05 + i * 0.06}>
                  <a
                    href={cem.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col overflow-hidden"
                    style={{
                      border: "1px solid rgba(255,255,255,0.1)",
                      textDecoration: "none",
                      transition: "border-color 0.25s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(200,150,62,0.6)")}
                    onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    {/* Image */}
                    <div className="relative w-full overflow-hidden" style={{ height: "130px" }}>
                      <img
                        src={cem.img}
                        alt={cem.name}
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-500"
                      />
                      {/* Overlay */}
                      <div
                        className="absolute inset-0"
                        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 60%)" }}
                      />
                      {/* Region badge */}
                      <span
                        className="absolute top-2 left-2 px-2 py-0.5"
                        style={{
                          background: "rgba(43,94,58,0.9)",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "9px",
                          fontWeight: 600,
                          letterSpacing: "1.2px",
                          textTransform: "uppercase",
                          color: "#fff",
                        }}
                      >
                        {cem.region}
                      </span>
                    </div>

                    {/* Name */}
                    <div
                      className="flex items-center justify-between px-3 py-3"
                      style={{ background: "rgba(255,255,255,0.04)" }}
                    >
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "12px",
                          fontWeight: 500,
                          lineHeight: "16px",
                          color: "rgba(255,255,255,0.85)",
                        }}
                      >
                        {cem.name}
                      </p>
                      <ArrowUpRight
                        className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                        style={{ color: GOLD }}
                      />
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}