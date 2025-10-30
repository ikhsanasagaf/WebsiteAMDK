import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    // Background biru tua, margin atas, dan padding
    <footer className="bg-cyan-900 text-white mt-16 pt-10 pb-7">
      <div className="container mx-auto px-4">
        {/* Kontainer Flex Utama (Logo/Slogan di Kiri, Nav/Kontak di Kanan) */}
        <div className="flex flex-col md:flex-row justify-between gap-10">
          
          {/* Kolom Kiri: Logo dan Slogan */}
          <div>
            <Link to="/">
              <img
                src="/assets/Tirta-Moedal-Logo.png"
                alt="Logo Moedal"
                className="h-10 w-auto"
              />
            </Link>
            <div className="mt-30 text-sm">
              <p className="font-semibold">Moedal Air Mineral</p>
              <p className="text-gray-300">Air Moedal Sumber Sehatmu</p>
            </div>
          </div>

          {/* Kolom Kanan: Navigasi dan Info Kontak */}
          <div className="flex flex-col md:items-end gap-6">
            {/* Navigasi Link & Tombol */}
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm font-light text-gray-200 hover:text-white"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/produk-outlet"
                  className="text-sm font-light text-gray-200 hover:text-white"
                >
                  Produk & Outlet
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-sm font-light text-gray-200 hover:text-white"
                >
                  Kontak
                </Link>
              </li>
              <li>
                <Link to="/daftar-agen" className="bg-gray-100 text-cyan-900 font-medium px-5 py-2 rounded-full hover:bg-white transition-colors text-sm cursor-pointer">
                  Daftar Agen
                </Link>
              </li>
            </ul>

            {/* Info Kontak */}
            <div className="text-left md:text-right text-sm text-gray-300 space-y-1 mt-17">
              <p>+628112680963</p>
              <p>kontak.airmoedal@gmail.com</p>
              <p>Jl.Kelud Raya No.60 Kota Semarang, Jawa Tengah 50273</p>
            </div>
          </div>
        </div>

        {/* Garis Pemisah */}
        <hr className="my-8 border-t border-cyan-700" />

        {/* Copyright (rata tengah) */}
        <div className="text-center text-sm text-gray-400">
          © 2025 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;