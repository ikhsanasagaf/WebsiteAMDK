import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Banner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const imageVariants = {
    hidden: {
      opacity: 0,
      y: 80,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 px-6 md:py-16 md:px-11 mb-10 md:mb-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-12">
          
          <div className="text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-[450] text-cyan-900 leading-tight">
              Produk Kami
            </h1>
            <p className="mt-4 text-sm md:text-base lg:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              Temukan produk-produk kami yang berkualitas tinggi sekarang!
            </p>
            <button className="mt-6 bg-cyan-900 text-white font-medium px-6 py-2 rounded-full hover:bg-cyan-800 transition-colors text-sm cursor-pointer shadow-md">
              Telusuri Sekarang!
            </button>
          </div>

          {/* --- Gambar dengan Motion --- */}
          <Motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={imageVariants}
            className="flex justify-center md:justify-end mt-8 md:mt-0"
          >
            <img
              src="/assets/produk/galondanbotol.png"
              alt="Produk Air Moedal Galon dan Botol"
              className="w-3/4 md:w-full max-w-md drop-shadow-xl"
            />
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;