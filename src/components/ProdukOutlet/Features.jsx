import React from "react";

const features = [
  {
    title: "Harga Terjangkau",
    description:
      "Moedal hadir dengan harga yang lebih terjangkau dibandingkan produk sejenis, tanpa mengorbankan kualitas.",
  },
  {
    title: "Desain Botol Praktis",
    description:
      "Botol Moedal dirancang dengan desain praktis yang nyaman digenggam dan mudah dibawa ke mana saja.",
  },
  {
    title: "Mudah Didapat",
    description:
      "Tersedia di berbagai outlet dan bisa dipesan dengan mudah melalui kontak yang disediakan.",
  },
];

const Features = () => {
  return (
    <section className="py-10 px-11 bg-white">
      <div className="container mx-auto flex flex-col items-center space-y-8 mt-25 mb-25">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-[#CCF1FF] text-center rounded-2xl p-15 w-full md:w-4/5 lg:w-3/4 shadow-sm"
          >
            <h3 className="text-cyan-900 text-xl md:text-4xl font-[500] mb-10">
              {item.title}
            </h3>
            <p className="text-cyan-900 text-sm md:text-2xl leading-relaxed px-18">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
