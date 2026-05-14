import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router";
import { ScrollReveal } from "./ScrollReveal";

const cards = [
  {
    id: "servicos",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Serviços Funerários",
    description: "Funeral completo, velório, translado e documentação com atendimento humanizado.",
    cta: "Saiba mais",
    action: "services",
  },
  {
    id: "cemiterios",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: "Nossos Cemitérios",
    description: "5 cemitérios municipais em São Paulo, nas regiões Leste, Oeste e Sul da cidade.",
    cta: "Ver cemitérios",
    action: "cemeteries",
  },
  {
    id: "plano",
    icon: (
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Plano Maya",
    description: "Planejamento funerário com assistência completa. A proteção que sua família merece.",
    cta: "Conhecer o plano",
    action: "plan",
  },
];

export function QuickAccess() {
  const navigate = useNavigate();
  const location = useLocation();

  const navigateToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      navigate("/");
    }
  };

  const handleClick = (action: string) => {
    if (action === "services") navigate("/servicos-funerarios");
    else if (action === "cemeteries") navigateToSection("cemiterios");
    else if (action === "plan") navigateToSection("plano-maya");
  };

  return (
    <section className="bg-[#F7F6F2]">
      <div className="max-w-[1338px] mx-auto md:px-[52px] py-0">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 divide-[#e0e0dc]">
          {cards.map((card, i) => (
            <ScrollReveal key={card.id} delay={i * 0.08}>
              <button
                onClick={() => handleClick(card.action)}
                className={`group w-full flex flex-col items-start gap-4 p-6 md:p-10 text-left hover:bg-white transition-colors duration-300 ${
                  card.id === "servicos"
                    ? "md:border-l md:border-r md:border-[#e0e0dc]"
                    : card.id === "cemiterios"
                    ? "md:border-r md:border-[#e0e0dc]"
                    : card.id === "plano"
                    ? "md:border-r md:border-[#e0e0dc]"
                    : ""
                }`}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-12 h-12 rounded-[8px] text-[#C8963E] transition-all duration-300 group-hover:bg-[rgba(200,150,62,0.20)] group-hover:border-[rgba(200,150,62,0.40)]"
                  style={{ background: "rgba(200,150,62,0.10)", border: "1px solid rgba(200,150,62,0.18)" }}
                >
                  {card.icon}
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2">
                  <p
                    className="text-[#0a0a0a]"
                    style={{
                      fontFamily: "'Sorts Mill Goudy', serif",
                      fontSize: "20px",
                      fontWeight: 400,
                      letterSpacing: "-0.3px",
                      lineHeight: "1.3",
                    }}
                  >
                    {card.title}
                  </p>
                  <p
                    className="text-[#6b6b6b]"
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "1.65",
                    }}
                  >
                    {card.description}
                  </p>
                </div>

                {/* CTA */}
                <span
                  className="inline-flex items-center gap-1.5 text-[#C8963E] transition-all duration-200 group-hover:gap-2.5"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "13px",
                    fontWeight: 600,
                    letterSpacing: "0.5px",
                  }}
                >
                  {card.cta}
                  <ArrowRight size={14} strokeWidth={2.2} />
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}