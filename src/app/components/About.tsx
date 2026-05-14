import image_e4fde5664b55b0d3de11ca02db1110cf2f39225f from 'figma:asset/e4fde5664b55b0d3de11ca02db1110cf2f39225f.png'
import { useIsMobile } from "../hooks/useIsMobile";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: "5", label: "Cemitérios em\nSão Paulo" },
  { value: "11", label: "Agências\nfunerárias" },
  { value: "24h", label: "Atendimento\nininterrupto" },
  { value: "100+", label: "Anos\nde história" },
];

export function About() {
  const isMobile = useIsMobile();
  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[64px] items-center">
          {/* Image */}
          <ScrollReveal className="w-full lg:flex-1 min-w-0" direction="left">
            <div
              className="relative overflow-hidden w-full"
              style={{ aspectRatio: "620/660" }}
            >
              <img
                src={image_e4fde5664b55b0d3de11ca02db1110cf2f39225f}
                alt="Grupo Maya — Cemitério"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="w-full lg:flex-1 min-w-0">
            <ScrollReveal>
              <p
                className="text-[#0a0a0a] mb-4 text-[12px] md:text-[14px]"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 500,
                  letterSpacing: "2.4px",
                  textTransform: "uppercase",
                }}
              >SOBRE O GRUPO</p>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2
                className="text-[#0a0a0a] mb-6"
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: isMobile ? "34px" : "48px",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-1.5px",
                }}
              >
                O Grupo Maya nasceu
                <br />
                do cuidado
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p
                className="text-[#575757] mb-6"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                Maya significa mãe. Assim como uma mãe, nos dedicamos a acolher, confortar e oferecer apoio completo às famílias em momentos de dor e luto. Nascemos a partir do Cemitério Lajeado — inaugurado em 1904 na Zona Leste de São Paulo — e crescemos com o propósito de cuidar.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p
                className="text-[#575757] mb-10"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                }}
              >
                Com atendimento 24 horas, infraestrutura completa e equipe treinada para acolher com respeito e sensibilidade, o Grupo Maya une tradição centenária a uma gestão moderna, oferecendo toda a gama de serviços funerários e cemiteriais.
              </p>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p
                      className="text-[#C8963E]"
                      style={{
                        fontFamily: "'Plus Jakarta Sans', sans-serif",
                        fontSize: "28px",
                        fontWeight: 700,
                        letterSpacing: "-1px",
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      className="text-[#6B6B6B]"
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        whiteSpace: "pre-line",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}