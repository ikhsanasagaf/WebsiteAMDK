import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar py-7 pr-10 flex items-center justify-between bg-[#DEF4FF]">
      <div className="logo">
        <Link to="/">
          <img
            src="/assets/Tirta-Moedal-Logo.png"
            alt="Logo"
            className="h-10 w-auto ml-15"
          />
        </Link>
      </div>

      <div className="flex items-center gap-10">
        <ul className="flex items-center gap-10">
          <li>
            <Link
              to="/"
              className="text-base font-medium text-gray-700 hover:text-cyan-800"
            >
              Beranda
            </Link>
          </li>
          <li>
            <Link
              to="/produk-outlet"
              className="text-base font-medium text-gray-700 hover:text-cyan-800"
            >
              Produk & Outlet
            </Link>
          </li>
          <li>
            <Link
              to="/kontak"
              className="text-base font-medium text-gray-700 hover:text-cyan-800"
            >
              Kontak
            </Link>
          </li>
        </ul>

        <Link to="/daftar-agen"
          className="bg-cyan-900 text-white font-medium px-5 py-2 rounded-full hover:bg-[#06374e] transition-colors text-base cursor-pointer"
          >
          Daftar Agen
          </Link>
      </div>
    </div>
  );
};

export default Navbar;