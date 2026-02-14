import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
// 1. 引入 HelmetProvider
import { HelmetProvider } from "react-helmet-async"; 
import App from "./App.tsx";
import "@/styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </StrictMode>
);