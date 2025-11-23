import React from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ children, direction = "left", className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [inView, controls]);

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "left" ? -120 : 120,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <Motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`bg-[#C6F2FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-0 w-full ${className}`}
    >
      {children}
    </Motion.div>
  );
};

const About = () => {
  return (
    <section className="py-10 md:py-16 bg-[#F4F7F5] overflow-hidden">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl text-center font-normal text-cyan-900 mb-8 mt-10 md:mb-15 md:mt-25">
          Tentang Moedal
        </h2>

        <div className="space-y-4 text-justify text-gray-600">
          <p className="max-w-7xl mx-auto">
            Air Moedal adalah produk air minum dalam kemasan berkualitas yang
            diproduksi dan didistribusikan oleh Perumda Air Minum Tirta Moedal
            Kota Semarang. AMDK Air Moedal ini diresmikan pertama kali pada 16
            Oktober 2023, menandai langkah baru Perumda dalam melayani kebutuhan
            air minum warga.
          </p>

          <p className="max-w-7xl mx-auto">
            Air minum dalam kemasan berkualitas yang diambil langsung dari sumber
            air alami berusia 113 tahun di Kaki Gunung Ungaran. Diproses dengan
            teknologi ozonisasi untuk menjaga kesegaran dan kemurnian air, Moedal
            hadir untuk memberikan Anda pengalaman minum air yang lebih sehat dan
            menyegarkan. Tersedia dalam berbagai ukuran kemasan, Air Moedal siap
            menemani Anda di mana saja, kapan saja.
          </p>

          <p className="max-w-7xl mx-auto mb-10 md:mb-40">
            Moedal tidak hanya berkomitmen untuk menyediakan air minum
            berkualitas, tetapi juga berperan aktif dalam mendukung perekonomian
            dan kesejahteraan masyarakat lokal. Pilih Moedal sebagai sumber hidrasi
            Anda, dan nikmati kebaikan alam di setiap tegukannya!
          </p>
        </div>
      </div>

      <div className="container mx-auto space-y-8 px-6">
        
        {/* Card 1: Sumber Air Alami (Rata Kiri) */}
        <AnimatedCard direction="left" className="mr-auto md:w-[90%] lg:w-[85%]">
          <div className="flex justify-center md:justify-start items-center">
            <img
              src="/assets/hydro-power.png"
              alt="Sumber Air Alami"
              className="w-1/2 md:w-[50%] max-w-xs md:mr-15 mb-6 md:mb-0"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-[40px] font-[400] text-cyan-900 mb-3">
              Sumber Air Alami
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Air Moedal berasal dari sumber mata air berusia 113 tahun di Kaki
              Gunung Ungaran, yang kualitasnya tetap terjaga hingga saat ini.
              Sumber mata air ini dilindungi untuk menjamin kesegaran dan
              kemurnian air mineral Moedal.
            </p>
          </div>
        </AnimatedCard>

        {/* Card 2: Kesegaran Air Mineral (Rata Kanan) */}
        <AnimatedCard direction="right" className="ml-auto md:w-[90%] lg:w-[85%]">
          <div className="flex flex-col justify-center text-center md:text-left order-2 md:order-1">
            <h3 className="text-2xl md:text-[40px] font-[400] text-cyan-900 mb-3">
              Kesegaran Air Mineral
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Air Moedal memiliki pH 7 (netral), yang ideal untuk dikonsumsi
              sehari-hari. Dibuktikan dengan desain kemasan yang menarik dan
              elegan, Moedal tidak hanya baik untuk diminum, tetapi juga
              mencerminkan kualitas air yang menjamin kesegaran.
            </p>
          </div>
          <div className="flex justify-center md:justify-end items-center order-1 md:order-2">
            <img
              src="/assets/mountain.png"
              alt="Kesegaran Air Mineral"
              className="w-2/3 md:w-[70%] max-w-sm mb-6 md:mb-0"
            />
          </div>
        </AnimatedCard>

        {/* Card 3: Komitmen Kualitas (Rata Kiri) */}
        <AnimatedCard direction="left" className="mr-auto md:w-[90%] lg:w-[85%]">
          <div className="flex justify-center md:justify-start items-center">
            <img
              src="/assets/diamond2.png"
              alt="Komitmen Kualitas"
              className="w-2/3 md:w-[70%] max-w-xs md:mr-15 mb-6 md:mb-0"
            />
          </div>
          <div className="flex flex-col justify-center text-center md:text-left">
            <h3 className="text-2xl md:text-[40px] font-[400] text-cyan-900 mb-3">
              Komitmen Kualitas
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Sebagai wujud komitmen Perumda Air Minum Tirta Moedal Kota
              Semarang, Air Moedal hadir untuk memenuhi kebutuhan air minum
              dalam kemasan yang berkualitas bagi masyarakat Kota Semarang.
            </p>
          </div>
        </AnimatedCard>
      </div>
    </section>
  );
};

export default About;