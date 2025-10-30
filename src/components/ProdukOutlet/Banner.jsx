import React from "react";

const Banner = () => {
  return (
    <section className="py-16 px-11 mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          
          <div className="text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-[450] text-cyan-900 leading-tight">
              Produk Kami
            </h1>
            <p className="mt-4 text-base lg:text-lg text-gray-600">
              Temukan produk-produk kami yang berkualitas tinggi sekarang!
            </p>
            <button className="mt-6 bg-cyan-900 text-white font-medium px-6 py-2 rounded-full hover:bg-cyan-800 transition-colors text-sm cursor-pointer">
              Telusuri Sekarang!
            </button>
          </div>

          <div className="flex justify-center md:justify-end">
            <img
              src="/assets/produk/galondanbotol.png"
              alt="Produk Air Moedal Galon dan Botol"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;