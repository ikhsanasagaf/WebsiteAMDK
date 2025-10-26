import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-[F4F7F5]">
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
        <div className="bg-[#C6F2FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 justify-start">
          <div className="flex justify-center">
            <img
              src="/assets/hydro-power.png"
              alt="Sumber Air Alami"
              className="w-full max-w-xs"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-900 mb-3">
              Sumber Air Alami
            </h3>
            <p className="text-gray-600">
              Air Moedal berasal dari sumber mata air berusia 113 tahun di Kaki
              Gunung Ungaran, yang kualitasnya tetap terjaga hingga saat ini.
              Sumber mata air ini dilindungi untuk menjamin kesegaran dan
              kemurnian air mineral Moedal.
            </p>
          </div>
        </div>

        {/* Card 2: Kesegaran Air Mineral */}
        <div className="bg-[#C6F2FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-bold text-cyan-900 mb-3">
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
              className="w-full max-w-sm" // Dibuat sedikit lebih besar
            />
          </div>
        </div>

        {/* Card 3: Komitmen Kualitas */}
        <div className="bg-[#C6F2FF] rounded-xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex justify-center">
            <img
              src="/assets/diamond2.png"
              alt="Komitmen Kualitas"
              className="w-full max-w-xs"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-cyan-900 mb-3">
              Komitmen Kualitas
            </h3>
            <p className="text-gray-600">
              Sebagai wujud komitmen Perumda Air Minum Tirta Moedal Kota
              Semarang, Air Moedal hadir untuk memenuhi kebutuhan air minum
              dalam kemasan yang berkualitas bagi masyarakat Kota Semarang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;