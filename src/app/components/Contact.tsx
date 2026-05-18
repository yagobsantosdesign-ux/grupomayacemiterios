import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { ButtonFlip } from "./ui/ButtonFlip";

const contactItems = [
  { label: "E-mail", value: "contato@grupomaya.com.br", href: "mailto:contato@grupomaya.com.br" },
  { label: "Telefone", value: "0800 042 9020", href: "tel:08000429020" },
  { label: "Endereço", value: "Rua Fidencio Ramos, 195 – São Paulo, SP", href: "https://maps.google.com/?q=Rua+Fidencio+Ramos,+195,+São+Paulo,+SP" },
  { label: "Atendimento", value: "24 horas, todos os dias", href: undefined },
];

const inputStyle: React.CSSProperties = {
  background: "#fff",
  border: "1px solid rgba(0,0,0,0.15)",
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  color: "#111",
};

export function Contact() {
  const isMobile = useIsMobile();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const WEB3FORMS_ACCESS_KEY = "d95952aa-e0bb-4237-9982-5a2e02d0a77a";
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo contato pelo site – Grupo Maya | ${nome}`,
          from_name: "Site Grupo Maya",
          nome,
          telefone: telefone || "Não informado",
          mensagem,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setNome(""); setTelefone(""); setMensagem("");
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <section id="contato" style={{ background: "#ffffff" }}>

      <div style={{ height: "1px", background: "rgba(0,0,0,0.08)" }} />

      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] py-24 md:py-32">

        {/* ── Header ── */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] mb-16 md:mb-20">
            <p
              className="md:w-[220px] md:flex-shrink-0 md:pt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Contato
            </p>
            <div className="flex-1 flex flex-col gap-4">
              <h2
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: isMobile ? "36px" : "56px",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-1.5px",
                  color: "#111",
                  maxWidth: "620px",
                  textWrap: "balance",
                }}
              >
                Estamos aqui para ajudar.
              </h2>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 400,
                  lineHeight: "1.75",
                  color: "rgba(0,0,0,0.5)",
                  maxWidth: "480px",
                  textWrap: "pretty",
                }}
              >
                Entre em contato a qualquer momento. Nossa equipe está pronta para oferecer suporte com agilidade e acolhimento.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* ── Divider ── */}
        <div style={{ height: "1px", background: "rgba(0,0,0,0.08)", marginBottom: "64px" }} />

        {/* ── Two columns ── */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-[80px] items-stretch">

          {/* LEFT — contact info */}
          <ScrollReveal className="lg:w-[340px] flex-shrink-0" direction="left">
            <div className="flex flex-col gap-8">
              {contactItems.map((item) => (
                <div key={item.label} className="flex flex-col gap-1">
                  <p
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "1.8px",
                      textTransform: "uppercase",
                      color: "#C8963E",
                    }}
                  >
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.75)",
                        textDecoration: "none",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "16px",
                        fontWeight: 400,
                        color: "rgba(0,0,0,0.75)",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.value}
                    </p>
                  )}
                </div>
              ))}

              {/* WhatsApp CTA */}
              <div style={{ paddingTop: "8px" }}>
                <ButtonFlip
                  as="a"
                  href="https://wa.me/5511934223751"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-[8px]"
                  style={{
                    backgroundColor: "#C8963E",
                    color: "#fff",
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    fontSize: "14px",
                    padding: "13px 28px",
                    letterSpacing: "0.2px",
                    whiteSpace: "nowrap",
                  }}
                >
                  Falar pelo WhatsApp →
                </ButtonFlip>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — form */}
          <ScrollReveal className="flex-1 w-full min-w-0 flex flex-col" delay={0.12} direction="right">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full flex-1">

              <div className="flex flex-col md:flex-row gap-5">
                {/* Nome */}
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome completo"
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    className="w-full px-4 py-3.5 focus:outline-none transition-colors placeholder:text-[rgba(0,0,0,0.25)]"
                    style={{ ...inputStyle, borderRadius: "6px" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(200,150,62,0.7)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                  />
                </div>

                {/* Telefone */}
                <div className="flex flex-col gap-2 flex-1">
                  <label
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    placeholder="(11) 00000-0000"
                    value={telefone}
                    onChange={e => setTelefone(e.target.value)}
                    className="w-full px-4 py-3.5 focus:outline-none transition-colors placeholder:text-[rgba(0,0,0,0.25)]"
                    style={{ ...inputStyle, borderRadius: "6px" }}
                    onFocus={e => (e.currentTarget.style.borderColor = "rgba(200,150,62,0.7)")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                  />
                </div>
              </div>

              {/* Mensagem */}
              <div className="flex flex-col gap-2 flex-1">
                <label
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "rgba(0,0,0,0.4)" }}
                >
                  Mensagem
                </label>
                <textarea
                  placeholder="Como podemos ajudar?"
                  required
                  value={mensagem}
                  onChange={e => setMensagem(e.target.value)}
                  className="w-full px-4 py-3.5 focus:outline-none resize-none transition-colors placeholder:text-[rgba(0,0,0,0.25)] flex-1"
                  style={{ ...inputStyle, borderRadius: "6px", minHeight: "120px", height: "100%" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(200,150,62,0.7)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)")}
                />
              </div>

              {/* Submit */}
              <ButtonFlip
                as="button"
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full h-[52px] disabled:opacity-60 disabled:cursor-not-allowed rounded-[6px]"
                style={{
                  backgroundColor: "#111",
                  color: "#fff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 600,
                  letterSpacing: "0.2px",
                }}
              >
                {status === "loading" && "Enviando…"}
                {status === "success" && "✓ Mensagem enviada!"}
                {status === "error" && "Erro ao enviar. Tente novamente."}
                {status === "idle" && "Enviar mensagem"}
              </ButtonFlip>

            </form>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
