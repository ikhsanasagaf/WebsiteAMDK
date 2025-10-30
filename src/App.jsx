import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Beranda from "./pages/Beranda";
import ProdukOutlet from "./pages/ProdukOutlet";
import Kontak from "./pages/Kontak";
import DaftarAgen from "./pages/DaftarAgen";

function App() {
  return (
    <>
      <div className="container mx-auto">
        <Navbar />
      </div>

      <main>
        <Routes>
          <Route path="/" element={<Beranda />} />
          <Route path="/produk-outlet" element={<ProdukOutlet />} />
          <Route path="/kontak" element={<Kontak />} />
          <Route path="/daftar-agen" element={<DaftarAgen />} />

        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;