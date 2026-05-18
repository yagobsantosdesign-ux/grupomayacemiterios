import { ScrollReveal } from "./ScrollReveal";
import { trackWhatsAppConversion } from "./GoogleAnalytics";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="flex-shrink-0">
      <path d="M19.05 4.91C18.1331 3.98411 17.041 3.24997 15.8375 2.75036C14.634 2.25076 13.3431 1.99568 12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.22755 14.9771 3.79092 13.4593 3.79 11.91C3.79 7.37 7.49 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6176 6.85386 19.2259 7.76254 19.6396 8.76333C20.0533 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
    </svg>
  );
}

const jazigos = [
  {
    id: "tradicional",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="15" rx="1" />
        <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="17" />
        <line x1="9.5" y1="14.5" x2="14.5" y2="14.5" />
      </svg>
    ),
    title: "Jazigo Tradicional",
    description:
      "Espaço horizontal em terra, com opções de gavetas sobrepostas. Ideal para famílias que buscam um local de sepultamento convencional com privacidade e monumentação personalizada.",
    features: ["Gavetas simples ou duplas", "Monumentação inclusa", "Perpétuo ou temporário", "Localização prioritária"],
  },
  {
    id: "vertical",
    icon: (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="6" y="2" width="12" height="20" rx="1" />
        <line x1="12" y1="7" x2="12" y2="12" />
        <line x1="9.5" y1="9.5" x2="14.5" y2="9.5" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="17.5" x2="15" y2="17.5" />
      </svg>
    ),
    title: "Jazigo Vertical",
    description:
      "Estrutura moderna em blocos verticais com nicho individual ou familiar. Ocupa menos espaço, mantém a dignidade e facilita visitas com acesso simplificado à localização.",
    features: ["Nicho individual ou familiar", "Estrutura moderna", "Acesso facilitado", "Pagamento parcelado"],
  },
];

export function Jazigos() {
  return (
    <section
      id="jazigos"
      className="py-24 md:py-32"
      style={{ background: "#F7F6F2" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-14 max-w-[600px]">
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
              JAZIGOS
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
              Garanta um lugar de lembranças em São Paulo
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
                textWrap: "pretty",
              }}
            >
              Jazigos verticais ou tradicionais com pagamento facilitado. Fale com um consultor e encontre a melhor opção para sua família.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {jazigos.map((jazigo, i) => (
            <ScrollReveal key={jazigo.id} delay={0.08 + i * 0.1}>
              <div
                className="flex flex-col gap-6 bg-white border border-[#e0e0dc] hover:border-[#C8963E] hover:shadow-lg hover:shadow-[#C8963E]/5 transition-all duration-300"
              >
                {/* Imagem placeholder */}
                <div 
                  className="w-full h-[280px] bg-black flex items-center justify-center"
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "#666666",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {/* Placeholder para imagem */}
                  </span>
                </div>

                <div className="px-8 pb-8 md:px-10 md:pb-10 flex flex-col gap-6">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-14 h-14 rounded-[8px] text-[#C8963E]"
                    style={{ background: "rgba(200,150,62,0.08)", border: "1px solid rgba(200,150,62,0.15)" }}
                  >
                    {jazigo.icon}
                  </div>

                  {/* Title + Description */}
                  <div className="flex flex-col gap-3">
                    <h3
                      style={{
                        fontFamily: "'Sorts Mill Goudy', serif",
                        fontSize: "24px",
                        fontWeight: 400,
                        letterSpacing: "-0.5px",
                        lineHeight: "1.3",
                        color: "#0a0a0a",
                      }}
                    >
                      {jazigo.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                        fontWeight: 400,
                        lineHeight: "1.7",
                        color: "#575757",
                      }}
                    >
                      {jazigo.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="flex flex-col gap-2">
                    {jazigo.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2.5">
                        <span
                          className="w-1.5 h-1.5 flex-shrink-0"
                          style={{ background: "#C8963E" }}
                        />
                        <span
                          style={{
                            fontFamily: "'Inter', sans-serif",
                            fontSize: "13.5px",
                            fontWeight: 400,
                            color: "#6b6b6b",
                            lineHeight: "1.5",
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.24}>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="https://wa.me/5511934223751"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-[4px] transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
              style={{
                background: "#C8963E",
                textDecoration: "none",
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#ffffff",
              }}
            >
              <WhatsAppIcon />
              Falar com consultor
            </a>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                fontWeight: 400,
                color: "#9b9b96",
                lineHeight: "1.5",
              }}
            >
              Atendimento 24h · Sem compromisso
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}