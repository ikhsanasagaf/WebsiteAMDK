import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimatedCard = ({ children, direction = "left", className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false, // supaya bisa retrigger saat scroll
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
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className={`bg-[#C6F2FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  return (
    <section className="py-16 bg-[#F4F7F5]">
      {/* --- Bagian Deskripsi Tentang --- */}
      <div className="container mx-auto px-4">
        <h2 className="text-4xl text-center font-normal text-cyan-900 mb-15 mt-25">
          Tentang Moedal
        </h2>

        <p className="max-w-7xl text-justify mx-auto text-gray-600 mb-4">
          Air Moedal adalah produk air minum dalam kemasan berkualitas yang
          diproduksi dan didistribusikan oleh Perumda Air Minum Tirta Moedal
          Kota Semarang. AMDK Air Moedal ini diresmikan pertama kali pada 16
          Oktober 2023, menandai langkah baru Perumda dalam melayani kebutuhan
          air minum warga.
        </p>

        <p className="max-w-7xl text-justify mx-auto text-gray-600 mb-4">
          Air minum dalam kemasan berkualitas yang diambil langsung dari sumber
          air alami berusia 113 tahun di Kaki Gunung Ungaran. Diproses dengan
          teknologi ozonisasi untuk menjaga kesegaran dan kemurnian air, Moedal
          hadir untuk memberikan Anda pengalaman minum air yang lebih sehat dan
          menyegarkan. Tersedia dalam berbagai ukuran kemasan, Air Moedal siap
          menemani Anda di mana saja, kapan saja.
        </p>

        <p className="max-w-7xl text-justify mx-auto text-gray-600 mb-40">
          Moedal tidak hanya berkomitmen untuk menyediakan air minum
          berkualitas, tetapi juga berperan aktif dalam mendukung perekonomian
          dan kesejahteraan masyarakat lokal. Pilih Moedal sebagai sumber hidrasi
          Anda, dan nikmati kebaikan alam di setiap tegukannya!
        </p>
      </div>

      {/* --- Bagian Card Fitur --- */}
      <div className="container mx-auto space-y-8 px-4">
        {/* Card 1: Sumber Air Alami */}
        <AnimatedCard direction="left" className="mr-70">
          <div className="flex justify-center">
            <img
              src="/assets/hydro-power.png"
              alt="Sumber Air Alami"
              className="w-[50%] max-w-xs mr-15"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[40px] font-[400] text-cyan-900 mb-3">
              Sumber Air Alami
            </h3>
            <p className="text-gray-600">
              Air Moedal berasal dari sumber mata air berusia 113 tahun di Kaki
              Gunung Ungaran, yang kualitasnya tetap terjaga hingga saat ini.
              Sumber mata air ini dilindungi untuk menjamin kesegaran dan
              kemurnian air mineral Moedal.
            </p>
          </div>
        </AnimatedCard>

        {/* Card 2: Kesegaran Air Mineral */}
        <AnimatedCard direction="right" className="ml-70">
          <div className="flex flex-col justify-center">
            <h3 className="text-[40px] font-[400] text-cyan-900 mb-3">
              Kesegaran Air Mineral
            </h3>
            <p className="text-gray-600">
              Air Moedal memiliki pH 7 (netral), yang ideal untuk dikonsumsi
              sehari-hari. Dibuktikan dengan desain kemasan yang menarik dan
              elegan, Moedal tidak hanya baik untuk diminum, tetapi juga
              mencerminkan kualitas air yang menjamin kesegaran.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/assets/mountain.png"
              alt="Kesegaran Air Mineral"
              className="w-[70%] max-w-sm"
            />
          </div>
        </AnimatedCard>

        {/* Card 3: Komitmen Kualitas */}
        <AnimatedCard direction="left" className="mr-70">
          <div className="flex justify-center">
            <img
              src="/assets/diamond2.png"
              alt="Komitmen Kualitas"
              className="w-[70%] max-w-xs mr-15"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h3 className="text-[40px] font-[400] text-cyan-900 mb-3">
              Komitmen Kualitas
            </h3>
            <p className="text-gray-600">
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
