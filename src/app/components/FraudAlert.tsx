import { ScrollReveal } from "./ScrollReveal";

export function FraudAlert() {
  return (
    <section className="relative overflow-hidden bg-[#111111] py-16 md:py-20">
      {/* Geometric decorations */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-[340px] hidden lg:block">
        {/* Diamond 1 — large */}
        <svg
          className="absolute right-[-40px] top-[50%] translate-y-[-55%]"
          width="220"
          height="220"
          viewBox="0 0 220 220"
          fill="none"
        >
          <rect
            x="8"
            y="8"
            width="204"
            height="204"
            rx="32"
            transform="rotate(45 110 110)"
            stroke="#C8963E"
            strokeWidth="2"
            fill="none"
          />
        </svg>
        {/* Diamond 2 — small, offset */}
        <svg
          className="absolute right-[80px] top-[50%] translate-y-[-30%]"
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
        >
          <rect
            x="5"
            y="5"
            width="110"
            height="110"
            rx="18"
            transform="rotate(45 60 60)"
            stroke="#C8963E"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* ── LEFT: Alert copy ── */}
          <div className="w-full lg:flex-1 min-w-0">
            <ScrollReveal direction="left">
              <p
                className="text-[#C8963E] mb-4"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: "12px",
                  letterSpacing: "2.4px",
                  textTransform: "uppercase",
                }}
              >
                Alerta de Golpe!
              </p>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <h2
                className="text-white mb-6"
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: "clamp(32px, 5vw, 52px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-1px",
                }}
              >
                <span style={{ display: "block" }}>Cuidado com</span>
                <span style={{ display: "block", color: "#C8963E" }}>golpistas</span>
                <span style={{ display: "block" }}>agindo em</span>
                <span style={{ display: "block" }}>nosso nome!</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.2}>
              <p
                className="text-white/80"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "26px",
                  maxWidth: "420px",
                }}
              >
                Terceiros estão se passando pelo Grupo Maya para{" "}
                <strong className="text-white font-semibold">
                  cobrar valores indevidos de famílias.
                </strong>
              </p>
            </ScrollReveal>
          </div>

          {/* ── RIGHT: Info card ── */}
          <ScrollReveal className="w-full lg:flex-1 min-w-0" delay={0.15}>
            <div
              className="bg-[#1a1a1a] p-6 md:p-8"
              style={{ border: "1px solid rgba(200,150,62,0.3)" }}
            >
              {/* Card headline */}
              <p
                className="text-white mb-5"
                style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: 700,
                  lineHeight: "28px",
                }}
              >
                <span className="text-[#C8963E]">Não realize</span> pagamentos
                <br />
                sem confirmar.
              </p>

              {/* Beneficiário */}
              <div className="mb-4 pb-4" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <p
                  className="text-white/50 mb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "1.6px",
                    textTransform: "uppercase",
                  }}
                >
                  Beneficiário:
                </p>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    lineHeight: "20px",
                  }}
                >
                  CEMITÉRIOS E CREMATÓRIOS SÃO PAULO SPE S.A.
                </p>
              </div>

              {/* CNPJ */}
              <div className="mb-5 pb-5" style={{ borderBottom: "1px solid rgba(255,255,255,0.12)" }}>
                <p
                  className="text-white/50 mb-1"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "1.6px",
                    textTransform: "uppercase",
                  }}
                >
                  CNPJ:
                </p>
                <p
                  className="text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                  }}
                >
                  48.222.338/0001‑14 &nbsp;•&nbsp; Banco Santander
                </p>
              </div>

              {/* Bullet list */}
              <ul className="flex flex-col gap-3">
                {[
                  {
                    highlight: "Não realizamos",
                    rest: " cobranças por telefone.",
                  },
                  {
                    highlight: "Não oferecemos",
                    rest: " descontos para antecipação de boleto por ligação.",
                  },
                  {
                    highlight: "Serviços de gratuidade",
                    rest: " não possuem taxas adicionais.",
                  },
                  {
                    highlight: "Recebeu ligação suspeita?",
                    rest: " Não pague. Denuncie.",
                  },
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      lineHeight: "20px",
                    }}
                  >
                    <span
                      className="mt-[3px] shrink-0 w-[6px] h-[6px] rounded-full bg-[#C8963E]"
                    />
                    <span className="text-white/80">
                      <span className="text-[#C8963E] font-semibold">
                        {item.highlight}
                      </span>
                      {item.rest}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}