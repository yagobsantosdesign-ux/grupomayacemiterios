import { ScrollReveal } from "./ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";


const GOLD = "#C8963E";
const GREEN = "#2B5E3A";

const agencies = [
  {
    name: "Agência Funerária Campo Grande",
    street: "Rua Antônio Furlan Júnior, 501",
    neighborhood: "Vila São Pedro",
    mapsUrl: "https://maps.google.com/?q=Rua+Antônio+Furlan+Júnior,+501,+Vila+São+Pedro,+São+Paulo,+SP",
  },
  {
    name: "Agência Funerária Lapa",
    street: "Rua Bergson, 347",
    neighborhood: "Vila Leopoldina",
    mapsUrl: "https://maps.google.com/?q=Rua+Bergson,+347,+Vila+Leopoldina,+São+Paulo,+SP",
  },
  {
    name: "Agência Funerária Lageado",
    street: "Estr. do Lageado Velho, 1490",
    neighborhood: "Guaianases",
    mapsUrl: "https://maps.google.com/?q=Estrada+do+Lageado+Velho,+1490,+Guaianases,+São+Paulo,+SP",
  },
  {
    name: "Agência Funerária Saudade",
    street: "Rua Samuel de Carvalho, 60",
    neighborhood: "Jardim São Sebastião",
    mapsUrl: "https://maps.google.com/?q=Rua+Samuel+de+Carvalho,+60,+Jardim+São+Sebastião,+São+Paulo,+SP",
  },
  {
    name: "Agência Funerária Clínicas",
    street: "Rua Teodoro Sampaio, 282 — Sala 5",
    neighborhood: "Pinheiros",
    mapsUrl: "https://maps.google.com/?q=Rua+Teodoro+Sampaio,+282,+Pinheiros,+São+Paulo,+SP",
  },
  {
    name: "Agência Funerária Ipiranga",
    street: "Rua Paulo Bregaro, 175",
    neighborhood: "Ipiranga",
    mapsUrl: "https://maps.google.com/?q=Rua+Paulo+Bregaro,+175,+Ipiranga,+São+Paulo,+SP",
  },
];

function AgencyCard({ agency, delay }: { agency: typeof agencies[0]; delay: number }) {
  return (
    <ScrollReveal delay={delay} className="h-full">
      <a
        href={agency.mapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col h-full"
        style={{
          border: "1px solid #e8e8e8",
          padding: "24px",
          textDecoration: "none",
          transition: "border-color 0.2s, background 0.2s",
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = GOLD;
          e.currentTarget.style.background = "#fafafa";
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = "#e8e8e8";
          e.currentTarget.style.background = "#fff";
        }}
      >
        {/* Nome */}
        <p
          style={{
            fontFamily: "'Sorts Mill Goudy', serif",
            fontSize: "18px",
            fontWeight: 400,
            letterSpacing: "-0.3px",
            lineHeight: 1.3,
            color: "#0a0a0a",
            flex: 1,
          }}
        >
          {agency.name}
        </p>

        {/* Divisor */}
        <div style={{ height: "1px", background: "#f0f0f0", margin: "16px 0" }} />

        {/* Endereço */}
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#6b6b6b", lineHeight: 1.6 }}>
          {agency.street}
        </p>
        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#aaa", lineHeight: 1.6, marginBottom: "14px" }}>
          {agency.neighborhood}
        </p>

        {/* 24h */}
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: GREEN,
          }}
        >
          24 horas
        </p>
      </a>
    </ScrollReveal>
  );
}

export function Agencies() {
  const isMobile = useIsMobile();

  return (
    <section
      id="agencias"
      className="py-24 md:py-32"
      style={{ background: "#fff" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* HEADER — padrão: label esquerda, título + descrição direita */}
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
              Nossas agências
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
                  maxWidth: "640px",
                }}
              >
                Acolhimento e agilidade<br />quando você mais precisa.
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  color: "#575757",
                  maxWidth: "520px",
                  textWrap: "pretty",
                }}
              >
                Estamos presentes nos momentos mais delicados, oferecendo acolhimento, respeito e agilidade. Nossas agências estão preparadas para atender você e sua família com cuidado, empatia e total dedicação em cada detalhe.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* GRID + MAPA */}
        <div
          className="mt-16 pt-12 flex flex-col lg:flex-row lg:items-stretch gap-3"
          style={{ borderTop: "1px solid #e8e8e8" }}
        >
          {/* Cards — 2×3 */}
          <div
            className="grid gap-3 lg:w-[55%] lg:flex-shrink-0"
            style={{ gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)" }}
          >
            {agencies.map((agency, i) => (
              <AgencyCard key={agency.name} agency={agency} delay={0.06 + i * 0.06} />
            ))}
          </div>

          {/* Mapa */}
          <ScrollReveal className="flex-1 lg:self-stretch" direction="right" delay={0.1}>
            <div
              className="overflow-hidden w-full h-full"
              style={{
                border: "1px solid #e8e8e8",
                minHeight: isMobile ? "320px" : "480px",
              }}
            >
              <iframe
                title="Agências Grupo Maya — São Paulo"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d117825.0!2d-46.7200!3d-23.5850!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sagencias+funerarias+grupo+maya+sao+paulo!5e0!3m2!1spt-BR!2sbr!4v1715800000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", minHeight: isMobile ? "320px" : "480px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
