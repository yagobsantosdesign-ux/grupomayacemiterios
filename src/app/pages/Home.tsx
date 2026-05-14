import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { QuickAccess } from "../components/QuickAccess";
import { Partners } from "../components/Partners";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Differentials } from "../components/Differentials";
import { Jazigos } from "../components/Jazigos";
import { Agencies } from "../components/Agencies";
import { PriceTable } from "../components/PriceTable";
import { CulturalProject } from "../components/CulturalProject";
import { Notices } from "../components/Notices";
import { Contact } from "../components/Contact";

export function Home() {
  // When navigating from another page via the Navbar, scroll to the stored target
  useEffect(() => {
    const target = sessionStorage.getItem("scrollTarget");
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => {
        document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      }, 400);
    }
  }, []);

  return (
    <>
      {/* 02 — Hero carousel */}
      <Hero />

      {/* 03 — Acesso rápido */}
      <QuickAccess />

      {/* Ticker de cemitérios */}
      <Partners />

      {/* 04 — Quem somos */}
      <About />

      {/* 05 — Nossos serviços */}
      <Services />

      {/* Diferenciais + Nossos Cemitérios (inline) */}
      <Differentials />

      {/* 07 — Compre seu Jazigo */}
      <Jazigos />

      {/* 09 — Agências Funerárias */}
      <Agencies />

      {/* 10 — Tabela de Preços */}
      <PriceTable />

      {/* 11 — Projeto Cultural */}
      <CulturalProject />

      {/* 12 — Avisos Oficiais */}
      <Notices />

      {/* 13 — Contato */}
      <Contact />
    </>
  );
}