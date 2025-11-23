import React from "react";

const Hero = () => {
  return (
    <section className="bg-[#DEF4FF] w-full p-6 md:p-12 lg:px-16 lg:py-16 h-auto mb-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
        
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-[450] text-[#005F8C] leading-tight md:leading-none">
            Air Moedal
            <br />
            Sumber Sehatmu
          </h1>
          <p className="mt-4 text-sm md:text-base lg:text-lg text-[#005F8C]">
            Rasakan kesegaran alami dari sumber mata air terbaik.
          </p>
          <button className="mt-6 bg-[#005F8C] text-white font-medium px-6 py-2 rounded-full hover:bg-[#06374e] transition-colors text-sm cursor-pointer">
            Selengkapnya
          </button>
        </div>

        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <img
            src="/assets/drink-water.png"
            alt="Orang minum air Moedal"
            className="w-3/4 md:w-full max-w-sm transform -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;