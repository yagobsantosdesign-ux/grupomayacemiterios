import { Phone, MessageCircle, MapPin } from "lucide-react";
import { useIsMobile } from "../hooks/useIsMobile";
import { trackWhatsAppConversion } from "../components/GoogleAnalytics";
import { PageHeroBanner } from "../components/PageHeroBanner";

const LEGAL_BG = "https://images.unsplash.com/photo-1773760504373-70a9098064c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyMGdhcmRlbiUyMHBlYWNlZnVsJTIwbmF0dXJlfGVufDF8fHx8MTc3NDU0NzExNHww&ixlib=rb-4.1.0&q=80&w=1080";

const sections = [
  {
    id: 1,
    title: "Aceitação dos Termos",
    content: (
      <>
        <p>
          Ao acessar e utilizar o site <strong>cemiteriocampogrande.com</strong>, você declara que leu,
          compreendeu e concorda com os presentes Termos de Serviço. Caso não concorde com qualquer
          disposição aqui prevista, recomendamos que não utilize nosso site.
        </p>
        <p>
          Estes Termos se aplicam a todos os visitantes, usuários e demais pessoas que acessem ou
          utilizem os serviços oferecidos pelo Cemitério Lajeado.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Sobre o Cemitério Lajeado",
    content: (
      <>
        <p>
          O Cemitério Lajeado, administrado pelo <strong>Grupo Maya</strong>, é uma empresa
          prestadora de serviços funerários localizada na{" "}
          <strong>Estrada do Lajeado Velho, nº 1490 – Vila Independente, São Paulo – SP</strong>.
        </p>
        <p>Atuamos com os seguintes serviços:</p>
        <ul>
          <li>Funeral completo e sepultamento</li>
          <li>Traslado funerário</li>
          <li>Coroa de flores</li>
          <li>Cremação</li>
          <li>Exumação e reforma de jazigos</li>
          <li>Zeladoria e jardinagem</li>
          <li>Venda e locação de jazigos verticais ou tradicionais</li>
          <li>Lápides personalizadas</li>
          <li>Recadastramento de sepultura, jazigo ou ossuário</li>
          <li>Gestão e liberação de documentação funerária</li>
          <li>Atendimento 24 horas</li>
        </ul>
      </>
    ),
  },
  {
    id: 3,
    title: "Uso do Site",
    content: (
      <>
        <p>
          O site <strong>cemiteriocampogrande.com</strong> tem caráter informativo e comercial,
          destinado a apresentar nossos serviços e facilitar o contato com nossa equipe.
        </p>
        <p>Ao utilizar o site, você se compromete a:</p>
        <ul>
          <li>Fornecer informações verdadeiras, precisas e atualizadas nos formulários de contato;</li>
          <li>Não utilizar o site para fins ilícitos, abusivos ou que violem direitos de terceiros;</li>
          <li>Não tentar acessar áreas restritas, sistemas ou dados sem autorização;</li>
          <li>Não reproduzir, copiar ou distribuir o conteúdo do site sem autorização prévia por escrito.</li>
        </ul>
      </>
    ),
  },
  {
    id: 4,
    title: "Orçamentos e Contratação de Serviços",
    content: (
      <>
        <p>
          As informações disponíveis no site são de caráter geral e ilustrativo. Os valores, condições
          e detalhes dos serviços são definidos individualmente, conforme a necessidade de cada família,
          e comunicados diretamente por nossa equipe de atendimento.
        </p>
        <p>
          O envio de uma mensagem pelo formulário de contato ou pelo WhatsApp <strong>não constitui
          contrato ou reserva de serviço</strong>. A contratação formal ocorre somente após acordo
          expresso entre as partes e emissão do documento contratual pertinente.
        </p>
      </>
    ),
  },
  {
    id: 5,
    title: "Atendimento 24 Horas",
    content: (
      <>
        <p>
          O Cemitério Lajeado disponibiliza atendimento 24 horas por telefone e WhatsApp para
          situações de urgência. O atendimento pelo site (formulário de contato) está sujeito ao
          horário de disponibilidade da equipe responsável e pode não ter resposta imediata.
        </p>
        <p className="notice">
          Para situações urgentes, recomendamos o contato direto pelo telefone{" "}
          <strong>(11) 3195-2733</strong> ou WhatsApp <strong>(11) 93422-3751</strong>.
        </p>
      </>
    ),
  },
  {
    id: 6,
    title: "Propriedade Intelectual",
    content: (
      <>
        <p>
          Todo o conteúdo disponível neste site — incluindo textos, imagens, logotipos, layout e demais
          elementos — é de propriedade do Cemitério Lajeado ou de seus respectivos titulares,
          protegido pela legislação brasileira de direitos autorais e propriedade intelectual.
        </p>
        <p>
          É vedada a reprodução, distribuição, modificação ou uso comercial de qualquer conteúdo do
          site sem autorização prévia e expressa.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Limitação de Responsabilidade",
    content: (
      <>
        <p>O Cemitério Lajeado não se responsabiliza por:</p>
        <ul>
          <li>Danos decorrentes do uso inadequado das informações disponíveis no site;</li>
          <li>Indisponibilidade temporária do site por razões técnicas, manutenção ou força maior;</li>
          <li>Conteúdo de sites de terceiros eventualmente linkados a partir deste site;</li>
          <li>Informações desatualizadas que não tenham sido tempestivamente corrigidas.</li>
        </ul>
        <p>
          Nos esforçamos para manter o site sempre disponível e as informações atualizadas, mas não
          garantimos a ausência de erros ou interrupções.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Links para Sites de Terceiros",
    content: (
      <p>
        Nosso site pode conter links para sites externos, como redes sociais ou parceiros. Esses links
        são fornecidos apenas para sua conveniência, e o Cemitério Lajeado não tem controle sobre
        o conteúdo, políticas ou práticas desses sites, não se responsabilizando por eles.
      </p>
    ),
  },
  {
    id: 9,
    title: "Privacidade",
    content: (
      <p>
        O tratamento dos dados pessoais coletados por meio deste site é regido pela nossa{" "}
        <strong>Política de Privacidade</strong>, que complementa estes Termos de Serviço e deve ser
        lida em conjunto com eles.
      </p>
    ),
  },
  {
    id: 10,
    title: "Modificações nos Termos",
    content: (
      <p>
        O Cemitério Lajeado reserva-se o direito de alterar estes Termos de Serviço a qualquer
        momento, sem aviso prévio. As alterações entrarão em vigor a partir da data de publicação no
        site. O uso continuado do site após eventuais alterações implica a aceitação dos novos termos.
      </p>
    ),
  },
  {
    id: 11,
    title: "Legislação Aplicável e Foro",
    content: (
      <p>
        Estes Termos de Serviço são regidos pelas leis da República Federativa do Brasil. Fica eleito o
        foro da <strong>Comarca de São Paulo – SP</strong> para dirimir quaisquer controvérsias
        decorrentes deste instrumento, com renúncia a qualquer outro, por mais privilegiado que seja.
      </p>
    ),
  },
];

export default function Terms() {
  const isMobile = useIsMobile();

  return (
    <div className="bg-[#fbfbf9]">
      {/* ── Hero ── */}
      <PageHeroBanner
        badge="LEGAL · GRUPO MAYA"
        title="Termos de Serviço"
        description="Última atualização: fevereiro de 2025. Leia as condições de uso do site e dos serviços do Cemitério Lajeado."
        image={LEGAL_BG}
      />

      {/* ── Main content ── */}
      <main
        className="mx-auto px-5 md:px-0"
        style={{ maxWidth: "760px", paddingTop: "64px", paddingBottom: "96px" }}
      >
        {/* Sections 1–11 */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {sections.map((section, i) => (
            <div
              key={section.id}
              style={{
                borderTop: i === 0 ? "none" : "1px solid #e8e8e4",
                paddingTop: i === 0 ? "0" : "40px",
                paddingBottom: "40px",
              }}
            >
              {/* Section number + title */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "14px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    color: "#C8963E",
                    letterSpacing: "1.5px",
                    minWidth: "20px",
                    flexShrink: 0,
                  }}
                >
                  {String(section.id).padStart(2, "0")}
                </span>
                <h2
                  style={{
                    fontFamily: "'Sorts Mill Goudy', serif",
                    fontSize: "30px",
                    fontWeight: 400,
                    color: "#0a0a0a",
                    lineHeight: "36px",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {section.title}
                </h2>
              </div>

              {/* Section body */}
              <div
                className="policy-body"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  lineHeight: "27px",
                  color: "#575757",
                  paddingLeft: "34px",
                }}
              >
                {section.content}
              </div>
            </div>
          ))}
        </div>

        {/* ── Section 12: Contact card ── */}
        <div
          style={{
            borderTop: "1px solid #e8e8e4",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: "14px",
              marginBottom: "20px",
            }}
          >
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                color: "#C8963E",
                letterSpacing: "1.5px",
                minWidth: "20px",
                flexShrink: 0,
              }}
            >
              12
            </span>
            <h2
              style={{
                fontFamily: "'Sorts Mill Goudy', serif",
                fontSize: "30px",
                fontWeight: 400,
                color: "#0a0a0a",
                lineHeight: "36px",
                letterSpacing: "-0.5px",
              }}
            >
              Contato
            </h2>
          </div>

          <div style={{ paddingLeft: "34px" }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "15px",
                lineHeight: "27px",
                color: "#575757",
                marginBottom: "24px",
              }}
            >
              Em caso de dúvidas sobre estes Termos de Serviço, entre em contato conosco:
            </p>

            {/* Contact cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px",
                marginBottom: "24px",
              }}
            >
              {[
                {
                  icon: <Phone size={15} />,
                  label: "Telefone",
                  value: "(11) 3195-2733",
                  href: "tel:+551131952733",
                },
                {
                  icon: <MessageCircle size={15} />,
                  label: "WhatsApp",
                  value: "(11) 93422-3751",
                  href: "https://wa.me/5511934223751",
                },
                {
                  icon: <MapPin size={15} />,
                  label: "Endereço",
                  value: "R. Bergson, 347 – Vila Leopoldina, SP, CEP 05301-060",
                  href: "https://maps.google.com/?q=R.+Bergson,+347,+Vila+Leopoldina,+São+Paulo",
                },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  onClick={item.label === "WhatsApp" ? trackWhatsAppConversion : undefined}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "6px",
                    padding: "16px 18px",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e8e8e4",
                    borderRadius: "6px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#C8963E";
                    (e.currentTarget as HTMLElement).style.boxShadow =
                      "0 4px 16px rgba(200,150,62,0.1)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e8e8e4";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span style={{ color: "#C8963E" }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 500,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      color: "#aaa",
                    }}
                  >
                    {item.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "14px",
                      color: "#2d2d2d",
                      lineHeight: "20px",
                    }}
                  >
                    {item.value}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Closing tagline ── */}
        <div
          style={{
            marginTop: "16px",
            padding: "28px 32px",
            backgroundColor: "#2B5E3A",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontFamily: "'Sorts Mill Goudy', serif",
              fontSize: "17px",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.85)",
              lineHeight: 1.6,
            }}
          >
            Cemitério Lajeado — Cuidamos de tudo para que você possa se despedir com tranquilidade.
          </p>
        </div>
      </main>

      {/* ── Inline styles for policy body ── */}
      <style>{`
        .policy-body p { margin-bottom: 14px; }
        .policy-body p:last-child { margin-bottom: 0; }
        .policy-body ul {
          list-style: none;
          padding: 0;
          margin: 14px 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .policy-body ul li {
          padding-left: 16px;
          position: relative;
        }
        .policy-body ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 11px;
          width: 5px;
          height: 1px;
          background-color: #C8963E;
        }
        .policy-body p.notice {
          margin-top: 18px;
          padding: 14px 18px;
          background-color: #f7f3ec;
          border-left: 2px solid #C8963E;
          border-radius: 0 4px 4px 0;
          color: #6b6b6b;
          font-size: 14px;
          line-height: 24px;
        }
        .policy-body strong { color: #2d2d2d; font-weight: 500; }
      `}</style>
    </div>
  );
}