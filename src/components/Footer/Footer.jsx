import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-cyan-900 text-white mt-16 pt-12 pb-8">
      <div className="container mx-auto px-6">
        {/* --- Kontainer Utama (Flex: Column di HP, Row di Desktop) --- */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10 md:gap-0">
          {/* 1. Kolom Kiri: Logo & Slogan (Rata Tengah di HP, Kiri di Desktop) */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/">
              <img
                src="/assets/Tirta-Moedal-Logo.png"
                alt="Logo Moedal"
                className="h-12 w-auto mb-4 bg-white rounded-full p-1" // Tambah background putih sedikit biar logo terlihat jelas
              />
            </Link>
            <div className="space-y-1">
              <p className="font-bold text-lg">Moedal Air Mineral</p>
              <p className="text-gray-300 text-sm">Air Moedal Sumber Sehatmu</p>
            </div>
          </div>

          {/* 2. Kolom Kanan: Navigasi & Kontak */}
          <div className="flex flex-col items-center md:items-end gap-8 w-full md:w-auto">
            {/* Navigasi Link (Grid 2 kolom di HP biar rapi, Flex di Desktop) */}
            {/* Navigasi Link & Tombol */}
            <ul className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4 text-center md:justify-end md:gap-8">
              <li>
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-200 hover:text-white transition"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  to="/produk-outlet"
                  className="text-sm font-medium text-gray-200 hover:text-white transition"
                >
                  Produk & Outlet
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-sm font-medium text-gray-200 hover:text-white transition"
                >
                  Kontak
                </Link>
              </li>

              {/* Tombol Daftar Agen: Dibuat 'basis-full' agar memaksa pindah ke baris baru di HP */}
              <li className="basis-full md:basis-auto mt-2 md:mt-0 flex justify-center md:block">
                <Link
                  to="/daftar-agen"
                  className="bg-white text-cyan-900 font-semibold px-6 py-2 rounded-full hover:bg-gray-100 transition-colors text-sm shadow-md"
                >
                  Daftar Agen
                </Link>
              </li>
            </ul>

            {/* Info Kontak (Rata Tengah di HP, Kanan di Desktop) */}
            <div className="text-center md:text-right text-sm text-gray-300 space-y-2">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <span className="material-symbols-rounded text-base">call</span>
                +62 811-2680-963
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <span className="material-symbols-rounded text-base">mail</span>
                kontak.airmoedal@gmail.com
              </p>
              <p className="leading-relaxed max-w-xs mx-auto md:mx-0">
                Jl. Kelud Raya No.60, Kota Semarang, Jawa Tengah 50273
              </p>
            </div>
          </div>
        </div>

        {/* --- Garis Pemisah --- */}
        <hr className="my-8 border-t border-cyan-700/50" />

        {/* --- Copyright --- */}
        <div className="text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Moedal Air Mineral. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
