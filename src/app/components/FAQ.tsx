import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";
import { useIsMobile } from "../hooks/useIsMobile";

const faqs = [
  {
    question: "Por que devo realizar o recadastramento de jazigos?",
    answer:
      "O recadastramento é importante para manter as informações organizadas e garantir a regularidade das informações. Além disso, ele assegura a continuidade dos seus direitos sobre o jazigo e facilita o acesso a serviços futuros.",
  },
  {
    question: "Quais são os documentos obrigatórios para fazer o recadastramento?",
    answer:
      "É necessário apresentar a carta de concessão ou documento que comprove a titularidade, documento de identificação (RG ou CNH) e comprovante de residência atualizado.",
  },
  {
    question: "O titular do jazigo faleceu. Quais documentos o sucessor deve apresentar?",
    answer:
      "Em caso de falecimento do titular, os direitos são transferidos para os sucessores. Devem ser apresentados: a carta de concessão/titularidade, a certidão de óbito do titular falecido, além do documento de identificação (RG/CNH) e comprovante de residência do próprio sucessor.",
  },
  {
    question: "Quais cemitérios exigem esse recadastramento obrigatório?",
    answer:
      "O processo é obrigatório para todos os cinco cemitérios municipais administrados pela nossa concessionária em São Paulo: Campo Grande, Lageado, Lapa, Parelheiros e Saudade.",
  },
  {
    question: "Quais são os horários e locais para fazer o recadastramento?",
    answer:
      "O atendimento presencial ocorre diretamente na administração de cada um dos cemitérios citados, todos os dias, das 08h às 18h. Também disponibilizamos a opção de recadastramento online por meio do formulário digital em nosso site oficial.",
  },
  {
    question: "Quais são os canais oficiais para solicitar serviços de sepultamento ou atendimento 24h?",
    answer:
      "O contato imediato pode ser feito a qualquer hora do dia ou da noite por meio da nossa Central de Atendimento Telefônico pelo número 0800 042 9020.",
  },
  {
    question: "Como funciona a cobrança e onde posso consultar os valores dos serviços?",
    answer:
      "O Grupo Maya trabalha estritamente com a tabela de tarifas oficiais regulamentadas e estipuladas pela Prefeitura de São Paulo. Os valores vigentes de taxas cemiteriais e funerárias estão disponíveis para consulta pública e download diretamente na aba de Tabela de Preços do nosso site.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        borderBottom: "1px solid rgba(0,0,0,0.1)",
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-start justify-between gap-6 py-6 text-left"
        style={{ background: "none", border: "none", cursor: "pointer" }}
      >
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "1.5",
            color: "#111",
          }}
        >
          {question}
        </span>
        <span
          style={{
            flexShrink: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "transform 0.25s",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            color: "#C8963E",
            fontSize: "26px",
            lineHeight: 1,
          }}
        >
          +
        </span>
      </button>
      <div
        style={{
          maxHeight: open ? "400px" : "0px",
          overflow: "hidden",
          transition: "max-height 0.35s ease",
        }}
      >
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: "1.75",
            color: "rgba(0,0,0,0.6)",
            paddingBottom: "24px",
            maxWidth: "720px",
            textWrap: "pretty",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQ() {
  const isMobile = useIsMobile();

  return (
    <section id="faq" style={{ background: "#f7f5f0" }}>
      <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] py-24 md:py-32">

        <ScrollReveal>
          <div className="flex flex-col md:flex-row gap-6 md:gap-[60px] mb-14">
            <p
              className="md:w-[220px] md:flex-shrink-0 md:pt-1"
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2.4px",
                textTransform: "uppercase",
                color: "rgba(0,0,0,0.4)",
              }}
            >
              Dúvidas Frequentes
            </p>
            <div className="flex-1">
              <h2
                style={{
                  fontFamily: "'Sorts Mill Goudy', serif",
                  fontSize: isMobile ? "36px" : "52px",
                  fontWeight: 400,
                  lineHeight: 1.1,
                  letterSpacing: "-1.5px",
                  color: "#111",
                  maxWidth: "560px",
                  textWrap: "balance",
                }}
              >
                Perguntas Frequentes
              </h2>
            </div>
          </div>
        </ScrollReveal>

        <div style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}>
          {faqs.map((faq, i) => (
            <ScrollReveal key={i} delay={i * 0.04}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
