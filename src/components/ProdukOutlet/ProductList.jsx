import React, { useEffect } from "react";
import { motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { products } from "../../data/products.js";

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const ProductItem = ({ product, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.25,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div
      key={product.number}
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-12 items-center gap-6"
    >
      {/* Nomor Produk */}
      <div className="md:col-span-2 flex md:justify-start justify-start">
        <span className="text-5xl md:text-[140px] leading-none text-cyan-900 font-light -tracking-tight">
          {product.number}
        </span>
      </div>

      {/* Detail Produk */}
      <div className="md:col-span-7">
        <h3 className="text-2xl md:text-3xl text-cyan-900 font-medium mb-3">
          {product.title}
        </h3>
        <p className="text-sm md:text-sm text-gray-600 mb-4 max-w-2xl">
          {product.description}
        </p>
        <p className="text-sm text-cyan-900 font-medium">{product.price}</p>
      </div>

      {/* Gambar Produk dengan Motion */}
      <Motion.div
        variants={imageVariants}
        initial={index === 0 ? "visible" : "hidden"} // produk pertama langsung muncul
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="md:col-span-3 flex justify-center md:justify-end"
      >
        <div className="w-56 h-56 md:w-64 md:h-64 bg-gray-50 rounded-2xl flex items-center justify-center p-6 shadow-sm">
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </Motion.div>
    </div>
  );
};

const ProductList = () => {
  return (
    <section className="py-16 px-7">
      <div className="container mx-auto bg-white py-10 px-6 md:py-25 md:px-20 rounded-3xl shadow-lg">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-4xl lg:text-5xl font-[450] text-cyan-900">
            Produk Air Mineral Moedal
          </h2>
          <p className="mt-2 text-gray-600 text-sm lg:text-base">
            Kami menyediakan 4 jenis ukuran produk Air Mineral Dalam Kemasan.
          </p>
        </div>

        {/* Product List */}
        <div className="space-y-12">
          {products.map((product, index) => (
            <ProductItem key={product.number} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
