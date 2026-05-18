import type Lenis from "lenis";

let _lenis: Lenis | null = null;

// Called once in RootLayout when Lenis is initialised
export function registerLenis(lenis: Lenis) {
  _lenis = lenis;
}

// Called in RootLayout cleanup when Lenis is destroyed
export function unregisterLenis() {
  _lenis = null;
}

const NAVBAR_OFFSET = -88;

// Scroll to a section by DOM id, with navbar clearance
export function scrollToSection(id: string, immediate = false) {
  const el = document.getElementById(id);
  if (!el) return;
  if (_lenis) {
    _lenis.scrollTo(el, { offset: NAVBAR_OFFSET, immediate });
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + NAVBAR_OFFSET;
    window.scrollTo({ top, behavior: immediate ? "instant" : "smooth" });
  }
}

// Scroll to the very top of the page
export function scrollToTop(immediate = true) {
  if (_lenis) {
    _lenis.scrollTo(0, { immediate });
  } else {
    window.scrollTo({ top: 0, behavior: immediate ? "instant" : "smooth" });
  }
}
