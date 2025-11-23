import React, { useState, useEffect } from "react";
import { AnimatePresence, motion as Motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { outlets } from "../../data/outlets.js";

const OutletSection = () => {
  const [selected, setSelected] = useState(outlets[0]);

  // --- Motion setup ---
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: false,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const sectionVariants = {
    hidden: { opacity: 0, y: 80, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <Motion.section
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={controls}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 px-6 md:py-20 md:px-11 bg-[#F4F7F5] overflow-hidden"
    >
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-[450] text-cyan-900 text-center mb-10 md:mb-20">
          Outlet Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          
          <div className="md:col-span-2 lg:col-span-2 flex flex-col space-y-3 md:space-y-4 md:border-r border-[#374e7a] ml-0 md:ml-10 lg:ml-30 order-2 md:order-1">
            {outlets.map((item) => {
              const isActive = selected.district === item.district;
              return (
                <button
                  key={item.district}
                  onClick={() => setSelected(item)}
                  className={`text-left py-3 px-4 md:py-4 rounded-md font-medium transition-all duration-300 w-full md:w-80 h-auto md:h-25 cursor-pointer flex flex-col justify-center
                    ${
                      isActive
                        ? "bg-[#075A81] text-white shadow-md"
                        : "bg-white md:bg-transparent text-[#075A81] hover:text-cyan-900 border border-gray-200 md:border-none"
                    }`}
                >
                  <div
                    className={`hidden md:block mx-auto w-4/5 border-t ${
                      isActive ? "border-[#B8E8FF]" : "border-[#075A81]"
                    } mb-2`}
                  ></div>
                  
                  <span className="block text-center md:text-left text-sm md:text-base md:ml-7">
                    {item.district}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="md:col-span-3 lg:col-span-3 md:pl-8 order-1 md:order-2 mb-8 md:mb-0 text-center md:text-left bg-white md:bg-transparent p-6 rounded-xl md:p-0 shadow-sm md:shadow-none">
            <AnimatePresence mode="wait">
              <Motion.div
                key={selected.district}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="uppercase tracking-wide text-xs font-bold text-gray-400 mb-2">
                  Lokasi Terpilih
                </div>
                <h3 className="text-2xl font-semibold text-cyan-900 mb-3">
                  {selected.name}
                </h3>
                <p className="text-cyan-800 text-sm mb-4 leading-relaxed">
                  {selected.address}
                </p>
                <a
                  href={`tel:${selected.phone}`}
                  className="inline-block bg-[#075A81] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-cyan-900 transition-colors"
                >
                  Hubungi: {selected.phone}
                </a>
              </Motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </Motion.section>
  );
};

export default OutletSection;