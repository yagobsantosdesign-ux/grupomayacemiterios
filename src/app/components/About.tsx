import image_e4fde5664b55b0d3de11ca02db1110cf2f39225f from 'figma:asset/e4fde5664b55b0d3de11ca02db1110cf2f39225f.png'
import { useIsMobile } from "../hooks/useIsMobile";
import { ScrollReveal } from "./ScrollReveal";
import { ButtonFlip } from "./ui/ButtonFlip";

const stats = [
  { value: "120", suffix: "+", label: "Anos de história" },
  { value: "24", suffix: "h", label: "Atendimento ininterrupto" },
];

/* Leaf / sprout icon — decorative SVG similar to the reference */
function LeafIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18 4C18 4 6 10 6 20C6 26.627 11.373 32 18 32C18 32 18 20 30 14C24 14 18 4 18 4Z" fill="white" fillOpacity="0.35"/>
      <path d="M18 32V18" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function About() {
  const isMobile = useIsMobile();

  return (
    <section
      id="sobre"
      className="bg-white relative overflow-hidden"
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* ── Two-column hero ── */}
        <div className="flex flex-col lg:flex-row gap-0 lg:gap-[60px] items-stretch pt-24 md:pt-32 pb-16 md:pb-24">

          {/* LEFT — label + heading + stats */}
          <ScrollReveal
            className="w-full lg:w-[62%] flex flex-col justify-between gap-10 lg:gap-0"
            direction="left"
          >
            {/* Top: label + heading + CTA */}
            <div>
              {/* "O que fazemos" label */}
              <div className="flex items-center gap-2 mb-6">
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    letterSpacing: "2.4px",
                    textTransform: "uppercase",
                    fontSize: "12px",
                    color: "#0a0a0a",
                  }}
                >
                  O que fazemos
                </p>
              </div>

              {/* Heading */}
              <h2
                className="mb-5"
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: isMobile ? "34px" : "48px",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-1.5px",
                  color: "#0a0a0a",
                }}
              >
                Dedicados a oferecer cuidado, conforto e dignidade.
              </h2>

              {/* CTA Button */}
              <ButtonFlip
                as="a"
                href="#sobre"
                className="rounded-[8px]"
                style={{
                  backgroundColor: "#0a0a0a",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "14px 28px",
                  letterSpacing: "0.3px",
                }}
              >
                Sobre o Grupo
              </ButtonFlip>
            </div>

            {/* Bottom: stats */}
            <div className="flex gap-12">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#6B6B6B",
                      lineHeight: "18px",
                      marginBottom: "8px",
                    }}
                  >
                    {stat.label}
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
                    {stat.value}
                    <span style={{ fontSize: isMobile ? "20px" : "28px", letterSpacing: 0 }}>
                      {stat.suffix}
                    </span>
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          {/* RIGHT — photo + info card */}
          <ScrollReveal
            className="w-full lg:w-[38%] flex flex-col"
            direction="right"
          >
            {/* Photo */}
            <div
              className="relative overflow-hidden w-full flex-1"
              style={{ minHeight: isMobile ? "240px" : "340px" }}
            >
              <img
                src={image_e4fde5664b55b0d3de11ca02db1110cf2f39225f}
                alt="Grupo Maya — Cemitério"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>

            {/* Card */}
            <div
              style={{
                backgroundColor: "#2B5E3A",
                padding: isMobile ? "28px 24px" : "36px 40px",
              }}
            >
              <div className="mb-4">
                <LeafIcon />
              </div>

              <p
                className="mb-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "26px",
                  color: "#fff",
                }}
              >
                O Grupo Maya nasceu com a missão de acolher famílias em momentos de dor, oferecendo serviços funerários e cemiteriais com respeito, tradição e cuidado humano.
              </p>

              <a
                href="#sobre"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "#fff",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                Saiba mais →
              </a>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
