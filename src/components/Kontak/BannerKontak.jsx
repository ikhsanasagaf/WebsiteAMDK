import React from "react";

const BannerKontak = () => {
  return (
    <section className="py-12 md:py-20 bg-[#F4F7F5]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 md:gap-16">
          {/* === Kolom Gambar === */}
          <div className="flex justify-center mb-6 md:mb-0">
            <img
              src="/assets/man.png"
              alt="Hubungi Kami"
              className="w-40 md:w-3/4 md:max-w-xs object-contain drop-shadow-xl"
            />
          </div>

          {/* === Kolom Konten === */}
          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-3xl md:text-5xl font-bold text-cyan-900 mb-2 md:mb-4">
              Hubungi Kami
            </h1>
            <p className="text-gray-600 mb-8 text-sm md:text-base">
              Kami siap melayani kebutuhan air mineral Anda.
            </p>

            {/* Container Item Kontak */}
            <div className="space-y-4 w-full max-w-md mx-auto md:mx-0">
              {/* Item Whatsapp */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-[#DEF4FF] p-3 rounded-full flex-shrink-0">
                  <img
                    src="/assets/whatsapp.png"
                    alt="Whatsapp"
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Whatsapp
                  </p>
                  <p className="text-sm md:text-lg font-bold text-cyan-900">
                    +62 811-2680-963
                  </p>
                </div>
              </div>

              {/* Item Email */}
              <div className="flex items-center gap-4 p-4 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="bg-[#DEF4FF] p-3 rounded-full flex-shrink-0">
                  <img
                    src="/assets/email.png"
                    alt="Email"
                    className="w-6 h-6"
                  />
                </div>
                <div className="text-left overflow-hidden">
                  <p className="text-xs text-gray-500 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-sm md:text-lg font-bold text-cyan-900 break-all">
                    kontak.airmoedal@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerKontak;
