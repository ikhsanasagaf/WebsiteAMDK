import React from "react";

const BannerKontak = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          
          <div className="flex justify-center">
            <img
              src="/assets/man.png"
              alt="Hubungi Kami"
              className="w-full max-w-sm"
            />
          </div>

          <div className="flex flex-col justify-center text-center md:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-cyan-900 mb-8">
              Hubungi Kami
            </h1>

            <div className="space-y-6">
              
              {/* Item Whatsapp */}
              <div className="flex items-center gap-4 justify-center md:justify-start">
                <img
                  src="/assets/whatsapp.png"
                  alt="Whatsapp"
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-sm font-[450] text-cyan-900">Whatsapp</p>
                  <p className="text-lg font-semibold text-cyan-900">
                    +628112680963
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 justify-center md:justify-start">
                <img
                  src="/assets/email.png"
                  alt="Email"
                  className="w-8 h-8"
                />
                <div>
                  <p className="text-sm font-[450] text-cyan-900">Email</p>
                  <p className="text-lg font-semibold text-cyan-900">
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