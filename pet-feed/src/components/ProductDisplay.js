import React, { useState } from "react";
import Searcher from "./Searcher";
import PetfeedTable from "./PetfeedTable";

const ProductDisplay = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (product) => {
    if (!selectedProducts.includes(product)) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  return (
    <div className="display">
      <div className="Search">
        <Searcher onAddProduct={handleAddProduct} />
      </div>
      {selectedProducts.length > 0 && (
        <PetfeedTable products={selectedProducts} />
      )}
    </div>
  );
};

export default ProductDisplay;
