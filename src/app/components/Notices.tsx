import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, FileText } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const notices = [
  {
    id: "chamamento",
    title: "Edital de Chamamento Público",
    description:
      "Edital de Chamamento Público nº 001/2024 para concessão de espaços nos cemitérios municipais administrados pelo Grupo Maya. Confira os requisitos, prazos e condições de participação.",
    links: [
      { label: "Edital completo (PDF)", href: "#" },
      { label: "Retificação nº 01 (PDF)", href: "#" },
    ],
  },
  {
    id: "abandono",
    title: "Concessões em estado de abandono e ruína",
    description:
      "Relação de jazigos e concessões identificados em estado de abandono, deterioração ou ruína nos cemitérios administrados pelo Grupo Maya. Os titulares devem regularizar a situação junto à administração.",
    links: [
      { label: "Lista de concessões (PDF)", href: "#" },
      { label: "Como regularizar (PDF)", href: "#" },
    ],
  },
  {
    id: "informativos",
    title: "Informativos da Prefeitura de São Paulo",
    description:
      "Comunicados oficiais e informativos da Secretaria Municipal de Serviços e Obras (SMSUB) e do Departamento de Parques e Áreas Verdes (DEPAVE) referentes à gestão de cemitérios municipais.",
    links: [
      { label: "Portaria SMSUB nº 42/2024 (PDF)", href: "#" },
      { label: "Resolução DEPAVE 2024 (PDF)", href: "#" },
    ],
  },
];

function NoticeItem({ notice, isOpen, onToggle }: {
  notice: typeof notices[0];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className="border border-[#e0e0dc] rounded-[4px] overflow-hidden"
      style={{ background: isOpen ? "#ffffff" : "#fbfbf9" }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors duration-150 hover:bg-white"
      >
        <div className="flex items-center gap-3.5">
          <FileText size={16} strokeWidth={1.8} className="text-[#C8963E] flex-shrink-0" />
          <span
            style={{
              fontFamily: "'Sorts Mill Goudy', serif",
              fontSize: "18px",
              fontWeight: 400,
              letterSpacing: "-0.3px",
              lineHeight: "1.3",
              color: "#0a0a0a",
            }}
          >
            {notice.title}
          </span>
        </div>
        <ChevronDown
          size={18}
          strokeWidth={1.8}
          className={`flex-shrink-0 text-[#9b9b96] transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Body */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div
              className="px-6 pb-6"
              style={{ borderTop: "1px solid #f0f0ec" }}
            >
              <p
                className="mt-4 mb-5"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "14.5px",
                  fontWeight: 400,
                  lineHeight: "1.7",
                  color: "#575757",
                }}
              >
                {notice.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {notice.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-[4px] transition-all duration-150 hover:bg-[#C8963E] hover:text-white"
                    style={{
                      border: "1px solid #C8963E",
                      textDecoration: "none",
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "12px",
                      fontWeight: 600,
                      color: "#C8963E",
                      letterSpacing: "0.3px",
                    }}
                  >
                    <FileText size={13} strokeWidth={2} />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Notices() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="avisos"
      className="py-20 md:py-24"
      style={{ background: "#F7F6F2" }}
    >
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px]">

        {/* Header */}
        <div className="flex flex-col gap-4 mb-10 max-w-[560px]">
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
              AVISOS OFICIAIS
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "clamp(28px, 3vw, 48px)",
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: "-1px",
                color: "#0a0a0a",
              }}
            >
              Informativos e editais oficiais
            </h2>
          </ScrollReveal>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {notices.map((notice, i) => (
            <ScrollReveal key={notice.id} delay={0.06 + i * 0.06}>
              <NoticeItem
                notice={notice}
                isOpen={openId === notice.id}
                onToggle={() => setOpenId(openId === notice.id ? null : notice.id)}
              />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}