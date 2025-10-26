const Navbar = () => {
  return (
    <div className="navbar py-7 pr-10 flex items-center justify-between bg-[#DEF4FF]">
      <div className="logo">
        <a href="#">
          <img
            src="/assets/Tirta-Moedal-Logo.png"
            alt="Logo"
            className="h-10 w-auto ml-15"
          />
        </a>
      </div>

      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <a
              href="#"
              className="text-base font-medium text-gray-700 hover:text-cyan-800"
            >
              Beranda
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-base font-medium text-gray-700 hover:text-cyan-800"
            >
              Produk & Outlet
            </a>
          </li>
          <li>
            <a
              href="#"
              className="text-base font-medium text-gray-700 hover:text-cyan-800"
            >
              Kontak
            </a>
          </li>
        </ul>

        <button
          className="bg-cyan-900 text-white font-medium px-5 py-2 rounded-full hover:bg-[#06374e] transition-colors text-base cursor-pointer"
        >
          Daftar Agen
        </button>
      </div>
    </div>
  );
};

export default Navbar;