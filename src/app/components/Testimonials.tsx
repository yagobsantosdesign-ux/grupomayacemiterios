import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";
import testimonialRl from "../../assets/testimonial-rl.webp";
import testimonialMa from "../../assets/testimonial-ma.webp";
import testimonialCf from "../../assets/testimonial-cf.webp";
import testimonialJa from "../../assets/testimonial-ja.webp";
import testimonialFc from "../../assets/testimonial-fc.webp";
import testimonialAm from "../../assets/testimonial-am.webp";

const testimonials = [
  {
    id: 1,
    quote: "Em um momento tão difícil, o Grupo Maya nos recebeu com uma humanidade que nunca vou esquecer. Cuidaram de tudo com respeito e delicadeza. Sou eternamente grata.",
    name: "Maria Aparecida S.",
    role: "Família atendida — Cemitério Lapa",
    initials: "MA",
    color: "#2B5E3A",
    photo: testimonialMa,
  },
  {
    id: 2,
    quote: "Adquiri meu jazigo com tranquilidade e sem pressão. O consultor foi extremamente atencioso, explicou todas as opções e o pagamento foi facilitado. Recomendo a todos.",
    name: "Roberto F. Lima",
    role: "Cliente — Jazigo Vertical, Lajeado",
    initials: "RL",
    color: "#C8963E",
    photo: testimonialRl,
  },
  {
    id: 3,
    quote: "A equipe do Grupo Maya esteve presente em cada etapa. Desde o velório até o sepultamento, tudo foi conduzido com dignidade e cuidado. Minha família não precisou se preocupar com nada.",
    name: "Claudia M. Ferreira",
    role: "Família atendida — Cemitério Campo Grande",
    initials: "CF",
    color: "#4a7c5e",
    photo: testimonialCf,
  },
  {
    id: 4,
    quote: "Realizei o recadastramento do jazigo da minha mãe sem complicações. O atendimento foi rápido, simpático e muito bem organizado. Profissionais de verdade.",
    name: "José Carlos Alves",
    role: "Titular recadastrado — Cemitério Saudade",
    initials: "JA",
    color: "#8B6B3D",
    photo: testimonialJa,
  },
  {
    id: 5,
    quote: "Quando perdemos meu pai, o Grupo Maya cuidou de absolutamente tudo com uma atenção que nos surpreendeu. Não tivemos que nos preocupar com nada nos momentos mais difíceis.",
    name: "Fernanda R. Costa",
    role: "Família atendida — Cemitério Parelheiros",
    initials: "FC",
    color: "#3D5C4A",
    photo: testimonialFc,
  },
  {
    id: 6,
    quote: "Contratei o Plano Maya para minha família e fiquei muito satisfeito com a transparência e clareza das condições. Atendimento humano e sem pressão de venda.",
    name: "Antonio Marcos P.",
    role: "Cliente — Plano Maya Familiar",
    initials: "AM",
    color: "#6B4F3A",
    photo: testimonialAm,
  },
];

function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
}

function smoothScrollTo(el: HTMLElement, target: number, duration = 600) {
  const start = el.scrollLeft;
  const distance = target - start;
  if (Math.abs(distance) < 1) return;
  const startTime = performance.now();
  const step = (now: number) => {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    el.scrollLeft = start + distance * easeInOutQuart(progress);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

export function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  const scrollTo = (index: number) => {
    const clamped = Math.max(0, Math.min(index, total - 1));
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll<HTMLElement>(".testimonial-card");
    const card = cards[clamped];
    if (!card) return;
    const leftPadding = (cards[0] as HTMLElement)?.offsetLeft ?? 0;
    const targetScroll = clamped === 0 ? 0 : card.offsetLeft - leftPadding;
    setCurrent(clamped);
    smoothScrollTo(track, targetScroll);
  };

  // Sync dots with manual drag-scroll, debounced so it fires after scroll settles
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let timer: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        const cards = track.querySelectorAll<HTMLElement>(".testimonial-card");
        const leftPadding = (cards[0] as HTMLElement)?.offsetLeft ?? 0;
        const scrollLeft = track.scrollLeft;
        let closest = 0;
        let minDist = Infinity;
        cards.forEach((card, i) => {
          const dist = Math.abs((card as HTMLElement).offsetLeft - leftPadding - scrollLeft);
          if (dist < minDist) { minDist = dist; closest = i; }
        });
        setCurrent(closest);
      }, 120);
    };
    track.addEventListener("scroll", handleScroll, { passive: true });
    return () => { track.removeEventListener("scroll", handleScroll); clearTimeout(timer); };
  }, []);

  return (
    <section
      id="depoimentos"
      className="py-24 md:py-32 overflow-hidden"
      style={{ background: "#fff" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* ── Header: label left | title + description right ── */}
        <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-[60px] mb-14">
          {/* Label alone */}
          <ScrollReveal className="md:w-[220px] flex-shrink-0 pt-1">
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", fontWeight: 600, letterSpacing: "2.4px", textTransform: "uppercase", color: "#6b6b6b" }}>
              DEPOIMENTOS
            </p>
          </ScrollReveal>

          {/* Title + description */}
          <div className="flex flex-col gap-3 flex-1">
            <ScrollReveal delay={0.08}>
              <h2 style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "48px", fontWeight: 400, lineHeight: 1.15, letterSpacing: "-1px", color: "#0a0a0a", maxWidth: "460px", textWrap: "balance" }}>
                O que as famílias dizem sobre nosso trabalho
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.12}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: "1.7", color: "#6b6b6b", maxWidth: "480px", textWrap: "pretty" }}>
                Experiências reais de famílias que confiaram ao Grupo Maya um momento único e irreversível.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* ── Horizontal scroll track (full bleed) ── */}
      <div
        ref={trackRef}
        className="flex gap-4 overflow-x-auto pl-5 md:pl-[calc((100vw-1338px)/2+52px)] pr-5 md:pr-12 pb-2"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {testimonials.map((t, i) => (
          <div key={t.id} className="testimonial-card flex gap-4 flex-shrink-0">
            {/* Avatar card — 9:16 portrait ratio */}
            <div
              className="flex-shrink-0 w-[140px] md:w-[180px] rounded-[4px] overflow-hidden flex items-center justify-center"
              style={{ background: t.color, aspectRatio: "9/16" }}
            >
              {t.photo ? (
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-full h-full object-cover object-center"
                />
              ) : (
                <span
                  style={{
                    fontFamily: "'Sorts Mill Goudy', serif",
                    fontSize: "48px",
                    fontWeight: 400,
                    color: "rgba(255,255,255,0.35)",
                    letterSpacing: "-2px",
                    lineHeight: 1,
                  }}
                >
                  {t.initials}
                </span>
              )}
            </div>

            {/* Text card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.15 + i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="w-[280px] md:w-[360px] flex flex-col gap-5 p-7 bg-white rounded-[4px]"
              style={{ border: "1px solid #e0e0dc" }}
            >
              {/* Quote mark */}
              <span
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: "52px",
                  lineHeight: 0.8,
                  color: "#0a0a0a",
                  display: "block",
                }}
              >
                "
              </span>

              <p style={{ fontFamily: "'Sorts Mill Goudy', serif", fontSize: "18px", fontWeight: 400, lineHeight: "1.65", color: "#1a1a1a", letterSpacing: "-0.2px", flex: 1, textWrap: "pretty" }}>
                {t.quote}
              </p>

              <div className="flex flex-col gap-0.5 pt-2" style={{ borderTop: "1px solid #f0f0ec" }}>
                <p style={{ fontFamily: "'Google Sans', 'Inter', sans-serif", fontSize: "14px", fontWeight: 600, color: "#0a0a0a" }}>
                  {t.name}
                </p>
                <p style={{ fontFamily: "'Google Sans', 'Inter', sans-serif", fontSize: "12.5px", fontWeight: 400, color: "#6b6b6b" }}>
                  {t.role}
                </p>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* ── Controls: dots + arrows ── */}
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] mt-8 flex items-center justify-between">
        {/* Dots */}
        <div className="flex items-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollTo(i)}
              aria-label={`Depoimento ${i + 1}`}
              style={{
                width: i === current ? "28px" : "8px",
                height: "8px",
                borderRadius: "4px",
                background: i === current ? "#0a0a0a" : "#d0d0cc",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.3s, background 0.2s",
              }}
            />
          ))}
        </div>

        {/* Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollTo(current - 1)}
            disabled={current === 0}
            className="flex items-center justify-center w-10 h-10 rounded-[4px] transition-all duration-200 disabled:opacity-30"
            style={{ background: "white", border: "1px solid #e0e0dc", cursor: current === 0 ? "default" : "pointer" }}
            aria-label="Anterior"
          >
            <ChevronLeft size={18} strokeWidth={2} color="#0a0a0a" />
          </button>
          <button
            onClick={() => scrollTo(current + 1)}
            disabled={current === total - 1}
            className="flex items-center justify-center w-10 h-10 rounded-[4px] transition-all duration-200 disabled:opacity-30"
            style={{ background: "#0a0a0a", border: "1px solid #0a0a0a", cursor: current === total - 1 ? "default" : "pointer" }}
            aria-label="Próximo"
          >
            <ChevronRight size={18} strokeWidth={2} color="white" />
          </button>
        </div>
      </div>
    </section>
  );
}
