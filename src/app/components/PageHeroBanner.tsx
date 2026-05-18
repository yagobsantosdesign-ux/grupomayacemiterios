import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { trackWhatsAppConversion } from "./GoogleAnalytics";
import { ButtonFlip } from "./ui/ButtonFlip";
import { scrollToSection } from "../utils/scroll";

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" className="flex-shrink-0">
      <path d="M19.05 4.91C18.1331 3.98411 17.041 3.24997 15.8375 2.75036C14.634 2.25076 13.3431 1.99568 12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91ZM12.04 20.15C10.56 20.15 9.11 19.75 7.84 19L7.54 18.82L4.42 19.64L5.25 16.6L5.05 16.29C4.22755 14.9771 3.79092 13.4593 3.79 11.91C3.79 7.37 7.49 3.67 12.03 3.67C14.23 3.67 16.3 4.53 17.85 6.09C18.6176 6.85386 19.2259 7.76254 19.6396 8.76333C20.0533 9.76411 20.2642 10.8371 20.26 11.92C20.28 16.46 16.58 20.15 12.04 20.15Z" />
    </svg>
  );
}

interface PageHeroBannerCta {
  label: string;
  href: string;
  whatsapp?: boolean;
  style?: "primary" | "secondary";
}

interface PageHeroBannerProps {
  /** Small badge label above the title (gold uppercase) */
  badge: string;
  /** Main heading — supports \n for line breaks */
  title: string;
  /** Optional body paragraph below the title */
  description?: string;
  /** Optional CTA button/link */
  cta?: PageHeroBannerCta;
  /** Background image src */
  image: string;
  /** Alt text for background image */
  imageAlt?: string;
}

export function PageHeroBanner({
  badge,
  title,
  description,
  cta,
  image,
  imageAlt = "",
}: PageHeroBannerProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);

  const isExternalLink = cta?.href.startsWith("http");

  const handleCtaClick = () => {
    if (cta?.whatsapp) trackWhatsAppConversion();
    if (cta && !isExternalLink) {
      const id = cta.href.replace("#", "");
      scrollToSection(id);
    }
  };

  const ctaBgStyle: React.CSSProperties =
    cta?.style === "primary"
      ? { background: "#C8963E", border: "none" }
      : { background: "transparent", border: "1px solid rgba(255,255,255,0.4)" };

  return (
    <section
      ref={sectionRef}
      className="page-hero relative w-full overflow-hidden"
      style={{
        background: "#0a0a0a",
        height: "clamp(380px, 42vw, 560px)",
      }}
    >
      {/* Navbar offset — matches Hero.tsx */}
      <style>{`
        .page-hero {
          margin-top: 68px;
        }
        @media (max-width: 767px) {
          .page-hero {
            margin-top: 68px !important;
            height: 400px !important;
          }
        }
      `}</style>

      {/* Gold accent line at top — identical to Hero */}
      <div
        className="absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{ background: "#C8963E" }}
      />

      {/* Background image */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <motion.img
          src={image}
          alt={imageAlt}
          style={{
            y: bgY,
            position: "absolute",
            width: "100%",
            height: "128%",
            objectFit: "cover",
            objectPosition: "center",
            top: 0,
          }}
        />
        {/* Gradient overlay — darkest on the left where text is */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.55) 55%, rgba(0,0,0,0.20) 100%)",
          }}
        />
      </div>

      {/* Content — bottom on mobile, centered on desktop */}
      <div className="relative z-10 h-full flex items-end md:items-center">
        <div className="max-w-[1338px] w-full mx-auto px-5 md:px-[52px] pb-10 md:pb-0">
          <motion.div
            initial={{ opacity: 0, x: 48 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.48, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col items-start max-w-[600px]"
          >
            {/* Badge */}
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
              {badge}
            </p>

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
                textWrap: "balance",
              }}
            >
              {title}
            </h1>

            {/* Description */}
            {description && (
              <p
                className="mb-7"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "clamp(13px, 1.1vw, 14px)",
                  fontWeight: 400,
                  lineHeight: "1.75",
                  color: "rgba(255,255,255,0.55)",
                  textWrap: "pretty",
                  maxWidth: "480px",
                }}
              >
                {description}
              </p>
            )}

            {/* CTA */}
            {cta &&
              (isExternalLink ? (
                <ButtonFlip
                  as="a"
                  href={cta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleCtaClick}
                  className="px-5 py-[10px] rounded-[8px] hover:opacity-88"
                  innerClassName="gap-2.5"
                  style={{
                    ...ctaBgStyle,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.2px",
                  }}
                >
                  {cta.whatsapp && <WhatsAppIcon />}
                  {cta.label}
                </ButtonFlip>
              ) : (
                <ButtonFlip
                  as="button"
                  onClick={handleCtaClick}
                  className="px-5 py-[10px] rounded-[8px] hover:opacity-88"
                  innerClassName="gap-2.5"
                  style={{
                    ...ctaBgStyle,
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13.5px",
                    fontWeight: 600,
                    color: "#ffffff",
                    letterSpacing: "0.2px",
                  }}
                >
                  {cta.whatsapp && <WhatsAppIcon />}
                  {cta.label}
                </ButtonFlip>
              ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}