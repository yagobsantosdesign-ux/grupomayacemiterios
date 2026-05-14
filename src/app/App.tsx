import { RouterProvider } from "react-router";
import { router } from "./routes";
import { GoogleAnalytics } from "./components/GoogleAnalytics";

export default function App() {
  return (
    <>
      <GoogleAnalytics />
      <RouterProvider router={router} />
    </>
  );
}