import React from "react";

const Daftar = () => {
  return (
    <div className="py-10 px-6 md:py-16">
      
      <div className="text-center mb-8 md:mb-12">
        
        <h1 className="text-3xl md:text-4xl font-bold text-cyan-900 leading-tight">
          Pendaftaran Agen
        </h1>
        
        <p className="text-gray-600 mt-3 md:mt-4 text-sm md:text-base max-w-lg mx-auto">
          Silakan isi formulir di bawah ini untuk mendaftar sebagai agen resmi
          Moedal Air Mineral.
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto rounded-lg overflow-hidden">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScXwrrJNz7vSux9uPOlTzF_2mPTJG8JKwCCF7tCTiTyUKmFXw/viewform?embedded=true"
          width="100%"
          height="2180"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          className="w-full"
        >
          Memuat…
        </iframe>
      </div>
    </div>
  );
};

export default Daftar;