// Menghapus import useState dan useEffect karena tidak lagi digunakan
const Navbar = () => {
  // Menghapus logika state 'active' dan useEffect untuk scroll

  return (
    // Menggunakan 'items-center' untuk perataan vertikal
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <a href="#">
          <img
            // Memperbaiki path logo untuk aset di folder 'public' Vite
            src="/assets/Tirta-Moedal-Logo.png"
            alt="Logo"
            // Menyesuaikan ukuran logo dan menghapus margin
            className="h-10 w-auto"
          />
        </a>
      </div>

      {/* Div baru untuk mengelompokkan menu navigasi dan tombol */}
      <div className="flex items-center gap-10">
        <ul
          // Menghapus semua class untuk sticky/mobile dan menggantinya dengan flex
          className="flex items-center gap-10"
        >
          <li>
            <a
              href="#"
              className="sm:text-lg text-base font-light text-gray-700 hover:text-cyan-800"
            >
              Beranda
            </a>
          </li>
          {/* Menggabungkan Produk dan Outlet */}
          <li>
            <a
              href="#"
              className="sm:text-lg text-base font-light text-gray-700 hover:text-cyan-800"
            >
              Produk & Outlet
            </a>
          </li>
          <li>
            <a
              href="#"
              className="sm:text-lg text-base font-light text-gray-700 hover:text-cyan-800"
            >
              Kontak
            </a>
          </li>
        </ul>

        {/* Tombol "Daftar Agen" baru ditambahkan */}
        <button className="bg-cyan-900 text-white font-medium px-5 py-2 rounded-full hover:bg-cyan-800 transition-colors">
          Daftar Agen
        </button>
      </div>
    </div>
  );
};

export default Navbar;