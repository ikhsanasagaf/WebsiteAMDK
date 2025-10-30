import React from "react";

const ImageBreak = () => {
  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto">
        <img
          src="/assets/moedalprod.png"
          alt="Pabrik Air Moedal"
          className="w-full h-[700px] shadow-lg" // Menambahkan shadow-lg untuk efek kedalaman
        />
      </div>
    </section>
  );
};

export default ImageBreak;