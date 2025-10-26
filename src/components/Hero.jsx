import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#DEF4FF] rounded-xl p-8 pb md:py-12 md:px-16 lg:py-16 height-auto">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-30">
        {/* === Kolom Teks === */}
        <div className="text-left">
          <h1 className="text-6xl lg:text-7xl xl:text-7xl font-[450] text-[#005F8C] leading-none">
            Air Moedal
            <br />
            Sumber Sehatmu
          </h1>
          <p className="mt-4 text-base lg:text-lg text-[#005F8C]">
            Rasakan kesegaran alami dari sumber mata air terbaik.
          </p>
          <button className="mt-6 bg-[#005F8C] text-white font-medium px-6 py-2 rounded-full hover:bg-[#06374e] transition-colors text-sm cursor-pointer">
            Selengkapnya
          </button>
        </div>

        {/* === Kolom Gambar === */}
        <div className="flex justify-center md:justify-end">
          {/* Gambar ini akan di-mirror menggunakan 'transform -scale-x-100'.
            Pastikan file 'drink-water.png' ada di folder 'public/assets/'.
          */}
          <img
            src="/assets/drink-water.png"
            alt="Orang minum air Moedal"
            className="w-full max-w-sm transform -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;