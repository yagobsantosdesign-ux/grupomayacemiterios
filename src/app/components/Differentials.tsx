import imgLageado from "figma:asset/598a21b94e6c6990f8409e67be049272aed8c784.png";
import imgLapa from "figma:asset/fc327dd60e544345aa52c2b63d75329e9ab06d6f.png";
import imgParelheiros from "figma:asset/2f1d62726cc42cc12a4e4edf77039db3b48d1564.png";
import imgSaudade from "figma:asset/fe7b9e805228b0eb636a1dab76f22573c5dee6dc.png";
import imgCampoGrande from "figma:asset/f96252e92aa1d51ca25eaa5118a3820d5ec9b390.png";
import lapaBg from "../../assets/differentials-lapa.png";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";
import { ArrowUpRight } from "lucide-react";

const GOLD = "#C8963E";

const stats = [
  { prefix: "",   value: "25",  unit: "anos", label: "De concessão pública assegurada" },
  { prefix: "",   value: "05",  unit: "",     label: "Cemitérios municipais gerenciados" },
  { prefix: "",   value: "41",  unit: "ha",   label: "De área urbana gerenciada" },
  { prefix: "R$", value: "192", unit: "mi",   label: "Em plano de investimentos contratuais" },
];

const cemeteries = [
  {
    name: "Cemitério do Lageado",
    region: "Zona Leste",
    area: "54.000 m²",
    founded: "1904",
    img: imgLageado,
    href: "#",
  },
  {
    name: "Cemitério da Lapa",
    region: "Zona Oeste",
    area: "75.000 m²",
    founded: "1918",
    img: imgLapa,
    href: "#",
  },
  {
    name: "Cemitério Campo Grande",
    region: "Zona Sul",
    area: "145.000 m²",
    founded: null,
    img: imgCampoGrande,
    href: "#",
  },
  {
    name: "Cemitério Parelheiros",
    region: "Zona Sul",
    area: "48.000 m²",
    founded: null,
    img: imgParelheiros,
    href: "#",
  },
  {
    name: "Cemitério da Saudade",
    region: "Zona Leste",
    area: "88.000 m²",
    founded: null,
    img: imgSaudade,
    href: "#",
  },
];

type Cemetery = typeof cemeteries[0];

function CemeteryCard({ cem, featured = false }: { cem: Cemetery; featured?: boolean }) {
  return (
    <a
      href={cem.href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden"
      style={{
        border: "1px solid #e8e8e8",
        textDecoration: "none",
        transition: "border-color 0.25s",
        height: "100%",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = GOLD)}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "#e8e8e8")}
    >
      {/* Image */}
      <div
        className="relative overflow-hidden"
        style={{ flex: 1, minHeight: featured ? "300px" : "160px" }}
      >
        <img
          src={cem.img}
          alt={cem.name}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }}
        />
        {/* Region badge */}
        <span
          className="absolute top-3 left-3 px-2 py-1"
          style={{
            background: "rgba(43,94,58,0.9)",
            fontFamily: "'Inter', sans-serif",
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "1.2px",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          {cem.region}
        </span>
        {/* Founded badge */}
        {cem.founded && (
          <span
            className="absolute top-3 right-3 px-2 py-1"
            style={{
              background: "rgba(200,150,62,0.9)",
              fontFamily: "'Inter', sans-serif",
              fontSize: "10px",
              fontWeight: 600,
              letterSpacing: "1px",
              color: "#fff",
            }}
          >
            Desde {cem.founded}
          </span>
        )}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between px-4 py-4 flex-shrink-0"
        style={{ borderTop: "1px solid #e8e8e8", background: "#fafafa" }}
      >
        <div className="flex flex-col gap-0.5">
          <p
            style={{
              fontFamily: featured ? "'Sorts Mill Goudy', serif" : "'Inter', sans-serif",
              fontSize: featured ? "18px" : "13px",
              fontWeight: featured ? 400 : 500,
              letterSpacing: featured ? "-0.3px" : "0px",
              lineHeight: 1.3,
              color: "#0a0a0a",
            }}
          >
            {cem.name}
          </p>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              color: "#6b6b6b",
            }}
          >
            {cem.area}
          </p>
        </div>
        <ArrowUpRight
          className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: GOLD }}
        />
      </div>
    </a>
  );
}

function ParallaxPhoto({ isMobile }: { isMobile: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <ScrollReveal delay={0.05}>
      <div
        ref={ref}
        className="mt-16"
        style={{
          width: "100%",
          height: isMobile ? "260px" : "440px",
          overflow: "hidden",
          position: "relative",
        }}
      >
        <motion.img
          src={lapaBg}
          alt="Cemitério da Lapa — Grupo Maya"
          style={{
            y,
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "116%",
            objectFit: "cover",
            objectPosition: "center",
            top: "-8%",
          }}
        />
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
      style={{ background: "#fff" }}
    >
      <div id="cemiterios" style={{ position: "relative", top: "-100px" }} />

      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* HEADER — padrão da memória: label esquerda, título + descrição direita */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 md:gap-[60px]">
            <p
              className="md:w-[220px] md:flex-shrink-0 md:pt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "#6b6b6b",
              }}
            >
              Por que o Grupo Maya
            </p>
            <div className="flex-1 flex flex-col gap-3">
              <h2
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: isMobile ? "34px" : "48px",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-1.5px",
                  color: "#0a0a0a",
                  maxWidth: "680px",
                }}
              >
                A maior administradora de cemitérios públicos da cidade<br />de São Paulo.
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#575757",
                  maxWidth: "520px",
                }}
              >
                Com 5 unidades, 41 hectares de área urbana e 25 anos de concessão assegurados, o Grupo Maya carrega a responsabilidade de atender as famílias paulistanas com a seriedade que essa missão exige.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* FOTO INSTITUCIONAL — parallax */}
        <ParallaxPhoto isMobile={isMobile} />

        {/* STATS — 4 números institucionais */}
        <ScrollReveal delay={0.1}>
          <div className="mt-16 pt-12" style={{ borderTop: "1px solid #e8e8e8" }}>
            <div className="grid grid-cols-2 md:grid-cols-4">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="py-6 md:py-0"
                  style={{
                    borderLeft: i > 0 ? "1px solid #e8e8e8" : undefined,
                    paddingLeft: i > 0 ? "32px" : undefined,
                    paddingRight: i < stats.length - 1 ? "32px" : undefined,
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#6B6B6B",
                      lineHeight: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    {s.label}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Lora', serif",
                      fontSize: isMobile ? "34px" : "48px",
                      fontWeight: 400,
                      letterSpacing: "-1px",
                      color: "#0a0a0a",
                      lineHeight: 1,
                    }}
                  >
                    {s.prefix}{s.value}
                    {s.unit && (
                      <span style={{ fontSize: isMobile ? "20px" : "28px", letterSpacing: 0 }}>
                        {s.unit}
                      </span>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CEMETERY SHOWCASE */}
        <div className="mt-16 pt-12" style={{ borderTop: "1px solid #e8e8e8" }}>
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "#6b6b6b",
                marginBottom: "20px",
              }}
            >
              Nossas 5 unidades em São Paulo
            </p>
          </ScrollReveal>

          {/* Campo Grande em destaque (maior, 145k m²) + 2×2 grid */}
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-3">
            <ScrollReveal
              className="lg:w-[42%] lg:flex-shrink-0 lg:self-stretch"
              direction="left"
            >
              <CemeteryCard cem={cemeteries[2]} featured />
            </ScrollReveal>

            <div className="flex-1 grid grid-cols-2 gap-3">
              {[cemeteries[0], cemeteries[1], cemeteries[3], cemeteries[4]].map((cem, i) => (
                <ScrollReveal key={cem.name} delay={0.08 + i * 0.06} className="h-full">
                  <CemeteryCard cem={cem} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
