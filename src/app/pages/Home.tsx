import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Differentials } from "../components/Differentials";
import { MayaProtege } from "../components/MayaProtege";
import { Agencies } from "../components/Agencies";
import { FAQ } from "../components/FAQ";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Differentials />
      <MayaProtege />
      <Agencies />
      <FAQ />
      <Contact />
    </>
  );
}
