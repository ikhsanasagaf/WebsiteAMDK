import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import ImageBreak from "./components/ImageBreak.jsx";
import Benefits from "./components/Benefits.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* Container utama untuk konten halaman (Navbar s/d Benefits) 
      Footer diletakkan di luar div ini
    */}
    <div className="container mx-auto">
      <Navbar />
      <Hero />
      <About />
      <ImageBreak />
      <Benefits />
    </div>
    
    <Footer /> 
  </StrictMode>
);
