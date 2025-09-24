import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navbar py-7 flex item-center justify-between">
      <div className="logo">
        <a href="#">
          <img
            src="../../public/assets/Tirta-Moedal-Logo.png"
            alt="Logo"
            className="h-9 w-34 mt-4 ml-2"
          />
        </a>
      </div>
      <ul
        className={`menu flex item-center sm:gap-10 gap-2 md:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 bg-blue/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md-transition-none ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        <li>
          <a href="#" className="sm:text-lg text-base font-light">
            Beranda
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-light">
            Tentang
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-light">
            Produk
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-light">
            Outlet
          </a>
        </li>
        <li>
          <a href="#" className="sm:text-lg text-base font-light">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
