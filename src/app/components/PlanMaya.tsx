import { ScrollReveal } from "./ScrollReveal";
import { trackWhatsAppConversion } from "./GoogleAnalytics";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const PLAN_IMAGE = "https://images.unsplash.com/photo-1683793485856-ddf257970d8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBmdW5lcmFsJTIwcGxhbm5pbmclMjBjb25zdWx0YXRpb258ZW58MXx8fHwxNzc0NDU1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const checkItems = [
  "Sepultamento ou cremação",
  "Salas de velório climatizadas",
  "Ornamentação e coroa de flores",
  "Translado funerário",
  "Toda a documentação",
  "Atendimento 24 horas",
];

function GoldCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="9" fill="rgba(200,150,62,0.15)" />
      <path d="M5 9.5l2.5 2.5 5.5-5.5" stroke="#C8963E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="flex-shrink-0">
      <path d="M19.05 4.91C18.1331 3.98411 17.041 3.24997 15.8375 2.75036C14.634 2.25076 13.3431 1.99568 12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.22755 14.9771 3.79092 13.4593 3.79 11.91C3.79 7.37 7.49 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6176 6.85386 19.2259 7.76254 19.6396 8.76333C20.0533 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
    </svg>
  );
}

export function PlanMaya() {
  return (
    <section
      id="plano-maya"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#2B5E3A" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* LEFT — Content */}
          <div className="w-full lg:flex-1 min-w-0 flex flex-col gap-8">
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
                PLANO FUNERÁRIO
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <h2
                className="text-white"
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: "clamp(30px, 3.5vw, 48px)",
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: "-1.2px",
                }}
              >
                O plano funerário mais completo de São Paulo
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.14}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "1.75",
                  color: "rgba(255,255,255,0.7)",
                  maxWidth: "480px",
                }}
              >
                O Plano Maya garante que sua família tenha suporte completo no momento mais difícil, sem se preocupar com burocracia ou custos inesperados.
              </p>
            </ScrollReveal>

            {/* Checklist */}
            <ScrollReveal delay={0.2}>
              <ul className="flex flex-col gap-3.5">
                {checkItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <GoldCheck />
                    <span
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: "1.6",
                        color: "rgba(255,255,255,0.88)",
                      }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* CTA */}
            <ScrollReveal delay={0.28}>
              <a
                href="https://wa.me/5511934223751"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5 hover:shadow-lg"
                style={{
                  background: "#C8963E",
                  textDecoration: "none",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#ffffff",
                  width: "fit-content",
                }}
              >
                <WhatsAppIcon />
                Falar com um consultor
              </a>
            </ScrollReveal>
          </div>

          {/* RIGHT — Image */}
          <ScrollReveal className="w-full lg:w-[480px] lg:shrink-0" direction="right" delay={0.1}>
            <div
              className="relative overflow-hidden w-full"
              style={{ aspectRatio: "4/3" }}
            >
              <ImageWithFallback
                src={PLAN_IMAGE}
                alt="Plano Maya — Assistência funerária completa"
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0" style={{ background: "rgba(43,94,58,0.15)" }} />
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}