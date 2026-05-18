import { Phone, MessageCircle, MapPin, ExternalLink } from "lucide-react";
import { trackWhatsAppConversion } from "../components/GoogleAnalytics";
import { PageHeroBanner } from "../components/PageHeroBanner";

const LEGAL_BG = "https://images.unsplash.com/photo-1773760504373-70a9098064c6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjZW1ldGVyeSUyMGdhcmRlbiUyMHBlYWNlZnVsJTIwbmF0dXJlfGVufDF8fHx8MTc3NDU0NzExNHww&ixlib=rb-4.1.0&q=80&w=1080";

const sections = [
  {
    id: 1,
    title: "Quem somos",
    content: (
      <>
        <p>
          O <strong>Grupo Maya</strong> (Cemitérios e Crematórios São Paulo SPE S.A., CNPJ 48.222.338/0001-14),
          com sede operacional na <strong>Av. Pacaembu, 1396 — Pacaembu, São Paulo – SP</strong>,
          é o responsável pelo tratamento dos dados pessoais coletados por meio deste site e dos nossos
          canais de atendimento.
        </p>
        <p>
          Esta Política de Privacidade tem como objetivo explicar de forma clara e transparente como
          coletamos, utilizamos, armazenamos e protegemos seus dados pessoais, em conformidade com a{" "}
          <strong>Lei Geral de Proteção de Dados (LGPD – Lei nº 13.709/2018)</strong>.
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Quais dados coletamos",
    content: (
      <>
        <p>Podemos coletar os seguintes dados pessoais quando você interage com nosso site ou nos contata:</p>
        <ul>
          <li>
            <strong>Dados de identificação:</strong> nome completo, e-mail, número de telefone ou WhatsApp;
          </li>
          <li>
            <strong>Dados de comunicação:</strong> mensagens enviadas por meio do formulário de contato ou pelo WhatsApp;
          </li>
          <li>
            <strong>Dados de navegação:</strong> endereço IP, tipo de navegador, páginas visitadas, data e hora de acesso
            (coletados automaticamente por cookies e ferramentas de análise).
          </li>
        </ul>
        <p className="notice">
          Não coletamos dados sensíveis (como dados de saúde, biométricos ou religiosos) sem o seu consentimento explícito.
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Como utilizamos seus dados",
    content: (
      <>
        <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
        <ul>
          <li>Responder às suas solicitações, dúvidas e pedidos de orçamento;</li>
          <li>Prestar os serviços funerários e de sepultamento contratados;</li>
          <li>Entrar em contato por telefone, WhatsApp ou e-mail;</li>
          <li>Melhorar a experiência de navegação no site;</li>
          <li>Cumprir obrigações legais e regulatórias.</li>
        </ul>
        <p className="notice">Não utilizamos seus dados para fins de marketing sem o seu consentimento.</p>
      </>
    ),
  },
  {
    id: 4,
    title: "Base legal para o tratamento",
    content: (
      <>
        <p>O tratamento dos seus dados pessoais se baseia nas seguintes hipóteses previstas pela LGPD:</p>
        <ul>
          <li><strong>Execução de contrato:</strong> quando necessário para a prestação dos nossos serviços;</li>
          <li><strong>Cumprimento de obrigação legal:</strong> quando exigido por lei ou regulamento;</li>
          <li>
            <strong>Consentimento:</strong> quando você nos fornece seus dados voluntariamente por meio dos
            formulários ou canais de contato;
          </li>
          <li>
            <strong>Legítimo interesse:</strong> para melhorar nossos serviços e garantir a segurança do site.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 5,
    title: "Compartilhamento de dados",
    content: (
      <>
        <p>
          O Grupo Maya <strong>não vende nem comercializa</strong> seus dados pessoais.
          Podemos compartilhá-los apenas nas seguintes situações:
        </p>
        <ul>
          <li>
            Com prestadores de serviços terceirizados que auxiliam na operação do site (como hospedagem
            e ferramentas de análise), sempre sob compromisso de confidencialidade;
          </li>
          <li>Com autoridades públicas, quando exigido por lei, decisão judicial ou regulatória;</li>
          <li>
            Com parceiros operacionais necessários para a execução dos serviços funerários contratados.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: 6,
    title: "Cookies e tecnologias de rastreamento",
    content: (
      <>
        <p>
          Nosso site pode utilizar cookies e tecnologias similares para melhorar sua experiência de
          navegação, analisar o tráfego e entender como os visitantes utilizam o site.
        </p>
        <p>
          Você pode configurar seu navegador para recusar cookies, mas isso pode afetar algumas
          funcionalidades do site.
        </p>
      </>
    ),
  },
  {
    id: 7,
    title: "Armazenamento e segurança dos dados",
    content: (
      <>
        <p>
          Seus dados são armazenados em ambientes seguros e protegidos por medidas técnicas e
          organizacionais adequadas para prevenir acessos não autorizados, perda, alteração ou
          divulgação indevida.
        </p>
        <p>
          Os dados serão mantidos pelo tempo necessário para cumprir as finalidades descritas nesta
          política ou para atender às exigências legais aplicáveis.
        </p>
      </>
    ),
  },
  {
    id: 8,
    title: "Seus direitos como titular dos dados",
    content: (
      <>
        <p>De acordo com a LGPD, você tem os seguintes direitos em relação aos seus dados pessoais:</p>
        <ul>
          <li><strong>Acesso:</strong> solicitar a confirmação da existência e o acesso aos seus dados;</li>
          <li><strong>Correção:</strong> solicitar a correção de dados incompletos, inexatos ou desatualizados;</li>
          <li><strong>Exclusão:</strong> solicitar a exclusão dos dados tratados com base no seu consentimento;</li>
          <li><strong>Portabilidade:</strong> solicitar a portabilidade dos seus dados para outro fornecedor;</li>
          <li><strong>Revogação do consentimento:</strong> retirar o consentimento a qualquer momento;</li>
          <li><strong>Oposição:</strong> se opor ao tratamento de dados em determinadas situações;</li>
          <li>
            <strong>Informação:</strong> solicitar informações sobre com quem seus dados foram compartilhados.
          </li>
        </ul>
        <p>Para exercer qualquer um desses direitos, entre em contato conosco pelos canais indicados na seção abaixo.</p>
      </>
    ),
  },
  {
    id: 10,
    title: "Alterações nesta política",
    content: (
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente. Recomendamos que você a
        consulte regularmente. A data da última atualização estará sempre indicada no início do documento.
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#fbfbf9]">
      {/* ── Hero ── */}
      <PageHeroBanner
        badge="LEGAL · GRUPO MAYA"
        title="Política de Privacidade"
        description="Última atualização: fevereiro de 2025. Saiba como o Grupo Maya coleta, utiliza e protege seus dados em conformidade com a LGPD."
        image={LEGAL_BG}
      />

      {/* ── Main content ── */}
      <main
        className="mx-auto px-5 md:px-0"
        style={{ maxWidth: "760px", paddingTop: "64px", paddingBottom: "96px" }}
      >
        {/* Sections */}
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
                    fontFamily: "'Google Sans', 'Inter', sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#C8963E",
                    letterSpacing: "2.4px",
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

        {/* ── Section 9: Contact card ── */}
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
              09
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
              Contato e encarregado de dados (DPO)
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
              Para dúvidas, solicitações ou reclamações relacionadas ao tratamento dos seus dados
              pessoais, entre em contato:
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
                  value: "0800 042 9020",
                  href: "tel:08000429020",
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
                  value: "Av. Pacaembu, 1396 — Pacaembu, São Paulo, SP",
                  href: "https://maps.google.com/?q=Av.+Pacaembu,+1396,+Pacaembu,+São+Paulo",
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
                    borderRadius: "4px",
                    textDecoration: "none",
                    transition: "border-color 0.2s, box-shadow 0.2s",
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#C8963E";
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(200,150,62,0.1)";
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#e8e8e4";
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  <span style={{ color: "#C8963E" }}>{item.icon}</span>
                  <span
                    style={{
                      fontFamily: "'Google Sans', 'Inter', sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "2.4px",
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

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "14px",
                lineHeight: "24px",
                color: "#888",
              }}
            >
              Você também pode registrar reclamações junto à{" "}
              <strong style={{ color: "#575757" }}>
                Autoridade Nacional de Proteção de Dados (ANPD)
              </strong>{" "}
              pelo site{" "}
              <a
                href="https://www.gov.br/anpd"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#C8963E",
                  textDecoration: "none",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                www.gov.br/anpd
                <ExternalLink size={11} />
              </a>
              .
            </p>
          </div>
        </div>

        {/* ── Closing tagline ── */}
        <div
          style={{
            marginTop: "16px",
            padding: "28px 32px",
            backgroundColor: "#2B5E3A",
            borderRadius: "4px",
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
            Grupo Maya — Cuidamos de tudo para que você possa se despedir com tranquilidade.
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