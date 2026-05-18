import { ScrollReveal } from "./ScrollReveal";
import { ButtonFlip } from "./ui/ButtonFlip";
import mayaAtendimento from "../../assets/maya-atendimento.webp";
import mayaFoto from "../../assets/maya-foto.webp";
import mayaProtegeBg from "../../assets/maya-protege-bg.webp";
import { useIsMobile } from "../hooks/useIsMobile";

export function MayaProtege() {
  const isMobile = useIsMobile();

  return (
    <section
      className="py-24 md:py-32 relative overflow-hidden"
      style={{
        backgroundImage: `url(${mayaProtegeBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] relative z-10">

        {/* Top: label + heading + desc + CTA — centralizado */}
        <ScrollReveal>
          <div className="flex flex-col items-center text-center gap-5 mb-14">
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
              PLANO FUNERÁRIO
            </p>
            <h2
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: isMobile ? "34px" : "52px",
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: "-1.5px",
                color: "#ffffff",
                maxWidth: "640px",
                textWrap: "balance",
              }}
            >
              Proteja sua família hoje,<br />com o Maya Protege.
            </h2>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                fontWeight: 400,
                lineHeight: "1.75",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "500px",
                textWrap: "pretty",
              }}
            >
              Um plano funerário completo, com cobertura para toda a família, assistência 24h e condições facilitadas. Garanta tranquilidade sem burocracia quando a família mais precisar.
            </p>
            <ButtonFlip
              as="a"
              href="https://mayaprotege.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[8px] flex-shrink-0"
              style={{
                backgroundColor: "#C8963E",
                color: "#fff",
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                padding: "14px 32px",
                letterSpacing: "0.2px",
                whiteSpace: "nowrap",
              }}
            >
              Conheça o Maya Protege →
            </ButtonFlip>
          </div>
        </ScrollReveal>

        {/* Bottom: two images — iguais, centralizados */}
        <div className="flex flex-col md:flex-row gap-3 relative z-10">
          {/* Left image — branded overlay */}
          <ScrollReveal className="md:w-1/2" direction="left">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "8px",
                height: isMobile ? "260px" : "420px",
              }}
            >
              <img
                src={mayaAtendimento}
                alt="Atendimento humanizado — Maya Protege"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </ScrollReveal>

          {/* Right image */}
          <ScrollReveal className="md:w-1/2" direction="right">
            <div
              className="relative overflow-hidden"
              style={{
                borderRadius: "8px",
                height: isMobile ? "260px" : "420px",
              }}
            >
              <img
                src={mayaFoto}
                alt="Grupo Maya"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}
