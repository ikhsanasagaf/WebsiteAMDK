import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full bg-[#DEF4FF] relative z-50">
      <div className="container mx-auto py-5 px-6 flex items-center justify-between">
        
        <div className="logo z-50">
          <Link to="/" onClick={closeMenu}>
            <img
              src="/assets/Tirta-Moedal-Logo.png"
              alt="Logo"
              className="h-8 md:h-10 w-auto"
            />
          </Link>
        </div>

        <button
          className="block md:hidden z-50 text-cyan-900 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-10">
            <li><Link to="/" className="text-base font-medium text-gray-700 hover:text-cyan-800">Beranda</Link></li>
            <li><Link to="/produk-outlet" className="text-base font-medium text-gray-700 hover:text-cyan-800">Produk & Outlet</Link></li>
            <li><Link to="/kontak" className="text-base font-medium text-gray-700 hover:text-cyan-800">Kontak</Link></li>
          </ul>
          <Link to="/daftar-agen" className="bg-cyan-900 text-white font-medium px-5 py-2 rounded-full hover:bg-[#06374e] transition-colors text-base cursor-pointer">
            Daftar Agen
          </Link>
        </div>

        <div
          className={`fixed inset-0 bg-[#DEF4FF] flex flex-col items-center justify-center transition-transform duration-300 ease-in-out md:hidden ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center gap-8 text-xl font-medium text-cyan-900 mb-8">
            <li><Link to="/" onClick={closeMenu}>Beranda</Link></li>
            <li><Link to="/produk-outlet" onClick={closeMenu}>Produk & Outlet</Link></li>
            <li><Link to="/kontak" onClick={closeMenu}>Kontak</Link></li>
          </ul>
          <Link 
            to="/daftar-agen" 
            onClick={closeMenu}
            className="bg-cyan-900 text-white font-medium px-8 py-3 rounded-full hover:bg-[#06374e] transition-colors text-lg"
          >
            Daftar Agen
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;