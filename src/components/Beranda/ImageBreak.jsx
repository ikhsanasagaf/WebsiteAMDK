import React from "react";

const ImageBreak = () => {
  return (
    <section className="py-8 md:py-12 bg-[#F4F7F5]">
      {/* Tambahkan padding horizontal (px-4) agar tidak menempel di tepi layar HP */}
      <div className="container mx-auto">
        <img
          src="/assets/moedalprod.png"
          alt="Pabrik Air Moedal"
          // PERBAIKAN DI SINI:
          // 1. h-[250px] md:h-[700px] -> Tinggi disesuaikan (kecil di HP, besar di Desktop)
          // 2. object-cover -> Agar gambar dipotong rapi (crop) dan tidak gepeng
          // 3. rounded-xl -> Memberikan sudut melengkung agar lebih estetis
          className="w-full h-[250px] md:h-[700px] object-cover shadow-lg"
        />
      </div>
    </section>
  );
};

export default ImageBreak;