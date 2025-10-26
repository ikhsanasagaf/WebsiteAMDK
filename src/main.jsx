import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
      <Navbar />
      <Hero />
      <About />
      <App />
  </StrictMode>
);
