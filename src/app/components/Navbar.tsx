import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate, useLocation } from "react-router";
import { trackWhatsAppConversion } from "./GoogleAnalytics";
import { ChevronDown, Phone, Menu, X, Facebook, Instagram, Linkedin } from "lucide-react";
import logoImg from "figma:asset/9cd7c5467d03ab39a395856c6ffb12865b19d3e0.png";

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
      { label: "Cemitério Lajeado", href: "#cemiterios", section: "cemiterios" },
      { label: "Cemitério da Lapa", href: "#cemiterios", section: "cemiterios" },
      { label: "Cemitério Campo Grande", href: "#cemiterios", section: "cemiterios" },
      { label: "Cemitério Parelheiros", href: "#cemiterios", section: "cemiterios" },
      { label: "Cemitério da Saudade", href: "#cemiterios", section: "cemiterios" },
    ],
  },
  {
    label: "Nossos Serviços",
    href: "/servicos-funerarios",
    internal: true,
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

const SOCIAL_LINKS = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/grupomaya",
    icon: <Facebook size={16} strokeWidth={1.8} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/grupomaya",
    icon: <Instagram size={16} strokeWidth={1.8} />,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/grupomaya",
    icon: <Linkedin size={16} strokeWidth={1.8} />,
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
      transition={{ duration: 0.18, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="absolute top-[calc(100%+8px)] left-0 bg-white rounded-[4px] overflow-hidden z-50"
      style={{
        border: "1px solid #e0e0dc",
        boxShadow: "0 8px 32px rgba(0,0,0,0.10)",
        minWidth: "220px",
      }}
    >
      {items.map((item, i) => (
        <button
          key={item.label}
          onClick={() => onItemClick(item)}
          className="w-full flex items-center text-left px-5 py-3 hover:bg-[#fbfbf9] hover:text-[#C8963E] transition-colors duration-150 group"
          style={{
            borderTop: i > 0 ? "1px solid #f0f0ec" : "none",
          }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "1.5",
              color: "inherit",
            }}
          >
            {item.label}
          </span>
        </button>
      ))}
    </motion.div>
  );
}

// ── Main Navbar ─────────────���───────────────────────────────────────────────

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setMobileExpanded(null);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navigateToSection = useCallback(
    (section: string) => {
      setMobileOpen(false);
      setOpenDropdown(null);
      if (location.pathname === "/") {
        setTimeout(() => {
          document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
        }, 50);
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
        navigate(item.href);
        window.scrollTo({ top: 0, behavior: "instant" });
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
          FIXED WRAPPER
      ══════════════════════════════════════════════════ */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-[0_2px_24px_rgba(0,0,0,0.09)]" : ""
        }`}
      >
        {/* ── TOP STRIP: social | logo | CTA ── */}
        <div className="md:border-b border-[#e0e0dc]">
          <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] flex items-center justify-between h-[64px] relative">

            {/* LEFT — Social icons (desktop) | Logo (mobile) */}
            <div className="flex items-center">
              {/* Social — desktop only */}
              <div className="hidden md:flex items-center gap-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-[#b5b5b2] hover:text-[#2B5E3A] transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
              {/* Logo — mobile only */}
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  if (location.pathname === "/") {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  } else {
                    navigate("/");
                  }
                }}
                className="md:hidden"
              >
                <img
                  src={logoImg}
                  alt="Grupo Maya"
                  style={{ height: "38px", width: "auto", display: "block" }}
                />
              </a>
            </div>

            {/* CENTER — Logo (desktop only, absolutely centered) */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === "/") {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                } else {
                  navigate("/");
                }
              }}
              className="hidden md:block absolute left-1/2 -translate-x-1/2"
            >
              <img
                src={logoImg}
                alt="Grupo Maya"
                style={{ height: "38px", width: "auto", display: "block" }}
              />
            </a>

            {/* RIGHT — CTA button (desktop) | Hamburger (mobile) */}
            <div className="flex items-center">
              {/* CTA — desktop only */}
              <a
                href="https://wa.me/5511934223751"
                target="_blank"
                rel="noopener noreferrer"
                onClick={trackWhatsAppConversion}
                className="hidden md:flex items-center gap-2 px-4 py-[9px] rounded-[4px] bg-[#2B5E3A] hover:bg-[#224d2e] transition-colors duration-200"
                style={{ textDecoration: "none" }}
              >
                <Phone size={15} strokeWidth={2} className="text-white flex-shrink-0" />
                <span
                  className="text-white"
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    fontWeight: 500,
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  Atendimento 24H
                </span>
              </a>
              {/* Hamburger — mobile only */}
              <button
                className="md:hidden flex items-center text-[#0a0a0a] hover:opacity-60 transition-opacity"
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

        {/* ── NAV STRIP — desktop only ── */}
        <div className="hidden md:block border-b border-[#e0e0dc]">
          <div className="max-w-[1338px] mx-auto px-5 md:px-[52px] flex items-center justify-center gap-1 h-[44px]">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.sub && handleMouseEnter(item.label)}
                onMouseLeave={() => item.sub && handleMouseLeave()}
              >
                <button
                  onClick={() => !item.sub && handleItemClick(item)}
                  className={`flex items-center gap-1 px-4 py-2 rounded-[3px] transition-colors duration-150 group ${
                    openDropdown === item.label
                      ? "text-[#C8963E]"
                      : "text-[#2D2D2D] hover:text-[#C8963E]"
                  }`}
                >
                  <span
                    style={{
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontSize: "12.5px",
                      fontWeight: 600,
                      letterSpacing: "0.6px",
                      textTransform: "uppercase",
                      lineHeight: "1",
                    }}
                  >
                    {item.label}
                  </span>
                  {item.sub && (
                    <ChevronDown
                      size={13}
                      strokeWidth={2.2}
                      className={`flex-shrink-0 transition-transform duration-200 ${
                        openDropdown === item.label ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                {/* Dropdown */}
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
            transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed left-0 right-0 z-40 bg-white overflow-y-auto"
            style={{ top: "64px", bottom: 0 }}
          >
            <div className="max-w-[1338px] mx-auto px-5 py-4">

              {/* Nav items */}
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
                        fontSize: "28px",
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

                  {/* Sub-items */}
                  <AnimatePresence>
                    {item.sub && mobileExpanded === item.label && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-0 pb-4 pl-2">
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

              {/* Social icons in mobile menu */}
              <div className="flex items-center gap-5 pt-8 pb-4">
                {SOCIAL_LINKS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-[#b5b5b2] hover:text-[#2B5E3A] transition-colors duration-200"
                  >
                    {s.icon}
                  </a>
                ))}
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
            style={{ background: "rgba(10,10,10,0.2)", backdropFilter: "blur(2px)" }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}