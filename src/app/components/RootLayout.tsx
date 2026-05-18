import { useEffect } from "react";
import { Outlet, useLocation } from "react-router";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Lenis from "lenis";
import { registerLenis, unregisterLenis, scrollToTop, scrollToSection } from "../utils/scroll";
import { AnimatePresence, motion } from "motion/react";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (window.location.hash) return;
    const target = sessionStorage.getItem("scrollTarget");
    scrollToTop(true);
    if (target) {
      sessionStorage.removeItem("scrollTarget");
      setTimeout(() => scrollToSection(target), 500);
    }
  }, [pathname]);
  return null;
}

export function RootLayout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    registerLenis(lenis);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(id);
      lenis.destroy();
      unregisterLenis();
    };
  }, []);

  const location = useLocation();

  return (
    <div className="min-h-screen" style={{ overflowX: "clip" }}>
      <ScrollToTop />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <div style={{ backgroundColor: "#0A0A0A" }}>
        <Footer />
      </div>
    </div>
  );
}