import React from "react";

const Daftar = () => {
  return (
    <div className="py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-cyan-900">
          Pendaftaran Agen
        </h1>
        <p className="text-gray-600 mt-4">
          Silakan isi formulir di bawah ini untuk mendaftar sebagai agen resmi
          Moedal Air Mineral.
        </p>
      </div>

      <div className="w-full max-w-3xl mx-auto">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScXwrrJNz7vSux9uPOlTzF_2mPTJG8JKwCCF7tCTiTyUKmFXw/viewform?embedded=true"
          width="100%" // Diubah ke 100%
          height="2180" // Tinggi tetap sesuai embed code Anda
          frameBorder="0" // Atribut HTML diubah ke JSX (camelCase)
          marginHeight="0"
          marginWidth="0"
          className="w-full" // Menambahkan kelas w-full untuk memastikan lebar 100%
        >
          Memuat…
        </iframe>
      </div>
    </div>
  );
};

export default Daftar;