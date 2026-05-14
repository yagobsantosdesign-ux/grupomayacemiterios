import { ScrollReveal } from "./ScrollReveal";
import { Download, Phone, FileText } from "lucide-react";

export function PriceTable() {
  return (
    <section
      id="tabela-de-precos"
      className="py-20 md:py-24 bg-white"
      style={{ borderTop: "1px solid rgba(229,229,229,0.6)" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text + buttons */}
          <div className="flex flex-col gap-6">
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
                TABELA DE PREÇOS
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.08}>
              <h2
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: "30px",
                  fontWeight: 400,
                  lineHeight: "36px",
                  letterSpacing: "-0.5px",
                  color: "#0a0a0a",
                }}
              >
                Transparência em todos os nossos serviços
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.14}>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  color: "#575757",
                }}
              >
                As tarifas seguem a política estabelecida pela Prefeitura de São Paulo. Todos os serviços são regulamentados e fiscalizados pelo poder público municipal.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="/tabela-de-precos.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[4px] border-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
                  style={{
                    borderColor: "#C8963E",
                    background: "transparent",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#C8963E",
                  }}
                >
                  <Download size={16} strokeWidth={2} />
                  Download da Tabela (PDF)
                </a>
                <a
                  href="tel:08000429020"
                  className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-[4px] transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90"
                  style={{
                    background: "#2B5E3A",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 600,
                    color: "#ffffff",
                  }}
                >
                  <Phone size={16} strokeWidth={2} />
                  0800 042 9020
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right — image placeholder */}
          <ScrollReveal delay={0.12} direction="right">
            <div
              className="relative w-full overflow-hidden"
              style={{
                background: "#0a0a0a",
                aspectRatio: "4 / 3",
              }}
            >
              {/* Subtle table grid lines suggestion */}
              <div className="absolute inset-0 flex flex-col" style={{ opacity: 0.08 }}>
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-b border-white last:border-b-0"
                  />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-row" style={{ opacity: 0.08 }}>
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 border-r border-white last:border-r-0"
                  />
                ))}
              </div>

              {/* Center label */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
                <div
                  className="flex items-center justify-center w-14 h-14 rounded-[8px]"
                  style={{ background: "rgba(200,150,62,0.15)", border: "1px solid rgba(200,150,62,0.3)" }}
                >
                  <FileText size={26} strokeWidth={1.4} color="#C8963E" />
                </div>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.35)",
                  }}
                >
                  Imagem da tabela
                </p>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
