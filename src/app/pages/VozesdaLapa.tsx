import { motion } from "motion/react";
import { Link } from "react-router";
import {
  Clock,
  Users,
  Leaf,
  Ticket,
  MapPin,
  Instagram,
  ArrowRight,
  Heart,
} from "lucide-react";
import { ScrollReveal } from "../components/ScrollReveal";
import { PageHeroBanner } from "../components/PageHeroBanner";

// ─── Images ──────────────────────────────────────────────────────────────────
const IMG_HERO = "https://images.unsplash.com/photo-1667303280424-db2f6c99a591?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyMG5pZ2h0JTIwZ3VpZGVkJTIwdG91ciUyMGxhbnRlcm58ZW58MXx8fHwxNzc0NTQ3NTc3fDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_TOMBSTONES = "https://images.unsplash.com/photo-1770731850582-5a92804990a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNlbWV0ZXJ5JTIwdG9tYnN0b25lJTIwc2N1bHB0dXJlcyUyMGFydHxlbnwxfHx8fDE3NzQ1NDc1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_PATH = "https://images.unsplash.com/photo-1721667052867-de072d28e47e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvbGQlMjBjZW1ldGVyeSUyMHBhdGglMjB0cmVlcyUyMGF0bW9zcGhlcmljfGVufDF8fHx8MTc3NDU0NzU3N3ww&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_ANGEL = "https://images.unsplash.com/photo-1766766615089-641cd78f1ec9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5lcmFyeSUyMGFydCUyMGFuZ2VsJTIwc3RhdHVlJTIwbWVtb3JpYWx8ZW58MXx8fHwxNzc0NTQ3NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080";
const IMG_TOUR = "https://images.unsplash.com/photo-1647054315984-4e1fa8f87ec1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3YWxraW5nJTIwbmlnaHQlMjB0b3VyJTIwaGlzdG9yaWNhbCUyMHNpdGV8ZW58MXx8fHwxNzc0NTQ3NTgyfDA&ixlib=rb-4.1.0&q=80&w=1080";

// ─── Data ─────────────────────────────────────────────────────────────────────
const highlights = [
  {
    icon: Clock,
    title: "1h45 de imersão",
    description:
      "Uma caminhada noturna por 108 anos de história, arte tumular e causos urbanos que habitam o Cemitério da Lapa.",
  },
  {
    icon: Users,
    title: "Acesso gratuito",
    description:
      "As visitas são abertas ao público sem custo de entrada. Uma iniciativa cultural para aproximar a comunidade do patrimônio funerário.",
  },
  {
    icon: Leaf,
    title: "Ação social",
    description:
      "Convidamos os participantes a doarem alimentos não-perecíveis para o projeto @solidariedadevegan durante as visitas.",
  },
  {
    icon: Ticket,
    title: "Inscrição pelo Sympla",
    description:
      "As vagas são limitadas. Retire seu ingresso com antecedência pelo Sympla e garanta seu lugar na próxima edição.",
  },
];

const figures = [
  {
    name: "Tião Carreiro",
    period: "1934 – 1993",
    role: "Músico e cantor",
    description:
      "Ícone da música caipira brasileira, Tião Carreiro repousa no Cemitério da Lapa. Seu túmulo é um dos mais visitados e homenageados pelos fãs que vêm de todo o Brasil.",
  },
  {
    name: "Personalidades anônimas",
    period: "Séculos XIX–XX",
    role: "Memória coletiva",
    description:
      "O Vozes da Lapa resgata também histórias de figuras comuns — trabalhadores, imigrantes e famílias que ajudaram a construir São Paulo e que encontraram seu descanso neste cemitério histórico.",
  },
  {
    name: "Arte tumular",
    period: "Acervo centenário",
    role: "Patrimônio funerário",
    description:
      "Esculturas em mármore, mausoléus em estilo art-nouveau e epitáfios que contam histórias. A arte tumular do Cemitério da Lapa é um acervo a céu aberto de altíssimo valor cultural.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function VozesdaLapa() {
  return (
    <div className="bg-[#fbfbf9]">

      {/* ── Hero ── */}
      <PageHeroBanner
        badge="PROJETO CULTURAL · GRUPO MAYA"
        title={"Vozes da Lapa"}
        description="Visitas noturnas gratuitas ao Cemitério da Lapa — história, arte tumular e memória coletiva em uma experiência única pela Zona Oeste de São Paulo."
        image={IMG_HERO}
        cta={{
          label: "Inscreva-se no Sympla",
          href: "https://www.sympla.com.br",
          style: "primary",
        }}
      />

      {/* ── Intro ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e8e8e4]">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div className="flex flex-col gap-5 lg:w-[420px] flex-shrink-0">
              <ScrollReveal>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8963E" }}>
                  O que é o projeto
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "30px", fontWeight: 400, lineHeight: "36px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                  Preservando memórias além do tempo
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "27px", color: "#575757" }}>
                  O <strong style={{ color: "#2d2d2d", fontWeight: 500 }}>Vozes da Lapa</strong> é um projeto de visitas noturnas guiadas e gratuitas ao Cemitério da Lapa, também conhecido como <em>Cemitério das Goiabeiras</em>, na Zona Oeste de São Paulo. Com 108 anos de história, o cemitério guarda personagens marcantes da cidade — e o projeto existe para que essas histórias não se percam no tempo.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "27px", color: "#575757" }}>
                  Organizado pelo coletivo <strong style={{ color: "#2d2d2d", fontWeight: 500 }}>O Que Te Assombra?</strong> em parceria com o Grupo Maya, o passeio alia história, patrimônio cultural funerário e ação social, convidando os participantes a doarem alimentos durante a visita.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.22}>
                <a
                  href="https://www.instagram.com/oquetemassombra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-all duration-200 hover:gap-3 group"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 600, color: "#C8963E", textDecoration: "none", letterSpacing: "0.2px" }}
                >
                  <Instagram size={14} strokeWidth={2} />
                  @oquetemassombra no Instagram
                  <ArrowRight size={13} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </ScrollReveal>
            </div>

            {/* Right — image grid */}
            <ScrollReveal className="flex-1 min-w-0" delay={0.1} direction="right">
              <div className="grid grid-cols-2 gap-3 w-full">
                <img
                  src={IMG_PATH}
                  alt="Alameda do Cemitério da Lapa"
                  className="w-full object-cover col-span-2"
                  style={{ height: "260px" }}
                />
                <img
                  src={IMG_TOMBSTONES}
                  alt="Arte tumular histórica"
                  className="w-full object-cover"
                  style={{ height: "180px" }}
                />
                <img
                  src={IMG_ANGEL}
                  alt="Escultura funerária"
                  className="w-full object-cover"
                  style={{ height: "180px" }}
                />
              </div>
            </ScrollReveal>

          </div>
        </div>
      </section>

      {/* ── Highlights ── */}
      <section className="py-20 md:py-28 bg-[#fbfbf9] border-b border-[#e8e8e4]">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <ScrollReveal>
            <div className="flex flex-col gap-2 mb-14">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8963E" }}>
                Como funciona
              </p>
              <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "30px", fontWeight: 400, lineHeight: "36px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                Uma experiência única, gratuita e cultural
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08}>
                <div className="flex flex-col gap-4 p-6 bg-white border border-[#e8e8e4] h-full">
                  <div
                    className="w-10 h-10 flex items-center justify-center flex-shrink-0"
                    style={{ background: "#2B5E3A", borderRadius: "8px" }}
                  >
                    <item.icon size={18} color="#ffffff" strokeWidth={1.5} />
                  </div>
                  <div className="flex flex-col gap-2">
                    <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", lineHeight: "1.3", letterSpacing: "-0.3px" }}>
                      {item.title}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#575757" }}>
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Figures / Stories ── */}
      <section className="py-20 md:py-28 bg-white border-b border-[#e8e8e4]">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <ScrollReveal>
            <div className="flex flex-col gap-2 mb-14">
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8963E" }}>
                Memórias que habitam o cemitério
              </p>
              <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "30px", fontWeight: 400, lineHeight: "36px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                Histórias para nunca esquecer
              </h2>
            </div>
          </ScrollReveal>

          <div className="flex flex-col gap-0">
            {figures.map((fig, i) => (
              <ScrollReveal key={fig.name} delay={0.06}>
                <div
                  className="flex flex-col md:flex-row gap-6 md:gap-16 items-start py-10"
                  style={{ borderTop: i === 0 ? "none" : "1px solid #e8e8e4" }}
                >
                  {/* Number */}
                  <div className="flex-shrink-0 md:w-[60px]">
                    <span style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "48px", fontWeight: 400, color: "#e8e8e4", lineHeight: 1 }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  {/* Info */}
                  <div className="flex flex-col gap-1.5 md:w-[240px] flex-shrink-0">
                    <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", lineHeight: "1.3", letterSpacing: "-0.3px" }}>
                      {fig.name}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "1.2px", textTransform: "uppercase", color: "#C8963E" }}>
                      {fig.period}
                    </p>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#aaaaaa", letterSpacing: "0.3px" }}>
                      {fig.role}
                    </p>
                  </div>
                  {/* Description */}
                  <div className="flex-1">
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "27px", color: "#575757" }}>
                      {fig.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Full-width image + quote ── */}
      <section className="relative overflow-hidden" style={{ height: "clamp(300px, 35vw, 500px)", background: "#0a0a0a" }}>
        <img
          src={IMG_TOUR}
          alt="Visita noturna guiada"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        />
        <div className="relative z-10 h-full flex items-center justify-center px-5 md:px-[52px]">
          <ScrollReveal>
            <blockquote className="text-center max-w-[680px]">
              <p
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: "clamp(22px, 3vw, 38px)",
                  fontWeight: 400,
                  lineHeight: 1.35,
                  letterSpacing: "-0.8px",
                  color: "#ffffff",
                  fontStyle: "italic",
                }}
              >
                "Um cemitério não é apenas um lugar de repouso — é um arquivo vivo da cidade e das pessoas que a construíram."
              </p>
              <p
                className="mt-5"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 500, letterSpacing: "2px", textTransform: "uppercase", color: "#C8963E" }}
              >
                Vozes da Lapa · Grupo Maya
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Como participar ── */}
      <section className="py-20 md:py-28 bg-[#fbfbf9] border-b border-[#e8e8e4]">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start">

            {/* Left */}
            <div className="flex flex-col gap-5 lg:w-[420px] flex-shrink-0">
              <ScrollReveal>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8963E" }}>
                  Como participar
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.08}>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "30px", fontWeight: 400, lineHeight: "36px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                  Reserve seu lugar na próxima visita
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.14}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "27px", color: "#575757" }}>
                  As visitas noturnas ao Cemitério da Lapa acontecem periodicamente e as vagas são limitadas. A inscrição é feita pelo Sympla com antecedência — o acesso é gratuito e aberto a todos os públicos.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={0.18}>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "27px", color: "#575757" }}>
                  Lembre-se de levar alimentos não-perecíveis para doação ao projeto <strong style={{ color: "#2d2d2d", fontWeight: 500 }}>@solidariedadevegan</strong> e usar calçado confortável para a caminhada de 1h45.
                </p>
              </ScrollReveal>
            </div>

            {/* Right — steps */}
            <div className="flex-1 min-w-0">
              <div className="flex flex-col gap-0">
                {[
                  {
                    step: "01",
                    title: "Acesse o Sympla",
                    desc: "Busque por \"Vozes da Lapa\" na plataforma Sympla e escolha a edição disponível mais próxima.",
                  },
                  {
                    step: "02",
                    title: "Retire seu ingresso gratuito",
                    desc: "A entrada não tem custo. Basta se cadastrar e confirmar sua presença com antecedência.",
                  },
                  {
                    step: "03",
                    title: "Separe uma doação",
                    desc: "Alimentos não-perecíveis são bem-vindos. A doação é voluntária, mas muito importante para o projeto social parceiro.",
                  },
                  {
                    step: "04",
                    title: "Apareça e explore",
                    desc: "No dia, compareça ao Cemitério da Lapa (R. Bergson, 347 – Vila Leopoldina) e mergulhe em 108 anos de história.",
                  },
                ].map((item, i) => (
                  <ScrollReveal key={item.step} delay={i * 0.07}>
                    <div
                      className="flex gap-6 py-7"
                      style={{ borderTop: i === 0 ? "none" : "1px solid #e8e8e4" }}
                    >
                      <span
                        style={{
                          fontFamily: "'Sorts Mill Goudy', serif",
                          fontSize: "32px",
                          fontWeight: 400,
                          color: "#e0e0dc",
                          lineHeight: 1,
                          flexShrink: 0,
                          minWidth: "44px",
                        }}
                      >
                        {item.step}
                      </span>
                      <div className="flex flex-col gap-1.5">
                        <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "20px", fontWeight: 400, color: "#0a0a0a", lineHeight: "1.3", letterSpacing: "-0.3px" }}>
                          {item.title}
                        </p>
                        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "22px", color: "#575757" }}>
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Info bar ── */}
      <section className="bg-[#2B5E3A] py-10">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              { icon: MapPin, label: "Local", value: "R. Bergson, 347 – Vila Leopoldina,\nSão Paulo – SP" },
              { icon: Clock, label: "Duração", value: "Aproximadamente\n1h45 por visita" },
              { icon: Heart, label: "Doação social", value: "Alimentos não-perecíveis para\n@solidariedadevegan" },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div
                  className="w-9 h-9 flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "rgba(200,150,62,0.2)", borderRadius: "8px" }}
                >
                  <item.icon size={16} color="#C8963E" strokeWidth={1.5} />
                </div>
                <div className="flex flex-col gap-0.5">
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", color: "rgba(255,255,255,0.45)" }}>
                    {item.label}
                  </p>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "14px", lineHeight: "20px", color: "rgba(255,255,255,0.85)", whiteSpace: "pre-line" }}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-start md:items-center justify-between">
              <div className="flex flex-col gap-3 max-w-[560px]">
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "2.5px", textTransform: "uppercase", color: "#C8963E" }}>
                  Próximas edições
                </p>
                <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "30px", fontWeight: 400, lineHeight: "36px", letterSpacing: "-0.5px", color: "#0a0a0a" }}>
                  Garanta sua vaga na próxima visita noturna
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", lineHeight: "27px", color: "#575757" }}>
                  Acompanhe o projeto nas redes sociais e fique por dentro das novas datas. As vagas se esgotam rapidamente.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                <a
                  href="https://www.sympla.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-[10px] rounded-[4px] transition-all duration-200 hover:opacity-88 hover:-translate-y-0.5"
                  style={{ background: "#C8963E", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#ffffff", letterSpacing: "0.2px" }}
                >
                  <Ticket size={15} strokeWidth={2} />
                  Inscrever no Sympla
                </a>
                <a
                  href="https://www.instagram.com/oquetemassombra"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-5 py-[10px] rounded-[4px] transition-all duration-200 hover:opacity-88 hover:-translate-y-0.5"
                  style={{ background: "transparent", border: "1px solid #e0e0dc", textDecoration: "none", fontFamily: "'Inter', sans-serif", fontSize: "13.5px", fontWeight: 600, color: "#2d2d2d", letterSpacing: "0.2px" }}
                >
                  <Instagram size={15} strokeWidth={2} />
                  Seguir no Instagram
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Back link ── */}
      <div className="py-6 border-t border-[#e8e8e4] bg-[#fbfbf9]">
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">
          <Link
            to="/#projeto-cultural"
            className="inline-flex items-center gap-2 transition-all duration-200 hover:gap-3 group"
            style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", fontWeight: 500, color: "#aaaaaa", textDecoration: "none", letterSpacing: "0.2px" }}
          >
            <ArrowRight size={13} strokeWidth={2} className="rotate-180 transition-transform duration-200 group-hover:-translate-x-1" />
            Voltar ao site
          </Link>
        </div>
      </div>

    </div>
  );
}