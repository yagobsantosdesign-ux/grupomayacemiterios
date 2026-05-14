import imgLogos1 from "figma:asset/fcc44f60bdc2306d6ee576b97d7d54d9e9ae234e.png";
import { Link, useLocation, useNavigate } from "react-router";

const institutionalLinks = ["Sobre nós", "Cemitérios", "Serviços"];
const legalLinks = ["Política de Privacidade", "Termos de Uso"];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleSectionLink = (sectionId: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (location.pathname === "/") {
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    } else {
      sessionStorage.setItem("scrollTarget", sectionId);
      navigate("/");
    }
  };

  return (
    <footer
      className="flex flex-col items-center w-full"
      style={{ background: "#0a0a0a", gap: "48px", paddingTop: "56px", paddingBottom: "56px" }}
    >
      {/* ── Top: Logo + Nav columns ── */}
      <div
        className="mx-auto px-5 md:px-[52px] w-full"
        style={{ maxWidth: "1338px" }}
      >
        <div
          className="flex flex-col lg:flex-row items-start justify-between w-full"
          style={{ gap: "48px" }}
        >
          {/* Brand */}
          <div
            className="flex flex-col items-start w-full lg:w-[387px] lg:shrink-0"
            style={{ gap: "20px" }}
          >
            <div className="w-full" style={{ maxWidth: "280px", height: "32px" }}>
              <img
                src={imgLogos1}
                alt="Grupo Maya logos"
                className="w-full h-full object-contain object-left"
              />
            </div>
            <p
              style={{
                fontFamily: "'Google Sans', 'Inter', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                lineHeight: "22px",
                color: "#6b6b6b",
                wordBreak: "break-word",
              }}
            >
              Viva suas lembranças. O Grupo Maya administra cemitérios municipais em São Paulo com cuidado, respeito e tradição desde 1904.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-row flex-wrap" style={{ gap: "24px 32px" }}>
            {/* Institucional */}
            <div className="flex flex-col items-start" style={{ gap: "16px", minWidth: "140px" }}>
              <p
                style={{
                  fontFamily: "'Google Sans', 'Google Sans', 'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  lineHeight: "21px",
                }}
              >
                Institucional
              </p>
              <div className="flex flex-col items-start" style={{ gap: "10px" }}>
                {institutionalLinks.map((link) => (
                  <a
                    key={link}
                    href={
                      link === "Sobre nós" ? "#sobre"
                      : link === "Serviços" ? "/servicos-funerarios"
                      : link === "Cemitérios" ? "#cemiterios"
                      : "#"
                    }
                    onClick={
                      link === "Sobre nós" ? handleSectionLink("sobre")
                      : link === "Serviços" ? (e: React.MouseEvent) => { e.preventDefault(); navigate("/servicos-funerarios"); }
                      : link === "Cemitérios" ? handleSectionLink("cemiterios")
                      : undefined
                    }
                    target={undefined}
                    rel={undefined}
                    style={{
                      fontFamily: "'Google Sans', 'Inter', sans-serif",
                      fontSize: "14px",
                      fontWeight: 400,
                      lineHeight: "21px",
                      color: "#6b6b6b",
                      textDecoration: "none",
                      transition: "color 0.2s",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = "#C8963E")}
                    onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-start" style={{ gap: "16px", minWidth: "140px" }}>
              <p
                style={{
                  fontFamily: "'Google Sans', 'Google Sans', 'Inter', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  letterSpacing: "0.5px",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  lineHeight: "21px",
                }}
              >
                Legal
              </p>
              <div className="flex flex-col items-start" style={{ gap: "10px" }}>
                {legalLinks.map((link) => (
                  link === "Política de Privacidade" ? (
                    <Link
                      key={link}
                      to="/politica-de-privacidade"
                      style={{
                        fontFamily: "'Google Sans', 'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#6b6b6b",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C8963E")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                    >
                      {link}
                    </Link>
                  ) : link === "Termos de Uso" ? (
                    <Link
                      key={link}
                      to="/termos"
                      style={{
                        fontFamily: "'Google Sans', 'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#6b6b6b",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C8963E")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                    >
                      {link}
                    </Link>
                  ) : (
                    <a
                      key={link}
                      href="#"
                      style={{
                        fontFamily: "'Google Sans', 'Inter', sans-serif",
                        fontSize: "14px",
                        fontWeight: 400,
                        lineHeight: "21px",
                        color: "#6b6b6b",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C8963E")}
                      onMouseLeave={e => (e.currentTarget.style.color = "#6b6b6b")}
                    >
                      {link}
                    </a>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="w-full"
        style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
      >
        <div
          className="mx-auto px-5 md:px-[52px] flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-[8px] md:gap-0"
          style={{ maxWidth: "1338px", paddingTop: "20px", paddingBottom: "20px" }}
        >
          <p
            style={{
              fontFamily: "'Google Sans', 'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "19.5px",
              color: "#6b6b6b",
            }}
          >
            © 2026 Grupo Maya. Todos os direitos reservados.
          </p>
          <p
            style={{
              fontFamily: "'Google Sans', 'Inter', sans-serif",
              fontSize: "13px",
              fontWeight: 400,
              lineHeight: "19.5px",
              color: "#6b6b6b",
            }}
          >
            Maya Serviços de Administração Cemiterial Ltda · CNPJ: 00.000.000/0001-00
          </p>
        </div>
      </div>
    </footer>
  );
}