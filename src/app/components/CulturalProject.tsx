import image_c8856671f6d0f54a093ee9bf475f8602f076d0a7 from 'figma:asset/c8856671f6d0f54a093ee9bf475f8602f076d0a7.png'
import { ScrollReveal } from "./ScrollReveal";
import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Link } from "react-router";

const BG_IMAGE = "https://images.unsplash.com/photo-1773760504361-27c34e4f05b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpYyUyMGNlbWV0ZXJ5JTIwZ2FyZGVuJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzc0NDU1NjU5fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function CulturalProject() {
  return (
    <section
      id="projeto-cultural"
      className="relative overflow-hidden py-24 md:py-32"
      style={{ background: "#0a0a0a" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src={image_c8856671f6d0f54a093ee9bf475f8602f076d0a7}
          alt="Cemitério Lajeado — Vozes da Lapa"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1338px] mx-auto px-5 md:px-[52px]">
        <div className="max-w-[620px] flex flex-col gap-7">

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
              PROJETO CULTURAL
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <h2
              className="text-white"
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-1.2px",
              }}
            >
              Preservando memórias além&nbsp;do&nbsp;tempo
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={0.14}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 400,
                lineHeight: "1.75",
                color: "rgba(255,255,255,0.65)",
                maxWidth: "520px",
              }}
            >
              Conheça o projeto <strong style={{ color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>Vozes da Lapa</strong> — histórias que habitam nossos cemitrios. Um acervo de memórias e narrativas sobre São Paulo, contadas pelas pessoas e famílias que fazem parte da nossa história.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <Link
              to="/vozes-da-lapa"
              className="inline-flex items-center gap-2 transition-all duration-200 group hover:gap-3"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 600,
                color: "#C8963E",
                textDecoration: "none",
                letterSpacing: "0.3px",
              }}
            >
              Explorar projeto
              <ArrowRight size={16} strokeWidth={2.2} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}