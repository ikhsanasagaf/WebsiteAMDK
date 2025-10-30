import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const BenefitCard = ({ img, title, text, direction }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.12, // seberapa banyak elemen terlihat sebelum animasi aktif
  });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden"); // retrigger ke posisi awal saat elemen keluar
    }
  }, [controls, inView]);

  const variants = {
    hidden: {
      opacity: 0,
      x:
        direction === "left"
          ? -100
          : direction === "right"
          ? 100
          : 0,
      y: direction === "bottom" ? 50 : 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      className="px-8"
    >
      <img src={img} alt={title} className="h-7 w-auto mb-5" />
      <h3 className="text-[27px] font-[420] text-cyan-900 mb-3">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </motion.div>
  );
};

const Benefits = () => {
  return (
    <section className="bg-[#DEF4FF] rounded-xl my-16 py-12 overflow-hidden">
      <div className="container mx-auto px-6 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-0 md:divide-x md:divide-[#123242]">
          <BenefitCard
            img="/assets/diamond.png"
            title="Kualitas yang Terjamin"
            text="Kami selalu berkomitmen untuk menyediakan air minum dengan kualitas tertinggi, melalui pemrosesan sesuai standar SNI dan teknologi ozonisasi yang menjaga kemurnian air."
            direction="left"
          />
          <BenefitCard
            img="/assets/clean-water.png"
            title="Keamanan dan Kebersihan"
            text="Air Moedal diproduksi dengan standar kebersihan yang ketat dan telah bersertifikat HALAL, menjamin air minum yang aman dikonsumsi oleh seluruh kalangan masyarakat."
            direction="bottom"
          />
          <BenefitCard
            img="/assets/leaf.png"
            title="Kesejahteraan Bersama"
            text="Sebagai produk inovasi dari PDAM Tirta Moedal Kota Semarang, Moedal berkontribusi terhadap keberlanjutan lingkungan dan perekonomian lokal, menciptakan lapangan kerja dan mendukung kesejahteraan masyarakat."
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

export default Benefits;
