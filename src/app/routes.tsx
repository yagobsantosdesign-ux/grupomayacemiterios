import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import { Home } from "./pages/Home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import FuneraryServices from "./pages/FuneraryServices";
import CemeteryServices from "./pages/CemeteryServices";
import JazigoRecadastramento from "./pages/JazigoRecadastramento";
import VozesdaLapa from "./pages/VozesdaLapa";

export const router = createBrowserRouter([
  {
    Component: RootLayout,
    children: [
      { path: "/", Component: Home },
      { path: "/politica-de-privacidade", Component: PrivacyPolicy },
      { path: "/termos", Component: Terms },
      { path: "/servicos-funerarios", Component: FuneraryServices },
      { path: "/servicos-cemiteriais", Component: CemeteryServices },
      { path: "/recadastramento-de-jazigos", Component: JazigoRecadastramento },
      { path: "/vozes-da-lapa", Component: VozesdaLapa },
    ],
  },
]);