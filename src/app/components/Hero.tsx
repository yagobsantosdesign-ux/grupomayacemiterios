import jazigoImg from "../../assets/hero-bg-new.webp";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { trackWhatsAppConversion } from "./GoogleAnalytics";
import { ButtonFlip } from "./ui/ButtonFlip";
import { scrollToSection } from "../utils/scroll";

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="flex-shrink-0">
      <path d="M19.05 4.91C18.1331 3.98411 17.041 3.24997 15.8375 2.75036C14.634 2.25076 13.3431 1.99568 12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.22755 14.9771 3.79092 13.4593 3.79 11.91C3.79 7.37 7.49 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6176 6.85386 19.2259 7.76254 19.6396 8.76333C20.0533 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
    </svg>
  );
}

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const scrollTo = (id: string) => scrollToSection(id);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden"
      style={{ height: "100dvh", minHeight: "600px" }}
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <motion.img
          src={jazigoImg}
          alt=""
          aria-hidden="true"
          style={{
            y: bgY,
            position: "absolute",
            width: "100%",
            height: "128%",
            objectFit: "cover",
            objectPosition: "center 70%",
            top: 0,
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.20) 100%)",
          }}
        />
      </div>

      {/* Gold accent line at top */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: "#C8963E" }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[1338px] w-full mx-auto px-5 md:px-[52px]">
          <motion.div
            className="flex flex-col items-start"
            style={{ maxWidth: "520px" }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            {/* Label */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "2.5px",
                textTransform: "uppercase",
                color: "#C8963E",
                lineHeight: 1,
                marginBottom: "28px",
              }}
            >
              DESDE 1904 · SÃO PAULO
            </p>

            {/* Title */}
            <h1
              className="text-white"
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "clamp(36px, 4.8vw, 62px)",
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: "-1.5px",
                marginBottom: "24px",
                maxWidth: "700px",
                textWrap: "balance",
              }}
            >
              Tradição e cuidado para honrar quem você ama.
            </h1>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(13px, 1.1vw, 15px)",
                fontWeight: 400,
                lineHeight: 1.75,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "460px",
                marginBottom: "40px",
                textWrap: "pretty",
              }}
            >
              O Grupo Maya administra cemitérios e serviços funerários em São Paulo com décadas de experiência, atendimento humanizado e suporte integral às famílias.
            </p>

            {/* CTAs */}
            <div className="flex items-center gap-3 flex-wrap">
              <ButtonFlip
                as="a"
                href="https://wa.me/5511934243013"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="px-6 py-3.5 rounded-[8px]"
                innerClassName="gap-2.5"
                style={{
                  background: "#C8963E",
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.1px",
                }}
              >
                <WhatsAppIcon />
                Falar com Consultor
              </ButtonFlip>

              <ButtonFlip
                as="button"
                onClick={() => scrollTo("sobre")}
                className="px-6 py-3.5 rounded-[8px]"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                  WebkitBackdropFilter: "blur(10px)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                Conheça o Grupo
              </ButtonFlip>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-0 right-0 z-10 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-3">
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "9px",
              letterSpacing: "2.5px",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.30)",
            }}
          >
            ROLAR
          </span>
          <motion.div
            style={{
              width: "1px",
              height: "36px",
              background: "rgba(255,255,255,0.22)",
              transformOrigin: "top",
            }}
            animate={{ scaleY: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut", repeatDelay: 0.3 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
