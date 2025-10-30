import React from "react";
import Banner from "../components/ProdukOutlet/Banner";
import ProductList from "../components/ProdukOutlet/ProductList";
import ImageBreakProduk from "../components/ProdukOutlet/ImageBreakProduk";
import Features from "../components/ProdukOutlet/Features";
import OutletSection from "../components/ProdukOutlet/OutletSelection";

const ProdukOutlet = () => {
  return (
    <>
      <Banner />
      <ProductList />
      <ImageBreakProduk />
      <Features />
      <OutletSection />
    </>
  );
};

export default ProdukOutlet;
