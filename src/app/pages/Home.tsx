import { useEffect } from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Differentials } from "../components/Differentials";
import { Jazigos } from "../components/Jazigos";
import { Agencies } from "../components/Agencies";
import { Contact } from "../components/Contact";

export function Home() {
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
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Differentials />
      <Jazigos />
      <Agencies />
      <Contact />
    </>
  );
}
