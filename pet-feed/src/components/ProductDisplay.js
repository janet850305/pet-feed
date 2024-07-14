import React, { useState } from "react";
import Searcher from "./Searcher";
import PetfeedTable from "./PetfeedTable";

const ProductDisplay = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleAddProduct = (productName, ingredients) => {
    setSelectedProducts([
      ...selectedProducts,
      { name: productName, ingredients },
    ]);
  };

  return (
    <div className="display">
      <div className="Search">
        <Searcher onAddProduct={handleAddProduct} />
      </div>

      <PetfeedTable products={selectedProducts} />
    </div>
  );
};

export default ProductDisplay;
