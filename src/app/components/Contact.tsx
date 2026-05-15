import { useIsMobile } from "../hooks/useIsMobile";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import svgPaths from "../../imports/svg-tv36bl0w1v";
import { ButtonFlip } from "./ui/ButtonFlip";

// ── SVG Icons ──────────────────────────────────────────────────────────────

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip-phone)">
        <path d={svgPaths.p1a7ce800} stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip-phone"><rect width="20" height="20" fill="white" /></clipPath>
      </defs>
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.pd919a80} stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p189c1170} stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d={svgPaths.p26ddc800} stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      <path d={svgPaths.p35ba4680} stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <g clipPath="url(#clip-clock)">
        <path d={svgPaths.p14d24500} stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        <path d="M10 5V10L13.3333 11.6667" stroke="#0a0a0a" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
      </g>
      <defs>
        <clipPath id="clip-clock"><rect width="20" height="20" fill="white" /></clipPath>
      </defs>
    </svg>
  );
}

// ── Icon Box ───────────────────────────────────────────────────────────────

function IconBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex-shrink-0 w-[44px] h-[44px] rounded-[8px] bg-[#fbfbf9] flex items-center justify-center"
      style={{ border: "1px solid #e0e0dc" }}>
      {children}
    </div>
  );
}

// ── Contact Items ──────────────────────────────────────────────────────────

const contactItems = [
  {
    icon: <MailIcon />,
    label: "E-mail",
    value: "contato@grupomaya.com.br",
    href: "mailto:contato@grupomaya.com.br",
    twoLines: false,
  },
  {
    icon: <PhoneIcon />,
    label: "Contato",
    value: "0800 042 9020",
    href: "tel:08000429020",
    twoLines: false,
  },
  {
    icon: <MapIcon />,
    label: "Endereço",
    value: null,
    href: "https://maps.google.com/?q=Rua+Fidencio+Ramos,+195,+São+Paulo,+SP",
    twoLines: true,
  },
  {
    icon: <ClockIcon />,
    label: "Horário",
    value: "Atendimento 24 horas, todos os dias",
    href: undefined,
    twoLines: false,
  },
];

// ── Main Component ─────────────────────────────────────────────────────────

export function Contact() {
  const isMobile = useIsMobile();
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Acesse web3forms.com, insira contato@grupomaya.com.br e substitua a chave abaixo
    const WEB3FORMS_ACCESS_KEY = "d95952aa-e0bb-4237-9982-5a2e02d0a77a";

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Novo contato pelo site – Cemitério Lajeado | ${nome}`,
          from_name: "Site Cemitério Lajeado",
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
    <section id="contato" className="bg-white py-[80px] md:py-[128px]">
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="flex flex-col xl:flex-row gap-[56px] xl:gap-[80px] items-start xl:items-center w-full">

          {/* ── LEFT: Text + Contact list ── */}
          <div className="flex flex-col gap-[48px] xl:gap-[80px] items-start w-full xl:w-[520px] flex-shrink-0">

            {/* Headline */}
            <ScrollReveal>
              <div className="flex flex-col gap-[16px] items-start w-full">
                <p className="text-[12px] md:text-[14px]" style={{
                   fontFamily: "'Inter', sans-serif",
                   fontWeight: 500,
                   letterSpacing: "2.4px",
                   textTransform: "uppercase",
                   color: "#0a0a0a",
                   lineHeight: "21px",
                 }}>
                   CONTATO
                 </p>
                <p style={{
                   fontFamily: "'Sorts Mill Goudy', serif",
                   fontSize: isMobile ? "34px" : "48px",
                   fontWeight: 400,
                   letterSpacing: "-1.5px",
                   lineHeight: "1.2",
                   color: "#0a0a0a",
                 }}>
                   Estamos aqui para ajudar
                 </p>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "28px",
                  color: "#575757",
                }}>
                  Entre em contato conosco a qualquer momento. Nossa equipe está preparada para oferecer todo o suporte necessário com agilidade e acolhimento.
                </p>
              </div>
            </ScrollReveal>

            {/* Contact items */}
            <div className="flex flex-col gap-[24px] items-start w-full">
              {contactItems.map((item, i) => (
                <ScrollReveal key={item.label} delay={0.1 + i * 0.06}>
                  <div className="flex gap-[16px] items-center w-full">
                    <IconBox><span className="text-[#0a0a0a]">{item.icon}</span></IconBox>
                    <div className="flex flex-col gap-[2px] items-start">
                      <p style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "13px",
                        fontWeight: 400,
                        color: "#6b6b6b",
                        lineHeight: "1.6",
                      }}>
                        {item.label}
                      </p>
                      {item.twoLines ? (
                        item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer"
                            className="hover:text-[#C8963E] transition-colors"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#0a0a0a" }}>
                            Rua Fidencio Ramos, 195 – São Paulo - SP
                          </a>
                        ) : (
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#0a0a0a" }}>
                            Rua Fidencio Ramos, 195 – São Paulo - SP
                          </p>
                        )
                      ) : item.href ? (
                        <a href={item.href}
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="hover:text-[#C8963E] transition-colors"
                          style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#0a0a0a" }}>
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 500, color: "#0a0a0a" }}>
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* ── RIGHT: Form card ── */}
          <ScrollReveal className="w-full flex-1 min-w-0" delay={0.15} direction="right">
            <div className="relative bg-[#fbfbf9] w-full h-full"
              style={{ border: "1px solid #e0e0dc" }}>
              <div className="flex flex-col gap-[24px] items-start pt-[41px] px-[41px] pb-[41px]">

                {/* Heading */}
                <p style={{
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  fontSize: "20px",
                  fontWeight: 600,
                  letterSpacing: "-0.3px",
                  lineHeight: "26px",
                  color: "#0a0a0a",
                }}>
                  Envie uma mensagem
                </p>

                {/* Form */}
                <form onSubmit={handleSubmit} className="flex flex-col gap-[20px] items-start w-full">

                  {/* Nome */}
                  <div className="flex flex-col gap-[6px] items-start w-full">
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, color: "#575757", lineHeight: "21px" }}>
                      Nome
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome completo"
                      value={nome}
                      onChange={e => setNome(e.target.value)}
                      className="w-full bg-white px-[16px] py-[12px] focus:outline-none focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]"
                      style={{ border: "1px solid #e0e0dc", fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 400, color: "#0a0a0a" }}
                    />
                  </div>

                  {/* Telefone */}
                  <div className="flex flex-col gap-[6px] items-start w-full">
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, color: "#575757", lineHeight: "21px" }}>
                      Telefone
                    </label>
                    <input
                      type="tel"
                      placeholder="(11) 00000-0000"
                      value={telefone}
                      onChange={e => setTelefone(e.target.value)}
                      className="w-full bg-white px-[16px] py-[12px] focus:outline-none focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]"
                      style={{ border: "1px solid #e0e0dc", fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 400, color: "#0a0a0a" }}
                    />
                  </div>

                  {/* Mensagem */}
                  <div className="flex flex-col gap-[6px] items-start w-full">
                    <label style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 400, color: "#575757", lineHeight: "21px" }}>
                      Mensagem
                    </label>
                    <textarea
                      placeholder="Como podemos ajudar?"
                      rows={5}
                      required
                      value={mensagem}
                      onChange={e => setMensagem(e.target.value)}
                      className="w-full bg-white px-[16px] py-[12px] focus:outline-none focus:border-[#C8963E] transition-colors resize-none placeholder:text-[#b0b0a8]"
                      style={{ border: "1px solid #e0e0dc", fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 400, color: "#0a0a0a" }}
                    />
                  </div>

                  {/* Button */}
                  <ButtonFlip
                    as="button"
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="w-full h-[48px] bg-[#0a0a0a] hover:bg-[#1e1e1e] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 text-white rounded-[8px]"
                    style={{ fontFamily: "'Inter', sans-serif", fontSize: "16px", fontWeight: 500, lineHeight: "24px" }}
                  >
                    {status === "loading" && "Enviando…"}
                    {status === "success" && "✓ Mensagem enviada!"}
                    {status === "error" && "Erro ao enviar. Tente novamente."}
                    {status === "idle" && "Enviar mensagem"}
                  </ButtonFlip>

                </form>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}