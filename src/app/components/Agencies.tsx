import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { MapPin, Clock, ExternalLink } from "lucide-react";

const agencies = [
  {
    id: "lageado",
    name: "Agência Lajeado",
    address: "Estr. do Lajeado Velho, 1490 — Guaianases",
    phone: "(11) 3195-2733",
    hours: "24 horas",
    mapsUrl: "https://maps.google.com/?q=Estr.+do+Lajeado+Velho,+1490,+Guaianases,+São+Paulo,+SP",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8!2d-46.6985!3d-23.5490!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b3eb3e3a29f%3A0x6e5e45de2faa4a07!2sEstr.%20do%20Lajeado%20Velho%2C%201490%20-%20Guaianases%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711000000001!5m2!1spt-BR!2sbr",
  },
  {
    id: "lapa",
    name: "Agência Lapa",
    address: "R. Bergson, 347 — Vila Leopoldina",
    phone: "(11) 3641-1200",
    hours: "24 horas",
    mapsUrl: "https://maps.google.com/?q=R.+Bergson,+347,+Vila+Leopoldina,+São+Paulo,+SP",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.2!2d-46.7510!3d-23.5270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef84ef2a53c15%3A0x1234567890abcdef!2sR.%20Bergson%2C%20347%20-%20Vila%20Leopoldina%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711000000002!5m2!1spt-BR!2sbr",
  },
  {
    id: "campo-grande",
    name: "Agência Campo Grande",
    address: "Av. Nossa Senhora do Sabará, 1371 — Campo Grande",
    phone: "(11) 5687-1400",
    hours: "24 horas",
    mapsUrl: "https://maps.google.com/?q=Av.+Nossa+Senhora+do+Sabará,+1371,+Campo+Grande,+São+Paulo,+SP",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.5!2d-46.6980!3d-23.6620!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce4471e9c9e9e9%3A0xabcdef1234567890!2sAv.%20Nossa%20Senhora%20do%20Sabar%C3%A1%2C%201371%20-%20Campo%20Grande%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711000000003!5m2!1spt-BR!2sbr",
  },
  {
    id: "saudade",
    name: "Agência Saudade",
    address: "R. Samuel de Carvalho, 60 — Jd. São Sebastião",
    phone: "(11) 2941-5700",
    hours: "24 horas",
    mapsUrl: "https://maps.google.com/?q=Rua+Samuel+de+Carvalho,+60,+Jardim+São+Sebastião,+São+Paulo,+SP",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1!2d-46.6760!3d-23.5980!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b1234567890%3A0xfedcba0987654321!2sR.%20Samuel%20de%20Carvalho%2C%2060%20-%20Jd.%20S%C3%A3o%20Sebasti%C3%A3o%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711000000004!5m2!1spt-BR!2sbr",
  },
  {
    id: "clinicas",
    name: "Agência Clínicas",
    address: "Av. Dr. Enéas de Carvalho Aguiar, 44 — Pinheiros",
    phone: "(11) 3082-4600",
    hours: "24 horas",
    mapsUrl: "https://maps.google.com/?q=Av.+Dr.+Enéas+de+Carvalho+Aguiar,+44,+Pinheiros,+São+Paulo,+SP",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.6!2d-46.6680!3d-23.5540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5794a42f8889%3A0x1a2b3c4d5e6f7a8b!2sAv.%20Dr.%20En%C3%A9as%20de%20Carvalho%20Aguiar%2C%2044%20-%20Pinheiros%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711000000005!5m2!1spt-BR!2sbr",
  },
  {
    id: "ipiranga",
    name: "Agência Ipiranga",
    address: "R. dos Patriotas, 80 — Ipiranga",
    phone: "(11) 2273-8800",
    hours: "24 horas",
    mapsUrl: "https://maps.google.com/?q=Rua+dos+Patriotas,+80,+Ipiranga,+São+Paulo,+SP",
    embedSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.8!2d-46.6050!3d-23.5880!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b9876543210%3A0xaabbccddeeff0011!2sR.%20dos%20Patriotas%2C%2080%20-%20Ipiranga%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1711000000006!5m2!1spt-BR!2sbr",
  },
];

export function Agencies() {
  const [selectedId, setSelectedId] = useState(agencies[0].id);
  const selected = agencies.find((a) => a.id === selectedId)!;

  return (
    <section
      id="agencias"
      className="py-24 md:py-32 bg-white"
      style={{ borderTop: "1px solid rgba(229,229,229,0.6)" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-14 max-w-[560px]">
          <ScrollReveal>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#C8963E",
              }}
            >
              AGÊNCIAS FUNERÁRIAS
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <h2
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "clamp(30px, 3.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-1.2px",
                color: "#0a0a0a",
              }}
            >
              Presença local em momentos que importam
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.14}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.7",
                color: "#575757",
              }}
            >
              6 agências em São Paulo com atendimento 24 horas para estar perto de você quando mais precisar.
            </p>
          </ScrollReveal>
        </div>

        {/* Layout: list + map */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">

          {/* Agency list */}
          <div className="w-full lg:w-[400px] lg:shrink-0 flex flex-col gap-2">
            {agencies.map((agency, i) => {
              const isActive = agency.id === selectedId;
              return (
                <ScrollReveal key={agency.id} delay={0.06 + i * 0.05}>
                  <button
                    onClick={() => setSelectedId(agency.id)}
                    className="w-full text-left flex flex-col gap-2 p-5 border transition-all duration-200"
                    style={{
                      background: isActive ? "#fbfbf9" : "#ffffff",
                      borderColor: isActive ? "#C8963E" : "#e0e0dc",
                      borderLeftWidth: isActive ? "3px" : "1px",
                      boxShadow: isActive ? "0 2px 12px rgba(200,150,62,0.10)" : "none",
                      cursor: "pointer",
                    }}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <p
                        style={{
                          fontFamily: "'Sorts Mill Goudy', serif",
                          fontSize: "17px",
                          fontWeight: 400,
                          letterSpacing: "-0.3px",
                          lineHeight: "1.3",
                          color: isActive ? "#0a0a0a" : "#2d2d2d",
                        }}
                      >
                        {agency.name}
                      </p>
                      <span
                        className="flex-shrink-0 flex items-center gap-1 px-2 py-0.5 rounded-[4px]"
                        style={{
                          background: isActive ? "rgba(43,94,58,0.10)" : "rgba(43,94,58,0.06)",
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "1px",
                          textTransform: "uppercase",
                          color: "#2B5E3A",
                        }}
                      >
                        <Clock size={10} strokeWidth={2} />
                        {agency.hours}
                      </span>
                    </div>
                    <div className="flex items-start gap-2">
                      <MapPin
                        size={13}
                        strokeWidth={1.8}
                        className="flex-shrink-0 mt-0.5"
                        style={{ color: isActive ? "#C8963E" : "#aaa" }}
                      />
                      <p
                        style={{
                          fontFamily: "'Inter', sans-serif",
                          fontSize: "13px",
                          fontWeight: 400,
                          lineHeight: "1.5",
                          color: "#6b6b6b",
                        }}
                      >
                        {agency.address} · São Paulo – SP
                      </p>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Map */}
          <ScrollReveal className="flex-1 min-w-0" delay={0.12} direction="right">
            <div
              className="w-full h-full flex flex-col overflow-hidden border border-[#e0e0dc]"
              style={{ minHeight: "480px" }}
            >
              {/* Map toolbar */}
              <div
                className="flex items-center justify-between px-4 py-3 shrink-0"
                style={{
                  background: "#fbfbf9",
                  borderBottom: "1px solid #e0e0dc",
                }}
              >
                <div className="flex items-center gap-2">
                  <MapPin size={14} strokeWidth={2} style={{ color: "#C8963E" }} />
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "#0a0a0a",
                    }}
                  >
                    {selected.name}
                  </p>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      color: "#888",
                    }}
                  >
                    — {selected.address}
                  </span>
                </div>
                <a
                  href={selected.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-[4px] transition-colors duration-150"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    color: "#2B5E3A",
                    background: "rgba(43,94,58,0.08)",
                    textDecoration: "none",
                  }}
                >
                  <ExternalLink size={11} strokeWidth={2} />
                  Abrir no Maps
                </a>
              </div>

              {/* iframe */}
              <iframe
                key={selected.embedSrc}
                title={`Mapa — ${selected.name}`}
                src={selected.embedSrc}
                width="100%"
                height="100%"
                style={{ border: 0, display: "block", flex: 1, minHeight: "420px" }}
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
