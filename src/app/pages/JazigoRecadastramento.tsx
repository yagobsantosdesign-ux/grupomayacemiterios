import { useState } from "react";
import { MapPin, ChevronDown, Check, AlertCircle, ArrowUpRight } from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { ButtonFlip } from "../components/ui/ButtonFlip";
import { trackWhatsAppConversion } from "../components/GoogleAnalytics";
import { useIsMobile } from "../hooks/useIsMobile";
import { PageHeroBanner } from "../components/PageHeroBanner";

import imgHero from "../../assets/recadastramento.webp";
import imgLageado from "../../assets/cem-lageado.webp";
import imgLapa from "../../assets/cem-lapa.webp";
import imgParelheiros from "../../assets/cem-parelheiros.webp";
import imgSaudade from "../../assets/cem-saudade.webp";
import imgCampoGrande from "../../assets/cem-campo-grande.webp";

// ── Data ──────────────────────────────────────────────────────────────────────

const cemeteries = [
  {
    name: "Cemitério Campo Grande",
    address: "Av. Nossa Senhora do Sabará, nº 1371",
    neighborhood: "Campo Grande",
    cep: "CEP: 04685-003",
    mapsUrl: "https://maps.google.com/?q=Av.+Nossa+Senhora+do+Sabará,+1371,+Campo+Grande,+São+Paulo",
    siteUrl: "https://cemiteriocampogrande.com",
  },
  {
    name: "Cemitério Lajeado",
    address: "Estrada do Lajeado Velho, nº 1490",
    neighborhood: "Vila Independente",
    cep: "CEP: 08451-000",
    mapsUrl: "https://maps.google.com/?q=Estrada+do+Lajeado+Velho,+1490,+Vila+Independente,+São+Paulo",
    siteUrl: "https://cemiteriolajeado.com.br",
  },
  {
    name: "Cemitério da Lapa",
    address: "R. Bergson, 347",
    neighborhood: "Vila Leopoldina",
    cep: "CEP: 05301-060",
    mapsUrl: "https://maps.google.com/?q=R.+Bergson,+347,+Vila+Leopoldina,+São+Paulo",
    siteUrl: "https://cemiteriolapa.com",
  },
  {
    name: "Cemitério Parelheiros",
    address: "Rua Amaro de Pontes, nº 237",
    neighborhood: "Parelheiros",
    cep: "CEP: 04890-360",
    mapsUrl: "https://maps.google.com/?q=Rua+Amaro+de+Pontes,+237,+Parelheiros,+São+Paulo",
    siteUrl: "https://cemiterioparelheiros.com.br",
  },
  {
    name: "Cemitério da Saudade",
    address: "Rua Samuel de Carvalho, nº 60",
    neighborhood: "J. São Sebastião",
    cep: "CEP: 08041-030",
    mapsUrl: "https://maps.google.com/?q=Rua+Samuel+de+Carvalho,+60,+Jardim+São+Sebastião,+São+Paulo",
    siteUrl: "https://cemiteriosaudade.com.br",
  },
];

const faqs = [
  {
    question: "Por que é importante realizar o recadastramento de jazigos?",
    answer:
      "Para garantir que todas as informações estejam corretas e evitar problemas futuros relacionados à propriedade ou manutenção do local.",
  },
  {
    question: "Como funciona o processo de recadastramento?",
    answer:
      "Nossa equipe realiza uma análise completa dos documentos, seguida da atualização dos registros e da verificação final para assegurar que tudo esteja em conformidade.",
  },
  {
    question: "Qual é o prazo recomendado para realizar o recadastramento?",
    answer:
      "Recomenda-se realizar o recadastramento periodicamente, conforme orientações legais ou sempre que houver mudanças nas informações do titular.",
  },
  {
    question: "Quem deve realizar o recadastramento?",
    answer:
      "O recadastramento deve ser realizado pelo titular do jazigo ou um representante legal, com todos os documentos necessários em mãos.",
  },
  {
    question: "Quais são as consequências de não realizar o recadastramento?",
    answer:
      "A falta de recadastramento pode resultar em complicações legais, como a perda de uso e direitos sobre o jazigo, além de dificuldades na localização de registros em situações emergenciais.",
  },
];

const FIELD_STYLE: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "15px",
  fontWeight: 400,
  color: "#0a0a0a",
};

const LABEL_STYLE: React.CSSProperties = {
  fontFamily: "'Inter', sans-serif",
  fontSize: "14px",
  fontWeight: 400,
  color: "#575757",
  lineHeight: "21px",
};

// ── Sub-components ────────────────────────────────────────────────────────────

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      style={{ borderTopWidth: "1px", borderTopStyle: "solid", borderTopColor: "#e8e8e4" }}
      className="py-0"
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span
          style={{
            fontFamily: "'Sorts Mill Goudy', serif",
            fontSize: "20px",
            fontWeight: 400,
            color: "#0a0a0a",
            lineHeight: "1.35",
            letterSpacing: "-0.3px",
          }}
        >
          {question}
        </span>
        <ChevronDown
          className="flex-shrink-0 text-[#C8963E] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          size={20}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p
          className="pb-5"
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            lineHeight: "27px",
            color: "#575757",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

function CemeteryCard({ name, address, neighborhood, cep, mapsUrl }: (typeof cemeteries)[0]) {
  return (
    <a
      href={mapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-3 p-6 bg-white rounded-[4px] border border-[#e0e0dc] hover:border-[#C8963E] hover:shadow-lg hover:shadow-[#C8963E]/5 hover:-translate-y-0.5 transition-all duration-300"
      style={{ textDecoration: "none" }}
    >
      <div className="flex items-start justify-between gap-2">
        <div
          className="w-9 h-9 rounded-[6px] bg-[#2B5E3A] flex items-center justify-center flex-shrink-0"
        >
          <MapPin size={16} color="#ffffff" />
        </div>
        <span
          className="text-[#C8963E] opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 500, letterSpacing: "1.5px", textTransform: "uppercase", paddingTop: "10px" }}
        >
          Ver no mapa ↗
        </span>
      </div>
      <div className="flex flex-col gap-1 mt-1">
        <p
          style={{
            fontFamily: "'Sorts Mill Goudy', serif",
            fontSize: "20px",
            fontWeight: 400,
            color: "#0a0a0a",
            lineHeight: "1.3",
            letterSpacing: "-0.3px",
          }}
        >
          {name}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "14px",
            color: "#575757",
            lineHeight: "22px",
          }}
        >
          {address}
          <br />
          {neighborhood}
        </p>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "12px",
            color: "#aaaaaa",
            letterSpacing: "0.5px",
          }}
        >
          {cep}
        </p>
      </div>
    </a>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────

export default function JazigoRecadastramento() {
  const isMobile = useIsMobile();

  // Form state — Dados do Requerente
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [telefone, setTelefone] = useState("");
  const [cep, setCep] = useState("");
  const [endereco, setEndereco] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  // Dados da Sepultura
  const [nomeSubconcessionario, setNomeSubconcessionario] = useState("");
  const [cemiterio, setCemiterio] = useState("");
  const [numSepultura, setNumSepultura] = useState("");
  const [numQuadra, setNumQuadra] = useState("");
  const [tipoSepultura, setTipoSepultura] = useState("");
  const [arquivo, setArquivo] = useState<File | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error" | "fileError">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!arquivo) {
      setStatus("fileError");
      return;
    }

    setStatus("loading");

    const WEB3FORMS_ACCESS_KEY = "d95952aa-e0bb-4237-9982-5a2e02d0a77a";

    try {
      const formData = new FormData();
      formData.append("access_key", WEB3FORMS_ACCESS_KEY);
      formData.append("subject", `Recadastramento de Jazigo – Grupo Maya | ${nome} (${cemiterio})`);
      formData.append("from_name", "Site Grupo Maya");
      formData.append("message", `
=== DADOS DO REQUERENTE ===
Nome Completo: ${nome}
E-mail: ${email}
WhatsApp: ${whatsapp}
Telefone: ${telefone || "Não informado"}
CEP: ${cep}
Endereço: ${endereco}, ${numero}${complemento ? ` – ${complemento}` : ""}, ${bairro}

=== DADOS DA SEPULTURA ===
Nome do Subconcessionário: ${nomeSubconcessionario}
Cemitério: ${cemiterio}
Nº da Sepultura: ${numSepultura}
Nº da Quadra: ${numQuadra}
Tipo da Sepultura: ${tipoSepultura}
      `.trim());
      formData.append("attachment", arquivo);

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setNome(""); setEmail(""); setWhatsapp(""); setTelefone(""); setCep("");
        setEndereco(""); setNumero(""); setBairro(""); setComplemento("");
        setNomeSubconcessionario(""); setCemiterio(""); setNumSepultura("");
        setNumQuadra(""); setTipoSepultura(""); setArquivo(null);
        setTimeout(() => setStatus("idle"), 6000);
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
    <div className="bg-[#fbfbf9]">

      {/* ── Hero ── */}
      <PageHeroBanner
        badge="GRUPO MAYA — SERVIÇOS CEMITERIAIS"
        title={"Recadastramento\nde Jazigos"}
        description="Se você possui um jazigo em um dos cemitérios administrados pelo Grupo Maya, preencha o formulário abaixo ou entre em contato com nossos consultores para mais informações."
        image={imgHero}
        cta={{
          label: "Falar pelo WhatsApp",
          href: "https://wa.me/5511934243013?text=Olá%2C%20gostaria%20de%20informações%20sobre%20o%20recadastramento%20de%20jazigos.",
          whatsapp: true,
          style: "primary",
        }}
      />

      {/* ── Form section ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e8e8e4]">
        <div className="mx-auto px-5 md:px-[52px]" style={{ maxWidth: "1338px" }}>
          <div className="flex flex-col xl:flex-row gap-14 xl:gap-20 items-start">

            {/* Left info */}
            <div className="flex flex-col gap-5 xl:w-[380px] flex-shrink-0">
              <ScrollReveal>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: "#6b6b6b" }}>
                  Recadastramento
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "32px" : "48px", fontWeight: 400, lineHeight: "1.15", letterSpacing: "-1px", color: "#0a0a0a" }}>
                  Solicite o seu recadastramento
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#6b6b6b", textWrap: "pretty" }}>
                  Preencha o formulário ao lado com seus dados e as informações do jazigo. Nossa equipe entrará em contato em breve para orientá-lo sobre os próximos passos.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <div className="flex flex-col gap-3 mt-2">
                  {[
                    "Atendimento 24 horas, todos os dias",
                    "Processo simples e totalmente assistido",
                    "Conformidade com as normas legais vigentes",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <div className="w-4 h-4 rounded-full bg-[#C8963E]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={10} color="#C8963E" strokeWidth={2.5} />
                      </div>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#575757" }}>
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Right form */}
            <ScrollReveal className="w-full flex-1 min-w-0" delay={0.15} direction="right">
              <div className="bg-[#fbfbf9] rounded-[4px] w-full border border-[#e0e0dc]">
                <div className="p-8 md:p-10 flex flex-col gap-8">

                  <form onSubmit={handleSubmit} encType="multipart/form-data" className="flex flex-col gap-8 w-full">

                    <input type="hidden" name="subject" value="Novo Recadastramento - Grupo Maya" />
                    <input type="hidden" name="from_name" value="Site Grupo Maya" />

                    {/* ─��� Dados do Requerente ── */}
                    <div className="flex flex-col gap-5">
                      <p style={{ fontFamily: "'Google Sans', 'Inter', sans-serif", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.3px", lineHeight: "24px", color: "#0a0a0a" }}>
                        Dados do Requerente
                      </p>

                      {/* Nome + Email */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Nome Completo *</label>
                          <input type="text" required placeholder="Digite seu nome completo" value={nome} onChange={(e) => setNome(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>E-mail *</label>
                          <input type="email" required placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                      </div>

                      {/* WhatsApp + Telefone + CEP */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>WhatsApp *</label>
                          <input type="tel" required placeholder="(__) _____-____" value={whatsapp} onChange={(e) => setWhatsapp(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Telefone</label>
                          <input type="tel" placeholder="(__) _____-____" value={telefone} onChange={(e) => setTelefone(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>CEP *</label>
                          <input
                            type="text"
                            required
                            placeholder="00000-000"
                            value={cep}
                            maxLength={9}
                            onChange={async (e) => {
                              // Formata CEP: 00000-000
                              let val = e.target.value.replace(/\D/g, "").slice(0, 8);
                              const formatted = val.length > 5 ? `${val.slice(0, 5)}-${val.slice(5)}` : val;
                              setCep(formatted);
                              // Busca endereço quando CEP completo
                              if (val.length === 8) {
                                try {
                                  const res = await fetch(`https://viacep.com.br/ws/${val}/json/`);
                                  const data = await res.json();
                                  if (!data.erro) {
                                    setEndereco(data.logradouro || "");
                                    setBairro(data.bairro || "");
                                    setComplemento(data.complemento || "");
                                  }
                                } catch {}
                              }
                            }}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]"
                            style={FIELD_STYLE}
                          />
                        </div>
                      </div>

                      {/* Endereço + Número + Bairro */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Endereço *</label>
                          <input type="text" required placeholder="Digite seu endereço" value={endereco} onChange={(e) => setEndereco(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Número *</label>
                          <input type="text" required placeholder="Digite o número da casa ou apartamento" value={numero} onChange={(e) => setNumero(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Bairro *</label>
                          <input type="text" required placeholder="Digite seu bairro" value={bairro} onChange={(e) => setBairro(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                      </div>

                      {/* Complemento */}
                      <div className="flex flex-col gap-1.5">
                        <label style={LABEL_STYLE}>Complemento</label>
                        <input type="text" placeholder="Complemento do endereço" value={complemento} onChange={(e) => setComplemento(e.target.value)}
                          className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                      </div>
                    </div>

                    {/* ── Dados da Sepultura ── */}
                    <div className="flex flex-col gap-5">
                      <p style={{ fontFamily: "'Google Sans', 'Inter', sans-serif", fontSize: "18px", fontWeight: 600, letterSpacing: "-0.3px", lineHeight: "24px", color: "#0a0a0a" }}>
                        Dados da Sepultura
                      </p>

                      {/* Nome Subconcessionário + Cemitério */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Nome do Subconcessionário *</label>
                          <input type="text" required placeholder="Digite seu endereço" value={nomeSubconcessionario} onChange={(e) => setNomeSubconcessionario(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Cemitério *</label>
                          <select required value={cemiterio} onChange={(e) => setCemiterio(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors appearance-none cursor-pointer"
                            style={{ ...FIELD_STYLE, color: cemiterio ? "#0a0a0a" : "#b0b0a8", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                            <option value="" disabled hidden>Selecione o Cemitério</option>
                            <option value="Campo Grande">Campo Grande</option>
                            <option value="Lajeado">Lajeado</option>
                            <option value="Lapa">Lapa</option>
                            <option value="Parelheiros">Parelheiros</option>
                            <option value="Saudade">Saudade</option>
                          </select>
                        </div>
                      </div>

                      {/* Nº Sepultura + Nº Quadra + Tipo */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Nº da Sepultura *</label>
                          <input type="text" required placeholder="Digite o número da sua sepultura" value={numSepultura} onChange={(e) => setNumSepultura(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Nº da Quadra *</label>
                          <input type="text" required placeholder="Digite o número da quadra" value={numQuadra} onChange={(e) => setNumQuadra(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors placeholder:text-[#b0b0a8]" style={FIELD_STYLE} />
                        </div>
                        <div className="flex flex-col gap-1.5">
                          <label style={LABEL_STYLE}>Tipo da Sepultura *</label>
                          <select required value={tipoSepultura} onChange={(e) => setTipoSepultura(e.target.value)}
                            className="w-full bg-white rounded-[4px] px-4 py-3 focus:outline-none border border-[#e0e0dc] focus:border-[#C8963E] transition-colors appearance-none cursor-pointer"
                            style={{ ...FIELD_STYLE, color: tipoSepultura ? "#0a0a0a" : "#b0b0a8", backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%23aaa' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 14px center" }}>
                            <option value="" disabled hidden>Selecione o tipo da sepultura</option>
                            <option value="Jazigo">Jazigo</option>
                            <option value="Sepultura Simples">Sepultura Simples</option>
                            <option value="Gaveta">Gaveta</option>
                            <option value="Columbário">Columbário</option>
                            <option value="Outro">Outro</option>
                          </select>
                        </div>
                      </div>

                      {/* Upload de documentos */}
                      <div className="flex flex-col gap-2">
                        <label style={{ ...LABEL_STYLE, color: "#C8963E" }}>
                          Documento de concessão ou comprovante de titularidade; Identidade (RG) ou CNH; Comprovante de residência. *
                        </label>
                        <div className="flex items-center gap-3 flex-wrap">
                          <label
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[4px] cursor-pointer transition-colors bg-[#0a0a0a] hover:bg-[#1e1e1e]"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", fontWeight: 500, color: "#fff" }}
                          >
                            <input
                              type="file"
                              name="attachment"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                              onChange={(e) => {
                                const file = e.target.files?.[0] ?? null;
                                if (file && file.size > 5 * 1024 * 1024) {
                                  alert("O arquivo selecionado excede o limite de 5MB. Por favor, escolha um arquivo menor.");
                                  e.target.value = "";
                                  setArquivo(null);
                                  return;
                                }
                                setArquivo(file);
                              }}
                            />
                            Escolher Arquivo
                          </label>
                          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: arquivo ? "#0a0a0a" : "#888" }}>
                            {arquivo ? arquivo.name : "Nenhum ficheiro selecionado"}
                          </span>
                        </div>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#aaaaaa", lineHeight: "18px" }}>
                          Tamanho máximo: 5MB. Formatos aceitos: PDF ou Imagem.
                        </p>
                        {status === "fileError" && (
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#ef4444" }}>
                            Por favor, anexe ao menos um documento antes de enviar.
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Error */}
                    {status === "error" && (
                      <div className="flex items-center gap-2 px-4 py-3 rounded-[4px] bg-red-50 border border-red-200">
                        <AlertCircle size={15} className="text-red-500 flex-shrink-0" />
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", color: "#ef4444" }}>
                          Erro ao enviar. Tente novamente ou entre em contato pelo WhatsApp.
                        </p>
                      </div>
                    )}

                    {/* Submit */}
                    <ButtonFlip
                      as="button"
                      type="submit"
                      disabled={status === "loading" || status === "success"}
                      className="w-full h-[48px] bg-[#0a0a0a] hover:bg-[#1e1e1e] disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100 text-white rounded-[4px]"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "1.2px", textTransform: "uppercase" }}
                    >
                      {status === "loading" && "Enviando…"}
                      {status === "success" && "✓ Solicitação enviada!"}
                      {status === "error" && "Tentar novamente"}
                      {status === "idle" && "Enviar"}
                    </ButtonFlip>

                  </form>
                </div>
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 md:py-28 bg-[#fbfbf9]" style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#e8e8e4" }}>
        <div className="mx-auto px-5 md:px-[52px]" style={{ maxWidth: "1338px" }}>
          <div className="flex flex-col xl:flex-row gap-12 xl:gap-20 items-start">

            {/* Left: heading */}
            <div className="flex flex-col gap-4 xl:w-[380px] flex-shrink-0">
              <ScrollReveal>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: "#6b6b6b" }}>
                  Dúvidas Frequentes
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "32px" : "48px", fontWeight: 400, lineHeight: "1.15", letterSpacing: "-1px", color: "#0a0a0a" }}>
                  Perguntas Frequentes
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#6b6b6b", textWrap: "pretty" }}>
                  O recadastramento de jazigos e sepulturas é um processo essencial para manter as informações atualizadas e em conformidade com as normas legais.
                </p>
              </ScrollReveal>
            </div>

            {/* Right: accordion */}
            <ScrollReveal className="flex-1 w-full min-w-0" delay={0.1}>
              <div style={{ borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: "#e8e8e4" }}>
                {faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Cemetery cards ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto px-5 md:px-[52px]" style={{ maxWidth: "1338px" }}>
          <div className="flex flex-col gap-12 md:gap-16">

            {/* Header */}
            <div className="flex flex-col gap-[16px]" style={{ maxWidth: "520px" }}>
              <ScrollReveal>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.2px", textTransform: "uppercase", color: "#6b6b6b" }}>
                  Nossos Cemitérios
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: isMobile ? "32px" : "48px", fontWeight: 400, lineHeight: "1.15", letterSpacing: "-1px", color: "#0a0a0a" }}>
                  Presença em toda a cidade de São Paulo
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "1.7", color: "#6b6b6b", textWrap: "pretty" }}>
                  5 unidades nas regiões Leste, Oeste e Sul de São Paulo para atender você com proximidade, estrutura e cuidado.
                </p>
              </ScrollReveal>
            </div>

            {/* Cards layout */}
            <ScrollReveal delay={0.1}>
              {isMobile ? (
                /* Mobile: stacked single column */
                <div className="flex flex-col gap-4">
                  {[
                    { name: "Cemitério Lajeado", address: "Estrada do Lajeado Velho,\nnº 1490, Vila Independente", siteUrl: cemeteries[1].siteUrl, img: imgLageado },
                    { name: "Cemitério da Lapa", address: "R. Bergson, 347,\nVila Leopoldina", siteUrl: cemeteries[2].siteUrl, img: imgLapa },
                    { name: "Cemitério Parelheiros", address: "Rua Amaro de Pontes,\nnº 237, Parelheiros.", siteUrl: cemeteries[3].siteUrl, img: imgParelheiros },
                    { name: "Cemitério da Saudade", address: "Rua Samuel de Carvalho,\nnº 60, J. São Sebastião", siteUrl: cemeteries[4].siteUrl, img: imgSaudade },
                    { name: "Cemitério Campo Grande", address: "Av. Nossa Senhora do Sabará,\nnº 1371, Campo Grande", siteUrl: cemeteries[0].siteUrl, img: imgCampoGrande },
                  ].map((c) => (
                    <a
                      key={c.name}
                      href={c.siteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white flex flex-col gap-[24px] p-[25px] rounded-[4px]"
                      style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e0e0dc", textDecoration: "none", height: "320px" }}
                    >
                      <div className="flex-1 relative overflow-hidden min-h-0">
                        <img alt="" src={c.img} className="absolute inset-0 w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col gap-[12px] flex-shrink-0">
                        <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "22px", lineHeight: "26px", letterSpacing: "-0.3px", color: "#0a0a0a" }}>{c.name}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#575757", whiteSpace: "pre-wrap" }}>{c.address}</p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", lineHeight: "18px", letterSpacing: "0.5px", color: "#575757" }}>SAIBA MAIS</p>
                      </div>
                    </a>
                  ))}
                </div>
              ) : (
                /* Desktop: 2×2 grid on left + tall card on right */
                <div className="flex gap-[16px] items-stretch">
                  {/* 2×2 grid */}
                  <div
                    className="grid grid-cols-2 gap-[16px] flex-none"
                    style={{ gridTemplateRows: "1fr 1fr", height: "763px" }}
                  >
                    {[
                      { name: "Cemitério Lajeado", address: "Estrada do Lajeado Velho,\nnº 1490, Vila Independente", siteUrl: cemeteries[1].siteUrl, img: imgLageado },
                      { name: "Cemitério da Lapa", address: "R. Bergson, 347,\nVila Leopoldina", siteUrl: cemeteries[2].siteUrl, img: imgLapa },
                      { name: "Cemitério Parelheiros", address: "Rua Amaro de Pontes,\nnº 237, Parelheiros.", siteUrl: cemeteries[3].siteUrl, img: imgParelheiros },
                      { name: "Cemitério da Saudade", address: "Rua Samuel de Carvalho,\nnº 60, J. São Sebastião", siteUrl: cemeteries[4].siteUrl, img: imgSaudade },
                    ].map((c) => (
                      <a
                        key={c.name}
                        href={c.siteUrl}
                        className="group bg-white flex flex-col gap-[24px] p-[25px] rounded-[4px]"
                        style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e0e0dc", textDecoration: "none", width: "335px" }}
                      >
                        <div className="flex-1 relative overflow-hidden min-h-0">
                          <img alt="" src={c.img} className="absolute inset-0 w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col gap-[12px] flex-shrink-0">
                          <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "22px", lineHeight: "26px", letterSpacing: "-0.3px", color: "#0a0a0a" }}>{c.name}</p>
                          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#575757", whiteSpace: "pre-wrap" }}>{c.address}</p>
                          <span
                            className="inline-flex items-center gap-1.5 text-[#0a0a0a] group-hover:text-[#C8963E] transition-colors duration-200"
                            style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase" }}
                          >
                            SAIBA MAIS
                            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          </span>
                        </div>
                      </a>
                    ))}
                  </div>

                  {/* Campo Grande — tall card */}
                  <a
                    href={cemeteries[0].siteUrl}
                    className="group bg-white flex flex-col gap-[24px] p-[25px] rounded-[4px] flex-1"
                    style={{ borderWidth: "1px", borderStyle: "solid", borderColor: "#e0e0dc", textDecoration: "none" }}
                  >
                    <div className="flex-1 relative overflow-hidden min-h-0">
                      <img alt="" src={imgCampoGrande} className="absolute inset-0 w-full h-full object-cover" />
                    </div>
                    <div className="flex flex-col gap-[12px] flex-shrink-0">
                      <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "22px", lineHeight: "26px", letterSpacing: "-0.3px", color: "#0a0a0a" }}>Cemitério Campo Grande</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#575757" }}>Av. Nossa Senhora do Sabará, nº 1371, Campo Grande</p>
                      <span
                        className="inline-flex items-center gap-1.5 text-[#0a0a0a] group-hover:text-[#C8963E] transition-colors duration-200"
                        style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "1.8px", textTransform: "uppercase" }}
                      >
                        SAIBA MAIS
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </span>
                    </div>
                  </a>
                </div>
              )}
            </ScrollReveal>

          </div>
        </div>
      </section>

    </div>
  );
}