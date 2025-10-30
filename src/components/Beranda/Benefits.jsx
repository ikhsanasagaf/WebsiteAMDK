import React from "react";

const Benefits = () => {
  return (
    <section className="bg-[#DEF4FF] rounded-xl my-16 py-12 ">
      <div className="container mx-auto px-13 py-15">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x-1 md:divide-[#123242]">
          
          <div className="px-8">
            <img
              src="/assets/diamond.png"
              alt="Kualitas Terjamin"
              className="h-7 w-auto mb-5"
            />
            <h3 className="text-[27px] font-[420] text-cyan-900 mb-3">
              Kualitas yang Terjamin
            </h3>
            <p className="text-gray-600">
              Kami selalu berkomitmen untuk menyediakan air minum dengan
              kualitas tertinggi, melalui pemrosesan sesuai standar SNI dan
              teknologi ozonisasi yang menjaga kemurnian air.
            </p>
          </div>

          <div className="px-8">
            <img
              src="/assets/clean-water.png"
              alt="Keamanan dan Kebersihan"
              className="h-7 w-auto mb-5"
            />
            <h3 className="text-[27px] font-[420] text-cyan-900 mb-3">
              Keamanan dan Kebersihan
            </h3>
            <p className="text-gray-600">
              Air Moedal diproduksi dengan standar kebersihan yang ketat dan
              telah bersertifikat HALAL, menjamin air minum yang aman
              dikonsumsi oleh seluruh kalangan masyarakat.
            </p>
          </div>

          <div className="px-8">
            <img
              src="/assets/leaf.png"
              alt="Keberlanjutan dan Kesejahteraan"
              className="h-6.5 w-auto mb-5"
            />
            <h3 className="text-[27px] font-[420] text-cyan-900 mb-3">
                Kesejahteraan Bersama
            </h3>
            <p className="text-gray-600">
              Sebagai produk inovasi dari PDAM Tirta Moedal Kota Semarang,
              Moedal berkontribusi terhadap keberlanjutan lingkungan dan
              perekonomian lokal, menciptakan lapangan kerja dan mendukung
              kesejahteraan masyarakat.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Benefits;