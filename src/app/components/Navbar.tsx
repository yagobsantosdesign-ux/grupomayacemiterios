import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { trackWhatsAppConversion } from "./GoogleAnalytics";
import { ChevronDown, Phone, Menu, X } from "lucide-react";
import logoImg from "figma:asset/9cd7c5467d03ab39a395856c6ffb12865b19d3e0.png";
import { scrollToSection, scrollToTop } from "../utils/scroll";

// ── Types ──────────────────────────────────────────────────────────────────

type SubItem = {
  label: string;
  href: string;
  section?: string;
  internal?: boolean;
  external?: boolean;
};

type NavItem = {
  label: string;
  href?: string;
  section?: string;
  internal?: boolean;
  sub?: SubItem[];
};

// ── Navigation config ──────────────────────────────────────────────────────

const NAV_ITEMS: NavItem[] = [
  {
    label: "Grupo Maya",
    sub: [
      { label: "Sobre o Grupo", href: "#sobre", section: "sobre" },
      { label: "Diferenciais", href: "#diferenciais", section: "diferenciais" },
    ],
  },
  {
    label: "Cemitérios",
    sub: [
      { label: "Cemitério Lajeado", href: "https://cemiteriolajeado.com.br", external: true },
      { label: "Cemitério da Lapa", href: "https://cemiteriolapa.com", external: true },
      { label: "Cemitério Campo Grande", href: "https://cemiteriocampogrande.com", external: true },
      { label: "Cemitério Parelheiros", href: "https://cemiterioparelheiros.com.br", external: true },
      { label: "Cemitério da Saudade", href: "https://cemiteriosaudade.com.br", external: true },
    ],
  },
  {
    label: "Serviços",
    sub: [
      { label: "Serviços Funerários", href: "/servicos-funerarios", internal: true },
      { label: "Serviços Cemiteriais", href: "/servicos-cemiteriais", internal: true },
    ],
  },
  {
    label: "Recadastramento",
    href: "/recadastramento-de-jazigos",
    internal: true,
  },
  {
    label: "Contato",
    href: "#contato",
    section: "contato",
  },
];

// ── Desktop Dropdown ────────────────────────────────────────────────────────

function DropdownMenu({
  items,
  onItemClick,
}: {
  items: SubItem[];
  onItemClick: (item: SubItem) => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -6 }}
      transition={{ duration: 0.16, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-[calc(100%+6px)] left-0 bg-white rounded-[6px] overflow-hidden z-50"
      style={{
        border: "1px solid #e8e8e4",
        boxShadow: "0 8px 28px rgba(0,0,0,0.09)",
        minWidth: "210px",
      }}
    >
      {items.map((item, i) => (
        <button
          key={item.label}
          onClick={() => onItemClick(item)}
          className="w-full flex items-center text-left px-5 py-3 hover:bg-[#fafaf8] transition-colors duration-150"
          style={{
            borderTop: i > 0 ? "1px solid #f0f0ec" : "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "13.5px",
              fontWeight: 400,
              lineHeight: "1.5",
              color: "#2D2D2D",
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

// ── Main Navbar ─────────────────────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const isHome = location.pathname === "/";
  // Navbar is transparent when at top of the homepage (hero is dark, overlays)
  const isTransparent = isHome && !scrolled;

  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  const navigateToSection = useCallback(
    (section: string) => {
      setMobileOpen(false);
      setOpenDropdown(null);
      if (location.pathname === "/") {
        scrollToSection(section);
      } else {
        sessionStorage.setItem("scrollTarget", section);
        navigate("/");
      }
    },
    [location.pathname, navigate]
  );

  const handleItemClick = useCallback(
    (item: NavItem | SubItem) => {
      setOpenDropdown(null);
      setMobileOpen(false);
      if (item.section) {
        navigateToSection(item.section);
        return;
      }
      if (item.internal && item.href) {
        if (!item.href.includes("#")) {
          scrollToTop(true);
        }
        navigate(item.href);
        return;
      }
      if (item.href?.startsWith("http")) {
        window.open(item.href, "_blank", "noopener,noreferrer");
        return;
      }
      if (item.href?.startsWith("#")) {
        navigateToSection(item.href.replace("#", ""));
      }
    },
    [navigate, navigateToSection]
  );

  const handleMouseEnter = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 140);
  };

  const handleDropdownAreaEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };

  return (
    <>
      {/* ══════════════════════════════════════════════════
          FIXED NAVBAR — single bar
      ══════════════════════════════════════════════════ */}
      <div
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: isTransparent ? "transparent" : "#ffffff",
          boxShadow: "none",
          borderBottom: isTransparent ? "none" : "1px solid #e8e8e4",
        }}
      >
        <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] flex items-center justify-between h-[68px]">

          {/* LEFT — Logo */}
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              if (location.pathname === "/") {
                scrollToTop(false);
              } else {
                navigate("/");
              }
            }}
            className="flex-shrink-0"
          >
            <img
              src={logoImg}
              alt="Grupo Maya"
              style={{
                height: "36px",
                width: "auto",
                display: "block",
                filter: isTransparent ? "brightness(0) invert(1)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
          </a>

          {/* CENTER — Nav items (desktop) */}
          <nav className="hidden md:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.sub && handleMouseEnter(item.label)}
                onMouseLeave={() => item.sub && handleMouseLeave()}
              >
                <button
                  onClick={() => !item.sub && handleItemClick(item)}
                  className={`flex items-center gap-1 px-3.5 py-2 rounded-[4px] transition-colors duration-150 ${
                    openDropdown === item.label
                      ? isTransparent ? "text-[#C8963E]" : "text-[#C8963E]"
                      : isTransparent
                        ? "text-white/80 hover:text-white"
                        : "text-[#2D2D2D] hover:text-[#C8963E]"
                  }`}
                >
                  <span
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      fontWeight: 500,
                      letterSpacing: "0.1px",
                      lineHeight: "1",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.sub && (
                    <ChevronDown
                      size={13}
                      strokeWidth={2}
                      className={`flex-shrink-0 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {item.sub && (
                  <AnimatePresence>
                    {openDropdown === item.label && (
                      <div
                        onMouseEnter={handleDropdownAreaEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        <DropdownMenu
                          items={item.sub}
                          onItemClick={handleItemClick}
                        />
                      </div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* RIGHT — CTA (desktop) + Hamburger (mobile) */}
          <div className="flex items-center gap-3">
            {/* CTA — desktop only */}
            <a
              href="https://wa.me/5511934223751"
              target="_blank"
              rel="noopener noreferrer"
              onClick={trackWhatsAppConversion}
              className="hidden md:flex items-center gap-2 px-4 py-2.5 rounded-[8px] transition-all duration-200 flex-shrink-0"
              style={{
                background: isTransparent ? "rgba(255,255,255,0.12)" : "#0a0a0a",
                border: isTransparent ? "1px solid rgba(255,255,255,0.22)" : "1px solid transparent",
                textDecoration: "none",
              }}
            >
              <Phone
                size={14}
                strokeWidth={2}
                style={{ color: "#ffffff", flexShrink: 0 }}
              />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  lineHeight: "1",
                  whiteSpace: "nowrap",
                  color: "#ffffff",
                }}
              >
                Atendimento 24H
              </span>
            </a>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden flex items-center transition-opacity hover:opacity-60"
              style={{ color: isTransparent ? "#ffffff" : "#0a0a0a" }}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Abrir menu"
            >
              {mobileOpen ? (
                <X size={22} strokeWidth={1.8} />
              ) : (
                <Menu size={22} strokeWidth={1.8} />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════
          MOBILE MENU — full-screen overlay
      ══════════════════════════════════════════════════ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.26, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-0 right-0 z-40 bg-white overflow-y-auto"
            style={{ top: "68px", bottom: 0 }}
          >
            <div className="max-w-[1338px] mx-auto px-5 py-4">
              {NAV_ITEMS.map((item, i) => (
                <div
                  key={item.label}
                  style={{
                    borderBottom:
                      i < NAV_ITEMS.length - 1
                        ? "1px solid rgba(229,229,229,0.6)"
                        : "none",
                  }}
                >
                  <button
                    className="w-full flex items-center justify-between py-5 text-[#2D2D2D] hover:text-[#C8963E] transition-colors duration-150"
                    onClick={() => {
                      if (item.sub) {
                        setMobileExpanded(
                          mobileExpanded === item.label ? null : item.label
                        );
                      } else {
                        handleItemClick(item);
                      }
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Sorts Mill Goudy', serif",
                        fontSize: "26px",
                        fontWeight: 400,
                        letterSpacing: "-0.5px",
                        lineHeight: "1.2",
                      }}
                    >
                      {item.label}
                    </span>
                    {item.sub && (
                      <ChevronDown
                        size={18}
                        strokeWidth={1.8}
                        className={`flex-shrink-0 transition-transform duration-200 ${
                          mobileExpanded === item.label ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  <AnimatePresence>
                    {item.sub && mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col pb-4 pl-2">
                          {item.sub.map((sub) => (
                            <button
                              key={sub.label}
                              onClick={() => handleItemClick(sub)}
                              className="flex items-center text-left py-2.5 text-[#575757] hover:text-[#C8963E] transition-colors duration-150"
                              style={{
                                fontFamily: "'Inter', sans-serif",
                                fontSize: "15px",
                                fontWeight: 400,
                                lineHeight: "1.4",
                              }}
                            >
                              <span className="w-5 mr-2 flex-shrink-0 text-[#e0e0dc]">—</span>
                              {sub.label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}

              {/* CTA in mobile menu */}
              <div className="pt-8 pb-4">
                <a
                  href="https://wa.me/5511934223751"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={trackWhatsAppConversion}
                  className="flex items-center gap-2.5 w-fit px-5 py-3 rounded-[8px]"
                  style={{
                    background: "#0a0a0a",
                    color: "#ffffff",
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  <Phone size={15} strokeWidth={2} />
                  Atendimento 24H
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30"
            style={{ background: "rgba(10,10,10,0.18)", backdropFilter: "blur(2px)" }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
