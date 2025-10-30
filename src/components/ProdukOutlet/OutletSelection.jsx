import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { outlets } from "../../data/outlets.js";

const OutletSection = () => {
  const [selected, setSelected] = useState(outlets[0]);

  return (
    <section className="py-20 px-11 bg-[#F4F7F5]">
      <div className="container mx-auto">
        <h2 className="text-4xl lg:text-5xl font-[450] text-cyan-900 text-center mb-20">
          Outlet Kami
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Sidebar Kecamatan */}
          <div className="md:col-span-2 lg:col-span-2 flex flex-col space-y-4 border-r border-[#374e7a] ml-45">
            {outlets.map((item) => {
              const isActive = selected.district === item.district;
              return (
                <button
                  key={item.district}
                  onClick={() => setSelected(item)}
                  className={`text-left py-4 px-4 rounded-md font-medium transition-all duration-300 w-80 h-25 cursor-pointer
                    ${
                      isActive
                        ? "bg-[#075A81] text-white shadow-sm"
                        : "bg-transparent text-[#075A81] hover:text-cyan-900"
                    }`}
                >
                  <div
                    className={`mx-auto w-4/5 border-t ${
                      isActive ? "border-[#B8E8FF]" : "border-[#075A81]"
                    } mb-2`}
                  ></div>
                  <span className="block text-left text-sm md:text-base ml-7">
                    {item.district}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail Outlet */}
          <div className="md:col-span-3 lg:col-span-3 pl-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected.district}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl font-semibold text-cyan-900 mb-3">
                  {selected.name}
                </h3>
                <p className="text-cyan-800 text-sm mb-3">{selected.address}</p>
                <a
                  href={`tel:${selected.phone}`}
                  className="text-cyan-700 font-medium hover:underline"
                >
                  {selected.phone}
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OutletSection;
