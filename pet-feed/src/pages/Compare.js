import React from "react";
import "../assets/styles/pages/Compare.css";

import Header from "../components/Header";

import Footer from "../components/Footer";

import ProductDisplay from "../components/ProductDisplay";
function Home() {
  return (
    <div className="compare">
      <Header className="header" />

      <ProductDisplay className="productDisplay" />

      <Footer className="footer" />
    </div>
  );
}

export default Home;
