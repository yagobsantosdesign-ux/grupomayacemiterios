import jazigoImg from "figma:asset/95a41ea9d816aee48de995766a5d0f54117782a4.png";
import golpeImg from "figma:asset/e6abe57097b1739d18a6ca8606644ce68d2ffa13.png";
import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { trackWhatsAppConversion } from "./GoogleAnalytics";

// ─── WhatsApp SVG ───────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="flex-shrink-0">
      <path d="M19.05 4.91C18.1331 3.98411 17.041 3.24997 15.8375 2.75036C14.634 2.25076 13.3431 1.99568 12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.22755 14.9771 3.79092 13.4593 3.79 11.91C3.79 7.37 7.49 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6176 6.85386 19.2259 7.76254 19.6396 8.76333C20.0533 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
    </svg>
  );
}

// ─── Slides config — adicione novos slides aqui ─────────────────────────────
//
//  Cada slide aceita:
//    badge?     : texto pequeno acima do título (opcional)
//    title      : título principal (suporta \n para quebra de linha)
//    description: parágrafo de descrição
//    image?     : imagem de fundo para o slide (opcional)
//    cta        : { label, href, whatsapp? }
//
const SLIDES = [
  {
    id: "jazigos",
    badge: null,
    title: "Compre seu Jazigo\nPerpétuo",
    description:
      "Garanta um lugar de lembranças em São Paulo com pagamento facilitado. O Grupo Maya oferece opções de jazigos verticais ou tradicionais e suporte completo para honrar a memória dos seus entes queridos com tranquilidade e respeito.",
    image: jazigoImg,
    cta: {
      label: "Falar com Consultor",
      href: "https://wa.me/5511934223751",
      whatsapp: true,
      ctaStyle: "primary",
    },
  },
  {
    id: "cemiterio",
    badge: "DESDE 1904 · ZONA LESTE, SÃO PAULO",
    title: "Cemitério Lajeado\nGrupo Maya",
    description:
      "Inaugurado em 1904, o Cemitério Lajeado é um dos marcos históricos mais antigos do extremo leste de São Paulo. Sob a administração do Grupo Maya, une tradição centenária a infraestrutura completa e atendimento humanizado.",
    image: null,
    cta: {
      label: "Saiba Mais",
      href: "#sobre",
      whatsapp: false,
      ctaStyle: "secondary",
    },
  },
  {
    id: "alerta-golpe",
    badge: "ALERTA DE GOLPE!",
    title: "Cuidado com golpistas\nagindo em nosso nome!",
    description:
      "Terceiros estão se passando pelo Grupo Maya para cobrar valores indevidos de famílias. Não realizamos cobranças por telefone. Não pague sem confirmar o beneficiário e CNPJ oficial.",
    image: golpeImg,
    cta: {
      label: "Como se proteger",
      href: "#",
      whatsapp: false,
      ctaStyle: "primary",
    },
  },
] as const;

// ─── Auto-advance interval (ms) ─────────────────────────────────────────────
const INTERVAL = 7000;

// ─── Hero Carousel ──────────────────────────────────────────────────────────
export function Hero() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = SLIDES.length;

  const goTo = useCallback(
    (index: number, dir: 1 | -1) => {
      setDirection(dir);
      setCurrent((index + total) % total);
    },
    [total]
  );

  const next = useCallback(() => goTo(current + 1, 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, -1), [current, goTo]);

  // Auto-advance
  const resetTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, INTERVAL);
  }, [next]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, resetTimer]);

  const handleManualNav = (fn: () => void) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    fn();
  };

  const handleCtaClick = (slide: (typeof SLIDES)[number]) => {
    if (slide.cta.whatsapp) trackWhatsAppConversion();
    if (!slide.cta.href.startsWith("http")) {
      const id = slide.cta.href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const slide = SLIDES[current];

  // Slide text variants
  const variants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 48 : -48 }),
    center: { opacity: 1, x: 0 },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -48 : 48 }),
  };

  return (
    <section
      id="home"
      className="relative w-full overflow-hidden"
      style={{
        background: "#0a0a0a",
        height: "clamp(380px, 42vw, 560px)",
      }}
    >
      {/* Responsive margin-top + height overrides */}
      <style>{`
        #home {
          margin-top: 108px;
        }
        @media (max-width: 767px) {
          #home {
            margin-top: 64px !important;
            height: calc(100vw * 4 / 3) !important;
          }
        }
      `}</style>

      {/* ─── Per-slide background image ─── */}
      <AnimatePresence initial={false}>
        {slide.image && (
          <motion.div
            key={`bg-${slide.id}`}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <img
              src={slide.image}
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center"
            />
            {/* Dark overlay so text remains legible */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.50) 55%, rgba(0,0,0,0.20) 100%)",
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Subtle gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: "#C8963E" }}
      />

      {/* ─── Text content ─── */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="max-w-[1338px] w-full mx-auto px-5 md:px-[52px] pb-10 md:pb-0">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={slide.id}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-start max-w-[600px]"
            >
              {/* Badge */}
              {slide.badge && (
                <p
                  className="mb-4"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    color: "#C8963E",
                    lineHeight: "1",
                  }}
                >
                  {slide.badge}
                </p>
              )}

              {/* Title */}
              <h1
                className="text-white mb-5"
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: "clamp(32px, 4.2vw, 54px)",
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: "-1.5px",
                  whiteSpace: "pre-line",
                }}
              >
                {slide.title}
              </h1>

              {/* Description */}
              <p
                className="mb-7"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(13px, 1.1vw, 14px)",
                  fontWeight: 400,
                  lineHeight: "1.75",
                  color: "rgba(255,255,255,0.55)",
                  maxWidth: "480px",
                }}
              >
                {slide.description}
              </p>

              {/* CTA */}
              {slide.cta.href.startsWith("http") ? (
                <a
                  href={slide.cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => handleCtaClick(slide)}
                  className="inline-flex items-center gap-2.5 px-5 py-[10px] rounded-[4px] transition-all duration-200 hover:opacity-88 hover:-translate-y-0.5"
                  style={{
                    background: slide.cta.ctaStyle === "primary" ? "#C8963E" : "transparent",
                    border: slide.cta.ctaStyle === "secondary" ? "1px solid rgba(255,255,255,0.4)" : "none",
                    textDecoration: "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.2px",
                  }}
                >
                  {slide.cta.whatsapp && <WhatsAppIcon />}
                  {slide.cta.label}
                </a>
              ) : (
                <button
                  onClick={() => handleCtaClick(slide)}
                  className="inline-flex items-center gap-2.5 px-5 py-[10px] rounded-[4px] transition-all duration-200 hover:opacity-88 hover:-translate-y-0.5"
                  style={{
                    background: slide.cta.ctaStyle === "primary" ? "#C8963E" : "transparent",
                    border: slide.cta.ctaStyle === "secondary" ? "1px solid rgba(255,255,255,0.4)" : "none",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.2px",
                    cursor: "pointer",
                  }}
                >
                  {slide.cta.whatsapp && <WhatsAppIcon />}
                  {slide.cta.label}
                </button>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* ─── Arrows ─── */}
      <button
        aria-label="Slide anterior"
        onClick={() => handleManualNav(prev)}
        className="hidden md:flex absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-9 h-9 rounded-[8px] transition-all duration-200 hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.16)",
          color: "#ffffff",
        }}
      >
        <ChevronLeft size={18} strokeWidth={2} />
      </button>
      <button
        aria-label="Próximo slide"
        onClick={() => handleManualNav(next)}
        className="hidden md:flex absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-20 items-center justify-center w-9 h-9 rounded-[8px] transition-all duration-200 hover:scale-110"
        style={{
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.16)",
          color: "#ffffff",
        }}
      >
        <ChevronRight size={18} strokeWidth={2} />
      </button>

      {/* ─── Dots + progress ─── */}
      <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center">
        <div className="flex items-center gap-2">
          {SLIDES.map((s, i) => (
            <button
              key={s.id}
              aria-label={`Ir para slide ${i + 1}`}
              onClick={() => handleManualNav(() => goTo(i, i > current ? 1 : -1))}
              className="relative overflow-hidden transition-all duration-300"
              style={{
                width: i === current ? "28px" : "8px",
                height: "3px",
                borderRadius: "2px",
                background:
                  i === current ? "#C8963E" : "rgba(255,255,255,0.30)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                flexShrink: 0,
              }}
            >
              {i === current && (
                <motion.span
                  key={`progress-${current}`}
                  className="absolute inset-0"
                  style={{
                    background: "#ffffff",
                    transformOrigin: "left",
                  }}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: INTERVAL / 1000, ease: "linear" }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}